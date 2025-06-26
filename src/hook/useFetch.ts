
import { Fetch } from '@/network/fetch';
import { Method } from 'axios';
import React, { useState, useEffect } from 'react';


interface FetchOptions {
  method?: Method; // HTTP method: 'GET' | 'POST' | 'PUT' | 'DELETE', etc.
  url: string; // API endpoint
  headers?: Record<string, string>; // Optional custom headers
  withCredentials?: boolean;
  params?: any; // Optional query parameters
  fetchOnLoad?: boolean; // Determines if fetch should happen on component load
  body?: any; // Request body for POST/PUT requests
  limit?:number
}

export default function useFetch({
  method = "GET",
  url,
  params = null,
  body,
  headers = {},
  fetchOnLoad = true,
  limit=10
}: FetchOptions) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [page, setPage] = useState<number>(1);
  const [pageLimit, setPageLimit] = useState<number>(limit);
  const [totalResponsePages, setTotalResponsePages] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  async function fetchData(customParams?: any, customUrlParams?: string) {
    console.log("fetching data...")
    setLoading(true);
    setError(null);

    let newUrl = url;
    // if (customUrlParams) newUrl = url + "/" + customUrlParams;
    console.log(newUrl)

    console.log("Fetching data with:", {
      method,
      url: newUrl,
      headers,
      data: { ...body },
      params: { page, limit: pageLimit, ...params, ...customParams },
    });

    try {
      const response: any = await Fetch({
        method,
        url: newUrl,
        headers,
        data: { ...body },
        params: { ...params, ...customParams, page, limit: pageLimit },
        withCredentials:false
      });

      if (response.success) {
        setData(response.data.data);
        if (response.data.pagination) {
          setTotalResponsePages(response.data.pagination.totalPages);
          setPage(response.data.pagination.page);
          setTotal(response.data.pagination.total || 0);
        } else {
          setTotalResponsePages(response.data.totalPages);
          setPage(response.data.currentPage);
        }
        return response.data; // ✅ Return response after updating state
      } else {
        setError(response.message);
        return Promise.reject(response?.message || "Unknown error");
        // throw new Error(response.message);
      }
    }finally {
      setLoading(false); // ✅ Ensures `loading` is updated after API call completes
    }
  }

  useEffect(() => {
    if (fetchOnLoad) {
      fetchData();
    }
  }, [fetchOnLoad, url, method, page, pageLimit]); // Re-fetch when dependencies change

  return {
    data,
    loading,
    error,
    fetchData,
    pageLimit,
    page,
    totalResponsePages,
    setPageLimit,
    setPage,
    total,
    setTotal
  };
}