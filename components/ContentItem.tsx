import React from "react";
import { RichText } from "prismic-reactjs";

export interface ContentItemData {
  title: unknown;
  link_url: string;
  image_url: string;
}

interface Props {
  data: ContentItemData;
}

export const ContentItem: React.SFC<Props> = ({ data }) => {
  const title = RichText.asText(data.title);
  return (
    <a target="_blank" href={data.link_url} title={title}>
      <img src={data.image_url} />
      <p>{title}</p>
    </a>
  );
};
