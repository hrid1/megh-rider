import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/Homepage/Homepage";
import Map from "../pages/Map/Map";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Price from "../pages/Price/Price";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/map",
        element: <Map />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/price",
        element: <Price />,
      },
      {
        path: "/terms",
        element: <TermsAndConditions />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
