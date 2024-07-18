import { format, parseISO } from "date-fns";
import { slug } from "github-slugger";
import Link from "next/link";
import React from "react";
import ViewCounter from "./ViewCounter";

const BlogDetails = ({ blog, slug: blogSlug }) => {
  return (
    <div className="flex text-md font-light  border-[1.4px] border-black/30 mx-10 border-x-0 text-black items-center justify-around gap-3 px-10 py-2 my-10">
      <time datetime="">
        {format(parseISO(blog?.publishedAt), "LLLL dd, yyyy")}
      </time>
      {"|"}
      <span className="flex items-center gap-1">
        👀
        <ViewCounter slug={blogSlug} />
      </span>
      {"|"}
      <div>{blog?.readingTime?.text}</div>
      {"|"}
      <Link href={`/categories/${blog?.tags[0]}`}>#{slug(blog?.tags[0])}</Link>
    </div>
  );
};

export default BlogDetails;
