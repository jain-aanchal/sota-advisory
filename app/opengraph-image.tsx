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
          padding: "80px",
          background:
            "radial-gradient(ellipse at top left, rgba(201,169,97,0.18), transparent 55%), radial-gradient(ellipse at bottom right, rgba(184,115,51,0.12), transparent 55%), #0a0a0a",
          color: "#f5f5f0",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.24em",
            color: "#c9a961",
          }}
        >
          FRACTIONAL CTO · STRATEGY THAT SHIPS
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
          >
            Operator-grade technology leadership.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              color: "#c9a961",
            }}
          >
            When you need it most.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#a8a8a0",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Twenty years turning technical strategy into working software.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span
              style={{
                color: "#c0c0c0",
                fontSize: 44,
                letterSpacing: "0.28em",
              }}
            >
              SOTA
            </span>
            <span
              style={{
                color: "#c9a961",
                fontSize: 16,
                letterSpacing: "0.32em",
              }}
            >
              ADVISORY
            </span>
          </div>
          <div style={{ display: "flex", color: "#a8a8a0", fontSize: 20 }}>
            sotaadvisory.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
