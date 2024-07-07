// services/authContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { getUser, setUserSession, resetUserSession } from './AuthService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!getUser());

  useEffect(() => {
    setIsAuthenticated(!!getUser());
  }, []);

  const login = (user, token) => {
    setUserSession(user, token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    resetUserSession();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
