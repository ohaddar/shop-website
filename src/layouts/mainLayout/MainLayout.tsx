import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <main>
      <Outlet />
      <Toaster />
    </main>
  );
};

export default MainLayout;
