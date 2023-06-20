import React from 'react';
import useSWR from 'swr';
import getAxiosInstance from '@/api/getAxiosInstance';

const useFetch = (url: string) => {
  const { data, error, isLoading, mutate } = useSWR(url, () => getAxiosInstance.get(url).then((res) => res.data),{
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const refetch = async () => {
    mutate();
  };

  return { data, error, loading:isLoading, refetch };
 
};


export default useFetch;