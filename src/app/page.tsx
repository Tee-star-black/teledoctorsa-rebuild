import "./home.css";
import "./home-narrative.css";
import "./home-integration.css";
import "./hero-overrides.css";
import "./desktop-home.css";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/home/hero";
import { HomeSections } from "@/components/home/home-sections";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <HomeSections />
      </main>

      <Footer />
    </>
  );
}
