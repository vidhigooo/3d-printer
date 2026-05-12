import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Trust from "@/components/Trust";
import OurPrinters from "@/components/OurPrinters";
import ClientLogos from "@/components/ClientLogos";
import OurExpertise from "@/components/OurExpertise";
import WhyChooseUs from "@/components/WhyChooseUs";
import LocationMap from "@/components/LocationMap";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <OurPrinters />
      <ClientLogos />
      <OurExpertise />
      <WhyChooseUs />
      <HowItWorks />
      <CallToAction />
      <Trust />
      <LocationMap />
    </>
  );
}
