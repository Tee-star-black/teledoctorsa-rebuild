import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, FileHeart, HeartPulse, MonitorSmartphone, Stethoscope } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import "../site-pages.css";

export const metadata: Metadata = {
  title: "TeleDoctorSA Services",
  description: "Explore TeleDoctorSA services across virtual care, ECG247, remote monitoring, EHR and clinician onboarding.",
};

const services = [
  {
    icon: MonitorSmartphone,
    title: "Virtual Consultations",
    copy: "Run secure remote follow-ups and consultations from desktop or tablet while keeping the encounter connected to the patient record.",
    href: "/virtual-care",
  },
  {
    icon: HeartPulse,
    title: "ECG247 Remote Rhythm Monitoring",
    copy: "Use extended ECG telemetry workflows for ambulatory rhythm monitoring, review and specialist escalation.",
    href: "/ecg247",
  },
  {
    icon: Activity,
    title: "Remote Patient Monitoring",
    copy: "Track longitudinal measurements, symptoms and trends between appointments to support more informed follow-up.",
    href: "/remote-monitoring",
  },
  {
    icon: FileHeart,
    title: "Electronic Health Records",
    copy: "Keep patient history, vitals, diagnostics and care notes in one secure clinical record designed for continuity.",
    href: "/ehr",
  },
  {
    icon: Stethoscope,
    title: "Practice Onboarding",
    copy: "Bring doctors, nurses and practice teams onto the TeleDoctorSA network through a structured clinician registration process.",
    href: "/for-clinicians/register",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="info-page">
        <section className="info-hero info-hero-compact">
          <div className="info-shell info-hero-grid">
            <div>
              <span className="info-eyebrow">Services</span>
              <h1>Clinical tools that work together instead of living in separate silos.</h1>
            </div>
            <div className="info-hero-media">
              <Image src="/images/home/02-connected-care-ecosystem.jpg" alt="TeleDoctorSA connected-care ecosystem" fill priority sizes="(max-width: 900px) 100vw, 42vw" />
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="info-shell">
            <div className="info-service-grid">
              {services.map(({ icon: Icon, title, copy, href }, index) => (
                <article className="info-service-row" key={title}>
                  <div className="info-service-index">0{index + 1}</div>
                  <div className="info-service-icon"><Icon size={24} strokeWidth={1.7} /></div>
                  <div>
                    <h2>{title}</h2>
                    <p>{copy}</p>
                  </div>
                  <Link href={href} aria-label={`Explore ${title}`}>
                    <ArrowRight size={20} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="info-section info-section-dark">
          <div className="info-shell info-heading info-heading-dark">
            <div>
              <span className="info-eyebrow">One connected workflow</span>
              <h2>Consult. Diagnose. Monitor. Record. Follow up.</h2>
            </div>
            <p>Each service is useful on its own, but the platform becomes more valuable when those workflows share the same clinical context.</p>
          </div>
        </section>

        <section className="info-section info-section-alt">
          <div className="info-shell info-split">
            <div className="info-feature-media"><Image src="/images/home/09-clinician-platform-review.jpg" alt="Clinical and operational teams reviewing the TeleDoctorSA platform" fill sizes="(max-width: 900px) 100vw, 46vw" /></div>
            <div className="info-copy"><span className="info-eyebrow">Shared clinical context</span><h2>One view for clinical and operational teams.</h2><p>Connected services give the people delivering care a clearer view of patient activity, monitoring and follow-up across the practice.</p></div>
          </div>
        </section>

        <section className="info-band">
          <div className="info-shell info-band-grid">
            <div><h2>Choose the service that fits your practice today.</h2><p>Start with one workflow and expand into the broader TeleDoctorSA platform over time.</p></div>
            <Link href="/for-clinicians/register" className="info-primary">Register Your Practice <ArrowRight size={17} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
