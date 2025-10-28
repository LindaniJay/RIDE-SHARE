import { notificationService } from './notificationService';

export interface CorporateAccount {
  id: string;
  companyName: string;
  registrationNumber: string;
  industry: string;
  size: 'small' | 'medium' | 'large' | 'enterprise';
  contactPerson: {
    name: string;
    email: string;
    phone: string;
    position: string;
  };
  billingAddress: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };
  settings: {
    autoApproval: boolean;
    spendingLimit: number;
    requireApproval: boolean;
    allowedVehicleTypes: string[];
    maxBookingDuration: number;
  };
  status: 'pending' | 'approved' | 'suspended' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface FleetVehicle {
  id: string;
  corporateAccountId: string;
  make: string;
  model: string;
  year: number;
  type: string;
  registrationNumber: string;
  color: string;
  features: string[];
  status: 'active' | 'maintenance' | 'retired' | 'sold';
  location: {
    address: string;
    coordinates: { lat: number; lng: number };
  };
  specifications: {
    engine: string;
    transmission: string;
    fuelType: string;
    seatingCapacity: number;
    luggageCapacity: number;
  };
  maintenance: {
    lastService: string;
    nextService: string;
    mileage: number;
    serviceHistory: Array<{
      date: string;
      type: string;
      cost: number;
      description: string;
    }>;
  };
  insurance: {
    provider: string;
    policyNumber: string;
    expiryDate: string;
    coverage: string[];
  };
  createdAt: string;
  updatedAt: string;
}

export interface Employee {
  id: string;
  corporateAccountId: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  managerId?: string;
  permissions: {
    canBook: boolean;
    canApprove: boolean;
    canManageFleet: boolean;
    canViewReports: boolean;
    spendingLimit?: number;
  };
  status: 'active' | 'inactive' | 'suspended';
  joinedAt: string;
  lastActive: string;
}

export interface FleetBooking {
  id: string;
  corporateAccountId: string;
  employeeId: string;
  vehicleId: string;
  startDate: string;
  endDate: string;
  purpose: string;
  destination: string;
  passengers: number;
  status: 'pending' | 'approved' | 'rejected' | 'active' | 'completed' | 'cancelled';
  approvedBy?: string;
  approvedAt?: string;
  totalCost: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface FleetAnalytics {
  totalVehicles: number;
  activeVehicles: number;
  totalBookings: number;
  activeBookings: number;
  utilizationRate: number;
  totalSpending: number;
  averageBookingDuration: number;
  popularVehicles: Array<{
    vehicleId: string;
    make: string;
    model: string;
    bookings: number;
  }>;
  spendingByDepartment: Array<{
    department: string;
    amount: number;
    percentage: number;
  }>;
  monthlyTrends: Array<{
    month: string;
    bookings: number;
    spending: number;
    utilization: number;
  }>;
}

export interface FleetTracking {
  vehicleId: string;
  location: {
    lat: number;
    lng: number;
    address: string;
    timestamp: string;
  };
  status: 'parked' | 'moving' | 'idle';
  speed: number;
  heading: number;
  fuelLevel?: number;
  batteryLevel?: number;
  engineStatus: 'on' | 'off';
  lastUpdate: string;
}

export interface MaintenanceSchedule {
  id: string;
  vehicleId: string;
  type: 'routine' | 'repair' | 'inspection' | 'cleaning';
  description: string;
  scheduledDate: string;
  estimatedDuration: number; // in hours
  estimatedCost: number;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignedTo?: string;
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: string;
}

export interface ExpenseReport {
  id: string;
  corporateAccountId: string;
  employeeId: string;
  period: {
    startDate: string;
    endDate: string;
  };
  totalAmount: number;
  breakdown: {
    vehicleRentals: number;
    fuel: number;
    maintenance: number;
    insurance: number;
    other: number;
  };
  bookings: Array<{
    bookingId: string;
    vehicle: string;
    date: string;
    amount: number;
    purpose: string;
  }>;
  status: 'draft' | 'submitted' | 'approved' | 'rejected';
  submittedAt?: string;
  approvedBy?: string;
  approvedAt?: string;
  createdAt: string;
}

class FleetManagementService {
  private readonly API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

