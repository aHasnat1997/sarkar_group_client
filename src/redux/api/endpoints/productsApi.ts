import { baseApi } from "../baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allProducts: build.query({
      query: (params) => ({
        method: 'GET',
        url: '/product/all',
        params
      }),
      providesTags: ['products']
    }),

    singleProducts: build.query({
      query: (id) => ({
        method: 'GET',
        url: `/product/${id}`,
      }),
      providesTags: ['products']
    }),

    crateProduct: build.mutation({
      query: (data) => ({
        method: 'POST',
        url: '/product/create',
        data: data
      }),
      invalidatesTags: ['products']
    }),

    productUpdate: build.mutation({
      query: ({ productId, data }) => ({
        method: 'PATCH',
        url: `/product/${productId}/update`,
        data
      }),
      invalidatesTags: ['products']
    }),
  })
});

export const {
  useAllProductsQuery,
  useSingleProductsQuery,
  useCrateProductMutation,
  useProductUpdateMutation
} = productsApi;
export default productsApi;
