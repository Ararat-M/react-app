import classes from "./authModal.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { AuthFormAsync } from "../AuthForm/AuthFormAsync";
import { Suspense } from "react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  return (
    <Modal className={classes["auth-modal"]} isOpen={isOpen} onClose={onClose}>
      <Suspense>
        <AuthFormAsync />
      </Suspense>
    </Modal>
  );
}