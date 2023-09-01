import type { StateSchema } from "app/providers/storeProvider";

export const getAuthState = (state: StateSchema) => state?.auth ?? {
  username: "",
  password: "",
  error: null,
  isLoading: false
};
