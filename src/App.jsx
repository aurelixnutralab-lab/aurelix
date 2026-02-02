import { Route, Routes } from "react-router-dom";
import CommonLayout from "./components/commonLayouts";
import HomePage from "./pages/homePage/HomePage";
import CategoryProductPage from "./pages/CategoryProductPage/CategoryProductPage";
import AboutUsPage from "./pages/aboutUsPage/AboutUsPage";
import OurQualityPage from "./pages/ourQualityPage/OurQualityPage";
import OurNetworkPage from "./pages/ourNetworkPage/OurNetworkPage";
import ContactUs from "./pages/contactUsPage/ContactUsPage";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<CategoryProductPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/quality" element={<OurQualityPage />} />
          <Route path="/network" element={<OurNetworkPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default AppRoutes;
