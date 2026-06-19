export default function () {
  return {
    analytics: {
      src: process.env.ANALYTICS_SRC || "https://cloud.umami.is/script.js",
      websiteId: process.env.ANALYTICS_WEBSITE_ID || "",
    },
  };
}
