import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#200d1e",
          borderRadius: 36,
        }}
      >
        <svg width="132" height="72" viewBox="0 0 132 72">
          <path
            d="M6 38h22l11-25 15 49 13-35 10 11h49"
            fill="none"
            stroke="#ee7b3b"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size,
  );
}
