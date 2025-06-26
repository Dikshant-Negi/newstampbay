
import { Fetch } from "@/network/fetch";
import { Method } from "axios";
import { useState } from "react";



interface FetchOptions {
  method?: Method;
  url: string; // API endpoint
  headers?: Record<string, string>; // Optional custom headers
  withCredentials?: boolean;
  body?: any;
  params?: any;
}

export default function usePost({
  method = "POST",
  url,
  body,
  params,
  headers = {},
}: FetchOptions) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  console.log("body-->", body);
  async function postData(customBody?: any): Promise<any> {
    setLoading(true);
    setError(null);
    const token = localStorage.getItem("token")
    if(token){
      headers.authorization = `Bearer ${token}`
    }
    try {
      let response: any = [];
      response = await Fetch({
        method,
        url,
        data: customBody || body,
        headers,
        params,
        withCredentials: false,
      });
      console.log("response from hook-->", response);

      if (response?.success) {
        setData(response.data);
        return response.data; 
      }

      setError(response?.error || response?.message || "Unknown error"); // Handle API errors
      return Promise.reject(response?.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, postData };
}