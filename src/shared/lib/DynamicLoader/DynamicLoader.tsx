import { type ReactNode, useEffect } from "react";
import { useStore, useDispatch } from "react-redux";
import type { AsyncStore, StateSchemaKeys } from "app/providers/storeProvider/config/StateSchema";
import { type ReducerObject } from "app/providers/storeProvider/";

interface DynamicLoaderProps {
  children?: ReactNode;
  reducers: ReducerObject;
  removeAfterUnMount?: boolean;
}

export function DynamicLoader({ children, reducers, removeAfterUnMount }: DynamicLoaderProps) {
  const store = useStore() as AsyncStore;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager?.add(name as StateSchemaKeys, reducer);
      dispatch({ type: `@INIT ${name} state` });
    });

    if (removeAfterUnMount) {
      return () => {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager?.remove(name as StateSchemaKeys);
          dispatch({ type: `@DESTROY ${name} state` });
        });
      };
    }
  }, []);

  return (
    <>
      {children}
    </>
  );
}