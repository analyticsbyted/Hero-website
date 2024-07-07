import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInactivityTimer from './hooks/useInactivityTimer';
import { resetUserSession } from './service/AuthService';

const mins = 20
const timeout = mins * 60 * 1000 // minutes in milliseconds

const InactivityLogout = ({ timeout }) => { 
  const navigate = useNavigate();

  const logoutAction = () => {
    resetUserSession();
    navigate('/');
  };

  useInactivityTimer(timeout, logoutAction);

  return null;
};

export default InactivityLogout;
