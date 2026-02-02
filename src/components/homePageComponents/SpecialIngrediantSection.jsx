import { AppImages } from "../../assets/images/image";
import SpecialIngrediantCard from "./SpecialIngrediantCard";

function SpecialIngrediantSection() {
  return (
    <section className="bg-primary-light  px-4 md:px-8 lg:px-16 mx-auto ">
      <div className="w-[100%] flex flex-col items-center py-8 md:py-20">
        <p className="text-[18px] font-bold text-primary mb-4">
          Our Special Ingredients
        </p>

        <h2
          className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 text-center"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          AYURVEDIC & ETHENIC
        </h2>
        <p className="mt-6 text-gray-600 lg:max-w-5xl text-center text-[20px]">
          At Aurelix, we craft modern digital experiences that empower
          businesses to grow and connect with their audience. Specializing in
          scalable web solutions and intuitive user interfaces, we deliver
          high-quality products built with performance, reliability, and design
          excellence at their core.
        </p>
        <p className="mt-6 text-gray-600 lg:max-w-5xl text-center text-[20px]">
          Driven by innovation and precision, Aurelix focuses on transforming
          ideas into impactful digital solutions. From concept to deployment, we
          combine strategy, technology, and creativity to build platforms that
          are efficient, adaptable, and future-ready.
        </p>
        <div className="mt-18 w-[100%] flex justify-center gap-[50px] flex-wrap">
          <SpecialIngrediantCard
            image={AppImages.Ashwagandha}
            title="ASHWAGANDA"
            description="Renowned for its adaptogenic properties, Ashwagandha helps manage stress, improve stamina, and support overall vitality."
          />
          <SpecialIngrediantCard
            image={AppImages.Amla}
            title="AMLA"
            description="Rich in natural vitamin C and antioxidants, Amla supports immunity, digestion, and overall metabolic balance."
          />
          <SpecialIngrediantCard
            image={AppImages.safedMulsi}
            title="SAFED MUSLI"
            description="Traditionally used to support strength, endurance, and male vitality, Safed Musli is prized for its rejuvenating effects."
          />
        </div>
      </div>
    </section>
  );
}

export default SpecialIngrediantSection;
