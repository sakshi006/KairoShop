import React from "react";
import { useFilter } from "../../context/filterContext";
import "./Filter.css";

const Filter = () => {
  const {
    state: {
      sortBy,
      category: { Fiction, NonFiction, SelfHelp },
    },
    dispatch,
  } = useFilter();
  return (
    <div className="filters">
      <div className="filter-heading">
        <h3 className="filter-head main">Filters</h3>
        <p className="filter-head clear">Clear</p>
      </div>
      <form className="filter-form">
        {/* SORT BY PRICE AND NAME  */}
        <div className="filter-category --Sortby">
          <h3 className="filter-head">Sort By</h3>
          <div>
            <label htmlFor="lowtohigh">
              <input
                type="radio"
                id="lowtohigh"
                name="sortBy"
                value="lowtohigh"
                checked={sortBy === "LOW_TO_HIGH"}
                onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
              />
              Low To High
            </label>
          </div>
          <div>
            <label htmlFor="hightolow">
              <input
                type="radio"
                id="hightolow"
                name="sortBy"
                value="hightolow"
                checked={sortBy === "HIGH_TO_LOW"}
                onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
              />
              High To Low
            </label>
          </div>
          <div>
            <label htmlFor="nameA-Z">
              <input
                type="radio"
                id="nameA-Z"
                name="sortBy"
                value="nameA-Z"
                checked={sortBy === "NAMEA-Z"}
                onChange={() => dispatch({ type: "NAMEA-Z" })}
              />
              Book Title (A-Z)
            </label>
          </div>
          <div>
            <label htmlFor="nameZ-A">
              <input
                type="radio"
                id="nameZ-A"
                name="sortBy"
                value="nameZ-A"
                checked={sortBy === "NAMEZ-A"}
                onChange={() => dispatch({ type: "NAMEZ-A" })}
              />
              Book Title (Z-A)
            </label>
          </div>
          <div>
            <label htmlFor="rating">
              <input
                type="radio"
                id="rating"
                name="sortBy"
                value="rating"
                checked={sortBy === "RATING"}
                onChange={() => dispatch({ type: "RATING" })}
              />
              Rating (High-Low)
            </label>
          </div>
        </div>

        {/* SORT BY CATEGORIES */}
        <div className="filter-category --category">
          <h3 className="filter-head">Category</h3>
          <div>
            <label htmlFor="fiction">
              <input
                type="checkbox"
                id="fiction"
                name="fiction"
                value="fiction"
                checked={Fiction}
                onChange={()=>dispatch({type:"FICTION"})}
              />
              Fiction
            </label>
          </div>
          <div>
            <label htmlFor="nonfiction">
              <input
                type="checkbox"
                id="nonfiction"
                name="nonfiction"
                value="nonfiction"
                checked={NonFiction}
                onChange={()=>dispatch({type:"NON_FICTION"})}
              />
              Non Fiction
            </label>
          </div>
          <div>
            <label htmlFor="selfhelp">
              <input
                type="checkbox"
                id="selfhelp"
                name="selfhelp"
                value="selfhelp"
                checked={SelfHelp}
                onChange={()=>dispatch({type:"SELF_HELP"})}
              />
              Self Help
            </label>
          </div>
         
        </div>

        {/* <div className="filter-category --price">
          <label htmlFor="price">
            <h3 className="filter-head">Price</h3>{" "}
          </label>
          <input
            type="range"
            name="price"
            id="price"
            min="0"
            max="500000"
            value="50"
          />
        </div>
        
        <div className="filter-category --Rating">
          <h3 className="filter-head">Rating</h3>
          <input type="radio" id="four" name="rating" value="4 Stars & above" />
          <label htmlFor="four">4 Stars & above</label>
          <input
            type="radio"
            id="three"
            name="rating"
            value="3 Stars & above"
          />
          <label htmlFor="three">3 Stars & above</label>
          <input type="radio" id="two" name="rating" value="2 Stars & above" />
          <label htmlFor="two">2 Stars & above</label>
          <input type="radio" id="one" name="rating" value="1 Stars & above" />
          <label htmlFor="one">1 Stars & above</label>
        </div> */}
      </form>
    </div>
  );
};

export default Filter;
