import { VIEWTYPE } from "../../Components/Types/type-general";
import All from "../All/all";
import MyFavs from "../MyFavs/myFavs";
import PostSelectorType from "../../Components/PostSelectorType/postSelectorType";
import { useContext } from "react";
import { HackerNewsContext } from "../../Contexts/hackerNewsContext";
import Loading from "../../shared/loading";

const PostViewer = ({ typeView }: { typeView: VIEWTYPE }) => {
  const context = useContext(HackerNewsContext);

  const renderPostList = () => {
    return typeView === VIEWTYPE.ALL ? <All /> : <MyFavs />;
  };

  return (
    <>
      <PostSelectorType typeView={typeView} />
      {context.loadingApi ? <Loading /> : renderPostList()}
    </>
  );
};

export default PostViewer;
