import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <h3>final hom</h3>,
      },
      {
        path: "/about",
        element: <h3>This is about page</h3>,
      },
    ],
  },
]);

export default router;
