import Link from "next/link";
import {
  Activity,
  ArrowRight,
  FileHeart,
  HeartPulse,
  MonitorSmartphone,
  Stethoscope,
  UsersRound,
} from "lucide-react";

import { MedicalMotionVisual } from "@/components/home/medical-motion-visual";

const capabilities = [
  {
    icon: MonitorSmartphone,
    title: "Live Virtual Consultations",
    copy: "Conduct secure, encrypted video and phone follow-ups directly from your desktop or tablet.",
    visual: "consult" as const,
  },
  {
    icon: HeartPulse,
    title: "Continuous ECG Cloud Telemetry",
    copy: "Access full-disclosure, 7-day continuous rhythm strips and automated arrhythmia reports from one connected workflow.",
    visual: "ecg" as const,
  },
  {
    icon: FileHeart,
    title: "Encrypted Centralized EHR",
    copy: "Review longitudinal patient vitals, clinical history, and diagnostic uploads in one secure location.",
    visual: "ehr" as const,
  },
];

const pathways = [
  {
    eyebrow: "For doctors & specialists",
    title: "Bring virtual care and remote diagnostics into your practice.",
    copy: "Register your practice, refer patients for continuous monitoring, and review clinical reports online.",
    href: "/for-clinicians/register?profile=doctor",
    cta: "Sign Up as a Doctor",
    icon: Stethoscope,
  },
  {
    eyebrow: "For nurses & care teams",
    title: "Coordinate remote care with a shared clinical view.",
    copy: "Access community care tools, manage remote vitals triage, and enroll in certified digital health training.",
    href: "/for-clinicians/register?profile=nurse",
    cta: "Sign Up as a Nurse",
    icon: UsersRound,
  },
  {
    eyebrow: "For practice managers",
    title: "Set up equipment, subscriptions, and patient onboarding.",
    copy: "Order medical equipment, manage device subscriptions, and streamline patient onboarding for your practice.",
    href: "/for-clinicians/register?profile=manager",
    cta: "Request Practice Setup",
    icon: MonitorSmartphone,
  },
];

const ecgFeatures = [
  {
    title: "Immediate availability",
    copy: "On-demand dispatch of sensor units directly to your practice address.",
  },
  {
    title: "Automated rhythm analysis",
    copy: "Advanced algorithms continuously screen rhythm data for AF, SVT, pauses, and PVCs.",
  },
  {
    title: "One-click PDF exports",
    copy: "Generate comprehensive summaries for clinical notes or specialist escalation.",
  },
];

export function HomeSections() {
  return (
    <>
      <section className="readiness-section" aria-labelledby="readiness-title">
        <div className="tdsa-section-shell">
          <div className="section-intro-grid">
            <div>
              <span className="tdsa-eyebrow">Live platform capabilities</span>
              <h2 id="readiness-title">Fully Integrated. Live Right Now.</h2>
            </div>
            <p>
              TeleDoctorSA is not a future concept. It is an active medical
              network ready to plug directly into your daily clinical workflow.
            </p>
          </div>

          <div className="live-capability-list">
            {capabilities.map(({ icon: Icon, title, copy, visual }, index) => (
              <article key={title} className="live-capability-row">
                <div className="capability-index">0{index + 1}</div>
                <div className="capability-copy">
                  <Icon size={24} strokeWidth={1.7} />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
                <MedicalMotionVisual variant={visual} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="entry-section" aria-labelledby="entry-title">
        <div className="tdsa-section-shell">
          <div className="section-intro-grid section-intro-grid-light">
            <div>
              <span className="tdsa-eyebrow">Direct entry pathways</span>
              <h2 id="entry-title">Choose how your team enters TeleDoctorSA.</h2>
            </div>
            <p>
              Start with the role that matches your clinical or operational
              responsibility, then move directly into onboarding.
            </p>
          </div>

          <div className="entry-grid">
            {pathways.map(({ eyebrow, title, copy, href, cta, icon: Icon }) => (
              <article key={eyebrow} className="entry-column">
                <div>
                  <Icon size={24} strokeWidth={1.7} />
                  <span>{eyebrow}</span>
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <Link href={href}>
                  {cta}
                  <ArrowRight size={17} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ecg-product-section" aria-labelledby="ecg-product-title">
        <div className="tdsa-section-shell ecg-product-grid">
          <div className="ecg-product-copy">
            <span className="tdsa-eyebrow">ECG247 remote rhythm monitor</span>
            <h2 id="ecg-product-title">
              In Stock &amp; Ready to Deploy: 7-Day ECG Monitoring.
            </h2>
            <p>
              As South Africa&apos;s official licensed distributor of the Norwegian
              ECG247 system, TeleDoctorSA brings continuous rhythm monitoring
              directly into the practice workflow, helping clinicians move beyond
              isolated resting ECG snapshots when longer rhythm visibility is needed.
            </p>

            <div className="ecg-feature-list">
              {ecgFeatures.map((feature) => (
                <div key={feature.title}>
                  <Activity size={18} />
                  <div>
                    <strong>{feature.title}</strong>
                    <span>{feature.copy}</span>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/ecg247" className="tdsa-solid-link">
              Order ECG247 Hardware Kits Today
              <ArrowRight size={17} />
            </Link>
          </div>

          <MedicalMotionVisual variant="ecg" />
        </div>
      </section>

      <section className="clinical-flow-section" aria-labelledby="clinical-flow-title">
        <div className="tdsa-section-shell clinical-flow-grid">
          <MedicalMotionVisual variant="pathways" />

          <div>
            <span className="tdsa-eyebrow">Continuous care workflow</span>
            <h2 id="clinical-flow-title">Signals become useful when they reach the right care team.</h2>
            <p>
              Remote measurements, ECG telemetry, patient history, and clinical
              review should live in one connected pathway rather than separate
              systems that force staff to rebuild context by hand.
            </p>
          </div>
        </div>
      </section>

      <section className="bottom-conversion" aria-labelledby="conversion-title">
        <div className="tdsa-section-shell bottom-conversion-grid">
          <div>
            <span className="tdsa-eyebrow">Ready to start</span>
            <h2 id="conversion-title">
              Start Modernizing Your Care Delivery in Under 5 Minutes.
            </h2>
            <p>
              Join doctors and nurses across South Africa who are actively using
              TeleDoctorSA to deliver continuous, patient-centered care.
            </p>
          </div>

          <Link href="/for-clinicians/register" className="conversion-link">
            Register Your Practice Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
