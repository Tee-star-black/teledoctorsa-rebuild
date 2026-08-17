import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="legal-shell">
          <span className="legal-eyebrow">Legal and privacy</span>
          <h1>Terms of Service</h1>
          <p className="legal-updated">Effective date: 17 August 2026</p>

          <p className="legal-summary">
            These terms govern use of the TeleDoctorSA website. Separate written
            agreements may apply to demonstrations, implementation projects,
            subscriptions, clinical services, devices or other products and services.
          </p>

          <div className="legal-content">
            <section>
              <h2>1. Website purpose</h2>
              <p>
                This website provides general information about TeleDoctorSA and ways
                to contact us about demonstrations, practice solutions and related
                services. Website content is not a substitute for professional medical
                advice, diagnosis or treatment.
              </p>
            </section>

            <section>
              <h2>2. No emergency service</h2>
              <p className="legal-alert">
                TeleDoctorSA&apos;s public website is not an emergency medical service and
                must not be used to request urgent or emergency assistance. If you are
                experiencing a medical emergency, contact your local emergency service
                or go to the nearest appropriate emergency department.
              </p>
            </section>

            <section>
              <h2>3. No automatic clinical relationship</h2>
              <p>
                Browsing this website, sending a general enquiry or requesting a demo
                does not by itself create a clinician-patient relationship, guarantee
                clinical care, create immediate platform access, or confirm acceptance
                into any TeleDoctorSA service. Any clinical or commercial relationship
                is subject to the applicable onboarding, professional, contractual and
                service requirements.
              </p>
            </section>

            <section>
              <h2>4. Accuracy and availability</h2>
              <p>
                We aim to keep website information useful and current, but content may
                change and may not always be complete or error-free. Features,
                integrations, availability, implementation timelines and service scope
                are subject to confirmation in writing for each customer or practice.
              </p>
            </section>

            <section>
              <h2>5. Acceptable use</h2>
              <p>You may not use this website to:</p>
              <ul>
                <li>break applicable law or infringe the rights of others;</li>
                <li>attempt unauthorised access to systems, accounts or data;</li>
                <li>introduce malicious code, interfere with security, or disrupt service;</li>
                <li>misrepresent your identity or authority; or</li>
                <li>submit confidential patient information through channels not designated for clinical data.</li>
              </ul>
            </section>

            <section>
              <h2>6. Intellectual property</h2>
              <p>
                Unless otherwise stated, the website, branding, interface, text,
                graphics, software and other original material are owned by or licensed
                to TeleDoctorSA and may not be copied, modified, distributed or used
                commercially without permission or another lawful basis.
              </p>
            </section>

            <section>
              <h2>7. Third-party links and services</h2>
              <p>
                Links to third-party websites or services are provided for convenience.
                TeleDoctorSA does not control those external services and their terms,
                privacy practices and availability apply independently.
              </p>
            </section>

            <section>
              <h2>8. Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, TeleDoctorSA is not
                liable for losses arising solely from reliance on general website
                information, interruptions outside our reasonable control, or third-party
                services. Nothing in these terms excludes liability or consumer rights
                that cannot lawfully be excluded or limited.
              </p>
            </section>

            <section>
              <h2>9. Privacy</h2>
              <p>
                Personal information is handled as described in our
                {" "}<a href="/privacy">Privacy Policy</a> and
                {" "}<a href="/cookies">Cookie Policy</a>.
              </p>
            </section>

            <section>
              <h2>10. Governing law</h2>
              <p>
                These website terms are governed by the laws of the Republic of South
                Africa, subject to any mandatory rights or jurisdiction that applicable
                law gives a user.
              </p>
            </section>

            <section>
              <h2>11. Contact</h2>
              <p>
                Questions about these terms may be sent to
                {" "}<a href="mailto:info@teledoctorsa.co.za">info@teledoctorsa.co.za</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
