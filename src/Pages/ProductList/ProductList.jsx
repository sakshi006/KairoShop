import React from "react";
import "./ProductList.css";
import {products} from "../../Assets/Data"
import ProductCard from "../../Components/ProductCard/ProductCard";
import Filter from "../../Components/Filter/Filter";
import { useFilter } from "../../context/filterContext";

import { sortProduct } from "../../Utils/Sort";
import { categoryFilter } from "../../Utils/Category";

export const ProductList = () => {
  const {
    state: { sortBy, category },
  } = useFilter();

  
  const sortedProducts = sortProduct(products, sortBy);
  const categoryFilteredProducts = categoryFilter(sortedProducts,category)

  return (
    <div className="  main-content-ecom">
      <div className=" product-grid">
        <Filter />
        <div className="products-page">
          <div className="products-head">
            Showing All Products <small>(Showing 13 products)</small>
          </div>
          <div className="product-list">
            {categoryFilteredProducts.map((item) => {
              return <ProductCard key={item._id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
