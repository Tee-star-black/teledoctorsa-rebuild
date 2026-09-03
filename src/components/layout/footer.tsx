import Image from "next/image";
import Link from "next/link";

import styles from "./footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.shell}>
        <div className={styles.topGrid}>
          <div className={styles.column}>
            <span className={styles.label}>Navigation</span>
            <div className={styles.linkList}>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div className={styles.column}>
            <span className={styles.label}>Platform</span>
            <div className={styles.linkList}>
              <Link href="/ehr">Electronic Health Record</Link>
              <Link href="/app">Patient App</Link>
              <Link href="/ecg247">ECG247</Link>
              <Link href="/remote-monitoring">Remote Monitoring</Link>
              <Link href="/virtual-care">Virtual Care</Link>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.metaBlock}>
              <span className={styles.label}>Work with us</span>
              <Link href="/for-clinicians/register" className={styles.smallLink}>
                Clinician onboarding
              </Link>
            </div>

            <div className={styles.metaBlock}>
              <span className={styles.label}>Location</span>
              <p className={styles.metaText}>
                South Africa
                <br />
                Connected care for modern medical practices.
              </p>
            </div>

            <div className={styles.metaBlock}>
              <span className={styles.label}>Start a conversation</span>
              <Link href="/contact?type=demo" className={styles.smallLink}>
                Book a demo
              </Link>
            </div>
          </div>

          <div className={styles.column}>
            <span className={styles.label}>Technology</span>
            <div className={styles.trustWrap}>
              <Image
                src="/images/home/GCP.png"
                alt="Google Cloud"
                width={284}
                height={90}
                className={styles.googleMark}
              />
              <p className={styles.trustNote}>
                Built with cloud infrastructure supporting secure, scalable connected-care workflows.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.utilityRow}>
          <span className={styles.copyright}>© 2009–{year} TeleDoctorSA</span>
          <div className={styles.legalLinks}>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/legal">Legal</Link>
            <Link href="/disclaimer">Medical Disclaimer</Link>
          </div>
        </div>

        <div className={styles.emergency} role="note" aria-label="Emergency care disclaimer">
          <strong>Not for emergencies.</strong>
          <span>
            This website is not an emergency medical service. If you are experiencing a medical emergency,
            contact your local emergency service or go to the nearest appropriate emergency department.
          </span>
        </div>

        <div className={styles.brandStage} aria-hidden="true">
          <div className={styles.brandWordmark}>
            <Image
              src="/images/home/logo.png"
              alt=""
              width={220}
              height={220}
              className={styles.brandSymbol}
            />
            <span className={styles.brandText}>TeleDoctorSA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
