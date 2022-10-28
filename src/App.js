import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./components/Product";
import ProductView from "./components/ProductView";
import ProductList from "./components/ProductList";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart"
import SellItems from "./components/SellItems";
import Profile from "./components/Profile";
import TrackOrders from "./components/TrackOrders";

function App() {

  const [search, setSearch] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    console.log("Process the search")
  }
  return (
    <>
      <Navbar 
        term={search} 
        handleChange={(value) => setSearch(value)} 
        handleSearch = {e => handleSearch(e)} 
      />
      <br />
      {/* Term is : {search} */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProductList/>} />
          <Route exact path="/ProductList/" element={<ProductList/>} />
          <Route exact path="/ProductView/:id" element={<ProductView/>} />
          <Route exact path="/SignIn" element={localStorage.getItem("token") ==='success' ?  <ProductList/> : <SignIn/>   } />
          <Route exact path="/SignUp" element={localStorage.getItem("token") ==='success' ?  <ProductList/> : <SignUp/>   }  />
          <Route exact path="/Cart" element={<Cart/>} />
          <Route exact path="/Profile" element={<Profile/>} />
          <Route exact path="/TrackOrders" element={<TrackOrders/>} />
          <Route exact path="/SellItems" element={<SellItems/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>  
  );
}

export default App;
