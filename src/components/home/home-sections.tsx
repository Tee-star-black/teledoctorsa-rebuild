import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BellRing,
  ClipboardCheck,
  FileHeart,
  HeartPulse,
  LineChart,
  MonitorSmartphone,
  Stethoscope,
  UsersRound,
} from "lucide-react";

const careSteps = [
  {
    number: "01",
    title: "Consult",
    copy: "Connect patients and clinicians through secure virtual care when an in-person visit is not required.",
  },
  {
    number: "02",
    title: "Assess",
    copy: "Bring diagnostics, ECG insight and clinical context into the same connected care experience.",
  },
  {
    number: "03",
    title: "Monitor",
    copy: "Follow key measurements and patient-reported information beyond the consultation window.",
  },
  {
    number: "04",
    title: "Follow up",
    copy: "Keep care teams informed with longitudinal information, trends and a clearer picture of recovery over time.",
  },
];

const capabilities = [
  {
    icon: MonitorSmartphone,
    title: "Virtual care",
    copy: "Extend access to clinicians with a digital consultation experience designed to fit into real care pathways.",
  },
  {
    icon: Activity,
    title: "ECG247",
    copy: "Connect ambulatory ECG monitoring with the broader patient journey instead of treating it as an isolated test.",
  },
  {
    icon: LineChart,
    title: "Remote monitoring",
    copy: "Track meaningful trends between visits and surface changes that deserve clinical attention.",
  },
  {
    icon: FileHeart,
    title: "Connected records",
    copy: "Preserve continuity by keeping relevant patient information available across the care journey.",
  },
  {
    icon: BellRing,
    title: "Clinical signals",
    copy: "Give care teams a structured way to identify, review and respond to changes over time.",
  },
  {
    icon: UsersRound,
    title: "Team-based care",
    copy: "Support clinicians, practices and organisations with a shared view of the patients they are responsible for.",
  },
];

const monitoringItems = [
  "Longitudinal patient measurements",
  "Trend and change visibility",
  "Patient-reported information",
  "Structured clinical follow-up",
];

