import { Route, Routes } from "react-router-dom";
import CommonLayout from "./components/commonLayouts";
import HomePage from "./pages/homePage/HomePage";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default AppRoutes;
