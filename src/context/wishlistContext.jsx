import { createContext, useContext, useReducer } from "react";
import { wishListReducer } from "../reducer/wishListReducer";

const wishListContext = createContext();

const useWishListContext = () => useContext(wishListContext);


const WishListProvider = ({ children }) => {
    const [wishListState, setWishListState] = useReducer(wishListReducer, { wishListArray: [] });

    return (
        <wishListContext.Provider value={{ wishListState, setWishListState }}>
            {children}
        </wishListContext.Provider>
    )
}

export { useWishListContext, WishListProvider };