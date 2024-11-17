import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Errorpage from "../pages/Errorpage";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      }
    ],
  },
]);

export default Routes;
