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

    crateAdmin: build.mutation({
      query: (data) => ({
        method: 'POST',
        url: '/user/registration/admin',
        data: data
      }),
      invalidatesTags: ['employees']
    }),

    crateProjectManager: build.mutation({
      query: (data) => ({
        method: 'POST',
        url: '/user/registration/project-manager',
        data: data
      }),
      invalidatesTags: ['employees']
    }),

    crateEngineer: build.mutation({
      query: (data) => ({
        method: 'POST',
        url: '/user/registration/engineer',
        data: data
      }),
      invalidatesTags: ['employees']
    }),

  })
});

export const {
  useAllEmployeesQuery,
  useSingleEmployeesQuery,
  useCrateAdminMutation,
  useCrateProjectManagerMutation,
  useCrateEngineerMutation
} = employeesApi;
export default employeesApi;
