import { baseApi } from "../baseApi";

const requestProductsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allRequestProducts: build.query({
      query: (params) => ({
        method: 'GET',
        url: '/request-products/all',
        params
      }),
      providesTags: ['requestProducts']
    }),

    singleRequestProducts: build.query({
      query: (id) => ({
        method: 'GET',
        url: `/request-products/${id}`,
      }),
      providesTags: ['requestProducts']
    }),

    myRequestProducts: build.query({
      query: (params) => ({
        method: 'GET',
        url: '/request-products/all/my',
        params
      }),
      providesTags: ['requestProducts']
    }),

    crateRequestProduct: build.mutation({
      query: (data) => ({
        method: 'POST',
        url: '/request-products/create',
        data: data
      }),
      invalidatesTags: ['requestProducts', 'projects', 'products']
    }),

    requestProductStatusUpdate: build.mutation({
      query: ({ requestProductId, data }) => ({
        method: 'PATCH',
        url: `/request-products/${requestProductId}/update/status`,
        data
      }),
      invalidatesTags: ['requestProducts', 'projects', 'products']
    }),
  })
});

export const {
  useAllRequestProductsQuery,
  useSingleRequestProductsQuery,
  useMyRequestProductsQuery,
  useCrateRequestProductMutation,
  useRequestProductStatusUpdateMutation
} = requestProductsApi;
export default requestProductsApi;
