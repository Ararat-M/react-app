import { type ReactNode, useMemo, useState } from "react";
import { THEME_LOCAL_STORAGE_KEY, Theme, ThemeContext } from "../lib/ThemeContext";

interface IThemeProvider {
  children?: ReactNode;
  initialTheme?: Theme;
}

const defaultTheme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as Theme ?? Theme.LIGHT;

export function ThemeProvider({ children, initialTheme = defaultTheme }: IThemeProvider) {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
}
