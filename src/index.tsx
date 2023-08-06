import "app/styles/index.scss";
import { createRoot } from "react-dom/client";
import { App } from "./app/App";
import { ThemeProvider } from "./app/providers/themeProvider/ui/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "app/providers/storeProvider";

const rootNode = document.getElementById("root");
if (rootNode != null) {
  const root = createRoot(rootNode);
  root.render(
    <StoreProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  );
}
