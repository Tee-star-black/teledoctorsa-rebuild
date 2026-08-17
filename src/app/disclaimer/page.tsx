import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="legal-shell">
          <span className="legal-eyebrow">Legal and safety</span>
          <h1>Medical and Website Disclaimer</h1>
          <p className="legal-updated">Effective date: 17 August 2026</p>

          <p className="legal-alert">
            This website is not an emergency medical service. Do not use this site,
            a demo request, email or general messaging channel to seek emergency care.
            If you are experiencing a medical emergency, contact your local emergency
            service or go to the nearest appropriate emergency department.
          </p>

          <div className="legal-content">
            <section>
              <h2>General information only</h2>
              <p>
                Content on this public website is provided for general information about
                TeleDoctorSA, connected-care technology and available service pathways.
                It is not personal medical advice and should not be relied on as a
                diagnosis, treatment plan or substitute for consultation with a suitably
                qualified healthcare professional.
              </p>
            </section>

            <section>
              <h2>Clinical decisions</h2>
              <p>
                Healthcare professionals remain responsible for exercising their own
                professional judgement and complying with applicable clinical,
                professional and legal obligations. Technology, monitoring tools and
                software outputs should be interpreted in the context of the patient,
                clinical history and appropriate professional review.
              </p>
            </section>

            <section>
              <h2>Service availability</h2>
              <p>
                Descriptions of features, devices, integrations, workflows or service
                capabilities on this website do not guarantee immediate availability.
                Actual scope, configuration, eligibility, implementation and support are
                confirmed separately for each practice or service arrangement.
              </p>
            </section>

            <section>
              <h2>External communications</h2>
              <p>
                General email, messaging and demo-booking channels are not intended for
                urgent clinical communication or unrestricted transmission of patient
                records. Use only an authorised clinical workflow where one has been
                provided for that purpose.
              </p>
            </section>

            <section>
              <h2>Contact</h2>
              <p>
                Non-emergency website or service enquiries may be sent to
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
