import { classNames } from "shared/lib/classNames/classNames";
import classes from "./text.module.scss";

interface TextProps {
  text: string;
  title?: string;
  textTheme?: TextTheme;
}

export enum TextTheme {
  ERR = "error"
}

export function Text({ title, text, textTheme }: TextProps) {
  const additionalClass: string[] = [
    textTheme ? classes[textTheme] : ""
  ];

  const modsTextClass: Record<string, boolean> = {
    [classes.padding]: Boolean(title)
  };

  return (
    <>
      {title
        ? (
          <p className={classNames(classes.title, additionalClass)}>
            {title}
          </p>)
        : null
      }
      <p
        className={classNames(classes.text, additionalClass, modsTextClass)}
      >
        {text}
      </p>
    </>
  );
};