import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = { title: "Healthcare Professionals", description: "TeleDoctorSA tools for clinicians delivering connected virtual and remote care." };

export default function ProfessionalsPage() {
  return <ContentPage eyebrow="Professionals" title="Built around clinical work." description="TeleDoctorSA is designed to help healthcare professionals deliver virtual care, review connected monitoring information and preserve continuity across patient encounters." bullets={["Clinician-first workflows", "Virtual consultations", "Connected monitoring", "Patient context"]} />;
}
