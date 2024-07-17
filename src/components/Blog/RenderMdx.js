"use client";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const mdxComponent = {
  Image,
};

const RenderMdx = ({ blog }) => {
  const MDXContent = useMDXComponent(blog?.body?.code);
  return (
    <div className="col-span-8 font-inter prose prose-lg w-max prose-blockquote:bg-blue-500/10 prose-blockquote:p-1 prose-blockquote:px-6 prose-blockquote:border-blue-700 prose-blockquote:text-md prose-blockquote:font-light prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-blue-400">
      <MDXContent components={mdxComponent} />
    </div>
  );
};

export default RenderMdx;
