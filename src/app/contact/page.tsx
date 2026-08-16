import type { Metadata } from "next";
import {
  Activity,
  Clock3,
  HeartPulse,
  Mail,
  MapPin,
  MessageCircleMore,
  Stethoscope,
  UsersRound,
} from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import "./contact.css";

export const metadata: Metadata = {
  title: "Contact TeleDoctorSA",
  description: "Contact TeleDoctorSA through guided WhatsApp messages, email or phone for telemedicine support, consultations and general enquiries.",
};

const whatsappNumber = "27780336394";
const emailAddress = "info@teledoctorsa.co.za";

const contactJourneys = [
  {
    icon: Stethoscope,
    label: "Book a consultation",
    copy: "Start a patient enquiry or ask about booking a virtual consultation.",
    message: "Hello TeleDoctorSA, I would like to enquire about booking a virtual consultation. Please assist me with the next steps.",
    subject: "Virtual consultation enquiry",
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

function createEmailLink(subject: string, message: string) {
  return `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
}

const officeAddress = "29 Landor Street, Thulisa Park";
const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;
const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(officeAddress)}&output=embed`;

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

            <div className="contact-hero-copy">
              <p>
                No forms to fill in. Choose what you need and we&apos;ll prepare the
                message for WhatsApp or email so you can contact the right team faster.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section contact-section-light">
          <div className="contact-shell">
            <div className="contact-heading">
              <div>
                <span className="contact-eyebrow contact-eyebrow-dark">Quick contact</span>
                <h2>Tell us what you need without typing it all from scratch.</h2>
              </div>
              <p>
                Each option opens a ready-to-send message. You can edit it before
                sending, because sending mysterious robot prose on your behalf would be a rather dramatic design choice.
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
                      href={createEmailLink(subject, message)}
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
              <span className="contact-eyebrow">Availability</span>
              <h2>Care access when you need it.</h2>
            </div>

            <div className="availability-table">
              <div>
                <span className="availability-icon"><Stethoscope size={21} /></span>
                <div>
                  <small>Telemedicine Services</small>
                  <strong>Available 24/7</strong>
                  <p>Virtual consultations anytime</p>
                </div>
              </div>

              <div>
                <span className="availability-icon"><Clock3 size={21} /></span>
                <div>
                  <small>Support Team</small>
                  <strong>Monday - Sunday</strong>
                  <p>8:00 AM - 10:00 PM SAST</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section contact-location-section">
          <div className="contact-shell">
            <div className="contact-location-grid">
              <div className="contact-location-copy">
                <span className="contact-eyebrow contact-eyebrow-dark">Our Location</span>
                <h2>South African healthcare, available nationwide.</h2>
                <p>
                  While our telemedicine services are available nationwide, our
                  administrative office is based at 29 Landor Street, Thulisa Park.
                  We serve patients across all provinces through our digital healthcare platform.
                </p>
              </div>

              <div className="contact-address-panel">
                <div className="contact-address-heading">
                  <MapPin size={24} />
                  <div>
                    <strong>TeleDoctorSA</strong>
                    <span>Dr. Mukudu &amp; Partners</span>
                  </div>
                </div>

                <div className="contact-address-lines">
                  <a href={mapsSearchUrl} target="_blank" rel="noreferrer">
                    <span>Address</span>
                    <strong>{officeAddress}</strong>
                  </a>
                  <a href={`mailto:${emailAddress}`}>
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

            <div className="contact-map-wrap">
              <iframe
                src={mapsEmbedUrl}
                title="TeleDoctorSA office location at 29 Landor Street, Thulisa Park"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a href={mapsSearchUrl} target="_blank" rel="noreferrer" className="contact-map-link">
                Open in Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
