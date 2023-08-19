import type { DeepPartial } from "@reduxjs/toolkit";
import { getUserData } from "./getUserData";
import type { StateSchema } from "app/providers/storeProvider";

describe("getAuthState", () => {
  test("should return auth state", () => {
    const state: DeepPartial<StateSchema> = {
      user: { id: "1", username: "user" }
    };
    expect(getUserData(state as StateSchema)).toEqual({ id: "1", username: "user" });
  });
});