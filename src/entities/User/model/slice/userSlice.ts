import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { UserSchema } from "../types/UserSchema";
import { USER_LOCAL_STORAGE_KEY } from "shared/const/localStorage";

interface IUserAction {
  id: string;
  username: string;
};

const initialState: UserSchema = {
  id: "",
  username: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUserAction>) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
    },
    initUser: (state) => {
      const user: string | null = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

      if (user != null) {
        const data: IUserAction = JSON.parse(user);
        state.id = data.id;
        state.username = data.username;
      }
    },
    logoutUser: (state) => {
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
      state.id = "";
      state.username = "";
    }
  }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;