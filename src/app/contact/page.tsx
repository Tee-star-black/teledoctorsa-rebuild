import type { Metadata } from "next";
import { Clock3, Mail, MapPin, MessageCircleMore, Phone, Stethoscope } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import "./contact.css";

export const metadata: Metadata = {
  title: "Contact TeleDoctorSA",
  description: "Contact TeleDoctorSA by WhatsApp, email or phone for telemedicine support, consultations and general enquiries.",
};

const contactMethods = [
  {
    icon: MessageCircleMore,
    label: "WhatsApp",
    copy: "Get instant responses to your queries and book consultations directly via WhatsApp.",
    href: "https://wa.me/27780336394",
    action: "Chat on WhatsApp",
  },
  {
    icon: Mail,
    label: "Email",
    copy: "Send us a detailed message and we'll respond within 24 hours.",
    href: "mailto:info@teledoctorsa.co.za",
    action: "info@teledoctorsa.co.za",
  },
  {
    icon: Phone,
    label: "Phone",
    copy: "Call us directly for urgent inquiries or to schedule appointments.",
    href: "tel:+27780336394",
    action: "+27 78 033 6394",
  },
];

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
              <h1>Get in Touch</h1>
            </div>

            <div className="contact-hero-copy">
              <p>
                We&apos;re here to help with your healthcare needs. Reach out through
                any of our convenient contact methods.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section contact-section-light">
          <div className="contact-shell">
            <div className="contact-heading">
              <div>
                <span className="contact-eyebrow contact-eyebrow-dark">How to Reach Us</span>
                <h2>Choose your preferred method of communication.</h2>
              </div>
              <p>
                Whether you need to book a consultation, ask a question or speak to
                the support team, use the channel that works best for you.
              </p>
            </div>

            <div className="contact-method-grid">
              {contactMethods.map(({ icon: Icon, label, copy, href, action }) => (
                <article key={label} className="contact-method">
                  <div className="contact-method-icon" aria-hidden="true">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>
                  <h3>{label}</h3>
                  <p>{copy}</p>
                  <a
                    href={href}
                    target={label === "WhatsApp" ? "_blank" : undefined}
                    rel={label === "WhatsApp" ? "noreferrer" : undefined}
                  >
                    {action}
                  </a>
                </article>
              ))}
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
                  <a href="mailto:info@teledoctorsa.co.za">
                    <span>Email</span>
                    <strong>info@teledoctorsa.co.za</strong>
                  </a>
                  <a href="https://wa.me/27780336394" target="_blank" rel="noreferrer">
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
