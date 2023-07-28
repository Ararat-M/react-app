import { Link, LinkProps } from "react-router-dom";
import classes from "./appLink.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ReactNode } from "react";

interface IAppLink extends LinkProps{
  children?: ReactNode;
};

export function AppLink({ to, children }: IAppLink) {
  return (
    <Link
      to={to} 
      className={classNames(classes.link)} 
    >
      {children}
    </Link>
  );
};