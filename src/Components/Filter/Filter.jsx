import React from 'react'
import "./Filter.css"

const Filter = () => {
  return (
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
  )
}

export default Filter