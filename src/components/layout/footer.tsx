import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-main">
          <div className="footer-brand-column">
            <Link href="/" className="brand" aria-label="TeleDoctorSA home">
              <Image
                src="/images/home/logo.png"
                alt="TeleDoctorSA"
                width={300}
                height={96}
                style={{
                  width: "150px",
                  height: "48px",
                  objectFit: "contain",
                  objectPosition: "left center",
                }}
              />
            </Link>

            <p>
              Connected healthcare technology designed to help clinicians extend
              care beyond the consultation.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <strong>Platform</strong>
              <Link href="/services">Services</Link>
              <Link href="/ehr">EHR</Link>
              <Link href="/app">Patient App</Link>
              <Link href="/ecg247">ECG247</Link>
            </div>

            <div>
              <strong>Care</strong>
              <Link href="/remote-monitoring">Remote Monitoring</Link>
              <Link href="/for-clinicians/register">Practice Solutions</Link>
              <Link href="/contact?type=demo">Book a Demo</Link>
            </div>

            <div>
              <strong>Legal</strong>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/cookies">Cookie Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/disclaimer">Medical Disclaimer</Link>
              <Link href="/legal">Legal Information</Link>
            </div>
          </div>
        </div>

        <div className="footer-emergency" role="note" aria-label="Emergency care disclaimer">
          <strong>Not for emergencies.</strong>
          <span>
            This website is not an emergency medical service. If you are experiencing
            a medical emergency, contact your local emergency service or go to the
            nearest appropriate emergency department.
          </span>
        </div>

        <div className="footer-bottom">
          <span>© {year} TeleDoctorSA. All rights reserved.</span>
          <span>
            <Link href="/about">About</Link> · <Link href="/contact">Contact</Link> · South Africa
          </span>
        </div>
      </div>
    </footer>
  );
}
