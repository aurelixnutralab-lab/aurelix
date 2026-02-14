import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CommonLayout from "./components/commonLayouts";

const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const CategoryProductPage = lazy(() => import("./pages/CategoryProductPage/CategoryProductPage"));
const AboutUsPage = lazy(() => import("./pages/aboutUsPage/AboutUsPage"));
const OurQualityPage = lazy(() => import("./pages/ourQualityPage/OurQualityPage"));
const OurNetworkPage = lazy(() => import("./pages/ourNetworkPage/OurNetworkPage"));
const ContactUs = lazy(() => import("./pages/contactUsPage/ContactUsPage"));

function AppRoutes() {
  return (
    <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
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
    </Suspense>
  );
}

export default AppRoutes;
