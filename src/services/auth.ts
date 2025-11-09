// src/services/auth.ts

import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from './api';
import { LoginCredentials, RegisterData, AuthResponse } from '../types';

export const authService = {
  async login(credentials: LoginCredentials): Promise<string> {
    const response = await api.post<AuthResponse>('/login', credentials);
    const { token } = response.data;
    await AsyncStorage.setItem('token', token);
    return token;
  },

  async register(data: RegisterData): Promise<void> {
    await api.post('/register', data);
  },

  async logout(): Promise<void> {
    await AsyncStorage.removeItem('token');
  },

  async isAuthenticated(): Promise<boolean> {
    const token = await AsyncStorage.getItem('token');
    return !!token;
  },

  async getToken(): Promise<string | null> {
    return await AsyncStorage.getItem('token');
  },
};