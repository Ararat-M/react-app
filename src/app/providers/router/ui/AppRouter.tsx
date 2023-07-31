import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig";
import { Loader } from "shared/ui/Loader/Loader";

export function AppRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) =>
          <Route key={path} path={path} element={element} />
        )}
      </Routes>
    </Suspense>
  );
}
