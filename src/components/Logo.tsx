import sMark from "@/assets/logo-s-mark.png";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

/**
 * Sintesi 3D logo — original "S" mark (raster, transparent) paired with
 * a native SVG wordmark in the site fonts/colors so it sits cleanly on
 * any background without a white plate.
 *
 * The tagline uses textLength so it always fits the wordmark width
 * regardless of which fallback font is rendered.
 */
export function Logo({ className, showTagline = true }: LogoProps) {
  const VB_W = 460;
  const VB_H = showTagline ? 110 : 70;

  return (
    <span
      className={`inline-flex items-center gap-3 ${className ?? ""}`}
      aria-label="Sintesi 3D — 3D Printing, 3D Scanning, CAD Design, Reverse Engineering"
      role="img"
    >
      <img
        src={sMark}
        alt=""
        aria-hidden="true"
        className="h-full w-auto select-none"
        draggable={false}
      />
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        aria-hidden="true"
        preserveAspectRatio="xMinYMid meet"
      >
        {/* Wordmark */}
        <text
          x="0"
          y="56"
          fontFamily="'Montserrat', system-ui, sans-serif"
          fontWeight="700"
          fontSize="64"
          letterSpacing="0"
          textLength={VB_W}
          lengthAdjust="spacingAndGlyphs"
        >
          <tspan fill="oklch(0.96 0.005 240)">SINTESI </tspan>
          <tspan fill="oklch(0.82 0.16 195)">3D</tspan>
        </text>

        {/* Tagline — constrained to the same width so it never overflows */}
        {showTagline && (
          <text
            x="0"
            y="92"
            fontFamily="'Montserrat', system-ui, sans-serif"
            fontSize="14"
            fontWeight="700"
            letterSpacing="1"
            textLength={VB_W}
            lengthAdjust="spacingAndGlyphs"
          >
            <tspan fill="oklch(0.96 0.005 240)">3D PRINTING</tspan>
            <tspan fill="oklch(0.82 0.16 195)"> | </tspan>
            <tspan fill="oklch(0.96 0.005 240)">3D SCANNING</tspan>
            <tspan fill="oklch(0.82 0.16 195)"> | </tspan>
            <tspan fill="oklch(0.96 0.005 240)">CAD DESIGN</tspan>
            <tspan fill="oklch(0.82 0.16 195)"> | </tspan>
            <tspan fill="oklch(0.96 0.005 240)">REVERSE ENGINEERING</tspan>
          </text>
        )}
      </svg>
    </span>
  );
}
