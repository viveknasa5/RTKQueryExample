
import { baseApi } from "./baseApi";
import { ApiMethodType, Apis } from "./constants";
import { IAPIErrorResponse, IAPISuccesResponse } from "./types";


const baseApiWithTag = baseApi.enhanceEndpoints({
  addTagTypes: ["emailTemplates"]
})

const EmailTemplateSettings = baseApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    sendEmailToUser: builder.mutation({
      query: (body: any) => (
        {
          url: Apis.sendEmail,
          method: Apis.getMethod(Apis.sendEmail),
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
    updateEmailTemplateById: builder.mutation({
      query: ({ id, body }: { id: string; body: any }) => (
        {
          url: Apis.updateEmailTemplate(id),
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
    setYourEmailTemplate: builder.mutation({
      query: (body: any) => (
        {
          url: Apis.setEmailTemplate,
          method: Apis.getMethod(Apis.setEmailTemplate),
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
    deleteEmailTemplate: builder.mutation({
      query: (body: { id: number }) => (
        {
          url: Apis.deleteEmailTemplateById(body?.id),
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
    getAllEmailTemplateList: builder.query({
      query: () => (
        {
          url: Apis.getEmailTemplateList,
          method: Apis.getMethod(Apis.getEmailTemplateList),
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
    getEmailTemplateById: builder.query({
      query: (body: { id: number }) => (
        {
          url: Apis.getEmailTemplateById(body?.id),
          method: Apis.getMethod(Apis.getEmailTemplateById(body?.id)),
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

export const { useSendEmailToUserMutation,
  useUpdateEmailTemplateByIdMutation,
  useSetYourEmailTemplateMutation,
  useDeleteEmailTemplateMutation,
  useGetEmailTemplateByIdQuery,
  useLazyGetEmailTemplateByIdQuery,
  useGetAllEmailTemplateListQuery,
  useLazyGetAllEmailTemplateListQuery
} = EmailTemplateSettings;