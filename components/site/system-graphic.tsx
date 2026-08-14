/**
 * Authored hero graphic. Not decoration: it depicts what the firm actually
 * does — scattered institutional records on the left, drawn through a single
 * derivation point, resolving into one ordered system of record on the right.
 *
 * Pure SVG, no dependencies, no raster assets. Motion is slow and ambient and
 * switches off under prefers-reduced-motion.
 */

const scatter = [
  { x: 8, y: 34, w: 26, h: 9, o: 0.5, d: 0 },
  { x: 14, y: 58, w: 34, h: 9, o: 0.34, d: 1.1 },
  { x: 4, y: 86, w: 22, h: 9, o: 0.62, d: 2.3 },
  { x: 26, y: 108, w: 30, h: 9, o: 0.3, d: 0.6 },
  { x: 10, y: 134, w: 40, h: 9, o: 0.45, d: 1.8 },
  { x: 30, y: 160, w: 24, h: 9, o: 0.28, d: 3.1 },
  { x: 6, y: 186, w: 32, h: 9, o: 0.55, d: 2.6 },
  { x: 22, y: 212, w: 28, h: 9, o: 0.36, d: 1.4 },
  { x: 12, y: 238, w: 36, h: 9, o: 0.48, d: 3.6 },
  { x: 32, y: 264, w: 22, h: 9, o: 0.3, d: 0.9 },
];

/** The ordered record the scatter resolves into. */
const ledger = Array.from({ length: 9 }, (_, i) => ({
  y: 40 + i * 26,
  d: i * 0.14,
}));

export function SystemGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 460 300"
      fill="none"
      role="img"
      aria-label="Diagram: scattered institutional records drawn through a single point of derivation and resolving into one ordered system of record."
      className={className}
    >
      <defs>
        <linearGradient id="ng-thread" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--teal-300)" stopOpacity="0" />
          <stop offset="45%" stopColor="var(--teal-500)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="var(--teal-700)" stopOpacity="0.95" />
        </linearGradient>
        <clipPath id="ng-clip">
          <rect x="0" y="0" width="460" height="300" />
        </clipPath>
      </defs>

      <g clipPath="url(#ng-clip)">
        {/* Scattered source records */}
        <g className="ng-scatter">
          {scatter.map((r) => (
            <rect
              key={`${r.x}-${r.y}`}
              x={r.x}
              y={r.y}
              width={r.w}
              height={r.h}
              rx="1"
              fill="var(--teal-500)"
              opacity={r.o}
              style={{ animationDelay: `${r.d}s` }}
            />
          ))}
        </g>

        {/* Threads converging on the derivation point */}
        <g>
          {scatter.map((r) => (
            <path
              key={`t-${r.y}`}
              d={`M ${r.x + r.w} ${r.y + 4.5} C 120 ${r.y + 4.5}, 150 150, 214 150`}
              stroke="url(#ng-thread)"
              strokeWidth="1"
              opacity="0.5"
            />
          ))}
        </g>

        {/* The single point where a record is derived, once */}
        <circle cx="214" cy="150" r="26" stroke="var(--teal-300)" strokeWidth="1" opacity="0.5" />
        <circle cx="214" cy="150" r="15" stroke="var(--teal-500)" strokeWidth="1" opacity="0.75" />
        <circle cx="214" cy="150" r="5.5" fill="var(--teal-700)" />
        <circle cx="214" cy="150" r="26" className="ng-pulse" stroke="var(--teal-500)" strokeWidth="1" />

        {/* Fan-out into the ordered record */}
        <g>
          {ledger.map((row) => (
            <path
              key={`f-${row.y}`}
              d={`M 240 150 C 272 150, 280 ${row.y + 5}, 306 ${row.y + 5}`}
              stroke="var(--teal-300)"
              strokeWidth="1"
              opacity="0.42"
            />
          ))}
        </g>

        {/* The system of record: one ordered, ruled column */}
        <g className="ng-ledger">
          {ledger.map((row, i) => (
            <g key={row.y} style={{ animationDelay: `${row.d}s` }}>
              <rect
                x="306"
                y={row.y}
                width="146"
                height="10"
                rx="1"
                fill="var(--teal-700)"
                opacity={i % 3 === 0 ? 0.95 : 0.6}
              />
              <rect
                x="306"
                y={row.y + 14}
                width="146"
                height="1"
                fill="var(--teal-300)"
                opacity="0.55"
              />
            </g>
          ))}
        </g>

        {/* Frame marks on the record, the way a ledger is ruled */}
        <rect x="306" y="30" width="146" height="1" fill="var(--teal-700)" opacity="0.9" />
        <rect x="306" y="278" width="146" height="1" fill="var(--teal-700)" opacity="0.9" />
      </g>

      <style>{`
        .ng-scatter rect {
          animation: ng-drift 9s ease-in-out infinite alternate;
        }
        .ng-ledger g {
          animation: ng-settle 6s ease-in-out infinite alternate;
        }
        .ng-pulse {
          transform-origin: 214px 150px;
          animation: ng-pulse 4.5s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }
        @keyframes ng-drift {
          from { transform: translateX(0); }
          to   { transform: translateX(6px); }
        }
        @keyframes ng-settle {
          from { opacity: 0.72; }
          to   { opacity: 1; }
        }
        @keyframes ng-pulse {
          0%   { transform: scale(1);   opacity: 0.55; }
          70%  { transform: scale(2.1); opacity: 0; }
          100% { transform: scale(2.1); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ng-scatter rect, .ng-ledger g, .ng-pulse { animation: none; }
          .ng-pulse { opacity: 0.35; }
        }
      `}</style>
    </svg>
  );
}
