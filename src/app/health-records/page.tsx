import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = { title: "Connected Health Records", description: "Connected patient information for continuity of care with TeleDoctorSA." };

export default function HealthRecordsPage() {
  return <ContentPage eyebrow="Health Records" title="Keep the clinical story connected." description="Longitudinal patient information supports better continuity across virtual consultations, monitoring episodes and follow-up encounters." bullets={["Longitudinal context", "Encounter continuity", "Clinician access", "Patient-centred records"]} />;
}
