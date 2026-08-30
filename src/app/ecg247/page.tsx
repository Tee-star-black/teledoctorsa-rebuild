import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = { title: "ECG247", description: "ECG247 connected cardiac monitoring through TeleDoctorSA." };

export default function ECG247Page() {
  return <ContentPage eyebrow="ECG247" title="Cardiac insight beyond the consultation." description="ECG247 extends cardiac observation into the patient's everyday environment, helping clinicians review connected monitoring information alongside the broader care journey." bullets={["Connected ECG monitoring", "Clinical review support", "Remote follow-up", "Care continuity"]} />;
}
