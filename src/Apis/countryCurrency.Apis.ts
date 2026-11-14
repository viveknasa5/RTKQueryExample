import { KycResponseData } from "@/models/KycDetails";
// import { UserDetail, UserDetailResponse } from "../models/UserDetails";
import { baseApi } from "./baseApi";
import { ApiMethodType, Apis } from "./constants";
import {
  IAPIErrorResponse,
  IAPISuccesResponse,
} from "./types";
import { CountryConversionList, CountryCurrencyResponseData } from "@/models/CurrencyConversion";


const baseApiWithTag = baseApi.enhanceEndpoints({
  addTagTypes: ["countryCurrency"],
});

const currencyWithCountryDetails = baseApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getAllCountryCurrencyList: builder.query({
     query: () => ({
        url: Apis.getCountryCurrencyList,
        method: Apis.getMethod(Apis.getCountryCurrencyList),
      }),
      transformResponse: (
        response: IAPISuccesResponse<CountryCurrencyResponseData>
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
    getCountryCurrencyDetailsById: builder.query({
     query: (body:{id?:number}) => ({
        url: Apis.getCountryCurrencyById(body?.id),
        method: Apis.getMethod(Apis.getCountryCurrencyById(body?.id)),
      }),
      transformResponse: (
        response: IAPISuccesResponse<CountryConversionList[]>
      ) => {
        console.log(response?.responseData,"sgdlnwe")
        return response?.responseData[0] ?? {};
      },
      transformErrorResponse: (response: IAPIErrorResponse) => {
        return {
          statusCode: response.data.statusCode,
          message: response?.data?.message ?? response?.data?.error,
        };
      },
    }),
    addCountryCurrencyCharges: builder.mutation({
     query: (body:any) => ({
        url: Apis.addCountryCurrency,
        method: Apis.getMethod(Apis.addCountryCurrency),
        body,
      }),
      transformResponse: (
        response: IAPISuccesResponse<KycResponseData>
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
    updateCountryCurrencyCharges: builder.mutation({
     query: (body:any) => ({
        url: Apis.updateCountryCurrency,
        method: Apis.getMethod(Apis.updateCountryCurrency),
        body,
      }),
      transformResponse: (
        response: IAPISuccesResponse<KycResponseData>
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
    getAllCountryList: builder.query({
     query: () => ({
        url: Apis.getCountryList,
        method: Apis.getMethod(Apis.getCountryList),
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
    getAllConstantsList: builder.query({
     query: () => ({
        url: Apis.getAllConstants,
        method: Apis.getMethod(Apis.getAllConstants),
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
    deleteCurrencyRecordById: builder.mutation({
     query: (body:{id?:number}) => ({
        url: Apis.deleteCountryCurrency(body?.id),
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
      }),
});

export const {useGetAllCountryCurrencyListQuery,useLazyGetAllCountryCurrencyListQuery,
    useAddCountryCurrencyChargesMutation,
    useUpdateCountryCurrencyChargesMutation,
    useGetAllCountryListQuery ,useGetAllConstantsListQuery ,
    useGetCountryCurrencyDetailsByIdQuery,
     useDeleteCurrencyRecordByIdMutation
    } = currencyWithCountryDetails;