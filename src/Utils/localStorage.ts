export const loadFavorites = (): string[] => {
  try {
    const serializedFavorites = localStorage.getItem("favorites");
    if (serializedFavorites === null) {
      return [];
    }
    return JSON.parse(serializedFavorites);
  } catch (err) {
    return [];
    console.error(err);
  }
};

export const saveFavorites = (favorites: string[]): void => {
  try {
    const serializedFavorites = JSON.stringify(favorites);
    localStorage.setItem("favorites", serializedFavorites);
  } catch (err) {
    console.error(err);
  }
};
