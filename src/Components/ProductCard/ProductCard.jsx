import React from "react";
import { useCartContext, useWishListContext } from "../../context";
import "./ProductCard.css";
import { calcPercentage } from "../../Utils/discountCalculator";

import { AiTwotoneStar } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const { cartProducts, addToCart } = useCartContext();
  const { wishListState, addItemtowishlist } = useWishListContext();
  const token = localStorage.getItem("token");

  return (
    <div className="grid-item">
      <div className="card-ecom card-badge">
        {item.isBestSeller ? (
          <span className="update-badge">BestSeller</span>
        ) : null}
        {wishListState.wishListArray.find(
          (product) => product._id === item._id
        ) ? (
          token ? (
            <span className="fav">
              <i
                className="fas fa-heart red-heart"
                onClick={() =>
                  token ? addItemtowishlist(item) : navigate("/login")
                }
              ></i>
            </span>
          ) : (
            <span className="fav">
              <i
                className="fas fa-heart grey-heart"
                onClick={() => navigate("/login")}
              ></i>
            </span>
          )
        ) : (
          <span className="fav">
            <i
              className="fas fa-heart grey-heart"
              onClick={() =>
                token ? addItemtowishlist(item) : navigate("/login")
              }
            ></i>
          </span>
        )}
        <Link className="single-product-link" to={`/product/${item._id}`}>
          <img className="product-card-image" src={item.img} alt={item.title} />
        </Link>
        <div className="product-detail">
          <Link className="single-product-link" to={`/product/${item._id}`}>
            <strong>{item.title}</strong>
            <p>{item.author}</p>
          </Link>

          <div className="footer">
            <p className="price">
              Rs.{item.price}
              <span className="old-price">Rs.{item.originalPrice}</span>
              <span className="discount">
                {calcPercentage(item.price, item.originalPrice)}%
              </span>
            </p>
            <span
              className={
                item.rating > 3.4 ? "green-rate rating" : "red-rate rating"
              }
            >
              {item.rating}
              <AiTwotoneStar />
            </span>
          </div>
          {cartProducts.cart.find((cartItem) => cartItem._id === item._id) ? (
            token ? (
              <Link to="/cart">
                <button className="btn cart-remove cart-btn ">
                  Go To Cart
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="btn cart-btn ">Add To Cart</button>
              </Link>
            )
          ) : (
            <button
              className="btn cart-btn"
              onClick={() => (token ? addToCart(item) : navigate("/login"))}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
