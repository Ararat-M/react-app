import "app/styles/index.scss"
import { useTheme } from "app/providers/themeProvider";
import { AppRouter } from "app/providers/router";
import { Link } from "react-router-dom";

export function App() {
  const [theme, toogleTheme] = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toogleTheme}>toogle</button>
      <Link to={"/"}>Main</Link>
      <Link to={"about"}>About</Link>
      <AppRouter />
    </div>
  )
}
