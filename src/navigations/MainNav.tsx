import React from "react";
import { Link } from "react-router-dom";

const MainNav: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Acceuil
        </Link>
        <Link to="/our-products" className="nav-link">
          Produits
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
        <Link to="/Account" className="nav-link">
          Espace Client
        </Link>
      </div>
    </nav>
  );
};

export default MainNav;
