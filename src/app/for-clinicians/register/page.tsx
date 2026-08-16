import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  HeartPulse,
  MonitorSmartphone,
  Stethoscope,
  UsersRound,
} from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import "./register.css";

const profiles = [
  {
    icon: Stethoscope,
    title: "Doctors & Specialists",
    items: [
      "Clinical workflow design",
      "EHR and consultation setup",
      "Specialty-specific configuration",
    ],
    cta: "Book a Doctor Workflow Demo",
  },
  {
    icon: UsersRound,
    title: "Nurses & Clinical Teams",
    items: [
      "Care-team workflow design",
      "Vitals and follow-up configuration",
      "Role-based clinical access",
    ],
    cta: "Book a Care Team Demo",
  },
  {
    icon: MonitorSmartphone,
    title: "Practice Managers",
    items: [
      "Practice workflow mapping",
      "Platform configuration",
      "Implementation planning",
    ],
    cta: "Book a Practice Demo",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand Your Practice",
    copy:
      "We start with a focused demo and discovery session to understand your clinical workflows, team structure, and priorities.",
    icon: Stethoscope,
  },
  {
    number: "02",
    title: "Configure Around Your Needs",
    copy:
      "We shape the platform around the workflows and capabilities your practice actually needs instead of forcing a one-size-fits-all setup.",
    icon: MonitorSmartphone,
  },
  {
    number: "03",
    title: "Plan Your Rollout",
    copy:
      "Once the solution is agreed, we map the implementation, onboarding, and support required for your practice.",
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
              <span className="register-eyebrow">Practice solutions</span>
              <h1>Build TeleDoctorSA Around Your Practice</h1>
              <p>
                TeleDoctorSA is not an instant-access, one-size-fits-all portal.
                We work with your team to shape the platform around your clinical
                workflows, services, and operational needs.
              </p>

              <Link href="/contact?type=demo" className="register-primary-link">
                Book a Demo
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
              <span className="register-eyebrow">Tailored workflows</span>
              <h2 id="profiles-title">Start With the Needs of Your Team</h2>
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
                  <Link href="/contact?type=demo">
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
              <span className="register-eyebrow">How it works</span>
              <h2 id="integration-title">From demo to a solution built around your practice.</h2>
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
              <span className="register-eyebrow">Built for your workflow</span>
              <h2 id="registration-title">See What TeleDoctorSA Could Look Like for Your Practice</h2>
              <p>
                Book a demo and walk us through how your team works. We can then
                show you how the platform can be configured around your needs and
                what an implementation could involve.
              </p>
            </div>

            <div className="registration-success">
              <HeartPulse size={28} />
              <div>
                <strong>Start with a conversation, not an instant sign-up.</strong>
                <p>
                  We will use the demo to understand your priorities and discuss
                  the most suitable TeleDoctorSA setup for your practice.
                </p>
                <Link href="/contact?type=demo" className="register-primary-link">
                  Book a Demo
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
