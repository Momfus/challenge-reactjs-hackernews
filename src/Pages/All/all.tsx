import { useContext, useState } from "react";

import Layout from "../../Components/Layout/layout";
import { HackerNewsContext } from "../../Contexts/hackerNewsContext";
import PostListPage from "../../Components/PostListPage/postListPage";
import TechFilter from "../../Components/TechFilter/techFilter";

const All = () => {
  const context = useContext(HackerNewsContext);

  const renderAllList = () => {
    return (
      <Layout>
        <PostListPage postListData={context.posts}></PostListPage>
      </Layout>
    );
  };

  return <div className="block-overflow">{renderAllList()}</div>;
};

export default All;
