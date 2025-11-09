// src/hooks/useAuth.ts

import { useState, useEffect } from 'react';
import { authService } from '../services/auth';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const authenticated = await authService.isAuthenticated();
    setIsAuthenticated(authenticated);
    setIsLoading(false);
  };

  const login = async (email: string, password: string) => {
    await authService.login({ email, password });
    setIsAuthenticated(true);
  };

  const register = async (email: string, password: string) => {
    await authService.register({ email, password });
  };

  const logout = async () => {
    await authService.logout();
    setIsAuthenticated(false);
  };

  return { isAuthenticated, isLoading, login, register, logout };
};