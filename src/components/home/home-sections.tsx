import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Building2,
  ClipboardCheck,
  HeartPulse,
  MonitorSmartphone,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

const capabilities = [
  {
    icon: MonitorSmartphone,
    number: "01",
    title: "Virtual care",
    body: "Create a direct digital care pathway between healthcare professionals and patients without losing the clinical context around the consultation.",
    href: "/platform",
  },
  {
    icon: Activity,
    number: "02",
    title: "ECG247",
    body: "Extend cardiac observation beyond a single appointment with connected ECG monitoring and clinically useful follow-up information.",
    href: "/ecg247",
  },
  {
    icon: HeartPulse,
    number: "03",
    title: "Remote monitoring",
    body: "Follow relevant patient measurements over time and make ongoing care easier to coordinate between visits.",
    href: "/remote-monitoring",
  },
  {
    icon: ClipboardCheck,
    number: "04",
    title: "Connected records",
    body: "Keep longitudinal patient information closer to the clinical workflow so continuity does not disappear when the consultation ends.",
    href: "/health-records",
  },
];

const pathways = [
  {
    icon: Stethoscope,
    title: "For healthcare professionals",
    body: "A clearer way to extend clinical care into virtual consultations, monitoring and structured follow-up.",
    href: "/professionals",
    cta: "Explore professional workflows",
  },
  {
    icon: Building2,
    title: "For healthcare organisations",
    body: "Connected digital-health infrastructure for practices, clinics and organisations that need continuity across more than one point of care.",
    href: "/organisations",
    cta: "Explore organisation solutions",
  },
];

