import type { MetadataRoute } from "next";
import { appDetails } from "@/utils/configs";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: [],
      disallow: [],
    },
    sitemap: `${appDetails.url}/sitemap.xml`,
  };
}
