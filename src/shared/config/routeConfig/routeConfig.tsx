import { AboutPage } from "pages/aboutPage";
import { MainPage } from "pages/mainPage";
import { NotFoundPage } from "pages/notFoundPage";
import { type ReactNode } from "react";
import MainPageIcon from "shared/assets/icons/main-page-icon.svg";
import AboutPageIcon from "shared/assets/icons/about-page-icon.svg";

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
  shortTitle?: string | ReactNode;
}

export const routeConfig: Record<AppRoutes, IRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
    title: "Главная",
    shortTitle: <MainPageIcon />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
    title: "О нас",
    shortTitle: <AboutPageIcon />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
};
