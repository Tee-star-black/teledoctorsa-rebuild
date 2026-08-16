import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BellRing,
  ClipboardCheck,
  FileHeart,
  HeartPulse,
  LineChart,
  MonitorSmartphone,
  Stethoscope,
  UsersRound,
} from "lucide-react";

import { MedicalMotionVisual } from "@/components/home/medical-motion-visual";

const careSteps = [
  {
    number: "01",
    title: "Consult",
    copy:
      "Connect patients and clinicians through secure virtual care when an in-person visit is not required.",
  },
  {
    number: "02",
    title: "Assess",
    copy:
      "Bring diagnostics, ECG insight and patient context into the same clinical conversation.",
  },
  {
    number: "03",
    title: "Monitor",
    copy:
      "Follow relevant measurements and symptoms over time instead of relying on isolated snapshots.",
  },
  {
    number: "04",
    title: "Follow up",
    copy:
      "Give care teams the longitudinal context they need to decide who needs attention next.",
  },
];

const capabilities = [
  {
    icon: MonitorSmartphone,
    title: "Virtual care",
    copy:
      "Support remote consultations and follow-up without separating the encounter from the rest of the patient's care journey.",
  },
  {
    icon: HeartPulse,
    title: "ECG247",
    copy:
      "Extend cardiac assessment with connected ECG data designed to support review, follow-up and clinical context.",
  },
  {
    icon: Activity,
    title: "Remote monitoring",
    copy:
      "Track relevant health measurements and changes between consultations so deterioration is easier to recognise.",
  },
  {
    icon: FileHeart,
    title: "Longitudinal records",
    copy:
      "Keep care history, measurements and key clinical information connected across the patient's journey.",
  },
  {
    icon: BellRing,
    title: "Clinical signals",
    copy:
      "Surface meaningful changes for review and escalation without turning every new data point into another notification.",
  },
  {
    icon: UsersRound,
    title: "Care team workflows",
    copy:
      "Help healthcare professionals coordinate patient follow-up around a shared view of current clinical context.",
  },
];

