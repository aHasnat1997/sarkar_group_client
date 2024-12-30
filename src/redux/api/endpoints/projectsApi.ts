import { baseApi } from "../baseApi";

const projectsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allProjects: build.query({
      query: (params) => ({
        method: 'GET',
        url: '/project/all',
        params
      }),
      providesTags: ['projects']
    }),

    singleProjects: build.query({
      query: (id) => ({
        method: 'GET',
        url: `/project/${id}`,
      }),
      providesTags: ['projects']
    }),

    createProjects: build.mutation({
      query: (data) => ({
        method: 'POST',
        url: '/project/create',
        data
      }),
      invalidatesTags: ['projects']
    }),

    addEngineerToProject: build.mutation({
      query: ({ data, projectId }) => ({
        method: 'POST',
        url: `/project/${projectId}/add-engineer`,
        data
      }),
      invalidatesTags: ['projects']
    }),

    addProductToProject: build.mutation({
      query: ({ data, projectId }) => ({
        method: 'POST',
        url: `/project/${projectId}/add-product`,
        data
      }),
      invalidatesTags: ['projects']
    }),

    removeEngineerFromProject: build.mutation({
      query: ({ data, projectId }) => ({
        method: 'POST',
        url: `/project/${projectId}/remove-engineer`,
        data
      }),
      invalidatesTags: ['projects']
    }),

    removeProductFromProject: build.mutation({
      query: ({ data, projectId }) => ({
        method: 'POST',
        url: `/project/${projectId}/remove-product`,
        data
      }),
      invalidatesTags: ['projects']
    }),

    updateProject: build.mutation({
      query: ({ data, projectId }) => ({
        method: 'PATCH',
        url: `/project/${projectId}/update`,
        data
      }),
      invalidatesTags: ['projects']
    }),

    addProjectGallery: build.mutation({
      query: (data) => ({
        method: 'POST',
        url: '/project-gallery/create',
        data
      }),
      invalidatesTags: ['projects', 'gallery']
    }),

    getAllProjectGallery: build.query({
      query: (params) => ({
        method: 'GET',
        url: '/project-gallery/all',
        params
      }),
      providesTags: ['projects', 'gallery']
    }),

    getSingleProjectGallery: build.query({
      query: (id) => ({
        method: 'GET',
        url: `/project-gallery/${id}`
      }),
      providesTags: ['projects', 'gallery']
    }),

    removeProjectGallery: build.mutation({
      query: ({ data, id }) => ({
        method: 'DELETE',
        url: `/project-gallery/${id}`,
        data
      }),
      invalidatesTags: ['projects', 'gallery']
    }),

    addCommentToProjectGallery: build.mutation({
      query: ({ data, id }) => ({
        method: 'POST',
        url: `/project-gallery/${id}/add-comment`,
        data
      }),
      invalidatesTags: ['projects', 'gallery']
    })
  })
});

export const {
  useAllProjectsQuery,
  useSingleProjectsQuery,
  useCreateProjectsMutation,
  useAddEngineerToProjectMutation,
  useAddProductToProjectMutation,
  useRemoveEngineerFromProjectMutation,
  useRemoveProductFromProjectMutation,
  useUpdateProjectMutation,
  useAddProjectGalleryMutation,
  useGetAllProjectGalleryQuery,
  useGetSingleProjectGalleryQuery,
  useRemoveProjectGalleryMutation,
  useAddCommentToProjectGalleryMutation
} = projectsApi;
export default projectsApi;
