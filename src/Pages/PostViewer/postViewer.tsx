import { VIEWTYPE } from "../../Components/Types/type-general";
import All from "../All/all";
import MyFavs from "../MyFavs/myFavs";
import PostSelectorType from "../../Components/PostSelectorType/postSelectorType";

const PostViewer = ({ typeView }: { typeView: VIEWTYPE }) => {
  return (
    <>
      <PostSelectorType typeView={typeView} />
      {typeView === VIEWTYPE.ALL ? <All /> : <MyFavs />}
    </>
  );
};

export default PostViewer;
