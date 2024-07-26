import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import AdminHeader from "../header/AdminHeader";
import AdminNav from "../../navigations/AdminNav";

const AdminRoot: React.FC = () => {
  return (
    <main>
      <AdminHeader />
      <AdminNav />
      <Outlet />
      <Footer />
    </main>
  );
};

export default AdminRoot;
