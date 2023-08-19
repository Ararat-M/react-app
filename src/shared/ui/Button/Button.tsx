import { type ButtonHTMLAttributes, type ReactNode } from "react";
import classes from "./button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ButtonTheme {
  DEFAULT = "default",
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  theme?: ButtonTheme;
  disabled?: boolean;
};

export function Button({ children, className = "", theme = ButtonTheme.DEFAULT, disabled = false, ...props }: ButtonProps) {
  const mods = {
    [classes.disabled]: disabled
  };

  return (
    <button
      disabled={disabled}
      className={classNames(classes[theme], [className], mods)}
      {...props}
    >
      {children}
    </button>
  );
};
