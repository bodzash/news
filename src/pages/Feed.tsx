import React from "react";
import { ECategories } from "../globals";
import { useQuery } from "react-query";
import { Article, ArticleProps } from "../components/Article";

export interface FeedProps {
  category: ECategories;
}

const fetchCategoryNews = async (category: ECategories) => {
  const res = await fetch(
    `${process.env.API_ROUTE}?apikey=${process.env.API_KEY}&language=en${
      category === ECategories.None ? "" : `&category=${category}`
    }`
  );
  return res.json();
};

export const Feed = ({ category }: FeedProps) => {
  const { data, status } = useQuery(`${category}`, () =>
    fetchCategoryNews(category)
  );
  console.log(data, status);

  return (
    <main>
      <div>Current category: {category}</div>
      {data &&
        data.results.map((result: ArticleProps) => (
          <Article key={result.title} {...result} />
        ))}
    </main>
  );
};
