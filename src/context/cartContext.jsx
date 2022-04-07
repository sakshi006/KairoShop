import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducerFunction } from "../reducer/cartReducer";

const CartContext = createContext();

const useCartContext = () => useContext(CartContext);


const CartContextProvider = ({ children }) => {
  let token = localStorage.getItem("token");
  const [cartProducts, setCartProducts] = useReducer(cartReducerFunction, {
    cart: [],
    loading:false
  }); 

  const getCartData = async () => {
    setCartProducts({type:"API_REQUEST"});
    try {
      const response = await axios.get("/api/user/cart", {
        headers: { authorization: token },
      });
      setCartProducts({
        type: "ADD_TO_CART",
        payload: response.data.cart,
        loading:false,
      });
    } catch (error) {
      setCartProducts({ type: "ERROR_HANDLE" });
    }
  };

  const addToCart = async (item) => {
    setCartProducts({type:"API_REQUEST"});
    const findIndex = cartProducts.cart.findIndex(
      (prod) => prod._id === item._id
    );
    
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
        console.error(error.response.data,"addToCarttryblockif");
        setCartProducts({ type: "ERROR_HANDLE" })
      }
    } else {
      try {
        const response = await axios.delete(`/api/user/cart/${item._id}`, {
          headers: { authorization: token },
        });
        setCartProducts({ type: "ADD_TO_CART", payload: response.data.cart });
      } catch (error) {
        console.error(error.response.data);
        setCartProducts({ type: "ERROR_HANDLE" });
      }
    }
  };

  const incrementQty = async (item) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${item._id}`,
        {
          action: { type: "increment" },
        },
        {
          headers: { authorization: token },
        }
      );
      setCartProducts({ type: "INCREMENT_QTY", payload: response.data.cart });
    } catch (error) {
      console.error(error,"incrementQty");
    }
  };

  const decrementQty = async (item) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${item._id}`,
        {
          action: { type: "decrement" },
        },
        {
          headers: { authorization: token },
        }
      );
      setCartProducts({ type: "DECREMENT_QTY", payload: response.data.cart });
    } catch (error) {
      console.error(error,"decrementQty");
    }
  };

  useEffect(() => {
    getCartData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CartContext.Provider value={{ cartProducts, incrementQty,decrementQty, addToCart, setCartProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export { useCartContext, CartContextProvider };
