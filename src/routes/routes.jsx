import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Blogs from "../pages/Blogs";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Hows from "../pages/Hows";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Prediction from "../pages/Prediction";
import PrivateRoute from "../layouts/PrivateRoute";
import UserDashboard from "../pages/UserDashboard";
import AdminDashboard from "../pages/AdminDashboad";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/hows",
        Component: Hows,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Register,
      },
      {
        path: "/predict",
        Component: Prediction,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/predict",
    element: (
      <PrivateRoute allowedRoles={["user", "admin"]}>
        <Prediction />
      </PrivateRoute>
    ),
  },
  {
    path: "/user/dashboard",
    element: (
      <PrivateRoute allowedRoles={["user"]}>
        <UserDashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/admin/dashboard",
    element: (
      <PrivateRoute allowedRoles={["admin"]}>
        <AdminDashboard />
      </PrivateRoute>
    ),
  },
]);
