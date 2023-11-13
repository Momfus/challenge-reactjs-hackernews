import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://hn.algolia.com/api/v1";
const searchType = "search_by_date";

function usePosts(perPage: any, technologyType: any) {
  const [posts, setPosts] = useState<any[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const url = `${baseUrl}/${searchType}?query=${technologyType}&page=${page}&hitsPerPage=${perPage}`;
        const response = await axios.get(url);
        const resSearch = response.data;

        // The attributes to use for the post UI are author, story_title, story_url, created_at (the API manual don't give any information how to filter the null values)
        const filteredPosts = resSearch.hits.filter(
          (post: any) =>
            post.author && post.story_title && post.story_url && post.created_at
        );
        const mappedPosts = filteredPosts.map((post: any) => {
          const liked = checkLikedPost(post.objectID);
          return { ...post, liked };
        });

        setPosts((prevPosts) => [...prevPosts, ...mappedPosts]);
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.error(error);
        throw new Error("Error getting data");
      }
    }

    fetchPosts();
  }, [perPage, technologyType, page]);

  return posts;
}

function checkLikedPost(postId: any) {
  // @TODO: implementation of checkLikedPost function
}

export default usePosts;
