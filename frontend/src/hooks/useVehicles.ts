import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient, apiEndpoints } from '../api/client';

// Types
export interface Vehicle {
  id: number;
  hostId: number;
  make: string;
  model: string;
  year: number;
  type: 'car' | 'truck' | 'trailer' | 'motorcycle' | 'van' | 'suv';
  dailyRate: number;
  location: string;
  latitude?: number;
  longitude?: number;
  description: string;
  features: string[];
  images: string[];
  isAvailable: boolean;
  host: {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface VehicleFilters {
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  location?: string;
  type?: string;
  page?: number;
  limit?: number;
}

export interface CreateVehicleData {
  make: string;
  model: string;
  year: number;
  type: 'car' | 'truck' | 'trailer' | 'motorcycle' | 'van' | 'suv';
  dailyRate: number;
  location: string;
  latitude?: number;
  longitude?: number;
  description: string;
  features: string[];
  images: string[];
}

// Query keys
export const vehicleKeys = {
  all: ['vehicles'] as const,
  lists: () => [...vehicleKeys.all, 'list'] as const,
  list: (filters: VehicleFilters) => [...vehicleKeys.lists(), filters] as const,
  details: () => [...vehicleKeys.all, 'detail'] as const,
  detail: (id: number) => [...vehicleKeys.details(), id] as const,
};

// Hooks
export const useVehicles = (filters: VehicleFilters = {}) => {
  return useQuery({
    queryKey: vehicleKeys.list(filters),
    queryFn: async () => {
      const response = await apiClient.get(apiEndpoints.vehicles.list, {
        params: filters,
      });
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useVehicle = (id: number) => {
  return useQuery({
    queryKey: vehicleKeys.detail(id),
    queryFn: async () => {
      const response = await apiClient.get(apiEndpoints.vehicles.get(id.toString()));
      return response.data;
    },
    enabled: !!id,
  });
};

export const useCreateVehicle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateVehicleData) => {
      const response = await apiClient.post(apiEndpoints.vehicles.create, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: vehicleKeys.all });
    },
  });
};

export const useUpdateVehicle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<CreateVehicleData> }) => {
      const response = await apiClient.put(apiEndpoints.vehicles.update(id.toString()), data);
      return response.data;
    },
    onSuccess: (_: any, variables: { id: number; data: Partial<CreateVehicleData> }) => {
      queryClient.invalidateQueries({ queryKey: vehicleKeys.detail(variables.id) });
      queryClient.invalidateQueries({ queryKey: vehicleKeys.lists() });
    },
  });
};

export const useDeleteVehicle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      const response = await apiClient.delete(apiEndpoints.vehicles.delete(id.toString()));
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: vehicleKeys.all });
    },
  });
};
