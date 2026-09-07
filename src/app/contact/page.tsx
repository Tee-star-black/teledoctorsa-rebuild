import type { Metadata } from "next";
import Image from "next/image";
import {
  Activity,
  Clock3,
  HeartPulse,
  Mail,
  MessageCircleMore,
  Stethoscope,
  UsersRound,
} from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import "./contact.css";

export const metadata: Metadata = {
  title: "Contact TeleDoctorSA",
  description: "Contact TeleDoctorSA by WhatsApp or email for virtual care, practice onboarding, ECG247 and general platform enquiries.",
  alternates: { canonical: "/contact" },
};

const whatsappNumber = "27780336394";
const emailAddress = "info@teledoctorsa.co.za";

const contactJourneys = [
  {
    icon: Stethoscope,
    label: "Virtual care enquiry",
    copy: "Ask about a virtual consultation or the next steps for accessing care.",
    message: "Hello TeleDoctorSA, I would like to enquire about virtual care. Please assist me with the next steps.",
    subject: "Virtual care enquiry",
  },
  {
    icon: UsersRound,
    label: "Practice onboarding",
    copy: "Ask about bringing your practice, clinical team or workflow onto TeleDoctorSA.",
    message: "Hello TeleDoctorSA, I would like to enquire about onboarding my practice onto the platform. Please share the next steps.",
    subject: "Practice onboarding enquiry",
  },
  {
    icon: HeartPulse,
    label: "ECG247 enquiry",
    copy: "Ask about ECG247 monitoring, hardware or clinical workflow support.",
    message: "Hello TeleDoctorSA, I would like more information about ECG247 monitoring and how to get started.",
    subject: "ECG247 enquiry",
  },
  {
    icon: Activity,
    label: "General support",
    copy: "Get help with an existing service, platform question or general TeleDoctorSA enquiry.",
    message: "Hello TeleDoctorSA, I need assistance with a TeleDoctorSA service. Please help me with my enquiry.",
    subject: "TeleDoctorSA support enquiry",
  },
];

function createWhatsAppLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function createMailtoLink(subject = "", message = "") {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (message) params.set("body", message);
  const query = params.toString();
  return `mailto:${emailAddress}${query ? `?${query}` : ""}`;
}

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="contact-page">
        <section className="contact-hero">
          <div className="contact-shell contact-hero-grid">
            <div>
              <span className="contact-eyebrow">Contact TeleDoctorSA</span>
              <h1>Start the conversation.</h1>
            </div>

            <div className="contact-hero-media">
              <Image src="/images/home/10-care-support-agent.jpg" alt="Care support professional assisting with a digital healthcare enquiry" fill priority sizes="(max-width: 900px) 100vw, 38vw" />
            </div>
          </div>
        </section>

        <section className="contact-section contact-section-light">
          <div className="contact-shell">
            <div className="contact-heading">
              <div>
                <span className="contact-eyebrow contact-eyebrow-dark">Quick contact</span>
                <h2>Choose the enquiry that best matches what you need.</h2>
              </div>
              <p>
                Each option opens a prepared message that you can review and edit before sending.
              </p>
            </div>

            <div className="contact-journey-grid">
              {contactJourneys.map(({ icon: Icon, label, copy, message, subject }) => (
                <article key={label} className="contact-journey">
                  <div className="contact-journey-top">
                    <span className="contact-journey-icon" aria-hidden="true">
                      <Icon size={24} strokeWidth={1.7} />
                    </span>
                    <div>
                      <h3>{label}</h3>
                      <p>{copy}</p>
                    </div>
                  </div>

                  <div className="contact-journey-actions">
                    <a
                      href={createWhatsAppLink(message)}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-action contact-action-whatsapp"
                    >
                      <MessageCircleMore size={18} />
                      WhatsApp
                    </a>
                    <a
                      href={createMailtoLink(subject, message)}
                      className="contact-action contact-action-email"
                    >
                      <Mail size={18} />
                      Email
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="contact-direct-strip">
              <div>
                <span>Direct WhatsApp</span>
                <strong>+27 78 033 6394</strong>
              </div>
              <div>
                <span>Email</span>
                <strong>info@teledoctorsa.co.za</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section contact-availability-section">
          <div className="contact-shell contact-availability-grid">
            <div>
              <span className="contact-eyebrow">Response &amp; support</span>
              <h2>Reach the right team with a clear starting point.</h2>
            </div>

            <div className="availability-table">
              <div>
                <span className="availability-icon"><Stethoscope size={21} /></span>
                <div>
                  <small>Clinical &amp; service enquiries</small>
                  <strong>Start by WhatsApp or email</strong>
                  <p>We will direct your enquiry to the appropriate workflow.</p>
                </div>
              </div>

              <div>
                <span className="availability-icon"><Clock3 size={21} /></span>
                <div>
                  <small>Response times</small>
                  <strong>Handled according to enquiry type</strong>
                  <p>Urgent medical concerns should be directed to the appropriate emergency service.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section contact-location-section">
          <div className="contact-shell">
            <div className="contact-location-grid">
              <div className="contact-location-copy">
                <span className="contact-eyebrow contact-eyebrow-dark">South Africa</span>
                <h2>Connected healthcare workflows for South African practices.</h2>
                <p>
                  Contact us to discuss virtual care, ECG247, remote monitoring,
                  electronic health records or practice onboarding.
                </p>
              </div>

              <div className="contact-address-panel">
                <div className="contact-address-heading">
                  <Mail size={24} />
                  <div>
                    <strong>TeleDoctorSA</strong>
                    <span>General contact</span>
                  </div>
                </div>

                <div className="contact-address-lines">
                  <a href={createMailtoLink()}>
                    <span>Email</span>
                    <strong>{emailAddress}</strong>
                  </a>
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
                    <span>WhatsApp</span>
                    <strong>+27 78 033 6394</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
