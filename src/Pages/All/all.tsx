/**
 * All component.
 *
 * This component is responsible for rendering all posts. It uses the HackerNewsContext to get the posts data.
 * The posts data is passed to the PostListPage component which is responsible for rendering the list of posts.
 *
 * The All component is wrapped in a div with a class of "block-overflow" which can be used for styling purposes.
 *
 * @returns {JSX.Element} The All component.
 */
import { useContext } from "react";

import Layout from "../../Components/Layout/layout";
import { HackerNewsContext } from "../../Contexts/hackerNewsContext";
import PostListPage from "../../Components/PostListPage/postListPage";

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
