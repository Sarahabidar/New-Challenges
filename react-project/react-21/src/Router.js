import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/about-us",
    element: <AboutUs></AboutUs>,
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
]);

export default function Router() {
  return <RouterProvider router={routes}></RouterProvider>;
}
