"use client";
import { removeExtraSpaces } from "@/src/utils";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";

const ViewDisplayer = ({ slug, showCount = true }) => {
  const formattedSlug = removeExtraSpaces(slug);
  const [views, setViews] = useState(0);
  const supabase = createClientComponentClient();
  const getBlogViews = async () => {
    try {
      let { data, error } = await supabase
        .from("views")
        .select("count")
        .match({ slug: formattedSlug })
        .single();

      if (error) {
        console.log(error);
        throw new Error(error);
      }
      setViews(data ? data.count : 0);
    } catch (err) {
      console.log("An error occured while displaying blog views", err);
    }
  };
  useEffect(() => {
    getBlogViews();
  }, [formattedSlug]);
  if (showCount) return <div>{views} views</div>;
  else {
    return null;
  }
};

export default ViewDisplayer;
