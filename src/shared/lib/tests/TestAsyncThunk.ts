import { type Dispatch, type AsyncThunkAction } from "@reduxjs/toolkit";
import { type StateSchema } from "app/providers/storeProvider";

type Action<Return, Arg, RejectValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectValue }>;

export class TestAsyncThunk<Return, Arg, RejectValue > {
  dispatch: Dispatch;
  setState: () => StateSchema;
  actionCreator: Action<Return, Arg, RejectValue>;

  constructor(actionCreator: Action<Return, Arg, RejectValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.setState = jest.fn();
  };

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.setState, undefined);

    return result;
  }
}