import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from "axios";
import { instance as axiosInstance } from "./axiosInstance";

type IMeta = {
  page: number,
  limit: number,
  total: number,
  totalPage: number,
};

export const axiosBaseQuery = (
  { baseUrl }: { baseUrl: string } = { baseUrl: "" }
): BaseQueryFn<
  {
    url: string;
    method?: AxiosRequestConfig["method"];
    data?: AxiosRequestConfig["data"];
    params?: AxiosRequestConfig["params"];
    headers?: AxiosRequestConfig["headers"];
    meta?: IMeta;
    contentType?: string;
  },
  unknown,
  unknown
> =>
  async ({ url, method, data, params, headers, contentType }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          "Content-Type": contentType || "application/json",
          ...headers
        },
      });
      // Return data in a structure that RTK Query expects
      return { data: result.data };  // <---- Add this line
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
