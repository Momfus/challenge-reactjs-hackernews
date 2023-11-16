import "./postCard.css";
import { Post } from "../../Models/post.model";
import { HeartIcon } from "@heroicons/react/solid";
import { HeartIcon as HeartOutlineIcon } from "@heroicons/react/outline";
import { ClockIcon } from "@heroicons/react/outline";
import { truncateText } from "../../Utils/helpers";
import { useContext } from "react";
import { HackerNewsContext } from "../../Contexts/hackerNewsContext";

const PostCard = ({ post }: { post: Post }) => {
  const { favs, addFavorite, removeFavorite } = useContext(HackerNewsContext);

  const isFavorite = favs.some((fav) => fav.objectID === post.objectID);

  /**
   * Calculates the time lapse between the current date and the creation date of a post, and returns a string with a message indicating the time lapse and the author of the post (if available).
   * @param crateadAt The creation date of the post in string format.
   * @returns A string with a message indicating the time lapse and the author of the post (if available).
   */
  const timeLapseText = (crateadAt: string) => {
    // Just in case, if the author exists (double check)
    const author = post?.author ? `by ${post.author}` : "";

    // Time calculation
    const dateNow = new Date();
    const dateCreation = new Date(crateadAt);

    const diffDate = Math.abs(dateNow.getTime() - dateCreation.getTime());
    const diffDays = Math.floor(diffDate / (1000 * 3600 * 24));
    const diffHours = Math.floor((diffDate / (1000 * 3600)) % 24);
    const diffMinutes = Math.floor((diffDate / (1000 * 60)) % 60);

    // Message creation
    if (diffDays > 365) {
      return `More than ${Math.floor(diffDays / 365)} year(s) ago ${author}`;
    } else if (diffDays > 30) {
      return `More than ${Math.floor(diffDays / 30)} month(s) ago ${author}`;
    } else if (diffDays > 0) {
      return `${diffDays} day(s) ago ${author}`;
    } else if (diffHours > 0) {
      return `${diffHours} hour(s) ago ${author}`;
    } else if (diffMinutes > 30) {
      return `${diffMinutes} minute(s) ago ${author}`;
    } else {
      return `Recently ${author}`;
    }
  };

  const onOpenStoryLink = () => {
    if (post.story_url) {
      window.open(post.story_url, "_blank");
    } else {
      console.log("ERROR: This card does not have a story_url");
    }
  };

  /**
   * Handles the click event of the favorite button for a post.
   * If the post is already a favorite, it removes it from the favorites list.
   * If it's not a favorite, it adds it to the favorites list.
   * @param event The click event.
   */
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
            <p className="m-0 text-gray-400 text-xs">
              {timeLapseText(post.created_at)}
            </p>
          </div>
        )}
        <p className="text-sm font-medium leading-6 tracking-wide py-2 pr-16 text-gray-600">
          {truncateText(post.story_title, 7)}
        </p>
      </div>
      <div className="h-full  flex items-center justify-center ">
        <button
          className="h-full relative z-0 p-4 like-button"
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
