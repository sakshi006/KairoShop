import React from 'react'
import { useCartContext } from '../../context'


const CartPrice = () => {

  const {cartProducts} = useCartContext();

  const cartTotalReducer = (prev,curr)=>prev+(curr.qty*curr.originalPrice)
  const cartTotalAmount = cartProducts.cart.reduce(cartTotalReducer,0);
  
  const itemInCartReducer = (prev,curr)=> prev+curr.qty;
  const totalItemsInCart = cartProducts.cart.reduce(itemInCartReducer,0)

  const totaldiscountReducer = (prev,curr) => prev+((curr.originalPrice-curr.price)*curr.qty)
  const totaldiscount = cartProducts.cart.reduce(totaldiscountReducer,0)

  const discountedPriceReducer = (prev,curr)=> prev+(curr.qty*curr.price)
  const discountedPrice = cartProducts.cart.reduce(discountedPriceReducer,0)

  return (
    <div className="cart-price-details  card-cart">
      <h3 className="price-details-head">Price Details</h3>
      <div className="two-items">
        <div className="grid-items"><p> Original Price ({totalItemsInCart} items)</p></div>
        <div className="grid-items"><p>Rs.{cartTotalAmount}</p></div>
        <div className="grid-items"><p>Total Discount</p></div>
        <div className="grid-items"><p>-Rs. {totaldiscount}</p></div>
        <div className="grid-items"><p>Discounted Price</p></div>
        <div className="grid-items"><p>Rs. {discountedPrice}</p></div>
        <div className="grid-items"><p>Delivery Charges</p></div>
        <div className="grid-items"><p>Free</p></div>
        <div className="grid-items"><h3 className="price-details-head">Total Amount</h3></div>
        <div className="grid-items"><h3 className="price-details-head">Rs. {cartTotalAmount-totaldiscount}</h3></div>
      </div>
      <p>You will save Rs. {totaldiscount} on this order!</p>
      <button className="btn cart-btn">Place Your Order</button>
    </div>
    
  )
}

export default CartPrice