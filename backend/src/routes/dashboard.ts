import express from "express";
import { authenticateToken, AuthRequest } from "../middlewares/auth";
import { Booking } from "../models/Booking";
import { Vehicle } from "../models/Vehicle";
import { User } from "../models/User";
import { Op } from "sequelize";

const router = express.Router();

// Get renter dashboard stats
router.get("/renter", authenticateToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.user!.id;
    
    // Get booking statistics
    const totalBookings = await Booking.count({
      where: { renterId: userId }
    });
    
    const activeBookings = await Booking.count({
      where: { 
        renterId: userId,
        status: ["pending", "confirmed"]
      }
    });
    
    const completedBookings = await Booking.count({
      where: { 
        renterId: userId,
        status: "completed"
      }
    });
    
    // Get total spent
    const totalSpent = await Booking.sum('totalPrice', {
      where: { 
        renterId: userId,
        status: "completed"
      }
    }) || 0;
    
    // Get recent bookings
    const recentBookings = await Booking.findAll({
      where: { renterId: userId },
      include: [
        {
          model: Vehicle,
          as: "vehicle",
        },
      ],
      order: [['createdAt', 'DESC']],
      limit: 5,
    });
    
    res.json({
      stats: {
        totalBookings,
        activeBookings,
        completedBookings,
        totalSpent: parseFloat(totalSpent.toString()),
      },
      recentBookings,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get host dashboard stats
router.get("/host", authenticateToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.user!.id;
    
    // Get vehicle statistics
    const totalVehicles = await Vehicle.count({
      where: { hostId: userId }
    });
    
    const availableVehicles = await Vehicle.count({
      where: { 
        hostId: userId,
        isAvailable: true
      }
    });
    
    // Get booking statistics for host's vehicles
    const totalBookings = await Booking.count({
      include: [
        {
          model: Vehicle,
          as: "vehicle",
          where: { hostId: userId }
        }
      ]
    });
    
    const upcomingBookings = await Booking.count({
      where: {
        status: "confirmed",
        startDate: { [Op.gte]: new Date() }
      },
      include: [
        {
          model: Vehicle,
          as: "vehicle",
          where: { hostId: userId }
        }
      ]
    });
    
    // Get total earnings
    const hostVehicles = await Vehicle.findAll({
      where: { hostId: userId },
      attributes: ['id']
    });
    const vehicleIds = hostVehicles.map(v => v.id);
    
    const totalEarnings = await Booking.sum('totalPrice', {
      where: {
        status: "completed",
        listingId: { [Op.in]: vehicleIds }
      }
    }) || 0;
    
    // Get recent bookings for host's vehicles
    const recentBookings = await Booking.findAll({
      include: [
        {
          model: Vehicle,
          as: "vehicle",
          where: { hostId: userId }
        },
        {
          model: User,
          as: "user",
        }
      ],
      order: [['createdAt', 'DESC']],
      limit: 5,
    });
    
    res.json({
      stats: {
        totalVehicles,
        availableVehicles,
        totalBookings,
        upcomingBookings,
        totalEarnings: parseFloat(totalEarnings.toString()),
      },
      recentBookings,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get admin dashboard stats
router.get("/admin", authenticateToken, async (req: AuthRequest, res) => {
  try {
    // Check if user is admin
    if (req.user!.role !== "admin") {
      return res.status(403).json({ error: "Admin access required" });
    }
    
    // Get platform statistics
    const totalUsers = await User.count();
    const totalVehicles = await Vehicle.count();
    const totalBookings = await Booking.count();
    
    const activeUsers = await User.count({
      where: {
        [Op.or]: [
          { role: "renter" },
          { role: "host" }
        ]
      }
    });
    
    // Get recent activity
    const recentUsers = await User.findAll({
      order: [['createdAt', 'DESC']],
      limit: 5,
    });
    
    const recentBookings = await Booking.findAll({
      include: [
        {
          model: Vehicle,
          as: "vehicle",
        },
        {
          model: User,
          as: "user",
        }
      ],
      order: [['createdAt', 'DESC']],
      limit: 5,
    });
    
    res.json({
      stats: {
        totalUsers,
        activeUsers,
        totalVehicles,
        totalBookings,
      },
      recentUsers,
      recentBookings,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
