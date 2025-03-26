import React, { useState } from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="relative w-full max-w-6xl h-[80vh]">
        {/* Video Player */}
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dGF1y5sKr4g"
          playing={playing}
          controls={false} // Disable default YouTube controls
          width="100%"
          height="100%"
          volume={volume}
          config={{
            youtube: {
              playerVars: {
                modestbranding: 1, 
                rel: 0, 
                showinfo: 0, 
                fs: 0, 
                iv_load_policy: 3, 
              },
            },
          }}
        />

        {/* Custom Controls */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4 py-2 bg-black bg-opacity-50 rounded">
          <button
            onClick={() => setPlaying(!playing)}
            className="text-white text-xl"
          >
            {playing ? "⏸ Pause" : "▶ Play"}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-32"
          />
        </div>
      </div>
    </div>
  );
}
