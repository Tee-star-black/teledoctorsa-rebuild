import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  HeartPulse,
  MonitorSmartphone,
  Stethoscope,
  UsersRound,
} from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { RegistrationForm } from "@/components/onboarding/registration-form";

import "./register.css";

const profiles = [
  {
    icon: Stethoscope,
    title: "Doctors & Specialists",
    items: [
      "Instant Portal Registration",
      "Full Diagnostic EHR Access",
      "Virtual Consult Tools",
    ],
    cta: "Create Doctor Account",
  },
  {
    icon: UsersRound,
    title: "Nurses & Clinical Teams",
    items: [
      "73 Health Integration",
      "Patient Vitals Triage",
      "Digital Care Training",
    ],
    cta: "Create Nurse Account",
  },
  {
    icon: MonitorSmartphone,
    title: "Practice Managers",
    items: [
      "Bulk ECG247 Ordering",
      "Custom Platform Demos",
      "Billing & Supply Accounts",
    ],
    cta: "Request Practice Setup",
  },
];

const steps = [
  {
    number: "01",
    title: "Verification (1-2 Minutes)",
    copy:
      "Submit your basic practice details and HPCSA / SANC registration for instant identity verification.",
    icon: BadgeCheck,
  },
  {
    number: "02",
    title: "Setup Your Dashboard",
    copy:
      "Access your personalized clinician portal, customize consultation availability, or order diagnostic hardware.",
    icon: MonitorSmartphone,
  },
  {
    number: "03",
    title: "Start Managing Patients",
    copy:
      "Begin scheduling remote consults, prescribing ECG247 sensors, and reviewing live telemetry data immediately.",
    icon: ClipboardCheck,
  },
];

export default function ClinicianRegistrationPage() {
  return (
    <>
      <Header />

      <main className="register-page">
        <section className="register-hero">
          <div className="register-shell register-hero-grid">
            <div>
              <span className="register-eyebrow">Clinician onboarding</span>
              <h1>Onboard Your Practice to TeleDoctorSA</h1>
              <p>
                Choose your profile below to gain instant access to our clinician
                portal, secure EHR network, and remote telemetry suite.
              </p>

              <Link href="#profiles" className="register-primary-link">
                Choose Your Profile
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="register-hero-signal" aria-hidden="true">
              <HeartPulse size={34} />
              <strong>72</strong>
              <span>BPM</span>
              <svg viewBox="0 0 420 90" preserveAspectRatio="none">
                <path d="M0 45 H55 L75 45 L90 25 L105 65 L126 8 L148 72 L168 45 H250 L270 45 L286 28 L302 62 L324 12 L346 68 L366 45 H420" />
              </svg>
            </div>
          </div>
        </section>

        <section className="profile-section" id="profiles" aria-labelledby="profiles-title">
          <div className="register-shell">
            <div className="register-section-heading">
              <span className="register-eyebrow">Profile selection</span>
              <h2 id="profiles-title">Choose Your Onboarding Pathway</h2>
            </div>

            <div className="profile-grid">
              {profiles.map(({ icon: Icon, title, items, cta }) => (
                <article className="profile-column" key={title}>
                  <Icon size={26} strokeWidth={1.7} />
                  <h3>{title}</h3>
                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link href="#register">
                    {cta}
                    <ArrowRight size={17} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="integration-section" aria-labelledby="integration-title">
          <div className="register-shell">
            <div className="register-section-heading">
              <span className="register-eyebrow">Simple 3-step integration</span>
              <h2 id="integration-title">From verification to managing patients.</h2>
            </div>

            <div className="integration-grid">
              {steps.map(({ number, title, copy, icon: Icon }) => (
                <article key={number} className="integration-step">
                  <span>{number}</span>
                  <Icon size={23} strokeWidth={1.7} />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="registration-section"
          id="register"
          aria-labelledby="registration-title"
        >
          <div className="register-shell registration-grid">
            <div>
              <span className="register-eyebrow">Practice sign-up form</span>
              <h2 id="registration-title">Register for Immediate Portal Access</h2>
              <p>
                Enter your core practice and professional details to begin your
                TeleDoctorSA onboarding workflow.
              </p>
            </div>

            <RegistrationForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
