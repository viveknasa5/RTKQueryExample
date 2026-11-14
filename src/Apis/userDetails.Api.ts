import { UserDetail, UserDetailResponse, UserDetailsSuccessResponse } from "../models/UserDetails";
import { baseApi } from "./baseApi";
import { Apis } from "./constants";
import {
  IAPIErrorResponse,
  IAPISuccesResponse,
} from "./types";

const baseApiWithTag = baseApi.enhanceEndpoints({
  addTagTypes: ["userProfile"],
});


const userDetails = baseApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: (params) => ({
        url: Apis.getAllUser,
        method: Apis.getMethod(Apis.getAllUser),
        params,
      }),
      transformResponse: (
        response: IAPISuccesResponse<UserDetailResponse>
      ) => {
        console.log(response, "sglnsldgnlk")
        return response?.responseData ?? {};
      },
      transformErrorResponse: (response: IAPIErrorResponse) => {
        return {
          statusCode: response.data.statusCode,
          message: response?.data?.message ?? response?.data?.error,
        };
      },
    }),
    getUserDetailById: builder.query({
      query: (body: { id: number }) => ({
        url: Apis.getUserById(body?.id),
        method: Apis.getMethod(Apis.getUserById(body?.id)),
      }),
      transformResponse: (
        response: IAPISuccesResponse<UserDetail>
      ) => {
        console.log(response, "sglnsldgnlk")
        return response?.responseData ?? {};
      },
      transformErrorResponse: (response: IAPIErrorResponse) => {
        return {
          statusCode: response.data.statusCode,
          message: response?.data?.message ?? response?.data?.error,
        };
      },
    }),

    changeUserActiveStatus: builder.mutation({
      query: (body: any) => ({
        url: Apis.changeUserStatus,
        method: Apis.getMethod(Apis.changeUserStatus),
        body,
      }),
      transformResponse: (
        response: IAPISuccesResponse<UserDetailsSuccessResponse>
      ) => {
        return response ?? {};
      },
      transformErrorResponse: (response: IAPIErrorResponse) => {
        return {
          statusCode: response.data.statusCode,
          message: response?.data?.message ?? response?.data?.error,
        };
      },
    }),

    updateEmailMobileInUserDetails: builder.mutation({
      query: (body: any) => ({
        url: Apis.updateUserEmailMobile,
        method: Apis.getMethod(Apis.updateUserEmailMobile),
        body,
      }),
      transformResponse: (
        response: IAPISuccesResponse<UserDetailsSuccessResponse>
      ) => {
        return response ?? {};
      },
      transformErrorResponse: (response: IAPIErrorResponse) => {
        return {
          statusCode: response.data.statusCode,
          message: response?.data?.message ?? response?.data?.error,
        };
      },
    }),
  }),
});
export const { useGetAllUserQuery, useLazyGetAllUserQuery,
  useChangeUserActiveStatusMutation,
  useUpdateEmailMobileInUserDetailsMutation,
  useLazyGetUserDetailByIdQuery,
} = userDetails;