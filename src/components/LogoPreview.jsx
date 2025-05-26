import { useRef, useEffect } from "react";

export default function LogoPreview(props) {
  const boarderRef = props.boarderRef;
  const emoji = props.emoji;
  const borderRadius = props.borderRadius;
  const bgColor = props.bgColor;
  const iconSize = props.iconSize;

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = boarderRef.current;
    if (canvas) {
      canvas.width = 380;
      canvas.height = 380;
      const ctx = canvas.getContext("2d");

      ctx.beginPath();
      ctx.moveTo(30, 0);
      ctx.arcTo(380, 0, 380, 380, borderRadius);
      ctx.arcTo(380, 380, 0, 380, borderRadius);
      ctx.arcTo(0, 380, 0, 0, borderRadius);
      ctx.arcTo(0, 0, 380, 0, borderRadius);
      ctx.closePath();
      ctx.fillStyle = bgColor;
      ctx.fill();

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = iconSize + "px Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif";
      ctx.fillText(emoji, 190, 190);
    }
  }, [iconSize, emoji, borderRadius, bgColor]);

  return (
    <>
      <canvas id="imgCanvas" ref={boarderRef}></canvas>
      {/* <div
        className="h-[380px] w-[380px] p-2"
        style={{ padding: props.padding }}
      >
        <div
          ref={boarderRef}
          className="flex justify-center items-center h-full"
          style={{
            backgroundColor: bgColor,
            width: "380px",
            height: "380px",
            borderRadius: borderRadius + "%",
            fontSize: props.iconSize + "px",
          }}
        >
          <span
            style={{
              fontSize: props.iconSize + "px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {emoji ?? "🚀"}
          </span>
        </div>
      </div> */}
    </>
  );
}
