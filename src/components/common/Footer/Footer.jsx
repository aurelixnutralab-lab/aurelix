import { Facebook, Twitter, Instagram, MapPin, Mail } from "lucide-react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-primary text-white">
      <SectionWrapper>
        <div className="flex flex-col w-[100%]">
          {/* Content */}
          <div className=" py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo + Social */}
            <div className="flex gap-5 flex-col">
              {/* <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center mb-6">
                <span className="text-xl">🌿</span>
              </div> */}
              <Link to="/">
                <Logo size="md" />
              </Link>
              <p className="text-sm text-white/80">
                Your trusted partner for a healthier, happier life through
                premium herbal and wellness solutions.
              </p>
              <div>
                <h3 className="text-lg font-semibold mb-2 capitalize">
                  Follow us on:
                </h3>
                <div className="flex gap-4">
                  <SocialIcon icon={<Facebook size={18} />} />
                  <SocialIcon icon={<Twitter size={18} />} />
                  <SocialIcon icon={<Instagram size={18} />} />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 capitalize">
                Quick links
              </h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="hover:text-white cursor-pointer transition">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  <Link to={"/about-us"}>About</Link>
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  <Link to={"/quality"}>Quality</Link>
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  <Link to={"/network"}>Network</Link>
                </li>
                {/* <li className="hover:text-white cursor-pointer transition">
                  <Link to={"/contact-us"}>Contact us</Link>
                </li> */}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4 capitalize">
                Resources
              </h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="hover:text-white cursor-pointer transition">
                  <Link to={"/product/herbal-botanical-extract"}>
                    Herbal & Botanical Extracts
                  </Link>
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  <Link to={"/product/antioxidants-polyphenols"}>
                    Antioxidants & Polyphenols
                  </Link>
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  <Link to={"/product/carotenoids"}>
                    Carotenoids & Natural Pigments
                  </Link>
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  <Link to={"/product/plant-powders"}>
                    Fruit, Vegetable & Plant Powders
                  </Link>
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  <Link to={"/product/mushrooms"}>Mushroom Extracts</Link>
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  <Link to={"/product/dietary-fibers"}>
                    Dietary Fibers & Plant Gums
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4 capitalize">
                Contact Details
              </h3>
              <div className="space-y-4 text-sm text-white/80">
                <div className="flex gap-3">
                  <MapPin size={18} className="mt-1" />
                  <p>Ahemedabad</p>
                </div>

                <div className="flex gap-3 items-center">
                  <Mail size={18} />
                  {/* <p>info@aurelixnutralab.com</p> */}
                  <a
                    href="mailto:info@aurelixnutralab.com"
                    className="hover:underline"
                  >
                    info@aurelixnutralab.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/30" />

          {/* Bottom */}
          <div className="py-4 text-center text-sm text-white/80">
            Copyright © 2026 Aurelix
          </div>
        </div>
      </SectionWrapper>
    </footer>
  );
}

export default Footer;

function SocialIcon({ icon }) {
  return (
    <div className="w-10 h-10 cursor-pointer rounded-full bg-white text-primary flex items-center justify-center hover:scale-110 transition">
      {icon}
    </div>
  );
}
