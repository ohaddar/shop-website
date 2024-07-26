import React from "react";
import Header from "../header/Header";
import MainNav from "../../navigations/MainNav";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const Root: React.FC = () => {
  return (
    <main>
      <MainNav />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};
export default Root;
