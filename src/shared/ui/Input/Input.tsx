import type { InputHTMLAttributes } from "react";
import classes from "./input.module.scss";

export function Input({
  value,
  onChange,
  placeholder
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <input
        className={classes.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};