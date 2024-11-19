import { baseApi } from "../baseApi";

const employeesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allEmployees: build.query({
      query: () => ({
        method: 'GET',
        url: '/admin/employee/all'
      }),
      providesTags: ['employees']
    })
  })
});

export const { useAllEmployeesQuery } = employeesApi;
export default employeesApi;