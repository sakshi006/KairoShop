import React from "react";
import { Link } from "react-router-dom";
import { useCartContext ,useWishListContext} from "../../context";
import { calcPercentage } from "../../Utils";

const CartCard = ({ cartproduct }) => {
  const { setCartProducts } = useCartContext();
  const { wishListState, setWishListState } = useWishListContext();

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
            Discount :{" "}
            {calcPercentage(cartproduct.price, cartproduct.originalPrice)}%
          </span>
          <div className="qty-monitor">
            <button
              className="btn qty-btn"
              onClick={() =>
                setCartProducts({ type: "DECREMENT_QTY", payload: cartproduct })
              }
            >
              -
            </button>
            <span className="qty-display">{cartproduct.quantity}</span>
            <button
              className="btn qty-btn"
              onClick={() =>
                setCartProducts({ type: "INCREMENT_QTY", payload: cartproduct })
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
                  setWishListState({
                    type: "ADD_TO_WISHLIST",
                    payload: cartproduct,
                  })
                }
              >
                <i className="fas fa-heart"></i>
                <span>Move to Wishlist</span>
              </button>
            )}
            <button
              className="btn cart-btn flex-btn remove-cart-btn"
              onClick={() =>
                setCartProducts({
                  type: "REMOVE_FROM_CART",
                  payload: cartproduct,
                })
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
