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
import { RootStackParamList, LoginForm } from '../../types/navigation';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { login, loading } = useAuth();
  const { theme } = useTheme();
  
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Partial<LoginForm>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginForm> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    try {
      await login(formData.email, formData.password);
      // Navigation will be handled by AuthProvider based on user role
    } catch (error: any) {
      Alert.alert('Login Failed', error.message);
    }
  };

  const handleInputChange = (field: keyof LoginForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
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
              <Icon name="directions-car" size={60} color="white" />
            </LinearGradient>
            <Text style={[styles.title, { color: theme.colors.text }]}>
              Welcome Back
            </Text>
            <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
              Sign in to continue to RideShare SA
            </Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
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

            {/* Forgot Password */}
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}
              style={styles.forgotPassword}
            >
              <Text style={[styles.forgotPasswordText, { color: theme.colors.primary }]}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity
              onPress={handleLogin}
              disabled={loading}
              style={[styles.loginButton, { opacity: loading ? 0.7 : 1 }]}
            >
              <LinearGradient
                colors={[theme.colors.primary, theme.colors.secondary]}
                style={styles.loginButtonGradient}
              >
                <Text style={styles.loginButtonText}>
                  {loading ? 'Signing In...' : 'Sign In'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.divider}>
              <View style={[styles.dividerLine, { backgroundColor: theme.colors.border }]} />
              <Text style={[styles.dividerText, { color: theme.colors.textSecondary }]}>
                OR
              </Text>
              <View style={[styles.dividerLine, { backgroundColor: theme.colors.border }]} />
            </View>

            {/* Social Login Buttons */}
            <View style={styles.socialButtons}>
              <TouchableOpacity style={[styles.socialButton, { borderColor: theme.colors.border }]}>
                <Icon name="google" size={24} color="#DB4437" />
                <Text style={[styles.socialButtonText, { color: theme.colors.text }]}>
                  Google
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={[styles.socialButton, { borderColor: theme.colors.border }]}>
                <Icon name="facebook" size={24} color="#4267B2" />
                <Text style={[styles.socialButtonText, { color: theme.colors.text }]}>
                  Facebook
                </Text>
              </TouchableOpacity>
            </View>

            {/* Sign Up Link */}
            <View style={styles.signupContainer}>
              <Text style={[styles.signupText, { color: theme.colors.textSecondary }]}>
                Don't have an account?{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={[styles.signupLink, { color: theme.colors.primary }]}>
                  Sign Up
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
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    fontSize: 14,
    fontWeight: '600',
  },
  loginButton: {
    marginBottom: 24,
  },
  loginButtonGradient: {
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    marginHorizontal: 16,
    fontSize: 14,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 12,
    height: 56,
    marginHorizontal: 8,
  },
  socialButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  signupText: {
    fontSize: 16,
  },
  signupLink: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
