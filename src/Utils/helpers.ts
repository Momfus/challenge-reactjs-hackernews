/**
 * Truncates a given text to a specified number of words and appends "..." at the end.
 * @param text - The text to be truncated.
 * @param wordLimit - The maximum number of words to be displayed.
 * @returns The truncated text.
 */
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
