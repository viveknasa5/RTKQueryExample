// import { Occupation } from "../models/Occupation";
 import { baseApi } from "./baseApi";
// import { Apis } from "./Constants";
// import { IAPIErrorResponse, IAPISuccesResponse } from "./Types";

const baseApiWithTag = baseApi.enhanceEndpoints({
  addTagTypes: [],
});
const commonApi = baseApiWithTag.injectEndpoints({
    endpoints: (builder) => ({

    })
})
 export const {   } = commonApi;



