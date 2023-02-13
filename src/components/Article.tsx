import React from "react";

export interface ArticleProps {
  title: string | null;
  content: string | null;
  description: string | null;
  image_url: string | null;
  pubDate: string;
}

export const Article = (props: ArticleProps): JSX.Element => {
  return (
    <article>
      <h4>{props.title}</h4>
      <p>{props.pubDate}</p>
      <p>{props.description}</p>
      <img
        src={
          props.image_url ??
          "https://placehold.jp/3d4070/ffffff/512x512.png?text=No%20image"
        }
        alt={/*description*/ ""}
      />
    </article>
  );
};
