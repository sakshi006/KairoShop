import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"

const ProductContext = createContext();

const useProductContext = () => useContext(ProductContext)

const ProductContextProvider = ({children})=>{

    const [products,setProducts] = useState([]);

    const getProducts = async()=>{
        try{
            const responseFromServer = await axios.get("/api/products");
            // console.log(responseFromServer.data)
            setProducts(responseFromServer.data.products)
        }catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
        getProducts()
    },[])

    return(
        <ProductContext.Provider value={{products,setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export {useProductContext,ProductContextProvider}