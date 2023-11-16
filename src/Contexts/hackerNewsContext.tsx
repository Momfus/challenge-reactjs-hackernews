import { createContext, useEffect, useState } from "react";
import { loadFavorites, saveFavorites } from "../Utils/localStorage";
import { Post } from "../Models/post.model";
import { PostResultsSearch } from "../Models/post-results.model";

const baseUrl = process.env.REACT_APP_BASE_URL;
const searchtype: string = "search_by_date";

/**
 * Context object for the Hacker News app.
 * @typedef {Object} HackerNewsContext
 * @property {boolean} loadingApi - Indicates if the API is currently loading.
 * @property {number} page - The current page number.
 * @property {function} setPage - Function to set the current page number.
 * @property {string} technologyType - The current technology type.
 * @property {function} setTechnologyType - Function to set the current technology type.
 * @property {Post[]} posts - Array of posts.
 * @property {Post[]} favs - Array of favorite posts.
 * @property {function} setFavs - Function to set the favorite posts.
 * @property {function} addFavorite - Function to add a post to the favorites.
 * @property {function} removeFavorite - Function to remove a post from the favorites.
 * @property {number} totalCount - The total number of posts.
 */
export const HackerNewsContext = createContext({
  loadingApi: true,
  page: 1,
  setPage: (page: number) => {},
  technologyType: "",
  setTechnologyType: (technologyType: string) => {},
  posts: [] as Post[],
  favs: [] as Post[],
  setFavs: (favs: Post[]) => {},
  addFavorite: (post: Post) => {},
  removeFavorite: (post: Post) => {},
  totalCount: 0,
});

/**
 * Provides a context for the Hacker News API data and favorites management.
 * @param children The child components to be wrapped by the provider.
 * @returns The provider component.
 */
export const HackerNewsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Posts state
  const [posts, setPosts] = useState<Post[]>([]);

  // Load favorites state
  const [favs, setFavs] = useState<Post[]>(loadFavorites());

  const addFavorite = (post: Post) => {
    const newFavs = [...favs, post];
    setFavs(newFavs);
    saveFavorites(newFavs);
  };

  const removeFavorite = (post: Post) => {
    const newFavs = favs.filter((fav) => fav.objectID !== post.objectID);
    setFavs(newFavs);
    saveFavorites(newFavs);
  };

  // Filters and pagination state
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);
  const [technologyType, setTechnologyType] = useState<string>("");
  const [totalCount, setTotalCount] = useState<number>(0);

  // Api loading state
  const [loadingApi, setLoadingApi] = useState<boolean>(true);

  // Check for post likes
  const checkForPostsAsLiked = (posts: Post[]): Post[] => {
    return posts.map((post) => ({
      ...post,
      liked: favs.some((fav) => fav.objectID === post.objectID),
    }));
  };

  // Get from API
  useEffect(() => {
    /**
     * Fetches posts from the API based on the search type and technology type.
     * Filters out posts with null values for author, story_title, story_url, and created_at.
     * Checks if the fetched posts are already liked by the user.
     * Sets the fetched posts and total count of pages.
     * @returns {Promise<void>}
     */
    const loadingPostFromApi = async () => {
      setLoadingApi(true);

      try {
        const response = await fetch(
          `${baseUrl}/${searchtype}?query=${technologyType}&page=${
            page - 1
          }&hitsPerPage=${perPage}`
        );

        const dataResults: PostResultsSearch = await response.json();
        setTotalCount(dataResults.nbPages);

        // The attributes to use for the post UI are author, story_title, story_url, created_at (the API manual don't give any information how to filter the null values)
        let dataPostsArray = dataResults.hits.filter(
          (post) =>
            post.author && post.story_title && post.story_url && post.created_at
        );

        dataPostsArray = checkForPostsAsLiked(dataPostsArray);

        setPosts(dataPostsArray);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingApi(false);
      }
    };

    loadingPostFromApi();
  }, [page, perPage, technologyType]);

  return (
    <HackerNewsContext.Provider
      value={{
        loadingApi,
        page,
        setPage,
        technologyType,
        setTechnologyType,
        posts,
        favs,
        setFavs,
        addFavorite,
        removeFavorite,
        totalCount,
      }}
    >
      {children}
    </HackerNewsContext.Provider>
  );
};
