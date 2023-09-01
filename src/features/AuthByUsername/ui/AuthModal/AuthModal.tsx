import classes from "./authModal.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { AuthFormAsync } from "../AuthForm/AuthFormAsync";
import { Suspense } from "react";
import { Loader } from "shared/ui/Loader/Loader";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  return (
    <Modal className={classes["auth-modal"]} isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<Loader />}>
        <AuthFormAsync />
      </Suspense>
    </Modal>
  );
}