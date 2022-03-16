import React, { useState } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchValue,setSearchValue] = useState();
  return (
    <nav className="navbar">
      <h2 className="logo">
        <Link to="/">KairoShop</Link>
      </h2>
      <div className="input-container">
        <i className="fas fa-search icon"></i>
        <input
          className="input-field"
          type="text"
          value={searchValue}
          placeholder="Search for something..."
          onChange={(e)=>setSearchValue(e.target.value)}
        />
      </div>
      <div className="top-links">
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
        <Link to="/wishlist" className="child-ecom">
          <span className="badgeecom one">10</span>
          <i className="fas fa-heart"></i>
        </Link>
        <Link to="/cart" className="child-ecom">
        <span className="badgeecom two">2</span>
          <i className="fas fa-shopping-cart"></i>
        </Link>

     
      </div>
    </nav>
  );
};

export default Navbar;
