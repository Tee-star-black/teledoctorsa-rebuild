import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

type ContentPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets?: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

export function ContentPage({
  eyebrow,
  title,
  description,
  bullets = [],
  ctaLabel = "Book a Demo",
  ctaHref = "/contact?type=demo",
}: ContentPageProps) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "70vh", padding: "clamp(5rem,10vw,9rem) 6vw 6rem" }}>
        <section style={{ maxWidth: 980 }}>
          <p className="hero-eyebrow">{eyebrow}</p>
          <h1 style={{ fontSize: "clamp(3rem,7vw,6.5rem)", lineHeight: 0.95, letterSpacing: "-0.055em", margin: "1rem 0 2rem" }}>
            {title}
          </h1>
          <p style={{ maxWidth: 760, fontSize: "clamp(1.05rem,2vw,1.35rem)", lineHeight: 1.6, opacity: 0.78 }}>
            {description}
          </p>
          {bullets.length > 0 && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, marginTop: 48 }}>
              {bullets.map((bullet) => (
                <div key={bullet} style={{ borderTop: "1px solid currentColor", paddingTop: 16 }}>
                  {bullet}
                </div>
              ))}
            </div>
          )}
          <div style={{ marginTop: 48 }}>
            <Link href={ctaHref} className="primary-button">
              {ctaLabel}
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
