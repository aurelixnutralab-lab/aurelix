// function AboutNutra() {
//   return <div className="flex items-center gap-3">about nutra</div>;
// }

// export default AboutNutra;
import { AppImages } from "../../assets/images/image";
import SectionWrapper from "../common/SectionWrapper/SectionWrapper";

function AboutNutra() {
  return (
    <section className="bg-white py-12 md:py-20">
      <SectionWrapper>
        <div className="w-[100%]">
          <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
            {/* Left Image Section */}
            <div className="w-full">
              <img
                src={AppImages.AboutNutraImg}
                alt="Natural Health Ingredients"
                className="w-full h-auto max-h-[500px] rounded-xl object-cover shadow-lg"
              />
            </div>

            {/* Right Content Section */}
            <div className="w-full">
              <p className="text-[18px] font-bold text-primary  tracking-wide mb-3">
                About Aurelix
              </p>

              <h2
                className="text-4xl md:text-5xl xl:text-6xl font-bold mb-[20px] text-gray-900"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Your Partner in Natural and Sustainable Health
              </h2>

              <p className="text-gray-600 mb-4 text-[20px]">
                At Aurelix, we believe in the power of nature to enhance health
                and well-being. Specializing in the distribution of raw
                materials for dietary supplements, we provide high-quality
                ingredients sourced from the finest suppliers worldwide.
              </p>

              <p className="text-gray-600 mb-6 text-[20px]">
                Our mission is to make natural and effective solutions
                accessible while driving innovation in the dietary supplement
                industry.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}

export default AboutNutra;
