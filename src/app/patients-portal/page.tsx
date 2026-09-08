import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, FileHeart, HeartPulse, ShieldCheck, Smartphone } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import "../patient-pages.css";

export const metadata: Metadata = {
  title: "Patient & Athlete Portal | TeleDoctorSA",
  description: "A TeleDoctorSA patient and athlete experience for connected heart monitoring, reports, follow-up and patient-facing care information.",
  robots: { index: false, follow: true },
};

const benefits = [
  { icon: Smartphone, title: "Clear patient access", copy: "Keep relevant reports, symptoms, medications and next steps available from a phone-first experience." },
  { icon: Activity, title: "Activity-aware monitoring", copy: "Connect extended rhythm monitoring with symptoms, effort, recovery and follow-up context." },
  { icon: FileHeart, title: "Reports in context", copy: "Keep monitoring reports and care guidance close to the broader patient journey." },
  { icon: ShieldCheck, title: "Clinician-guided follow-up", copy: "Use connected monitoring as part of a clinical review and follow-up workflow rather than as a standalone signal." },
];

export default function PatientsPortalPage() {
  return (
    <>
      <Header />
      <main className="patient-page">
        <section className="patient-hero">
          <div className="patient-shell patient-hero-grid">
            <div>
              <span className="patient-kicker">Patients & athletes</span>
              <h1>Move with confidence, backed by connected heart monitoring.</h1>
              <p className="patient-lead">Train, recover and live with clearer context. TeleDoctorSA and ECG247 can bring extended rhythm monitoring, reports and follow-up into one connected patient journey.</p>
              <div className="patient-actions">
                <Link href="/ecg247" className="patient-primary">See ECG247 <ArrowRight size={17} /></Link>
                <Link href="/patients" className="patient-secondary">Back to Patients</Link>
              </div>
            </div>

            <div className="ecg-stage">
              <div className="ecg-stage-top"><span>Patient + athlete view</span><span>ECG247 workflow</span></div>
              <Image src="/images/home/dummy ecg.png" alt="Illustrative ECG247 rhythm monitoring interface" width={900} height={620} priority />
              <div className="ecg-line">
                <svg viewBox="0 0 520 92" role="img" aria-label="Illustrative ECG waveform">
                  <path d="M0 48h54l18-12 16 35 14-50 18 62 18-36 16 0 16-18 18 24 18-6 16-28 18 42 16-10h62l12-16 18 24 18-34 18 24h106" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" />
                </svg>
                <div className="ecg-tags"><span>Symptoms</span><span>Activity</span><span>Recovery</span><span>Follow-up</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="patient-section">
          <div className="patient-shell">
            <div className="patient-heading">
              <div><span className="patient-kicker">Why it matters</span><h2>Clearer information supports better next steps.</h2></div>
              <p>When monitoring and follow-up information stay connected, patients can understand their journey more easily and clinicians can review the same context without splitting the workflow.</p>
            </div>
            <div className="patient-grid">
              {benefits.map(({ icon: Icon, title, copy }) => (
                <article className="patient-card" key={title}>
                  <span className="icon"><Icon size={20} strokeWidth={1.7} /></span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="patient-section alt">
          <div className="patient-shell">
            <div className="patient-heading">
              <div><span className="patient-kicker">Built for both</span><h2>Reassurance for patients. Context for active people.</h2></div>
              <p>One connected experience can support everyday follow-up and activity-related monitoring without turning patient-facing information into a clinical dashboard.</p>
            </div>
            <div className="patient-split">
              <article className="patient-panel">
                <span className="patient-kicker">Patient view</span>
                <h3>Clear, guided and easy to follow.</h3>
                <ul>
                  <li>See relevant reports, guidance and follow-up steps in one place.</li>
                  <li>Keep symptoms, medications and care actions visible from a phone-first experience.</li>
                  <li>Stay connected to the same patient context used by the care team.</li>
                </ul>
              </article>
              <article className="patient-panel dark">
                <span className="patient-kicker">Active lifestyle view</span>
                <h3>Monitoring connected to real-world activity.</h3>
                <ul>
                  <li>Capture rhythm information over longer periods and during normal daily activity.</li>
                  <li>Connect symptoms, effort and recovery context to the monitoring record.</li>
                  <li>Keep review and follow-up connected to the broader clinical workflow.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="patient-section">
          <div className="patient-shell patient-center">
            <span className="patient-kicker">ECG247 advantage</span>
            <h2>Heart data that stays part of the care journey.</h2>
            <p className="patient-copy">ECG247 supports extended ambulatory rhythm monitoring beyond a brief resting snapshot, while TeleDoctorSA keeps reports, follow-up and patient context connected.</p>
            <div className="patient-device-grid" style={{ marginTop: 36 }}>
              <div className="patient-device"><Image src="/images/home/ecg monitor.jpg" alt="ECG monitoring equipment" fill sizes="(max-width: 900px) 100vw, 28vw" /></div>
              <div className="patient-panel dark"><HeartPulse size={34} strokeWidth={1.5} /><h3>Monitoring without losing context.</h3><p>Bring rhythm data, patient-reported information and clinician review into a single connected journey.</p></div>
              <div className="patient-device"><Image src="/images/home/phone.png" alt="TeleDoctorSA patient experience on mobile" fill sizes="(max-width: 900px) 100vw, 28vw" /></div>
            </div>
          </div>
        </section>

        <section className="patient-band">
          <div className="patient-shell patient-band-grid">
            <div><span className="patient-kicker">Next step</span><h2>Explore connected monitoring and patient follow-up.</h2><p>See how ECG247 and the TeleDoctorSA patient experience can work together across monitoring, review and follow-up.</p></div>
            <Link href="/ecg247" className="patient-primary">Explore ECG247 <ArrowRight size={17} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
