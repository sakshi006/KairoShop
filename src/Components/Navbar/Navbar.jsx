import React, { useState } from "react";
import { BsSearch, BsFillCartFill, BsFillSuitHeartFill } from "react-icons/bs";

import "./Navbar.css";

import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState();
  const {cartProducts} = useCartContext()

  const itemInCartReducer = (prev,curr)=> prev+curr.quantity;
  const totalItemsInCart = cartProducts.cartList.reduce(itemInCartReducer,0)

  return (
    <nav className="navbar">
      <h2 className="logo">
        <Link to="/">KairoShop</Link>
      </h2>
      <div className="input-container">
        <BsSearch className="fas fa-search icon" />
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
          <BsFillSuitHeartFill className="nav-heart" />
        </Link>
        <Link to="/cart" className="child-ecom">
          <span className="badgeecom two">{totalItemsInCart}</span>
          <BsFillCartFill className="nav-cart" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
