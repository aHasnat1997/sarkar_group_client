import { baseApi } from "../baseApi";

const requisitionsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allRequisitions: build.query({
      query: (params) => ({
        method: 'GET',
        url: '/requisition/all',
        params
      }),
      providesTags: ['requisitions']
    }),

    singleRequisitions: build.query({
      query: (id) => ({
        method: 'GET',
        url: `/requisition/${id}`,
      }),
      providesTags: ['requisitions']
    }),

    myRequisitions: build.query({
      query: (params) => ({
        method: 'GET',
        url: '/requisition/all/my',
        params
      }),
      providesTags: ['requisitions']
    }),

    crateRequisition: build.mutation({
      query: (data) => ({
        method: 'POST',
        url: '/requisition/create',
        data: data
      }),
      invalidatesTags: ['requisitions']
    }),

    requisitionStatusUpdate: build.mutation({
      query: ({ requisitionId, data }) => ({
        method: 'PATCH',
        url: `/requisition/${requisitionId}/update/status`,
        data
      }),
      invalidatesTags: ['requisitions']
    }),
  })
});

export const {
  useAllRequisitionsQuery,
  useSingleRequisitionsQuery,
  useMyRequisitionsQuery,
  useCrateRequisitionMutation,
  useRequisitionStatusUpdateMutation
} = requisitionsApi;
export default requisitionsApi;
