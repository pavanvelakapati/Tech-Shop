// src/pages/Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeFromCart } from "../assets/Cartslice";
import Footer from "../Footer";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // calculate total
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.finalPrice * item.quantity,
    0
  );

  return (
    <section className="py-5" style={{ backgroundColor: "#010b10ff", minHeight: "100vh" }}>
      <div className="container text-light">
        <h2 className="mb-4 d-flex align-items-center justify-content-center">🛒 Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="mb-4 d-flex align-items-center justify-content-center">Your cart is empty</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center justify-content-between border-bottom py-4"
              >
                {/* Product Image */}
                <div className="d-flex align-items-center gap-4">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    style={{ width: "100px", height: "100px", objectFit: "contain" }}
                  />
                  <div>
                    <h5 className="mb-1">{item.title}</h5>
                    <p className="mb-0 fs-5">₹{item.finalPrice}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="d-flex align-items-center gap-3">
                  <button
                    className="btn btn-outline-light fs-5 px-3"
                    onClick={() => dispatch(decrement(item.id))}
                  >
                    -
                  </button>
                  <span className="fs-5">{item.quantity}</span>
                  <button
                    className="btn btn-outline-light fs-5 px-3"
                    onClick={() => dispatch(increment(item.id))}
                  >
                    +
                  </button>
                </div>

                {/* Subtotal */}
                <h5 className="mb-0">₹{item.finalPrice * item.quantity}</h5>

                {/* Remove */}
                <button
                  className="btn btn-danger px-3"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total */}
            <div className="text-end mt-5">
              <h3>Total: ₹{totalAmount}</h3>
              {/* <button className="btn btn-success btn-lg mt-3">
                Proceed to Checkout
              </button> */}
            </div>
          </>
        )}
         <Footer/>
      </div>
    </section>
  );
};

export default Cart;