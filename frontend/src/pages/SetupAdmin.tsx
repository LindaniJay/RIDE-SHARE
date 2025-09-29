import React, { useState } from 'react';
// import Icon from '../components/Icon';
import { createAdminUsers } from '../scripts/createAdminUsers';

const SetupAdmin: React.FC = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [message, setMessage] = useState('');

  const handleCreateAdminUsers = async () => {
    setIsCreating(true);
    setMessage('Creating Firebase admin users...');
    
    try {
      await createAdminUsers();
      setMessage('Firebase admin users created successfully! You can now login with admin credentials.');
    } catch (error) {
      console.error('Error creating admin users:', error);
      setMessage('Error creating admin users. Check console for details.');
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md w-full border border-white/20">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🔥</div>
          <h1 className="text-2xl font-bold text-white mb-2">Firebase Admin Setup</h1>
          <p className="text-white/70">Create admin users for Firebase authentication</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">Admin Users to Create:</h3>
            <div className="space-y-2 text-sm text-white/80">
              <div>📧 admin@rentza.co.za</div>
              <div>📧 superadmin@rentza.co.za</div>
              <div className="text-xs text-white/60">Password: password123</div>
            </div>
          </div>

          <button
            onClick={handleCreateAdminUsers}
            disabled={isCreating}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCreating ? 'Creating...' : 'Create Admin Users'}
          </button>

          {message && (
            <div className={`p-4 rounded-lg text-sm ${
              message.includes('successfully') 
                ? 'bg-green-500/20 text-green-200 border border-green-400/30'
                : 'bg-red-500/20 text-red-200 border border-red-400/30'
            }`}>
              {message}
            </div>
          )}

          <div className="text-center">
            <a 
              href="/login" 
              className="text-white/70 hover:text-white text-sm underline"
            >
              Go to Login Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupAdmin;
