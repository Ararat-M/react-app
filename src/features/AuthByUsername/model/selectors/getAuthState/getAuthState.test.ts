import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/storeProvider";
import { getAuthState } from "./getAuthState";

describe("getAuthState", () => {
  test("should return auth state", () => {
    const state: DeepPartial<StateSchema> = {
      auth: { username: "user", password: "123", isLoading: false, error: "err" }
    };
    expect(getAuthState(state as StateSchema)).toStrictEqual({ username: "user", password: "123", isLoading: false, error: "err" });
  });
});