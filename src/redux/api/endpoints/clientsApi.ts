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
  })
});

export const { useAllClientsQuery, useSingleClientsQuery } = clientsApi;
export default clientsApi;
