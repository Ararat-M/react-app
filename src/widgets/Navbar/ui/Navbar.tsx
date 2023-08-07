import classes from "./navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
import { useState } from "react";
import { AuthModal } from "features/AuthByUsername/ui/AuthModal/AuthModal";

export function Navbar() {
  const modalRoot = document.querySelector("body");

  if (modalRoot == null) return;

  const [isOpen, setIsOpen] = useState(false);

  function onClose() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={classNames(classes.navbar)}>
      <Button theme={ButtonTheme.CLEAR} onClick={onClose}>
        Войти
      </Button>
      <AuthModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};
