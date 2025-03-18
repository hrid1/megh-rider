import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/Homepage/Homepage";

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
        path: "/about",
        element: <h3>This is about page</h3>,
      },
    ],
  },
]);

export default router;
