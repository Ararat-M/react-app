import { Input } from "shared/ui/Input/Input";
import classes from "./authForm.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

export function AuthForm() {
  return (
    <div className={classes["auth-form"]}>
      <Input
        type="text"
        placeholder="Login"
      />
      <Input
        className={classes["auth-input"]}
        type="password"
        placeholder="password"
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={classes["auth-btn"]}
      >
        Войти
      </Button>
    </div>
  );
};