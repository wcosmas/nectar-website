import { ImageResponse } from "next/og";

export const alt =
  "Nectar Technologies — systems of record for African institutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The social card. This is the image that appears when the site is pasted into
 * a procurement email or a Slack channel, so it carries the mark, the claim and
 * the proof rather than a decorative graphic.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#004F58",
          padding: "72px 80px",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        {/* Mark + name */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 60,
              height: 60,
              borderRadius: 8,
              background: "#FFFFFF",
              color: "#004F58",
              fontSize: 38,
              fontWeight: 700,
            }}
          >
            N
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: 6 }}>
              NECTAR
            </span>
            <span
              style={{
                fontSize: 14,
                letterSpacing: 8,
                color: "rgba(255,255,255,0.6)",
                marginTop: 4,
              }}
            >
              TECHNOLOGIES
            </span>
          </div>
        </div>

        {/* Claim */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -1.8,
              maxWidth: 900,
            }}
          >
            We build the systems institutions run on.
          </span>
        </div>

        {/* Proof */}
        <div
          style={{
            display: "flex",
            gap: 64,
            borderTop: "1px solid rgba(255,255,255,0.28)",
            paddingTop: 28,
          }}
        >
          {[
            ["10,000+", "Staff on one HR system"],
            ["48,839", "Student files digitised"],
            ["7", "Systems of record in service"],
          ].map(([v, l]) => (
            <div key={l} style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>
                {v}
              </span>
              <span
                style={{
                  fontSize: 17,
                  color: "rgba(255,255,255,0.65)",
                  marginTop: 8,
                }}
              >
                {l}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
