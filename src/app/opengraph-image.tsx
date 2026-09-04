import { ImageResponse } from "next/og";

export const alt = "TeleDoctorSA connected care technology";
export const size = { width: 1200, height: 630 };
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
          background: "#45152f",
          color: "#fff9f6",
          padding: "72px 82px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 62,
              height: 62,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid rgba(255,255,255,0.28)",
            }}
          >
            <span style={{ fontSize: 25, fontWeight: 800, color: "#f08a4b" }}>T</span>
          </div>
          <div style={{ fontSize: 31, fontWeight: 760, letterSpacing: "-1px" }}>TeleDoctorSA</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26, maxWidth: 920 }}>
          <div style={{ fontSize: 19, textTransform: "uppercase", letterSpacing: "5px", color: "#f08a4b" }}>
            Connected care technology
          </div>
          <div style={{ fontSize: 70, lineHeight: 1.02, fontWeight: 760, letterSpacing: "-4px" }}>
            Clinical technology built around modern care.
          </div>
          <div style={{ fontSize: 25, lineHeight: 1.45, color: "rgba(255,249,246,0.72)" }}>
            Virtual care, ECG247 monitoring, electronic health records and remote patient workflows.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 18, color: "rgba(255,249,246,0.56)" }}>
          <span>South Africa</span>
          <span>teledoctorsa.co.za</span>
        </div>
      </div>
    ),
    size,
  );
}
