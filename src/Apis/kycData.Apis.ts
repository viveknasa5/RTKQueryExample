import { KycResponseData, KycUserResponse, KycUsers } from "@/models/KycDetails";
// import { UserDetail, UserDetailResponse } from "../models/UserDetails";
import { baseApi } from "./baseApi";
import { Apis } from "./constants";
import {
  IAPIErrorResponse,
  IAPISuccesResponse,
  IUserKycStatusArgs,
} from "./types";

const baseApiWithTag = baseApi.enhanceEndpoints({
  addTagTypes: ["kycStatus"],
});


const kycDetails = baseApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getAllKycDoucments: builder.query({
      query: (params) => ({
        url: Apis.getKycDetails,
        method: Apis.getMethod(Apis.getKycDetails),
        params,
      }),
      transformResponse: (
        response: IAPISuccesResponse<KycResponseData>
      ) => {
        return response?.responseData ?? {};
      },
      transformErrorResponse: (response: IAPIErrorResponse) => {
        return {
          statusCode: response.data.statusCode,
          message: response?.data?.message ?? response?.data?.error,
        };
      },
    }),
    kycStatusUpdate: builder.mutation({
      query: (body: IUserKycStatusArgs) => ({
        url: Apis.updateKycStatus,
        method: Apis.getMethod(Apis.updateKycStatus),
        body,
      }),
      transformResponse: (
        response: IAPISuccesResponse<KycResponseData>
      ) => {
        return response?.responseData ?? {};
      },
      transformErrorResponse: (response: IAPIErrorResponse) => {
        return {
          statusCode: response.data.statusCode,
          message: response?.data?.message ?? response?.data?.error,
        };
      },
    }),
    getKycDetailsById: builder.query({
      query: (body: { id: number }) => ({
        url: Apis.getKycByUserId(body?.id),
        method: Apis.getMethod(Apis.getKycByUserId(body?.id)),

      }),
      transformResponse: (
        response: IAPISuccesResponse<KycUsers>
      ) => {
        return response?.responseData ?? {};
      },
      transformErrorResponse: (response: IAPIErrorResponse) => {
        return {
          statusCode: response.data.statusCode,
          message: response?.data?.message ?? response?.data?.error,
        };
      },
    }),
    resetKycVerification: builder.mutation({
      query: (body) => ({
        url: Apis.resetUserKyc,
        method: Apis.getMethod(Apis.resetUserKyc),
        body,
      }),
      transformResponse: (
        response: IAPISuccesResponse<KycUsers>
      ) => {
        return response?.responseData ?? {};
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
export const { useGetAllKycDoucmentsQuery,
  useKycStatusUpdateMutation,
  useLazyGetAllKycDoucmentsQuery,
  useResetKycVerificationMutation,
  useLazyGetKycDetailsByIdQuery } = kycDetails;