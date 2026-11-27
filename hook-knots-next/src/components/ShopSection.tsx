"use client";

import { products, formatPrice } from "@/data/products";
import Footer from "./Footer";

interface ShopSectionProps {
  onNavigate?: (index: number, resetScroll?: boolean) => void;
}

export default function ShopSection({ onNavigate }: ShopSectionProps) {
  return (
    <div className="products-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">JUST IN</p>
          <h2>New arrivals</h2>
        </div>
        <span className="text-link">Shop all</span>
      </div>

      <div className="product-grid" role="list">
        {products.slice(0, 8).map((product) => (
          <article
            key={product.id}
            className="product-card"
            role="listitem"
            tabIndex={0}
            aria-label={`${product.name}, ${formatPrice(product.price)}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                // Future: navigate to product detail page
              }
            }}
          >
            <div className="product-image">
              {product.label && (
                <span className="product-label">{product.label}</span>
              )}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.image} alt={product.alt} loading="lazy" />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{formatPrice(product.price)}</p>
            </div>
          </article>
        ))}
      </div>

      <div style={{ marginTop: "clamp(80px, 10vh, 140px)" }}>
        <Footer onNavigate={onNavigate} />
      </div>
    </div>
  );
}
