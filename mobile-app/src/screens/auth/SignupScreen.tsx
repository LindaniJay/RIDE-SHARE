import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { RootStackParamList, SignupForm } from '../../types/navigation';

type SignupScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Signup'>;

const SignupScreen: React.FC = () => {
  const navigation = useNavigation<SignupScreenNavigationProp>();
  const { signup, loading } = useAuth();
  const { theme } = useTheme();
  
  const [formData, setFormData] = useState<SignupForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'renter',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Partial<SignupForm>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<SignupForm> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async () => {
    if (!validateForm()) return;

    try {
      await signup(formData);
      navigation.navigate('RoleSelection');
    } catch (error: any) {
      Alert.alert('Signup Failed', error.message);
    }
  };

  const handleInputChange = (field: keyof SignupForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleRoleChange = (role: 'renter' | 'host') => {
    setFormData(prev => ({ ...prev, role }));
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Header */}
          <View style={styles.header}>
            <LinearGradient
              colors={[theme.colors.primary, theme.colors.secondary]}
              style={styles.logoContainer}
            >
              <Icon name="person-add" size={60} color="white" />
            </LinearGradient>
            <Text style={[styles.title, { color: theme.colors.text }]}>
              Create Account
            </Text>
            <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
              Join RideShare SA today
            </Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            {/* Name Fields */}
            <View style={styles.nameRow}>
              <View style={[styles.nameField, { marginRight: 8 }]}>
                <Text style={[styles.label, { color: theme.colors.text }]}>First Name</Text>
                <View style={[styles.inputWrapper, { borderColor: errors.firstName ? theme.colors.error : theme.colors.border }]}>
                  <TextInput
                    style={[styles.input, { color: theme.colors.text }]}
                    placeholder="First name"
                    placeholderTextColor={theme.colors.textSecondary}
                    value={formData.firstName}
                    onChangeText={(value) => handleInputChange('firstName', value)}
                    autoCapitalize="words"
                  />
                </View>
                {errors.firstName && (
                  <Text style={[styles.errorText, { color: theme.colors.error }]}>
                    {errors.firstName}
                  </Text>
                )}
              </View>

              <View style={[styles.nameField, { marginLeft: 8 }]}>
                <Text style={[styles.label, { color: theme.colors.text }]}>Last Name</Text>
                <View style={[styles.inputWrapper, { borderColor: errors.lastName ? theme.colors.error : theme.colors.border }]}>
                  <TextInput
                    style={[styles.input, { color: theme.colors.text }]}
                    placeholder="Last name"
                    placeholderTextColor={theme.colors.textSecondary}
                    value={formData.lastName}
                    onChangeText={(value) => handleInputChange('lastName', value)}
                    autoCapitalize="words"
                  />
                </View>
                {errors.lastName && (
                  <Text style={[styles.errorText, { color: theme.colors.error }]}>
                    {errors.lastName}
                  </Text>
                )}
              </View>
            </View>

            {/* Email Input */}
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: theme.colors.text }]}>Email</Text>
              <View style={[styles.inputWrapper, { borderColor: errors.email ? theme.colors.error : theme.colors.border }]}>
                <Icon name="email" size={20} color={theme.colors.textSecondary} style={styles.inputIcon} />
                <TextInput
                  style={[styles.input, { color: theme.colors.text }]}
                  placeholder="Enter your email"
                  placeholderTextColor={theme.colors.textSecondary}
                  value={formData.email}
                  onChangeText={(value) => handleInputChange('email', value)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
              {errors.email && (
                <Text style={[styles.errorText, { color: theme.colors.error }]}>
                  {errors.email}
                </Text>
              )}
            </View>

            {/* Phone Input */}
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: theme.colors.text }]}>Phone Number</Text>
              <View style={[styles.inputWrapper, { borderColor: errors.phone ? theme.colors.error : theme.colors.border }]}>
                <Icon name="phone" size={20} color={theme.colors.textSecondary} style={styles.inputIcon} />
                <TextInput
                  style={[styles.input, { color: theme.colors.text }]}
                  placeholder="Enter your phone number"
                  placeholderTextColor={theme.colors.textSecondary}
                  value={formData.phone}
                  onChangeText={(value) => handleInputChange('phone', value)}
                  keyboardType="phone-pad"
                />
              </View>
              {errors.phone && (
                <Text style={[styles.errorText, { color: theme.colors.error }]}>
                  {errors.phone}
                </Text>
              )}
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: theme.colors.text }]}>Password</Text>
              <View style={[styles.inputWrapper, { borderColor: errors.password ? theme.colors.error : theme.colors.border }]}>
                <Icon name="lock" size={20} color={theme.colors.textSecondary} style={styles.inputIcon} />
                <TextInput
                  style={[styles.input, { color: theme.colors.text }]}
                  placeholder="Enter your password"
                  placeholderTextColor={theme.colors.textSecondary}
                  value={formData.password}
                  onChangeText={(value) => handleInputChange('password', value)}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIcon}
                >
                  <Icon
                    name={showPassword ? 'visibility' : 'visibility-off'}
                    size={20}
                    color={theme.colors.textSecondary}
                  />
                </TouchableOpacity>
              </View>
              {errors.password && (
                <Text style={[styles.errorText, { color: theme.colors.error }]}>
                  {errors.password}
                </Text>
              )}
            </View>

            {/* Confirm Password Input */}
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: theme.colors.text }]}>Confirm Password</Text>
              <View style={[styles.inputWrapper, { borderColor: errors.confirmPassword ? theme.colors.error : theme.colors.border }]}>
                <Icon name="lock" size={20} color={theme.colors.textSecondary} style={styles.inputIcon} />
                <TextInput
                  style={[styles.input, { color: theme.colors.text }]}
                  placeholder="Confirm your password"
                  placeholderTextColor={theme.colors.textSecondary}
                  value={formData.confirmPassword}
                  onChangeText={(value) => handleInputChange('confirmPassword', value)}
                  secureTextEntry={!showConfirmPassword}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={styles.eyeIcon}
                >
                  <Icon
                    name={showConfirmPassword ? 'visibility' : 'visibility-off'}
                    size={20}
                    color={theme.colors.textSecondary}
                  />
                </TouchableOpacity>
              </View>
              {errors.confirmPassword && (
                <Text style={[styles.errorText, { color: theme.colors.error }]}>
                  {errors.confirmPassword}
                </Text>
              )}
            </View>

            {/* Role Selection */}
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: theme.colors.text }]}>I want to</Text>
              <View style={styles.roleContainer}>
                <TouchableOpacity
                  onPress={() => handleRoleChange('renter')}
                  style={[
                    styles.roleButton,
                    {
                      backgroundColor: formData.role === 'renter' ? theme.colors.primary : theme.colors.surface,
                      borderColor: formData.role === 'renter' ? theme.colors.primary : theme.colors.border,
                    }
                  ]}
                >
                  <Icon 
                    name="person" 
                    size={24} 
                    color={formData.role === 'renter' ? 'white' : theme.colors.textSecondary} 
                  />
                  <Text style={[
                    styles.roleButtonText,
                    { color: formData.role === 'renter' ? 'white' : theme.colors.text }
                  ]}>
                    Rent Vehicles
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => handleRoleChange('host')}
                  style={[
                    styles.roleButton,
                    {
                      backgroundColor: formData.role === 'host' ? theme.colors.secondary : theme.colors.surface,
                      borderColor: formData.role === 'host' ? theme.colors.secondary : theme.colors.border,
                    }
                  ]}
                >
                  <Icon 
                    name="directions-car" 
                    size={24} 
                    color={formData.role === 'host' ? 'white' : theme.colors.textSecondary} 
                  />
                  <Text style={[
                    styles.roleButtonText,
                    { color: formData.role === 'host' ? 'white' : theme.colors.text }
                  ]}>
                    Host Vehicles
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Signup Button */}
            <TouchableOpacity
              onPress={handleSignup}
              disabled={loading}
              style={[styles.signupButton, { opacity: loading ? 0.7 : 1 }]}
            >
              <LinearGradient
                colors={[theme.colors.primary, theme.colors.secondary]}
                style={styles.signupButtonGradient}
              >
                <Text style={styles.signupButtonText}>
                  {loading ? 'Creating Account...' : 'Create Account'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Login Link */}
            <View style={styles.loginContainer}>
              <Text style={[styles.loginText, { color: theme.colors.textSecondary }]}>
                Already have an account?{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={[styles.loginLink, { color: theme.colors.primary }]}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  form: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  nameField: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 4,
  },
  errorText: {
    fontSize: 14,
    marginTop: 4,
  },
  roleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  roleButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 12,
    height: 56,
    marginHorizontal: 4,
  },
  roleButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
  },
  signupButton: {
    marginBottom: 24,
  },
  signupButtonGradient: {
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  loginText: {
    fontSize: 16,
  },
  loginLink: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignupScreen;
