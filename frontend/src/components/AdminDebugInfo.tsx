import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { firebaseAuthService } from '../services/firebaseAuth';

const AdminDebugInfo: React.FC = () => {
  const { user, loading } = useAuth();
  const [debugInfo, setDebugInfo] = useState<any>({});

  useEffect(() => {
    const updateDebugInfo = () => {
      setDebugInfo({
        currentUser: user,
        loading,
        firebaseAuth: firebaseAuthService.getCurrentUser(),
        timestamp: new Date().toISOString()
      });
    };

    updateDebugInfo();
    const interval = setInterval(updateDebugInfo, 1000);
    return () => clearInterval(interval);
  }, [user, loading]);

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs max-w-sm z-50">
      <h3 className="font-bold mb-2">User Debug Info</h3>
      <pre className="whitespace-pre-wrap overflow-auto max-h-64">
        {JSON.stringify(debugInfo, null, 2)}
      </pre>
    </div>
  );
};

export default AdminDebugInfo;
