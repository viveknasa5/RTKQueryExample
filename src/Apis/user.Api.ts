import { baseApi } from "./baseApi";
import { Apis } from "./constants";
import {UserProps} from "../models/User"
import {
  IAPIErrorResponse,
  IAPISuccesResponse,
  IUserLoginArgs,
} from "./types";

const baseApiWithTag = baseApi.enhanceEndpoints({
  addTagTypes: ["userProfile"],
});

const userApi = baseApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: IUserLoginArgs) => ({
        url: Apis.login,
        method: Apis.getMethod(Apis.login),
        body,
      }),
      transformResponse: (response: IAPISuccesResponse<UserProps>) => {
        return response.responseData;
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

export const { useLoginMutation } = userApi;
