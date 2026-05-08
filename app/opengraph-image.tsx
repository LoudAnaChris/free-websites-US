import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Free SEO Websites by Loudachris - Free 5-day build, $247/mo, 90-day qualified-lead guarantee";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#122933",
          color: "#F5F5F5",
          padding: "72px 80px",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative rose blob top-right */}
        <div
          style={{
            position: "absolute",
            top: -240,
            right: -180,
            width: 640,
            height: 640,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(227,87,171,0.42) 0%, rgba(227,87,171,0) 70%)",
            display: "flex",
          }}
        />
        {/* Decorative indigo blob bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -220,
            left: -180,
            width: 540,
            height: 540,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(140,135,201,0.4) 0%, rgba(140,135,201,0) 70%)",
            display: "flex",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#8C87C9",
            fontWeight: 700,
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 48,
              height: 4,
              background: "#E357AB",
              display: "flex",
            }}
          />
          Free SEO Websites by Loudachris
        </div>

        {/* Spacer */}
        <div style={{ height: 36, display: "flex" }} />

        {/* Headline */}
        <div
          style={{
            fontSize: 84,
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            color: "#FFFFFF",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Free SEO Websites for</span>
          <span style={{ display: "flex", alignItems: "center", gap: 0 }}>
            <span style={{ color: "#E357AB" }}>US small businesses.</span>
          </span>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1, display: "flex", minHeight: 32 }} />

        {/* Three stat pills */}
        <div
          style={{
            display: "flex",
            gap: 20,
            zIndex: 1,
            marginBottom: 36,
          }}
        >
          {[
            { num: "$247", label: "per month, no upfront" },
            { num: "5 days", label: "build, in writing" },
            { num: "90 days", label: "qualified-lead guarantee" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px 28px",
                borderRadius: 18,
                background: "rgba(245,245,245,0.06)",
                border: "1px solid rgba(245,245,245,0.14)",
                flex: 1,
              }}
            >
              <div
                style={{
                  fontSize: 44,
                  fontWeight: 900,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                  display: "flex",
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontSize: 18,
                  color: "rgba(245,245,245,0.7)",
                  marginTop: 4,
                  display: "flex",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip: domain + trust */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 1,
            paddingTop: 24,
            borderTop: "1px solid rgba(245,245,245,0.12)",
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                background: "#E357AB",
                borderRadius: "50%",
                display: "flex",
              }}
            />
            freeseowebsites.com
          </div>
          <div
            style={{
              fontSize: 20,
              color: "rgba(245,245,245,0.7)",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ color: "#FFD580", fontSize: 24 }}>★★★★★</span>
            <span>80+ five-star Google reviews</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
