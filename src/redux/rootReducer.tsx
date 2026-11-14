import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user/user-slice";
import { baseApi } from "../Apis/baseApi";

const combineReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  user: userSlice,
});

const rootReducer = (
  state: ReturnType<typeof combineReducer> | undefined,
  action: { type: string }
) => {
  if (action.type === "RESET") {
    state = undefined;
  }
  return combineReducer(state, action);
};
export default rootReducer;
