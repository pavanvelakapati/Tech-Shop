import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from './productsData';
import { useDispatch } from 'react-redux';
import { addToCart } from '../assets/Cartslice';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const Addtocarthandler = (product) => {
      dispatch(addToCart(product));
    };

  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) {
    return <h4 className="text-danger">Product not found</h4>;
  }

  return (
    <section style={{ backgroundColor: "#010b10ff", paddingTop: "80px" }}>
      <div className="container py-5 " style={{ backgroundColor: "#010b10ff", paddingTop: "80px" }}>
        <h2 className='text-light d-flex justify-content-center '>{product.title}</h2>
        <div className="card mb-3" style={{
          backgroundColor: "#010b10ff", paddingTop: "80px", border: "1px solid white",
          borderRadius: "10px"
        }}>
          <div className="row">
            <div className="col-lg-6 mb-5" style={{ display: "flex", justifyContent: "center", }}>
              <img src={product.images[0]} alt={product.title} style={{ height: "400px", objectFit: "contain" }} />
            </div>
            <div className="col-lg-6 text-light ">
              <h6 >{product.title}</h6>
              <h6>{product.info}</h6>

              <p>⭐⭐⭐⭐|{product.ratings}  Ratings</p><hr />
              <div className='d-flex gap-3'>
                <h2 className=" fw-bold">₹{product.finalPrice}</h2>
                {product.originalPrice && (
                  <h6 className="text-light text-decoration-line-through mt-3 g-3">
                    ₹{product.originalPrice}
                  </h6>
                )}
              </div>
              <h6 className='text-success'>You save ₹ 2000 (25%) </h6>
              <h6>(inclusive for all tax)</h6><hr />
              <h5>Offer and Discounts</h5>
              <div className='d-flex gap-3'>
                <p style={{ border: "1px solid white" }}>No Cost EMI For Credit Card</p>
                <p style={{ border: "1px solid white" }}>Pay Later & Avail Cashback</p>
              </div>
              <button className="btn btn-danger m-3" onClick={() => Addtocarthandler(product)}>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;