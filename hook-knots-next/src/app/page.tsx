"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ShopSection from "@/components/ShopSection";
import EditorialSection from "@/components/EditorialSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import StitchLabSection from "@/components/StitchLabSection";
import ContactSection from "@/components/ContactSection";
import ScrollIndicators from "@/components/ScrollIndicators";

const SECTION_LABELS = [
  "Home",
  "Shop",
  "Editorial",
  "About",
  "Gallery",
  "StitchLab",
  "Contact",
];

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const totalSections = SECTION_LABELS.length;

  const navigateTo = useCallback(
    (index: number) => {
      if (isAnimating || index < 0 || index >= totalSections) return;
      setIsAnimating(true);
      setCurrentSection(index);

      // Reset scroll position of the target section
      const targetSection = sectionRefs.current[index];
      if (targetSection) {
        targetSection.scrollTop = 0;
      }

      setTimeout(() => setIsAnimating(false), 900);
    },
    [isAnimating, totalSections]
  );

  // Handle wheel events for horizontal navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Check if the current section is scrollable and not at boundary
      const currentEl = sectionRefs.current[currentSection];
      if (currentEl) {
        const { scrollTop, scrollHeight, clientHeight } = currentEl;
        const isScrollable = scrollHeight > clientHeight + 5;
        const atTop = scrollTop <= 2;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 2;

        // If the section has scrollable content and we're not at a boundary, let it scroll
        if (isScrollable) {
          if (e.deltaY > 0 && !atBottom) return;
          if (e.deltaY < 0 && !atTop) return;
        }
      }

      e.preventDefault();

      if (isAnimating) return;

      if (e.deltaY > 30 || e.deltaX > 30) {
        navigateTo(currentSection + 1);
      } else if (e.deltaY < -30 || e.deltaX < -30) {
        navigateTo(currentSection - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentSection, isAnimating, navigateTo]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        navigateTo(currentSection + 1);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        navigateTo(currentSection - 1);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentSection, navigateTo]);

  // Handle touch swipe for mobile
  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaX = touchStartX - e.changedTouches[0].clientX;
      const deltaY = touchStartY - e.changedTouches[0].clientY;

      // Only navigate if horizontal swipe is dominant
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 60) {
        if (deltaX > 0) {
          navigateTo(currentSection + 1);
        } else {
          navigateTo(currentSection - 1);
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    window.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSection, navigateTo]);

  return (
    <>
      <Header
        currentSection={currentSection}
        onNavigate={navigateTo}
        sectionNames={SECTION_LABELS}
      />

      <ScrollIndicators
        total={totalSections}
        current={currentSection}
        labels={SECTION_LABELS}
        onNavigate={navigateTo}
      />

      <div className="horizontal-scroll-wrapper">
        <div
          ref={trackRef}
          className="horizontal-scroll-track"
          style={{
            transform: `translateX(-${currentSection * 100}vw)`,
          }}
        >
          {/* 0 — Hero */}
          <div
            ref={(el) => { sectionRefs.current[0] = el; }}
            className="scroll-section"
          >
            <HeroSection />
          </div>

          {/* 1 — Shop */}
          <div
            ref={(el) => { sectionRefs.current[1] = el; }}
            className="scroll-section"
          >
            <ShopSection />
          </div>

          {/* 2 — Editorial */}
          <div
            ref={(el) => { sectionRefs.current[2] = el; }}
            className="scroll-section"
          >
            <EditorialSection />
          </div>

          {/* 3 — About */}
          <div
            ref={(el) => { sectionRefs.current[3] = el; }}
            className="scroll-section"
          >
            <AboutSection />
          </div>

          {/* 4 — Gallery */}
          <div
            ref={(el) => { sectionRefs.current[4] = el; }}
            className="scroll-section"
          >
            <GallerySection />
          </div>

          {/* 5 — StitchLab */}
          <div
            ref={(el) => { sectionRefs.current[5] = el; }}
            className="scroll-section"
          >
            <StitchLabSection />
          </div>

          {/* 6 — Contact */}
          <div
            ref={(el) => { sectionRefs.current[6] = el; }}
            className="scroll-section"
          >
            <ContactSection />
          </div>
        </div>
      </div>

      {/* WhatsApp button */}
      <a
        className="whatsapp-btn"
        href="https://wa.me/254736953766?text=Hello%20Hook%20%26%20Knots"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
    </>
  );
}
