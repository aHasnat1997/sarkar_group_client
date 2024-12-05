import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../axios';

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: axiosBaseQuery({ baseUrl: 'http://localhost:3030/smd/api/v1' }),
  endpoints: () => ({}),
  tagTypes: ['auth', 'employees', 'projects', 'clients']
});
