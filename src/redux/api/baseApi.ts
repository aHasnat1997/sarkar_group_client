import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../axios';

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_SERVER_URL! }),
  endpoints: () => ({}),
  tagTypes: ['auth', 'employees', 'projects', 'clients', 'payments', 'requisitions', 'applications', 'products', 'medias', 'dashboards']
});
