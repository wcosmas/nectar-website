/**
 * Capability glyphs.
 *
 * These are diagrams, not icons. Each one is drawn from the same vocabulary as
 * the hero graphic — bars are records, concentric circles are a point of
 * derivation, thin curves are flow, rules are structure — so the whole site
 * reads as one visual system. Deliberately not thin-line stock icons.
 *
 * Every glyph shares a 120×88 frame and the same stroke weights.
 */

type GlyphProps = { className?: string; tone?: "brand" | "light" };

function frame(tone: "brand" | "light") {
  return tone === "brand"
    ? {
        strong: "var(--teal-700)",
        mid: "var(--teal-500)",
        soft: "var(--teal-300)",
        faint: "var(--teal-100)",
      }
    : {
        strong: "#FFFFFF",
        mid: "rgba(255,255,255,0.72)",
        soft: "rgba(255,255,255,0.45)",
        faint: "rgba(255,255,255,0.22)",
      };
}

function Svg({
  children,
  className,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <svg
      viewBox="0 0 120 88"
      fill="none"
      role="img"
      aria-label={label}
      className={className}
    >
      {children}
    </svg>
  );
}

/** Scattered records drawn through one derivation point into an ordered record. */
function EnterpriseSystems({ className, tone = "brand" }: GlyphProps) {
  const c = frame(tone);
  const src = [10, 24, 38, 52, 66];
  return (
    <Svg className={className} label="Scattered records resolving into one ordered system of record">
      {src.map((y, i) => (
        <rect key={y} x="2" y={y} width={14 + (i % 3) * 6} height="5" fill={c.mid} opacity={0.4 + (i % 3) * 0.2} />
      ))}
      {src.map((y) => (
        <path key={`p${y}`} d={`M 32 ${y + 2.5} C 46 ${y + 2.5}, 48 44, 58 44`} stroke={c.soft} strokeWidth="1" />
      ))}
      <circle cx="60" cy="44" r="9" stroke={c.soft} strokeWidth="1" />
      <circle cx="60" cy="44" r="3.5" fill={c.strong} />
      {[16, 30, 44, 58, 72].map((y) => (
        <path key={`f${y}`} d={`M 70 44 C 78 44, 80 ${y + 2.5}, 86 ${y + 2.5}`} stroke={c.faint} strokeWidth="1" />
      ))}
      {[16, 30, 44, 58, 72].map((y, i) => (
        <rect key={`r${y}`} x="86" y={y} width="32" height="5" fill={c.strong} opacity={i % 2 ? 0.5 : 0.9} />
      ))}
    </Svg>
  );
}

/** Layered planes on a ruled baseline — the composed page. */
function WebApplications({ className, tone = "brand" }: GlyphProps) {
  const c = frame(tone);
  return (
    <Svg className={className} label="Layered application surfaces on a shared structure">
      <rect x="8" y="10" width="104" height="8" fill={c.strong} />
      <rect x="8" y="26" width="46" height="30" fill={c.faint} />
      <rect x="60" y="26" width="52" height="13" fill={c.soft} opacity="0.7" />
      <rect x="60" y="43" width="52" height="13" fill={c.soft} opacity="0.45" />
      <rect x="8" y="64" width="70" height="5" fill={c.mid} opacity="0.55" />
      <rect x="8" y="74" width="42" height="5" fill={c.mid} opacity="0.3" />
      <path d="M8 60 H112" stroke={c.soft} strokeWidth="1" />
    </Svg>
  );
}

/** A field of observations separated by a learned boundary. */
function MachineLearning({ className, tone = "brand" }: GlyphProps) {
  const c = frame(tone);
  const a = [
    [16, 20], [30, 14], [24, 34], [40, 26], [14, 44], [34, 50], [48, 40],
  ];
  const b = [
    [78, 30], [92, 22], [86, 46], [102, 36], [72, 58], [96, 62], [108, 52],
  ];
  return (
    <Svg className={className} label="Observations separated by a learned decision boundary">
      <path d="M62 4 C 54 26, 70 50, 58 84" stroke={c.strong} strokeWidth="1.5" strokeDasharray="4 4" />
      {a.map(([x, y]) => (
        <circle key={`a${x}${y}`} cx={x} cy={y} r="3.5" fill={c.mid} opacity="0.65" />
      ))}
      {b.map(([x, y]) => (
        <rect key={`b${x}${y}`} x={x - 3} y={y - 3} width="6" height="6" fill={c.strong} opacity="0.8" />
      ))}
    </Svg>
  );
}

