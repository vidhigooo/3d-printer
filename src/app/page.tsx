import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Portfolio from "@/components/Portfolio";
import Trust from "@/components/Trust";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <HowItWorks />
      <Portfolio />
      <CallToAction />
    </>
  );
}
