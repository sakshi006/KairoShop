import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import  {Home, Login, WishList, Cart, ProductList}  from "./Pages"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/mock" element={<Mockman/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
