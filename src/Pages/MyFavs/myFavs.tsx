import { useContext } from "react";
import Layout from "../../Components/Layout/layout";
import PostListPage from "../../Components/PostListPage/postListPage";
import { HackerNewsContext } from "../../Contexts/hackerNewsContext";

const MyFavs = () => {
  /**
   * Retrieves the list of favorite items from the HackerNewsContext.
   * @returns {Array<FavoriteItem>} An array of favorite items.
   */
  const { favs } = useContext(HackerNewsContext);

  return (
    <Layout>
      {favs.length === 0 ? (
        <p>No favorite post added</p>
      ) : (
        <PostListPage postListData={favs}></PostListPage>
      )}
    </Layout>
  );
};

export default MyFavs;
