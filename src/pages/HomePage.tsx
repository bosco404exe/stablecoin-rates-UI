import Footer from "../components/Footer";
import CurrencyConverter from "../layout/currencyConverter/CurrencyConverter";
import HeroSection from "../layout/HeroSection";

function HomePage() {
  return (
    <div className="w-full flex flex-col relative ">
  
      <HeroSection />
      <CurrencyConverter/>
   
    </div>
  );
}

export default HomePage; 