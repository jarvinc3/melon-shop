import { useRoutes } from "react-router-dom";
import { ErrorPage } from "../pages/error/ErrorPage";
import { SingUp } from "../pages/auth/singup";
import { Login } from "../pages/auth/singin";
import { Dashboard } from "../pages/dashboard";
import { MainLayout } from "../components/layout/MainLayout";

function Router() {
  const routes = [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/layout",
      element: <MainLayout />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/singup",
      element: <SingUp />,
    },
    {
      path: "/error",
      element: <ErrorPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    }
  ];

  return useRoutes(routes);
}

export default Router;
