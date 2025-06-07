import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./ProductCarousel.css";

export default function ProductCarousel({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = products.length;

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const product = products[currentIndex];

  return (
    <div className="carousel-fullscreen" {...handlers}>
      <div className="carousel-content">
        <img
          src={product.image}
          alt={product.name}
          className="carousel-image"
        />
        <div className="carousel-text">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button
            onClick={() =>
              window.open(
                `https://wa.me/91123456789?text=${encodeURIComponent(
                  product.whatsappText
                )}`,
                "_blank"
              )
            }
            className="whatsapp-button"
          >
            Order via WhatsApp
          </button>
        </div>
      </div>

      {/* Arrow buttons visible only on desktop */}
      <button
        className="carousel-nav left"
        onClick={prev}
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button
        className="carousel-nav right"
        onClick={next}
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    </div>
  );
}
