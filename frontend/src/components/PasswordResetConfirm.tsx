import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Icon from './Icon';
import PasswordInput from './PasswordInput';

interface PasswordResetConfirmProps {
  onReset: (token: string, password: string) => Promise<void>;
  loading?: boolean;
}

const PasswordResetConfirm: React.FC<PasswordResetConfirmProps> = ({
  onReset,
  loading = false
}) => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!password) {
      setError('Please enter a new password');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!token) {
      setError('Invalid reset token');
      return;
    }

    try {
      await onReset(token, password);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to reset password');
    }
  };

  if (success) {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 max-w-md w-full mx-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle" size="lg" className="text-green-400" />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-2">Password Reset Successful</h2>
          <p className="text-white/70 mb-6">
            Your password has been successfully updated. You can now log in with your new password.
          </p>
          
          <button
            onClick={() => navigate('/login')}
            className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Continue to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 max-w-md w-full mx-4">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Lock" size="lg" className="text-blue-400" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Set New Password</h2>
        <p className="text-white/70">
          Enter your new password below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <PasswordInput
          value={password}
          onChange={setPassword}
          label="New Password"
          placeholder="Enter your new password"
          showStrength={true}
          required
        />

        <PasswordInput
          value={confirmPassword}
          onChange={setConfirmPassword}
          label="Confirm Password"
          placeholder="Confirm your new password"
          required
        />

        {error && (
          <div className="flex items-center space-x-2 text-red-400 text-sm">
            <Icon name="AlertCircle" size="sm" />
            <span>{error}</span>
          </div>
        )}

        <div className="space-y-3">
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Updating...</span>
              </div>
            ) : (
              'Update Password'
            )}
          </button>
          
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="w-full px-4 py-3 bg-white/10 text-white/70 rounded-lg hover:bg-white/20 transition-colors"
          >
            Back to Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordResetConfirm;
