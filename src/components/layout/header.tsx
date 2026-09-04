"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
import polish from "./header-polish.module.css";
import mobile from "./mobile-menu.module.css";

const navigation = [
  { label: "EHR", href: "/ehr" },
  { label: "App", href: "/app" },
  { label: "ECG247", href: "/ecg247" },
  { label: "About", href: "/about" },
];

const serviceLinks = [
  { icon: MonitorSmartphone, title: "Virtual Consultations", copy: "Remote consultations and connected follow-up care.", href: "/virtual-care", tag: "Virtual care" },
  { icon: HeartPulse, title: "ECG247 Monitoring", copy: "Extended ambulatory rhythm monitoring and review.", href: "/ecg247", tag: "Diagnostics" },
  { icon: Activity, title: "Remote Patient Monitoring", copy: "Track vitals, symptoms and trends between visits.", href: "/remote-monitoring", tag: "Monitoring" },
  { icon: FileHeart, title: "Electronic Health Records", copy: "Longitudinal records shared across connected workflows.", href: "/ehr", tag: "Clinical record" },
  { icon: Stethoscope, title: "Practice Solutions", copy: "Configure TeleDoctorSA around your practice workflows and needs.", href: "/for-clinicians/register", tag: "For practices" },
];

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 42);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setOpen(false);
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const servicesActive = serviceLinks.some((service) => isActive(service.href));

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${isHome ? polish.homeHeader : polish.innerHeader} ${scrolled ? polish.integratedScrolled : polish.integratedTop}`}
    >
      <div className={`${styles.shell} ${polish.invisibleShell}`}>
        <Link href="/" className={`${styles.brand} ${polish.brandAnchor}`} aria-label="TeleDoctorSA home">
          <Image src="/images/home/logo.png" alt="TeleDoctorSA" width={264} height={84} priority className={polish.brandLogo} />
          <span className={polish.brandLogoLight} aria-hidden="true" />
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <div className={styles.servicesNavItem} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button
              type="button"
              className={`${styles.navLink} ${styles.servicesTrigger} ${polish.cleanNavLink} ${servicesActive ? polish.cleanActive : ""}`}
              aria-expanded={servicesOpen}
              aria-controls="services-mega-menu"
              onClick={() => setServicesOpen((current) => !current)}
              onFocus={() => setServicesOpen(true)}
            >
              <span className={styles.navLabel}>Services</span>
              <ChevronDown size={14} className={servicesOpen ? styles.chevronOpen : undefined} aria-hidden="true" />
            </button>

            <AnimatePresence>
              {servicesOpen ? (
                <motion.div
                  id="services-mega-menu"
                  className={`${styles.servicesMegaMenu} ${polish.megaMenu}`}
                  initial={{ opacity: 0, y: 8, scale: 0.992 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.992 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <div className={`${styles.megaFeature} ${polish.megaFeaturePanel}`}>
                    <div className={polish.megaLogoWrap} aria-label="TeleDoctorSA">
                      <Image src="/images/home/logo.png" alt="TeleDoctorSA" width={304} height={96} className={polish.megaLogoSource} />
                      <span className={polish.megaLogoLight} aria-hidden="true" />
                    </div>
                    <span className={styles.megaEyebrow}>Connected care platform</span>
                    <h3>Clinical workflows shaped around your practice.</h3>
                    <p>Explore the services that connect patients, clinicians, diagnostics and records, then book a demo to discuss the configuration your team needs.</p>
                    <Link href="/demo" className={`${styles.megaFeatureLink} ${polish.megaFeatureLinkPolish}`}>
                      Book a demo <ArrowRight size={16} />
                    </Link>
                  </div>

                  <div className={`${styles.megaServices} ${polish.megaServicesPanel}`}>
                    <div className={styles.megaServicesHeader}><span>Explore services</span><small>Hover to explore</small></div>
                    <div className={`${styles.megaServicesGrid} ${polish.megaGrid}`}>
                      {serviceLinks.map(({ icon: Icon, title, copy, href, tag }) => (
                        <Link key={title} href={href} className={`${styles.megaServiceItem} ${polish.megaItem} ${isActive(href) ? styles.megaServiceItemActive : ""}`}>
                          <span className={`${styles.megaServiceIcon} ${polish.megaIcon}`} aria-hidden="true"><Icon size={20} strokeWidth={1.7} /></span>
                          <span className={styles.megaServiceCopy}><small>{tag}</small><strong>{title}</strong><span>{copy}</span></span>
                          <ArrowRight size={16} className={polish.megaArrow} aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {navigation.map((item) => {
            const active = isActive(item.href);
            return (
              <Link key={item.href} href={item.href} className={`${styles.navLink} ${polish.cleanNavLink} ${active ? polish.cleanActive : ""}`} aria-current={active ? "page" : undefined}>
                <span className={styles.navLabel}>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <Link href="/contact" className={`${styles.contactLink} ${polish.cleanContact} ${isActive("/contact") ? polish.cleanActive : ""}`}>Contact</Link>
          <Link href="/demo" className={`${styles.cta} ${polish.cleanCta} ${isActive("/demo") ? polish.cleanActive : ""}`}>
            Book a Demo <ArrowRight size={16} />
          </Link>
        </div>

        <button type="button" className={styles.menuButton} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((current) => !current)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-navigation"
            className={`${styles.mobilePanel} ${mobile.panel}`}
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={mobile.inner}>
              <div className={mobile.intro}>
                <div>
                  <div className={`${styles.mobileMeta} ${mobile.meta}`}><span />TeleDoctorSA / Navigation</div>
                  <p className={mobile.context}>Connected clinical technology for modern medical practices.</p>
                </div>
                <span className={mobile.location}>South Africa</span>
              </div>

              <nav className={mobile.navStack} aria-label="Mobile navigation">
                <button
                  type="button"
                  data-index="01"
                  className={`${styles.mobileLink} ${styles.mobileServicesTrigger} ${mobile.servicesTrigger} ${servicesActive ? mobile.active : ""}`}
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services"
                  onClick={() => setMobileServicesOpen((current) => !current)}
                >
                  Services <ChevronDown size={16} className={mobileServicesOpen ? styles.chevronOpen : undefined} aria-hidden="true" />
                </button>

                <AnimatePresence initial={false}>
                  {mobileServicesOpen ? (
                    <motion.div
                      id="mobile-services"
                      className={`${styles.mobileServices} ${mobile.services}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {serviceLinks.map(({ icon: Icon, title, href, tag }) => (
                        <Link key={title} href={href} className={`${styles.mobileServiceLink} ${mobile.serviceLink} ${isActive(href) ? styles.mobileServiceLinkActive : ""}`}>
                          <span className={mobile.serviceIcon} aria-hidden="true"><Icon size={16} strokeWidth={1.7} /></span>
                          <span className={mobile.serviceCopy}><small>{tag}</small><strong>{title}</strong></span>
                          <ArrowRight size={14} className={mobile.serviceArrow} />
                        </Link>
                      ))}
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                {navigation.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    data-index={String(index + 2).padStart(2, "0")}
                    className={`${styles.mobileLink} ${mobile.link} ${isActive(item.href) ? mobile.active : ""}`}
                  >
                    {item.label}
                  </Link>
                ))}

                <Link href="/contact" data-index="06" className={`${styles.mobileLink} ${mobile.link} ${isActive("/contact") ? mobile.active : ""}`}>Contact</Link>
              </nav>

              <div className={mobile.bottom}>
                <Link href="/demo" className={`${styles.mobileCta} ${mobile.cta}`}>
                  <span>Book a private platform demo</span>
                  <ArrowRight size={18} />
                </Link>
                <div className={mobile.footerMeta}>
                  <span>Connected care</span>
                  <span>Clinical technology</span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
