import { useEffect, useState } from "react";
import { HexAlphaColorPicker } from "react-colorful";

export default function ControlsPanel(props) {
  const [color, setColor] = useState("#ec4899");  

  useEffect(() => {
    props.setBgColor(color);
  }, [color]);

  return (
    <div className="flex flex-col gap-4 p-2">
      {/* border radius */}
      <div className="">
        <label for="boarder-range" class="block mb-2 font-semibold text-xl">
          Border radius
        </label>
        <input
          id="boarder-range"
          min={0}
          max={190}
          type="range"
          value={props.borderRadius}
          onChange={(e) => props.setBorderRadius(Number(e.target.value))}
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          style={{
            accentColor: "#ec4899",
          }}
        />
      </div>
      {/* icons size */}
      <div className="">
        <label for="emoji-range" class="block mb-2 font-semibold text-xl">
          Emoji size
        </label>
        <input
          id="emoji-range"
          min={30}
          max={220}
          type="range"
          value={props.iconSize}
          onChange={(e) => props.setIconSize(Number(e.target.value))}
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          style={{
            accentColor: "#ec4899",
          }}
        />
      </div>
      {/* Padding */}
      <div className="">
        <label htmlFor="padding-range" className="block mb-2 font-semibold text-xl">
          Padding
        </label>
        <input
          id="padding-range"
          min={2}
          max={50}
          type="range"
          value={props.padding}
          onChange={(e) => props.setPadding(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer text-pink-400"
          style={{
            accentColor: "#ec4899",
          }}
        />
      </div>
      <div className="">
        <label class="block mb-2 font-semibold">Background</label>
        <HexAlphaColorPicker onChange={setColor} className="my-2" />
      </div>
    </div>
  );
}
