import React from "react";
import { Link } from "react-router-dom";

const UserNav: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <Link to="our-products" className="nav-link">
          Produits
        </Link>
        <Link to="contact" className="nav-link">
          Contact
        </Link>
        <Link to="profile" className="nav-link">
          Your Profile
        </Link>
        <Link to="commandes" className="nav-link">
          Your Commandes
        </Link>
      </div>
    </nav>
  );
};

export default UserNav;
