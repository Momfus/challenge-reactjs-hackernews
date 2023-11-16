import { VIEWTYPE } from "../../Components/Types/type-general";
import All from "../All/all";
import MyFavs from "../MyFavs/myFavs";
import PostSelectorType from "../../Components/PostSelectorType/postSelectorType";
import { useContext } from "react";
import { HackerNewsContext } from "../../Contexts/hackerNewsContext";
import Loading from "../../shared/loading";
import TechFilter from "../../Components/TechFilter/techFilter";

const PostViewer = ({ typeView }: { typeView: VIEWTYPE }) => {
  const context = useContext(HackerNewsContext);

  const renderPostList = () => {
    return typeView === VIEWTYPE.ALL ? <All /> : <MyFavs />;
  };

  return (
    <>
      <PostSelectorType typeView={typeView} />
      {typeView === VIEWTYPE.ALL ? (
        <div className="flex justify-center mt-5">
          <TechFilter></TechFilter>
        </div>
      ) : (
        <></>
      )}
      {context.loadingApi ? <Loading /> : renderPostList()}
    </>
  );
};

export default PostViewer;
