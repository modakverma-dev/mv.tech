import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

export const shortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};

export const removeExtraSpaces = (inputString) => {
  return inputString.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ");
};
