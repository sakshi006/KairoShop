import React from 'react'
import "./ProductList.css"
import {products} from "../../Assets/Data"
import ProductCard from '../../Components/ProductCard/ProductCard'

export const ProductList = () => {
  return (
    <div class="  main-content-ecom">
    <nav class="navbar">
      <h2 class="logo"><a href="../Home.html">KairoShop</a></h2>
      <div class="input-container">
        <i class="fas fa-search icon"></i>
        <input
          class="input-field"
          type="text"
          placeholder="Search for something..."
        />
      </div>
      <div class="top-links"> <a href="../Authentication/Login.html"><button class="btn">Login</button></a>
        <a href="../Wishlist/Wishlist.html" class="child-ecom">
          <span class="badgeecom one">10</span>
          <i class="fas fa-heart"></i>
        </a>
        <a href="../Cart/Cart.html" class="child-ecom">
          <span class="badgeecom two">2</span>
          <i class="fas fa-shopping-cart"></i>
        </a>
      </div>
    </nav>

    <div class=" product-grid">
      <div class="filters">
        <div class="filter-heading">
          <h3 class="filter-head main">Filters</h3>
          <p class="filter-head clear">Clear</p>
        </div>
        <form class="filter-form">
          <div class="filter-category --price">
            <label for="price"><h3 class="filter-head">Price</h3> </label>
            <input
              type="range"
              name="price"
              id="price"
              min="0"
              max="500000"
              value="50"
            />
          </div>
          <div class="filter-category --category">
            <h3 class="filter-head">Category</h3>
            <input type="checkbox" id="men" name="men" value="men" />
            <label for="men">Men Clothing</label><br />
            <input type="checkbox" id="women" name="women" value="women" />
            <label for="women">Women Clothing</label>
          </div>
          <div class="filter-category --Rating">
            <h3 class="filter-head">Rating</h3>
            <input
              type="radio"
              id="four"
              name="rating"
              value="4 Stars & above"
            />
            <label for="four">4 Stars & above</label><br />
            <input
              type="radio"
              id="three"
              name="rating"
              value="3 Stars & above"
            />
            <label for="three">3 Stars & above</label> <br />
            <input
              type="radio"
              id="two"
              name="rating"
              value="2 Stars & above"
            />
            <label for="two">2 Stars & above</label><br />
            <input
              type="radio"
              id="one"
              name="rating"
              value="1 Stars & above"
            />
            <label for="one">1 Stars & above</label>
          </div>
          <div class="filter-category --Sortby">
            <h3 class="filter-head">Sort By</h3>
            <input
              type="radio"
              id="lowtohigh"
              name="sortby"
              value="Low to High"
            />
            <label for="lowtohigh">Low To High</label><br />
            <input
              type="radio"
              id="hightolow"
              name="sortby"
              value="High to Low"
            />
            <label for="hightolow">High To Low</label>
          </div>
        </form>
      </div>
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
