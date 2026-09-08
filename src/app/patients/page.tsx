import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartPulse, MessageCircle, MonitorSmartphone, Smartphone } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import "../patient-pages.css";

export const metadata: Metadata = {
  title: "TeleDoctorSA for Patients",
  description: "A patient-focused TeleDoctorSA experience for app access, follow-up, communication and connected ECG247 monitoring.",
  robots: { index: false, follow: true },
};

const journey = [
  { icon: Smartphone, title: "Know", copy: "See updates, guidance and the next step without needing to chase information." },
  { icon: HeartPulse, title: "Monitor", copy: "Use connected monitoring when symptoms, recovery or follow-up need extra visibility." },
  { icon: MessageCircle, title: "Message", copy: "Stay connected to the care journey through the same TeleDoctorSA experience." },
  { icon: MonitorSmartphone, title: "Follow up", copy: "Move from appointment to next action with less confusion for patients and families." },
];

export default function PatientsPage() {
  return (
    <>
      <Header />
      <main className="patient-page">
        <section className="patient-hero">
          <div className="patient-shell">
            <div className="patient-hero-grid">
              <div>
                <span className="patient-kicker">Patients</span>
                <h1>Feel informed between appointments.</h1>
                <p className="patient-lead">Keep your health updates, next steps and monitoring closer, so care feels easier to understand before the next appointment.</p>
                <div className="patient-actions">
                  <Link href="/patients-portal" className="patient-primary">Explore the Patient Portal <ArrowRight size={17} /></Link>
                  <Link href="/app" className="patient-secondary">See the Patient App</Link>
                </div>
              </div>
              <div>
                <div className="patient-visual">
                  <Image src="/images/home/07-mobile-health-app.jpg" alt="TeleDoctorSA patient experience on mobile devices" fill priority sizes="(max-width: 900px) 100vw, 44vw" />
                </div>
                <div className="patient-proof">
                  <article><strong>Phone-first</strong><span>Important updates stay easy to reach.</span></article>
                  <article><strong>Connected</strong><span>Care continues beyond the consultation.</span></article>
                  <article><strong>Monitored</strong><span>ECG247 can support extended rhythm monitoring workflows.</span></article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="patient-section">
          <div className="patient-shell">
            <div className="patient-heading">
              <div><span className="patient-kicker">Patient flow</span><h2>Care should not feel confusing after you leave.</h2></div>
              <p>Stay close to the information that helps you understand what happened, what matters and what comes next.</p>
            </div>
            <div className="patient-grid">
              {journey.map(({ icon: Icon, title, copy }) => (
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
          <div className="patient-shell patient-center">
            <span className="patient-kicker">Core tools</span>
            <h2>Simple tools for real life.</h2>
            <p className="patient-copy">Start with the patient journey, then move into connected monitoring when symptoms, recovery or follow-up need more visibility.</p>
            <div className="patient-device-grid" style={{ marginTop: 36 }}>
              <div className="patient-device"><Image src="/images/home/phone.png" alt="TeleDoctorSA patient app on a smartphone" fill sizes="(max-width: 900px) 100vw, 28vw" /></div>
              <div className="patient-panel dark">
                <span className="patient-kicker">Patient portal</span>
                <h3>One place for the next step.</h3>
                <p>Keep relevant updates, reports, follow-up context and monitoring guidance close to the patient experience.</p>
                <div className="patient-actions"><Link href="/patients-portal" className="patient-primary">Open Patient Portal <ArrowRight size={17} /></Link></div>
              </div>
              <div className="patient-device"><Image src="/images/home/ecg monitor.jpg" alt="ECG monitoring device used in a connected care workflow" fill sizes="(max-width: 900px) 100vw, 28vw" /></div>
            </div>
          </div>
        </section>

        <section className="patient-band">
          <div className="patient-shell patient-band-grid">
            <div><span className="patient-kicker">Find out more</span><h2>Take uncertainty out of the next step.</h2><p>Explore the patient portal and see how connected care can make follow-up information, monitoring and next actions easier to understand.</p></div>
            <Link href="/patients-portal" className="patient-primary">Explore the Portal <ArrowRight size={17} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
