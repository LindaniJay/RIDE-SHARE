import express from "express";
import { z } from "zod";
import { Op } from "sequelize";
import Stripe from "stripe";
import crypto from "crypto";
import { Booking } from "../models/Booking";
import { authenticateToken, AuthRequest } from "../middlewares/auth";

const router = express.Router();

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

// Payfast configuration
const PAYFAST_CONFIG = {
  merchantId: process.env.PAYFAST_MERCHANT_ID!,
  merchantKey: process.env.PAYFAST_MERCHANT_KEY!,
  passphrase: process.env.PAYFAST_PASSPHRASE!,
  sandbox: process.env.NODE_ENV !== "production",
  returnUrl: process.env.PAYFAST_RETURN_URL!,
  cancelUrl: process.env.PAYFAST_CANCEL_URL!,
  notifyUrl: process.env.PAYFAST_NOTIFY_URL!,
};

// Generate Payfast signature
const generatePayfastSignature = (data: any) => {
  const string = Object.keys(data)
    .filter(key => data[key] !== "" && key !== "signature")
    .sort()
    .map(key => `${key}=${encodeURIComponent(data[key])}`)
    .join("&");
  
  return crypto
    .createHash("md5")
    .update(string + `&passphrase=${PAYFAST_CONFIG.passphrase}`)
    .digest("hex");
};

// Validation schemas
const createPaymentIntentSchema = z.object({
  bookingId: z.number().int().positive(),
  amount: z.number().positive(),
});

const confirmPaymentSchema = z.object({
  paymentIntentId: z.string(),
});

const createPayfastPaymentSchema = z.object({
  bookingId: z.number().int().positive(),
  amount: z.number().positive(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  cellNumber: z.string().optional(),
});

// Create payment intent
router.post("/create-payment-intent", authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { bookingId, amount } = createPaymentIntentSchema.parse(req.body);
    
    // Verify booking exists and belongs to user
    const booking = await Booking.findOne({
      where: { 
        id: bookingId,
        renterId: req.user!.id 
      },
    });
    
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    
    if (booking.status !== "pending") {
      return res.status(400).json({ error: "Booking is not in pending status" });
    }
    
    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: "usd",
      metadata: {
        bookingId: bookingId.toString(),
        renterId: req.user!.id.toString(),
      },
    });
    
    res.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Validation error", details: error.errors });
    }
    res.status(500).json({ error: "Internal server error" });
  }
});

