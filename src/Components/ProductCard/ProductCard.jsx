import React from "react";
import "./ProductCard.css";

import { AiTwotoneStar } from "react-icons/ai";

const ProductCard = ({
  item: {
    author,
    category,
    img,
    isBestSeller,
    name,
    originalPrice,
    price,
    rating,
    discount
  },
}) => {
  return (
    <div className="grid-item">
      <div className="card-ecom card-badge">
        {isBestSeller ? <span className="update-badge">BestSeller</span> : null}
        <span className="fav">
          <i className="fas fa-heart"></i>
        </span>
        <img className="product-card-image" src={img} alt={name} />
        <div className="product-detail">
          <strong>{name}</strong>
          <p>{author}</p>

          <div className="footer">
            <p className="price">
              Rs.{price}
              <span className="old-price">Rs.{originalPrice}</span>
              <span className="discount">{discount}</span>
            </p>
              <span className={rating>3.4?"green-rate rating":"red-rate rating"}>{rating}<AiTwotoneStar/></span>
          </div>
          <button className="btn cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;