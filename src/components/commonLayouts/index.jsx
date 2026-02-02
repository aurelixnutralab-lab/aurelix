import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";

export default function CommonLayout() {
  return (
    <div className="flex flex-col min-h-dvh ">
      <div className="layout-header">
        <Header />
      </div>

      <div className="flex-1 layoutContainer">
        <Outlet />
      </div>

      <div className="mt-auto layout-footer">
        <Footer />
      </div>
    </div>
  );
}
