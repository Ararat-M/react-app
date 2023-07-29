import classes from "./navbar.module.scss";
import { routeConfig } from "shared/config/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ToggleTheme } from "widgets/ToggleTheme";

export function Navbar() {
  return (
    <div className={classNames(classes.navbar)}>
      <ToggleTheme />
      <div className={classes.links}>
        {Object.values(routeConfig).map(({ path, title }) => (
          <AppLink to={path} key={path}>
            {title}
          </AppLink>
        ))}
      </div>
    </div>
  );
};