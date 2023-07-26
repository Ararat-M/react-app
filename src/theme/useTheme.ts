import { useContext } from "react";
import { ThemeContext, Theme, THEME_LOCAL_STORAGE_KEY } from "./ThemeContext";

export function useTheme() {
  const {theme, setTheme} = useContext(ThemeContext);

  function toogleTheme() {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme);
  }

  return [theme, toogleTheme] as const
}