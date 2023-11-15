export const truncateText = (text: string | null, wordLimit: number) => {
  if (text === null) {
    return "";
  }

  let words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  } else {
    return text;
  }
};
