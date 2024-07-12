import { allBlogs } from "@/.contentlayer/generated";
import BlogDetails from "@/src/components/Blog/BlogDetails";
import RenderMdx from "@/src/components/Blog/RenderMdx";
import Tag from "@/src/components/Elements/Tag";
import Image from "next/image";
import React from "react";

const BlogPage = ({ params }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  return (
    <article>
      <div className="relative text-center mb-8 w-full h-[70vh] bg-dark">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Tag
            name={blog.tags[0]}
            link={`/categories/${blog.tags[0]}`}
            className="px-6 text-sm py-2"
          />
          <h1 className="inline-block mt-6 font-normal capitalize text-light leading-normal relative w-5/6 text-4xl">
            {blog.title}
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/50" />
        <Image
          src={blog?.image?.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog?.image?.blurhashDataUrl}
          alt={blog?.title}
          width={blog?.image?.width}
          height={blog?.image?.height}
          className="aspect-square w-full h-full object-cover object-center"
        />
      </div>
      <BlogDetails blog={blog} slug={params.slug} />

      <div className="grid grid-cols-12 gap gap-10 px-10">
        <div className="col-span-4">
          <details
            className="border-[2px] border-solid border-black shadow-lg shadow-accent/10 rounded-lg sticky top-16 max-h-[80xh] overflow-hidden overflow-y-auto "
            open
          >
            <summary className="text-lg font-mediumm capitalize cursor-pointer bg-black/80 p-3 text-white">
              Table Of Content
            </summary>
            <ul className="mt-2 font-in text-base p-3">
              {blog?.toc?.map((heading) => {
                return (
                  <li
                    key={`#${heading?.slug}`}
                    className="py-1 hover:bg-accent/10 transition duration-200 rounded-lg"
                  >
                    <a
                      href={`#${heading?.slug}`}
                      data-level={heading?.level}
                      className="data-[level=two]:pl-0 data-[level=two]:border-t border-dark/40 data-[level=three]:pl-6 items-center flex justify-start font-light"
                    >
                      {heading?.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </details>
        </div>
        <RenderMdx blog={blog} />
      </div>
    </article>
  );
};

export default BlogPage;
