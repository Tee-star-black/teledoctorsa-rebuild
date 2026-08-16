import type { Metadata } from "next";
import Link from "next/link";
import { Activity, ArrowRight, BellRing, FileHeart, HeartPulse, MonitorSmartphone, Smartphone } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import "../site-pages.css";

export const metadata: Metadata = {
  title: "TeleDoctorSA App",
  description: "Explore the patient-facing TeleDoctorSA app experience for consultations, monitoring, records and connected care follow-up.",
};

const features = [
  { icon: Smartphone, title: "Care in one place", copy: "Give patients a single digital entry point for consultations, follow-up tasks and connected care information." },
  { icon: HeartPulse, title: "Monitoring support", copy: "Present relevant monitoring workflows and patient-facing guidance without exposing the complexity of the clinician platform." },
  { icon: FileHeart, title: "Patient record access", copy: "Surface appropriate longitudinal information, reports and care instructions in a patient-friendly view." },
  { icon: BellRing, title: "Follow-up reminders", copy: "Help patients keep track of care actions, review moments and monitoring tasks between consultations." },
  { icon: Activity, title: "Health trends", copy: "Show simple trend information where appropriate so patients can better understand ongoing monitoring." },
  { icon: MonitorSmartphone, title: "Connected to clinicians", copy: "Keep the patient experience linked to the same TeleDoctorSA care workflows used by the clinical team." },
];

export default function AppPage() {
  return (
    <>
      <Header />
      <main className="info-page">
        <section className="info-hero">
          <div className="info-shell info-hero-grid">
            <div>
              <span className="info-eyebrow">TeleDoctorSA App</span>
              <h1>The patient-facing side of connected care.</h1>
              <div className="info-hero-actions">
                <Link href="/for-clinicians/register" className="info-primary">Bring the App to Your Practice <ArrowRight size={17} /></Link>
                <Link href="/services" className="info-secondary">Explore Services</Link>
              </div>
            </div>
            <div>
              <p>The TeleDoctorSA app is designed to give patients a simpler way to stay connected to their care journey while clinicians work from the broader platform, EHR and monitoring environment.</p>
            </div>
          </div>
        </section>

        <section className="info-section info-section-alt">
          <div className="info-shell info-split">
            <div className="info-copy">
              <span className="info-eyebrow">Patient experience</span>
              <h2>Useful care actions without overwhelming the patient.</h2>
              <p>The app should expose the right information at the right moment: consultations, monitoring instructions, relevant records, follow-up actions and communication with the care team.</p>
              <ul className="info-list">
                <li><Smartphone size={18} /> Mobile-first access to connected care</li>
                <li><BellRing size={18} /> Follow-up and monitoring prompts</li>
                <li><HeartPulse size={18} /> Linked to ECG and remote monitoring workflows</li>
              </ul>
            </div>
            <div className="app-phone" aria-label="Illustrative TeleDoctorSA patient app">
              <div className="app-phone-top"><small>TeleDoctorSA</small><strong>Good morning</strong></div>
              <div className="app-phone-block"><span>Next action</span><strong>Complete today&apos;s monitoring check-in</strong></div>
              <div className="app-phone-row"><div><small>Heart rate</small><strong>72 bpm</strong></div><HeartPulse size={24} /></div>
              <div className="app-phone-row"><div><small>Care team</small><strong>Connected</strong></div><MonitorSmartphone size={24} /></div>
              <div className="app-phone-footer">Patient care timeline</div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="info-shell">
            <div className="info-heading">
              <div><span className="info-eyebrow">App capabilities</span><h2>Designed around continuity, not another standalone health app.</h2></div>
              <p>The app is most valuable when it remains connected to the clinician portal and the broader TeleDoctorSA patient record.</p>
            </div>
            <div className="info-grid-3">
              {features.map(({ icon: Icon, title, copy }) => (
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
            <div><h2>Connect the patient experience to your practice.</h2><p>Onboard your clinical team and use the app as part of a broader virtual care, monitoring and EHR workflow.</p></div>
            <Link href="/for-clinicians/register" className="info-primary">Register Your Practice <ArrowRight size={17} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
