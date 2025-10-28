import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

interface RoleGuardProps {
  allowedRoles: string[];
  children: React.ReactNode;
  fallbackPath?: string;
}

const RoleGuard: React.FC<RoleGuardProps> = ({ 
  allowedRoles, 
  children, 
  fallbackPath = '/' 
}) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      // Check if user has the required role
      if (!allowedRoles.includes(user.role)) {
        toast.error('Access denied. You do not have permission to view this page.');
        navigate(fallbackPath);
      }
    } else if (!loading && !user) {
      // User not authenticated
      toast.error('Please log in to access this page.');
      navigate('/login');
    }
  }, [user, loading, allowedRoles, navigate, fallbackPath]);

  // Show loading while checking authentication
  if (loading) {
    return (
      <div className="page-background">
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
        </div>
      </div>
    );
  }

  // Show nothing while redirecting
  if (!user || !allowedRoles.includes(user.role)) {
    return null;
  }

  return <>{children}</>;
};

export default RoleGuard;
