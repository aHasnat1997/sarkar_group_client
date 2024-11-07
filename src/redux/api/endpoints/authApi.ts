import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userRegister: build.mutation({
      query: data => ({
        url: '/auth/user/register',
        method: 'POST',
        data: data
      }),
      invalidatesTags: ['auth']
    }),

    userLogin: build.mutation({
      query: data => {
        return {
          url: '/auth/login',
          method: 'POST',
          credentials: 'include',
          data: data
        }
      },
      invalidatesTags: ['auth']
    }),

    userLogout: build.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
        credentials: 'include',
      }),
      invalidatesTags: ['auth']
    }),
  }),
});

export const { useUserLoginMutation, useUserRegisterMutation, useUserLogoutMutation } = authApi;
