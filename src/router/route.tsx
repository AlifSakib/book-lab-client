import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/auth/login/login";
import Register from "../components/auth/register/register";
import Home from "../pages/home/home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
