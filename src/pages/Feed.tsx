import React from "react";
import { ECategories } from "../globals";
import { useQuery } from "react-query";
import { Article, ArticleProps } from "../components/Article";
import { Oval } from "react-loader-spinner";
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
      {status === "loading" && !data && (
        <div className="loading-wrapper">
          <h2 className="loading-text">Loading please wait</h2>
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={4}
            strokeWidthSecondary={4}
          />
        </div>
      )}
      {status === "error" && (
        <div className="error-wrapper">
          <h2 className="error-text">Something went wrong :/</h2>
        </div>
      )}
      {data &&
        data.results.map((result: ArticleProps) => (
          <Article key={result.title} {...result} />
        ))}
    </main>
  );
};
