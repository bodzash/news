import React from "react";

export interface ArticleProps {
  title: string;
  description: string;
  image_url: string | null;
  pubDate: string;
}

export const Article = (props: ArticleProps) => {
  return (
    <article>
      <h4>{props.title}</h4>
      <p>{props.pubDate}</p>
      <p>{props.description}</p>
      <img src={props.image_url} alt={/*description*/ ""} />
    </article>
  );
};
