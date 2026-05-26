/**
 * Plan of Record cover — a typographic mockup of the deliverable.
 * Pure SVG, no external assets. Inherits font families from the page
 * via CSS so it picks up Fraunces + Inter when available.
 */
export default function PlanOfRecordCover() {
  return (
    <div
      className="relative"
      style={{
        // Subtle drop-shadow so the "document" reads as a printed object
        // sitting against the page background.
        filter:
          "drop-shadow(0 1px 1px rgba(20, 17, 13, 0.04)) drop-shadow(0 12px 24px rgba(20, 17, 13, 0.10))",
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 320 440"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[320px] h-auto"
        role="img"
        aria-label="Sample cover of a P5 Plan of Record document"
      >
        {/* Cover paper */}
        <rect width="320" height="440" fill="#FAFAF6" />

        {/* Inner margin rule (top) */}
        <line x1="40" y1="40" x2="80" y2="40" stroke="#6B8068" strokeWidth="2" />

        {/* Eyebrow */}
        <text
          x="40"
          y="68"
          fill="#6B6358"
          fontFamily="var(--font-inter), -apple-system, Helvetica, Arial, sans-serif"
          fontSize="9"
          fontWeight="600"
          letterSpacing="2"
        >
          P5 · MARKETING PLAN OF RECORD
        </text>

        {/* Title — stacked, serif, generous spacing */}
        <text
          x="40"
          y="200"
          fill="#14110D"
          fontFamily="var(--font-fraunces), Georgia, 'Times New Roman', serif"
          fontSize="38"
          fontWeight="500"
          letterSpacing="-1"
        >
          Plan of
        </text>
        <text
          x="40"
          y="244"
          fill="#14110D"
          fontFamily="var(--font-fraunces), Georgia, 'Times New Roman', serif"
          fontSize="38"
          fontWeight="500"
          letterSpacing="-1"
        >
          Record
        </text>

        {/* Subtitle */}
        <text
          x="40"
          y="284"
          fill="#6B6358"
          fontFamily="var(--font-fraunces), Georgia, 'Times New Roman', serif"
          fontSize="13"
          fontStyle="italic"
        >
          Prepared for the practice
        </text>
        <text
          x="40"
          y="302"
          fill="#6B6358"
          fontFamily="var(--font-fraunces), Georgia, 'Times New Roman', serif"
          fontSize="13"
          fontStyle="italic"
        >
          Q3 · 2026
        </text>

        {/* Footer area */}
        <line x1="40" y1="384" x2="280" y2="384" stroke="#D7D0C3" strokeWidth="1" />
        <text
          x="40"
          y="406"
          fill="#14110D"
          fontFamily="var(--font-fraunces), Georgia, 'Times New Roman', serif"
          fontSize="16"
          fontWeight="500"
          letterSpacing="-0.3"
        >
          P5
        </text>
        <text
          x="280"
          y="406"
          fill="#6B6358"
          fontFamily="var(--font-inter), -apple-system, Helvetica, Arial, sans-serif"
          fontSize="9"
          fontWeight="500"
          letterSpacing="1.5"
          textAnchor="end"
        >
          ICP · PLAN · MEASUREMENT
        </text>
      </svg>
    </div>
  );
}
