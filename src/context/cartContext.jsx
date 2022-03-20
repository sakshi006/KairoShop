import { createContext, useContext, useReducer } from "react";
import { cartReducerFunction } from "../reducer/cartReducer";

const CartContext = createContext();

const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useReducer(cartReducerFunction, {
    cartList: [],
  });

  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export { useCartContext, CartContextProvider };
