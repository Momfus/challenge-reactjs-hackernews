import { Post } from "../../Models/post.model";
import { HeartIcon } from "@heroicons/react/solid";
import { HeartIcon as HeartOutlineIcon } from "@heroicons/react/outline";
import { ClockIcon } from "@heroicons/react/outline";
import { truncateText } from "../../Utils/helpers";
import "./postCard.css";

const PostCard = ({ post }: { post: Post }) => {
  const onOpenStoryLink = () => {
    console.log("TODO > Story Link");
  };

  const onFavsChange = () => {
    console.log("TODO > Favs Change");
  };
  return (
    <div
      className="m-8 w-96 h-24 bg-opacity-80 rounded-lg border border-gray-400 flex justify-between cursor-pointer hover:bg-opacity-60"
      onClick={onOpenStoryLink}
    >
      <div className="flex flex-col justify-center ml-4">
        {post.created_at && (
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 text-gray mr-2" />
            <p className="m-0 text-gray-400 text-xs">{post.created_at}</p>
          </div>
        )}
        <p className="text-sm font-medium leading-6 tracking-wide py-2 pr-16 text-gray-600">
          {truncateText(post.story_title, 8)}
        </p>
      </div>
      <div className="h-full  flex items-center justify-center ">
        <button
          className="h-full relative z-10 p-4 like-button"
          onClick={onFavsChange}
        >
          {post.liked ? (
            <HeartIcon className="h-12 w-12 text-red-600" />
          ) : (
            <HeartOutlineIcon className="h-12 w-12 text-red-600" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PostCard;
