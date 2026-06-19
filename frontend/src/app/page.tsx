import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Trust from "@/components/Trust";
import OurPrinters from "@/components/OurPrinters";
import ClientLogos from "@/components/ClientLogos";
import OurExpertise from "@/components/OurExpertise";
import WhyChooseUs from "@/components/WhyChooseUs";
import BlogsAndUpdates from "@/components/BlogsAndUpdates";
import LocationMap from "@/components/LocationMap";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <OurExpertise />
      <OurPrinters />
      <HowItWorks />
      <CallToAction />
      <BlogsAndUpdates />
      <WhyChooseUs />
      <ClientLogos />
      
      <section className="py-12 bg-card border-y border-border/50 text-center flex flex-col items-center justify-center">
        <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-6">Need Large Volume Production?</h3>
        <a 
          href="/contact" 
          className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/80 transition-colors duration-300 shadow-[0_0_20px_rgba(0,229,255,0.3)] text-lg"
        >
          Bulk Inquiries
        </a>
      </section>

      <Trust />
      <LocationMap />
    </>
  );
}
