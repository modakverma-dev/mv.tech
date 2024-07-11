import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Tag = ({ link = "#", name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        " inline-block py-2 px-5 bg-purple-900/60 backdrop-blur-sm text-light rounded-lg capitalize font-medium border-2 border-purple-500/50 border-1 hover:bg-accent hover:scale-105 transition-all ease duration-300 backdrop-blur-md",
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
