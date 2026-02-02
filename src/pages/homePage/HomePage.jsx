import { AppImages } from "../../assets/images/image";
import GetInTouch from "../../components/common/GetInTouch/GetInTouch";
import AboutNutra from "../../components/homePageComponents/AboutNutra";
import HeroBanner from "../../components/homePageComponents/HeroBanner";
import OurProducts from "../../components/homePageComponents/OurProducts";
import SpecialIngrediantSection from "../../components/homePageComponents/SpecialIngrediantSection";

function HomePage() {
  return (
    <div className="text-2xl text-red-600">
      <HeroBanner />
      <OurProducts />
      <AboutNutra />
      <SpecialIngrediantSection />
      <GetInTouch />
    </div>
  );
}

export default HomePage;
