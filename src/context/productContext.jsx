import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"

const ProductContext = createContext();

const useProductContext = () => useContext(ProductContext)

const ProductContextProvider = ({children})=>{

    const [products,setProducts] = useState([]);
    const [loader, setLoader] = useState(true);
    

    const getProducts = async()=>{
        try{
            const responseFromServer = await axios.get("/api/products");
            setProducts(responseFromServer.data.products)
            setLoader(false)
        }catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
        getProducts()
    },[])

    return(
        <ProductContext.Provider value={{loader,products,setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export {useProductContext,ProductContextProvider}