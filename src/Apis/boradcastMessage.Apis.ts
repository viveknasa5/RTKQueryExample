
import { baseApi } from "./baseApi";
import { ApiMethodType, Apis } from "./constants";
import { FaqArgs, IAPIErrorResponse, IAPISuccesResponse } from "./types";


const baseApiWithTag = baseApi.enhanceEndpoints({
    addTagTypes: ["broadcastMessages"]
})

const BroadCastMessage = baseApiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        createMessage: builder.mutation({
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

        deleteBroadCastMessage: builder.mutation({
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
        getBroadCastMessageListing: builder.query({
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
    })
})

export const { useCreateMessageMutation,
    useGetBroadCastMessageListingQuery,
    useDeleteBroadCastMessageMutation,
    useLazyGetBroadCastMessageListingQuery } = BroadCastMessage;