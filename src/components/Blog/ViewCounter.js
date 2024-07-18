"use client";
import { removeExtraSpaces } from "@/src/utils";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const formattedSlug = removeExtraSpaces(slug);
  const [views, setViews] = useState(0);
  const supabase = createClientComponentClient();
  const setBlogViews = async () => {
    try {
      let { data, error } = await supabase.rpc("increment", {
        slug_text: formattedSlug,
      });
      if (error) {
        throw new Error(error);
      } else console.log(data, "view dat");
    } catch (err) {
      console.log("An error occured while fetching blog views", err);
    }
  };
  const getBlogViews = async () => {
    try {
      let { data, error } = await supabase
        .from("views")
        .select("count")
        .match({ slug: formattedSlug })
        .single();

      if (error) {
        throw new Error(error);
      }
      setViews(data ? data.count : 0);
    } catch (err) {
      console.log("An error occured while fetching blog views", err);
    }
  };
  useEffect(() => {
    if (!noCount) {
      setBlogViews();
    }
  }, [formattedSlug, noCount]);
  useEffect(() => {
    getBlogViews();
  }, [formattedSlug]);
  if (showCount) return <div>{views} views</div>;
  else {
    return null;
  }
};

export default ViewCounter;
