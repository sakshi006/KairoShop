import React from "react";
import { useFilter } from "../../context/filterContext";
import "./Filter.css";

const Filter = () => {
  const {
    state: {
      sortBy,
      category: { Fiction, NonFiction, SelfHelp },
      price,
      BestSeller
    },
    dispatch,
  } = useFilter();
  return (
    <div className="filters">
      <div className="filter-heading">
        <h3 className="filter-head main">Filters</h3>
        <p onClick={()=>dispatch({type:"CLEAR"})} className="filter-head clear">Clear All</p>
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
              Price (Low-High)
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
             Price (High-Low)
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

        <div className="filter-category --bestSeller">
          <h3 className="filter-head">Best Sellers</h3>
          <div>
            <label htmlFor="bestseller">
              <input
                type="checkbox"
                id="bestseller"
                name="bestseller"
                value="bestseller"
                checked={BestSeller}
                onChange={() => dispatch({ type: "BEST_SELLER" })}
              />
              Best Seller
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
                onChange={() => dispatch({ type: "FICTION" })}
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
                onChange={() => dispatch({ type: "NON_FICTION" })}
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
                onChange={() => dispatch({ type: "SELF_HELP" })}
              />
              Self Help
            </label>
          </div>
        </div>
        {/* FILTER BY PRICE */}
        <div className="filter-category --price">
          <h3 className="filter-head">Price</h3>
      
          <input
            id="slider"
            type="range"
            list="tickmarks"
            step="350"
            value={price}
            min="50"
            max="1100"
            onChange={(e) =>
              dispatch({ type: "PRICE", price_value: e.target.value })
            }
          />
          <datalist id="tickmarks">
            <option value="50" label="0"></option>
            <option value="400" label="400"></option>
            <option value="750" label="750"></option>
            <option value="1100" label="1100"></option>
          </datalist>
          <div className="range-marker"><span>50</span><span>350</span><span>750</span><span>1100</span></div>
        </div>
      </form>
    </div>
  );
};

export default Filter;
