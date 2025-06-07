import React, { useState, useEffect } from "react";
import { products } from "../data/products";
import "./ProductCarousel.css";

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("next");
  const [animating, setAnimating] = useState(false);

  const product = products[currentIndex];

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setSlideDirection("prev");
    setAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSlideDirection("next");
    setAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(product.whatsappText);
    window.open(`https://wa.me/91123456789?text=${message}`, "_blank");
  };

  // Reset animation trigger
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimating(false);
    }, 600); // match the animation duration

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="carousel-fullscreen">
      <button className="carousel-nav left" onClick={handlePrev}>
        &#10094;
      </button>

      <div
        className={`carousel-content ${
          animating ? `slide-${slideDirection}` : ""
        }`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="carousel-image"
        />
        <div className="carousel-text">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button className="whatsapp-button" onClick={openWhatsApp}>
            Order via WhatsApp
          </button>
        </div>
      </div>

      <button className="carousel-nav right" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
}
