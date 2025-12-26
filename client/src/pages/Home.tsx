/*
 * DESIGN: Bold Contrast — "Confident Authority"
 * Home Page: Assembles all sections into a cohesive landing page
 * Alternating dark/light sections for visual rhythm
 */

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <FeaturesSection />
        <AboutSection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
