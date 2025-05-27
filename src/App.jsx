import { useRef, useState } from "react";
import LogoPreview from "./components/LogoPreview";
import EmojiBoard from "./components/EmojiBoard";
import ControlsPanel from "./components/ControlsPanel";

export default function App() {
  const [selectedEmoji, setSelectedEmoji] = useState("🚀");
  const [bgColor, setBgColor] = useState("#ec4899");
  const [borderRadius, setBorderRadius] = useState(30);
  const [iconSize, setIconSize] = useState(150);
  const [padding, setPadding] = useState(5);
  const boarderRef = useRef(null);

  const handleDownload = async () => {
    const canvas = boarderRef.current;

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "logomoji.png";
    link.click();
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 pt-4 px-4 h-screen max-w-md">
      {/* nav bar */}
      <div className="sticky z-50 flex justify-center items-center">
        <LogoPreview
          boarderRef={boarderRef}
          bgColor={bgColor}
          borderRadius={borderRadius}
          emoji={selectedEmoji}
          iconSize={iconSize}
          padding={padding}
        />
      </div>
      <div className="overflow-y-auto overflow-x-hidden hide-scrollbar">
        <div className="flex-1">
          <EmojiBoard emoji={selectedEmoji} select={setSelectedEmoji} />
          <ControlsPanel
            color={bgColor}
            setBgColor={setBgColor}
            borderRadius={borderRadius}
            setBorderRadius={setBorderRadius}
            iconSize={iconSize}
            setIconSize={setIconSize}
            padding={padding}
            setPadding={setPadding}
          />
        </div>
        <p className="text-pink-500 text-center mt-6">Built by @yonitad0</p>
      </div>
      <div className="sticky bottom-0 z-50 mb-2 w-full">
        <button
          onClick={handleDownload}
          className="w-full bg-pink-400 hover:bg-pink-300 py-2 px-4 text-xl font-semibold rounded-xl"
        >
          Download
        </button>
      </div>
    </div>
  );
}
