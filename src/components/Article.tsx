import React, { useState } from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import "./Article.scss";

export interface ArticleProps {
  title: string | null;
  content: string | null;
  description: string | null;
  image_url: string | null;
  source_id: string | null;
  pubDate: string;
}

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

export const Article = (props: ArticleProps): JSX.Element => {
  const [isPlaceholderActive, setIsPlaceholderActive] = useState<boolean>(
    props.image_url === null
  );

  return (
    <article className="article-wrapper">
      <h3 className="article-title">{props.title}</h3>
      <p className="article-date">
        {timeAgo.format(new Date(props.pubDate))} by {props.source_id}
      </p>
      <div
        style={{ display: isPlaceholderActive ? "flex" : "none" }}
        className="article-image-placeholder"
      >
        No image found
      </div>
      <img
        onError={() => setIsPlaceholderActive(true)}
        className="article-image"
        src={props.image_url}
        alt={""}
      />
      <p className="article-desc">{props.description}</p>
    </article>
  );
};
