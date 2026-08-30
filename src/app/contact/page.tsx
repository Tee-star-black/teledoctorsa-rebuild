import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = { title: "Contact", description: "Contact TeleDoctorSA or request a product demonstration." };

export default function ContactPage() {
  return <ContentPage eyebrow="Contact" title="Start a connected-care conversation." description="Tell us what your service, practice or organisation is trying to improve. TeleDoctorSA demonstrations are tailored around real clinical workflows rather than generic product tours." bullets={["Platform demonstrations", "Clinical workflow discussions", "Organisation enquiries", "Implementation conversations"]} ctaLabel="Return Home" ctaHref="/" />;
}
