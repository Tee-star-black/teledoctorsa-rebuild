import { ImageResponse } from "next/og";

export const alt = "TeleDoctorSA connected healthcare technology";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 76px",
          background: "#200d1e",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 58,
              height: 58,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              background: "#ee7b3b",
            }}
          >
            <svg width="40" height="24" viewBox="0 0 40 24">
              <path
                d="M2 13h7l4-9 5 17 4-12 4 4h12"
                fill="none"
                stroke="#200d1e"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span>TeleDoctorSA</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              maxWidth: 950,
              fontSize: 76,
              lineHeight: 0.98,
              letterSpacing: "-0.055em",
              fontWeight: 750,
            }}
          >
            Connected healthcare technology for care that continues.
          </div>

          <div
            style={{
              maxWidth: 900,
              fontSize: 27,
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Virtual care • ECG247 remote monitoring • Connected digital health records
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "rgba(255,255,255,0.58)",
          }}
        >
          <span>South Africa</span>
          <span style={{ color: "#ee7b3b", fontWeight: 700 }}>
            teledoctorsa.co.za
          </span>
        </div>
      </div>
    ),
    size,
  );
}
