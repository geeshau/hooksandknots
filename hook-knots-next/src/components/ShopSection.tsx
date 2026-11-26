"use client";

import { products, formatPrice } from "@/data/products";
import Footer from "./Footer";

export default function ShopSection() {
  return (
    <div className="products-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">JUST IN</p>
          <h2>New arrivals</h2>
        </div>
        <span className="text-link">Shop all</span>
      </div>

      <div className="product-grid">
        {products.slice(0, 8).map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              {product.label && (
                <span className="product-label">{product.label}</span>
              )}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.image} alt={product.alt} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{formatPrice(product.price)}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "clamp(80px, 10vh, 140px)" }}>
        <Footer />
      </div>
    </div>
  );
}
