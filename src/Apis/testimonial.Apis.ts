import { baseApi } from "./baseApi";
import { ApiMethodType, Apis } from "./constants";
import { ChangeBlogPostStatusBody, IAPIErrorResponse, IAPISuccesResponse } from "./types";

const baseApiWithTag = baseApi.enhanceEndpoints({
    addTagTypes: ["testimonialApis"]
})

const SetTestimonialApis = baseApiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        createTestimonial: builder.mutation({
            query: (body: any) => (
                {
                    url: Apis.createNewPost,
                    method: Apis.getMethod(Apis.createNewPost),
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
        updateTestimonial: builder.mutation({
            query: ({ id, body }: { id: string; body: any }) => (
                {
                    url: Apis.updatePostById(id),
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
        deleteTestimonial: builder.mutation({
            query: (body: { id: number }) => (
                {
                    url: Apis.deletePostById(body?.id),
                    method: ApiMethodType.delete,
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
        getAllTestimonial: builder.query({
            query: (body: any) => (
                {
                    url: Apis.getAllPostList,
                    method: Apis.getMethod(Apis.getAllPostList),
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

        getTestimonialById: builder.query({
            query: (body: { id: number }) => (
                {
                    url: Apis.getPostById(body?.id),
                    method: Apis.getMethod(Apis.getPostById(body?.id)),
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


        changeTestimonialStatusById: builder.mutation({
            query: (body: ChangeBlogPostStatusBody) => ({
                url: Apis.changePostStatus(body?.id),
                method: "PATCH",
                body: { status: body?.status },
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
        })

    })
})
export const { useCreateTestimonialMutation,
    useUpdateTestimonialMutation,
    useGetAllTestimonialQuery,
    useLazyGetAllTestimonialQuery,
    useDeleteTestimonialMutation, useGetTestimonialByIdQuery, useLazyGetTestimonialByIdQuery, useChangeTestimonialStatusByIdMutation }
    = SetTestimonialApis;