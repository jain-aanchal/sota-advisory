import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse at top, rgba(201,169,97,0.18), transparent 60%), #0a0a0a",
          color: "#c0c0c0",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 96,
            letterSpacing: "0.08em",
            lineHeight: 1,
          }}
        >
          S
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 6,
            fontSize: 12,
            letterSpacing: "0.32em",
            color: "#c9a961",
          }}
        >
          ADVISORY
        </div>
      </div>
    ),
    { ...size }
  );
}
