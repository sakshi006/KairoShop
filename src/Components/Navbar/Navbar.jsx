import React, { useState } from "react";
import { BsSearch, BsFillCartFill, BsFillSuitHeartFill } from "react-icons/bs";

import "./Navbar.css";

import { Link,useNavigate } from "react-router-dom";
import { useCartContext,useFilter,useWishListContext } from "../../context";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState();
  const {cartProducts} = useCartContext()
  const {wishListState} = useWishListContext();
  const {dispatch} = useFilter();

  const itemInCartReducer = (prev,curr)=> prev+curr.quantity;
  const totalItemsInCart = cartProducts.cartList.reduce(itemInCartReducer,0)
  

  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  const LogUserOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (


    <nav className="navbar">
      <h2 className="logo">
        <Link onClick={()=>dispatch({type:"CLEAR"})} to="/">KairoShop</Link>
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
        {!token ? (
            <>
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
             <Link to="/signup">
             <button className="btn">Signup</button>
           </Link></>
          ) : (
           <Link to="/"> <button onClick={LogUserOut} className="btn">LogOut</button></Link>
          )}
        <Link to="/productlist">
          <button className="btn">Shop</button>
        </Link>
        <Link to="/wishlist" className="child-ecom">
          <span className="badgeecom two">{ wishListState.wishListArray.length}</span>
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
