import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

interface CustomDrawerContentProps {
  navigation: any;
}

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({ navigation }) => {
  const { user, logout } = useAuth();
  const { theme, isDark, toggleTheme } = useTheme();

  const handleLogout = async () => {
    try {
      await logout();
      navigation.navigate('Login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const menuItems = [
    {
      label: 'Home',
      icon: 'home',
      onPress: () => navigation.navigate('MainTabs'),
    },
    {
      label: 'My Bookings',
      icon: 'book',
      onPress: () => navigation.navigate('Bookings'),
    },
    {
      label: 'Saved Vehicles',
      icon: 'favorite',
      onPress: () => navigation.navigate('SavedVehicles'),
    },
    {
      label: 'Messages',
      icon: 'message',
      onPress: () => navigation.navigate('Messages'),
    },
    {
      label: 'Notifications',
      icon: 'notifications',
      onPress: () => navigation.navigate('Notifications'),
    },
    {
      label: 'Settings',
      icon: 'settings',
      onPress: () => navigation.navigate('Settings'),
    },
    {
      label: 'Help & Support',
      icon: 'help',
      onPress: () => navigation.navigate('Support'),
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <DrawerContentScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <View style={[styles.profileContainer, { backgroundColor: theme.colors.surface }]}>
            <Icon name="person" size={40} color={theme.colors.primary} />
          </View>
          <View style={styles.userInfo}>
            <Text style={[styles.userName, { color: theme.colors.text }]}>
              {user?.firstName} {user?.lastName}
            </Text>
            <Text style={[styles.userEmail, { color: theme.colors.textSecondary }]}>
              {user?.email}
            </Text>
            <View style={[styles.roleBadge, { backgroundColor: theme.colors.primary }]}>
              <Text style={styles.roleText}>
                {user?.role?.toUpperCase()}
              </Text>
            </View>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.menuItem, { borderBottomColor: theme.colors.border }]}
              onPress={item.onPress}
            >
              <Icon name={item.icon} size={24} color={theme.colors.textSecondary} />
              <Text style={[styles.menuItemText, { color: theme.colors.text }]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Theme Toggle */}
        <View style={styles.themeContainer}>
          <TouchableOpacity
            style={[styles.themeToggle, { backgroundColor: theme.colors.surface }]}
            onPress={toggleTheme}
          >
            <Icon name={isDark ? 'light-mode' : 'dark-mode'} size={24} color={theme.colors.text} />
            <Text style={[styles.themeText, { color: theme.colors.text }]}>
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>

      {/* Footer */}
      <View style={[styles.footer, { borderTopColor: theme.colors.border }]}>
        <TouchableOpacity
          style={[styles.logoutButton, { backgroundColor: theme.colors.error }]}
          onPress={handleLogout}
        >
          <Icon name="logout" size={24} color="white" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
  },
  profileContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    marginBottom: 8,
  },
  roleBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  roleText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  menuContainer: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  menuItemText: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '500',
  },
  themeContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  themeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
  },
  themeText: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    borderTopWidth: 1,
    padding: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default CustomDrawerContent;
