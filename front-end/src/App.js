import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Category from './components/Category';
import Product from './components/Product';
import Home from './components/Home';
import ViewCate from './components/ViewCate';
import DisplayProdct from './components/DisplayProdct';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/ViewCate" element={<ViewCate />} />
        <Route path="/productview" element={<DisplayProdct />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
