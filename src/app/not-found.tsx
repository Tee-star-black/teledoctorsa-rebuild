import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main style={{ background: "#fffdfb", color: "#200d1e" }}>
        <section style={{ minHeight: "72vh", display: "grid", placeItems: "center", padding: "160px 32px 96px" }}>
          <div style={{ width: "min(760px, 100%)" }}>
            <span style={{ display: "block", marginBottom: 18, color: "#a84f25", fontSize: 10, fontWeight: 800, letterSpacing: ".16em", textTransform: "uppercase" }}>404 / Not found</span>
            <h1 style={{ margin: 0, maxWidth: "10ch", fontSize: "clamp(52px, 8vw, 96px)", lineHeight: .92, letterSpacing: "-.06em" }}>This page isn&apos;t part of the care pathway.</h1>
            <p style={{ maxWidth: 620, margin: "28px 0 0", color: "#736970", fontSize: 18, lineHeight: 1.6 }}>The link may have moved, expired, or simply taken a wrong turn. The useful parts of TeleDoctorSA are still very much here.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 34 }}>
              <Link href="/" className="tdsa-solid-link"><ArrowLeft size={17} /> Back home</Link>
              <Link href="/services" className="tdsa-text-link">Explore services <ArrowRight size={17} /></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
