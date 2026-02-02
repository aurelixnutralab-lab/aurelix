import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import CommonButton from "../CommonButton/CommonButton";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import Logo from "../Logo/Logo";
import { useLocation } from "react-router-dom";

/* -------------------- MENU DATA -------------------- */
const productLinks = [
  {
    label: "Herbal & Botanical Extracts",
    to: "/product/herbal-botanical-extract",
  },
  {
    label: "Antioxidants & Polyphenols",
    to: "/product/antioxidants-polyphenols",
  },
  { label: "Carotenoids & Natural Pigments", to: "/product/carotenoids" },
  { label: "Fruit, Vegetable & Plant Powders", to: "/product/plant-powders" },
  { label: "Mushroom Extracts", to: "/product/mushrooms" },
  { label: "Dietary Fibers & Plant Gums", to: "/product/dietary-fibers" },
];

/* -------------------- HEADER COMPONENT -------------------- */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const headerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Close menus on route change
    setMenuOpen(false);
    setMobileProductsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false);
        setMobileProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header ref={headerRef} className="w-full bg-primary-light relative z-50">
      <SectionWrapper>
        <div className="w-full py-5 flex items-center justify-between gap-[20px]">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="hidden md:block">
              <Logo size="lg" />
            </Link>
            <Link to="/" className="md:hidden">
              <Logo size="sm" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
            <Link
              to="/"
              className="px-2 py-2 rounded-md hover:bg-primary-light hover:text-primary transition"
            >
              Home
            </Link>

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
                  {productLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-4 py-3 rounded-lg hover:bg-primary-light hover:text-primary transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about-us"
              className="px-2 py-2 rounded-md hover:bg-primary-light hover:text-primary transition"
            >
              About
            </Link>
            <Link
              to="/quality"
              className="px-2 py-2 rounded-md hover:bg-primary-light hover:text-primary transition"
            >
              Quality
            </Link>
            <Link
              to="/network"
              className="px-2 py-2 rounded-md hover:bg-primary-light hover:text-primary transition"
            >
              Network
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <CommonButton
              text="Contact Us"
              variant="primary"
              onClick={() => navigate("/contact-us")}
            />

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1"
            >
              {[1, 2, 3].map((i) => (
                <span key={i} className="w-5 h-0.5 bg-primary"></span>
              ))}
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
            {/* Mobile menu order: Home → Products → About → Quality */}
            <Link to="/" className="hover:text-primary transition">
              Home
            </Link>

            {/* Products Dropdown */}
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
                className={`overflow-auto transition-all duration-300 bg-white rounded-lg ${
                  mobileProductsOpen ? " mt-3 " : "max-h-0"
                }`}
              >
                {productLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block pl-4 py-2 hover:text-primary transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/about-us" className="hover:text-primary transition">
              About
            </Link>
            <Link to="/quality" className="hover:text-primary transition">
              Quality
            </Link>
            <Link to="/network" className="hover:text-primary transition">
              Network
            </Link>
          </nav>
        </div>
      </SectionWrapper>
    </header>
  );
}

export default Header;
