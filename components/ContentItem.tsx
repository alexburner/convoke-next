import React from "react";
import { RichText } from "prismic-reactjs";

import { exists } from "../util/types";

export interface ContentItemData {
  title: unknown;
  link_url: string | null;
  image_url: string | null;
  type: string | null;
  topics: { topic: ContentTopic | null }[] | null;
}

interface ContentTopic {
  topic_name: string | null;
}

interface Props {
  data: ContentItemData;
}

export const ContentItem: React.SFC<Props> = ({ data }) => {
  const title = RichText.asText(data.title);

  // Distill type & topics into single string
  // `${type} - ${topic1}, ${topic2}, ${topic3}`
  const metadata = [];
  if (data.type) metadata.push(data.type);
  const sparseTopics = data.topics?.map((x) => x.topic?.topic_name) || [];
  const topics = sparseTopics.filter(exists);
  const topicsString = topics.sort().join(", ");
  if (topicsString.length) metadata.push(topicsString);
  const metadataString = metadata.join(" - ");

  return (
    <div className="content-item">
      <a target="_blank" href={data.link_url || ""} title={title}>
        <img src={data.image_url || ""} />
        <p className="has-text-weight-semibold">{title}</p>
      </a>
      {metadataString && <small className="is-italic">{metadataString}</small>}
    </div>
  );
};
