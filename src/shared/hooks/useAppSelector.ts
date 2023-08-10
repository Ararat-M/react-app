import { type TypedUseSelectorHook, useSelector } from "react-redux";
import type { StateSchema } from "app/providers/storeProvider/config/StateSchema";

export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;