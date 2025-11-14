import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { RootStackParamList, Vehicle } from '../../types/navigation';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MainTabs'>;

const { width } = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { user } = useAuth();
  const { theme } = useTheme();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredVehicles, setFeaturedVehicles] = useState<Vehicle[]>([]);
  const [nearbyVehicles, setNearbyVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadVehicles();
  }, []);

  const loadVehicles = async () => {
    try {
      // Mock data - replace with actual API calls
      const mockFeaturedVehicles: Vehicle[] = [
        {
          id: '1',
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
        },
        {
          id: '2',
          hostId: 'host2',
          make: 'Ford',
          model: 'Ranger',
          year: 2021,
          category: 'bakkie',
          pricePerDay: 650,
          location: {
            address: 'Johannesburg',
            city: 'Johannesburg',
            province: 'Gauteng',
            coordinates: { latitude: -26.2041, longitude: 28.0473 },
          },
          images: ['https://via.placeholder.com/300x200'],
          features: ['4x4', 'AC', 'GPS'],
          fuelType: 'diesel',
          transmission: 'manual',
          seatingCapacity: 5,
          isAvailable: true,
          rating: 4.9,
          totalBookings: 32,
          createdAt: '2023-01-01',
          updatedAt: '2023-01-01',
        },
      ];

      setFeaturedVehicles(mockFeaturedVehicles);
      setNearbyVehicles(mockFeaturedVehicles);
    } catch (error) {
      console.error('Error loading vehicles:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    navigation.navigate('Search' as any);
  };

  const handleVehiclePress = (vehicleId: string) => {
    navigation.navigate('VehicleDetail', { vehicleId });
  };

  const handleNotificationPress = () => {
    // Navigate to notifications - check if it exists in navigation stack
    // For now, navigate to MainTabs and then to Messages/Notifications
    navigation.navigate('MainTabs' as any);
  };

  const handleCategoryPress = (category: string) => {
    // Navigate to search with category filter
    navigation.navigate('Search' as any, { category });
  };

  const handleMyBookingsPress = () => {
    // Navigate to bookings tab
    navigation.navigate('MainTabs' as any, { screen: 'Bookings' });
  };

  const handleSavedVehiclesPress = () => {
    // Navigate to search with saved filter or profile
    navigation.navigate('MainTabs' as any, { screen: 'Profile' });
  };

  const handleSupportPress = () => {
    // Navigate to support/contact screen
    // For now, navigate to profile where support might be
    navigation.navigate('MainTabs' as any, { screen: 'Profile' });
  };

  const renderVehicleCard = ({ item }: { item: Vehicle }) => (
    <TouchableOpacity
      style={[styles.vehicleCard, { backgroundColor: theme.colors.surface }]}
      onPress={() => handleVehiclePress(item.id)}
    >
      <Image source={{ uri: item.images[0] }} style={styles.vehicleImage} />
      <View style={styles.vehicleInfo}>
        <Text style={[styles.vehicleTitle, { color: theme.colors.text }]}>
          {item.year} {item.make} {item.model}
        </Text>
        <Text style={[styles.vehicleLocation, { color: theme.colors.textSecondary }]}>
          {item.location.city}
        </Text>
        <View style={styles.vehicleFooter}>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="#F59E0B" />
            <Text style={[styles.rating, { color: theme.colors.text }]}>
              {item.rating}
            </Text>
          </View>
          <Text style={[styles.price, { color: theme.colors.primary }]}>
            R{item.pricePerDay}/day
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderCategoryCard = (category: string, icon: string, color: string) => {
    const categoryMap: { [key: string]: string } = {
      'Sedan': 'sedan',
      'SUV': 'suv',
      'Bakkie': 'bakkie',
      'Luxury': 'luxury',
    };
    
    return (
      <TouchableOpacity 
        style={styles.categoryCard}
        onPress={() => handleCategoryPress(categoryMap[category] || category.toLowerCase())}
      >
        <LinearGradient
          colors={[color, `${color}80`]}
          style={styles.categoryGradient}
        >
          <Icon name={icon} size={32} color="white" />
          <Text style={styles.categoryText}>{category}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={[styles.greeting, { color: theme.colors.textSecondary }]}>
              Good {new Date().getHours() < 12 ? 'Morning' : 'Afternoon'}
            </Text>
            <Text style={[styles.userName, { color: theme.colors.text }]}>
              {user?.firstName || 'Guest'}
            </Text>
          </View>
          <TouchableOpacity 
            style={[styles.notificationButton, { backgroundColor: theme.colors.surface }]}
            onPress={handleNotificationPress}
          >
            <Icon name="notifications" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <TouchableOpacity
          style={[styles.searchBar, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border }]}
          onPress={handleSearch}
        >
          <Icon name="search" size={20} color={theme.colors.textSecondary} />
          <Text style={[styles.searchPlaceholder, { color: theme.colors.textSecondary }]}>
            Search for vehicles...
          </Text>
        </TouchableOpacity>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Categories
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
            {renderCategoryCard('Sedan', 'directions-car', '#3B82F6')}
            {renderCategoryCard('SUV', 'airport-shuttle', '#10B981')}
            {renderCategoryCard('Bakkie', 'local-shipping', '#F59E0B')}
            {renderCategoryCard('Luxury', 'star', '#8B5CF6')}
          </ScrollView>
        </View>

        {/* Featured Vehicles */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
              Featured Vehicles
            </Text>
            <TouchableOpacity onPress={handleSearch}>
              <Text style={[styles.seeAllText, { color: theme.colors.primary }]}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={featuredVehicles}
            renderItem={renderVehicleCard}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.vehiclesContainer}
          />
        </View>

        {/* Nearby Vehicles */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
              Nearby You
            </Text>
            <TouchableOpacity onPress={handleSearch}>
              <Text style={[styles.seeAllText, { color: theme.colors.primary }]}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={nearbyVehicles}
            renderItem={renderVehicleCard}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.vehiclesContainer}
          />
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Quick Actions
          </Text>
          <View style={styles.quickActionsContainer}>
            <TouchableOpacity 
              style={[styles.quickActionCard, { backgroundColor: theme.colors.surface }]}
              onPress={handleMyBookingsPress}
            >
              <Icon name="book-online" size={32} color={theme.colors.primary} />
              <Text style={[styles.quickActionText, { color: theme.colors.text }]}>
                My Bookings
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.quickActionCard, { backgroundColor: theme.colors.surface }]}
              onPress={handleSavedVehiclesPress}
            >
              <Icon name="favorite" size={32} color={theme.colors.error} />
              <Text style={[styles.quickActionText, { color: theme.colors.text }]}>
                Saved Vehicles
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.quickActionCard, { backgroundColor: theme.colors.surface }]}
              onPress={handleSupportPress}
            >
              <Icon name="support-agent" size={32} color={theme.colors.secondary} />
              <Text style={[styles.quickActionText, { color: theme.colors.text }]}>
                Support
              </Text>
            </TouchableOpacity>
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
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  searchPlaceholder: {
    marginLeft: 12,
    fontSize: 16,
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
  categoriesContainer: {
    paddingLeft: 20,
  },
  categoryCard: {
    marginRight: 16,
  },
  categoryGradient: {
    width: 100,
    height: 80,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
  },
  vehiclesContainer: {
    paddingLeft: 20,
  },
  vehicleCard: {
    width: width * 0.7,
    marginRight: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  vehicleImage: {
    width: '100%',
    height: 120,
  },
  vehicleInfo: {
    padding: 12,
  },
  vehicleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  vehicleLocation: {
    fontSize: 14,
    marginBottom: 8,
  },
  vehicleFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '600',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
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
});

export default HomeScreen;
