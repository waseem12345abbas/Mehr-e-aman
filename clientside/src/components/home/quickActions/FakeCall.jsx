import { useState, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function FakeCall() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white border rounded-xl shadow-md border-[#FF3B3F]">
      <h2 className="text-lg font-bold mb-4 text-[#2C2C2C] flex items-center gap-2">
        <FaPhoneAlt className="text-[#FF3B3F]" /> Fake Call Generator
      </h2>

      <div className="flex justify-between">
        <button
          onClick={handlePlay}
          disabled={isPlaying}
          className="bg-[#FF3B3F] hover:bg-[#e63438] text-white px-4 py-2 rounded-lg transition"
        >
          {isPlaying ? "Playing..." : "Start Fake Call"}
        </button>
        <button
          onClick={handleStop}
          disabled={!isPlaying}
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-lg transition"
        >
          Stop
        </button>
      </div>

      <audio ref={audioRef} src="/sounds/ringtone.mp3" preload="auto" />
    </div>
  );
}
