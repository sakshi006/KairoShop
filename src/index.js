import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";

import {
  ProductContextProvider,
  FilterProvider,
  WishListProvider,
  CartContextProvider,
  CategoryProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <FilterProvider>
          <CartContextProvider>
            <WishListProvider>
              <CategoryProvider>
                <App />
              </CategoryProvider>
            </WishListProvider>
          </CartContextProvider>
        </FilterProvider>
      </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
