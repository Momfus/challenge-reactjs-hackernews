import { Post } from "../Models/post.model";

/**
 * Loads the favorite posts from local storage.
 * @returns An array of Post objects.
 */
export const loadFavorites = (): Post[] => {
  try {
    const serializedFavorites = localStorage.getItem("favorites");
    if (serializedFavorites === null) {
      return [];
    }
    return JSON.parse(serializedFavorites);
  } catch (err) {
    console.error(err);
    return [];
  }
};

/**
 * Saves the given array of Post objects as favorites in the browser's local storage.
 * @param favorites - The array of Post objects to be saved as favorites.
 * @returns void
 */
export const saveFavorites = (favorites: Post[]): void => {
  try {
    const serializedFavorites = JSON.stringify(favorites);
    localStorage.setItem("favorites", serializedFavorites);
  } catch (err) {
    console.error(err);
  }
};

/**
 * Adds a post to the favorites list in local storage.
 * @param post - The post to be added to the favorites list.
 */
export const addFavoriteToLocalStorage = (post: Post): void => {
  const favorites = loadFavorites();
  favorites.push(post);
  saveFavorites(favorites);
};

/**
 * Removes a post from the favorites list in localStorage.
 * @param post The post to remove.
 */
export const removeFavoriteFromLocalStorage = (post: Post): void => {
  let favorites = loadFavorites();
  favorites = favorites.filter(
    (favorite) => favorite.objectID !== post.objectID
  );
  saveFavorites(favorites);
};
