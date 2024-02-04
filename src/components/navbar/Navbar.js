import React from "react";
import "./Navbar.css";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-item">         
          <h1 className="shop-title">Shopping</h1>
        </div>
        <div className="nav-item">
          <div className="nav-list">
            <div className=""><Link to="/">Shop</Link> </div>
            <div className=""><Link to="/men">Men</Link> </div>
            <div className=""><Link to="/women">Women</Link> </div>
            <div className=""><Link to="/kid">Kids</Link> </div>
            <div className="shop-card">
              <MdShoppingCart />
              <span>0</span>
            </div>
            <div className="login-btn">
              <button>Login</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
