import React from 'react'
import { useCartContext } from '../../context/cartContext'


const CartPrice = () => {

  const {cartProducts} = useCartContext();
  console.log("CARTPRODUCTS", cartProducts)

  const cartTotalReducer = (prev,curr)=>prev+(curr.quantity*curr.originalPrice)
  const cartTotalAmount = cartProducts.cartList.reduce(cartTotalReducer,0);

  
  const itemInCartReducer = (prev,curr)=> prev+curr.quantity;
  const totalItemsInCart = cartProducts.cartList.reduce(itemInCartReducer,0)

  const totaldiscountReducer = (prev,curr) => prev+((curr.originalPrice-curr.price)*curr.quantity)
  const totaldiscount = cartProducts.cartList.reduce(totaldiscountReducer,0)

  return (
    <div className="cart-price-details  card-cart">
      <h3 className="price-details-head">Price Details</h3>
      <div className="two-items">
        <div className="grid-items"><p>Price ({totalItemsInCart} items)</p></div>
        <div className="grid-items"><p>Rs.{cartTotalAmount}</p></div>
        <div className="grid-items"><p>Discount</p></div>
        <div className="grid-items"><p>-Rs. {totaldiscount}</p></div>
        <div className="grid-items"><p>Delivery Charges</p></div>
        <div className="grid-items"><p>Rs. 199</p></div>
        <div className="grid-items"><h3 className="price-details-head">Total Amount</h3></div>
        <div className="grid-items"><h3 className="price-details-head">Rs. {cartTotalAmount-totaldiscount}</h3></div>
      </div>
      <p>You will save Rs. {totaldiscount} on this order!</p>
      <button className="btn cart-btn">Place Your Order</button>
    </div>
    
  )
}

export default CartPrice