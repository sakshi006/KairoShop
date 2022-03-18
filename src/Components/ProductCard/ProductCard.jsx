import React from "react";
import "./ProductCard.css";

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
  console.log(author);
  return (
    <div className="grid-item">
      <div class="card-ecom card-badge">
        {isBestSeller ? <span class="update-badge">BestSeller</span> : null}
        <span class="fav">
          <i class="fas fa-heart"></i>
        </span>
        <img class="product-card-image" src={img} alt={name} />
        <div class="product-detail">
          <strong>{name}</strong>
          <p>{author}</p>

          <div class="footer">
            <p class="price">
              Rs.{price}
              <span class="old-price">Rs.{originalPrice}</span>
              <span class="discount">{discount}</span>
            </p>
          </div>
          <button class="btn cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;