import type { Metadata } from "next";

import "./home.css";
import "./home-narrative.css";
import "./home-integration.css";
import "./hero-overrides.css";
import "./desktop-home.css";
import "./clinical-showcase.css";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/home/hero";
import { HomeSections } from "@/components/home/home-sections";

export const metadata: Metadata = {
  title: "Connected Care Technology for Modern Medical Practices",
  description:
    "TeleDoctorSA connects virtual care, ECG247 monitoring, electronic health records and remote patient workflows for healthcare practices in South Africa.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <HomeSections />
      </main>

      <Footer />
    </>
  );
}
