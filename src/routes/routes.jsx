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

export const router = createBrowserRouter([
    {
     path: '/',
     Component: MainLayout,
     children:[
      {
        path: '/',
        element: <Home/>,
      }, 
      {
      path: '/blogs',
      Component: Blogs,
      }, 
      {
      path: '/about',
      Component: About,
      }, 
      {
      path: '/hows',
      Component: Hows,
      }, 
      {
      path: '/login',
      Component: Login,
      },
      {
      path: '/signup',
      Component: Register,
      },
      {
      path: '/predict',
      Component: Prediction,
      }
     ],
    },
    {
      path: '*',
      element: <ErrorPage />
    }
  ])