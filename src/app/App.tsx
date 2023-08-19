import { useTheme } from "app/providers/themeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { userActions } from "entities/User";

export function App() {
  const [theme] = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initUser());
  }, [dispatch]);

  return (
    <div className={`app ${theme}`}>
      <div className={"sidebar"}>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        <AppRouter />
      </div>
    </div>
  );
}
