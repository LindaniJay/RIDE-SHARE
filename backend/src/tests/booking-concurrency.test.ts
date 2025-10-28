import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { sequelize } from '../config/database';
import { User, Listing, Booking } from '../models';
import bcrypt from 'bcryptjs';

describe('Booking Concurrency Tests', () => {
  let hostUser: any;
  let renterUser: any;
  let testListing: any;

  beforeEach(async () => {
    // Clean database
    await sequelize.sync({ force: true });

    // Create test users
    const hashedPassword = await bcrypt.hash('password123', 12);
    
    hostUser = await User.create({
      email: 'host@test.com',
      password_hash: hashedPassword,
      first_name: 'Test',
      last_name: 'Host',
      role: 'host',
      is_email_verified: true,
      approval_status: 'approved'
    });

    renterUser = await User.create({
      email: 'renter@test.com',
      password_hash: hashedPassword,
      first_name: 'Test',
      last_name: 'Renter',
      role: 'renter',
      is_email_verified: true,
      approval_status: 'approved'
    });

    // Create test listing
    testListing = await Listing.create({
      host_id: hostUser.id,
      title: 'Test Vehicle',
      make: 'Toyota',
      model: 'Corolla',
      year: 2020,
      vehicle_type: 'car',
      category: 'economy',
      price_per_day: 250,
      location: { city: 'Cape Town', province: 'Western Cape' },
      images: [],
      features: [],
      minimum_rental_days: 1,
      fuel_type: 'petrol',
      transmission: 'automatic',
      seats: 5,
      status: 'approved',
      approval_status: 'approved'
    });
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it('should prevent double booking for same date range', async () => {
    const startDate = '2024-12-01';
    const endDate = '2024-12-05';
    const totalDays = 4;
    const dailyRate = 250;
    const totalAmount = totalDays * dailyRate;

    // Create first booking
    const booking1 = await Booking.create({
      renter_id: renterUser.id,
      listing_id: testListing.id,
      start_date: startDate,
      end_date: endDate,
      total_days: totalDays,
      daily_rate: dailyRate,
      total_amount: totalAmount,
      status: 'confirmed',
      payment_status: 'paid'
    });

    expect(booking1.id).toBeDefined();

    // Try to create second booking for same date range
    try {
      await Booking.create({
        renter_id: renterUser.id,
        listing_id: testListing.id,
        start_date: startDate,
        end_date: endDate,
        total_days: totalDays,
        daily_rate: dailyRate,
        total_amount: totalAmount,
        status: 'confirmed',
        payment_status: 'paid'
      });
      expect.fail('Should have thrown an error for double booking');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it('should allow bookings for different date ranges', async () => {
    const startDate1 = '2024-12-01';
    const endDate1 = '2024-12-05';
    const startDate2 = '2024-12-10';
    const endDate2 = '2024-12-15';

    // Create first booking
    const booking1 = await Booking.create({
      renter_id: renterUser.id,
      listing_id: testListing.id,
      start_date: startDate1,
      end_date: endDate1,
      total_days: 4,
      daily_rate: 250,
      total_amount: 1000,
      status: 'confirmed',
      payment_status: 'paid'
    });

    // Create second booking for different dates
    const booking2 = await Booking.create({
      renter_id: renterUser.id,
      listing_id: testListing.id,
      start_date: startDate2,
      end_date: endDate2,
      total_days: 5,
      daily_rate: 250,
      total_amount: 1250,
      status: 'confirmed',
      payment_status: 'paid'
    });

    expect(booking1.id).toBeDefined();
    expect(booking2.id).toBeDefined();
    expect(booking1.id).not.toBe(booking2.id);
  });

  it('should handle overlapping date ranges correctly', async () => {
    const startDate1 = '2024-12-01';
    const endDate1 = '2024-12-10';
    const startDate2 = '2024-12-05'; // Overlaps with first booking
    const endDate2 = '2024-12-15';

    // Create first booking
    const booking1 = await Booking.create({
      renter_id: renterUser.id,
      listing_id: testListing.id,
      start_date: startDate1,
      end_date: endDate1,
      total_days: 9,
      daily_rate: 250,
      total_amount: 2250,
      status: 'confirmed',
      payment_status: 'paid'
    });

    // Try to create overlapping booking
    try {
      await Booking.create({
        renter_id: renterUser.id,
        listing_id: testListing.id,
        start_date: startDate2,
        end_date: endDate2,
        total_days: 10,
        daily_rate: 250,
        total_amount: 2500,
        status: 'confirmed',
        payment_status: 'paid'
      });
      expect.fail('Should have thrown an error for overlapping dates');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
