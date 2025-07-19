import { baseApi } from "../baseApi";

const mediasApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allMedias: build.query({
      query: (params) => ({
        method: 'GET',
        url: '/medias/all',
        params
      }),
      providesTags: ['medias']
    }),

    singleMedias: build.query({
      query: (id: string) => ({
        method: 'GET',
        url: `/medias/${id}`,
      }),
      providesTags: ['medias']
    }),

    crateMedia: build.mutation({
      query: (data) => ({
        method: 'POST',
        url: '/medias/create',
        data: data
      }),
      invalidatesTags: ['medias']
    }),

    addMediaComment: build.mutation({
      query: ({ mediaId, data }) => ({
        method: 'POST',
        url: `/medias/${mediaId}/comment`,
        data
      }),
      invalidatesTags: ['medias']
    }),

    mediaUpdate: build.mutation({
      query: ({ mediaId, data }) => ({
        method: 'PATCH',
        url: `/medias/${mediaId}`,
        data
      }),
      invalidatesTags: ['medias']
    }),

    mediaDelete: build.mutation({
      query: (mediaId: string) => ({
        method: 'DELETE',
        url: `/medias/${mediaId}`
      }),
      invalidatesTags: ['medias']
    }),

    mediaCommentDelete: build.mutation({
      query: (commentId: string) => ({
        method: 'DELETE',
        url: `/medias/${commentId}/comment`
      }),
      invalidatesTags: ['medias']
    }),
  })
});

export const {
  useAllMediasQuery,
  useSingleMediasQuery,
  useCrateMediaMutation,
  useAddMediaCommentMutation,
  useMediaUpdateMutation,
  useMediaDeleteMutation,
  useMediaCommentDeleteMutation
} = mediasApi;
export default mediasApi;
