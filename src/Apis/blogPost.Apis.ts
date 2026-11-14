import { PostDetails } from "../models/BlogPost";
import { baseApi } from "./baseApi";
import { ApiMethodType, Apis } from "./constants";
import { ChangeBlogPostStatusBody, IAPIErrorResponse, IAPISuccesResponse } from "./types";

const baseApiWithTag = baseApi.enhanceEndpoints({
  addTagTypes: ["blogPostApis"]
})

const SetBlogPostApis = baseApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    addNewBlogPost: builder.mutation({
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
    updateBlogPost: builder.mutation({
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
    deleteBlogPost: builder.mutation({
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
    getAllBlogPost: builder.query({
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

    getBlogPostById: builder.query({
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


    changeBlogPostStatusById: builder.mutation({
      query: (body: ChangeBlogPostStatusBody) => ({
        url: Apis.changePostStatus(body?.id),
        method: "PATCH",
        body: { status: body?.status },
      }),
      transformResponse: (
        response: IAPISuccesResponse<PostDetails>
      ) => {
        return response ?? {};
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
export const { useAddNewBlogPostMutation,
  useUpdateBlogPostMutation,
  useGetAllBlogPostQuery,
  useLazyGetAllBlogPostQuery,
  useDeleteBlogPostMutation, useGetBlogPostByIdQuery, useLazyGetBlogPostByIdQuery, useChangeBlogPostStatusByIdMutation }
  = SetBlogPostApis;