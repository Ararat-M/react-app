import { Link, type LinkProps } from "react-router-dom";
import classes from "./appLink.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { type ReactNode } from "react";

interface AppLinkProps extends LinkProps {
  children?: ReactNode;
};

export function AppLink({ to, children }: AppLinkProps) {
  return (
    <Link
      to={to}
      className={classNames(classes.link)}
    >
      {children}
    </Link>
  );
};
