import React from "react";
import { Link } from "react-router-dom";
import { useCartContext ,useWishListContext} from "../../context";
import { calcPercentage } from "../../Utils";

const CartCard = ({ cartproduct }) => {
  const token = localStorage.getItem("token")
  const { decrementQty, addToCart, incrementQty  } = useCartContext();
  const { wishListState, addItemtowishlist } = useWishListContext();

  return (
    <div className="cart-component">
      <div className="card horizontal">
        <img className="card-img" src={cartproduct.img} alt="cardss" />
        <div className="product-detail">
          <p className="product-name">{cartproduct.title}</p>
          <p>{cartproduct.author}</p>
          <p className="price-cart">
            Rs.{cartproduct.price}
            <span className="old-price">Rs.{cartproduct.originalPrice}</span>
          </p>
          <span className="discount">
            Discount :
            {calcPercentage(cartproduct.price, cartproduct.originalPrice)}%
          </span>
          <div className="qty-monitor">
            <button
              className="btn qty-btn"
              onClick={() =>
               {if(cartproduct.qty>1)
              decrementQty(cartproduct)}
              }
            >
              -
            </button>
            <span className="qty-display">{cartproduct.qty}</span>
            <button
              className="btn qty-btn"
              onClick={() =>
                incrementQty(cartproduct)
              }
            >
              +
            </button>
          </div>
          <div className="footer">
            {wishListState.wishListArray.find(
              (item) => item.id === cartproduct.id
            ) ? (
              <Link className="link-to-wishlist" to="/wishlist">
                <button className="btn cart-btn flex-btn wishlist-btn">
                  <i className="fas fa-heart"></i>
                  <span>Go to Wishlist</span>
                </button>
              </Link>
            ) : (
              <button
                className="btn cart-btn flex-btn wishlist-btn"
                onClick={() =>
                  addItemtowishlist(cartproduct)
                }
              >
                <i className="fas fa-heart"></i>
                <span>Move to Wishlist</span>
              </button>
            )}
            <button
              className="btn cart-btn flex-btn remove-cart-btn"
              onClick={() =>
               token && addToCart(cartproduct)
              }
            >
              <i className="fas fa-shopping-cart"></i>{" "}
              <span>Remove from Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
