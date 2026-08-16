import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  FileHeart,
  HeartPulse,
  MonitorSmartphone,
  ShieldCheck,
  Stethoscope,
  UsersRound,
  Video,
} from "lucide-react";

import { MedicalMotionVisual } from "@/components/home/medical-motion-visual";

const liveCapabilities = [
  {
    icon: Video,
    title: "Live Virtual Consultations",
    copy:
      "Conduct secure, encrypted video and phone follow-ups directly from your desktop or tablet.",
    visual: "monitoring" as const,
  },
  {
    icon: HeartPulse,
    title: "Instant ECG Cloud Telemetry",
    copy:
      "Access full-disclosure, 7-day continuous rhythm strips and automated arrhythmia reports instantly.",
    visual: "ecg" as const,
  },
  {
    icon: FileHeart,
    title: "Encrypted Centralized EHR",
    copy:
      "Review longitudinal patient vitals, clinical history, and diagnostic uploads in one secure location.",
    visual: "chronic" as const,
  },
];

const pathways = [
  {
    icon: Stethoscope,
    title: "For Doctors & Specialists",
    copy:
      "Register your practice, refer patients for continuous monitoring, and review clinical reports online.",
    cta: "Sign Up as a Doctor",
    href: "/for-clinicians/register#register",
  },
  {
    icon: UsersRound,
    title: "For Nurses & Care Teams",
    copy:
      "Access community care tools, manage remote vitals triage, and enroll in certified digital health training.",
    cta: "Sign Up as a Nurse",
    href: "/for-clinicians/register#register",
  },
  {
    icon: MonitorSmartphone,
    title: "For Practice Managers",
    copy:
      "Order medical equipment, manage device subscriptions, and streamline patient onboarding.",
    cta: "Request Practice Demo",
    href: "/for-clinicians/register#register",
  },
];

const ecgFeatures = [
  {
    icon: ShieldCheck,
    title: "Immediate Availability",
    copy: "On-demand dispatch of sensor units directly to your practice address.",
  },
  {
    icon: HeartPulse,
    title: "Automated Diagnostics",
    copy:
      "Advanced algorithms continuously screen for Atrial Fibrillation, SVT, Pauses, and PVCs.",
  },
  {
    icon: ClipboardCheck,
    title: "One-Click PDF Exports",
    copy:
      "Generate comprehensive diagnostic summaries for clinical notes or specialist escalation.",
  },
];

const clinicalImages = [
  {
    src: "/images/home/ecg monitor.jpg",
    alt: "ECG monitoring equipment used in a clinical environment",
    label: "Rhythm monitoring",
  },
  {
    src: "/images/home/bpm.jpg",
    alt: "Blood pressure monitoring equipment",
    label: "Remote vitals",
  },
  {
    src: "/images/home/apparatus.jpg",
    alt: "Clinical monitoring apparatus",
    label: "Clinical hardware",
  },
];

