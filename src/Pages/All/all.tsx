import { useContext } from "react";
import Layout from "../../Components/Layout/layout";
import { HackerNewsContext } from "../../Contexts/hackerNewsContext";
import PostListPage from "../../Components/PostListPage/postListPage";

const All = () => {
  const context = useContext(HackerNewsContext);

  const renderAllList = () => {
    return (
      <div>
        <PostListPage postListData={context.posts}></PostListPage>
      </div>
    );
  };

  return (
    <Layout>
      {context.loadingApi ? <p>Loading...</p> : <h2>{renderAllList()}</h2>}
    </Layout>
  );
};

export default All;
