import React from 'react'
import "./ProductList.css"
import {products} from "../../Assets/Data"
import ProductCard from '../../Components/ProductCard/ProductCard'
import Filter from '../../Components/Filter/Filter'

export const ProductList = () => {
  return (
    <div class="  main-content-ecom">
   
    <div class=" product-grid">
      <Filter/>
      <div class="products-page">
        <div class="products-head">Showing All Products <small>(Showing 13 products)</small></div>
        <div class="product-list">
          {products.map((item)=> {
            console.log("item in producklist",item)
            return(<ProductCard item={item} />)})}
       
        </div>
      </div>
    </div>
  </div>
  )
}
