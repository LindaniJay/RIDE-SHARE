import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const { theme } = useTheme();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.primary }]}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>🚗</Text>
          <Text style={styles.appName}>RideShare SA</Text>
          <Text style={styles.tagline}>Your Journey, Our Platform</Text>
        </View>
        
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="white" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  logoText: {
    fontSize: 80,
    marginBottom: 16,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
  },
  loadingContainer: {
    alignItems: 'center',
  },
  loadingText: {
    color: 'white',
    fontSize: 16,
    marginTop: 16,
  },
});

export default SplashScreen;
