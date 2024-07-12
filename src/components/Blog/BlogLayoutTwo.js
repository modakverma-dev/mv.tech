import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogLayoutTwo = ({ blog }) => {
  return (
    <div className="flex flex-col items-center">
      <Link href={blog?.url} className="h-full roundex-md overflow-hidden">
        <Image
          src={blog?.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog?.image?.blurhashDataUrl}
          alt={blog?.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-[3/2] w-full h-full object-cover object-center hover:scale-125 transition-all duration-300"
        />
      </Link>
      <div className="flex w-full flex-wrap gap-1 mt-2">
        {blog?.tags?.map((tag) => (
          <span
            className="text-accent uppercase tex-sm rounded-md px-1 text-semibold bg-purple-500/30 border-2 border-purple-500/40"
            key={tag}
          >
            {tag}
          </span>
        ))}
        <Link href={blog?.url}>
          <h2 className="font-medium capitalize text-lg">
            <span className="bg-gradient">{blog?.title}</span>
          </h2>
        </Link>

        <span className="font-light text-slate-600 text-sm">
          {format(new Date(blog?.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;
