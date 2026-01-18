import { AppImages } from "../../assets/images/image";
import CommonButton from "../common/CommonButton/CommonButton";

function HeroBanner() {
  return (
    <section className="bg-primary-light  px-4 md:px-8 lg:px-16 mx-auto ">
      <div className="flex justify-between flex-col lg:flex-row py-8 md:py-20  items-center gap-12">
        {/* Left Content */}
        <div className="w-[100%] lg:w-[60%] ">
          <p className="text-sm font-semibold text-primary mb-4">
            Welcome to Aurelix
          </p>

          <h1
            className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-gray-900"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Discover Wellness with <br />
            <span className="text-primary">AURELIX</span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-md">
            Your trusted partner for a healthier, happier life through premium
            herbal and wellness solutions.
          </p>

          <CommonButton text="Shop Now" className="mt-4" />
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center w-[100%] lg:w-[40%]">
          <img
            src={AppImages.homePageHerobanner}
            alt="Wellness Products"
            className="w-full max-w-[400px] rounded-lg drop-shadow-lg"
            style={{ filter: "drop-shadow(var(--shadow-soft))" }}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
