import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/storeProvider/config/StateSchema";
import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
  test("should return counter value", () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    };
    expect(getCounterValue(state as StateSchema)).toBe(10);
  });
});