import { VIEWTYPE } from "../../Components/Types/type-general";
import All from "../All/all";
import MyFavs from "../MyFavs/myFavs";
import PostSelectorType from "../../Components/PostSelectorType/postSelectorType";
import { useContext } from "react";
import { HackerNewsContext } from "../../Contexts/hackerNewsContext";
import Loading from "../../shared/loading";
import TechFilter from "../../Components/TechFilter/techFilter";
import Paginator from "../../Components/Paginator/paginator";

const PostViewer = ({ typeView }: { typeView: VIEWTYPE }) => {
  const context = useContext(HackerNewsContext);

  const handlePageChange = (page: number) => {
    context.setPage(page);
  };

  const renderPostList = () => {
    return typeView === VIEWTYPE.ALL ? (
      <>
        <Paginator
          pageCount={context.totalCount}
          onPageChange={handlePageChange}
        />
        {context.loadingApi ? (
          <div className="block-overflow ">
            <Loading />{" "}
          </div>
        ) : (
          <All />
        )}
        <Paginator
          pageCount={context.totalCount}
          onPageChange={handlePageChange}
        />
      </>
    ) : (
      <MyFavs />
    );
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
      {renderPostList()}
    </>
  );
};

export default PostViewer;
