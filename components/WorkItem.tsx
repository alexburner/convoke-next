import React, { useRef, useEffect } from "react";
import { RichText } from "prismic-reactjs";

export interface WorkItemData {
  title: unknown;
  description: unknown;
  media: { url: string | null }[];
}

interface Props {
  data: WorkItemData;
}

export const WorkItem: React.SFC<Props> = ({ data }) =>
  data.media.length > 1 ? (
    <WorkItemCarousel data={data} />
  ) : (
    <WorkItemSingle data={data} />
  );

const WorkItemSingle: React.SFC<Props> = ({ data }) => (
  <div className="columns is-multiline">
    <div className="column is-full-mobile is-full-tablet is-full-desktop is-three-quarters-widescreen is-three-quarters-fullhd">
      <div className="carousel-media">
        <CarouselMediaCell src={data?.media?.[0]?.url || ""} />
      </div>
    </div>
    <div className="column is-full-mobile is-full-tablet is-full-desktop is-one-quarter-widescreen is-one-quarter-fullhd">
      <div className="title is-5">{RichText.asText(data.title)}</div>
      <RichText render={data.description || []} />
    </div>
  </div>
);

const WorkItemCarousel: React.SFC<Props> = ({ data }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!carouselRef.current) return;
    applyFlickity(carouselRef.current);
  }, [carouselRef.current]);

  return (
    <div className="columns is-multiline">
      <div className="column is-full-mobile is-full-tablet is-full-desktop is-three-quarters-widescreen is-three-quarters-fullhd">
        <div ref={carouselRef} className="carousel-media">
          {data.media.map((item) =>
            item.url ? (
              <CarouselMediaCell key={item.url} src={item.url} />
            ) : (
              <></>
            )
          )}
        </div>
      </div>
      <div className="column is-full-mobile is-full-tablet is-full-desktop is-one-quarter-widescreen is-one-quarter-fullhd">
        <div className="title is-5">{RichText.asText(data.title)}</div>
        <RichText render={data.description || []} />
      </div>
    </div>
  );
};

const CarouselMediaCell: React.SFC<{ src: string }> = ({ src }) => {
  if (src.endsWith(".mp4")) {
    return (
      <div className="carousel-media-cell">
        <video autoPlay loop muted playsInline>
          <source src={src} type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <div className="carousel-media-cell">
      <img src={src} />
    </div>
  );
};

const applyFlickity = async (el: HTMLElement) => {
  // Flickity doesn't work without "window" object
  // issue: https://github.com/metafizzy/flickity/issues/353
  if (!window) return;
  const Flickity = await import("flickity");
  new Flickity.default(el, { wrapAround: true });
  el.style.marginBottom = "1em";
};
