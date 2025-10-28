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
import { useTheme } from '../../context/ThemeContext';
import { RootStackParamList, Vehicle } from '../../types/navigation';

type SearchScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MainTabs'>;

const { width } = Dimensions.get('window');

const SearchScreen: React.FC = () => {
  const navigation = useNavigation<SearchScreenNavigationProp>();
  const { theme } = useTheme();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: '', name: 'All', icon: 'all-inclusive' },
    { id: 'sedan', name: 'Sedan', icon: 'directions-car' },
    { id: 'suv', name: 'SUV', icon: 'airport-shuttle' },
    { id: 'bakkie', name: 'Bakkie', icon: 'local-shipping' },
    { id: 'truck', name: 'Truck', icon: 'local-shipping' },
    { id: 'luxury', name: 'Luxury', icon: 'star' },
  ];

  useEffect(() => {
    loadVehicles();
  }, []);

  useEffect(() => {
    filterVehicles();
  }, [searchQuery, selectedCategory, priceRange, vehicles]);

  const loadVehicles = async () => {
    try {
      // Mock data - replace with actual API calls
      const mockVehicles: Vehicle[] = [
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
        {
          id: '3',
          hostId: 'host3',
          make: 'BMW',
          model: 'X5',
          year: 2023,
          category: 'luxury',
          pricePerDay: 1200,
          location: {
            address: 'Durban',
            city: 'Durban',
            province: 'KwaZulu-Natal',
            coordinates: { latitude: -29.8587, longitude: 31.0218 },
          },
          images: ['https://via.placeholder.com/300x200'],
          features: ['AC', 'GPS', 'Bluetooth', 'Leather Seats'],
          fuelType: 'petrol',
          transmission: 'automatic',
          seatingCapacity: 7,
          isAvailable: true,
          rating: 4.9,
          totalBookings: 18,
          createdAt: '2023-01-01',
          updatedAt: '2023-01-01',
        },
      ];

      setVehicles(mockVehicles);
    } catch (error) {
      console.error('Error loading vehicles:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterVehicles = () => {
    let filtered = vehicles.filter(vehicle => vehicle.isAvailable);

    if (searchQuery) {
      filtered = filtered.filter(vehicle =>
        vehicle.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.location.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(vehicle => vehicle.category === selectedCategory);
    }

    filtered = filtered.filter(vehicle =>
      vehicle.pricePerDay >= priceRange.min && vehicle.pricePerDay <= priceRange.max
    );

    setFilteredVehicles(filtered);
  };

  const handleVehiclePress = (vehicleId: string) => {
    navigation.navigate('VehicleDetail', { vehicleId });
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
          {item.location.city}, {item.location.province}
        </Text>
        <View style={styles.vehicleFeatures}>
          <Text style={[styles.featureText, { color: theme.colors.textSecondary }]}>
            {item.seatingCapacity} seats • {item.transmission} • {item.fuelType}
          </Text>
        </View>
        <View style={styles.vehicleFooter}>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="#F59E0B" />
            <Text style={[styles.rating, { color: theme.colors.text }]}>
              {item.rating}
            </Text>
            <Text style={[styles.reviews, { color: theme.colors.textSecondary }]}>
              ({item.totalBookings})
            </Text>
          </View>
          <Text style={[styles.price, { color: theme.colors.primary }]}>
            R{item.pricePerDay}/day
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderCategoryButton = (category: { id: string; name: string; icon: string }) => (
    <TouchableOpacity
      key={category.id}
      onPress={() => setSelectedCategory(category.id)}
      style={[
        styles.categoryButton,
        {
          backgroundColor: selectedCategory === category.id ? theme.colors.primary : theme.colors.surface,
          borderColor: selectedCategory === category.id ? theme.colors.primary : theme.colors.border,
        }
      ]}
    >
      <Icon
        name={category.icon}
        size={20}
        color={selectedCategory === category.id ? 'white' : theme.colors.textSecondary}
      />
      <Text
        style={[
          styles.categoryButtonText,
          { color: selectedCategory === category.id ? 'white' : theme.colors.text }
        ]}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={[styles.searchBar, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border }]}>
          <Icon name="search" size={20} color={theme.colors.textSecondary} />
          <TextInput
            style={[styles.searchInput, { color: theme.colors.text }]}
            placeholder="Search vehicles..."
            placeholderTextColor={theme.colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity
          onPress={() => setShowFilters(!showFilters)}
          style={[styles.filterButton, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border }]}
        >
          <Icon name="tune" size={20} color={theme.colors.text} />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        {categories.map(renderCategoryButton)}
      </ScrollView>

      {/* Filters */}
      {showFilters && (
        <View style={[styles.filtersContainer, { backgroundColor: theme.colors.surface }]}>
          <Text style={[styles.filterTitle, { color: theme.colors.text }]}>
            Price Range: R{priceRange.min} - R{priceRange.max}
          </Text>
          {/* Add slider component here for price range */}
        </View>
      )}

      {/* Results */}
      <View style={styles.resultsHeader}>
        <Text style={[styles.resultsCount, { color: theme.colors.text }]}>
          {filteredVehicles.length} vehicles found
        </Text>
        <TouchableOpacity>
          <Text style={[styles.sortText, { color: theme.colors.primary }]}>
            Sort
          </Text>
        </TouchableOpacity>
      </View>

      {/* Vehicle List */}
      <FlatList
        data={filteredVehicles}
        renderItem={renderVehicleCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.vehiclesList}
        showsVerticalScrollIndicator={false}
        numColumns={1}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },
  filterButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 12,
  },
  categoryButtonText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
  },
  filtersContainer: {
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  resultsCount: {
    fontSize: 16,
    fontWeight: '600',
  },
  sortText: {
    fontSize: 16,
    fontWeight: '600',
  },
  vehiclesList: {
    paddingHorizontal: 20,
  },
  vehicleCard: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  vehicleImage: {
    width: '100%',
    height: 200,
  },
  vehicleInfo: {
    padding: 16,
  },
  vehicleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  vehicleLocation: {
    fontSize: 14,
    marginBottom: 8,
  },
  vehicleFeatures: {
    marginBottom: 12,
  },
  featureText: {
    fontSize: 14,
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
  reviews: {
    marginLeft: 4,
    fontSize: 14,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SearchScreen;
