import React from "react";
import Category from "./Category";
import { slug } from "github-slugger";

const Categories = ({ categories, active }) => {
  return (
    <div className="px-10 border-b-2 border-slate-200 flex items-start flex-wrap mx-10 gap-5 py-4">
      {categories?.map((cat, index) => (
        <Category
          key={index}
          categories={categories}
          active={active === slug(cat)}
          name={cat}
          link={`/categories/${cat}`}
        />
      ))}
    </div>
  );
};

export default Categories;
