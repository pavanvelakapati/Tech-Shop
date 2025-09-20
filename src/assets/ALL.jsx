import React, { useState } from "react";
import productsData from "./productsData";
import { addToCart } from "../assets/Cartslice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const ALL = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceLimit, setPriceLimit] = useState(20000);

  const Addtocarthandler = (product) => {
    dispatch(addToCart(product));
  };

  // Filtered products logic
  const filteredProducts = productsData.filter((prodd) => {
    const matchesSearch = prodd.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      category === "All" || prodd.category.toLowerCase() === category.toLowerCase();
    const matchesPrice = prodd.finalPrice <= priceLimit;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <section style={{ backgroundColor: "#010b10ff", minHeight: "100vh" }}>
      <div className="container-fluid">
        <div className="row">
          {/* Filters Left Side */}
          <div className="col-lg-3 text-light" style={{ marginTop: "100px" }}>
            <h4>Filters</h4>
            <hr />

            {/* Search Bar */}
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* Categories */}
            <h5>Categories</h5>
            <div className="d-flex flex-column gap-2 mb-3">
              {["All", "Headphones", "Earbuds", "Earphones", "Neckbands"].map((cat) => (
                <button
                  key={cat}
                  className={`btn ${category === cat ? "btn-danger" : "btn-outline-light"}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Price Filter */}
            <h5>Price (Max: ₹{priceLimit})</h5>
            <input
              type="range"
              min="0"
              max="20000"
              value={priceLimit}
              onChange={(e) => setPriceLimit(Number(e.target.value))}
              className="form-range"
            />
          </div>

          {/* Products Right Side */}
          <div className="col-lg-9" style={{ marginTop: "100px" }}>
            <div className="row">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((prodd) => (
                  <div className="col-lg-4 mb-4" key={prodd.id}>
                    <div
                      className="card h-100"
                      style={{
                        backgroundColor: "#010b10ff",
                        border: "1px solid white",
                        borderRadius: "10px",
                      }}
                      
                    >
                      
                      <Link to={`/details/${prodd.id}`}>
                        <img
                          src={prodd.images[0]}
                          alt={prodd.title}
                          style={{
                            height: "200px",
                            objectFit: "contain",
                            borderTopLeftRadius: "10px",
                            borderTopRightRadius: "10px",
                            display: "block",
                            margin: "0 auto",
                          }}
                        />
                        <div className="text-light p-2">
                          <p>⭐{prodd.rateCount}</p>
                          <h6>{prodd.title}</h6>
                          <h6>{prodd.info}</h6>
                          <hr />
                          <div className="d-flex gap-3">
                            <h5 className="m-1 fw-bold">₹{prodd.finalPrice}</h5>
                            {prodd.originalPrice && (
                              <h5 className="text-light text-decoration-line-through m-1">
                                ₹{prodd.originalPrice}
                              </h5>
                            )}
                          </div>
                        </div>
                      </Link>
                      <button
                        className="btn btn-danger m-2"
                        onClick={() => Addtocarthandler(prodd)}
                      >
                        Add Cart
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-light d-flex align-items-center justify-content-center">😒No products found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
   <Footer/>
};

export default ALL;