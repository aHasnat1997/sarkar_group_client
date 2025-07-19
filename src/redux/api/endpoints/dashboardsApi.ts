import { baseApi } from "../baseApi";

const dashboardsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    adminDashboard: build.query({
      query: (params) => ({
        method: 'GET',
        url: '/dashboard/admin',
        params
      }),
      providesTags: ['dashboards']
    }),

    projectManagerDashboard: build.query({
      query: (params) => ({
        method: 'GET',
        url: '/dashboard/project-manager',
        params
      }),
      providesTags: ['dashboards']
    }),

    engineerDashboard: build.query({
      query: (params) => ({
        method: 'GET',
        url: '/dashboard/engineer',
        params
      }),
      providesTags: ['dashboards']
    }),
  })
});

export const {
  useAdminDashboardQuery,
  useProjectManagerDashboardQuery,
  useEngineerDashboardQuery
} = dashboardsApi;
export default dashboardsApi;
