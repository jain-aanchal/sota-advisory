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
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "90px",
          background:
            "radial-gradient(ellipse at top left, rgba(201,169,97,0.18), transparent 55%), radial-gradient(ellipse at bottom right, rgba(184,115,51,0.12), transparent 55%), #0a0a0a",
          color: "#f5f5f0",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: "0.28em",
            color: "#c9a961",
          }}
        >
          FRACTIONAL CTO · STRATEGY THAT SHIPS
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 104,
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          Operator-grade technology leadership.
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span
              style={{
                color: "#c0c0c0",
                fontSize: 52,
                letterSpacing: "0.28em",
              }}
            >
              SOTA
            </span>
            <span
              style={{
                color: "#c9a961",
                fontSize: 18,
                letterSpacing: "0.32em",
              }}
            >
              ADVISORY
            </span>
          </div>
          <div style={{ display: "flex", color: "#a8a8a0", fontSize: 22 }}>
            sotaadvisory.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
