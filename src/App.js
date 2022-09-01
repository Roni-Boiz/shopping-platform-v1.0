import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/ProductList";
import ProductView from "./components/ProductView";
import ProductList from "./components/ProductList";

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
          <Route exact path="/productView" element={<ProductView/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>  
  );
}

export default App;
