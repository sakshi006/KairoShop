import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filterReducer";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, {
    sortBy: "",
    category: { Fiction: "", "Non Fiction": "", "Self Help": "" },
    isBestSeller: "",
    price: 100,
    rating: "",
  });

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterProvider };
