import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { UserSchema } from "entities/User";
import { userActions } from "entities/User/";
import { USER_LOCAL_STORAGE_KEY } from "shared/const/localStorage";

interface IAuthData {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<UserSchema | undefined, IAuthData, { rejectValue: string }>(
  "auth/loginByUsername",
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<UserSchema>("http://localhost:8000/login", authData);

      if (response.data == null) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setUserData(response.data));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
