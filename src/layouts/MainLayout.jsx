import React from "react";
import TopHeader from "../components/shared/TopHeader";
import Header from "../components/shared/Header";
import Home from "../pages/home/Home";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";
import Footer from "../components/shared/Footer";

function MainLayout() {
  return (
    <div className="w-full bg-[#dfd6d0]  ">
      <TopHeader />
      <Header />
      <div className="w-full pb-10">
        <AppRoutes />
      </div>
      <Footer/>
    </div>
  );
}

export default MainLayout;
