import { createRoot } from "react-dom/client";
import { App } from "./app/App";
import { ThemeProvider } from "./app/providers/themeProvider/ui/ThemeProvider";
import { BrowserRouter } from "react-router-dom";

// Render your React component instead
const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
