import { ImageResponse } from "next/og";

export const alt = "Shirajul Islam Shakur — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Default social card for every route that does not define its own.
 * Rendered at build time by next/og — no external assets, so it cannot
 * break on a font or image fetch.
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
          justifyContent: "center",
          padding: "80px",
          background: "#0B0B0F",
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(255,106,28,0.20) 0%, transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#FF6A1C",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Full-Stack Developer
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 82,
            fontWeight: 700,
            color: "#FFFFFF",
            marginTop: 26,
            lineHeight: 1.1,
          }}
        >
          Shirajul Islam Shakur
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#A1A1AA",
            marginTop: 30,
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          I build production software people actually use — React, Next.js,
          TypeScript, Node.js, and Laravel.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#71717A",
            marginTop: 44,
          }}
        >
          shakurshirajul.com
        </div>
      </div>
    ),
    size,
  );
}
