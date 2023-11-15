import { useEffect, useState } from "react";
import Layout from "../../Components/Layout/layout";
import { loadFavorites } from "../../Utils/localStorage";
import PostListPage from "../../Components/PostListPage/postListPage";
import { Post } from "../../Models/post.model";

function MyFavs() {
  const [favorites, setFavorites] = useState<Post[]>([]);

  useEffect(() => {
    const loadedFavorites = loadFavorites();
    setFavorites(loadedFavorites);
  }, []);

  return (
    <Layout>
      {favorites.length === 0 ? (
        <p>No favorite post added</p>
      ) : (
        <PostListPage postListData={favorites}></PostListPage>
      )}
    </Layout>
  );
}

export default MyFavs;
