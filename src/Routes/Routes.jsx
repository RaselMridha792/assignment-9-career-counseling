import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Errorpage from "../pages/Errorpage";
import ForgetPassword from "../pages/ForgetPassword";
import Details from "../pages/privet routes/Details";
import PrivetRoutes from "../pages/privet routes/PrivetRoutes";
import UserProfile from "../pages/privet routes/UserProfile";
import PrivetProfile from "../pages/privet routes/PrivetProfile";
import Book from "../pages/Book";
import SingleBookData from "../pages/SingleBookData";
import PrivetBookDetails from "../pages/privet routes/PrivetBookDetails";

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
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/shop",
        element: <Book></Book>,
      },
      {
        path: "/forget",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/service/:id",
        element: (
          <PrivetRoutes>
            <Details></Details>
          </PrivetRoutes>
        ),
        loader: ({ params }) => fetch("./services.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivetProfile>
            <UserProfile></UserProfile>
          </PrivetProfile>
        ),
      },
      {
        path: "/bookDetails/:id",
        element: (
          <PrivetBookDetails>
            <SingleBookData></SingleBookData>
          </PrivetBookDetails>
        ),
        loader: ({ params }) => fetch("/book.json"),
      },
    ],
  },
]);

export default Routes;
