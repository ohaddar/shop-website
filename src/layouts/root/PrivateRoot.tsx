import React from "react";
import Root from "./Root";
import AdminRoot from "./AdminRoot";
import { Navigate } from "react-router-dom";

const PrivateRoot: React.FC = () => {
  const user = localStorage.getItem("user");
  const isAuth = user ? JSON.parse(user).role === "ADMIN" : false;
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return isAuth ? <AdminRoot /> : <Root />;
};

export default PrivateRoot;
