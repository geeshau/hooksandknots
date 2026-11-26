"use client";

export default function EditorialSection() {
  return (
    <div className="editorial-section">
      <div className="editorial-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/culture3.png" alt="Hook & Knots campaign styling" />
      </div>
      <div className="editorial-content">
        <p className="eyebrow">THE HOOK &amp; KNOTS EDIT</p>
        <h2>
          More than
          <br />
          an accessory.
        </h2>
        <p>
          Pieces created to become part of your identity, your moments
          and your everyday style.
        </p>
        <span className="cta-button">Discover the collection</span>
      </div>
    </div>
  );
}