/** Captured in the field, queued, reconciled when the link returns. */
function MobileApplications({ className, tone = "brand" }: GlyphProps) {
  const c = frame(tone);
  return (
    <Svg className={className} label="Field capture queued offline and reconciled on reconnect">
      <rect x="6" y="8" width="34" height="72" rx="4" stroke={c.strong} strokeWidth="1.5" />
      {[20, 32, 44, 56].map((y, i) => (
        <rect key={y} x="13" y={y} width={20 - i * 3} height="4" fill={c.mid} opacity={0.8 - i * 0.15} />
      ))}
      <path d="M48 44 H 74" stroke={c.soft} strokeWidth="1" strokeDasharray="3 3" />
      <path d="M70 40 L 76 44 L 70 48" stroke={c.strong} strokeWidth="1.5" />
      <circle cx="98" cy="44" r="16" stroke={c.soft} strokeWidth="1" />
      <circle cx="98" cy="44" r="8" stroke={c.mid} strokeWidth="1" />
      <circle cx="98" cy="44" r="3" fill={c.strong} />
    </Svg>
  );
}

/** A device boundary, and the signal that crosses it read-only. */
function EmbeddedDesktop({ className, tone = "brand" }: GlyphProps) {
  const c = frame(tone);
  return (
    <Svg className={className} label="Equipment on site, read across a strict boundary">
      <rect x="4" y="20" width="40" height="48" stroke={c.strong} strokeWidth="1.5" />
      {[30, 40, 50, 60].map((y) => (
        <rect key={y} x="11" y={y} width="26" height="3" fill={c.mid} opacity="0.55" />
      ))}
      <path d="M60 6 V 82" stroke={c.soft} strokeWidth="1" strokeDasharray="4 4" />
      {[32, 44, 56].map((y) => (
        <path key={y} d={`M46 ${y} H 74`} stroke={c.mid} strokeWidth="1.5" />
      ))}
      {[32, 44, 56].map((y) => (
        <path key={`h${y}`} d={`M70 ${y - 4} L 76 ${y} L 70 ${y + 4}`} stroke={c.strong} strokeWidth="1.5" />
      ))}
      <rect x="82" y="20" width="34" height="48" fill={c.faint} />
      <rect x="82" y="20" width="34" height="8" fill={c.strong} />
    </Svg>
  );
}

/** Many lines of enquiry converging on one recommendation. */
function ResearchConsulting({ className, tone = "brand" }: GlyphProps) {
  const c = frame(tone);
  const starts = [10, 26, 42, 58, 74];
  return (
    <Svg className={className} label="Lines of enquiry converging on a single recommendation">
      {starts.map((y) => (
        <circle key={y} cx="8" cy={y} r="3.5" fill={c.mid} opacity="0.7" />
      ))}
      {starts.map((y) => (
        <path key={`c${y}`} d={`M 14 ${y} C 44 ${y}, 52 44, 82 44`} stroke={c.soft} strokeWidth="1" />
      ))}
      <path d="M82 44 H 116" stroke={c.strong} strokeWidth="2.5" />
      <circle cx="82" cy="44" r="5" fill={c.strong} />
      <path d="M108 38 L 116 44 L 108 50" stroke={c.strong} strokeWidth="2" />
    </Svg>
  );
}

const bySlug = {
  "enterprise-systems": EnterpriseSystems,
  "web-applications": WebApplications,
  "ai-machine-learning": MachineLearning,
  "mobile-applications": MobileApplications,
  "embedded-desktop-systems": EmbeddedDesktop,
  "research-consulting": ResearchConsulting,
} as const;

export type GlyphSlug = keyof typeof bySlug;

export function Glyph({
  slug,
  className,
  tone = "brand",
}: {
  slug: string;
  className?: string;
  tone?: "brand" | "light";
}) {
  const Component = bySlug[slug as GlyphSlug] ?? EnterpriseSystems;
  return <Component className={className} tone={tone} />;
}
