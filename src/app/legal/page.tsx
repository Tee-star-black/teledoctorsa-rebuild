import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = { title: "Legal", description: "TeleDoctorSA legal and usage information." };

export default function LegalPage() {
  return <ContentPage eyebrow="Legal" title="Clear terms for a clinical technology platform." description="Use of TeleDoctorSA is subject to applicable agreements, healthcare obligations and deployment-specific terms. The platform supports clinical work but does not replace professional judgement, statutory duties or emergency services." bullets={["Professional judgement remains essential", "Deployment-specific agreements apply", "Applicable healthcare duties remain in force", "Not an emergency service"]} ctaLabel="Contact TeleDoctorSA" ctaHref="/contact" />;
}
