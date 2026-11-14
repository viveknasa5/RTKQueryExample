
import { baseApi } from "./baseApi";
import { ApiMethodType, Apis } from "./constants";
import { IAPIErrorResponse, IAPISuccesResponse } from "./types";


const baseApiWithTag = baseApi.enhanceEndpoints({
  addTagTypes: ["categoriesApis"]
})

const SetCategoriesApis = baseApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    addCategoryType: builder.mutation({
      query: (body: any) => (
        {
          url: Apis.addCategory,
          method: Apis.getMethod(Apis.addCategory),
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

    updateCategoryType: builder.mutation({
      query: ({ id, body }: { id: string; body: any }) => (
        {
          url: Apis.updateCategory(id),
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

    deleteCategoryType: builder.mutation({

      query: (body: { id: number }) => (
        {
          url: Apis.deleteCategoryById(body?.id),
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
    getAllCategoryListingData: builder.query({
      query: () => (
        {
          url: Apis.getAllCategory,
          method: Apis.getMethod(Apis.getAllCategory),
        }),
      transformResponse: (
        response: IAPISuccesResponse<any>
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
          url: Apis.getCategoryById(body.id),
          method: Apis.getMethod(Apis.getCategoryById(body.id)),
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

export const { useAddCategoryTypeMutation,
  useUpdateCategoryTypeMutation,
  useGetAllCategoryListByIdQuery, useGetAllCategoryListingDataQuery,

  useDeleteCategoryTypeMutation, } = SetCategoriesApis;