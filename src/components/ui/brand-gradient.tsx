/**
 * Invisible SVG holding the red-pink-violet brand gradient. Render it once,
 * then paint any line icon with `color={`url(#${id})`}`.
 *
 * userSpaceOnUse spans the whole 24px icon grid, so straight lines (which
 * have a zero-height bounding box) still get the gradient.
 */
export function BrandGradientDefs({ id }: { id: string }) {
  return (
    <svg
      aria-hidden="true"
      width="0"
      height="0"
      className="pointer-events-none absolute"
    >
      <defs>
        <linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          x1="2"
          y1="12"
          x2="22"
          y2="12"
        >
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
