import React from "react";
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
  return (
    <article className="article-wrapper">
      <h4 className="article-title">{props.title}</h4>
      <p className="article-date">
        {timeAgo.format(new Date(props.pubDate))} by {props.source_id}
      </p>
      <p className="article-desc">{props.description}</p>
      <img
        className="article-image"
        src={props.image_url}
        alt={/*description*/ ""}
      />
    </article>
  );
};
