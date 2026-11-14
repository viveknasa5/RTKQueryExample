import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserReducerInitialState } from "./types";
import { RootState } from "../store";
import { UserProps } from "../../models/User";

const initialState: UserReducerInitialState = {
  token: null,
  user: null,
};

const userSlice = createSlice({
  name: "UserSlice",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      return initialState;
    },
    setUserInfo: (
      state,
      action: PayloadAction<{ token: string | null; user: UserProps | null }>
    ) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});
export default userSlice.reducer;

export const { logout, setUserInfo } = userSlice.actions;

export const GetAccessToken = (state: RootState) => state?.user?.token;
