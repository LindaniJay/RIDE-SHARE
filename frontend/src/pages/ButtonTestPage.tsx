import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ButtonDebugger from '../components/ButtonDebugger';

const ButtonTestPage: React.FC = () => {
  return (
    <Router>
      <ButtonDebugger />
    </Router>
  );
};

export default ButtonTestPage;
