import classes from "./navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";
import { AuthModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, userActions } from "entities/User";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const userData = useSelector(getUserData);
  const dispatch = useDispatch();

  function modalClose() {
    setIsOpen((prev) => !prev);
  }

  const onLogout = useCallback(() => {
    dispatch(userActions.logoutUser());
    modalClose();
  }, [dispatch]);

  if (userData.id) {
    return (
      <div className={classNames(classes.navbar)}>
        <Button theme={ButtonTheme.CLEAR} onClick={onLogout}>
          Выйти
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(classes.navbar)}>
      <Button theme={ButtonTheme.CLEAR} onClick={modalClose}>
        Войти
      </Button>
      <AuthModal isOpen={isOpen} onClose={modalClose} />
    </div>
  );
};