export function HomeSections() {
  return (
    <>
      <section className="tdsa-capabilities" aria-labelledby="readiness-title">
        <div className="tdsa-section-shell">
          <div className="tdsa-section-heading tdsa-section-heading-light">
            <div>
              <span className="tdsa-eyebrow">Proof of readiness</span>
              <h2 id="readiness-title">Fully Integrated. Live Right Now.</h2>
            </div>

            <p>
              TeleDoctorSA is not a future concept. It is an active medical network
              ready to plug directly into your daily clinical workflow.
            </p>
          </div>

          <div className="tdsa-live-capability-grid">
            {liveCapabilities.map(({ icon: Icon, title, copy, visual }) => (
              <article key={title} className="tdsa-live-capability">
                <div className="tdsa-live-capability-copy">
                  <span className="tdsa-capability-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
                <div className="tdsa-live-capability-visual">
                  <MedicalMotionVisual variant={visual} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tdsa-clinical-imagery" aria-labelledby="clinical-imagery-title">
        <div className="tdsa-section-shell">
          <div className="tdsa-clinical-imagery-heading">
            <span className="tdsa-eyebrow">Clinical technology in practice</span>
            <h2 id="clinical-imagery-title">A connected care environment, not a collection of isolated tools.</h2>
          </div>

          <div className="tdsa-clinical-image-grid">
            <figure className="tdsa-clinical-image tdsa-clinical-image-1">
              <div className="tdsa-clinical-image-frame tdsa-device-showcase">
                <div className="tdsa-device-laptop">
                  <Image
                    src="/images/home/laptop.png"
                    alt="TeleDoctorSA platform displayed on a laptop"
                    fill
                    sizes="(max-width: 800px) 88vw, 46vw"
                    className="tdsa-device-media"
                  />
                </div>
                <div className="tdsa-device-phone">
                  <Image
                    src="/images/home/phone.png"
                    alt="TeleDoctorSA patient experience displayed on a smartphone"
                    fill
                    sizes="(max-width: 800px) 34vw, 14vw"
                    className="tdsa-device-media"
                  />
                </div>
              </div>
              <figcaption>
                <span>01</span>
                <strong>Connected across devices</strong>
              </figcaption>
            </figure>

            {clinicalImages.map((image, index) => (
              <figure
                key={image.src}
                className={`tdsa-clinical-image tdsa-clinical-image-${index + 2}`}
              >
                <div className="tdsa-clinical-image-frame">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 800px) 100vw, 32vw"
                    className="tdsa-clinical-image-media"
                  />
                </div>
                <figcaption>
                  <span>0{index + 2}</span>
                  <strong>{image.label}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="tdsa-pathways" aria-labelledby="pathways-title">
        <div className="tdsa-section-shell">
          <div className="tdsa-section-heading">
            <div>
              <span className="tdsa-eyebrow">Direct entry pathways</span>
              <h2 id="pathways-title">Choose how your team gets started.</h2>
            </div>
            <p>
              Doctors, nurses, and practice teams can enter through a workflow
              designed around how they actually use the platform.
            </p>
          </div>

          <div className="tdsa-pathway-grid">
            {pathways.map(({ icon: Icon, title, copy, cta, href }) => (
              <article key={title} className="tdsa-pathway-column">
                <Icon size={28} strokeWidth={1.7} />
                <h3>{title}</h3>
                <p>{copy}</p>
                <Link href={href} className="tdsa-text-link">
                  {cta}
                  <ArrowRight size={17} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tdsa-feature tdsa-ecg-feature" aria-labelledby="ecg-title">
        <div className="tdsa-section-shell tdsa-feature-grid">
          <div className="tdsa-feature-copy">
            <span className="tdsa-eyebrow">ECG247 Remote Rhythm Monitor</span>

            <h2 id="ecg-title">
              In Stock &amp; Ready to Deploy: Hospital-Grade 7-Day ECG Monitoring
            </h2>

            <p>
              As South Africa&apos;s official licensed distributor of the Norwegian
              ECG247 system, we deliver continuous, high-accuracy arrhythmia
              detection straight to your clinic. Stop relying on inconclusive
              10-second resting ECGs.
            </p>

            <div className="tdsa-ecg-feature-list">
              {ecgFeatures.map(({ icon: Icon, title, copy }) => (
                <div key={title} className="tdsa-ecg-feature-item">
                  <Icon size={20} strokeWidth={1.8} />
                  <div>
                    <strong>{title}</strong>
                    <span>{copy}</span>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/ecg247" className="tdsa-solid-link">
              Order ECG247 Hardware Kits Today
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="tdsa-feature-visual tdsa-ecg-photo-visual">
            <div className="tdsa-ecg-photo-frame">
              <Image
                src="/images/home/ecg monitor.jpg"
                alt="ECG monitoring equipment"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="tdsa-ecg-photo"
              />
            </div>
            <div className="tdsa-ecg-photo-caption">
              <span>Continuous monitoring</span>
              <strong>ECG247 workflow</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="tdsa-final-cta" aria-labelledby="conversion-title">
        <div className="tdsa-section-shell">
          <div className="tdsa-cta-card">
            <span className="tdsa-eyebrow">Immediate practice onboarding</span>
            <h2 id="conversion-title">
              Start Modernizing Your Care Delivery in Under 5 Minutes.
            </h2>
            <p>
              Join doctors and nurses across South Africa who are actively
              utilizing TeleDoctorSA to deliver continuous, patient-centered care.
            </p>
            <div className="tdsa-cta-actions">
              <Link
                href="/for-clinicians/register"
                className="tdsa-solid-link tdsa-solid-link-light"
              >
                Register Your Practice Now
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
