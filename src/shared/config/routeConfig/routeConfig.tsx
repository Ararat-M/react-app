import { AboutPage } from "pages/aboutPage";
import { MainPage } from "pages/mainPage";
import { NotFoundPage } from "pages/notFoundPage";

enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND = "not_found"
}

const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOT_FOUND]: "*"
};

interface IRouteProps {
  path: string;
  element: JSX.Element;
  title?: string;
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
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
};
