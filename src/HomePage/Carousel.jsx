// Carousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productsData from "../assets/productsData";
import { useDispatch } from 'react-redux';
import { addToCart } from '../assets/Cartslice';
import { Link } from 'react-router-dom';



   

const Carousel = () => {
  const heroProducts = productsData.filter((p) => p.tag === "hero-product");

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,            // smoother transition
    slidesToShow: 1,        // show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
const dispatch = useDispatch();

const Addtocarthandler = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <section className="py-4 mt-5" style={{ backgroundColor: "#010b10ff" }}>
      <div className="container-fluid">
        <Slider {...settings}>
          {heroProducts.map((prods) => (
            <div key={prods.id}>
              {/* Centered container for each slide */}
              <div className="d-flex justify-content-center">
                <div
                  className="row align-items-center"
                  style={{ maxWidth: "1200px", width: "100%", minHeight: "500px" }}
                >
                  {/* Left Side: Text */}
                  <div className="col-lg-6 text-light">
                    <h1>{prods.title}</h1>
                    <h2 className="fw-bold">{prods.tagline}</h2>
                    <p className="fs-5 mb-2">
                      ₹{prods.finalPrice}{" "}
                      <span className="text-decoration-line-through text-light">
                        ₹{prods.originalPrice}
                      </span>
                    </p>
                    <button  className='btn btn-danger mx-3 mb-3'
                  onClick={() => Addtocarthandler(prods)}
                >Shop Now</button>
                  </div>

                  {/* Right Side: Image */}
                  <div className="col-lg-6 text-center">
                    <Link to={`/details/${prods.id}`}><img
                      src={prods.heroImage}
                      alt={prods.title}
                      className="img-fluid mx-auto d-block"
                      style={{ maxHeight: "400px" }}
                    /></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;