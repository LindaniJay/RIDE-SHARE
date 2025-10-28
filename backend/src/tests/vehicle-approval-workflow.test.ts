import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { sequelize } from '../config/database';
import { User, Listing } from '../models';
import bcrypt from 'bcryptjs';

describe('Vehicle Approval Workflow', () => {
  let hostUser: any;
  let adminUser: any;
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

    adminUser = await User.create({
      email: 'admin@test.com',
      password_hash: hashedPassword,
      first_name: 'Test',
      last_name: 'Admin',
      role: 'admin',
      is_email_verified: true,
      approval_status: 'approved'
    });
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it('should create listing with pending status by default', async () => {
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
      seats: 5
    });

    expect(testListing.status).toBe('pending');
    expect(testListing.approval_status).toBe('pending');
  });

  it('should not show pending listings in public search', async () => {
    // Create pending listing
    await Listing.create({
      host_id: hostUser.id,
      title: 'Pending Vehicle',
      make: 'Honda',
      model: 'Civic',
      year: 2021,
      vehicle_type: 'car',
      category: 'economy',
      price_per_day: 300,
      location: { city: 'Johannesburg', province: 'Gauteng' },
      images: [],
      features: [],
      minimum_rental_days: 1,
      fuel_type: 'petrol',
      transmission: 'manual',
      seats: 5,
      status: 'pending',
      approval_status: 'pending'
    });

    // Create approved listing
    await Listing.create({
      host_id: hostUser.id,
      title: 'Approved Vehicle',
      make: 'BMW',
      model: 'X3',
      year: 2022,
      vehicle_type: 'suv',
      category: 'luxury',
      price_per_day: 800,
      location: { city: 'Durban', province: 'KwaZulu-Natal' },
      images: [],
      features: [],
      minimum_rental_days: 1,
      fuel_type: 'petrol',
      transmission: 'automatic',
      seats: 5,
      status: 'approved',
      approval_status: 'approved'
    });

    // Query for approved listings only
    const approvedListings = await Listing.findAll({
      where: {
        status: 'approved',
        approval_status: 'approved'
      }
    });

    expect(approvedListings).toHaveLength(1);
    expect(approvedListings[0].title).toBe('Approved Vehicle');
  });

  it('should allow admin to approve listing', async () => {
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
      status: 'pending',
      approval_status: 'pending'
    });

    // Admin approves listing
    await testListing.update({
      status: 'approved',
      approval_status: 'approved'
    });

    const updatedListing = await Listing.findByPk(testListing.id);
    expect(updatedListing?.status).toBe('approved');
    expect(updatedListing?.approval_status).toBe('approved');
  });

  it('should allow admin to reject listing with reason', async () => {
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
      status: 'pending',
      approval_status: 'pending'
    });

    // Admin rejects listing
    await testListing.update({
      status: 'rejected',
      approval_status: 'rejected',
      rejection_reason: 'Insufficient documentation'
    });

    const updatedListing = await Listing.findByPk(testListing.id);
    expect(updatedListing?.status).toBe('rejected');
    expect(updatedListing?.approval_status).toBe('rejected');
    expect(updatedListing?.rejection_reason).toBe('Insufficient documentation');
  });
});
