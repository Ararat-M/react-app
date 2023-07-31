import { type ButtonHTMLAttributes, type ReactNode } from "react";
import classes from "./button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ButtonTheme {
  DEFAULT = "default",
  CLEAR = "clear"
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  theme?: ButtonTheme;
};

export function Button({ children, className = "", theme = ButtonTheme.DEFAULT, ...props }: IButton) {
  return (
    <button className={classNames(classes.default, [className, classes[theme]])} {...props}>
      {children}
    </button>
  );
};
