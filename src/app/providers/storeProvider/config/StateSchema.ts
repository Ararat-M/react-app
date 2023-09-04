import type { CounterSchema } from "entities/Counter";
import type { UserSchema } from "entities/User";
import type { AuthSchema } from "features/AuthByUsername/";
import { type ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { type AnyAction, type CombinedState, type Reducer, type ReducersMapObject } from "@reduxjs/toolkit";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // Async reducers
  auth?: AuthSchema;
}

export type StateSchemaKeys = keyof StateSchema;

export type ReducerObject = {
  [name in StateSchemaKeys]?: Reducer;
};

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKeys, reducer: Reducer) => void;
  remove: (key: StateSchemaKeys) => void;
}

export interface AsyncStore extends ToolkitStore {
  reducerManager?: ReducerManager;
}