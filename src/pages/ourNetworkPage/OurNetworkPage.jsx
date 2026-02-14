import { AppImages } from "../../assets/images/image";
import GetInTouch from "../../components/common/GetInTouch/GetInTouch";

function OurNetworkPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative h-[60vh]">
        <img
          src={AppImages.AboutNutraImg}
          alt="Global Network"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl text-white">
            <h1
              className="text-4xl md:text-5xl font-bold text-primary-light mb-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              A Unified Network. A Seamless Supply Chain.
            </h1>
            <p className="text-lg opacity-90">
              Strategically headquartered in Ahmedabad, the AureliX Hub
              functions as the central link between global innovation and your
              manufacturing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Global Intelligence */}
      <div className="bg-primary-light">
        <section className=" max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row  gap-10 items-center">
          <div className="w-[100%] lg:w-[50%]">
            <h2
              className="text-3xl text-gray-900 font-bold mb-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              The Global Intelligence Perimeter
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Reliability is born from diversity. We have cultivated a
              wide-reaching network of vetted manufacturers across key global
              regions. By remaining manufacturer-agnostic, we are able to source
              the most competitive and high-quality ingredients available in the
              market at any given time.
            </p>
          </div>
          <div className="flex justify-center w-[100%] lg:w-[50%]">
            <img
              src={AppImages.OurGlobal}
              alt="Global Manufacturers"
              className="rounded-xl shadow-md max-h-[350px] md:max-h-[450px] w-[100%] object-cover"
            />
          </div>
        </section>
      </div>

      {/* Ahmedabad Hub */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row gap-10 items-center">
          <div className="flex justify-center w-[100%] lg:w-[50%]">
            <img
              src={AppImages.AurelixHub}
              alt="Ahmedabad Hub"
              className="rounded-xl shadow-md max-h-[350px] md:max-h-[450px] w-[100%] object-cover"
            />
          </div>
          <div className="w-[100%] lg:w-[50%]">
            <h2
              className="text-3xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              The AureliX Hub – Ahmedabad
            </h2>
            <p className="mb-[14px]">
              Our Operations Hub in Ahmedabad is the heart of our firm. By
              consolidating our technical strategy and logistics under one roof,
              we provide:
            </p>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Strategic Stocking:</strong> Maintaining a buffer of
                critical ingredients to shield our clients from market
                volatility.
              </li>
              <li>
                <strong>Rapid Dispatch:</strong> Located at the center of the
                Gujarat pharmaceutical belt, we ensure streamlined delivery to
                your facility.
              </li>
              <li>
                <strong>Technical Oversight:</strong> Our hub is led by partners
                who understand the chemistry and the commerce of the
                nutraceutical industry.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Network Matters */}
      <div className="bg-primary-light">
        <section className="bg-primary-light max-w-6xl mx-auto px-6 py-16 text-center">
          <h2
            className="text-3xl font-bold text-gray-900 mb-8"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Why Our Network Matters to You
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold text-xl mb-2">Transparency</h3>
              <p className="text-gray-600">
                You get clear, honest communication regarding origin and lead
                times.
              </p>
            </div>
            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold text-xl mb-2">Agility</h3>
              <p className="text-gray-600">
                We move faster than large manufacturers, providing answers and
                dispatches in record time.
              </p>
            </div>
            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold text-xl mb-2">Reliability</h3>
              <p className="text-gray-600">
                We only trade what we trust. Our network is your safety
                net.{" "}
              </p>
            </div>
          </div>
        </section>
      </div>

      <GetInTouch />
    </div>
  );
}

export default OurNetworkPage;
