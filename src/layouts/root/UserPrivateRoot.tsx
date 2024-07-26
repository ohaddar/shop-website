import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import UserNav from "../../navigations/UserNav";

const UserPrivateRoot: React.FC = () => {
  return (
    <main>
      <UserNav />

      <Outlet />
      <Footer />
    </main>
  );
};

export default UserPrivateRoot;
