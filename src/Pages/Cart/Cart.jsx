import React from "react";
import CartCard from "../../Components/CartCard/CartCard";
import CartPrice from "../../Components/CartCard/CartPrice";
import { useCartContext } from "../../context";
import "./Cart.css"

export const Cart = () => {
  const {cartProducts} = useCartContext();
  
  return (
    <div className="content">
    <h1 className="cart-heading">Your Cart</h1>

     <div className="cart-component">
     <CartPrice/>
     </div>
    <div className="cart-component">
  
    {cartProducts.cart.map((cartproduct)=>{
      return <CartCard key={cartproduct.id} cartproduct={cartproduct}/>
    })}

    </div>
  </div>
  );
};
