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
  })
});

export const { useAllProjectsQuery, useSingleProjectsQuery } = projectsApi;
export default projectsApi;
