import { type ReactNode } from "react";
import classes from "./modal.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/themeProvider";
import ReactDOM from "react-dom";

interface IModal {
  children?: ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ children, isOpen, onClose, className }: IModal) {
  const modalRoot = document.querySelector("body");
  if (modalRoot == null) return;

  const [theme] = useTheme();

  const mods: Record<string, boolean> = {
    [classes.opened]: isOpen
  };

  const modalAdditional: string[] = [
    theme
  ];

  const contentAdditional: string[] = [
    className ?? ""
  ];

  function contentHandler(e: React.MouseEvent) {
    e.stopPropagation();
  }

  return (
    ReactDOM.createPortal(
      <div className={classNames(classes.modal, modalAdditional, mods)}>
        <div className={classes.overlay} onClick={onClose}>
          <div className={classNames(classes.content, contentAdditional, mods)} onClick={contentHandler}>
            {children}
          </div>
        </div>
      </div>,
      modalRoot
    )
  );
};