import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = { title: "Remote Monitoring", description: "Remote patient monitoring with TeleDoctorSA for continuous follow-up beyond the consultation." };

export default function RemoteMonitoringPage() {
  return <ContentPage eyebrow="Remote Monitoring" title="Follow patients over time." description="TeleDoctorSA helps care teams keep appropriate visibility between consultations, supporting earlier follow-up and a more continuous patient experience." bullets={["Patient follow-up", "Connected observations", "Clinical visibility", "Escalation-ready workflows"]} />;
}
