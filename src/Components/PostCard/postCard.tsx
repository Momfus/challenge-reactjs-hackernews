import { Post } from "../../Models/post.model";
import { HeartIcon } from "@heroicons/react/solid";
import { HeartIcon as HeartOutlineIcon } from "@heroicons/react/outline";
import { ClockIcon } from "@heroicons/react/outline";
import { truncateText } from "../../Utils/helpers";
import "./postCard.css";
import { useContext } from "react";
import { HackerNewsContext } from "../../Contexts/hackerNewsContext";

const PostCard = ({ post }: { post: Post }) => {
  const { favs, addFavorite, removeFavorite } = useContext(HackerNewsContext);

  const isFavorite = favs.some((fav) => fav.objectID === post.objectID);

  const onOpenStoryLink = () => {
    if (post.story_url) {
      window.open(post.story_url, "_blank");
    } else {
      console.log("ERROR: This card does not have a story_url");
    }
  };

  const onFavsChange = (event: React.MouseEvent) => {
    event.stopPropagation();

    if (isFavorite) {
      removeFavorite(post);
    } else {
      addFavorite(post);
    }
  };

  return (
    <div
      className="card m-8 lg:w-96 lg:h-24 w-72 h-32 bg-opacity-80 rounded-lg border border-gray-400 flex justify-between cursor-pointer hover:bg-opacity-60"
      onClick={onOpenStoryLink}
    >
      <div className="flex flex-col justify-start ml-4">
        {post.created_at && (
          <div className="flex items-center mt-1">
            <ClockIcon className="h-4 w-4 text-gray mr-2" />
            <p className="m-0 text-gray-400 text-xs">{post.created_at}</p>
          </div>
        )}
        <p className="text-sm font-medium leading-6 tracking-wide py-2 pr-16 text-gray-600">
          {truncateText(post.story_title, 7)}
        </p>
      </div>
      <div className="h-full  flex items-center justify-center ">
        <button
          className="h-full relative z-10 p-4 like-button"
          onClick={onFavsChange}
        >
          {isFavorite ? (
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
