import React, { useState } from 'react';
import HostLoginModal from './HostLoginModal';
import HostSignupModal from './HostSignupModal';

interface HostAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

const HostAuthModal: React.FC<HostAuthModalProps> = ({ 
  isOpen, 
  onClose, 
  initialMode = 'login' 
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);

  const handleSwitchToSignup = () => {
    setMode('signup');
  };

  const handleSwitchToLogin = () => {
    setMode('login');
  };

  const handleClose = () => {
    setMode(initialMode); // Reset to initial mode when closing
    onClose();
  };

  return (
    <>
      <HostLoginModal
        isOpen={isOpen && mode === 'login'}
        onClose={handleClose}
        onSwitchToSignup={handleSwitchToSignup}
      />
      <HostSignupModal
        isOpen={isOpen && mode === 'signup'}
        onClose={handleClose}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </>
  );
};

export default HostAuthModal;
