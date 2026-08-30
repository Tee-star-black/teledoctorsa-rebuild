import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = { title: "Healthcare Organisations", description: "TeleDoctorSA connected care infrastructure for healthcare organisations." };

export default function OrganisationsPage() {
  return <ContentPage eyebrow="Organisations" title="Connected care for teams and services." description="TeleDoctorSA helps healthcare organisations extend access, support remote follow-up and connect clinical touchpoints without fragmenting the patient journey." bullets={["Multi-clinician workflows", "Remote service delivery", "Monitoring pathways", "Operational continuity"]} />;
}
