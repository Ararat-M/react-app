import type { DeepPartial } from "@reduxjs/toolkit";
import type { CounterSchema } from "../types/CounterSchema";
import { counterActions, counterReducer } from "./counterSlice";

describe("counterSlice", () => {
  test("increment value", () => {
    const state: DeepPartial<CounterSchema> = {
      value: 10
    };
    expect(
      counterReducer(state as CounterSchema, counterActions.increment)
    ).toEqual({ value: 11 });
  });

  test("decrement value", () => {
    const state: DeepPartial<CounterSchema> = {
      value: 10
    };
    expect(
      counterReducer(state as CounterSchema, counterActions.decrement)
    ).toEqual({ value: 9 });
  });
});