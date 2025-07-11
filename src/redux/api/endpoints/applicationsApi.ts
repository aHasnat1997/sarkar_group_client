import { baseApi } from "../baseApi";

const applicationsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allApplications: build.query({
      query: (params) => ({
        method: 'GET',
        url: '/application/all',
        params
      }),
      providesTags: ['applications']
    }),

    singleApplications: build.query({
      query: (id) => ({
        method: 'GET',
        url: `/application/${id}`,
      }),
      providesTags: ['applications']
    }),

    myApplications: build.query({
      query: (params) => ({
        method: 'GET',
        url: '/application/all/my',
        params
      }),
      providesTags: ['applications']
    }),

    crateApplication: build.mutation({
      query: (data) => ({
        method: 'POST',
        url: '/application/create',
        data: data
      }),
      invalidatesTags: ['applications']
    }),

    applicationStatusUpdate: build.mutation({
      query: ({ applicationId, data }) => ({
        method: 'PATCH',
        url: `/application/${applicationId}/update/status`,
        data
      }),
      invalidatesTags: ['applications']
    }),
  })
});

export const {
  useAllApplicationsQuery,
  useSingleApplicationsQuery,
  useMyApplicationsQuery,
  useCrateApplicationMutation,
  useApplicationStatusUpdateMutation
} = applicationsApi;
export default applicationsApi;
