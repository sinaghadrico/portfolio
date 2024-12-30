import type { MetadataRoute } from "next";
import { appDetails } from "@/utils/configs";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: appDetails.url,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
