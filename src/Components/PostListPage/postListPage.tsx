import { Post } from "../../Models/post.model";
import PostCard from "../PostCard/postCard";

const PostListPage = ({ postListData }: { postListData: Post[] }) => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
        {postListData.length > 0 ? (
          postListData.map((post, index) => {
            return <PostCard key={index} post={post} />;
          })
        ) : (
          <p>No posts found with the selected filters.</p>
        )}
      </div>
    </>
  );
};

export default PostListPage;
