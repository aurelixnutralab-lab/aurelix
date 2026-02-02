import { Link } from "react-router-dom";
import { AppImages } from "../../assets/images/image";
import CommonButton from "../../components/common/CommonButton/CommonButton";
import GetInTouch from "../../components/common/GetInTouch/GetInTouch";

const About = () => {
  return (
    <div className="bg-primary-light">
      {/* HERO SECTION */}
      <section className="px-4 md:px-8 lg:px-16 mx-auto py-8 md:py-20  flex flex-col lg:flex-row w-full gap-12 items-center">
        <div className="w-[100%] lg:w-[50%]">
          <p className="text-primary font-bold mb-2">About AureliX</p>
          <h1
            className="text-4xl md:text-5xl text-gray-900 font-bold mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Rooted in Ayurveda,
            <br /> Guided by Nature
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            AureliX is dedicated to delivering premium Ayurvedic and herbal
            ingredients that promote holistic wellness. We blend ancient wisdom
            with modern quality standards to create trusted health solutions.
          </p>
          <Link to="/product/herbal-botanical-extract">
            <CommonButton text="Explore Our Products" />
          </Link>
        </div>

        <div className="flex justify-center w-[100%] lg:w-[50%]">
          <img
            src={AppImages.AboutNutraImg}
            alt="Ayurvedic Wellness"
            className="rounded-2xl shadow-lg max-h-[350px] md:max-h-[450px] w-[100%] object-cover"
          />
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-white py-8 md:py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2
            className="text-3xl mb-6 text-gray-900 font-bold"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At AureliX, we specialize in sourcing, processing, and supplying
            high-quality herbal extracts and natural ingredients. Our focus lies
            in purity, traceability, and sustainable sourcing to support the
            evolving wellness industry worldwide.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="px-4 md:px-8 lg:px-16 mx-auto py-8 md:py-20 flex flex-col-reverse lg:flex-row gap-12 items-center">
        <div className="flex justify-center w-[100%] lg:w-[50%]">
          <img
            src={AppImages.OurPhilosophy}
            alt="Herbal Ingredients"
            className="rounded-2xl shadow-md max-h-[350px] md:max-h-[450px] w-[100%] object-cover"
          />
        </div>
        <div className="w-[100%] lg:w-[50%]">
          <h2
            className="text-3xl text-gray-900 font-bold mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Our Philosophy
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Ayurveda teaches balance between body, mind, and nature. We follow
            this principle by delivering ingredients that are ethically sourced,
            minimally processed, and scientifically validated.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Every product we offer reflects harmony, sustainability, and
            long-term wellness.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-8 md:py-20">
        <div className="px-4 md:px-8 lg:px-16 mx-auto">
          <h2
            className="text-3xl text-center text-gray-900 font-bold mb-12"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Why Choose Aurelix
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Premium Ayurvedic Ingredients",
              "Global Quality Standards",
              "Sustainable & Ethical Sourcing",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 text-center shadow-sm"
              >
                <h3 className="font-semibold mb-3">{item}</h3>
                <p className="text-gray-600 text-sm">
                  We ensure consistency, safety, and authenticity in every
                  ingredient we deliver.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY PROMISE */}
      <section className="px-4 md:px-8 lg:px-16 mx-auto py-8 md:py-20 flex flex-col lg:flex-row gap-12 items-center">
        <div className="w-[100%] lg:w-[50%]">
          <h2
            className="text-3xl text-gray-900 font-bold mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Our Quality Promise
          </h2>
          <p className="text-gray-600 leading-relaxed">
            From raw material selection to final packaging, every step follows
            strict quality control measures. Our processes align with
            international standards to ensure safety, efficacy, and reliability.
          </p>
        </div>
        <div className="flex justify-center w-[100%] lg:w-[50%]">
          <img
            src={AppImages.OurQuality}
            alt="Quality Control"
            className="rounded-2xl shadow-md max-h-[350px] md:max-h-[450px] w-[100%] object-cover"
          />
        </div>
      </section>

      <GetInTouch />
    </div>
  );
};

export default About;