export function HomeSections() {
  return (
    <>
      {/* =====================================
          INTRO
      ====================================== */}

      <section
        className="tdsa-intro"
        aria-labelledby="tdsa-intro-title"
      >
        <div className="tdsa-section-shell tdsa-intro-grid">
          <div className="tdsa-section-kicker">
            <span>02</span>
            The connected care layer
          </div>

          <div className="tdsa-intro-copy">
            <h2 id="tdsa-intro-title">
              Healthcare should not lose context the moment a
              consultation ends.
            </h2>

            <p>
              TeleDoctorSA connects virtual care, diagnostics,
              remote monitoring and patient information around
              one continuous care journey, giving healthcare
              professionals a clearer view of what happens
              between appointments.
            </p>

            <Link
              href="/platform"
              className="tdsa-text-link"
            >
              Discover the platform
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================
          CARE JOURNEY
      ====================================== */}

      <section
        className="tdsa-care-flow"
        aria-labelledby="care-flow-title"
      >
        <div className="tdsa-section-shell">
          <div className="tdsa-section-heading">
            <div>
              <span className="tdsa-eyebrow">
                One continuous journey
              </span>

              <h2 id="care-flow-title">
                From consultation to ongoing care.
              </h2>
            </div>

            <p>
              Each interaction should add context, not create
              another isolated record for the next clinician to
              rediscover.
            </p>
          </div>

          <div className="tdsa-care-steps">
            {careSteps.map((step) => (
              <article
                key={step.number}
                className="tdsa-care-step"
              >
                <span className="tdsa-step-number">
                  {step.number}
                </span>

                <div>
                  <h3>{step.title}</h3>

                  <p>{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          PLATFORM CAPABILITIES
      ====================================== */}

      <section
        className="tdsa-capabilities"
        aria-labelledby="capabilities-title"
      >
        <div className="tdsa-section-shell">
          <div className="tdsa-section-heading tdsa-section-heading-light">
            <div>
              <span className="tdsa-eyebrow">
                Platform capabilities
              </span>

              <h2 id="capabilities-title">
                Built around the work of connected clinical
                care.
              </h2>
            </div>

            <p>
              A focused toolkit for healthcare professionals who
              need to see beyond a single appointment.
            </p>
          </div>

          <div className="tdsa-capability-grid">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="tdsa-capability-card"
                >
                  <span className="tdsa-capability-icon">
                    <Icon
                      size={21}
                      strokeWidth={1.8}
                    />
                  </span>

                  <h3>{capability.title}</h3>

                  <p>{capability.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================
          ECG247
      ====================================== */}

      <section
        className="tdsa-feature tdsa-ecg-feature"
        aria-labelledby="ecg-title"
      >
        <div className="tdsa-section-shell tdsa-feature-grid">
          <div className="tdsa-feature-copy">
            <span className="tdsa-eyebrow">
              ECG247
            </span>

            <h2 id="ecg-title">
              Cardiac insight that stays connected to the
              patient.
            </h2>

            <p>
              Bring ECG information into a broader longitudinal
              care picture so the recording is not the end of
              the story. Review relevant measurements, preserve
              context and support informed follow-up.
            </p>

            <ul className="tdsa-check-list">
              <li>
                <ClipboardCheck size={18} />

                Connected review and follow-up
              </li>

              <li>
                <LineChart size={18} />

                Trends alongside patient context
              </li>

              <li>
                <Stethoscope size={18} />

                Designed around clinical workflows
              </li>
            </ul>

            <Link
              href="/ecg247"
              className="tdsa-solid-link"
            >
              Explore ECG247
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="tdsa-feature-visual">
            <MedicalMotionVisual variant="ecg" />
          </div>
        </div>
      </section>

      {/* =====================================
          REMOTE MONITORING
      ====================================== */}

      <section
        className="tdsa-feature tdsa-monitoring-feature"
        aria-labelledby="monitoring-title"
      >
        <div className="tdsa-section-shell tdsa-feature-grid tdsa-feature-grid-reverse">
          <div className="tdsa-feature-visual">
            <MedicalMotionVisual variant="monitoring" />
          </div>

          <div className="tdsa-feature-copy">
            <span className="tdsa-eyebrow">
              Remote monitoring
            </span>

            <h2 id="monitoring-title">
              See what changes between appointments.
            </h2>

            <p>
              Longitudinal monitoring gives care teams a better
              chance to spot meaningful change, prioritise
              follow-up and understand the patient beyond the
              last recorded consultation.
            </p>

            <div className="tdsa-feature-statements">
              <div>
                <strong>Trend</strong>

                <span>
                  See measurements in context over time.
                </span>
              </div>

              <div>
                <strong>Prioritise</strong>

                <span>
                  Bring attention to patients who may need
                  review.
                </span>
              </div>

              <div>
                <strong>Continue</strong>

                <span>
                  Carry clinical context into the next
                  interaction.
                </span>
              </div>
            </div>

            <Link
              href="/remote-monitoring"
              className="tdsa-text-link"
            >
              Explore remote monitoring
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================
          CHRONIC / LONGITUDINAL CARE
      ====================================== */}

      <section
        className="tdsa-feature tdsa-chronic-feature"
        aria-labelledby="chronic-title"
      >
        <div className="tdsa-section-shell tdsa-feature-grid">
          <div className="tdsa-feature-copy">
            <span className="tdsa-eyebrow">
              Chronic care
            </span>

            <h2 id="chronic-title">
              One patient. Multiple signals. One continuous
              clinical picture.
            </h2>

            <p>
              Chronic disease management depends on more than a
              reading taken during one appointment. Connect
              measurements, symptoms, cardiac information and
              care history into a longitudinal view that helps
              clinicians understand how the patient is changing.
            </p>

            <div className="tdsa-feature-statements">
              <div>
                <strong>Observe</strong>

                <span>
                  Follow relevant measurements across days,
                  weeks and months.
                </span>
              </div>

              <div>
                <strong>Connect</strong>

                <span>
                  Keep clinical signals attached to the broader
                  patient story.
                </span>
              </div>

              <div>
                <strong>Respond</strong>

                <span>
                  Give care teams context when intervention or
                  follow-up may be required.
                </span>
              </div>
            </div>
          </div>

          <div className="tdsa-feature-visual">
            <MedicalMotionVisual variant="chronic" />
          </div>
        </div>
      </section>

      {/* =====================================
          CLINICAL SIGNALS / ALERTS
      ====================================== */}

      <section
        className="tdsa-feature tdsa-alert-feature"
        aria-labelledby="alerts-title"
      >
        <div className="tdsa-section-shell tdsa-feature-grid tdsa-feature-grid-reverse">
          <div className="tdsa-feature-visual">
            <MedicalMotionVisual variant="alerts" />
          </div>

          <div className="tdsa-feature-copy">
            <span className="tdsa-eyebrow">
              Clinical signals
            </span>

            <h2 id="alerts-title">
              Help care teams recognise what may need attention
              next.
            </h2>

            <p>
              Connected care produces a lot of information. The
              useful part is helping healthcare professionals
              identify meaningful changes and bring them into
              the right clinical workflow.
            </p>

            <ul className="tdsa-check-list">
              <li>
                <BellRing size={18} />

                Changes surfaced for review
              </li>

              <li>
                <Activity size={18} />

                Trends considered alongside recent measurements
              </li>

              <li>
                <FileHeart size={18} />

                Signals remain connected to patient history
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* =====================================
          PROFESSIONALS
      ====================================== */}

      <section
        className="tdsa-professionals"
        aria-labelledby="professionals-title"
      >
        <div className="tdsa-section-shell tdsa-professionals-grid">
          <div>
            <span className="tdsa-eyebrow">
              For healthcare professionals
            </span>

            <h2 id="professionals-title">
              Technology should reduce fragmentation, not create
              more of it.
            </h2>
          </div>

          <div>
            <p>
              TeleDoctorSA is designed to support clinicians,
              practices and healthcare organisations with
              connected tools that fit around patient care
              rather than forcing care into disconnected
              products.
            </p>

            <Link
              href="/professionals"
              className="tdsa-text-link"
            >
              For healthcare professionals
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================
          FINAL CTA
      ====================================== */}

      <section className="tdsa-final-cta">
        <div className="tdsa-section-shell">
          <div className="tdsa-cta-card">
            <span className="tdsa-eyebrow">
              See the connected care experience
            </span>

            <h2>
              Build continuity into every stage of care.
            </h2>

            <p>
              Explore how TeleDoctorSA can connect
              consultations, diagnostics, monitoring and
              follow-up around the patient.
            </p>

            <div className="tdsa-cta-actions">
              <Link
                href="/contact?type=demo"
                className="tdsa-solid-link tdsa-solid-link-light"
              >
                Book a Demo
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/platform"
                className="tdsa-outline-link"
              >
                Explore the Platform
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}