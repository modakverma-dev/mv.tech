import React from "react";
import { allBlogs } from "@/.contentlayer/generated";
import Link from "next/link";
import { shortBlogs } from "@/src/utils";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = shortBlogs(blogs);
  return (
    <section className="w-full mt-20 px-32 flex flex-col items-center justify-center bg-accent/10 py-6 ">
      <div className="flex w-full justify-between items-center">
        <h2 className="inline-block font-bold capitalize text-4xl">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-black text-lg underline underline-offset-2"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 mt-6">
        {sortedBlogs?.slice(5, 11)?.map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutTwo blog={blog} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
