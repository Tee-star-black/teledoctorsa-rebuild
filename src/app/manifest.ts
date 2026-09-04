import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TeleDoctorSA",
    short_name: "TDSA",
    description:
      "Connected clinical technology for virtual care, ECG247 monitoring, electronic health records and remote patient workflows.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffdfb",
    theme_color: "#45152f",
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
