import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import productsData from '../assets/productsData';
import { BsArrowRight } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addToCart } from '../assets/Cartslice'; // 👈 make sure this is imported

const Allproduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const heroProducts = productsData.slice(4, 15);

  // ✅ Moved inside component
  const Addtocarthandler = (product) => {
    dispatch(addToCart(product));
  };

  const handleBrowseClick = () => {
    navigate('/products');
  };

  return (
    <section style={{ backgroundColor: "#010b10ff", paddingTop: "80px"}}>
      <div>
        <h2 className='text-light d-flex justify-content-center'>Top Products</h2>
      </div>

      <div className="d-flex justify-content-center gap-4 py-2 category-menu text-light">
        <Link to="/products  text-light "style={{ textDecoration: 'none' }}><h6 className="m-0 px-3 py-1 rounded text-light">All</h6></Link>
        <Link to="/products"style={{ textDecoration: 'none' }}> <h6 className="m-0 px-3 py-1 rounded text-light">Headphone</h6></Link>
         <Link to="/products"style={{ textDecoration: 'none' }}><h6 className="m-0 px-3 py-1 rounded text-light">Earbuds</h6></Link>
        <Link to="/products"style={{ textDecoration: 'none' }}> <h6 className="m-0 px-3 py-1 rounded text-light">Earphones</h6></Link>
         <Link to="/products"style={{ textDecoration: 'none' }}><h6 className="m-0 px-3 py-1 rounded text-light">Neckbands</h6></Link>
      </div>

      <style>
        {`
          .category-menu h6 {
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .category-menu h6:hover {
            background-color: #d2170ad3;
            color: white;
          }
        `}
      </style>

      <div className="container">
        <div className="row" style={{ textDecoration: 'none' }}>
          {heroProducts.map((prodd, index) => (
            <div className="col-lg-3" key={index}>
              <div className="card mb-4" style={{
                backgroundColor: "#010b10ff",
                border: "1px solid white",
                borderRadius: "10px",
                textDecoration: 'none'
              }}>
                <Link to={`/details/${prodd.id}`}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={prodd.images[0]}
                      alt={prodd.title}
                      style={{
                        height: "200px",
                        objectFit: "contain",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        textDecoration: 'none'
                      }}
                    />
                  </div>

                  <div className='text-light p-3'style={{ textDecoration: 'none' }}>
                    <p>⭐{prodd.rateCount}</p>
                    <h6>{prodd.title}</h6>
                    <h6>{prodd.info}</h6>
                    <hr />
                    <div className='d-flex gap-3'>
                      <h5 className="m-1 fw-bold">₹{prodd.finalPrice}</h5>
                      {prodd.originalPrice && (
                        <h5 className="text-light text-decoration-line-through m-1">
                          ₹{prodd.originalPrice}
                        </h5>
                      )}
                    </div>
                  </div>
                </Link>

                {/* ✅ Pass prodd instead of empty state */}
                <button
                  className='btn btn-danger mx-3 mb-3'
                  onClick={() => Addtocarthandler(prodd)}
                >
                  Add Cart
                </button>
              </div>
            </div>
          ))}

          {/* filler cards */}
          {(() => {
            const remainder = heroProducts.length % 4;
            const fillers = remainder === 0 ? 0 : 4 - remainder;

            return Array.from({ length: fillers }).map((_, i) => (
              <div className="col-lg-3" key={`filler-${i}`}>
                <div
                  className="card mb-4 d-flex flex-column justify-content-center align-items-center"
                  style={{
                    backgroundColor: "#010b10ff",
                    border: "1px solid white",
                    borderRadius: "10px",
                    height: "435px",
                    cursor: "pointer"
                  }}
                >
                  <div className="text-center">
                    <h4 className="text-light mb-3">Explore Products</h4>
                    <button className="btn btn-light" onClick={handleBrowseClick}>
                      Browse All Products
                    </button>
                    <BsArrowRight size={30} color="white" className="mt-2" />
                  </div>
                </div>
              </div>
            ));
          })()}
        </div>
      </div>
    </section>
  );
};

export default Allproduct;