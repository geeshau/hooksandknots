"use client";

import Footer from "./Footer";

interface AboutSectionProps {
  onNavigate?: (index: number, resetScroll?: boolean) => void;
}

export default function AboutSection({ onNavigate }: AboutSectionProps) {
  return (
    <div className="about-section">
      {/* Hero */}
      <div className="about-hero-block">
        <div className="about-hero-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/culture5.png"
            alt="Hook & Knots campaign styling"
          />
        </div>
        <div className="about-hero-copy">
          <p className="eyebrow">OUR STORY</p>
          <h2>
            Made by hand.
            <br />
            Made to be yours.
          </h2>
        </div>
      </div>

      {/* Intro */}
      <div className="about-intro-block">
        <p className="eyebrow">HOOK &amp; KNOTS / 01</p>
        <h2>Accessories with a point of view.</h2>
        <div className="about-intro-text">
          <p>
            Hook &amp; Knots is a modern urban accessories brand
            rooted in crochet, colour, and the confidence to make a
            look your own.
          </p>
          <p>
            We create pieces that feel personal: tactile bags and
            sandals designed to move with you, collect memories, and
            say something without saying too much.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="about-values-block">
        <div className="about-value-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/culture8.png"
            alt="Hook & Knots campaign portrait"
          />
        </div>
        <div className="about-value-copy">
          <p className="eyebrow">THE WAY WE MAKE</p>
          <h2>Texture is our signature.</h2>
          <p>
            Every piece starts with a considered colour story and the
            patience of the handmade. The result is an everyday
            accessory with enough character to become part of your
            identity.
          </p>
          <span
            className="cta-button-dark cta-button"
            role="button"
            tabIndex={0}
            onClick={() => onNavigate?.(4, true)}
            onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.(4, true); }}
          >
            View the gallery
          </span>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
