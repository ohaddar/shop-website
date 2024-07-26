import React from "react";
import { Link } from "react-router-dom";

const AdminNav: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <Link to="add-product" className="nav-link">
          ADD New Product
        </Link>
        <Link to="product-list" className="nav-link">
          Products
        </Link>
        <Link to="users-list" className="nav-link">
          Users
        </Link>
      </div>
    </nav>
  );
};

export default AdminNav;
