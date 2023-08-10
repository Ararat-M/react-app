import type { InputHTMLAttributes } from "react";
import classes from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  changeHandler: (value: string) => void;
}

export function Input({
  value,
  changeHandler,
  placeholder
}: InputProps) {
  return (
    <>
      <input
        className={classes.input}
        value={value}
        onChange={(e) => { changeHandler(e.target.value); }}
        placeholder={placeholder}
      />
    </>
  );
};