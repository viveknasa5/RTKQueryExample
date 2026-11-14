import { UserProps } from "../../models/User";

export interface UserReducerInitialState {
  token: string | null;
  user: UserProps | null;
}
