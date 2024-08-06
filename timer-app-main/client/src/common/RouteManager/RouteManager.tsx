import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routesConfig from "./routesConfig";

const router = createBrowserRouter(routesConfig);

const RouteManager = () => <RouterProvider router={router} />;

export default RouteManager;
