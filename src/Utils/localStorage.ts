import { Post } from "../Models/post.model";

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

export const saveFavorites = (favorites: Post[]): void => {
  try {
    const serializedFavorites = JSON.stringify(favorites);
    localStorage.setItem("favorites", serializedFavorites);
  } catch (err) {
    console.error(err);
  }
};

export const addFavoriteToLocalStorage = (post: Post): void => {
  const favorites = loadFavorites();
  favorites.push(post);
  saveFavorites(favorites);
};

export const removeFavoriteFromLocalStorage = (post: Post): void => {
  let favorites = loadFavorites();
  favorites = favorites.filter(
    (favorite) => favorite.objectID !== post.objectID
  );
  saveFavorites(favorites);
};
