import { Counter } from "./components/Counter"
import "./styles/index.scss"
import { useTheme } from "./theme/useTheme"

export function App() {
  const [theme, toogleTheme] = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toogleTheme}>toogle</button>
      <Counter />
    </div>
  )
}
