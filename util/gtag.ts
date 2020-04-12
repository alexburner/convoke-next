/**
 * via https://github.com/zeit/next.js/blob/canary/examples/with-google-analytics/lib/gtag.js
 */

export const GA_TRACKING_ID = "UA-137004407-1";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (!(window as any).gtag) {
    console.error("Missing gtag");
    return;
  }
  (window as any).gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  [key: string]: string;
}) => {
  if (!(window as any).gtag) {
    console.error("Missing gtag");
    return;
  }
  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
