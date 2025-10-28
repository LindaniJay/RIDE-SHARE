import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'renter' | 'host' | 'admin';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const { user, loading } = useAuth();
  const { theme } = useTheme();

  if (loading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: theme.colors.background }]}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text style={[styles.loadingText, { color: theme.colors.text }]}>
          Loading...
        </Text>
      </View>
    );
  }

  if (!user) {
    return (
      <View style={[styles.errorContainer, { backgroundColor: theme.colors.background }]}>
        <Text style={[styles.errorText, { color: theme.colors.text }]}>
          Please log in to access this feature
        </Text>
      </View>
    );
  }

  if (requiredRole && user.role !== requiredRole) {
    return (
      <View style={[styles.errorContainer, { backgroundColor: theme.colors.background }]}>
        <Text style={[styles.errorText, { color: theme.colors.text }]}>
          You don't have permission to access this feature
        </Text>
      </View>
    );
  }

  return <>{children}</>;
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ProtectedRoute;
