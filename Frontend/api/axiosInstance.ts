import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
// import { getToken } from './axiosInstance';

export function createAxiosInstance(headers:any): AxiosInstance {
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://',
    headers: {
      ...headers,
    },
  });

  axiosInstance.interceptors.request.use((config) => {
	// const authToken = getToken();
    const authToken = '';
	if (authToken) {
	  config.headers.Authorization = `Bearer ${authToken}`;
	}
	return config;
  });

  return axiosInstance;
}
