import { cn } from "@/lib/utils";

/**
 * The Nectar monogram. Same drawing as `app/icon.svg` — a Didone N with heavy
 * stems, slab serifs and a hairline-to-thick diagonal — so the browser tab and
 * the header lockup are one mark, not two.
 *
 * On paper the ground is brand ink; on the dark ground it inverts to white,
 * which keeps the mark at full contrast without a second drawing.
 */
export function Monogram({
  className,
  tone = "ink",
  size = "sm",
}: {
  className?: string;
  tone?: "ink" | "light";
  size?: "sm" | "lg";
}) {
  const ground = tone === "ink" ? "var(--teal-700)" : "#FFFFFF";
  const letter = tone === "ink" ? "#F4F7F7" : "var(--teal-900)";

  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden
      focusable="false"
      className={cn(
        "shrink-0",
        size === "lg" ? "size-14" : "size-9",
        className,
      )}
    >
      <rect width="64" height="64" rx="8" fill={ground} />
      <g fill={letter}>
        {/* Left stem with serifs */}
        <rect x="15" y="17" width="7" height="30" />
        <rect x="11" y="17" width="15" height="2.5" />
        <rect x="11" y="44.5" width="15" height="2.5" />
        {/* Right stem with serifs */}
        <rect x="42" y="17" width="7" height="30" />
        <rect x="38" y="17" width="15" height="2.5" />
        <rect x="38" y="44.5" width="15" height="2.5" />
        {/* Hairline-to-thick diagonal, the Didone contrast */}
        <path d="M22 17 L27.5 17 L46 47 L40.5 47 Z" />
      </g>
    </svg>
  );
}

/**
 * The full lockup: monogram, then wordmark. Used wherever the identity appears
 * as a single unit — header, mobile menu, footer.
 */
export function Lockup({
  className,
  tone = "ink",
  size = "sm",
  children,
}: {
  className?: string;
  tone?: "ink" | "light";
  size?: "sm" | "lg";
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "flex items-center",
        size === "lg" ? "gap-5" : "gap-3.5",
        className,
      )}
    >
      <Monogram tone={tone} size={size} />
      {children}
    </span>
  );
}
