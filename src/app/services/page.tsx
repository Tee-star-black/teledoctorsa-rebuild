import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  FileHeart,
  HeartPulse,
  MonitorSmartphone,
  Stethoscope,
} from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Healthcare Services",
  description:
    "Explore TeleDoctorSA virtual consultations, ECG247 monitoring, remote patient monitoring, electronic health records and connected practice solutions.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    eyebrow: "Virtual care",
    title: "Virtual Consultations",
    description: "Remote consultations and connected follow-up care.",
    href: "/services/virtual-care",
    icon: MonitorSmartphone,
  },
  {
    eyebrow: "Diagnostics",
    title: "ECG247 Monitoring",
    description: "Extended ambulatory rhythm monitoring and clinical review.",
    href: "/ecg247",
    icon: HeartPulse,
  },
  {
    eyebrow: "Monitoring",
    title: "Remote Patient Monitoring",
    description: "Track vitals, symptoms and clinical trends between visits.",
    href: "/services/remote-monitoring",
    icon: Activity,
  },
  {
    eyebrow: "Clinical record",
    title: "Electronic Health Records",
    description: "Longitudinal records shared across connected care workflows.",
    href: "/ehr",
    icon: FileHeart,
  },
  {
    eyebrow: "For practices",
    title: "Practice Solutions",
    description:
      "Configure TeleDoctorSA around your practice workflows, teams and patient needs.",
    href: "/services/practice-solutions",
    icon: Stethoscope,
    wide: true,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Connected care platform</p>
            <h1>Clinical workflows shaped around your practice.</h1>
            <p className={styles.intro}>
              Explore the services that connect patients, clinicians,
              diagnostics and records, then choose the configuration that fits
              how your team actually delivers care.
            </p>
          </div>
        </section>

        <section className={styles.explorer}>
          <div className={styles.explorerShell}>
            <aside className={styles.storyPanel}>
              <div>
                <span className={styles.storyMarker} />
                <p className={styles.eyebrow}>Connected care platform</p>
                <h2>One care environment. Multiple clinical workflows.</h2>
                <p>
                  TeleDoctorSA brings virtual care, monitoring, diagnostics and
                  clinical records into one connected patient journey.
                </p>
              </div>

              <Link href="/demo" className={styles.demoLink}>
                Book a demo
                <ArrowRight size={18} />
              </Link>
            </aside>

            <div className={styles.servicesPanel}>
              <div className={styles.servicesHeading}>
                <h2>Explore services</h2>
                <span>Hover to explore</span>
              </div>

              <div className={styles.servicesGrid}>
                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <Link
                      key={service.title}
                      href={service.href}
                      className={`${styles.serviceCard} ${
                        service.wide ? styles.serviceWide : ""
                      }`}
                    >
                      <div className={styles.iconBox}>
                        <Icon size={26} strokeWidth={1.7} />
                      </div>

                      <div className={styles.serviceCopy}>
                        <span>{service.eyebrow}</span>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                      </div>

                      <ArrowRight className={styles.cardArrow} size={20} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
