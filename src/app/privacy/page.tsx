import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="legal-shell">
          <span className="legal-eyebrow">Legal and privacy</span>
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Effective date: 17 August 2026</p>

          <p className="legal-summary">
            TeleDoctorSA respects your privacy and handles personal information in
            accordance with applicable South African data protection law. This
            policy explains what information may be processed through this website,
            why it is processed, and the choices available to you.
          </p>

          <div className="legal-content">
            <section>
              <h2>1. Who this policy applies to</h2>
              <p>
                This policy applies to visitors to the TeleDoctorSA website and to
                people who contact us about demonstrations, practice solutions,
                support, or other services through the channels provided on this
                website.
              </p>
            </section>

            <section>
              <h2>2. Information we may process</h2>
              <p>Depending on how you interact with us, this may include:</p>
              <ul>
                <li>your name, contact details, practice or organisation details;</li>
                <li>information you choose to include in an enquiry or message;</li>
                <li>technical information such as browser, device, IP address, security and server logs;</li>
                <li>cookie or browser-storage preferences; and</li>
                <li>information necessary to arrange a demonstration or respond to support requests.</li>
              </ul>
              <p>
                Please do not submit patient medical information through general
                website contact channels unless we have specifically provided an
                authorised and secure workflow for that purpose.
              </p>
            </section>

            <section>
              <h2>3. Health and other sensitive information</h2>
              <p>
                Health information can receive heightened legal protection. Where
                TeleDoctorSA services involve health or other sensitive personal
                information, those services should be governed by separate clinical,
                contractual, security and privacy controls appropriate to the service.
                This public website is not intended to operate as an unrestricted
                channel for submitting clinical records.
              </p>
            </section>

            <section>
              <h2>4. Why we process information</h2>
              <p>We may process personal information to:</p>
              <ul>
                <li>respond to enquiries and arrange demonstrations;</li>
                <li>communicate about practice configuration and services;</li>
                <li>provide requested support or information;</li>
                <li>protect the security and integrity of the website;</li>
                <li>meet legal, regulatory, accounting or record-keeping obligations; and</li>
                <li>improve the website and service experience where lawfully permitted.</li>
              </ul>
            </section>

            <section>
              <h2>5. Sharing and service providers</h2>
              <p>
                Information may be shared with service providers that support website
                hosting, communications, security, infrastructure or other operational
                functions where this is necessary and subject to appropriate safeguards.
                We do not authorise third parties to use personal information for their
                own unrelated purposes merely because they provide services to us.
              </p>
              <p>
                The website may link to third-party services such as email, messaging,
                maps or other external platforms. Their own privacy terms apply when you
                choose to use those services.
              </p>
            </section>

            <section>
              <h2>6. International processing</h2>
              <p>
                Some technology or communications providers may process information
                outside South Africa. Where personal information is transferred across
                borders, appropriate legal and contractual safeguards should be applied
                as required by applicable law.
              </p>
            </section>

            <section>
              <h2>7. Retention and security</h2>
              <p>
                Personal information should be retained only for as long as reasonably
                necessary for the purpose for which it was collected, to meet legal or
                contractual obligations, or to establish, exercise or defend legal
                rights. Reasonable technical and organisational measures should be used
                to protect information against loss, misuse and unauthorised access.
              </p>
            </section>

            <section>
              <h2>8. Your privacy rights</h2>
              <p>
                Subject to applicable law, you may request access to personal
                information held about you, ask for correction or deletion where
                appropriate, object to certain processing, withdraw consent where
                processing is based on consent, or raise a privacy complaint.
              </p>
            </section>

            <section>
              <h2>9. Privacy contact</h2>
              <p>
                Privacy and Information Officer enquiries may be directed to
                {" "}<a href="mailto:info@teledoctorsa.co.za">info@teledoctorsa.co.za</a>.
                Written correspondence may also be directed to 29 Landor Street,
                Thulisa Park, South Africa.
              </p>
              <p>
                You may also have the right to lodge a complaint with the South African
                Information Regulator.
              </p>
            </section>

            <section>
              <h2>10. Changes to this policy</h2>
              <p>
                We may update this policy when our website, services, providers or legal
                obligations change. The effective date above will be updated when a
                material revision is published.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
