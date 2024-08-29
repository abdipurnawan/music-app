"use client";
import React from "react";

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
}

const tracks: Track[] = [
  { id: 1, title: "Dystopia", artist: "Artist", duration: "3:45" },
  { id: 2, title: "Chaos Reigns", artist: "Artist", duration: "4:12" },
  { id: 3, title: "Anarchy's Anthem", artist: "Artist", duration: "3:58" },
  { id: 4, title: "Rebellion's Cry", artist: "Artist", duration: "4:30" },
  { id: 5, title: "Apocalypse Now", artist: "Artist", duration: "5:01" },
];

const TopTracksSection: React.FC = () => {
  return (
    <div className="text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Efek cahaya fullscreen */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 via-purple-400/10 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-4xl font-bold mb-4 text-center">Top Tracks</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Explore our most popular tracks, handpicked for your listening pleasure. These songs have captured the hearts of our community.
        </p>

        <div className="backdrop-blur-xl bg-white/10 p-8 rounded-3xl border border-white/20 shadow-2xl">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="flex items-center justify-between py-4 px-6 rounded-2xl transition-all duration-300 hover:bg-white/20 hover:shadow-lg group"
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-purple-400 w-8">
                  {track.id}
                </span>
                <div>
                  <h3 className="font-semibold">{track.title}</h3>
                  <p className="text-sm text-gray-400">{track.artist}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-400">{track.duration}</span>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-purple-400 hover:text-purple-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopTracksSection;