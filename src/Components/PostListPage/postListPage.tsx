import { Post } from "../../Models/post.model";
import PostCard from "../PostCard/postCard";

const PostListPage = ({ postListData }: { postListData: Post[] }) => {
  return (
    <div>
      <p>Total Post Page: {postListData.length}</p>
      <div>
        {postListData.map((post, index) => {
          return <PostCard key={index} post={post} />;
        })}
      </div>
    </div>
  );
};

export default PostListPage;
