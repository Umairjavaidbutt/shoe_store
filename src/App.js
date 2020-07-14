import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Products } from './components/Products';
import { ProductsDetails } from './components/ProductsDetails';
import { ProductsHome } from './components/ProductsHome';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="products" element={<Products/>}>
          <Route path="/" element={<ProductsHome/>}></Route>
          <Route path=":productId" element={<ProductsDetails/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
