import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = { title: "Connected Care Platform", description: "Explore TeleDoctorSA's connected care platform for virtual care, monitoring and longitudinal patient information." };

export default function PlatformPage() {
  return <ContentPage eyebrow="Platform" title="One connected care experience." description="TeleDoctorSA brings virtual consultations, remote monitoring, ECG247 and patient information into a connected clinical workflow built for continuity of care." bullets={["Virtual consultations", "Longitudinal patient context", "Remote monitoring", "Clinical follow-up workflows"]} />;
}
