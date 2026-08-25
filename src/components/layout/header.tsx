"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  HeartPulse,
  Menu,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const navigation = [
  {
    label: "Services",
    href: "/services",
    hasMenu: true,
  },
  {
    label: "EHR",
    href: "/ehr",
  },
  {
    label: "App",
    href: "/app",
  },
  {
    label: "ECG247",
    href: "/ecg247",
  },
  {
    label: "About",
    href: "/about",
  },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="brand" aria-label="TeleDoctorSA home">
          <span className="brand-icon">
            <HeartPulse size={22} strokeWidth={2} />
          </span>

          <span className="brand-copy">
            <strong>TeleDoctorSA</strong>
            <small>Connected Care</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
              {item.hasMenu ? <ChevronDown size={14} strokeWidth={1.8} /> : null}
            </Link>
          ))}
        </nav>

        <div className="desktop-actions">
          <Link href="/contact" className="nav-contact">
            Contact
          </Link>

          <Link href="/demo" className="nav-demo">
            Book a Demo
            <ArrowRight size={16} />
          </Link>
        </div>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <Link
              href="/demo"
              className="mobile-demo-button"
              onClick={() => setOpen(false)}
            >
              Book a Demo
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
