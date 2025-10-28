import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import Icon from './Icon';
import GlassCard from './GlassCard';
import { DashboardSkeleton } from './SkeletonLoader';

interface AdminProtectedRouteProps {
  children: React.ReactNode;
}

const AdminProtectedRoute: React.FC<AdminProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdminAccess = async () => {
      try {
        setLoading(true);
        
        // Check if user is authenticated
        if (!user) {
          console.log('No user authenticated, redirecting to login');
          navigate('/login');
          return;
        }

        // Check if user has admin role from AuthContext
        if (user.role?.toLowerCase() === 'admin') {
          console.log('Admin access verified via AuthContext');
          setIsAdmin(true);
        } else {
          console.log('User does not have admin privileges');
          toast.error('Admin privileges required');
          navigate('/login');
          return;
        }

      } catch (error) {
        console.error('Error checking admin access:', error);
        toast.error('Failed to verify admin access');
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    checkAdminAccess();
  }, [user, navigate]);

  // Show loading state
  if (loading) {
    return <DashboardSkeleton />;
  }

  // Show access denied if not admin
  if (!isAdmin) {
    return (
      <div className="page-background">
        <div className="fixed inset-0 bg-gradient-to-br from-red-900/20 via-purple-900/20 to-indigo-900/20 backdrop-blur-sm"></div>
        <div className="flex items-center justify-center min-h-screen p-4">
          <GlassCard level={3} className="text-center p-8 max-w-md">
            <Icon name="Shield" size="lg" className="text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Access Denied</h2>
            <p className="text-white/70 mb-4">Admin privileges required</p>
            <button
              onClick={() => navigate('/login')}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Login
            </button>
          </GlassCard>
        </div>
      </div>
    );
  }

  // Render children if admin access is confirmed
  return <>{children}</>;
};

export default AdminProtectedRoute;