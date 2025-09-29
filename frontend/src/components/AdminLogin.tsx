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
      const user = await firebaseAuthService.adminLogin(values.email, values.password);
      
      if (user) {
        showSuccess('Admin login successful', 'Welcome to the admin dashboard');
        onSuccess?.();
        navigate('/dashboard');
      }
    } catch (error: any) {
      showError('Admin login failed', error.message || 'Invalid admin credentials');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Admin Access
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to access the admin dashboard
          </p>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-center">Administrator Login</CardTitle>
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

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Admin Accounts</span>
                </div>
              </div>

              <div className="mt-4 text-xs text-gray-500 space-y-1">
                <p><strong>Jonase:</strong> Jonase@rideshare.co.za</p>
                <p><strong>Toni:</strong> Toni@rideshare.co.za</p>
                <p><strong>Soso:</strong> soso@rideshare.co.za</p>
                <p><strong>Anitha:</strong> Anitha@rideshare.co.za</p>
                <p className="mt-2 text-center"><strong>Password:</strong> password123</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Regular users should use{' '}
            <button
              onClick={() => navigate('/login')}
              className="font-medium text-blue-600 hover:text-blue-500"
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
