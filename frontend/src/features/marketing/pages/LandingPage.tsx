import HeroSection from "../components/HeroSection";
import ProductFeatures from "../components/ProductFeatures";
import HowitWorks from "../components/HowitWorks";
import UseCases from "../components/UseCases";
import Faq from "../components/Faq";
import BottonCTA from "../components/BottonCTA";

const LandingPage = () => {
  return (
    <main className="">
      <HeroSection />
      <ProductFeatures />
      <HowitWorks />
      <UseCases />
      <Faq />
      <BottonCTA />
    </main>
  );
};

export default LandingPage;
