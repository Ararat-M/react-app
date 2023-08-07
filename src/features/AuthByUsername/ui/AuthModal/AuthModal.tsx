import classes from "./authModal.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { AuthForm } from "../AuthForm/AuthForm";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
};

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  return (
    <Modal className={classes["auth-modal"]} isOpen={isOpen} onClose={onClose}>
      <AuthForm />
    </Modal>
  );
};