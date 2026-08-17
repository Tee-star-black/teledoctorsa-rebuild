import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="legal-shell">
          <span className="legal-eyebrow">Legal and privacy</span>
          <h1>Cookie Policy</h1>
          <p className="legal-updated">Effective date: 17 August 2026</p>

          <p className="legal-summary">
            This policy explains how TeleDoctorSA uses cookies and similar browser
            technologies on this website and how you can manage your preferences.
          </p>

          <div className="legal-content">
            <section>
              <h2>1. What cookies and browser storage are</h2>
              <p>
                Cookies are small files or values stored by a browser. Similar
                technologies, including local storage, can remember preferences or
                support website functionality.
              </p>
            </section>

            <section>
              <h2>2. What this site currently uses</h2>
              <p>
                The website uses essential browser storage to remember your cookie
                preference. Essential technologies may also be used where reasonably
                necessary for security, routing, session integrity or delivery of the
                website.
              </p>
              <p>
                Non-essential analytics, advertising or marketing technologies should
                not be enabled unless they are introduced intentionally and used in
                accordance with applicable consent requirements.
              </p>
            </section>

            <section>
              <h2>3. Preference categories</h2>
              <h3>Essential</h3>
              <p>
                Required for basic website operation, security and remembering privacy
                choices. These cannot always be disabled without affecting website
                functionality.
              </p>
              <h3>Analytics</h3>
              <p>
                If introduced, analytics technologies may help us understand aggregate
                website usage and performance. They should only be enabled where the
                required legal basis and consent have been established.
              </p>
              <h3>Marketing</h3>
              <p>
                If introduced, marketing technologies may be used to measure campaigns
                or personalise advertising. They should not be enabled without the
                appropriate consent where consent is required.
              </p>
            </section>

            <section>
              <h2>4. Managing your choices</h2>
              <p>
                You can choose "Essential only" or "Accept all" when the privacy
                preferences notice appears. You may also clear this site&apos;s browser
                storage in your browser settings to make the preference notice appear
                again.
              </p>
            </section>

            <section>
              <h2>5. Third-party services</h2>
              <p>
                External services linked from this website, including messaging, email,
                maps or other third-party platforms, may use their own cookies or
                tracking technologies. Their policies apply once you leave this website
                or interact directly with those services.
              </p>
            </section>

            <section>
              <h2>6. Changes to this policy</h2>
              <p>
                This policy should be updated if the website begins using new analytics,
                advertising, embedded-media or other tracking technologies.
              </p>
            </section>

            <section>
              <h2>7. Contact</h2>
              <p>
                Questions about cookies or privacy can be sent to
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
