export const searchString = (string) => string.trim().toLowerCase();

export const underscoreString = (value) => {
  if (typeof value !== "string") return value;
  return value.split("_").join(" ");
};
