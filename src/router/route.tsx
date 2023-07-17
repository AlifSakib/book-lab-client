import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/auth/login/login";
import Register from "../components/auth/register/register";

import AddNewBook from "../pages/add-new-book/add-new-book";
import Home from "../pages/home/home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-new-book",
        element: <AddNewBook />,
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
