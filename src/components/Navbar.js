import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ImCart } from "react-icons/im";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Amazing Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarTogglerDemo01">
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link " + (isActive ? "active" : "")
              }
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link " + (isActive ? "active" : "")
              }
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link " + (isActive ? "active" : "")
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </div>
          <div className="navbar-collapse d-flex justify-content-end">
            <button className=" snipcart-checkout cart-button pe-5 ps-5">
              Cart <ImCart />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
