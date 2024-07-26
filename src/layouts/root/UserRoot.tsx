import React from "react";
import Root from "./Root";
import { Navigate } from "react-router-dom";
import UserPrivateRoot from "./UserPrivateRoot";

const UserRoot: React.FC = () => {
  const user = localStorage.getItem("user");
  const userAuth = user ? JSON.parse(user).role === "USER" : false;
  if (!userAuth) {
    return <Navigate to="/" />;
  }
  return userAuth ? <UserPrivateRoot /> : <Root />;
};

export default UserRoot;
