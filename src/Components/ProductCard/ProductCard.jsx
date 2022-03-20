import React from "react";
import { useCartContext } from "../../context/cartContext";
import "./ProductCard.css";
import { calcPercentage } from "../../Utils/discountCalculator";

import { AiTwotoneStar } from "react-icons/ai";

const ProductCard = ({ item }) => {
  const { cartProducts, setCartProducts } = useCartContext();

  return (
    <div className="grid-item">
      <div className="card-ecom card-badge">
        {item.isBestSeller ? (
          <span className="update-badge">BestSeller</span>
        ) : null}
        <span className="fav">
          <i className="fas fa-heart"></i>
        </span>
        <img className="product-card-image" src={item.img} alt={item.title} />
        <div className="product-detail">
          <strong>{item.title}</strong>
          <p>{item.author}</p>

          <div className="footer">
            <p className="price">
              Rs.{item.price}
              <span className="old-price">Rs.{item.originalPrice}</span>
              <span className="discount">
                {calcPercentage(item.price, item.originalPrice)}%{" "}
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
          {cartProducts.cartList.find((cartItem) => cartItem.id === item.id) ? (
            <button
              className="btn cart-remove cart-btn "
              onClick={() =>
                setCartProducts({ type: "REMOVE_FROM_CART", payload: item })
              }
            >
              Remove From Cart
            </button>
          ) : (
            <button
              className="btn cart-btn"
              onClick={() =>
                setCartProducts({ type: "ADD_TO_CART", payload: item })
              }
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
