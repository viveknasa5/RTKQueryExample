import { CurrencyResponse } from "@/models/CurrencyConversion";
import { baseApi } from "./baseApi";
import { Apis } from "./constants";
import { IAPIErrorResponse, IAPISuccesResponse } from "./types";


const baseApiWithTag = baseApi.enhanceEndpoints({
  addTagTypes: ["currencyConversions"]
})

const CurrencyConversion = baseApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getAllCurrencyList: builder.query({
      query: (body: any) => (
        {
          url: Apis.getCurrencyConversion(body?.id),
          method: Apis.getMethod(Apis.getCurrencyConversion(body?.id)),
        }),
      transformResponse: (
        response: IAPISuccesResponse<CurrencyResponse>
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

    upDateCurrencyData: builder.mutation({
      query: (body: any) => (
        {
          url: Apis.updateCurrencyConversion,
          method: Apis.getMethod(Apis.updateCurrencyConversion),
          body,
        }),
      transformResponse: (
        response: IAPISuccesResponse<CurrencyResponse>
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

export const { useGetAllCurrencyListQuery, useUpDateCurrencyDataMutation, useLazyGetAllCurrencyListQuery } = CurrencyConversion;