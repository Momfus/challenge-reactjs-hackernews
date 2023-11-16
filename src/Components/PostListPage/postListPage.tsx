import { Post } from "../../Models/post.model";
import PostCard from "../PostCard/postCard";

/**
 * Renders a list of posts in a grid layout.
 * @param postListData An array of Post objects to be displayed.
 * @returns A React component that displays the list of posts.
 */
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
