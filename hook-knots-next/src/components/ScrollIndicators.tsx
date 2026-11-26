"use client";

interface ScrollIndicatorsProps {
  total: number;
  current: number;
  labels: string[];
  onNavigate: (index: number) => void;
}

export default function ScrollIndicators({
  total,
  current,
  labels,
  onNavigate,
}: ScrollIndicatorsProps) {
  const darkSections = [0, 2, 4];
  const isLight = darkSections.includes(current);

  return (
    <>
      {/* Dots */}
      <div className="scroll-indicators">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            className={`scroll-dot ${i === current ? "active" : ""}`}
            onClick={() => onNavigate(i)}
            aria-label={`Go to ${labels[i]}`}
            style={
              isLight
                ? {
                    borderColor: "rgba(255,255,255,0.6)",
                    ...(i === current
                      ? { background: "white" }
                      : {}),
                  }
                : {}
            }
          />
        ))}
      </div>

      {/* Section label */}
      <div className={`section-label ${isLight ? "light" : ""}`}>
        {labels[current]}
      </div>
    </>
  );
}
