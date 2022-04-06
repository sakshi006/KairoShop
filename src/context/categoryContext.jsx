import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CategoryContext = createContext();

const useCategory = ()=> useContext(CategoryContext)

const CategoryProvider = ({children}) =>{


    const getCategoryProducts = async () =>{
        try{
            const response = await axios.get("/api/categories")
            setCategory(response.data.categories)
        }
        catch(err){
              console.error(err)
        }
    }

    useEffect(()=>{
        getCategoryProducts()
    },[])

    const [category,setCategory] = useState([]);

    return(
        <CategoryContext.Provider value={{category}}>{children}</CategoryContext.Provider>
    )
}

export {useCategory, CategoryProvider}