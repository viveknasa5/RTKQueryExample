
import { CategoryDetailsResponse, CategoryListing } from "../models/CategoryType";
import { baseApi } from "./baseApi";
import { ApiMethodType, Apis } from "./constants";
import { IAPIErrorResponse, IAPISuccesResponse } from "./types";


const baseApiWithTag = baseApi.enhanceEndpoints({
    addTagTypes: ["postCategoriesApis"]
})

const SetCategoriesApis = baseApiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        addPostCategory: builder.mutation({
            query: (body: any) => (
                {
                    url: Apis.createNewCategory,
                    method: Apis.getMethod(Apis.createNewCategory),
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
        updatePostCategory: builder.mutation({
            query: ({ id, body }: { id: string; body: any }) => (
                {
                    url: Apis.updatePostCategory(id),
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

        deletePostCategory: builder.mutation({

            query: (body: { id: number }) => (
                {
                    url: Apis.deletePostCategoryById(body?.id),
                    method: ApiMethodType.delete,
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
        getAllCategoryListing: builder.query({
            query: () => (
                {
                    url: Apis.getAllPostCategory,
                    method: Apis.getMethod(Apis.getAllPostCategory),
                }),
            transformResponse: (
                response: IAPISuccesResponse<CategoryDetailsResponse>
            ) => {
                console.log(response, "sglnwje")
                return response?.responseData ?? {};
            },
            transformErrorResponse: (response: IAPIErrorResponse) => {
                return {
                    statusCode: response.data.statusCode,
                    message: response?.data?.message ?? response?.data?.error,
                };
            },
        }),
        getAllCategoryListById: builder.query({
            query: (body: { id: number }) => (
                {
                    url: Apis.getPostCategoryById(body.id),
                    method: Apis.getMethod(Apis.getPostCategoryById(body.id)),
                }),
            transformResponse: (
                response: IAPISuccesResponse<CategoryListing>
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
})
export const { useAddPostCategoryMutation,
    useUpdatePostCategoryMutation,
    useDeletePostCategoryMutation,
    useGetAllCategoryListByIdQuery,
    useGetAllCategoryListingQuery,
    useLazyGetAllCategoryListingQuery
} = SetCategoriesApis;