import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogLayoutTwo = ({ blog }) => {
  return (
    <div className="flex flex-col items-center transition-all ease duration-300 rounded-lg p-2 group bg-white">
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
            className="text-slate-700 uppercase text-sm rounded-md px-1 text-bold bg-white border-[2px] border-slate-400/50"
            key={tag}
          >
            {tag}
          </span>
        ))}
        <Link href={blog?.url}>
          <h2 className="font-medium capitalize">
            <span className="bg-gradient text-base !leading-tight">
              {blog?.title}
            </span>
          </h2>
        </Link>
        <div className="flex w-full items-center justify-between py-2">
          <span className=" text-dark text-sm">
            {format(new Date(blog?.publishedAt), "MMMM dd, yyyy")}
          </span>
          <span className="w-[2px] h-full bg-slate-300 rounded-lg" />
          <span className="text-dark text-sm">{blog?.author}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;
