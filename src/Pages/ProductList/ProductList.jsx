import React from "react";
import "./ProductList.css";
import {products} from "../../Assets/Data"
import ProductCard from "../../Components/ProductCard/ProductCard";
import Filter from "../../Components/Filter/Filter";
import { useFilter } from "../../context/filterContext";
import {sortProduct,categoryFilter,PriceFilter,BestSellerFunc} from "../../Utils"


export const ProductList = () => {
  const {
    state: { sortBy, category, price, BestSeller  },
  } = useFilter();

  
  const sortedProducts = sortProduct(products, sortBy);
  const categoryFilteredProducts = categoryFilter(sortedProducts,category)
  const bookBestSeller = BestSellerFunc(categoryFilteredProducts, BestSeller)
  const priceFilteredProducts = PriceFilter(bookBestSeller,price)

  return (
    <div className="  main-content-ecom">
      <div className=" product-grid">
        <Filter />
        <div className="products-page">
          <div className="products-head">
            Showing All Products <small>(Showing 13 products)</small>
          </div>
          <div className="product-list">
            {priceFilteredProducts.map((item) => {
              return <ProductCard key={item._id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
