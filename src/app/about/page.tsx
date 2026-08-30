import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = { title: "About", description: "About TeleDoctorSA and its connected care approach in South Africa." };

export default function AboutPage() {
  return <ContentPage eyebrow="About TeleDoctorSA" title="Care should not end when the call does." description="TeleDoctorSA is a South African connected-care platform focused on extending clinical relationships beyond individual consultations through virtual care, monitoring and better continuity of patient information." bullets={["South African context", "Connected care", "Clinical continuity", "Practical digital health"]} />;
}
