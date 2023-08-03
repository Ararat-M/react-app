import { Button, ButtonTheme } from "shared/ui/Button/Button";
import classes from "./sidebar.module.scss";
import { ToggleTheme } from "widgets/ToggleTheme";
import { routeConfig } from "shared/config/routeConfig";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { useState } from "react";
import { Modal } from "shared/ui/Modal/Modal";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function onClose() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={classes.sidebar}>
      <div className={classes["sidebar-collapse-btn"]}>
        <Button theme={ButtonTheme.CLEAR} >
          {">"}
        </Button>
      </div>
      <div className={classes["sidebar-items"]}>
        {Object.values(routeConfig).map(({ path, title, shortTitle }) => (
          <AppLink to={path} key={path}>
            {shortTitle}
          </AppLink>
        ))}
        <div className={classes["theme-btn"]}>
          <ToggleTheme />
        </div>
      </div>
    </div>
  );
};