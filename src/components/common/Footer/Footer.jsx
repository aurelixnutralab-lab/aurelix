import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { AppImages } from "../../../assets/images/image";

function Footer() {
  return (
    <footer className="bg-primary text-white">
      <SectionWrapper>
        <div className="flex flex-col w-[100%]">
          {/* Content */}
          <div className=" py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo + Social */}
            <div className="flex gap-5 flex-col">
              <Link to="/" aria-label="Aurelix Home">
                <img
                  src={AppImages.WhiteLogo}
                  className="w-[60%] max-w-[280px] md:min-w-0 md:w-[80%] lg:w-[90%]"
                />
              </Link>
              <p className="text-sm text-white/80">
                Your trusted partner for a healthier, happier life through
                premium herbal and wellness solutions.
              </p>
              <div>
                <h3 className="text-lg font-semibold mb-2 capitalize">
                  Our Group Of Companies
                </h3>
                <div className="flex gap-1 flex-col text-sm text-white/80">
                  <a
                    href="https://aurelixnutralab.com/"
                    className="hover:underline"
                    target="_blank"
                  >
                    Aurelix Nutra Labs Pvt. Ltd.
                  </a>
                  <a
                    href="https://aurelixnutralab.com/"
                    className="hover:underline"
                    target="_blank"
                  >
                    Aurelix Nutra Labs Pvt. Ltd.
                  </a>
                </div>
              </div>
              {/* <div>
                <h3 className="text-lg font-semibold mb-2 capitalize">
                  Follow us on:
                </h3>
                <div className="flex gap-4">
                  <SocialIcon
                    icon={<Facebook size={18} />}
                    href="https://facebook.com"
                    label="Facebook"
                  />
                  <SocialIcon
                    icon={<Twitter size={18} />}
                    href="https://twitter.com"
                    label="Twitter"
                  />
                  <SocialIcon
                    icon={<Instagram size={18} />}
                    href="https://instagram.com"
                    label="Instagram"
                  />
                </div>
              </div> */}
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
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4 capitalize">
                Products
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
                  <MapPin size={26} />
                  <p>
                    FF-10, SEVENTH PARISUR, <br />
                    Shree Vishnudhara Gardens, Gota - Jagatpur Rd, <br /> Gota,
                    Ahmedabad, Gujarat 382481
                  </p>
                </div>

                <div className="flex gap-3 items-center">
                  <Mail size={20} />
                  <a
                    href="mailto:info@aurelixnutralab.com"
                    className="hover:underline"
                  >
                    info@aurelixnutralab.com
                  </a>
                </div>

                <div className="flex gap-3 items-center">
                  <Phone size={20} />
                  <div className="flex flex-col ">
                    <a href="tel:+919274799430" className="hover:underline">
                      +91 92747 99430
                    </a>
                    <a href="tel:+917490099430" className="hover:underline">
                      +91 74900 99430
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/30" />

          {/* Bottom */}
          <div className="py-4 text-center text-sm text-white/80">
            Copyright © 2026 Aurelix Nutra Labs
          </div>
        </div>
      </SectionWrapper>
    </footer>
  );
}

export default Footer;

function SocialIcon({ icon, href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 cursor-pointer rounded-full bg-white text-primary flex items-center justify-center hover:scale-110 transition"
    >
      {icon}
    </a>
  );
}