export function HomeSections() {
  return (
    <>
      <section className="home-intro section-shell" aria-labelledby="home-intro-title">
        <div className="section-kicker">One connected care layer</div>
        <div className="home-intro-grid">
          <h2 id="home-intro-title">
            Healthcare does not stop when the consultation ends.
          </h2>
          <div className="home-intro-copy">
            <p>
              TeleDoctorSA brings virtual care, ECG247, remote monitoring and patient information into one connected experience for healthcare professionals.
            </p>
            <p>
              The goal is simple: help care teams preserve context, follow patients over time and make the space between visits more clinically useful.
            </p>
          </div>
        </div>
      </section>

      <section className="care-journey" aria-labelledby="care-journey-title">
        <div className="section-shell">
          <div className="section-heading-row">
            <div>
              <div className="section-kicker">Connected care journey</div>
              <h2 id="care-journey-title">From first contact to ongoing care.</h2>
            </div>
            <p>
              A continuous workflow gives clinicians more context than a sequence of disconnected encounters.
            </p>
          </div>

          <div className="care-steps">
            {careSteps.map((step) => (
              <article key={step.number} className="care-step">
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="platform-section section-shell" aria-labelledby="platform-title">
        <div className="section-heading-row">
          <div>
            <div className="section-kicker">Platform capabilities</div>
            <h2 id="platform-title">Designed around the full patient journey.</h2>
          </div>
          <Link href="/platform" className="text-link">
            Explore the platform <ArrowRight size={17} />
          </Link>
        </div>

        <div className="capability-grid">
          {capabilities.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="capability-card">
              <div className="capability-icon">
                <Icon size={23} strokeWidth={1.8} />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ecg-feature" aria-labelledby="ecg-title">
        <div className="section-shell ecg-feature-grid">
          <div className="ecg-copy">
            <div className="section-kicker section-kicker-light">ECG247</div>
            <h2 id="ecg-title">Cardiac monitoring that remains connected to the patient story.</h2>
            <p>
              ECG247 becomes more valuable when the result sits alongside the rest of the patient context. TeleDoctorSA is designed to connect diagnostic insight with follow-up and ongoing care.
            </p>
            <Link href="/ecg247" className="light-link">
              Discover ECG247 <ArrowRight size={17} />
            </Link>
          </div>

          <div className="ecg-panel" aria-label="Illustrative ECG monitoring interface">
            <div className="ecg-panel-header">
              <div>
                <span className="live-dot" /> Monitoring active
              </div>
              <HeartPulse size={22} />
            </div>
            <div className="ecg-patient-row">
              <div>
                <small>Patient</small>
                <strong>Connected</strong>
              </div>
              <div>
                <small>Heart rate</small>
                <strong>72 bpm</strong>
              </div>
            </div>
            <div className="ecg-wave" aria-hidden="true">
              <svg viewBox="0 0 640 150" preserveAspectRatio="none">
                <path d="M0 76 H75 L98 76 L116 42 L135 108 L160 10 L186 115 L212 76 H290 L312 76 L330 48 L348 104 L374 18 L398 110 L420 76 H500 L520 76 L540 44 L558 104 L583 18 L607 108 L628 76 H640" />
              </svg>
            </div>
            <div className="ecg-meta-row">
              <span>Continuous rhythm visibility</span>
              <span>ECG247</span>
            </div>
          </div>
        </div>
      </section>

      <section className="monitoring-feature section-shell" aria-labelledby="monitoring-title">
        <div className="monitoring-visual">
          <div className="monitoring-card monitoring-card-primary">
            <div className="monitoring-card-top">
              <span>Remote monitoring</span>
              <Stethoscope size={20} />
            </div>
            <div className="monitoring-metric">
              <small>Patient status</small>
              <strong>Stable</strong>
              <span>Latest readings within expected range</span>
            </div>
            <div className="trend-bars" aria-hidden="true">
              <i style={{ height: "32%" }} />
              <i style={{ height: "46%" }} />
              <i style={{ height: "40%" }} />
              <i style={{ height: "58%" }} />
              <i style={{ height: "64%" }} />
              <i style={{ height: "56%" }} />
              <i style={{ height: "72%" }} />
              <i style={{ height: "68%" }} />
            </div>
          </div>
          <div className="monitoring-card monitoring-card-secondary">
            <ClipboardCheck size={22} />
            <span>Follow-up complete</span>
            <strong>Care plan reviewed</strong>
          </div>
        </div>

        <div className="monitoring-copy">
          <div className="section-kicker">Remote monitoring</div>
          <h2 id="monitoring-title">See what happens between appointments.</h2>
          <p>
            The most useful signals often appear outside the consultation room. Remote monitoring helps clinicians follow meaningful changes while preserving enough context to understand what those changes may mean.
          </p>
          <ul>
            {monitoringItems.map((item) => (
              <li key={item}>
                <span />
                {item}
              </li>
            ))}
          </ul>
          <Link href="/remote-monitoring" className="text-link">
            Explore remote monitoring <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="professionals-section" aria-labelledby="professionals-title">
        <div className="section-shell professionals-grid">
          <div>
            <div className="section-kicker section-kicker-light">Built for care teams</div>
            <h2 id="professionals-title">Technology that supports clinical work instead of competing with it.</h2>
          </div>
          <div className="professionals-copy">
            <p>
              TeleDoctorSA is intended for healthcare professionals, practices and organisations that need a clearer view of patients across virtual, diagnostic and longitudinal care workflows.
            </p>
            <Link href="/professionals" className="light-link">
              For healthcare professionals <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-cta section-shell" aria-labelledby="home-cta-title">
        <div className="home-cta-card">
          <div>
            <div className="section-kicker">See the connected care platform</div>
            <h2 id="home-cta-title">Bring more continuity into every patient journey.</h2>
          </div>
          <div className="home-cta-actions">
            <Link href="/contact?type=demo" className="cta-primary">
              Book a Demo <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="cta-secondary">
              Talk to the team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
