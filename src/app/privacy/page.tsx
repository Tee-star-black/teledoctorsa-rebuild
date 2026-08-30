import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = { title: "Privacy", description: "TeleDoctorSA privacy information." };

export default function PrivacyPage() {
  return <ContentPage eyebrow="Privacy" title="Privacy matters in connected care." description="TeleDoctorSA is designed for responsible handling of health information and privacy-aware digital care workflows. Formal privacy notices, processing terms and implementation-specific obligations should be reviewed for each production deployment." bullets={["Privacy-aware design", "Health information sensitivity", "Access control principles", "Deployment-specific governance"]} ctaLabel="Contact TeleDoctorSA" ctaHref="/contact" />;
}
