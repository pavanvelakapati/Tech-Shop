import React from 'react';
import Carousel from './Carousel';
import FutureProduct from './Furtureproduct'; // Consider renaming this file to 'Futureproduct.jsx'
import Navbar from './Navbar';
import TopProduct from './Topproduct';
import Footer from '../Footer';
import"./Navbar.css"

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <FutureProduct />
      <TopProduct />
      <Footer />
    </div>
  );
};

export default Homepage;