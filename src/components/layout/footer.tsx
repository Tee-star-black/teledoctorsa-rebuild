import Link from "next/link";
import { HeartPulse } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-main">
          <div className="footer-brand-column">
            <Link href="/" className="brand">
              <span className="brand-icon">
                <HeartPulse size={22} strokeWidth={2} />
              </span>

              <span className="brand-copy">
                <strong>TeleDoctorSA</strong>
                <small>Connected Care</small>
              </span>
            </Link>

            <p>
              Connected healthcare technology designed to help
              clinicians extend care beyond the consultation.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <strong>Platform</strong>

              <Link href="/platform">
                Connected Care
              </Link>

              <Link href="/ecg247">
                ECG247
              </Link>

              <Link href="/remote-monitoring">
                Remote Monitoring
              </Link>

              <Link href="/health-records">
                Health Records
              </Link>
            </div>

            <div>
              <strong>Professionals</strong>

              <Link href="/professionals">
                Healthcare Professionals
              </Link>

              <Link href="/organisations">
                Organisations
              </Link>

              <Link href="/contact?type=demo">
                Book a Demo
              </Link>
            </div>

            <div>
              <strong>Company</strong>

              <Link href="/about">
                About
              </Link>

              <Link href="/contact">
                Contact
              </Link>

              <Link href="/privacy">
                Privacy
              </Link>

              <Link href="/legal">
                Legal
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} TeleDoctorSA. All rights reserved.
          </span>

          <span>
            South Africa
          </span>
        </div>
      </div>
    </footer>
  );
}