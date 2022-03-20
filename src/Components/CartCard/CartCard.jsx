import React from 'react'
import { useCartContext } from '../../context/cartContext'
import { calcPercentage } from '../../Utils'

const CartCard = ({cartproduct}) => {
    const {setCartProducts} = useCartContext()
  return (
    <div className="cart-component">
    <div className="card horizontal">
      <img
        className="card-img"
        src={cartproduct.img}
        alt="cardss"
      />
      <div className="product-detail">
        <p className="product-name">{cartproduct.title}</p>
        <p>{cartproduct.author}</p>
        <p className="price-cart">
          Rs.{cartproduct.price}
          <span className="old-price">Rs.{cartproduct.originalPrice}</span>
        </p>
        <span className="discount">Discount :  {calcPercentage(cartproduct.price, cartproduct.originalPrice)}%</span>
        <div className="qty-monitor">
          <button className="btn qty-btn" onClick={()=>setCartProducts({type:"DECREMENT_QTY",payload:cartproduct})}>-</button>
          <span className="qty-display">{cartproduct.quantity}</span>
          <button className="btn qty-btn" onClick={()=>setCartProducts({type:"INCREMENT_QTY",payload:cartproduct})}>+</button>
        </div>
        <div className="footer">
          <button className="btn cart-btn">
            <i className="fas fa-heart"></i>Move to Wishlist
          </button>
          <button className="btn cart-btn"  onClick={()=>setCartProducts({type:"REMOVE_FROM_CART",payload:cartproduct})}>
            <i className="fas fa-shopping-cart" ></i> Remove from Cart
          </button>
        </div>
      </div>
    </div>

  </div>
  )
}

export default CartCard