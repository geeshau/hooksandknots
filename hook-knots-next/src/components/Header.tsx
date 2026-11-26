"use client";

import { useState } from "react";

interface HeaderProps {
  currentSection: number;
  onNavigate: (index: number) => void;
  sectionNames: string[];
}

const darkSections = [0, 2, 4]; // hero, editorial/about, gallery, stitchlab

export default function Header({
  currentSection,
  onNavigate,
  sectionNames,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = darkSections.includes(currentSection);

  return (
    <>
      <header
        className={`site-header ${isDark ? "dark-mode" : "solid"}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <a className="logo" href="#" onClick={() => onNavigate(0)}>
          <img
            src="/images/logo .png"
            alt="Hook & Knots"
            className="site-logo"
          />
        </a>

        <nav className="desktop-nav">
          {sectionNames.map((name, i) => (
            <a
              key={name}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate(i);
              }}
            >
              {name}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="icon-btn">Search</button>
          <button className="icon-btn">Cart</button>
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(true)}
          >
            Menu
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button
          className="mobile-menu-close"
          onClick={() => setMenuOpen(false)}
        >
          Close
        </button>
        <nav>
          {sectionNames.map((name, i) => (
            <a
              key={name}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate(i);
                setMenuOpen(false);
              }}
            >
              {name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
