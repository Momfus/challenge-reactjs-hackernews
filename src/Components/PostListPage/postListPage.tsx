import { Post } from "../../Models/post.model";
import PostCard from "../PostCard/postCard";

const PostListPage = ({ postListData }: { postListData: Post[] }) => {
  return (
    <>
      {postListData.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
          {postListData.map((post, index) => {
            return <PostCard key={index} post={post} />;
          })}
        </div>
      ) : (
        <p className="text-center text-2xl mt-10">
          No posts found with the selected filters.
        </p>
      )}
    </>
  );
};

export default PostListPage;
