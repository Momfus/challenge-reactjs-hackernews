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
});

export const HackerNewsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Posts state
  const [posts, setPosts] = useState<Post[]>([]);

  // Filters and pagination state
  const [page, setPage] = useState<number>(0);
  const [perPage, setPerPage] = useState<number>(10);
  const [technologyType, setTechnologyType] = useState<string>("");

  // Api loading state
  const [loadingApi, setLoadingApi] = useState<boolean>(true);

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
        loadingApi,
        page,
        setPage,
        perPage,
        setPerPage,
        technologyType,
        setTechnologyType,
        posts,
      }}
    >
      {children}
    </HackerNewsContext.Provider>
  );
};
