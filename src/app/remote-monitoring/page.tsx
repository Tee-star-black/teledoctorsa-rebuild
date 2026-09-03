import type { Metadata } from "next";
import Link from "next/link";
import { Activity, ArrowRight, BellRing, HeartPulse, LineChart, ShieldCheck } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import "../site-pages.css";

export const metadata: Metadata = {
  title: "Remote Patient Monitoring",
  description: "Remote patient monitoring workflows for longitudinal vitals, symptoms and clinical follow-up through TeleDoctorSA.",
};

const features = [
  { icon: LineChart, title: "Longitudinal Trends", copy: "Review changes over time rather than relying on isolated measurements." },
  { icon: BellRing, title: "Follow-Up Signals", copy: "Use relevant monitoring information to support timely clinical review and escalation." },
  { icon: ShieldCheck, title: "Connected Clinical Context", copy: "Keep monitoring information linked to the patient record and care plan." },
];

export default function RemoteMonitoringPage() {
  return (
    <>
      <Header />
      <main className="info-page">
        <section className="info-hero">
          <div className="info-shell info-hero-grid">
            <div>
              <span className="info-eyebrow">Remote Patient Monitoring</span>
              <h1>Follow the patient between visits, not just when they arrive at the practice.</h1>
              <div className="info-hero-actions">
                <Link href="/contact?type=demo" className="info-primary">Book a Monitoring Demo <ArrowRight size={17} /></Link>
                <Link href="/ehr" className="info-secondary">Explore the EHR</Link>
              </div>
            </div>
            <p>TeleDoctorSA remote monitoring helps care teams review relevant patient measurements and trends over time while keeping those observations connected to the broader clinical record.</p>
          </div>
        </section>

        <section className="info-section info-section-alt">
          <div className="info-shell info-split">
            <div className="info-copy">
              <span className="info-eyebrow">Continuous context</span>
              <h2>Turn scattered measurements into a clearer follow-up story.</h2>
              <p>Remote monitoring can support chronic-care review, post-consultation follow-up and other appropriate longitudinal care pathways when the information remains clinically organised.</p>
              <ul className="info-list">
                <li><Activity size={18} /> Vitals and symptom trends</li>
                <li><HeartPulse size={18} /> Connected cardiac monitoring pathways</li>
                <li><ShieldCheck size={18} /> Linked clinical record and follow-up context</li>
              </ul>
            </div>
            <div className="ehr-record" aria-label="Illustrative remote monitoring timeline">
              <div className="ehr-record-header"><div><small>Monitoring status</small><strong>Patient connected</strong></div><Activity size={23} /></div>
              <div className="ehr-timeline">
                <div><span>08:30</span><strong>Vitals received</strong><small>Latest measurements added to trend</small></div>
                <div><span>Yesterday</span><strong>Clinical review</strong><small>Follow-up note recorded</small></div>
                <div><span>Day -7</span><strong>Baseline established</strong><small>Monitoring pathway initiated</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="info-shell">
            <div className="info-heading">
              <div><span className="info-eyebrow">Monitoring capabilities</span><h2>Built for ongoing observation and practical clinical follow-up.</h2></div>
              <p>The value is not simply collecting more data. It is helping clinicians see the changes that matter in context.</p>
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
            <div><h2>Extend follow-up beyond the appointment.</h2><p>See how remote monitoring can fit into your current clinical workflow.</p></div>
            <Link href="/contact?type=demo" className="info-primary">Book a Demo <ArrowRight size={17} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
