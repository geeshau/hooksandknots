"use client";

import { useState } from "react";

interface HeaderProps {
  currentSection: number;
  onNavigate: (index: number, resetScroll?: boolean) => void;
  sectionNames: string[];
}

const darkSections = [0, 2, 4]; // hero, editorial, gallery

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
        <a
          className="logo"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate(0, true);
          }}
        >
          <img
            src="/images/logo.png"
            alt="Hook & Knots"
            className="site-logo"
          />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {sectionNames.map((name, i) => (
            <a
              key={name}
              href="#"
              className={i === currentSection ? "nav-active" : ""}
              aria-current={i === currentSection ? "true" : undefined}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(i, true);
              }}
            >
              {name}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="icon-btn" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
          <button className="icon-btn" aria-label="Cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </button>
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <button
          className="mobile-menu-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          Close
        </button>
        <nav aria-label="Mobile navigation">
          {sectionNames.map((name, i) => (
            <a
              key={name}
              href="#"
              className={i === currentSection ? "nav-active" : ""}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(i, true);
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
