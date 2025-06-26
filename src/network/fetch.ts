import axios, { AxiosRequestConfig, Method } from "axios";


interface FetchOptions {
  method: Method; // HTTP method: 'GET' | 'POST' | 'PUT' | 'DELETE', etc.
  url: string; // API endpoint
  data?: any; // Request body for POST/PUT
  headers?: Record<string, string>; // Optional custom headers
  params?: any;
  withCredentials?: boolean; // Whether to send cookies with the request
}

export const Fetch = async ({
  method,
  url,
  data,
  headers = {},
  params,
  withCredentials,
}: FetchOptions) => {
  try {
    const config: AxiosRequestConfig = {
      method,
      url,
      headers,
      data,
      params,
      withCredentials,
    };

    const response = await axios(config);

    return { success: true, data: response.data };
  } catch (error: any) {
    
    return {
        success: false,
        message: error.response?.data?.message || "Something went wrong",
        error,
      };
  }
};

