import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonArticle = (): JSX.Element => {
  return (
    <div style={{ padding: "1rem", zIndex: "-1" }}>
      <Skeleton height={32} />
      <Skeleton style={{ margin: ".5rem 0" }} />
      <Skeleton style={{ marginBottom: "1rem" }} height={180} />
      <Skeleton style={{ margin: "2px 0" }} count={4} />
    </div>
  );
};
