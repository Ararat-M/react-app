import { Provider } from "react-redux";
import { createReduxStore } from "../config/createReduxStore";
import type { StateSchema } from "../config/StateSchema";
import type { DeepPartial } from "@reduxjs/toolkit";

interface IStoreProvider {
  children?: React.ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export function StoreProvider({ children, initialState }: IStoreProvider) {
  const store = createReduxStore(initialState as StateSchema);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}