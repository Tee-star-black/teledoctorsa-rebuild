import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, Stethoscope, Workflow } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { DemoForm } from "./demo-form";

import "./demo.css";

export const metadata: Metadata = {
  title: "Book a Demo",
  description: "Request a guided TeleDoctorSA platform demo for your medical practice, clinical team, or healthcare organisation.",
  alternates: { canonical: "/demo" },
};

const expectations = [
  { icon: Workflow, title: "Workflow-led", copy: "We start with how your team currently works, then map the relevant TeleDoctorSA capabilities around it." },
  { icon: Stethoscope, title: "Clinically relevant", copy: "The session focuses on consultation, ECG247, remote monitoring, records and care-team coordination where relevant." },
  { icon: ShieldCheck, title: "Implementation-aware", copy: "We can cover onboarding, devices, data handling, deployment questions and the practical next steps for your environment." },
];

export default function DemoPage() {
  return (
    <>
      <Header />
      <main className="demo-page">
        <section className="demo-hero">
          <div className="demo-shell demo-hero-grid">
            <div>
              <span className="demo-eyebrow">TeleDoctorSA platform demo</span>
              <h1>See how connected care can fit your actual practice.</h1>
            </div>
            <div className="demo-hero-copy">
              <p>Tell us a little about your team and what you want to solve. We&apos;ll turn it into a structured demo request you can send by WhatsApp or email.</p>
              <div className="demo-proof"><CheckCircle2 size={18} /> No generic sales deck. The conversation starts with your workflow.</div>
            </div>
          </div>
        </section>

        <section className="demo-body">
          <div className="demo-shell demo-body-grid">
            <div className="demo-form-wrap">
              <div className="demo-section-intro">
                <span className="demo-eyebrow demo-eyebrow-dark">Request a demo</span>
                <h2>Give us enough context to make the session useful.</h2>
              </div>
              <DemoForm />
            </div>

            <aside className="demo-aside" aria-label="What to expect from a TeleDoctorSA demo">
              <span className="demo-eyebrow">What to expect</span>
              {expectations.map(({ icon: Icon, title, copy }) => (
                <div className="demo-expectation" key={title}>
                  <Icon size={22} strokeWidth={1.7} />
                  <div><strong>{title}</strong><p>{copy}</p></div>
                </div>
              ))}
              <div className="demo-aside-note">
                <strong>For medical practices and care organisations</strong>
                <p>The platform can be discussed as a focused service deployment or as a broader connected-care environment.</p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
