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

  const itemInCartReducer = (prev,curr)=> prev+curr.qty;
  const totalItemsInCart = cartProducts.cart.reduce(itemInCartReducer,0)
  

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
        {
          token?  <Link to="/wishlist" className="child-ecom">
          <span className="badgeecom two">{token ? wishListState.wishListArray.length : 0}</span>
          <BsFillSuitHeartFill className="nav-heart" />
        </Link> :
         <Link to="/login" className="child-ecom">
         <span className="badgeecom two">{token ? wishListState.wishListArray.length : 0}</span>
         <BsFillSuitHeartFill className="nav-heart" />
       </Link>
        }
       
      {token?  <Link to="/cart" className="child-ecom">
          <span className="badgeecom two">{token ? totalItemsInCart : 0}</span>
          <BsFillCartFill className="nav-cart" />
        </Link>:
          <Link to="/login" className="child-ecom">
          <span className="badgeecom two">{token ? totalItemsInCart : 0}</span>
          <BsFillCartFill className="nav-cart" />
        </Link>}
      </div>
    </nav>
  );
};

export default Navbar;
