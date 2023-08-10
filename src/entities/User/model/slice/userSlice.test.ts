import type { DeepPartial } from "@reduxjs/toolkit";
import type { UserSchema } from "../types/UserSchema";
import { userActions, userReducer } from "./userSlice";

describe("userSlice", () => {
  const state: DeepPartial<UserSchema> = {
    id: "1",
    username: "user"
  };

  test("setUserData", () => {
    expect(
      userReducer(state as UserSchema, userActions.setUserData({ id: "2", username: "otherUser" }))
    ).toEqual({ id: "2", username: "otherUser" });
  });

  test("logoutUser", () => {
    expect(
      userReducer(state as UserSchema, userActions.logoutUser())
    ).toEqual({ id: "", username: "" });
  });
});