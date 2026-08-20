import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "SOTA Advisory: Fractional CTO and AI Strategy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          background:
            "radial-gradient(ellipse at top left, rgba(201,169,97,0.18), transparent 55%), radial-gradient(ellipse at bottom right, rgba(184,115,51,0.12), transparent 55%), #0a0a0a",
          color: "#f5f5f0",
          fontFamily: "serif",
        }}
      >
        {/* Top: eyebrow */}
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.28em",
            color: "#c9a961",
            fontFamily: "sans-serif",
          }}
        >
          FRACTIONAL CTO · STRATEGY THAT SHIPS
        </div>

        {/* Middle: hero + subtitle, vertically centered */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 28,
            marginTop: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              maxWidth: "1040px",
            }}
          >
            Operator-grade technology leadership.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              lineHeight: 1.4,
              color: "#c9c9c0",
              maxWidth: "980px",
              fontFamily: "sans-serif",
            }}
          >
            I partner with founders and CEOs to turn AI and technology bets
            into outcomes the market and the boardroom can measure.
          </div>
        </div>

        {/* Bottom: wordmark + URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: 24,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                color: "#c0c0c0",
                fontSize: 44,
                letterSpacing: "0.28em",
                lineHeight: 1,
              }}
            >
              SOTA
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 10,
                color: "#c9a961",
                fontSize: 15,
                letterSpacing: "0.34em",
                fontFamily: "sans-serif",
              }}
            >
              ADVISORY
            </div>
          </div>
          <div
            style={{
              display: "flex",
              color: "#a8a8a0",
              fontSize: 20,
              letterSpacing: "0.05em",
              fontFamily: "sans-serif",
            }}
          >
            sotaadvisory.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
