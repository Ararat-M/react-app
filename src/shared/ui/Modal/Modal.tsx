import { type ReactNode } from "react";
import classes from "./modal.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/themeProvider";
import ReactDOM from "react-dom";

interface IModal {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ children, isOpen, onClose }: IModal) {
  const modalRoot = document.querySelector("body");
  if (modalRoot == null) return;

  const [theme] = useTheme();

  const mods: Record<string, boolean> = {
    [classes.opened]: isOpen
  };

  const additional: string[] = [
    theme
  ];

  function contentHandler(e: React.MouseEvent) {
    e.stopPropagation();
  }

  return (
    ReactDOM.createPortal(
      <div className={classNames(classes.modal, additional, mods)}>
        <div className={classes.overlay} onClick={onClose}>
          <div className={classes.content} onClick={contentHandler}>
            {children}
          </div>
        </div>
      </div>,
      modalRoot
    )
  );
};