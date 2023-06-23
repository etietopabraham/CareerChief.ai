import axios, { AxiosInstance } from 'axios';

export const getToken = () => {
  // Check if localStorage is available
  if (typeof window !== 'undefined' && window.localStorage) {
    // Retrieve the token from local storage
    const authToken = localStorage.getItem('');
    return authToken;
  }

  return null;
};

const getAxiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://',
  headers: {
    'Content-Type': 'application/json',
  },
});

getAxiosInstance.interceptors.request.use((config) => {
  const authToken = getToken();
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

export default getAxiosInstance;
