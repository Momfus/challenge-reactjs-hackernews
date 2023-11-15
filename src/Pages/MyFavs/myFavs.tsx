import { useContext, useEffect, useState } from "react";
import Layout from "../../Components/Layout/layout";
import { loadFavorites } from "../../Utils/localStorage";
import PostListPage from "../../Components/PostListPage/postListPage";
import { Post } from "../../Models/post.model";
import { HackerNewsContext } from "../../Contexts/hackerNewsContext";

function MyFavs() {
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
}

export default MyFavs;
