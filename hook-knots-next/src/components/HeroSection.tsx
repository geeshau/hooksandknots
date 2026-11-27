"use client";

import { useEffect, useState } from "react";
import { heroImages } from "@/data/products";

interface HeroSectionProps {
  onNavigate?: (index: number, resetScroll?: boolean) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-slideshow">
        {heroImages.map((img, i) => (
          <div
            key={img.src}
            className={`hero-slide ${i === activeSlide ? "active" : ""}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      <div className="hero-shade" />

      <div className="hero-content">
        <p className="eyebrow">THE NEW COLLECTION</p>
        <h1>
          Designed to
          <br />
          define you.
        </h1>
        <p>
          Hook &amp; Knots is a modern urban brand focused on creation
          of customized fashion accessories.
        </p>
        <button className="cta-button" onClick={() => onNavigate?.(1, true)}>Shop Collection</button>
      </div>

      <div className="hero-status">
        <span>{String(activeSlide + 1).padStart(2, "0")}</span>
        <span className="hero-status-line" />
        <span>HOOK &amp; KNOTS / 22</span>
      </div>

      {/* Scroll discovery cue */}
      <div className="scroll-cue" aria-hidden="true">
        <span>Scroll to explore</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </section>
  );
}
