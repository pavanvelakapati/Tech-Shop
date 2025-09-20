import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BsSearch, BsCart, BsPerson } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import cart from "../assets/Cart";
import ALL from '../assets/ALL';

const Navbar = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/products'); // Navigate to ALL products page
  };

  return (
    <nav className="navbar fixed-top" style={{ backgroundColor: "#010b10ff" }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex gap-3">
          <Link className="navbar-brand text-light" to="/">Tech Shop</Link>
          <Link className="navbar-brand text-light" to="/">Home</Link>
        </div>

        <div className="d-flex align-items-center gap-3">
          {/* Search Icon */}
          <BsSearch
            size={20}
            color="white"
            style={{ cursor: 'pointer' }}
            onClick={handleSearchClick}
          />

          {/* Profile / Login */}
          <div className="cart-container" style={{ backgroundColor: "#010b10ff" }}>
            <BsPerson size={22} color="white" style={{ cursor: "pointer" }} />
            <div className="cart-tooltip">
              <strong>Hello</strong><hr />
              <p style={{ fontSize: "12px" }}>Access your account and manage orders</p>
              <button
                type="button"
                className="btn btn-outline-light btn-sm btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login
              </button>
            </div>
          </div>

          {/* Cart */}
          <Link to={"/cart"}>
            <BsCart size={22} color="white" style={{ cursor: 'pointer' }} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;