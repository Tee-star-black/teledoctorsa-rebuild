import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/home/hero";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
      </main>

      <Footer />
    </>
  );
}