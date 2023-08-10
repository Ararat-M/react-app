import type { CounterSchema } from "entities/Counter";
import type { UserSchema } from "entities/User";
import type { AuthSchema } from "features/AuthByUsername/";

export interface StateSchema {
  counter: CounterSchema;
  auth: AuthSchema;
  user: UserSchema;
}