import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./App.jsx";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
    {/* </Provider> */}
  </StrictMode>,
);
