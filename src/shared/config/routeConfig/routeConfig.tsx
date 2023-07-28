import { AboutPage } from "pages/aboutPage";
import { MainPage } from "pages/mainPage";

enum AppRoutes {
  MAIN = "main",
  ABOUT = "about"
}

const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about"
}

interface IRouteProps {
  path: string;
  element: JSX.Element;
  title: string;
}

export const routeConfig: Record<AppRoutes, IRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
    title: "Главная"
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
    title: "О нас"
  }
}
