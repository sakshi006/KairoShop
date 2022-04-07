import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { wishListReducer } from "../reducer/wishListReducer";

const wishListContext = createContext();

const useWishListContext = () => useContext(wishListContext);

const WishListProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const [wishListState, setWishListState] = useReducer(wishListReducer, {
    wishListArray: [],
    loading:false
  });


  const getWishlist = async () => {
    setWishListState({type:"API_REQUEST"})
   if(token){
    try {
        const response = await axios("/api/user/wishlist", {
          headers: { authorization: token },
        });
        setWishListState({
          type: "ADD_TO_WISHLIST", 
          payload: response.data.wishlist,
          loading:false,
        });
      } catch (err) {
        console.error(err, "getwishlist");
        setWishListState({type:"ERROR_HANDLE"})
      }
   }
  };

  const addItemtowishlist = async (item) => {
    setWishListState({type:"API_REQUEST"})
    const currIndex = wishListState.wishListArray.findIndex(
      (prod) => prod._id === item._id
    );

    if (currIndex === -1) {
      try {
        const response = await axios.post(
          "/api/user/wishlist",
          {
            product: { ...item },
          },
          {
            headers: { authorization: token },
          }
        );
        setWishListState({
          type: "ADD_TO_WISHLIST",
          payload: response.data.wishlist,
        });
      } catch (err) {
        setWishListState({type:"ERROR_HANDLE"})
        console.error(err.response.data, "inaddingtowishlist");
      }
    } else {
      try {
        const response = await axios.delete(`/api/user/wishlist/${item._id}`, {
          headers: { authorization: token },
        });
        setWishListState({
          type: "ADD_TO_WISHLIST",
          payload: response.data.wishlist,
        });
      } catch (err) {
        console.error(err.response.data, "indelete");
        setWishListState({type:"ERROR_HANDLE"})
      }
    }
  };

  useEffect(() => {
    getWishlist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <wishListContext.Provider
      value={{ wishListState, setWishListState, addItemtowishlist }}
    >
      {children}
    </wishListContext.Provider>
  );
};

export { useWishListContext, WishListProvider };
