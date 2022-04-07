import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCartContext, useProductContext } from "../../context";
import { AiOutlineCheck,AiOutlineArrowLeft } from "react-icons/ai";
import "./SingleProduct.css";

const SingleProduct = () => {
  const { productid } = useParams();
  const { products } = useProductContext();
  const {cartProducts,addToCart} = useCartContext();
  const navigate = useNavigate();
  const token = localStorage.getItem("token")

  const singleProduct = products.find((item) => item._id === productid);


  return (
    <div className="single-product content">
      <h2>Get Your Free Audiobook</h2>
     <Link className="single-back" to="/productlist"> <p > <AiOutlineArrowLeft className="single-icon"/>Back to Browse Products</p></Link>
      <div className="single-product-main">
        <div className="single-left">
          <img src={singleProduct.img} alt="book" />
        </div>
        <div className="single-mid">
          <h2>{singleProduct.title}</h2>
          <h3>Timeless Lessons on Wealth, Greed, and Happiness</h3>
          <h4>~{singleProduct.author}</h4>
          <div className="single-details">
            <p>Written by : {singleProduct.author}</p>
            <p>Narrated by : {singleProduct.author}</p>
            <p>Length : 5 hrs and 48 mins</p>
            <p>Categories : {singleProduct.categoryName}</p>
          </div>
        </div>
        <div className="single-right">
          <div className="single-right-inside">
            <h5>Listen with Audible free trial</h5>
            <h4>₹199.00/month</h4>
            <button className="btn cart-btn">Free with 30-day trial</button>
            <p>
              <AiOutlineCheck />1 credit a month to use on any title to download
              and keep.
            </p>
            <p>
              <AiOutlineCheck />
              Listen to anything from the Plus Catalogue—thousands of Audible
              Originals, podcasts and audiobooks.
            </p>
            <p>
              <AiOutlineCheck />
              Download titles to your library and listen offline.
            </p>
            <p>
              <AiOutlineCheck />
              ₹199 per month after 30-day trial. Cancel anytime.
            </p>
          </div>
          <button onClick={() =>
               token ?  (addToCart(singleProduct)): navigate("/login")
              } className="btn cart-btn">
                 { cartProducts.cart.find(prod=> prod._id===singleProduct._id)?<p> Remove From Cart</p>:<p>Buy now for ₹{singleProduct.price}</p> }
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
