import { useRoutes } from "react-router-dom";
import All from "../Pages/All/all";
import NotFound from "../Pages/NotFound/notFound";
import PostViewer from "../Pages/PostViewer/postViewer";
import { VIEWTYPE } from "../Components/Types/type-general";

export const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <PostViewer typeView={VIEWTYPE.ALL} />,
    },
    { path: "/all", element: <PostViewer typeView={VIEWTYPE.ALL} /> },
    { path: "/my-favs", element: <PostViewer typeView={VIEWTYPE.MY_FAVS} /> },
    { path: "/*", element: <NotFound /> },
  ]);
};
