import classes from "./toggleTheme.module.scss";
import { Theme, useTheme } from "app/providers/themeProvider";
import DarkThemeIcon from "shared/assets/icons/dark-theme-icon.svg";
import LightThemeIcon from "shared/assets/icons/light-theme-icon.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

export function ToggleTheme() {
  const [theme, toggleTheme] = useTheme();

  return (
    <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme} className={classNames(classes.btn)}>
      {theme === Theme.DARK
        ? <DarkThemeIcon />
        : <LightThemeIcon />}
    </Button>
  );
};
