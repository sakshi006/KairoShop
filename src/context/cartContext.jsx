import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducerFunction } from "../reducer/cartReducer";

const CartContext = createContext();

const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useReducer(cartReducerFunction, {
    cartList: [],
  });

  const getCartData = async () => {
    setCartProducts({ type: "API_REQUEST" });
    try {
      const response = await axios.get("/api/user/cart");
      setCartProducts({
        type: "ADD_TO_CART",
        payload: response.data.cart,
      });
    } catch (error) {
      setCartProducts({ type: "ERROR_HANDLE" });
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export { useCartContext, CartContextProvider };
