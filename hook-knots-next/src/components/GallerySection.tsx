"use client";

import { useState } from "react";
import {
  galleryBags,
  gallerySandals,
  galleryCampaign,
} from "@/data/products";
import Footer from "./Footer";

export default function GallerySection() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxCaption, setLightboxCaption] = useState("");

  const openLightbox = (src: string, caption: string) => {
    setLightboxSrc(src);
    setLightboxCaption(caption);
  };

  return (
    <div className="gallery-section">
      {/* Intro */}
      <div className="gallery-intro-block">
        <div className="gallery-intro-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/culture2.png"
            alt="Hook & Knots campaign portrait"
          />
        </div>
        <div className="gallery-intro-copy">
          <p className="eyebrow">THE HOOK &amp; KNOTS ARCHIVE</p>
          <h2>
            Made to
            <br />
            be noticed.
          </h2>
          <p>
            A study in texture, colour, and the small details that
            make a look entirely yours.
          </p>
        </div>
      </div>

      {/* Bags grid */}
      <div className="gallery-grid-block">
        <div className="gallery-chapter-heading">
          <p className="eyebrow">01 / THE CARRY EDIT</p>
          <h2>Form follows feeling.</h2>
          <p>
            Soft structure, considered colour, and the ease of
            something made by hand.
          </p>
        </div>
        <div className="gallery-masonry">
          {galleryBags.map((item) => (
            <figure
              key={item.num}
              onClick={() => openLightbox(item.src, item.caption)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.alt} loading="lazy" />
              <figcaption>
                {item.caption} <span>{item.num}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Interlude */}
      <div className="gallery-interlude">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/culture3.png"
          alt="Hook & Knots campaign styling"
          loading="lazy"
        />
        <div>
          <p className="eyebrow">TEXTURE AS SIGNATURE</p>
          <p>Every loop holds a little intention.</p>
        </div>
      </div>

      {/* Sandals grid */}
      <div className="gallery-grid-block">
        <div className="gallery-chapter-heading">
          <p className="eyebrow">02 / THE STEP EDIT</p>
          <h2>Colour in motion.</h2>
          <p>
            Four expressions of the same instinct: leave an
            impression.
          </p>
        </div>
        <div className="gallery-masonry">
          {gallerySandals.map((item) => (
            <figure
              key={item.num}
              onClick={() => openLightbox(item.src, item.caption)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.alt} loading="lazy" />
              <figcaption>
                {item.caption} <span>{item.num}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Campaign */}
      <div className="gallery-grid-block">
        <div className="gallery-chapter-heading">
          <p className="eyebrow">03 / THE CAMPAIGN</p>
          <h2>
            Your world,
            <br />
            in full colour.
          </h2>
        </div>
        <div className="gallery-masonry">
          {galleryCampaign.map((item, i) => (
            <figure
              key={i}
              onClick={() => openLightbox(item.src, item.alt)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>

      <Footer />

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="lightbox open"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setLightboxSrc(null)}
          >
            Close
          </button>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lightboxSrc} alt={lightboxCaption} />
            <figcaption>{lightboxCaption}</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
