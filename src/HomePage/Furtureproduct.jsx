import React from 'react'
import productsData from '../assets/productsData';
import { Link } from 'react-router-dom';


const Furtureproduct = () => {
  const featuredproduct = productsData.filter((p) => p.tag === "featured-product");
  return (
    <section className="py-5" style={{ backgroundColor: "#010b10ff" }}>
      <div><h2 className='m-5 text-light d-flex justify-content-center ' >Featureproduct</h2></div>
      <div className="container-fluid ">
        <div className="d-flex justify-content-center overflow-auto gap-5 p-5"style={{ textDecoration: 'none' }}>
          {featuredproduct.map((prodd) => (
            <div
              key={prodd.id}
              className="product-card text-white p-3 rounded shadow-sm"
              style={{
                minWidth: "220px", // ensures cards don’t shrink too small
                transition: "transform 0.3s ease",
              }}
            >
              <Link to={`/details/${prodd.id}`} style={{ textDecoration: 'none' }}className=" text-light">
              <img
                src={prodd.images[0]}
                alt={prodd.title}
                className="img-fluid mb-3"
                style={{ maxHeight: "200px", objectFit: "contain", textDecoration: 'none'  }}
              />
              <h6 className="text-truncate">{prodd.title}</h6>
              <p className="mb-1 fw-bold"style={{ textDecoration: 'none' }}>₹{prodd.finalPrice}</p>

              {prodd.originalPrice && (
                <p className=" text-light text-decoration-line-through mb-0">
                  ₹{prodd.originalPrice}
                </p>
              )}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
  .product-card:hover {
    transform: scale(1.25);
  }
`}
      </style>


    </section>

  )
}

export default Furtureproduct