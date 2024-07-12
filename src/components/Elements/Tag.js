import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Tag = ({ link = "#", name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        " inline-block py-2 px-5 bg-slate-700/40 text-light rounded-lg capitalize font-medium border-2 border-slate-300/30 border-1 hover:bg-dark/80 hover:scale-105 transition-all ease duration-300 backdrop-blur-md",
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
