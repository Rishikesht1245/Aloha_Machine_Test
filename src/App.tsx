import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/UI/Loader";
import UserLayout from "./layout/UserLayout";

function App() {
  const HomePage = lazy(() => import("./pages/HomePage"));
  const NotFound = lazy(() => import("./pages/NotFound"));
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            }
          />

          {/* Not found page */}
          <Route
            path="*"
            element={
              <Suspense fallback={<Loader />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
