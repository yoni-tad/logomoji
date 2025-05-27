import { useRef, useEffect } from "react";

export default function LogoPreview(props) {
  const boarderRef = props.boarderRef;
  const emoji = props.emoji;
  const borderRadius = props.borderRadius;
  const bgColor = props.bgColor;
  const iconSize = props.iconSize;
  const padding = props.padding;

  const width = 380;
  const height = 380;

  useEffect(() => {
    const canvas = boarderRef.current;
    if (canvas) {
      canvas.width = 380;
      canvas.height = 380;
      const ctx = canvas.getContext("2d");

      ctx.beginPath();
      ctx.moveTo(30, 0);
      ctx.roundRect(padding, padding, width - padding * 2, height - padding * 2, borderRadius);
      ctx.closePath();
      ctx.fillStyle = bgColor;
      ctx.fill();

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font =
        iconSize +
        "px Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif";
      ctx.fillText(emoji, 190, 190);
    }
  }, [iconSize, emoji, borderRadius, bgColor, padding]);

  return <canvas id="imgCanvas" ref={boarderRef}></canvas>;
}
