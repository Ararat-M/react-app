import { useTheme } from "app/providers/themeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

export function App() {
  const [theme] = useTheme();

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
