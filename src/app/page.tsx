import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ApplicationSection from "@/components/sections/ApplicationSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="bg-white">
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <ProcessSection />
        <ApplicationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
