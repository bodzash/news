import React from "react";
import { ECategories } from "../globals";
import { useQuery } from "react-query";

export interface FeedProps {
  category: ECategories;
}

const fetchCategoryNews = async (/*category: ECategories*/) => {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${process.env.API_KEY}&language=en`
  );
  return res.json();
};

export const Feed = ({ category }: FeedProps) => {
  const { data, status } = useQuery("news", fetchCategoryNews);
  console.log(data);

  return (
    <main>
      <div>Current category: {category}</div>
      <div>{status}</div>
    </main>
  );
};
