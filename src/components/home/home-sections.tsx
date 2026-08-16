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
      "See how TeleDoctorSA can be configured around consultation, monitoring, referral and review workflows.",
    cta: "Book a Practice Demo",
    href: "/contact?type=demo",
  },
  {
    icon: UsersRound,
    title: "For Nurses & Care Teams",
    copy:
      "Explore connected workflows for remote follow-up, vitals review and coordinated patient care.",
    cta: "Book a Team Demo",
    href: "/contact?type=demo",
  },
  {
    icon: MonitorSmartphone,
    title: "For Practice Managers",
    copy:
      "Discuss the platform setup, device workflows and operational configuration your practice needs.",
    cta: "Request Practice Demo",
    href: "/contact?type=demo",
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
              TeleDoctorSA brings consultation, monitoring and clinical records
              together in a connected care environment.
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

      <section className="tdsa-system-flow" aria-labelledby="system-flow-title">
        <div className="tdsa-section-shell">
          <div className="tdsa-system-flow-heading">
            <span className="tdsa-eyebrow">Connected system flow</span>
            <h2 id="system-flow-title">
              One care environment, connected from patient interaction to clinical action.
            </h2>
            <p>
              The platform is designed as a connected workflow rather than a set
              of isolated tools, with each part supporting the next step in care.
            </p>
          </div>

          <figure>
            <div className="tdsa-system-flow-visual">
              <Image
                src="/images/home/connection.png"
                alt="Diagram showing the connected TeleDoctorSA system workflow"
                fill
                sizes="(max-width: 900px) 92vw, 1080px"
                className="tdsa-system-flow-image"
              />
            </div>
            <figcaption className="tdsa-system-flow-caption">
              <span>System integration</span>
              <strong>Connected care workflow</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="tdsa-clinical-imagery" aria-labelledby="clinical-imagery-title">
        <div className="tdsa-section-shell">
          <div className="tdsa-clinical-imagery-heading">
            <span className="tdsa-eyebrow">Clinical technology in practice</span>
            <h2 id="clinical-imagery-title">
              A connected care environment, not a collection of isolated tools.
            </h2>
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
              <span className="tdsa-eyebrow">Practice pathways</span>
              <h2 id="pathways-title">See how the platform can fit your team.</h2>
            </div>
            <p>
              Book a demo around the way your clinicians, nurses and practice
              teams actually work.
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
              Explore ECG247
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="tdsa-feature-visual tdsa-ecg-photo-visual">
            <div className="tdsa-ecg-photo-frame">
              <Image
                src="/images/home/dummy ecg.png"
                alt="ECG247 rhythm monitoring interface preview"
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
            <span className="tdsa-eyebrow">Built around your practice</span>
            <h2 id="conversion-title">See how TeleDoctorSA can fit your care model.</h2>
            <p>
              Book a demo to walk us through your current workflow and discuss a
              platform configuration suited to your team and services.
            </p>
            <div className="tdsa-cta-actions">
              <Link
                href="/contact?type=demo"
                className="tdsa-solid-link tdsa-solid-link-light"
              >
                Book a Demo
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
