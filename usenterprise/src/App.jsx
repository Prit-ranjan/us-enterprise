// src/App.jsx
import React, { useState } from "react";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import ProductCarousel from "./components/ProductCarousel";
import "./App.css";

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => setIsOpen(!isOpen);
  
    return (
      <nav className="nav-bar">
        <div className="nav-container">
          <div className="nav-logo">US ENTERPRISE</div>
  
          <button
            className={`nav-toggle ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
  
          <ul className={`nav-list ${isOpen ? "nav-list-open" : ""}`}>
            <li><a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#products" className="nav-link" onClick={() => setIsOpen(false)}>Products</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }

export default function App() {
  return (
    <div className="app-container">
      <Navigation />

      {/* <header className="app-header" id="home">
        <h1 className="app-title">US ENTERPRISE</h1>
        <p className="app-subtitle">Your trusted source for quality mechanical parts</p>
      </header> */}

      <section className="product-section" id="products">
        <ProductCarousel  products={products} />
        <div>
        <h2 className="section-title">Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        </div>
      </section>

      <footer className="footer" id="contact" style={{ backgroundColor: "#1f1f1f", color: "#fff", padding: "2rem", textAlign: "center", marginTop: "4rem" }}>
        <h3 style={{ marginBottom: "1rem" }}>Contact Us</h3>
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/919591313418" target="_blank" rel="noopener noreferrer" style={{ color: "#4dc247" }}>+91 95913 13418</a></p>
        <p><strong>Email:</strong> <a href="mailto:contact@usenterprised.com" style={{ color: "#4dc2c2" }}>contact@usenterprise.com</a></p>
        <div className="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54891.42804967513!2d76.65618090250747!3d30.69831489758777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee906da6f81f%3A0x512998f16ce508d8!2sSahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1749316844262!5m2!1sen!2sin"
      width="100%"
      height="250"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Business Location"
    ></iframe>
  </div>
        <p className="footer-note" style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#ccc" }}>
          &copy; {new Date().getFullYear()} USENTERPRISED. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
