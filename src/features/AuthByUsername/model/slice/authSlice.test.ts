import type { DeepPartial } from "@reduxjs/toolkit";
import type { AuthSchema } from "../types/AuthSchema";
import { authActions, authReducer } from "./authSlice";

describe("authSlice", () => {
  const state: DeepPartial<AuthSchema> = {
    username: "",
    password: ""
  };

  test("set username", () => {
    expect(
      authReducer(state as AuthSchema, authActions.setUsername("user"))
    ).toEqual({ username: "user", password: "" });
  });

  test("set password", () => {
    expect(
      authReducer(state as AuthSchema, authActions.setPassword("123"))
    ).toEqual({ username: "", password: "123" });
  });
});