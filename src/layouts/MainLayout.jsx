import React from "react";
import TopHeader from "../components/shared/TopHeader";
import Header from "../components/shared/Header";
import AppRoutes from "../routes/AppRoutes";
import Footer from "../components/shared/Footer";

function MainLayout() {
  return (
    <div className="w-full   ">
      <TopHeader />
      <Header />
      <div className="w-full ">
        <AppRoutes />
      </div>
      <Footer/>
    </div>
  );
}

export default MainLayout;
