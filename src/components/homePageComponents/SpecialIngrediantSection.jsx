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
          At Aurelix, we specialize in manufacturing and supplying premium
          Ayurvedic herbal extracts and botanical powders. Rooted in the rich
          heritage of traditional Ayurveda, we combine ancient wisdom with
          modern extraction technologies to deliver consistent, high-quality raw
          materials for nutraceutical, pharmaceutical, cosmetic, and wellness
          industries.
        </p>
        <p className="mt-6 text-gray-600 lg:max-w-5xl text-center text-[20px]">
          With a strong focus on purity, standardization, and reliability,
          Aurelix ensures every extract and powder meets stringent quality
          standards. From ethically sourced herbs to advanced processing
          methods, we maintain transparency and precision at every stage —
          providing scalable, bulk solutions that empower brands to create
          effective and authentic Ayurvedic formulations.
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
