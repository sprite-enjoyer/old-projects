import { RouteObject } from "react-router";
import Main from "../../pages/Main/Main";
import Layout from "./Layout";

const routesConfig: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
    ],
  },
];

export default routesConfig;