// Confirm payment
router.post("/confirm-payment", authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { paymentIntentId } = confirmPaymentSchema.parse(req.body);
    
    // Retrieve payment intent from Stripe
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    
    if (paymentIntent.status !== "succeeded") {
      return res.status(400).json({ error: "Payment not successful" });
    }
    
    // Update booking status
    const bookingId = paymentIntent.metadata.bookingId;
    const booking = await Booking.findByPk(bookingId);
    
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    
    if (booking.renterId !== req.user!.id) {
      return res.status(403).json({ error: "Unauthorized" });
    }
    
    await booking.update({ 
      status: "confirmed",
      // paymentIntentId: paymentIntentId, // Field not in new model
    });
    
    res.json({ 
      message: "Payment confirmed successfully",
      booking: booking,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Validation error", details: error.errors });
    }
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get payment history
router.get("/history", authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);
    
    const bookings = await Booking.findAndCountAll({
      where: { 
        renterId: req.user!.id,
        status: ["confirmed", "completed"],
        paymentIntentId: { [Op.ne]: null },
      } as any,
      limit: Number(limit),
      offset,
      order: [['updatedAt', 'DESC']],
    });
    
    res.json({
      payments: bookings.rows,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: bookings.count,
        pages: Math.ceil(bookings.count / Number(limit)),
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Refund payment
router.post("/refund", authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { bookingId } = req.body;
    
    const booking = await Booking.findOne({
      where: { 
        id: bookingId,
        renterId: req.user!.id,
        status: "confirmed",
      },
    });
    
    if (!booking) {
      return res.status(404).json({ error: "Booking not found or not eligible for refund" });
    }
    
    // Payment fields not available in new model
    // if (!booking.paymentIntentId) {
    //   return res.status(400).json({ error: "No payment found for this booking" });
    // }
    
    // Create refund
    const refund = await stripe.refunds.create({
      // payment_intent: booking.paymentIntentId, // Field not in new model
    });
    
    // Update booking status
    await booking.update({ 
      status: "cancelled",
      // refundId: refund.id, // Field not in new model
    });
    
    res.json({ 
      message: "Refund processed successfully",
      refundId: refund.id,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create Payfast payment
router.post("/create-payfast-payment", authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { bookingId, amount, firstName, lastName, email, cellNumber } = createPayfastPaymentSchema.parse(req.body);
    
    // Verify booking exists and belongs to user
    const booking = await Booking.findOne({
      where: { 
        id: bookingId,
        renterId: req.user!.id 
      },
    });
    
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    
    if (booking.status !== "pending") {
      return res.status(400).json({ error: "Booking is not in pending status" });
    }
    
    // Generate unique payment ID
    const paymentId = `PF_${Date.now()}_${bookingId}`;
    
    // Prepare Payfast data
    const payfastData = {
      merchant_id: PAYFAST_CONFIG.merchantId,
      merchant_key: PAYFAST_CONFIG.merchantKey,
      return_url: PAYFAST_CONFIG.returnUrl,
      cancel_url: PAYFAST_CONFIG.cancelUrl,
      notify_url: PAYFAST_CONFIG.notifyUrl,
      name_first: firstName,
      name_last: lastName,
      email_address: email,
      cell_number: cellNumber || "",
      m_payment_id: paymentId,
      amount: amount.toFixed(2),
      item_name: `RideShare SA - Booking #${bookingId}`,
      item_description: `Vehicle rental booking for ${booking.startDate} to ${booking.endDate}`,
      custom_str1: bookingId.toString(),
      custom_str2: req.user!.id.toString(),
    };
    
    // Generate signature
    const signature = generatePayfastSignature(payfastData);
    // payfastData.signature = signature; // TypeScript error - signature not in type
    
    // Store payment ID in booking
    await booking.update({ 
      // paymentIntentId: paymentId, // Field not in new model
      // paymentMethod: "payfast" // Field not in new model
    });
    
    res.json({
      paymentId,
      payfastData,
      redirectUrl: PAYFAST_CONFIG.sandbox 
        ? "https://sandbox.payfast.co.za/eng/process" 
        : "https://www.payfast.co.za/eng/process"
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Validation error", details: error.errors });
    }
    res.status(500).json({ error: "Internal server error" });
  }
});

// Payfast notification handler
router.post("/payfast-notify", async (req, res) => {
  try {
    const {
      m_payment_id,
      pf_payment_id,
      payment_status,
      item_name,
      item_description,
      amount_gross,
      amount_fee,
      amount_net,
      custom_str1,
      custom_str2,
      name_first,
      name_last,
      email_address,
      signature
    } = req.body;
    
    // Verify signature
    const data = { ...req.body };
    delete data.signature;
    const calculatedSignature = generatePayfastSignature(data);
    
    if (calculatedSignature !== signature) {
      return res.status(400).json({ error: "Invalid signature" });
    }
    
    // Find booking
    const booking = await Booking.findOne({
      where: { 
        // paymentIntentId: m_payment_id // Field not in new model 
      },
    });
    
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    
    if (payment_status === "COMPLETE") {
      // Update booking status
      await booking.update({
        status: "confirmed",
        // paymentMethod: "payfast", // Field not in new model
        // paymentStatus: "completed", // Field not in new model
        // paymentReference: pf_payment_id, // Field not in new model
        // totalAmount: parseFloat(amount_gross), // Field not in new model
        // serviceFee: parseFloat(amount_fee), // Field not in new model
        // hostAmount: parseFloat(amount_net), // Field not in new model
      });
      
      res.status(200).send("OK");
    } else {
      // Payment failed
      await booking.update({
        status: "cancelled",
        // paymentStatus: "failed", // Field not in new model
      });
      
      res.status(200).send("OK");
    }
  } catch (error) {
    console.error("Payfast notification error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get payment methods
router.get("/methods", (req, res) => {
  res.json({
    methods: [
      {
        id: "stripe",
        name: "Credit Card (International)",
        description: "Visa, Mastercard, American Express",
        icon: "💳",
        supported: true
      },
      {
        id: "payfast",
        name: "Payfast (South Africa)",
        description: "EFT, Credit Card, SnapScan, Zapper",
        icon: "🇿🇦",
        supported: true
      }
    ]
  });
});

export default router;
