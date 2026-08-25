import Link from "next/link";
import { HeartPulse } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-main">
          <div className="footer-brand-column">
            <Link href="/" className="brand" aria-label="TeleDoctorSA home">
              <span className="brand-icon">
                <HeartPulse size={22} strokeWidth={2} />
              </span>

              <span className="brand-copy">
                <strong>TeleDoctorSA</strong>
                <small>Connected Care</small>
              </span>
            </Link>

            <p>
              Connected healthcare technology that links consultations,
              monitoring, diagnostics and longitudinal clinical records.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <strong>Services</strong>

              <Link href="/services">All Services</Link>
              <Link href="/services/virtual-care">Virtual Consultations</Link>
              <Link href="/services/remote-monitoring">Remote Monitoring</Link>
              <Link href="/services/practice-solutions">Practice Solutions</Link>
            </div>

            <div>
              <strong>Products</strong>

              <Link href="/ehr">EHR</Link>
              <Link href="/app">TeleDoctorSA App</Link>
              <Link href="/ecg247">ECG247</Link>
              <Link href="/demo">Book a Demo</Link>
            </div>

            <div>
              <strong>Company</strong>

              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/legal">Legal</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} TeleDoctorSA. All rights reserved.</span>
          <span>South Africa</span>
        </div>
      </div>
    </footer>
  );
}
