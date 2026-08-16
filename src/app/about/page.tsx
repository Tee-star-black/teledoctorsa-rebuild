import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartPulse, Network, ShieldCheck, Stethoscope, UsersRound } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import "../site-pages.css";

export const metadata: Metadata = {
  title: "About TeleDoctorSA",
  description: "Learn how TeleDoctorSA connects clinicians, diagnostics, monitoring and patient information across the care journey.",
};

const principles = [
  { icon: Stethoscope, title: "Clinician-led", copy: "Technology should support clinical judgement, workflow and continuity rather than add another disconnected system." },
  { icon: Network, title: "Connected by design", copy: "Consultations, ECG telemetry, monitoring and records become more useful when they operate as one care environment." },
  { icon: ShieldCheck, title: "Built for responsible care", copy: "Privacy, security, access control and accountable handling of patient information are treated as core platform requirements." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="info-page">
        <section className="info-hero">
          <div className="info-shell info-hero-grid">
            <div>
              <span className="info-eyebrow">About TeleDoctorSA</span>
              <h1>Connected care built around the people delivering it.</h1>
              <div className="info-hero-actions">
                <Link href="/for-clinicians/register" className="info-primary">Register Your Practice <ArrowRight size={17} /></Link>
                <Link href="/services" className="info-secondary">Explore Services</Link>
              </div>
            </div>
            <div>
              <p>TeleDoctorSA is a South African digital health platform designed to help healthcare professionals connect virtual consultations, ECG telemetry, remote monitoring and longitudinal patient information into one practical clinical workflow.</p>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="info-shell">
            <div className="info-heading">
              <div><span className="info-eyebrow">Why we exist</span><h2>Care should remain connected after the consultation ends.</h2></div>
              <p>Patients move through multiple clinicians, tests, devices and follow-up moments. TeleDoctorSA is built to preserve clinical context across those transitions.</p>
            </div>
            <div className="info-grid-3">
              {principles.map(({ icon: Icon, title, copy }) => (
                <article className="info-cell" key={title}>
                  <Icon size={25} strokeWidth={1.7} />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="info-section info-section-alt">
          <div className="info-shell info-split">
            <div className="info-copy">
              <span className="info-eyebrow">Our model</span>
              <h2>One clinical network, multiple points of care.</h2>
              <p>TeleDoctorSA is structured as a connected care layer around the patient, giving healthcare teams a common place to consult, review diagnostics, monitor change and preserve longitudinal context.</p>
              <ul className="info-list">
                <li><HeartPulse size={18} /> Continuous and ambulatory ECG workflows</li>
                <li><UsersRound size={18} /> Clinician, nurse and practice team collaboration</li>
                <li><Network size={18} /> Connected records, monitoring and follow-up</li>
              </ul>
            </div>
            <div className="info-diagram" aria-label="TeleDoctorSA connected care model">
              <div className="info-diagram-stack">
                <div><strong>Patient</strong><span>Care remains centered on one longitudinal record</span></div>
                <div><strong>Consultation</strong><span>Virtual and clinical touchpoints</span></div>
                <div><strong>Diagnostics</strong><span>ECG247 and uploaded clinical results</span></div>
                <div><strong>Monitoring</strong><span>Vitals, trends and follow-up</span></div>
                <div><strong>Care team</strong><span>Shared clinical context</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="info-band">
          <div className="info-shell info-band-grid">
            <div><h2>Bring your practice into the network.</h2><p>Start with clinician onboarding, ECG247, virtual care or a broader connected-care deployment.</p></div>
            <Link href="/for-clinicians/register" className="info-primary">Start Onboarding <ArrowRight size={17} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
