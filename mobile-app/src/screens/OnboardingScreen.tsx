import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '../context/ThemeContext';
import { RootStackParamList } from '../types/navigation';

type OnboardingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding'>;

const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();
  const { theme } = useTheme();

  const features = [
    {
      icon: 'search',
      title: 'Find Vehicles',
      description: 'Search and discover vehicles near you',
      color: '#3B82F6',
    },
    {
      icon: 'book-online',
      title: 'Easy Booking',
      description: 'Book vehicles with just a few taps',
      color: '#10B981',
    },
    {
      icon: 'security',
      title: 'Secure Payments',
      description: 'Safe and secure payment processing',
      color: '#F59E0B',
    },
    {
      icon: 'support-agent',
      title: '24/7 Support',
      description: 'Get help whenever you need it',
      color: '#8B5CF6',
    },
  ];

  const handleGetStarted = () => {
    navigation.navigate('Signup');
  };

  const handleSignIn = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logoText}>🚗</Text>
          <Text style={[styles.appName, { color: theme.colors.text }]}>
            RideShare SA
          </Text>
          <Text style={[styles.tagline, { color: theme.colors.textSecondary }]}>
            South Africa's Premier Vehicle Rental Platform
          </Text>
        </View>

        {/* Features */}
        <View style={styles.featuresContainer}>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <View style={[styles.featureIcon, { backgroundColor: `${feature.color}20` }]}>
                <Icon name={feature.icon} size={32} color={feature.color} />
              </View>
              <View style={styles.featureContent}>
                <Text style={[styles.featureTitle, { color: theme.colors.text }]}>
                  {feature.title}
                </Text>
                <Text style={[styles.featureDescription, { color: theme.colors.textSecondary }]}>
                  {feature.description}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Benefits */}
        <View style={styles.benefitsContainer}>
          <Text style={[styles.benefitsTitle, { color: theme.colors.text }]}>
            Why Choose RideShare SA?
          </Text>
          
          <View style={styles.benefitItem}>
            <Icon name="check-circle" size={20} color={theme.colors.success} />
            <Text style={[styles.benefitText, { color: theme.colors.text }]}>
              Verified hosts and vehicles
            </Text>
          </View>
          
          <View style={styles.benefitItem}>
            <Icon name="check-circle" size={20} color={theme.colors.success} />
            <Text style={[styles.benefitText, { color: theme.colors.text }]}>
              Competitive pricing
            </Text>
          </View>
          
          <View style={styles.benefitItem}>
            <Icon name="check-circle" size={20} color={theme.colors.success} />
            <Text style={[styles.benefitText, { color: theme.colors.text }]}>
              24/7 customer support
            </Text>
          </View>
          
          <View style={styles.benefitItem}>
            <Icon name="check-circle" size={20} color={theme.colors.success} />
            <Text style={[styles.benefitText, { color: theme.colors.text }]}>
              Comprehensive insurance
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={handleGetStarted}
          style={styles.getStartedButton}
        >
          <LinearGradient
            colors={[theme.colors.primary, theme.colors.secondary]}
            style={styles.getStartedGradient}
          >
            <Text style={styles.getStartedText}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleSignIn} style={styles.signInButton}>
          <Text style={[styles.signInText, { color: theme.colors.primary }]}>
            Already have an account? Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  logoText: {
    fontSize: 80,
    marginBottom: 16,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    textAlign: 'center',
  },
  featuresContainer: {
    marginBottom: 40,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  featureIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  benefitsContainer: {
    marginBottom: 40,
  },
  benefitsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  benefitText: {
    marginLeft: 12,
    fontSize: 16,
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  getStartedButton: {
    marginBottom: 16,
  },
  getStartedGradient: {
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInButton: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  signInText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default OnboardingScreen;
