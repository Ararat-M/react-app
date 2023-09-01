import { type ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import type { AsyncStore, StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { createReducerManager } from "app/providers/storeProvider/config/createReducerManager";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer
  };

  const reducerManager = createReducerManager(rootReducers);

  const store: AsyncStore = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: true,
    preloadedState: initialState
  });

  store.reducerManager = reducerManager;

  return store;
}
