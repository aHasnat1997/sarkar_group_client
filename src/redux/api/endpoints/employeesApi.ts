import { baseApi } from "../baseApi";

const employeesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allEmployees: build.query({
      query: (params) => ({
        method: 'GET',
        url: '/admin/employee/all',
        params
      }),
      providesTags: ['employees']
    }),

    singleEmployees: build.query({
      query: (id) => ({
        method: 'GET',
        url: `/admin/employee/${id}`,
      }),
      providesTags: ['employees']
    }),
  })
});

export const { useAllEmployeesQuery, useSingleEmployeesQuery } = employeesApi;
export default employeesApi;
