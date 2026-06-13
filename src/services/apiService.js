// API Service — Backend Integration
// Jun 2026 by Lakshmi

import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor — add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor — handle errors globally
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    throw error;
  }
);

// Fetch agent performance metrics
export const fetchAgentMetrics = async (filters) => {
  const response = await api.get('/metrics/agents', { params: filters });
  return response;
};

// Fetch dashboard engagement data
export const fetchDashboardData = async (filters) => {
  const response = await api.get('/metrics/engagement', { params: filters });
  return response;
};

// Fetch channel-wise breakdown
export const fetchChannelMetrics = async (filters) => {
  const response = await api.get('/metrics/channels', { params: filters });
  return response;
};

export default api;
