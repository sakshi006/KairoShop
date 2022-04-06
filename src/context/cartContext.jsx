import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducerFunction } from "../reducer/cartReducer";

const CartContext = createContext();

const useCartContext = () => useContext(CartContext);


const CartContextProvider = ({ children }) => {
  let token = localStorage.getItem("token");

  console.log(token,"IN CART CONTEXT")
  const [cartProducts, setCartProducts] = useReducer(cartReducerFunction, {
    cartList: [],
  });

  const getCartData = async () => {
    try {
      const response = await axios.get("/api/user/cart", {
        headers: { authorization: token },
      });
      setCartProducts({
        type: "ADD_TO_CART",
        payload: response.data.cart,
      });
    } catch (error) {
      setCartProducts({ type: "ERROR_HANDLE" });
    }
  };

  const addToCart = async (item) => {
  
    const findIndex = cartProducts.cartList.findIndex(
      (prod) => prod.id === item.id
    );
    
console.log(findIndex)
    if (findIndex === -1) {
      try {
        const response = await axios.post(
          "/api/user/cart",
          { product: { ...item } },
          {
            headers: { authorization: token },
          }
        );
        setCartProducts({ type: "ADD_TO_CART", payload: response.data.cart });
      } catch (error) {
        console.error(error,"addToCart");
        setCartProducts({ type: "ERROR_HANDLE" })
      }
    } else {
      try {
        const response = await axios.delete(`/api/user/cart/${item.id}`, {
          headers: { authorization: token },
        });
        setCartProducts({ type: "ADD_TO_CART", payload: response.data.cart });
      } catch (error) {
        console.log(error,"addToCart");
        setCartProducts({ type: "ERROR_HANDLE" });
      }
    }
  };

  const incrementQty = async (item) => {
    try {
      const res = await axios.post(
        `/api/user/cart/${item.id}`,
        {
          action: { type: "increment" },
        },
        {
          headers: { authorization: token },
        }
      );
      setCartProducts({ type: "INCREMENT_QTY", payload: res.data.cart });
    } catch (error) {
      console.error(error,"incrementQty");
    }
  };

  const decrementQty = async (item) => {
    try {
      const res = await axios.post(
        `/api/user/cart/${item.id}`,
        {
          action: { type: "decrement" },
        },
        {
          headers: { authorization: token },
        }
      );
      setCartProducts({ type: "DECREMENT_QTY", payload: res.data.cart });
    } catch (error) {
      console.error(error,"decrementQty");
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <CartContext.Provider value={{ cartProducts, incrementQty,decrementQty, addToCart, setCartProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export { useCartContext, CartContextProvider };
