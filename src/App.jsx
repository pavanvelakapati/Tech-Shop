// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/HomePage/Navbar';
import Home from '../src/HomePage/Homepage';
import ALL from '../src/assets/ALL';
import Details from './assets/Details';
import Popup from './assets/Popup';
import Cart from './assets/Cart'; 
  

function App() {
  return (
    <>
      <Navbar />
      <Popup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ALL />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      
    </>
  );
}

export default App;