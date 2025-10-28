import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'react-native';
import { Provider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from 'react-query';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Context Providers
import { AuthProvider } from './src/context/AuthContext';
import { ThemeProvider } from './src/context/ThemeContext';
import { AppStateProvider } from './src/context/AppStateContext';

// Screens
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import SignupScreen from './src/screens/auth/SignupScreen';
import RoleSelectionScreen from './src/screens/auth/RoleSelectionScreen';
import ForgotPasswordScreen from './src/screens/auth/ForgotPasswordScreen';

// Main App Screens
import HomeScreen from './src/screens/main/HomeScreen';
import SearchScreen from './src/screens/main/SearchScreen';
import VehicleDetailScreen from './src/screens/main/VehicleDetailScreen';
import BookingScreen from './src/screens/main/BookingScreen';
import BookingConfirmationScreen from './src/screens/main/BookingConfirmationScreen';

// Dashboard Screens
import DashboardScreen from './src/screens/dashboard/DashboardScreen';
import ProfileScreen from './src/screens/dashboard/ProfileScreen';
import BookingsScreen from './src/screens/dashboard/BookingsScreen';
import MessagesScreen from './src/screens/dashboard/MessagesScreen';
import NotificationsScreen from './src/screens/dashboard/NotificationsScreen';
import SettingsScreen from './src/screens/dashboard/SettingsScreen';

// Host Screens
import HostDashboardScreen from './src/screens/host/HostDashboardScreen';
import VehicleManagementScreen from './src/screens/host/VehicleManagementScreen';
import AddVehicleScreen from './src/screens/host/AddVehicleScreen';
import EarningsScreen from './src/screens/host/EarningsScreen';
import HostBookingsScreen from './src/screens/host/HostBookingsScreen';

// Admin Screens
import AdminDashboardScreen from './src/screens/admin/AdminDashboardScreen';
import UserManagementScreen from './src/screens/admin/UserManagementScreen';
import VehicleApprovalScreen from './src/screens/admin/VehicleApprovalScreen';
import AnalyticsScreen from './src/screens/admin/AnalyticsScreen';

// Components
import CustomDrawerContent from './src/components/navigation/CustomDrawerContent';
import ProtectedRoute from './src/components/auth/ProtectedRoute';

// Services
import { initializeApp } from './src/services/AppService';
import { setupPushNotifications } from './src/services/NotificationService';

// Types
import { RootStackParamList, MainTabParamList, HostTabParamList, AdminTabParamList } from './src/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();
const HostTab = createBottomTabNavigator<HostTabParamList>();
const AdminTab = createBottomTabNavigator<AdminTabParamList>();
const Drawer = createDrawerNavigator();

// Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

// Main Tab Navigator for Renters
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Search':
              iconName = 'search';
              break;
            case 'Bookings':
              iconName = 'book';
              break;
            case 'Messages':
              iconName = 'message';
              break;
            case 'Profile':
              iconName = 'person';
              break;
            default:
              iconName = 'home';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3B82F6',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Bookings" component={BookingsScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

// Host Tab Navigator
const HostTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'HostDashboard':
              iconName = 'dashboard';
              break;
            case 'Vehicles':
              iconName = 'directions-car';
              break;
            case 'Earnings':
              iconName = 'attach-money';
              break;
            case 'HostBookings':
              iconName = 'book';
              break;
            case 'HostProfile':
              iconName = 'person';
              break;
            default:
              iconName = 'dashboard';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#10B981',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="HostDashboard" component={HostDashboardScreen} />
      <Tab.Screen name="Vehicles" component={VehicleManagementScreen} />
      <Tab.Screen name="Earnings" component={EarningsScreen} />
      <Tab.Screen name="HostBookings" component={HostBookingsScreen} />
      <Tab.Screen name="HostProfile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

// Admin Tab Navigator
const AdminTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'AdminDashboard':
              iconName = 'admin-panel-settings';
              break;
            case 'Users':
              iconName = 'people';
              break;
            case 'Vehicles':
              iconName = 'directions-car';
              break;
            case 'Analytics':
              iconName = 'analytics';
              break;
            case 'AdminProfile':
              iconName = 'person';
              break;
            default:
              iconName = 'admin-panel-settings';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#EF4444',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="AdminDashboard" component={AdminDashboardScreen} />
      <Tab.Screen name="Users" component={UserManagementScreen} />
      <Tab.Screen name="Vehicles" component={VehicleApprovalScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="AdminProfile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

// Drawer Navigator for Settings and Additional Features
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: 'white',
          width: 280,
        },
      }}
    >
      <Drawer.Screen name="MainTabs" component={MainTabNavigator} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
};

const App = () => {
  React.useEffect(() => {
    // Initialize app services
    initializeApp();
    setupPushNotifications();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <ThemeProvider>
          <AuthProvider>
            <AppStateProvider>
              <NavigationContainer>
                <StatusBar barStyle="dark-content" backgroundColor="white" />
                <Stack.Navigator
                  initialRouteName="Splash"
                  screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                  }}
                >
                  {/* Initial Screens */}
                  <Stack.Screen name="Splash" component={SplashScreen} />
                  <Stack.Screen name="Onboarding" component={OnboardingScreen} />
                  
                  {/* Authentication Screens */}
                  <Stack.Screen name="Login" component={LoginScreen} />
                  <Stack.Screen name="Signup" component={SignupScreen} />
                  <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
                  <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                  
                  {/* Main App Screens */}
                  <Stack.Screen name="MainTabs" component={DrawerNavigator} />
                  <Stack.Screen name="HostTabs" component={HostTabNavigator} />
                  <Stack.Screen name="AdminTabs" component={AdminTabNavigator} />
                  
                  {/* Vehicle and Booking Screens */}
                  <Stack.Screen 
                    name="VehicleDetail" 
                    component={VehicleDetailScreen}
                    options={{
                      headerShown: true,
                      title: 'Vehicle Details',
                      headerStyle: {
                        backgroundColor: '#3B82F6',
                      },
                      headerTintColor: 'white',
                    }}
                  />
                  <Stack.Screen 
                    name="Booking" 
                    component={BookingScreen}
                    options={{
                      headerShown: true,
                      title: 'Book Vehicle',
                      headerStyle: {
                        backgroundColor: '#3B82F6',
                      },
                      headerTintColor: 'white',
                    }}
                  />
                  <Stack.Screen 
                    name="BookingConfirmation" 
                    component={BookingConfirmationScreen}
                    options={{
                      headerShown: true,
                      title: 'Booking Confirmed',
                      headerStyle: {
                        backgroundColor: '#10B981',
                      },
                      headerTintColor: 'white',
                    }}
                  />
                  
                  {/* Host Screens */}
                  <Stack.Screen 
                    name="AddVehicle" 
                    component={AddVehicleScreen}
                    options={{
                      headerShown: true,
                      title: 'Add Vehicle',
                      headerStyle: {
                        backgroundColor: '#10B981',
                      },
                      headerTintColor: 'white',
                    }}
                  />
                </Stack.Navigator>
              </NavigationContainer>
              <Toast />
            </AppStateProvider>
          </AuthProvider>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;