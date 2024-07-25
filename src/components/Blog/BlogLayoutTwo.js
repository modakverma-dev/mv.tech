import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ViewDisplayer from "./ViewDisplayer";

const BlogLayoutTwo = ({ blog }) => {
  return (
    <div className=" flex flex-col items-center transition-all ease duration-300 rounded-lg p-2 group bg-white">
      <Link
        href={blog?.url}
        className="h-full roundex-md overflow-hidden rounded-md group-hover:rounded-none delay-200 "
      >
        <Image
          src={blog?.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog?.image?.blurhashDataUrl || ""}
          alt={blog?.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-[3/2] w-full h-full object-cover object-center group-hover:scale-125 transition-all ease duration-500 delay-200 "
        />
      </Link>
      <div className="flex w-full flex-wrap gap-1 mt-2">
        {blog?.tags?.map((tag) => (
          <span
            className="text-slate-700 uppercase text-xs rounded-md px-1 text-bold border-[2px] border-slate-400/50 bg-teal-300/30"
            key={tag}
          >
            #{tag}
          </span>
        ))}
        <Link href={blog?.url}>
          <h2 className="font-medium capitalize">
            <span className="bg-gradient text-base !leading-tight line-clamp-2 h-10 mt-2">
              {blog?.title}
            </span>
          </h2>
        </Link>
        <span>
          <ViewDisplayer slug={blog?._raw.flattenedPath} />
        </span>
        <div className="flex w-full items-center justify-between py-2 text-slate-500">
          <span className="  text-sm">
            {format(new Date(blog?.publishedAt), "MMMM dd, yyyy")}
          </span>
          <span className="w-[2px] h-full bg-slate-300 rounded-lg" />
          <span className=" text-sm">{blog?.author}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;
