import type { MetadataRoute } from "next";

const baseUrl = "https://www.teledoctorsa.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/virtual-care",
    "/ecg247",
    "/remote-monitoring",
    "/ehr",
    "/app",
    "/demo",
    "/contact",
    "/for-clinicians/register",
    "/privacy",
    "/terms",
    "/cookies",
    "/legal",
    "/disclaimer",
  ];

  return routes.map((route, index) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/demo" || route === "/services" ? 0.9 : 0.7,
  }));
}
