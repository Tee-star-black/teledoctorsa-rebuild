import type { MetadataRoute } from "next";

const baseUrl = "https://www.teledoctorsa.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/platform",
    "/ecg247",
    "/remote-monitoring",
    "/health-records",
    "/professionals",
    "/organisations",
    "/about",
    "/contact",
    "/privacy",
    "/legal",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
