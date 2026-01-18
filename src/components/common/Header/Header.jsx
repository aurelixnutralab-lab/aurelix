import { useState } from "react";
import CommonButton from "../CommonButton/CommonButton";
import { ChevronDown } from "lucide-react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import Logo from "../Logo/Logo";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <>
      {/* 🔹 Top Info Bar */}
      <header className="w-full bg-primary-light relative z-50">
        <SectionWrapper>
          <div className="w-full py-5 flex items-center justify-between gap-[20px]">
            {/* Logo */}
            <div className="flex items-center">
              {/* Desktop Logo */}
              <div className="hidden md:block">
                <Logo size="lg" />
              </div>

              {/* Mobile Logo */}
              <div className="md:hidden">
                <Logo size="sm" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
              <a
                href="#"
                className="px-2 py-2 rounded-md hover:bg-primary-light hover:text-primary transition"
              >
                Home
              </a>
              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("products")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="px-3 py-2 rounded-md cursor-pointer hover:bg-primary-light hover:text-primary transition flex items-center gap-1">
                  Products
                  <span
                    className={`transition ${
                      activeDropdown === "products" ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="text-[14px]" />
                  </span>
                </div>

                {activeDropdown === "products" && (
                  <div className="absolute top-[32px] left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg min-w-[220px] p-1">
                    <a
                      href="#"
                      className="block px-4 py-3 rounded-lg hover:bg-primary-light hover:text-primary transition"
                    >
                      Product One
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-3 rounded-lg hover:bg-primary-light hover:text-primary transition"
                    >
                      Product Two
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-3 rounded-lg hover:bg-primary-light hover:text-primary transition"
                    >
                      Product Three
                    </a>
                  </div>
                )}
              </div>
              <a
                href="#"
                className="px-2 py-2 rounded-md hover:bg-primary-light hover:text-primary transition"
              >
                About
              </a>
              <a
                href="#"
                className="px-2 py-2 rounded-md hover:bg-primary-light hover:text-primary transition"
              >
                Quality
              </a>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <CommonButton text="Contact Us" variant="primary" />

              {/* Hamburger Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col gap-1"
              >
                <span className="w-5 h-0.5 bg-primary"></span>
                <span className="w-5 h-0.5 bg-primary"></span>
                <span className="w-5 h-0.5 bg-primary"></span>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden absolute top-full left-0 w-full bg-primary-light shadow transition-all duration-300 ${
              menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <nav className="flex flex-col px-6 py-6 gap-4 text-sm font-medium text-gray-700">
              <a href="#" className="hover:text-primary transition">
                Home
              </a>
              {/* Mobile Products Dropdown */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full flex items-center justify-between text-gray-700"
                >
                  Products
                  <span
                    className={`transition-transform ${
                      mobileProductsOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="text-[14px]" />
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 bg-white rounded-lg ${
                    mobileProductsOpen ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <a
                    href="#"
                    className="block pl-4 py-2 hover:text-primary transition"
                  >
                    Product One
                  </a>
                  <a
                    href="#"
                    className="block pl-4 py-2 hover:text-primary transition"
                  >
                    Product Two
                  </a>
                  <a
                    href="#"
                    className="block pl-4 py-2 hover:text-primary transition"
                  >
                    Product Three
                  </a>
                </div>
              </div>

              <a href="#" className="hover:text-primary transition">
                About
              </a>
              <a href="#" className="hover:text-primary transition">
                Quality
              </a>
            </nav>
          </div>
        </SectionWrapper>
      </header>
    </>
  );
}

export default Header;
