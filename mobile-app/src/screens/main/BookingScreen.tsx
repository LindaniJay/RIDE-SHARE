import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Calendar } from 'react-native-calendars';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { RootStackParamList, Vehicle, BookingForm } from '../../types/navigation';

type BookingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Booking'>;
type BookingScreenRouteProp = RouteProp<RootStackParamList, 'Booking'>;

const BookingScreen: React.FC = () => {
  const navigation = useNavigation<BookingScreenNavigationProp>();
  const route = useRoute<BookingScreenRouteProp>();
  const { user } = useAuth();
  const { theme } = useTheme();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [bookingData, setBookingData] = useState<BookingForm>({
    vehicleId: route.params.vehicleId,
    startDate: '',
    endDate: '',
    pickupLocation: '',
    returnLocation: '',
    specialRequests: '',
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const totalSteps = 4;

  useEffect(() => {
    loadVehicle();
  }, []);

  const loadVehicle = async () => {
    try {
      // Mock data - replace with actual API call
      const mockVehicle: Vehicle = {
        id: route.params.vehicleId,
        hostId: 'host1',
        make: 'Toyota',
        model: 'Corolla',
        year: 2022,
        category: 'sedan',
        pricePerDay: 450,
        location: {
          address: 'Cape Town CBD',
          city: 'Cape Town',
          province: 'Western Cape',
          coordinates: { latitude: -33.9249, longitude: 18.4241 },
        },
        images: ['https://via.placeholder.com/300x200'],
        features: ['AC', 'GPS', 'Bluetooth'],
        fuelType: 'petrol',
        transmission: 'automatic',
        seatingCapacity: 5,
        isAvailable: true,
        rating: 4.8,
        totalBookings: 45,
        createdAt: '2023-01-01',
        updatedAt: '2023-01-01',
      };
      setVehicle(mockVehicle);
    } catch (error) {
      console.error('Error loading vehicle:', error);
      Alert.alert('Error', 'Failed to load vehicle details');
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      // Mock booking submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      navigation.navigate('BookingConfirmation', { 
        bookingId: 'booking_' + Date.now() 
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to create booking');
    } finally {
      setSubmitting(false);
    }
  };

  const calculateTotalPrice = () => {
    if (!bookingData.startDate || !bookingData.endDate || !vehicle) return 0;
    
    const startDate = new Date(bookingData.startDate);
    const endDate = new Date(bookingData.endDate);
    const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    
    return days * vehicle.pricePerDay;
  };

  const renderStepIndicator = () => (
    <View style={styles.stepIndicator}>
      {Array.from({ length: totalSteps }, (_, index) => (
        <View
          key={index}
          style={[
            styles.stepDot,
            {
              backgroundColor: index + 1 <= currentStep ? theme.colors.primary : theme.colors.border,
            },
          ]}
        />
      ))}
    </View>
  );

  const renderStep1 = () => (
    <View style={styles.stepContent}>
      <Text style={[styles.stepTitle, { color: theme.colors.text }]}>
        Select Dates
      </Text>
      
      {vehicle && (
        <View style={[styles.vehicleCard, { backgroundColor: theme.colors.surface }]}>
          <Image source={{ uri: vehicle.images[0] }} style={styles.vehicleImage} />
          <View style={styles.vehicleInfo}>
            <Text style={[styles.vehicleTitle, { color: theme.colors.text }]}>
              {vehicle.year} {vehicle.make} {vehicle.model}
            </Text>
            <Text style={[styles.vehiclePrice, { color: theme.colors.primary }]}>
              R{vehicle.pricePerDay}/day
            </Text>
          </View>
        </View>
      )}

      <Calendar
        onDayPress={(day) => {
          if (!bookingData.startDate || bookingData.endDate) {
            setBookingData(prev => ({ ...prev, startDate: day.dateString, endDate: '' }));
          } else {
            setBookingData(prev => ({ ...prev, endDate: day.dateString }));
          }
        }}
        markedDates={{
          [bookingData.startDate]: { selected: true, startingDay: true, color: theme.colors.primary },
          [bookingData.endDate]: { selected: true, endingDay: true, color: theme.colors.primary },
        }}
        theme={{
          selectedDayBackgroundColor: theme.colors.primary,
          selectedDayTextColor: 'white',
          todayTextColor: theme.colors.primary,
          dayTextColor: theme.colors.text,
          monthTextColor: theme.colors.text,
          arrowColor: theme.colors.primary,
        }}
      />
    </View>
  );

  const renderStep2 = () => (
    <View style={styles.stepContent}>
      <Text style={[styles.stepTitle, { color: theme.colors.text }]}>
        Pickup & Return Locations
      </Text>
      
      <View style={styles.locationSection}>
        <Text style={[styles.locationLabel, { color: theme.colors.text }]}>
          Pickup Location
        </Text>
        <TouchableOpacity style={[styles.locationButton, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border }]}>
          <Icon name="location-on" size={20} color={theme.colors.primary} />
          <Text style={[styles.locationText, { color: theme.colors.text }]}>
            {bookingData.pickupLocation || 'Select pickup location'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.locationSection}>
        <Text style={[styles.locationLabel, { color: theme.colors.text }]}>
          Return Location
        </Text>
        <TouchableOpacity style={[styles.locationButton, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border }]}>
          <Icon name="location-on" size={20} color={theme.colors.primary} />
          <Text style={[styles.locationText, { color: theme.colors.text }]}>
            {bookingData.returnLocation || 'Select return location'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderStep3 = () => (
    <View style={styles.stepContent}>
      <Text style={[styles.stepTitle, { color: theme.colors.text }]}>
        Special Requests
      </Text>
      
      <View style={styles.specialRequestsSection}>
        <Text style={[styles.specialRequestsLabel, { color: theme.colors.text }]}>
          Any special requests or notes?
        </Text>
        <TouchableOpacity style={[styles.specialRequestsButton, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border }]}>
          <Icon name="note-add" size={20} color={theme.colors.primary} />
          <Text style={[styles.specialRequestsText, { color: theme.colors.textSecondary }]}>
            Add special requests (optional)
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderStep4 = () => (
    <View style={styles.stepContent}>
      <Text style={[styles.stepTitle, { color: theme.colors.text }]}>
        Review & Confirm
      </Text>
      
      <View style={[styles.summaryCard, { backgroundColor: theme.colors.surface }]}>
        <Text style={[styles.summaryTitle, { color: theme.colors.text }]}>
          Booking Summary
        </Text>
        
        <View style={styles.summaryRow}>
          <Text style={[styles.summaryLabel, { color: theme.colors.textSecondary }]}>
            Vehicle
          </Text>
          <Text style={[styles.summaryValue, { color: theme.colors.text }]}>
            {vehicle?.year} {vehicle?.make} {vehicle?.model}
          </Text>
        </View>
        
        <View style={styles.summaryRow}>
          <Text style={[styles.summaryLabel, { color: theme.colors.textSecondary }]}>
            Duration
          </Text>
          <Text style={[styles.summaryValue, { color: theme.colors.text }]}>
            {bookingData.startDate} to {bookingData.endDate}
          </Text>
        </View>
        
        <View style={styles.summaryRow}>
          <Text style={[styles.summaryLabel, { color: theme.colors.textSecondary }]}>
            Daily Rate
          </Text>
          <Text style={[styles.summaryValue, { color: theme.colors.text }]}>
            R{vehicle?.pricePerDay}
          </Text>
        </View>
        
        <View style={[styles.summaryRow, styles.totalRow]}>
          <Text style={[styles.totalLabel, { color: theme.colors.text }]}>
            Total
          </Text>
          <Text style={[styles.totalValue, { color: theme.colors.primary }]}>
            R{calculateTotalPrice()}
          </Text>
        </View>
      </View>
    </View>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      default:
        return renderStep1();
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <View style={styles.loadingContainer}>
          <Text style={[styles.loadingText, { color: theme.colors.text }]}>
            Loading vehicle details...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView style={styles.scrollView}>
        {renderStepIndicator()}
        {renderCurrentStep()}
      </ScrollView>

      <View style={[styles.footer, { backgroundColor: theme.colors.surface, borderTopColor: theme.colors.border }]}>
        <View style={styles.footerButtons}>
          {currentStep > 1 && (
            <TouchableOpacity
              onPress={handlePrevious}
              style={[styles.previousButton, { borderColor: theme.colors.border }]}
            >
              <Text style={[styles.previousButtonText, { color: theme.colors.text }]}>
                Previous
              </Text>
            </TouchableOpacity>
          )}
          
          <TouchableOpacity
            onPress={currentStep === totalSteps ? handleSubmit : handleNext}
            disabled={submitting}
            style={[styles.nextButton, { backgroundColor: theme.colors.primary, opacity: submitting ? 0.7 : 1 }]}
          >
            <Text style={styles.nextButtonText}>
              {submitting ? 'Processing...' : currentStep === totalSteps ? 'Confirm Booking' : 'Next'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
  },
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  stepDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 8,
  },
  stepContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  stepTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  vehicleCard: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  vehicleImage: {
    width: 80,
    height: 60,
    borderRadius: 8,
  },
  vehicleInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  vehicleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  vehiclePrice: {
    fontSize: 16,
    fontWeight: '600',
  },
  locationSection: {
    marginBottom: 24,
  },
  locationLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  locationText: {
    marginLeft: 12,
    fontSize: 16,
  },
  specialRequestsSection: {
    marginBottom: 24,
  },
  specialRequestsLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  specialRequestsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  specialRequestsText: {
    marginLeft: 12,
    fontSize: 16,
  },
  summaryCard: {
    padding: 20,
    borderRadius: 12,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 16,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 12,
    marginTop: 8,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    borderTopWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  previousButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    marginRight: 12,
  },
  previousButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  nextButton: {
    flex: 2,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookingScreen;
