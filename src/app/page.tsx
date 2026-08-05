import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import Story from "@/components/Story";
import Ingredients from "@/components/Ingredients";
import Showcase from "@/components/Showcase";
import WhatsInside from "@/components/WhatsInside";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <MarqueeBanner />

      {/* Unboxing image — full bleed */}
      <div className="relative w-full h-[25vh] sm:h-[30vh] md:h-[57vh] overflow-hidden">
        <img
          src="/herbirod unboxing.jpeg"
          alt="Herbirod Unboxing"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <Story />
      <Ingredients />
      <Showcase />
      <WhatsInside />
      <Pricing />
      <Testimonials />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
