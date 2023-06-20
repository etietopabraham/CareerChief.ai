import { useState } from 'react';
// import {createAxiosInstance} from "api/axiosInstance";
import { createAxiosInstance } from '@/api/axiosInstance';
import { AxiosError, AxiosResponse } from 'axios';

type HttpMethod = 'post' | 'put' | 'delete';

interface MutateResult {
  isLoading: boolean;
  isError: AxiosError | null;
  mutate: (data: any, headers?:any) => Promise<{ status: string, data?: any, error?:any }>;
}

const defaultHeaders = {
  'Content-Type': 'application/json',
};

const useMutate = (url: string, method: HttpMethod): MutateResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<AxiosError | null>(null);

  const mutate = async (data: any, headers:any=defaultHeaders): Promise<{ status: string, data?: any, error?:any }> => {
    setIsLoading(true);
    setIsError(null);
    try {
      
      const axiosInstance = createAxiosInstance(headers);
      const response: AxiosResponse = await axiosInstance[method](url, data);
      const result: { status: string, data?: any } = {
        status: response.status === 200 || response.status === 201 ? 'success' : 'error'
      };

      if (response.status === 200 || response.status === 201 && response.data) {
        result.data = response.data.data;
      }
      setIsLoading(false);
      return result;
    } catch (error:any) {
      setIsError(error as AxiosError);
      setIsLoading(false);
      const errorMessage = error.response?.data?.message || null;
      return { 
        status: 'error',
        error: errorMessage
      }
    }
  };

  return { isLoading, isError, mutate };
};

export default useMutate;
