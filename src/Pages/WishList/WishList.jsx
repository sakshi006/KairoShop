import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useWishListContext } from "../../context";
import "./WishList.css";

export const WishList = () => {
  const { wishListState } = useWishListContext();
  return (
    <div className="content">
      {wishListState.wishListArray.length === 0 ? (
       <>
        <h1>No items in your Wishlist! Shop now :)</h1>
        <img className="responsive" src="https://images.unsplash.com/photo-1617142108319-66c7ab45c711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FkJTIwZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt = "sad-dog"/>
        <Link to="/productlist"><button
              className="btn cart-btn "
              
            >
             Add Products
            </button></Link>
        
        </>

      ) : (
        <>
          <h1 className="wishlist-heading">My Wishlist</h1>
          <div className="centered-wishlist">
            <div className="wishlist-grid">
              {wishListState.wishListArray.map((item) => {
                return <ProductCard key={item.id} item={item} />
})}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
