import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import PasswordInput from './PasswordInput';
import Icon from './Icon';

const ProfileSettings: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'profile' | 'password' | 'security'>('profile');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Profile form data
  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phoneNumber || '',
  });

  // Password form data
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch('/api/users/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(profileData)
      });

      if (response.ok) {
        setMessage('Profile updated successfully');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to update profile');
      }
    } catch (error) {
      setError('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError('New passwords do not match');
      setLoading(false);
      return;
    }

    if (passwordData.newPassword.length < 8) {
      setError('New password must be at least 8 characters long');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword
        })
      });

      if (response.ok) {
        setMessage('Password changed successfully');
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to change password');
      }
    } catch (error) {
      setError('Failed to change password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Profile Settings</h1>
        <p className="text-white/70">Manage your account settings and preferences</p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6">
        <div className="flex space-x-1 bg-white/10 backdrop-blur-md rounded-lg p-1 border border-white/20">
          {[
            { id: 'profile', label: 'Profile', icon: 'User' },
            { id: 'password', label: 'Password', icon: 'Lock' },
            { id: 'security', label: 'Security', icon: 'Shield' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                activeTab === tab.id
                  ? 'bg-white/20 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon name={tab.icon} className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      {message && (
        <div className="mb-4 p-4 bg-green-500/20 border border-green-400/30 rounded-lg">
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" className="h-5 w-5 text-green-400" />
            <span className="text-green-200">{message}</span>
          </div>
        </div>
      )}

      {error && (
        <div className="mb-4 p-4 bg-red-500/20 border border-red-400/30 rounded-lg">
          <div className="flex items-center space-x-2">
            <Icon name="AlertCircle" className="h-5 w-5 text-red-400" />
            <span className="text-red-200">{error}</span>
          </div>
        </div>
      )}

      {/* Tab Content */}
      <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
        {activeTab === 'profile' && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Profile Information</h2>
            <form onSubmit={handleProfileUpdate} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={profileData.firstName}
                    onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={profileData.lastName}
                    onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all"
                  placeholder="+27 82 123 4567"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Updating...' : 'Update Profile'}
              </button>
            </form>
          </div>
        )}

        {activeTab === 'password' && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Change Password</h2>
            <form onSubmit={handlePasswordChange} className="space-y-6">
              <PasswordInput
                value={passwordData.currentPassword}
                onChange={(value) => setPasswordData({ ...passwordData, currentPassword: value })}
                label="Current Password"
                placeholder="Enter your current password"
                required
              />

              <PasswordInput
                value={passwordData.newPassword}
                onChange={(value) => setPasswordData({ ...passwordData, newPassword: value })}
                label="New Password"
                placeholder="Enter your new password"
                showStrength={true}
                required
              />

              <PasswordInput
                value={passwordData.confirmPassword}
                onChange={(value) => setPasswordData({ ...passwordData, confirmPassword: value })}
                label="Confirm New Password"
                placeholder="Confirm your new password"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Changing...' : 'Change Password'}
              </button>
            </form>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Security Settings</h2>
            <div className="space-y-6">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h3 className="text-lg font-medium text-white mb-2">Two-Factor Authentication</h3>
                <p className="text-white/70 text-sm mb-4">
                  Add an extra layer of security to your account
                </p>
                <button className="px-4 py-2 bg-blue-500/20 text-blue-200 rounded-lg hover:bg-blue-500/30 transition-colors">
                  Enable 2FA
                </button>
              </div>

              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h3 className="text-lg font-medium text-white mb-2">Login Sessions</h3>
                <p className="text-white/70 text-sm mb-4">
                  Manage your active login sessions
                </p>
                <button className="px-4 py-2 bg-red-500/20 text-red-200 rounded-lg hover:bg-red-500/30 transition-colors">
                  Sign Out All Devices
                </button>
              </div>

              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h3 className="text-lg font-medium text-white mb-2">Account Deletion</h3>
                <p className="text-white/70 text-sm mb-4">
                  Permanently delete your account and all associated data
                </p>
                <button className="px-4 py-2 bg-red-500/20 text-red-200 rounded-lg hover:bg-red-500/30 transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSettings;
