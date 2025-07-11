import { baseApi } from "../baseApi";

const clientsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allClients: build.query({
      query: (params) => ({
        method: 'GET',
        url: '/client/all',
        params
      }),
      providesTags: ['clients']
    }),

    singleClients: build.query({
      query: (id) => ({
        method: 'GET',
        url: `/client/${id}`,
      }),
      providesTags: ['clients']
    }),

    addClient: build.mutation({
      query: (data) => ({
        method: 'POST',
        url: '/user/registration/client',
        data
      }),
      invalidatesTags: ['clients']
    }),

    updateClient: build.mutation({
      query: ({ data, userId }) => ({
        method: 'PATCH',
        url: `/client/${userId}/update`,
        data
      }),
      invalidatesTags: ['clients']
    }),

    deleteClient: build.mutation({
      query: (userId) => ({
        method: 'DELETE',
        url: `/user/${userId}/soft-delete`,
      }),
      invalidatesTags: ['clients']
    }),
  })
});

export const {
  useAllClientsQuery,
  useSingleClientsQuery,
  useAddClientMutation,
  useUpdateClientMutation,
  useDeleteClientMutation
} = clientsApi;
export default clientsApi;
