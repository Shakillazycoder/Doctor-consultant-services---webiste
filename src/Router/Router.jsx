import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddService from "../Pages/AddService";
import BookServices from "../Pages/BookServices";
import ManageService from "../Pages/ManageService";
import ServicesToDo from "../Pages/ServicesToDo";
import ViewDetails from "../Pages/ViewDetails";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";
  
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
        },
        {
            path: "/addServices",
            element: <AddService></AddService>,
        },
        {
            path: "/bookServices",
            element: <BookServices></BookServices>,
        },
        {
            path: "/manageServices/",
            element: <ManageService></ManageService>,
        },
        {
            path: "/servicesToDo",
            element: <ServicesToDo></ServicesToDo>,
        },
        {
            path: "/viewDetails/:id",
            element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
            loader: ({params}) => fetch(`http://localhost:3000/servicesDetails/${params.id}`) 
        }
      ]
    },
  ]);

  export default router;