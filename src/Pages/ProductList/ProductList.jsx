import React from "react";
import "./ProductList.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Filter from "../../Components/Filter/Filter";
import { useFilter } from "../../context/filterContext";
import {sortProduct,categoryFilter,PriceFilter,BestSellerFunc} from "../../Utils"
import { useProductContext } from "../../context/productContext";


export const ProductList = () => {
  const {
    state: { sortBy, category, price, BestSeller  },
  } = useFilter();
  const {products} = useProductContext();

// console.log(products.length)
  
  // const sortedProducts = sortProduct(products, sortBy);
  // const categoryFilteredProducts = categoryFilter(products,category)
  // const bookBestSeller = BestSellerFunc(categoryFilteredProducts, BestSeller)
  // const priceFilteredProducts = PriceFilter(bookBestSeller,price)
  // const sortedProductsFinal = sortProduct(priceFilteredProducts, sortBy);


  const productsListFinal = sortProduct(PriceFilter(BestSellerFunc(categoryFilter([...products],category),BestSeller),price),sortBy)

  return (
    <div className="  main-content-ecom">
      <div className=" product-grid">
        <Filter />
        <div className="products-page">
          <div className="products-head">
            Showing All Products <small>( {productsListFinal.length} Products)</small>
          </div>
          <div className="product-list">
            {productsListFinal.map((item) => {
              return <ProductCard key={item._id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
