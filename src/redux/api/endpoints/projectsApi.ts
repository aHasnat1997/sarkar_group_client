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
      })
    }),

    removeEngineerFromProject: build.mutation({
      query: ({ data, projectId }) => ({
        method: 'POST',
        url: `/project/${projectId}/remove-engineer`,
        data
      })
    }),

    removeProductFromProject: build.mutation({
      query: ({ data, projectId }) => ({
        method: 'POST',
        url: `/project/${projectId}/remove-product`,
        data
      })
    }),

    updateProject: build.mutation({
      query: ({ data, projectId }) => ({
        method: 'POST',
        url: `/project/${projectId}/remove-product`,
        data
      })
    }),



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
  useUpdateProjectMutation
} = projectsApi;
export default projectsApi;
