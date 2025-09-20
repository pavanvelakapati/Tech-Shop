import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#010b10ff", color: "white" , height:"300px"}} className="pt-5 pb-4">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-3 mb-4">
            <h6>About Tech Shop</h6>
            <p style={{ fontSize: "14px", marginBottom: "0" }}>
              Your one-stop store for the latest electronics and accessories. Quality products at best prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h6>Quick Links</h6>
            <ul className="list-unstyled" style={{ fontSize: "14px", paddingLeft: 0 }}>
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/all" className="text-light text-decoration-none">Products</Link></li>
              <li><Link to="/cart" className="text-light text-decoration-none">Cart</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="col-md-3 mb-4">
            <h6>Customer Support</h6>
            <ul className="list-unstyled" style={{ fontSize: "14px", paddingLeft: 0 }}>
              <li><Link to="/faq" className="text-light text-decoration-none">FAQ</Link></li>
              <li><Link to="/returns" className="text-light text-decoration-none">Returns</Link></li>
              <li><Link to="/shipping" className="text-light text-decoration-none">Shipping</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-4">
            <h6>Follow Us</h6>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-light"><BsFacebook size={20} /></a>
              <a href="#" className="text-light"><BsTwitter size={20} /></a>
              <a href="#" className="text-light"><BsInstagram size={20} /></a>
              <a href="#" className="text-light"><BsYoutube size={20} /></a>
            </div>
          </div>

        </div>

        <hr style={{ borderColor: "rgba(255,255,255,0.2)", margin: "1rem 0" }} />

        <div className="text-center" style={{ fontSize: "14px", marginTop: "0.5rem" }}>
          &copy; {new Date().getFullYear()} Tech Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

