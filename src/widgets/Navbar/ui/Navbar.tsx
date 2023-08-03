import classes from "./navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
import { useState } from "react";

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
      <Modal isOpen={isOpen} onClose={onClose}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis libero, consequuntur nihil officiis odit delectus laboriosam placeat! Nihil placeat eligendi quae, voluptate nobis ipsum, accusantium autem quisquam voluptates omnis laboriosam.
      </Modal>
    </div>
  );
};
