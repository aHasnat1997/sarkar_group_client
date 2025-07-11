import { baseApi } from "../baseApi";

const crewsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allCrews: build.query({
      query: (params) => ({
        method: 'GET',
        url: '/crew/all',
        params
      }),
      providesTags: ['crews']
    }),

    singleCrews: build.query({
      query: (id) => ({
        method: 'GET',
        url: `/crew/${id}`,
      }),
      providesTags: ['crews']
    }),

    addCrew: build.mutation({
      query: (data) => ({
        method: 'POST',
        url: '/crew/create',
        data
      }),
      invalidatesTags: ['crews']
    }),

    updateCrew: build.mutation({
      query: ({ data, crewId }) => ({
        method: 'PATCH',
        url: `/crew/${crewId}/update`,
        data
      }),
      invalidatesTags: ['crews']
    }),

    deleteCrew: build.mutation({
      query: (crewId) => ({
        method: 'DELETE',
        url: `/crew/${crewId}`,
      }),
      invalidatesTags: ['crews']
    }),

    addCrewToProduct: build.mutation({
      query: (data) => ({
        method: 'PATCH',
        url: '/crew/assign/product',
        data
      }),
      invalidatesTags: ['crews', 'products', 'projects']
    })
  })
});

export const {
  useAllCrewsQuery,
  useSingleCrewsQuery,
  useAddCrewMutation,
  useUpdateCrewMutation,
  useDeleteCrewMutation,
  useAddCrewToProductMutation
} = crewsApi;
export default crewsApi;
