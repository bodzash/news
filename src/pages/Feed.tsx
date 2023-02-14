import React from "react";
import { ECategories } from "../globals";
import { useQuery } from "react-query";
import { Article, ArticleProps } from "../components/Article";
import { SkeletonArticle } from "../components/SkeletonArticle";
import "./Feed.scss";

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

export const Feed = ({ category }: FeedProps): JSX.Element => {
  const { data, status } = useQuery(`${category}`, () =>
    fetchCategoryNews(category)
  );
  console.log(data, status);

  return (
    <main className="feed-wrapper">
      {data?.results.map((result: ArticleProps) => (
        <Article key={result.title} {...result} />
      ))}
      {status === "loading" &&
        Array(10)
          .fill(true)
          .map((skeleton) => <SkeletonArticle />)}
      {status === "error" && <h1>There was an error</h1>}
    </main>
  );
};
