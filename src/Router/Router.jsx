import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <h1>404 Not Found</h1>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/services",
            element: <Services></Services>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
        {
            path: "/login",
            element: <Login></Login>,
        }
      ]
    },
  ]);

  export default router;