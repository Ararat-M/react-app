import { type ButtonHTMLAttributes, type ReactNode } from "react";
import classes from "./button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ButtonTheme {
  DEFAULT = "default",
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  theme?: ButtonTheme;
};

export function Button({ children, className = "", theme = ButtonTheme.DEFAULT, ...props }: IButton) {
  return (
    <button className={classNames(classes[theme], [className])} {...props}>
      {children}
    </button>
  );
};
