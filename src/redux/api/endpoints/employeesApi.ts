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
    })
  })
});

export const { useAllEmployeesQuery } = employeesApi;
export default employeesApi;