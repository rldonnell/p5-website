/**
 * Benchmark report cover — typographic mockup of "The State of
 * High-Ticket Service Marketing 2026." Same construction as the
 * Plan of Record cover so the two read as a related set.
 */
export default function BenchmarkReportCover() {
  return (
    <div
      className="relative"
      style={{
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
        aria-label="Sample cover of the State of High-Ticket Service Marketing 2026 report"
      >
        {/* Cover paper */}
        <rect width="320" height="440" fill="#FAFAF6" />

        {/* Forest accent strip across top */}
        <rect x="0" y="0" width="320" height="6" fill="#3B4E36" />

        {/* Eyebrow */}
        <text
          x="40"
          y="60"
          fill="#6B6358"
          fontFamily="var(--font-inter), -apple-system, Helvetica, Arial, sans-serif"
          fontSize="9"
          fontWeight="600"
          letterSpacing="2"
        >
          P5 · ANNUAL INDUSTRY READ
        </text>

        {/* Title stack — serif, generous */}
        <text
          x="40"
          y="160"
          fill="#14110D"
          fontFamily="var(--font-fraunces), Georgia, 'Times New Roman', serif"
          fontSize="26"
          fontWeight="500"
          letterSpacing="-0.6"
        >
          The State of
        </text>
        <text
          x="40"
          y="190"
          fill="#14110D"
          fontFamily="var(--font-fraunces), Georgia, 'Times New Roman', serif"
          fontSize="26"
          fontWeight="500"
          letterSpacing="-0.6"
        >
          High-Ticket
        </text>
        <text
          x="40"
          y="220"
          fill="#14110D"
          fontFamily="var(--font-fraunces), Georgia, 'Times New Roman', serif"
          fontSize="26"
          fontWeight="500"
          letterSpacing="-0.6"
        >
          Service
        </text>
        <text
          x="40"
          y="250"
          fill="#14110D"
          fontFamily="var(--font-fraunces), Georgia, 'Times New Roman', serif"
          fontSize="26"
          fontWeight="500"
          letterSpacing="-0.6"
        >
          Marketing
        </text>

        {/* Year — oversized display */}
        <text
          x="40"
          y="340"
          fill="#3B4E36"
          fontFamily="var(--font-fraunces), Georgia, 'Times New Roman', serif"
          fontSize="76"
          fontWeight="500"
          letterSpacing="-3"
        >
          2026
        </text>

        {/* Footer */}
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
          PUBLISHING FALL 2026
        </text>
      </svg>
    </div>
  );
}
