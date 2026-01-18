import { Facebook, Twitter, Instagram, MapPin, Mail } from "lucide-react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import Logo from "../Logo/Logo";

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
              <Logo size="md" />

              <div className="flex gap-4">
                <SocialIcon icon={<Facebook size={18} />} />
                <SocialIcon icon={<Twitter size={18} />} />
                <SocialIcon icon={<Instagram size={18} />} />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 capitalize">
                Quick links
              </h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="hover:text-white cursor-pointer transition">
                  Home
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  About
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Quality
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Contact us
                </li>
                {/* <li className="hover:text-white cursor-pointer transition">Blog</li> */}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4 capitalize">
                Resources
              </h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="hover:text-white cursor-pointer transition">
                  Manufacturing Solutions
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Product listing
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Product detail
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Quote Request Page
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Comparison
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4 capitalize">
                Contact us
              </h3>
              <div className="space-y-4 text-sm text-white/80">
                <div className="flex gap-3">
                  <MapPin size={18} className="mt-1" />
                  <p>Ahemedabad</p>
                </div>

                <div className="flex gap-3 items-center">
                  <Mail size={18} />
                  <p>contact@aurelix.com</p>
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
