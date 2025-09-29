import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './Card';
import { Input } from './Input';
import { Form, FormField, FormSubmit } from './Form';
import { useToastHelpers } from './Toast';
import { firebaseAuthService } from '../services/firebaseAuthService';

interface AdminLoginProps {
  onSuccess?: () => void;
  className?: string;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onSuccess, className }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { error: showError, success: showSuccess } = useToastHelpers();

  const handleAdminLogin = async (values: Record<string, any>) => {
    setIsLoading(true);

    try {
      // Use Firebase authentication for admin login
      const user = await firebaseAuthService.adminLogin(values.email, values.password);
      
      // Store auth data
      localStorage.setItem('accessToken', user.id);
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('userData', JSON.stringify(user));

      showSuccess('Admin login successful', 'Welcome to the admin dashboard');
      onSuccess?.();
      navigate('/dashboard/admin');
    } catch (error: any) {
      showError('Admin login failed', error.message || 'Invalid admin credentials');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
      {/* Return Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 glass-button flex items-center space-x-2 px-4 py-2 text-white/80 hover:text-white transition-all duration-300"
        title="Return to Home"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Back to Home</span>
      </button>

      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            Admin Access
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Sign in to access the admin dashboard
          </p>
        </div>

        <Card className="mt-8 bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-center text-white">Administrator Login</CardTitle>
          </CardHeader>
          <CardContent>
            <Form onSubmit={handleAdminLogin}>
              <div className="space-y-4">
                <FormField name="email">
                  {({ value, setValue, error, clearError, touch }) => (
                    <Input
                      label="Admin Email"
                      type="email"
                      value={value || ''}
                      onChange={(e) => {
                        setValue(e.target.value);
                        clearError();
                      }}
                      onBlur={() => touch()}
                      error={error}
                      placeholder="admin@rideshare.co.za"
                      required
                      leftIcon={
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                      }
                    />
                  )}
                </FormField>

                <FormField name="password">
                  {({ value, setValue, error, clearError, touch }) => (
                    <Input
                      label="Password"
                      type="password"
                      value={value || ''}
                      onChange={(e) => {
                        setValue(e.target.value);
                        clearError();
                      }}
                      onBlur={() => touch()}
                      error={error}
                      placeholder="Enter admin password"
                      required
                      leftIcon={
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      }
                    />
                  )}
                </FormField>

                <FormSubmit className="w-full">
                  {isLoading ? 'Signing in...' : 'Sign in as Admin'}
                </FormSubmit>
              </div>
            </Form>

          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-sm text-white/90 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
            Regular users should use{' '}
            <button
              onClick={() => navigate('/login')}
              className="font-medium text-blue-300 hover:text-blue-200 transition-colors"
            >
              Firebase authentication
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
