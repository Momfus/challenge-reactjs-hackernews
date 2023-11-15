import { createContext, useEffect, useState } from "react";
import { loadFavorites, saveFavorites } from "../Utils/localStorage";
import { Post } from "../Model/post.model";
import { PostResultsSearch } from "../Model/post-results.model";

const baseUrl = "https://hn.algolia.com/api/v1";
const searchtype: string = "search_by_date";

export const HackerNewsContext = createContext({
  favorites: [] as string[],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
  loadingApi: true,
  setLoadingApi: (loading: boolean) => {},
  page: 0,
  setPage: (page: number) => {},
  perPage: 10,
  setPerPage: (perPage: number) => {},
  technologyType: "",
  setTechnologyType: (technologyType: string) => {},
});

export const HackerNewsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Favorite state
  const [favorites, setFavorites] = useState<string[]>(loadFavorites());

  // Posts state
  const [posts, setPosts] = useState<Post[]>([]);

  // Filters and pagination state
  const [page, setPage] = useState<number>(0);
  const [perPage, setPerPage] = useState<number>(10);
  const [technologyType, setTechnologyType] = useState<string>("");

  // Api loading state
  const [loadingApi, setLoadingApi] = useState<boolean>(true);

  const addFavorite = (id: string) => {
    const newFavorites = [...favorites, id];
    setFavorites(newFavorites);
    saveFavorites(newFavorites);
  };

  const removeFavorite = (id: string) => {
    const newFavorites = favorites.filter((favorite) => favorite !== id);
    setFavorites(newFavorites);
    saveFavorites(newFavorites);
  };

  // Get from API

  useEffect(() => {
    const loadingPostFromApi = async () => {
      setLoadingApi(true);
      try {
        const response = await fetch(
          `${baseUrl}/${searchtype}?query=${technologyType}&page=${page}&hitsPerPage=${perPage}`
        );

        const dataResults: PostResultsSearch = await response.json();

        // The attributes to use for the post UI are author, story_title, story_url, created_at (the API manual don't give any information how to filter the null values)
        const dataPostsArray = dataResults.hits.filter(
          (post) =>
            post.author && post.story_title && post.story_url && post.created_at
        );
        setPosts(dataPostsArray);
        console.log(dataPostsArray);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingApi(false);
      }
    };

    loadingPostFromApi();
  }, [page, perPage, technologyType]);

  return (
    <HackerNewsContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        loadingApi,
        setLoadingApi,
        page,
        setPage,
        perPage,
        setPerPage,
        technologyType,
        setTechnologyType,
      }}
    >
      {children}
    </HackerNewsContext.Provider>
  );
};
