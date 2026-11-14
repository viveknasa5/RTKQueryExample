import { baseApi } from "./baseApi";
import { Apis } from "./constants";
import { IAPIErrorResponse, IAPISuccesResponse } from "./types";

const baseApiWithTag = baseApi.enhanceEndpoints({
  addTagTypes: ["transactionApis"]
})


const SetTransactionApis = baseApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getAllTransactionPost: builder.query({
      query: (params) => (
        {
          url: Apis.getTransactionListing,
          method: Apis.getMethod(Apis.getTransactionListing),
          params
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

export const { useGetAllTransactionPostQuery,
  useLazyGetAllTransactionPostQuery }
  = SetTransactionApis;