import AboutAndFeatures from "@/components/AboutAndFeatures";
import GetAQuote from "@/components/GetAQuote";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    // The max-w-7xl wrapper brings the edges in, creating that modern, boxed layout
    <main className="min-h-screen flex flex-col w-full max-w-8xl mx-auto">
      <Hero />
      <Process />
      <AboutAndFeatures />
      <Services />
      <Testimonials />
      <GetAQuote />
    </main>
  );
}