import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TeleDoctorSA",
    short_name: "TeleDoctorSA",
    description:
      "Connected healthcare technology for virtual care, ECG247 remote monitoring and secure digital health records in South Africa.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffaf6",
    theme_color: "#200d1e",
    lang: "en-ZA",
    categories: ["medical", "health", "business"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
