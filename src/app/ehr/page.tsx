import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, FileHeart, FolderHeart, LockKeyhole, Search, ShieldCheck } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import "../site-pages.css";

export const metadata: Metadata = {
  title: "TeleDoctorSA EHR",
  description: "A connected electronic health record for patient history, diagnostics, vitals, monitoring and clinical follow-up.",
};

const recordAreas = [
  { icon: FolderHeart, title: "Longitudinal Patient History", copy: "Keep consultation notes, prior findings and patient context available across the care journey." },
  { icon: Activity, title: "Vitals & Monitoring", copy: "Bring ongoing measurements and relevant trends into the same patient record used during clinical review." },
  { icon: FileHeart, title: "Diagnostics & Uploads", copy: "Store ECG reports, diagnostic documents and supporting clinical files alongside the patient timeline." },
  { icon: Search, title: "Fast Clinical Retrieval", copy: "Find the record, measurement or uploaded result needed for the current clinical decision without digging through separate systems." },
  { icon: LockKeyhole, title: "Controlled Access", copy: "Structure access around healthcare roles and appropriate clinical responsibilities." },
  { icon: ShieldCheck, title: "Continuity & Accountability", copy: "Maintain a clearer record of what was reviewed, documented and carried forward into follow-up care." },
];

export default function EhrPage() {
  return (
    <>
      <Header />
      <main className="info-page">
        <section className="info-hero">
          <div className="info-shell info-hero-grid">
            <div>
              <span className="info-eyebrow">Electronic Health Record</span>
              <h1>One patient record across consultations, diagnostics and ongoing monitoring.</h1>
              <div className="info-hero-actions">
                <Link href="/for-clinicians/register" className="info-primary">Access Through Clinician Onboarding <ArrowRight size={17} /></Link>
                <Link href="/services" className="info-secondary">View All Services</Link>
              </div>
            </div>
            <div className="info-hero-media">
              <Image src="/images/home/06-healthcare-dashboard.jpg" alt="TeleDoctorSA electronic health record dashboard" fill priority sizes="(max-width: 900px) 100vw, 42vw" />
            </div>
          </div>
        </section>

        <section className="info-section info-section-alt">
          <div className="info-shell info-split">
            <div className="info-copy">
              <span className="info-eyebrow">The clinical record</span>
              <h2>A record that becomes more useful as care continues.</h2>
              <p>Instead of treating every encounter as a new isolated event, the EHR gives care teams a longitudinal view of the patient and the information generated over time.</p>
              <ul className="info-list">
                <li><FileHeart size={18} /> Consultation and clinical history</li>
                <li><Activity size={18} /> Vitals, ECG and remote monitoring data</li>
                <li><FolderHeart size={18} /> Diagnostic reports and clinical uploads</li>
              </ul>
            </div>
            <div className="info-feature-media">
              <Image src="/images/home/09-clinician-platform-review.jpg" alt="Clinician and practice leader reviewing a connected patient record" fill sizes="(max-width: 900px) 100vw, 46vw" />
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="info-shell">
            <div className="info-heading">
              <div><span className="info-eyebrow">Core capabilities</span><h2>Built for the information clinicians actually need to retrieve.</h2></div>
              <p>The aim is not simply to store more data. It is to keep relevant patient information organised around clinical continuity.</p>
            </div>
            <div className="info-grid-3">
              {recordAreas.map(({ icon: Icon, title, copy }) => (
                <article className="info-cell" key={title}>
                  <Icon size={25} strokeWidth={1.7} />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="info-band">
          <div className="info-shell info-band-grid">
            <div><h2>Bring patient context into one clinical workspace.</h2><p>Start clinician onboarding and connect the EHR with TeleDoctorSA consultation, ECG and monitoring workflows.</p></div>
            <Link href="/for-clinicians/register" className="info-primary">Register Your Practice <ArrowRight size={17} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
