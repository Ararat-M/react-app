import type { StateSchema } from "app/providers/storeProvider/";

export const getUserData = (state: StateSchema) => state.user;