import { Post } from "../../Models/post.model";
import PostCard from "../PostCard/postCard";

const PostListPage = ({ postListData }: { postListData: Post[] }) => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
        {postListData.map((post, index) => {
          return <PostCard key={index} post={post} />;
        })}
      </div>
    </>
  );
};

export default PostListPage;
