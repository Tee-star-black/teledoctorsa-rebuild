"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Activity, ArrowRight, Menu, X } from "lucide-react";

import styles from "./header.module.css";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "EHR", href: "/ehr" },
  { label: "App", href: "/app" },
  { label: "ECG247", href: "/ecg247" },
  { label: "About", href: "/about" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

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
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
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
