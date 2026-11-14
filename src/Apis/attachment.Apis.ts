import { baseApi } from "./baseApi";
import { Apis } from "./constants";
import { IAPIErrorResponse, IAPISuccesResponse } from "./types";

const baseApiWithTag = baseApi.enhanceEndpoints({
  addTagTypes: ["categoriesApis"]
})


const SetAttachmentApis = baseApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    fileUplaoder: builder.mutation({
      query: (body: any) => ({
        url: Apis.uploadFile,
        method: Apis.getMethod(Apis.uploadFile),
        body,


      }),
      transformResponse: (response: IAPISuccesResponse<any>) => {
        return response;
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

export const { useFileUplaoderMutation } = SetAttachmentApis;


