import Link from "next/link";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

const policies = [
  {
    href: "/privacy",
    title: "Privacy Policy",
    copy: "How personal information is handled, protected and accessed.",
  },
  {
    href: "/cookies",
    title: "Cookie Policy",
    copy: "How browser storage and consent preferences are managed.",
  },
  {
    href: "/terms",
    title: "Terms of Service",
    copy: "The terms that govern use of this website and general service information.",
  },
  {
    href: "/disclaimer",
    title: "Medical and Website Disclaimer",
    copy: "Important limitations, including the emergency-care disclaimer.",
  },
];

export default function LegalPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="legal-shell">
          <span className="legal-eyebrow">Legal and compliance</span>
          <h1>Legal Information</h1>
          <p className="legal-summary">
            These notices explain how the TeleDoctorSA website should be used, how
            personal information is handled, and the limits of general website and
            medical information.
          </p>

          <p className="legal-alert">
            This website is not an emergency medical service. For a medical emergency,
            contact your local emergency service or go to the nearest appropriate
            emergency department.
          </p>

          <div className="legal-content">
            {policies.map((policy) => (
              <section key={policy.href}>
                <h2>{policy.title}</h2>
                <p>{policy.copy}</p>
                <p>
                  <Link href={policy.href}>Read {policy.title}</Link>
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
