import { baseApi } from "./baseApi";
import { Apis } from "./constants";
import { GeneralSettingsArgs, IAPICommonErrorResponse, IAPIErrorResponse, IAPISuccesResponse } from "./types";



const baseApiWithTag = baseApi.enhanceEndpoints({
  addTagTypes: ["generalSettings"]
})

const GeneralSettings = baseApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    addGeneralSettings: builder.mutation({
      query: (body: GeneralSettingsArgs) => (
        {
          url: Apis.addSettings,
          method: Apis.getMethod(Apis.addSettings),
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
    updateGeneralSettings: builder.mutation({
      query: (body: GeneralSettingsArgs) => (
        {
          url: Apis.updateSettings,
          method: Apis.getMethod(Apis.updateSettings),
          body,
        }),
      transformResponse: (
        response: IAPISuccesResponse<IAPICommonErrorResponse>
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
    getGeneralSettings: builder.query({
      query: () => (
        {
          url: Apis.getSettings,
          method: Apis.getMethod(Apis.getSettings),
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
export const { useAddGeneralSettingsMutation, useUpdateGeneralSettingsMutation, useGetGeneralSettingsQuery } = GeneralSettings;