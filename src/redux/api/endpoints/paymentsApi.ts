import { baseApi } from "../baseApi";

const paymentsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allPayments: build.query({
      query: (params) => ({
        method: 'GET',
        url: '/payment/all',
        params
      }),
      providesTags: ['payments']
    }),

    singlePayments: build.query({
      query: (id) => ({
        method: 'GET',
        url: `/payment/${id}`,
      }),
      providesTags: ['payments']
    }),

    myPayments: build.query({
      query: (params) => ({
        method: 'GET',
        url: '/payment/all/my',
        params
      }),
      providesTags: ['payments']
    }),

    cratePayment: build.mutation({
      query: (data) => ({
        method: 'POST',
        url: '/payment/create',
        data: data
      }),
      invalidatesTags: ['payments']
    }),

    paymentStatusUpdate: build.mutation({
      query: ({ paymentId, data }) => ({
        method: 'PATCH',
        url: `/payment/${paymentId}/update/status`,
        data
      }),
      invalidatesTags: ['payments']
    }),
  })
});

export const {
  useAllPaymentsQuery,
  useSinglePaymentsQuery,
  useMyPaymentsQuery,
  useCratePaymentMutation,
  usePaymentStatusUpdateMutation
} = paymentsApi;
export default paymentsApi;
