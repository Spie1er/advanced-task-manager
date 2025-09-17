import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const serverInstance = axios.create({ baseURL: baseUrl });

const api = (serverClient: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) =>
      serverClient.get<T>(url, config),
    post: <T>(
      url: string,
      body: unknown = null,
      config: AxiosRequestConfig = {}
    ) => serverClient.post<T>(url, body, config),
    delete: <T>(url: string, config: AxiosRequestConfig = {}) =>
      serverClient.delete<T>(url, config),
    patch: <T>(
      url: string,
      body: unknown = null,
      config: AxiosRequestConfig = {}
    ) => serverClient.patch<T>(url, body, config),
    put: <T>(
      url: string,
      body: unknown = null,
      config: AxiosRequestConfig = {}
    ) => serverClient.put<T>(url, body, config),
  };
};

export default api(serverInstance);
