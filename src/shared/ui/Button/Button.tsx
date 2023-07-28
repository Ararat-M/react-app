import { ButtonHTMLAttributes, ReactNode } from "react";
import classes from "./button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  theme?: ButtonTheme;
};

export enum ButtonTheme {
  CLEAR = "clear"
}

export function Button({ children, className, theme, ...props }: IButton) {
  return (
    <button className={classNames(classes.default, {}, [className, classes[theme]])} {...props}>
      {children}
    </button>
  );
};