import { createContext, useEffect, useState } from "react";
import { loadFavorites, saveFavorites } from "../Utils/localStorage";
import { Post } from "../Models/post.model";
import { PostResultsSearch } from "../Models/post-results.model";

const baseUrl = process.env.REACT_APP_BASE_URL;
const searchtype: string = "search_by_date";

export const HackerNewsContext = createContext({
  loadingApi: true,
  page: 0,
  setPage: (page: number) => {},
  perPage: 10,
  setPerPage: (perPage: number) => {},
  technologyType: "",
  setTechnologyType: (technologyType: string) => {},
  posts: [] as Post[],
  favs: [] as Post[],
  setFavs: (favs: Post[]) => {},
  addFavorite: (post: Post) => {},
  removeFavorite: (post: Post) => {},
});

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
  const [page, setPage] = useState<number>(0);
  const [perPage, setPerPage] = useState<number>(10);
  const [technologyType, setTechnologyType] = useState<string>("");

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
    const loadingPostFromApi = async () => {
      setLoadingApi(true);

      console.log(favs);

      try {
        const response = await fetch(
          `${baseUrl}/${searchtype}?query=${technologyType}&page=${page}&hitsPerPage=${perPage}`
        );

        const dataResults: PostResultsSearch = await response.json();

        // The attributes to use for the post UI are author, story_title, story_url, created_at (the API manual don't give any information how to filter the null values)
        let dataPostsArray = dataResults.hits.filter(
          (post) =>
            post.author && post.story_title && post.story_url && post.created_at
        );

        dataPostsArray = checkForPostsAsLiked(dataPostsArray);

        setPosts(dataPostsArray);
        console.log(dataPostsArray);
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
        perPage,
        setPerPage,
        technologyType,
        setTechnologyType,
        posts,
        favs,
        setFavs,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </HackerNewsContext.Provider>
  );
};
