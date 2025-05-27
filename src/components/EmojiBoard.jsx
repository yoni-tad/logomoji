import { useState } from "react";
import EmojiPicker from "emoji-picker-react";

export default function EmojiBoard(props) {
  const [isShowEmoji, setShowEmoji] = useState(false);
  const emojiArr = ["🔥", "💡", "🚀"];

  const selectEmojiHandler = (emoji) => {
    props.select(emoji.emoji);
    setShowEmoji(false);
  };

  return (
    <div className="p-2">
      <div className="flex justify-center gap-2">
        {emojiArr.map((emoji) => {
          return (
            <p
              key={emoji}
              onClick={() => {
                props.select(emoji), setShowEmoji(false);
              }}
              className={
                "cursor-pointer p-2 px-6 text-center rounded-lg " +
                (emoji === props.emoji ? "bg-pink-400" : "bg-pink-200")
              }
            >
              {emoji}
            </p>
          );
        })}
        <p
          onClick={() => setShowEmoji(!isShowEmoji)}
          className="cursor-pointer p-2 px-6 text-center rounded-lg bg-black text-white"
        >
          All
        </p>
      </div>

      {isShowEmoji && (
        <div className="p-4">
          <EmojiPicker onEmojiClick={selectEmojiHandler} className="max-w-62" />
        </div>
      )}
    </div>
  );
}
