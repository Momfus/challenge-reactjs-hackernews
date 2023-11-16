import { useContext } from "react";
import All from "../All/all";
import MyFavs from "../MyFavs/myFavs";
import PostSelectorType from "../../Components/PostSelectorType/postSelectorType";
import Paginator from "../../Components/Paginator/paginator";
import TechFilter from "../../Components/TechFilter/techFilter";
import Loading from "../../shared/loading";
import { HackerNewsContext } from "../../Contexts/hackerNewsContext";
import { VIEWTYPE } from "../../Types/type-general";

const PostViewer = ({ typeView }: { typeView: VIEWTYPE }) => {
  const context = useContext(HackerNewsContext);

  /**
   * Updates the current page in the context to the given page number.
   * @param page - The page number to set in the context.
   */
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
