import { Post } from "../../Models/post.model";
import { HeartIcon } from "@heroicons/react/solid";
import { HeartIcon as HeartOutlineIcon } from "@heroicons/react/outline";
import { ClockIcon } from "@heroicons/react/outline";
import { truncateText } from "../../Utils/helpers";
import "./postCard.css";
import { useState } from "react";

const PostCard = ({ post }: { post: Post }) => {
  const onOpenStoryLink = () => {
    if (post.story_url) {
      window.open(post.story_url, "_blank");
    } else {
      console.log("ERROR: This card does not have a story_url");
    }
  };

  const onFavsChange = (event: React.MouseEvent) => {
    event.stopPropagation();
    console.log("TODO > Favs Change > set to localStorage");
    setLike(!like);
  };

  const [like, setLike] = useState<boolean>(post.liked);

  return (
    <div
      className="card m-8 w-96 h-24 bg-opacity-80 rounded-lg border border-gray-400 flex justify-between cursor-pointer hover:bg-opacity-60"
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
          {like ? (
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
