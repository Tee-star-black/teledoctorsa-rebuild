import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  Cloud,
  Database,
  FileHeart,
  HeartPulse,
  LockKeyhole,
  MonitorSmartphone,
  Network,
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
    href: "/demo",
  },
  {
    icon: UsersRound,
    title: "For Nurses & Care Teams",
    copy:
      "Explore connected workflows for remote follow-up, vitals review and coordinated patient care.",
    cta: "Book a Team Demo",
    href: "/demo",
  },
  {
    icon: MonitorSmartphone,
    title: "For Practice Managers",
    copy:
      "Discuss the platform setup, device workflows and operational configuration your practice needs.",
    cta: "Request Practice Demo",
    href: "/demo",
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

const infrastructure = [
  {
    icon: LockKeyhole,
    title: "Role-aware access",
    copy: "Structure access around the responsibilities of clinicians, nurses and operational teams.",
  },
  {
    icon: Database,
    title: "Connected clinical context",
    copy: "Keep consultations, monitoring activity and supporting records within one longitudinal care environment.",
  },
  {
    icon: Network,
    title: "Device-ready workflows",
    copy: "Design monitoring, ECG and follow-up pathways around the clinical tools already used by care teams.",
  },
  {
    icon: Cloud,
    title: "Modern cloud architecture",
    copy: "Build for resilient digital delivery, structured data flows and scalable clinical operations.",
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
            <div>
              <span className="tdsa-eyebrow">Clinical technology in practice</span>
              <h2 id="clinical-imagery-title">
                One clinical environment, viewed from every point of care.
              </h2>
            </div>
            <p>
              The software, diagnostics and patient-facing tools are designed to
              work as one system. The visual hierarchy here mirrors that idea:
              one primary clinical workspace supported by connected touchpoints.
            </p>
          </div>

          <div className="tdsa-clinical-showcase">
            <figure className="tdsa-clinical-primary tdsa-clinical-primary-contain">
              <Image
                src="/images/home/laptop.png"
                alt="TeleDoctorSA clinical platform displayed on a laptop"
                fill
                sizes="(max-width: 980px) 100vw, 68vw"
                quality={92}
              />
              <figcaption className="tdsa-clinical-primary-copy">
                <span>Primary clinical workspace</span>
                <strong>One operational view across the care journey.</strong>
                <p>
                  Patient information, monitoring activity and clinical follow-up
                  remain visible within the same connected environment.
                </p>
              </figcaption>
            </figure>

            <div className="tdsa-clinical-side">
              <figure className="tdsa-clinical-secondary">
                <Image
                  src="/images/home/ecg monitor.jpg"
                  alt="ECG monitoring equipment connected to the TeleDoctorSA clinical workflow"
                  fill
                  sizes="(max-width: 640px) 100vw, 32vw"
                  quality={90}
                />
                <figcaption className="tdsa-clinical-secondary-copy">
                  <span>Diagnostic layer</span>
                  <strong>ECG telemetry connected to review.</strong>
                </figcaption>
              </figure>

              <figure className="tdsa-clinical-secondary tdsa-clinical-secondary-contain">
                <Image
                  src="/images/home/phone.png"
                  alt="TeleDoctorSA patient experience displayed on a smartphone"
                  fill
                  sizes="(max-width: 640px) 100vw, 32vw"
                  quality={92}
                />
                <figcaption className="tdsa-clinical-secondary-copy">
                  <span>Patient touchpoint</span>
                  <strong>Care continuity beyond the consultation.</strong>
                </figcaption>
              </figure>

              <div className="tdsa-clinical-rail" aria-label="Connected clinical technology capabilities">
                <span className="tdsa-clinical-rail-label">System layers</span>
                <div className="tdsa-clinical-rail-grid">
                  <div>
                    <strong>Consult</strong>
                    <span>Virtual and clinical encounters</span>
                  </div>
                  <div>
                    <strong>Monitor</strong>
                    <span>ECG, vitals and remote trends</span>
                  </div>
                  <div>
                    <strong>Record</strong>
                    <span>Longitudinal patient context</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tdsa-product-proof" aria-labelledby="product-proof-title">
        <div className="tdsa-section-shell">
          <div className="tdsa-product-proof-head">
            <div>
              <span className="tdsa-eyebrow">Product, not promises</span>
              <h2 id="product-proof-title">A clinical platform that looks and behaves like infrastructure.</h2>
            </div>
            <p>
              The product experience is designed around the moments clinicians actually move through: review, consultation, monitoring and follow-up.
            </p>
          </div>

          <div className="tdsa-product-stage">
            <div className="tdsa-product-stage-main">
              <Image
                src="/images/home/platform.jpg"
                alt="TeleDoctorSA clinical platform interface"
                fill
                sizes="(max-width: 980px) 100vw, 70vw"
                quality={92}
              />
            </div>
            <div className="tdsa-product-stage-side">
              <div className="tdsa-product-detail">
                <span>Clinical review</span>
                <div><strong>Patient context stays visible.</strong><p>Records, observations and supporting clinical information remain connected to the encounter.</p></div>
              </div>
              <div className="tdsa-product-detail">
                <span>Monitoring</span>
                <div><strong>Signals are part of the workflow.</strong><p>ECG and remote measurements can sit alongside the broader patient journey rather than in a separate silo.</p></div>
              </div>
              <div className="tdsa-product-detail">
                <span>Continuity</span>
                <div><strong>Follow-up has a place to live.</strong><p>The next action, review or escalation remains tied to the clinical context that produced it.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tdsa-infrastructure" aria-labelledby="infrastructure-title">
        <div className="tdsa-section-shell">
          <div className="tdsa-infrastructure-head">
            <div>
              <span className="tdsa-eyebrow">Clinical infrastructure</span>
              <h2 id="infrastructure-title">Built to support care delivery, not just software usage.</h2>
            </div>
            <p>
              Premium health technology should disappear into the workflow. The platform architecture is shaped around access, continuity, connected devices and resilient digital operations.
            </p>
          </div>

          <div className="tdsa-infrastructure-grid">
            {infrastructure.map(({ icon: Icon, title, copy }) => (
              <article className="tdsa-infrastructure-cell" key={title}>
                <Icon size={25} strokeWidth={1.7} />
                <div>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="tdsa-infrastructure-note">
            <strong>Designed for modern South African healthcare operations.</strong>
            <span>Specific security, compliance and infrastructure claims should be confirmed against the deployed environment before publication.</span>
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
              <Link href="/demo" className="tdsa-solid-link tdsa-solid-link-light">
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
