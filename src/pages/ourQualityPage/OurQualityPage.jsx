import { AppImages } from "../../assets/images/image";
import GetInTouch from "../../components/common/GetInTouch/GetInTouch";

function OurQualityPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <img
          src={AppImages.qualityBanner}
          alt="Quality Assurance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl text-white">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 text-primary-light"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              The AureliX Standard: Precision in Every Particle
            </h1>
            <p className="text-lg opacity-90">
              As a specialized technical trading house, we don't just supply
              ingredients; we provide peace of mind through a rigorous vetting
              and handling process.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Philosophy */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2
          className="text-3xl font-bold mb-4 text-gray-900"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Our Quality Philosophy
        </h2>
        <p className="text-gray-700 leading-relaxed">
          At <strong>AureliX Nutra Labs</strong>, quality is not a static
          report; it is an active commitment. We bridge the gap between global
          manufacturers and your production line by ensuring that every
          ingredient we trade meets the highest industry benchmarks for purity
          and potency.
        </p>
      </section>

      {/* Assurance Protocol */}
      <div className="bg-primary-light">
        <section className="bg-primary-light py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2
              className="text-3xl font-bold mb-10 text-center text-gray-900"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              The AureliX Assurance Protocol
            </h2>

            <div className="flex flex-wrap gap-8 justify-center">
              {/* Elite Sourcing */}
              <div className="bg-white rounded-xl shadow p-6 min-w-[300px] max-w-[320px]">
                <img
                  src={AppImages.EliteManufacturerSourcing}
                  alt="Elite Manufacturer Sourcing"
                  className="h-48 w-full shadow-md max-h-[350px] md:max-h-[450px] object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Elite Manufacturer Sourcing
                </h3>
                <p className="text-gray-600">
                  We partner exclusively with manufacturing facilities that
                  maintain global certifications (GMP, ISO). We evaluate their
                  track record for consistency and compliance before adding them
                  to our portfolio.
                </p>
              </div>

              {/* Dossier Verification */}
              <div className="bg-white rounded-xl shadow p-6 min-w-[300px] max-w-[320px]">
                <img
                  src={AppImages.DossierVerification}
                  alt="Dossier Verification"
                  className="h-48 w-full shadow-md max-h-[350px] md:max-h-[450px] object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Dossier Verification
                </h3>
                <p className="text-gray-600">
                  Every product in our portfolio is backed by a comprehensive
                  technical dossier. We verify that the technical specifications
                  align perfectly with your formulation requirements.
                </p>
              </div>

              {/* Integrity Management */}
              <div className="bg-white rounded-xl shadow p-6 min-w-[300px] max-w-[320px]">
                <img
                  src={AppImages.IntegrityManagement}
                  alt="Integrity Management"
                  className="h-48 w-full shadow-md max-h-[350px] md:max-h-[450px] object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Integrity Management
                </h3>
                <p className="text-gray-600">
                  Quality is preserved through proper handling. At the AureliX
                  Hub, we ensure every shipment is inspected for seal integrity,
                  organoleptic consistency, and proper labeling before dispatch.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <GetInTouch />
    </div>
  );
}

export default OurQualityPage;
