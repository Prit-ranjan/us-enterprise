import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const openWhatsApp = () => {
    const message = encodeURIComponent(product.whatsappText);
    window.open(`https://wa.me/919591313418?text=${message}`, "_blank");
  };

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <button
        onClick={openWhatsApp}
        className="whatsapp-button"
      >
        Order via WhatsApp
      </button>
    </div>
  );
}