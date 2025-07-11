import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: data => {
        return {
          url: '/user/login',
          method: 'POST',
          credentials: 'include',
          data: data
        }
      },
      invalidatesTags: ['auth']
    }),

    userLogout: build.mutation({
      query: () => ({
        url: '/user/logout',
        method: 'POST',
        credentials: 'include',
      }),
      invalidatesTags: ['auth']
    }),

    loggedInUserInfo: build.query({
      query: () => ({
        method: 'GET',
        url: '/user/profile/me'
      }),
      providesTags: ['auth']
    })
  }),
});

export const { useUserLoginMutation, useUserLogoutMutation, useLoggedInUserInfoQuery } = authApi;
