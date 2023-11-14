import { useRoutes } from "react-router-dom";
import All from "../Pages/All/all";
import MyFavs from "../Pages/MyFavs/myFavs";
import NotFound from "../Pages/NotFound/notFound";

export const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <All />,
    },
    { path: "/all", element: <All /> },
    { path: "/my-favs", element: <MyFavs /> },
    { path: "/*", element: <NotFound /> },
  ]);
};
