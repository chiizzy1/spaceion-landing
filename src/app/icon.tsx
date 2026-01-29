import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 24,
        background: "transparent",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
      }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v16l18-18z" />
        <path d="M4 22h16c1.1 0 2-.9 2-2V4L4 22z" />
      </svg>
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  );
}
