import { Input } from "shared/ui/Input/Input";
import classes from "./authForm.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { getAuthState } from "../../model/selectors/getAuthState/getAuthState";
import { authActions, authReducer } from "../../model/slice/authSlice";
import { loginByUsername } from "../../model/services/authByUsername/loginByUsername";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { useSelector, useStore } from "react-redux";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { useEffect } from "react";
import { type AsyncStore } from "app/providers/storeProvider/config/StateSchema";

export default function AuthForm() {
  const dispatch = useAppDispatch();
  const store = useStore() as AsyncStore;
  const { username, password, error, isLoading } = useSelector(getAuthState);

  useEffect(() => {
    store.reducerManager?.add("auth", authReducer);
    dispatch({ type: "@INIT auth state" });

    return () => {
      dispatch({ type: "@DESTROY auth state" });
      store.reducerManager?.remove("auth");
    };
  }, []);

  function usernameChangeHandler(value: string) {
    dispatch(authActions.setUsername(value));
  }

  function passwordChangeHandler(value: string) {
    dispatch(authActions.setPassword(value));
  }

  function buttonHandler() {
    dispatch(loginByUsername({
      username,
      password
    }));
  }

  return (
    <div className={classes["auth-form"]}>
      {error && <Text textTheme={TextTheme.ERR} text={error}/>}
      <Input
        type="text"
        placeholder="Login"
        changeHandler={usernameChangeHandler}
        value={username}
      />
      <Input
        className={classes["auth-input"]}
        type="password"
        placeholder="password"
        changeHandler={passwordChangeHandler}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={classes["auth-btn"]}
        onClick={buttonHandler}
        disabled={isLoading}
      >
        Войти
      </Button>
    </div>
  );
};