import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { RootStackParamList, Booking } from '../../types/navigation';

type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MainTabs'>;

const DashboardScreen: React.FC = () => {
  const navigation = useNavigation<DashboardScreenNavigationProp>();
  const { user } = useAuth();
  const { theme } = useTheme();
  
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [stats, setStats] = useState({
    totalBookings: 0,
    activeBookings: 0,
    completedBookings: 0,
    totalSpent: 0,
  });

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      // Mock data - replace with actual API calls
      const mockBookings: Booking[] = [
        {
          id: '1',
          vehicleId: 'vehicle1',
          renterId: user?.id || 'user1',
          hostId: 'host1',
          startDate: '2024-01-15',
          endDate: '2024-01-17',
          totalPrice: 900,
          status: 'confirmed',
          pickupLocation: 'Cape Town CBD',
          returnLocation: 'Cape Town CBD',
          createdAt: '2024-01-10',
          updatedAt: '2024-01-10',
        },
        {
          id: '2',
          vehicleId: 'vehicle2',
          renterId: user?.id || 'user1',
          hostId: 'host2',
          startDate: '2024-01-20',
          endDate: '2024-01-22',
          totalPrice: 1300,
          status: 'active',
          pickupLocation: 'Johannesburg',
          returnLocation: 'Johannesburg',
          createdAt: '2024-01-15',
          updatedAt: '2024-01-15',
        },
      ];

      setBookings(mockBookings);
      
      const mockStats = {
        totalBookings: mockBookings.length,
        activeBookings: mockBookings.filter(b => b.status === 'active').length,
        completedBookings: mockBookings.filter(b => b.status === 'completed').length,
        totalSpent: mockBookings.reduce((sum, b) => sum + b.totalPrice, 0),
      };
      
      setStats(mockStats);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return theme.colors.primary;
      case 'active':
        return theme.colors.success;
      case 'completed':
        return theme.colors.textSecondary;
      case 'cancelled':
        return theme.colors.error;
      default:
        return theme.colors.textSecondary;
    }
  };

  const renderBookingCard = ({ item }: { item: Booking }) => (
    <TouchableOpacity
      style={[styles.bookingCard, { backgroundColor: theme.colors.surface }]}
      onPress={() => {
        // Navigate to booking details
      }}
    >
      <View style={styles.bookingHeader}>
        <Text style={[styles.bookingId, { color: theme.colors.text }]}>
          Booking #{item.id}
        </Text>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
          <Text style={styles.statusText}>{item.status.toUpperCase()}</Text>
        </View>
      </View>
      
      <Text style={[styles.bookingDates, { color: theme.colors.textSecondary }]}>
        {new Date(item.startDate).toLocaleDateString()} - {new Date(item.endDate).toLocaleDateString()}
      </Text>
      
      <Text style={[styles.bookingLocation, { color: theme.colors.textSecondary }]}>
        {item.pickupLocation}
      </Text>
      
      <View style={styles.bookingFooter}>
        <Text style={[styles.bookingPrice, { color: theme.colors.primary }]}>
          R{item.totalPrice}
        </Text>
        <TouchableOpacity style={styles.viewDetailsButton}>
          <Text style={[styles.viewDetailsText, { color: theme.colors.primary }]}>
            View Details
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const renderStatCard = (title: string, value: string | number, icon: string, color: string) => (
    <View style={[styles.statCard, { backgroundColor: theme.colors.surface }]}>
      <LinearGradient
        colors={[color, `${color}80`]}
        style={styles.statIconContainer}
      >
        <Icon name={icon} size={24} color="white" />
      </LinearGradient>
      <Text style={[styles.statValue, { color: theme.colors.text }]}>
        {value}
      </Text>
      <Text style={[styles.statTitle, { color: theme.colors.textSecondary }]}>
        {title}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={[styles.greeting, { color: theme.colors.textSecondary }]}>
              Welcome back,
            </Text>
            <Text style={[styles.userName, { color: theme.colors.text }]}>
              {user?.firstName} {user?.lastName}
            </Text>
          </View>
          <TouchableOpacity style={[styles.profileButton, { backgroundColor: theme.colors.surface }]}>
            <Image
              source={{ uri: user?.profileImage || 'https://via.placeholder.com/40' }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          {renderStatCard('Total Bookings', stats.totalBookings, 'book', theme.colors.primary)}
          {renderStatCard('Active', stats.activeBookings, 'play-circle', theme.colors.success)}
          {renderStatCard('Completed', stats.completedBookings, 'check-circle', theme.colors.textSecondary)}
          {renderStatCard('Total Spent', `R${stats.totalSpent}`, 'attach-money', theme.colors.warning)}
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Quick Actions
          </Text>
          <View style={styles.quickActionsContainer}>
            <TouchableOpacity style={[styles.quickActionCard, { backgroundColor: theme.colors.surface }]}>
              <Icon name="search" size={32} color={theme.colors.primary} />
              <Text style={[styles.quickActionText, { color: theme.colors.text }]}>
                Find Vehicle
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.quickActionCard, { backgroundColor: theme.colors.surface }]}>
              <Icon name="favorite" size={32} color={theme.colors.error} />
              <Text style={[styles.quickActionText, { color: theme.colors.text }]}>
                Saved Vehicles
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.quickActionCard, { backgroundColor: theme.colors.surface }]}>
              <Icon name="support-agent" size={32} color={theme.colors.secondary} />
              <Text style={[styles.quickActionText, { color: theme.colors.text }]}>
                Support
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Bookings */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
              Recent Bookings
            </Text>
            <TouchableOpacity>
              <Text style={[styles.seeAllText, { color: theme.colors.primary }]}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          
          {bookings.length > 0 ? (
            <FlatList
              data={bookings.slice(0, 3)}
              renderItem={renderBookingCard}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          ) : (
            <View style={styles.emptyState}>
              <Icon name="book" size={64} color={theme.colors.textSecondary} />
              <Text style={[styles.emptyStateText, { color: theme.colors.textSecondary }]}>
                No bookings yet
              </Text>
              <Text style={[styles.emptyStateSubtext, { color: theme.colors.textSecondary }]}>
                Start by searching for a vehicle to rent
              </Text>
            </View>
          )}
        </View>

        {/* Promotions */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Special Offers
          </Text>
          <View style={[styles.promotionCard, { backgroundColor: theme.colors.surface }]}>
            <LinearGradient
              colors={[theme.colors.primary, theme.colors.secondary]}
              style={styles.promotionGradient}
            >
              <Icon name="local-offer" size={32} color="white" />
              <Text style={styles.promotionTitle}>20% Off First Booking</Text>
              <Text style={styles.promotionSubtitle}>Use code WELCOME20</Text>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  greeting: {
    fontSize: 16,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 4,
  },
  statIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statTitle: {
    fontSize: 12,
    textAlign: 'center',
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 16,
    fontWeight: '600',
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  quickActionCard: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    minWidth: 80,
  },
  quickActionText: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
  },
  bookingCard: {
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 16,
    borderRadius: 12,
  },
  bookingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  bookingId: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  bookingDates: {
    fontSize: 14,
    marginBottom: 4,
  },
  bookingLocation: {
    fontSize: 14,
    marginBottom: 12,
  },
  bookingFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookingPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewDetailsButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  viewDetailsText: {
    fontSize: 14,
    fontWeight: '600',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateSubtext: {
    fontSize: 14,
    textAlign: 'center',
  },
  promotionCard: {
    marginHorizontal: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  promotionGradient: {
    padding: 20,
    alignItems: 'center',
  },
  promotionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
  },
  promotionSubtitle: {
    color: 'white',
    fontSize: 14,
    opacity: 0.9,
  },
});

export default DashboardScreen;
