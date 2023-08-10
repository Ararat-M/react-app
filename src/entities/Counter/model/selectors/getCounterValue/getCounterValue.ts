import type { StateSchema } from "app/providers/storeProvider";

export const getCounterValue = (state: StateSchema) => state.counter.value;