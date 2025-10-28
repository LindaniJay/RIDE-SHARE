import express from 'express';
import { sequelize } from '../config/database';
import { Booking } from '../models/Booking';
import { EnhancedVehicle } from '../models/EnhancedVehicle';
import { authenticateToken as auth } from '../middleware/auth';
import { Op } from 'sequelize';

const router = express.Router();

router.post('/', auth, async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const { vehicleId, start, end } = req.body;
    // check vehicle exists and is approved
    const vehicle = await EnhancedVehicle.findByPk(vehicleId, { transaction: t });
    if (!vehicle) { 
      await t.rollback(); 
      return res.status(404).json({ error: 'Vehicle not found' }); 
    }
    if (vehicle.listingStatus !== 'approved') { 
      await t.rollback(); 
      return res.status(400).json({ error: 'Vehicle not available' }); 
    }
    // check overlapping booking
    const overlapping = await Booking.findOne({ 
      where: { 
        vehicleId, 
        startDate: { [Op.lte]: end }, 
        endDate: { [Op.gte]: start } 
      }, 
      transaction: t 
    });
    if (overlapping) { 
      await t.rollback(); 
      return res.status(409).json({ error: 'Vehicle already booked for those dates' }); 
    }
    const booking = await Booking.create({
      booking_id: `booking-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      vehicleId,
      renterId: Number(req.user!.id) || 0,
      hostId: vehicle.hostId,
      startDate: start,
      endDate: end,
      totalPrice: 0,
      status: 'approved',
      paymentStatus: 'pending',
      listingId: vehicleId
    }, { transaction: t });
    await t.commit();
    res.status(201).json({ booking });
  } catch (err) { 
    await t.rollback(); 
    next(err); 
  }
});

export default router;


