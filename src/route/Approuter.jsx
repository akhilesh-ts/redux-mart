import { createBrowserRouter } from "react-router";
import AppLayout from "@/layout/AppLayout";
import Home from "@/page/Home";
import ProductPage from "@/page/ProductPage";
import ProductDetails from "@/page/ProductDetails";
import NotFoundPage from "@/components/notfound/NotFoundPage";

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default Approuter;
