import { RootState } from '@/redux/store';
import {
  BaseQueryApi,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { IAPICommonErrorResponse } from './types';
// import { RootState } from '../Redux/store';


const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_BASE_URL,
  credentials: 'include',
  timeout: 30000,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState)?.user?.token
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    //  headers.set("Content-Type", "application/json");
    headers.set('language', 'en');
    return headers;
  },
});





const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {},
) => {

  let result = await baseQuery(args, api, extraOptions);


  if (result.error) {
    console.log(result.error, "sdglkngsdlkgn")
    let error = { ...result }
    if (result?.error && result?.error?.status === 'TIMEOUT_ERROR') {
      error.error.data = {
        statusCode: 511,
        message: 'Request timeout. Please try again after some time.',
      };
    } else if (result.error && result.error.status === 'FETCH_ERROR') {
      error.error.data = {
        statusCode: 511,
        message: 'No Internet Connection. Please try again later',
      };
    } else if (result.error && result.error.status === 'PARSING_ERROR') {
      error.error.data = {
        statusCode: 404,
        message: 'Something went wrong. Please try again later',
      };
    }
    else if (result.error && (result.error as unknown as IAPICommonErrorResponse).statusCode === 401) {
      error.error.data = {
        statusCode: 401,
        message: 'Something went wrong. Please try again later',
      };
    }
    return error;

  } else {
    return result
  }
};

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
