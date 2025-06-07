import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./ProductCarousel.css";

export default function ProductCarousel({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("next");
  const [animating, setAnimating] = useState(false);
  const total = products.length;

  const product = products[currentIndex];

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => handleSlide("next"),
    onSwipedRight: () => handleSlide("prev"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleSlide = (direction) => {
    if (animating) return;

    setSlideDirection(direction);
    setAnimating(true);

    setCurrentIndex((prevIndex) => {
      if (direction === "next") return (prevIndex + 1) % total;
      else return (prevIndex - 1 + total) % total;
    });
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlide("next");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Reset animating after animation duration
  useEffect(() => {
    if (!animating) return;
    const timeout = setTimeout(() => {
      setAnimating(false);
    }, 600);
    return () => clearTimeout(timeout);
  }, [animating]);

  return (
    <div className="carousel-fullscreen" {...handlers}>
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

      {/* Desktop nav buttons */}
      <button
        className="carousel-nav left"
        onClick={() => handleSlide("prev")}
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button
        className="carousel-nav right"
        onClick={() => handleSlide("next")}
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    </div>
  );
}
