import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileHeart, ShieldCheck, Video } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import "../site-pages.css";

export const metadata: Metadata = {
  title: "Virtual Care",
  description: "Secure virtual consultations and connected follow-up workflows for healthcare practices using TeleDoctorSA.",
};

const features = [
  { icon: Video, title: "Secure Virtual Consultations", copy: "Conduct remote consultations and follow-ups from desktop or tablet." },
  { icon: FileHeart, title: "Connected Clinical Context", copy: "Keep virtual encounters linked to the patient record and follow-up plan." },
  { icon: ShieldCheck, title: "Privacy-Conscious Workflows", copy: "Structure virtual care around responsible access and South African privacy expectations." },
];

export default function VirtualCarePage() {
  return (
    <>
      <Header />
      <main className="info-page">
        <section className="info-hero info-hero-premium info-hero--virtual">
          <div className="info-shell info-hero-grid">
            <div>
              <span className="info-eyebrow">Virtual Care</span>
              <h1>Remote consultations that stay connected to the rest of the patient journey.</h1>
              <div className="info-hero-actions">
                <Link href="/demo" className="info-primary">Book a Virtual Care Demo <ArrowRight size={17} /></Link>
                <Link href="/services" className="info-secondary">View All Services</Link>
              </div>
              <div className="info-hero-signals" aria-label="Virtual care workflow">
                <div><strong>Consult</strong><span>Remote clinical encounters</span></div>
                <div><strong>Document</strong><span>Connected patient context</span></div>
                <div><strong>Follow up</strong><span>Clear next-step workflows</span></div>
              </div>
            </div>
            <div className="info-hero-media">
              <Image src="/images/home/hero-clinician.png" alt="Clinician using TeleDoctorSA for a connected virtual consultation" fill priority sizes="(max-width: 900px) 100vw, 42vw" quality={92} />
              <div className="info-hero-media-label"><span>Virtual consultation</span><strong>Clinical context stays connected</strong></div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="info-shell">
            <div className="info-heading">
              <div><span className="info-eyebrow">Connected consultation</span><h2>More than a video call.</h2></div>
              <p>The virtual encounter can sit alongside patient records, diagnostics and monitoring rather than becoming another disconnected digital tool.</p>
            </div>
            <div className="info-grid-3">
              {features.map(({ icon: Icon, title, copy }) => (
                <article className="info-cell" key={title}><Icon size={25} strokeWidth={1.7} /><h3>{title}</h3><p>{copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="info-section info-section-dark">
          <div className="info-shell info-heading info-heading-dark">
            <div><span className="info-eyebrow">Practice ready</span><h2>Designed around real clinical workflows.</h2></div>
            <p>Use virtual care for follow-up, review and appropriate remote encounters while keeping escalation and in-person care pathways clear.</p>
          </div>
        </section>

        <section className="info-band">
          <div className="info-shell info-band-grid">
            <div><h2>Bring virtual care into your practice workflow.</h2><p>See how TeleDoctorSA can be configured around your clinicians and patients.</p></div>
            <Link href="/demo" className="info-primary">Book a Demo <ArrowRight size={17} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