  /**
   * Create corporate account
   */
  async createCorporateAccount(accountData: Omit<CorporateAccount, 'id' | 'createdAt' | 'updatedAt'>): Promise<CorporateAccount> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/fleet/corporate-accounts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(accountData)
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          'Corporate Account Created',
          'Your corporate account has been created and is pending approval.',
          'info'
        );
      }

      return data.account;
    } catch (error) {
      console.error('Error creating corporate account:', error);
      throw error;
    }
  }

  /**
   * Get corporate account details
   */
  async getCorporateAccount(accountId: string): Promise<CorporateAccount | null> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/fleet/corporate-accounts/${accountId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.account;
    } catch (error) {
      console.error('Error getting corporate account:', error);
      return null;
    }
  }

  /**
   * Update corporate account settings
   */
  async updateCorporateAccount(accountId: string, updates: Partial<CorporateAccount>): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/fleet/corporate-accounts/${accountId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(updates)
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating corporate account:', error);
      throw error;
    }
  }

  /**
   * Add fleet vehicle
   */
  async addFleetVehicle(vehicleData: Omit<FleetVehicle, 'id' | 'createdAt' | 'updatedAt'>): Promise<FleetVehicle> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/fleet/vehicles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(vehicleData)
      });

      const data = await response.json();
      return data.vehicle;
    } catch (error) {
      console.error('Error adding fleet vehicle:', error);
      throw error;
    }
  }

  /**
   * Get fleet vehicles
   */
  async getFleetVehicles(corporateAccountId: string): Promise<FleetVehicle[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/fleet/vehicles?corporateAccountId=${corporateAccountId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.vehicles || [];
    } catch (error) {
      console.error('Error getting fleet vehicles:', error);
      return [];
    }
  }

  /**
   * Update fleet vehicle
   */
  async updateFleetVehicle(vehicleId: string, updates: Partial<FleetVehicle>): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/fleet/vehicles/${vehicleId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(updates)
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating fleet vehicle:', error);
      throw error;
    }
  }

  /**
   * Add employee
   */
  async addEmployee(employeeData: Omit<Employee, 'id' | 'joinedAt' | 'lastActive'>): Promise<Employee> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/fleet/employees`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(employeeData)
      });

      const data = await response.json();
      return data.employee;
    } catch (error) {
      console.error('Error adding employee:', error);
      throw error;
    }
  }

  /**
   * Get employees
   */
  async getEmployees(corporateAccountId: string): Promise<Employee[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/fleet/employees?corporateAccountId=${corporateAccountId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.employees || [];
    } catch (error) {
      console.error('Error getting employees:', error);
      return [];
    }
  }

  /**
   * Update employee permissions
   */
  async updateEmployeePermissions(employeeId: string, permissions: Partial<Employee['permissions']>): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/fleet/employees/${employeeId}/permissions`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(permissions)
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating employee permissions:', error);
      throw error;
    }
  }

  /**
   * Create fleet booking
   */
  async createFleetBooking(bookingData: Omit<FleetBooking, 'id' | 'createdAt' | 'updatedAt'>): Promise<FleetBooking> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/fleet/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(bookingData)
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          'Fleet Booking Created',
          'Your fleet booking has been submitted for approval.',
          'info'
        );
      }

      return data.booking;
    } catch (error) {
      console.error('Error creating fleet booking:', error);
      throw error;
    }
  }

  /**
   * Get fleet bookings
   */
  async getFleetBookings(
    corporateAccountId: string,
    filters?: {
      status?: string;
      employeeId?: string;
      vehicleId?: string;
      startDate?: string;
      endDate?: string;
    }
  ): Promise<FleetBooking[]> {
    try {
      const params = new URLSearchParams();
      params.append('corporateAccountId', corporateAccountId);
      
      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value) params.append(key, value);
        });
      }

      const response = await fetch(`${this.API_BASE_URL}/fleet/bookings?${params.toString()}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.bookings || [];
    } catch (error) {
      console.error('Error getting fleet bookings:', error);
      return [];
    }
  }

  /**
   * Approve/reject fleet booking
   */
  async updateFleetBookingStatus(
    bookingId: string,
    status: 'approved' | 'rejected',
    notes?: string
  ): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/fleet/bookings/${bookingId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ status, notes })
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          `Booking ${status.charAt(0).toUpperCase() + status.slice(1)}`,
          `The fleet booking has been ${status}.`,
          status === 'approved' ? 'info' : 'warning'
        );
      }

      return data;
    } catch (error) {
      console.error('Error updating fleet booking status:', error);
      throw error;
    }
  }

  /**
   * Get fleet analytics
   */
  async getFleetAnalytics(corporateAccountId: string, period?: { start: string; end: string }): Promise<FleetAnalytics> {
    try {
      const params = new URLSearchParams();
      params.append('corporateAccountId', corporateAccountId);
      
      if (period) {
        params.append('startDate', period.start);
        params.append('endDate', period.end);
      }

      const response = await fetch(`${this.API_BASE_URL}/fleet/analytics?${params.toString()}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.analytics;
    } catch (error) {
      console.error('Error getting fleet analytics:', error);
      return {
        totalVehicles: 0,
        activeVehicles: 0,
        totalBookings: 0,
        activeBookings: 0,
        utilizationRate: 0,
        totalSpending: 0,
        averageBookingDuration: 0,
        popularVehicles: [],
        spendingByDepartment: [],
        monthlyTrends: []
      };
    }
  }

  /**
   * Get fleet tracking data
   */
  async getFleetTracking(corporateAccountId: string): Promise<FleetTracking[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/fleet/tracking?corporateAccountId=${corporateAccountId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.tracking || [];
    } catch (error) {
      console.error('Error getting fleet tracking:', error);
      return [];
    }
  }

  /**
   * Schedule maintenance
   */
  async scheduleMaintenance(maintenanceData: Omit<MaintenanceSchedule, 'id' | 'createdAt'>): Promise<MaintenanceSchedule> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/fleet/maintenance`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(maintenanceData)
      });

      const data = await response.json();
      return data.maintenance;
    } catch (error) {
      console.error('Error scheduling maintenance:', error);
      throw error;
    }
  }

  /**
   * Get maintenance schedules
   */
  async getMaintenanceSchedules(corporateAccountId: string): Promise<MaintenanceSchedule[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/fleet/maintenance?corporateAccountId=${corporateAccountId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.schedules || [];
    } catch (error) {
      console.error('Error getting maintenance schedules:', error);
      return [];
    }
  }

  /**
   * Generate expense report
   */
  async generateExpenseReport(
    corporateAccountId: string,
    employeeId: string,
    period: { startDate: string; endDate: string }
  ): Promise<ExpenseReport> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/fleet/expense-reports`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          corporateAccountId,
          employeeId,
          period
        })
      });

      const data = await response.json();
      return data.report;
    } catch (error) {
      console.error('Error generating expense report:', error);
      throw error;
    }
  }

  /**
   * Get expense reports
   */
  async getExpenseReports(corporateAccountId: string): Promise<ExpenseReport[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/fleet/expense-reports?corporateAccountId=${corporateAccountId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.reports || [];
    } catch (error) {
      console.error('Error getting expense reports:', error);
      return [];
    }
  }

  /**
   * Get API access credentials
   */
  async getAPICredentials(corporateAccountId: string): Promise<{
    apiKey: string;
    secretKey: string;
    endpoints: string[];
    rateLimits: {
      requestsPerMinute: number;
      requestsPerDay: number;
    };
    documentation: string;
  }> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/fleet/api-credentials?corporateAccountId=${corporateAccountId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.credentials;
    } catch (error) {
      console.error('Error getting API credentials:', error);
      throw error;
    }
  }

  /**
   * Calculate fleet utilization
   */
  calculateFleetUtilization(vehicles: FleetVehicle[], bookings: FleetBooking[]): {
    totalVehicles: number;
    activeVehicles: number;
    utilizationRate: number;
    averageBookingDuration: number;
    mostUsedVehicle: string;
    leastUsedVehicle: string;
  } {
    const totalVehicles = vehicles.length;
    const activeVehicles = vehicles.filter(v => v.status === 'active').length;
    
    const vehicleUsage = vehicles.map(vehicle => {
      const vehicleBookings = bookings.filter(b => b.vehicleId === vehicle.id && b.status === 'completed');
      const totalDays = vehicleBookings.reduce((sum, booking) => {
        const start = new Date(booking.startDate);
        const end = new Date(booking.endDate);
        return sum + Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      }, 0);
      
      return {
        vehicleId: vehicle.id,
        make: vehicle.make,
        model: vehicle.model,
        usage: totalDays
      };
    });

    const totalUsage = vehicleUsage.reduce((sum, v) => sum + v.usage, 0);
    const utilizationRate = totalVehicles > 0 ? (totalUsage / (totalVehicles * 30)) * 100 : 0; // Assuming 30 days in month
    
    const averageBookingDuration = bookings.length > 0 ? totalUsage / bookings.length : 0;
    
    const sortedUsage = vehicleUsage.sort((a, b) => b.usage - a.usage);
    const mostUsedVehicle = sortedUsage[0] ? `${sortedUsage[0].make} ${sortedUsage[0].model}` : 'N/A';
    const leastUsedVehicle = sortedUsage[sortedUsage.length - 1] ? 
      `${sortedUsage[sortedUsage.length - 1].make} ${sortedUsage[sortedUsage.length - 1].model}` : 'N/A';

    return {
      totalVehicles,
      activeVehicles,
      utilizationRate: Math.round(utilizationRate * 100) / 100,
      averageBookingDuration: Math.round(averageBookingDuration * 100) / 100,
      mostUsedVehicle,
      leastUsedVehicle
    };
  }
}

export const fleetManagementService = new FleetManagementService();
