import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, FileDown, HeartPulse, ShieldCheck } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import "../site-pages.css";

export const metadata: Metadata = {
  title: "ECG247 Remote Rhythm Monitoring",
  description: "Explore ECG247 remote rhythm monitoring workflows available through TeleDoctorSA for healthcare practices.",
};

const features = [
  { icon: HeartPulse, title: "Continuous Rhythm Monitoring", copy: "Support extended ambulatory ECG monitoring beyond a short resting ECG snapshot." },
  { icon: Activity, title: "Clinical Review Workflow", copy: "Bring rhythm data into a connected review and escalation pathway for clinicians." },
  { icon: FileDown, title: "Diagnostic Reporting", copy: "Keep ECG reports accessible for clinical notes, follow-up and specialist referral." },
];

export default function ECG247Page() {
  return (
    <>
      <Header />
      <main className="info-page">
        <section className="info-hero info-hero-premium info-hero--ecg">
          <div className="info-shell info-hero-grid">
            <div>
              <span className="info-eyebrow">ECG247</span>
              <h1>Extended rhythm monitoring connected directly to the clinical workflow.</h1>
              <div className="info-hero-actions">
                <Link href="/demo" className="info-primary">Request an ECG247 Demo <ArrowRight size={17} /></Link>
                <Link href="/for-clinicians/register" className="info-secondary">Practice Onboarding</Link>
              </div>
              <div className="info-hero-signals" aria-label="ECG247 workflow">
                <div><strong>Capture</strong><span>Extended rhythm monitoring</span></div>
                <div><strong>Review</strong><span>Clinical interpretation workflow</span></div>
                <div><strong>Escalate</strong><span>Reports and follow-up context</span></div>
              </div>
            </div>
            <div className="info-hero-media">
              <Image src="/images/home/ecg monitor.jpg" alt="ECG monitoring equipment used within a connected clinical workflow" fill priority sizes="(max-width: 900px) 100vw, 42vw" quality={92} />
              <div className="info-hero-media-label"><span>Rhythm monitoring</span><strong>Diagnostic data inside the care journey</strong></div>
            </div>
          </div>
        </section>

        <section className="info-section info-section-alt">
          <div className="info-shell info-split">
            <div className="info-copy">
              <span className="info-eyebrow">Remote rhythm monitoring</span>
              <h2>Clinical visibility beyond the consultation room.</h2>
              <p>Use extended ECG monitoring to capture rhythm information over time, then keep the result connected to the patient journey instead of isolated in a separate workflow.</p>
              <ul className="info-list">
                <li><ShieldCheck size={18} /> Practice-oriented deployment and support</li>
                <li><HeartPulse size={18} /> Continuous rhythm observation</li>
                <li><Activity size={18} /> Review and follow-up workflow</li>
              </ul>
            </div>
            <div className="tdsa-ecg-photo-frame" style={{ position: "relative", minHeight: 430 }}>
              <Image src="/images/home/dummy ecg.png" alt="ECG247 rhythm monitoring interface under clinical review" fill sizes="(max-width: 900px) 100vw, 50vw" className="tdsa-ecg-photo" quality={92} />
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="info-shell">
            <div className="info-heading">
              <div><span className="info-eyebrow">Core capabilities</span><h2>A focused diagnostic workflow inside a connected care platform.</h2></div>
              <p>ECG247 becomes more useful when monitoring, reports and clinical follow-up remain part of the same patient context.</p>
            </div>
            <div className="info-grid-3">
              {features.map(({ icon: Icon, title, copy }) => (
                <article className="info-cell" key={title}><Icon size={25} strokeWidth={1.7} /><h3>{title}</h3><p>{copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="info-band">
          <div className="info-shell info-band-grid">
            <div><h2>Bring ECG247 into your practice.</h2><p>Discuss deployment, monitoring workflow and how ECG247 connects into TeleDoctorSA.</p></div>
            <Link href="/demo" className="info-primary">Request ECG247 Demo <ArrowRight size={17} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
