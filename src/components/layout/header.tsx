"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  ChevronDown,
  FileHeart,
  HeartPulse,
  Menu,
  MonitorSmartphone,
  Stethoscope,
  X,
} from "lucide-react";

import styles from "./header.module.css";

const navigation = [
  { label: "EHR", href: "/ehr" },
  { label: "App", href: "/app" },
  { label: "ECG247", href: "/ecg247" },
  { label: "About", href: "/about" },
];

const serviceLinks = [
  {
    icon: MonitorSmartphone,
    title: "Virtual Consultations",
    copy: "Remote consultations and follow-up care.",
    href: "/virtual-care",
  },
  {
    icon: HeartPulse,
    title: "ECG247 Monitoring",
    copy: "Extended ambulatory rhythm monitoring.",
    href: "/ecg247",
  },
  {
    icon: Activity,
    title: "Remote Patient Monitoring",
    copy: "Track vitals, symptoms and trends remotely.",
    href: "/remote-monitoring",
  },
  {
    icon: FileHeart,
    title: "Electronic Health Records",
    copy: "Connected longitudinal patient records.",
    href: "/ehr",
  },
  {
    icon: Stethoscope,
    title: "Practice Onboarding",
    copy: "Bring your clinical team onto TeleDoctorSA.",
    href: "/for-clinicians/register",
  },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const servicesActive = serviceLinks.some((service) => isActive(service.href));

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.shell}>
        <Link href="/" className={styles.brand} aria-label="TeleDoctorSA home">
          <span className={styles.brandMark} aria-hidden="true">
            <Activity size={20} strokeWidth={1.9} />
          </span>
          <span className={styles.brandCopy}>
            <strong>TeleDoctorSA</strong>
            <small>Connected Care</small>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <div className={styles.servicesNavItem}>
            <button
              type="button"
              className={`${styles.navLink} ${styles.servicesTrigger} ${servicesActive ? styles.active : ""}`}
              aria-expanded={servicesOpen}
              aria-controls="services-dropdown"
              onClick={() => setServicesOpen((current) => !current)}
            >
              {servicesActive ? (
                <motion.span
                  className={styles.activePill}
                  layoutId="nav-active-pill"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              ) : null}
              <span className={styles.navLabel}>Services</span>
              <ChevronDown
                size={14}
                className={servicesOpen ? styles.chevronOpen : undefined}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence>
              {servicesOpen ? (
                <motion.div
                  id="services-dropdown"
                  className={styles.servicesDropdown}
                  initial={{ opacity: 0, y: 8, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.985 }}
                  transition={{ duration: 0.18 }}
                >
                  <div className={styles.servicesDropdownIntro}>
                    <span>Connected care services</span>
                    <strong>Choose a clinical workflow</strong>
                  </div>

                  <div className={styles.servicesDropdownGrid}>
                    {serviceLinks.map(({ icon: Icon, title, copy, href }) => (
                      <Link
                        key={title}
                        href={href}
                        className={`${styles.serviceOption} ${isActive(href) ? styles.serviceOptionActive : ""}`}
                      >
                        <span className={styles.serviceOptionIcon} aria-hidden="true">
                          <Icon size={19} strokeWidth={1.7} />
                        </span>
                        <span>
                          <strong>{title}</strong>
                          <small>{copy}</small>
                        </span>
                        <ArrowRight size={15} aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${active ? styles.active : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {active ? (
                  <motion.span
                    className={styles.activePill}
                    layoutId="nav-active-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}
                <span className={styles.navLabel}>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <Link
            href="/contact"
            className={`${styles.contactLink} ${isActive("/contact") ? styles.contactActive : ""}`}
          >
            Contact
          </Link>
          <Link href="/for-clinicians/register" className={styles.cta}>
            Register Practice
            <ArrowRight size={16} />
          </Link>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-navigation"
            className={styles.mobilePanel}
            initial={{ opacity: 0, y: -10, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.985 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.mobileMeta}>
              <span />
              Clinical navigation
            </div>

            <button
              type="button"
              className={`${styles.mobileLink} ${styles.mobileServicesTrigger} ${servicesActive ? styles.mobileLinkActive : ""}`}
              aria-expanded={mobileServicesOpen}
              aria-controls="mobile-services"
              onClick={() => setMobileServicesOpen((current) => !current)}
            >
              Services
              <ChevronDown
                size={16}
                className={mobileServicesOpen ? styles.chevronOpen : undefined}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence initial={false}>
              {mobileServicesOpen ? (
                <motion.div
                  id="mobile-services"
                  className={styles.mobileServices}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {serviceLinks.map(({ title, href }) => (
                    <Link
                      key={title}
                      href={href}
                      className={`${styles.mobileServiceLink} ${isActive(href) ? styles.mobileServiceLinkActive : ""}`}
                    >
                      {title}
                      <ArrowRight size={14} />
                    </Link>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>

            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.mobileLink} ${isActive(item.href) ? styles.mobileLinkActive : ""}`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className={`${styles.mobileLink} ${isActive("/contact") ? styles.mobileLinkActive : ""}`}
            >
              Contact
            </Link>

            <Link href="/for-clinicians/register" className={styles.mobileCta}>
              Register Practice
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
