import { Input } from "shared/ui/Input/Input";
import classes from "./authForm.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { getAuthState } from "features/AuthByUsername/model/selectors/getAuthState/getAuthState";
import { authActions } from "features/AuthByUsername/model/slice/authSlice";
import { loginByUsername } from "features/AuthByUsername/model/services/authByUsername/loginByUsername";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { useAppSelector } from "shared/hooks/useAppSelector";

export function AuthForm() {
  const authData = useAppSelector(getAuthState);
  const dispatch = useAppDispatch();

  function usernameChangeHandler(value: string) {
    dispatch(authActions.setUsername(value));
  }

  function passwordChangeHandler(value: string) {
    dispatch(authActions.setPassword(value));
  }

  function buttonHandler() {
    dispatch(loginByUsername(authData));
  }

  return (
    <div className={classes["auth-form"]}>
      <Input
        type="text"
        placeholder="Login"
        changeHandler={usernameChangeHandler}
        value={authData.username}
      />
      <Input
        className={classes["auth-input"]}
        type="password"
        placeholder="password"
        changeHandler={passwordChangeHandler}
        value={authData.password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={classes["auth-btn"]}
        onClick={buttonHandler}
      >
        Войти
      </Button>
    </div>
  );
};