export function HomeSections() {
  return (
    <>
      <section className="bg-[#fffaf6] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#dc682f]">
              One continuous care layer
            </p>
            <h2 className="max-w-[620px] text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#2d1029] sm:text-5xl lg:text-7xl">
              Healthcare should not reset every time a patient leaves the room.
            </h2>
          </div>

          <div className="flex flex-col justify-end border-l border-[#e6dcd6] pl-7 sm:pl-10 lg:pl-14">
            <p className="max-w-[650px] text-lg leading-8 text-[#736970] lg:text-xl">
              TeleDoctorSA connects virtual care, ECG247, remote monitoring and longitudinal patient information into a single care experience built around continuity rather than isolated interactions.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-px border border-[#e6dcd6] bg-[#e6dcd6] sm:grid-cols-3">
              {["Virtual care", "Monitoring", "Clinical follow-up"].map((item) => (
                <div key={item} className="bg-[#fffaf6] px-5 py-5 text-sm font-semibold text-[#2d1029]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-14 flex flex-col justify-between gap-8 border-b border-[#e6dcd6] pb-10 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#dc682f]">Platform capabilities</p>
              <h2 className="max-w-[780px] text-4xl font-semibold leading-none tracking-[-0.05em] text-[#2d1029] sm:text-5xl lg:text-6xl">
                Connected tools. One clinical story.
              </h2>
            </div>
            <Link href="/platform" className="inline-flex items-center gap-2 text-sm font-bold text-[#2d1029] hover:text-[#dc682f]">
              Explore the platform <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid border-l border-t border-[#e6dcd6] md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map(({ icon: Icon, number, title, body, href }) => (
              <Link
                key={title}
                href={href}
                className="group min-h-[330px] border-b border-r border-[#e6dcd6] p-7 transition-colors hover:bg-[#fffaf6] lg:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#9c8d97]">{number}</span>
                  <Icon size={23} className="text-[#dc682f]" />
                </div>
                <div className="mt-20">
                  <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#2d1029]">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#736970]">{body}</p>
                </div>
                <ArrowRight size={18} className="mt-8 text-[#2d1029] transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#200d1e] px-6 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#ee7b3b]">ECG247</p>
              <h2 className="max-w-[760px] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                Cardiac monitoring that does not end at the clinic door.
              </h2>
              <p className="mt-8 max-w-[660px] text-base leading-8 text-white/60 lg:text-lg">
                ECG247 adds a focused cardiac monitoring pathway to the TeleDoctorSA ecosystem, helping clinicians review patient information over time and act with better continuity.
              </p>
              <Link href="/ecg247" className="mt-10 inline-flex min-h-14 items-center gap-3 bg-[#ee7b3b] px-7 text-sm font-extrabold text-[#200d1e] transition-transform hover:-translate-y-0.5">
                Explore ECG247 <ArrowRight size={18} />
              </Link>
            </div>

            <div className="self-center border border-white/15 bg-[#2d1029] p-7 sm:p-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">Connected patient</span>
                  <p className="mt-2 text-lg font-semibold">Remote ECG monitoring</p>
                </div>
                <HeartPulse className="text-[#ee7b3b]" />
              </div>
              <div className="grid grid-cols-2 gap-8 py-8">
                <div>
                  <span className="text-xs text-white/45">Heart rate</span>
                  <strong className="mt-2 block text-5xl tracking-[-0.05em]">72 <small className="text-xs font-medium text-white/45">bpm</small></strong>
                </div>
                <div>
                  <span className="text-xs text-white/45">Status</span>
                  <strong className="mt-3 block text-sm text-[#f29662]">Monitoring active</strong>
                </div>
              </div>
              <svg viewBox="0 0 500 100" className="h-24 w-full text-[#ee7b3b]" aria-label="Illustrative ECG waveform">
                <path d="M0 52 H60 L78 52 L92 26 L108 75 L128 9 L149 78 L169 52 H255 L272 52 L286 30 L301 71 L322 12 L343 76 L364 52 H500" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="mt-5 flex justify-between border-t border-white/10 pt-5 text-xs text-white/45">
                <span>Longitudinal observation</span>
                <span>ECG247</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7efe9] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-14 max-w-[760px]">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#dc682f]">Built around the people delivering care</p>
            <h2 className="text-4xl font-semibold leading-none tracking-[-0.05em] text-[#2d1029] sm:text-5xl lg:text-6xl">
              Different care environments. One connected foundation.
            </h2>
          </div>

          <div className="grid gap-px border border-[#d8ccc5] bg-[#d8ccc5] lg:grid-cols-2">
            {pathways.map(({ icon: Icon, title, body, href, cta }) => (
              <Link key={title} href={href} className="group bg-[#f7efe9] p-8 transition-colors hover:bg-white sm:p-10 lg:p-12">
                <Icon size={30} className="text-[#dc682f]" />
                <h3 className="mt-16 max-w-[500px] text-3xl font-semibold tracking-[-0.045em] text-[#2d1029] sm:text-4xl">{title}</h3>
                <p className="mt-5 max-w-[560px] text-base leading-8 text-[#736970]">{body}</p>
                <span className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-[#2d1029]">
                  {cta} <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#dc682f]">Clinical continuity</p>
            <h2 className="text-4xl font-semibold leading-none tracking-[-0.055em] text-[#2d1029] sm:text-5xl lg:text-6xl">
              Designed to support care, not create another digital island.
            </h2>
            <p className="mt-7 max-w-[600px] text-base leading-8 text-[#736970]">
              The platform is organised around connected workflows so clinicians can move from consultation to monitoring and follow-up without rebuilding the patient story every time.
            </p>
          </div>

          <div className="grid border-l border-t border-[#e6dcd6] sm:grid-cols-2">
            {[
              { icon: Users, title: "Continuity first", body: "Keep patient context available across care interactions." },
              { icon: ShieldCheck, title: "Privacy conscious", body: "Built with health information, responsible access and South African privacy expectations in mind." },
              { icon: Activity, title: "Follow-up ready", body: "Support care beyond a single appointment through monitoring pathways." },
              { icon: Stethoscope, title: "Clinician centred", body: "Technology shaped around practical healthcare workflows rather than technology for its own sake." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="min-h-[220px] border-b border-r border-[#e6dcd6] p-7 sm:p-8">
                <Icon size={22} className="text-[#dc682f]" />
                <h3 className="mt-10 text-xl font-semibold tracking-[-0.03em] text-[#2d1029]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#736970]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ee7b3b] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#200d1e]/65">See TeleDoctorSA in practice</p>
            <h2 className="max-w-[900px] text-4xl font-semibold leading-none tracking-[-0.055em] text-[#200d1e] sm:text-5xl lg:text-6xl">
              Build a more connected care experience around your clinical workflow.
            </h2>
          </div>
          <Link href="/contact?type=demo" className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 bg-[#200d1e] px-7 text-sm font-extrabold text-white transition-transform hover:-translate-y-0.5">
            Book a Demo <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
