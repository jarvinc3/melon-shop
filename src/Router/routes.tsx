import { useRoutes } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { Login } from "../pages/auth/LogIn";
import { SingUp } from "../pages/auth/SingUp";
import { Dashboard } from "../pages/dashboard";
import { ErrorPage } from "../pages/error/ErrorPage";

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
