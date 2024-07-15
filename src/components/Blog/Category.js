import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Category = ({ link = "#", name, categories, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-3 px-10 rounded-lg capitalize font-semibold border-2 border-dark hover:scale-105 transition-all ease duration-200",
        props.className,
        active ? "bg-dark text-light" : "bg-light text-dark"
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;
