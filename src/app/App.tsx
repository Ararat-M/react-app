import "app/styles/index.scss";
import { useTheme } from "app/providers/themeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";

export function App() {
  const [theme] = useTheme();

  return (
    <div className={`app ${theme}`}>
      <div className="header">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <div className="container">
        <AppRouter />
      </div>
    </div>
  );
}
