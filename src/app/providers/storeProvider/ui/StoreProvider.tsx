import { Provider } from "react-redux";
import { createReduxStore } from "../config/createReduxStore";
import type { StateSchema } from "../config/StateSchema";

interface IStoreProvider {
  children?: React.ReactNode;
  initialState?: StateSchema;
}

export function StoreProvider({ children, initialState }: IStoreProvider) {
  const store = createReduxStore(initialState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};