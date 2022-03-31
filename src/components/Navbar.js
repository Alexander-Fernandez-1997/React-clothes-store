import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand">Amazing store</a>

        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
          <button className="ms-2 snipcart-checkout btn btn-outline-light">
            Cart
          </button>
        </form>
      </div>
    </nav>
  );
};
