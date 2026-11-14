
import { baseApi } from "./baseApi";
import { ApiMethodType, Apis } from "./constants";
import { FaqArgs, IAPIErrorResponse, IAPISuccesResponse } from "./types";


const baseApiWithTag = baseApi.enhanceEndpoints({
  addTagTypes: ["faqSettings"]
})

const FaqSettings = baseApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    addFaq: builder.mutation({
      query: (body: FaqArgs) => (
        {
          url: Apis.addFaq,
          method: Apis.getMethod(Apis.addFaq),
          body,
        }),
      transformResponse: (
        response: IAPISuccesResponse<any>
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

    updateFaq: builder.mutation({
      query: ({ id, body }: { id: string; body: FaqArgs }) => (
        {
          url: Apis.updateFaqById(id),
          method: "PATCH",
          body,
        }),
      transformResponse: (
        response: IAPISuccesResponse<any>
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
    deleteFaq: builder.mutation({
      query: (body: { id: number }) => (
        {
          url: Apis.deleteFaqById(body?.id),
          method: ApiMethodType.delete,
        }),
      transformResponse: (
        response: IAPISuccesResponse<{}>
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
    getFaqListing: builder.query({
      query: () => (
        {
          url: Apis.getFaqList,
          method: Apis.getMethod(Apis.getFaqList),
        }),
      transformResponse: (
        response: IAPISuccesResponse<any>
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
    getFaqDetailsById: builder.query({
      query: (body: { id: number }) => (
        {
          url: Apis.getFaqById(body.id),
          method: Apis.getMethod(Apis.getFaqById(body.id)),
        }),
      transformResponse: (
        response: IAPISuccesResponse<any>
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
  })
})

export const { useAddFaqMutation, useGetFaqDetailsByIdQuery, useGetFaqListingQuery, useUpdateFaqMutation, useDeleteFaqMutation, useLazyGetFaqListingQuery } = FaqSettings;