/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import ShineBorder from "@/components/magicui/shine-border";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const FeaturedPlayerSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener("timeupdate", () => {
        setCurrentTime(audioElement.currentTime);
      });
      audioElement.addEventListener("loadedmetadata", () => {
        setDuration(audioElement.duration);
      });

      audioElement.addEventListener("ended", () => {
        setIsPlaying(false);
        setCurrentTime(0);
      });

      setDuration(audioElement.duration);

      if (isPlaying) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  }, [isPlaying, audioRef.current]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = progressBarRef.current;
    const audioElement = audioRef.current;
    if (progressBar && audioElement) {
      const rect = progressBar.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const newTime = (offsetX / rect.width) * duration;
      audioElement.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div
      id="featured-player"
      className="text-white py-20 my-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        <h2 className="mb-4 text-center text-5xl font-bold tracking-tight text-foreground">
          Featured Player
        </h2>
        <h4 className="mb-8 text-center text-lg font-medium tracking-tight text-foreground/80 max-w-3xl mx-auto">
          Dive into the latest release, &aposEra Malapetaka&apos by Carnage a
          hard-hitting metal anthem overflowing with raw energy and intense
          lyrics, vividly portraying the chaos in society.
        </h4>

        <ShineBorder
          className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-3xl border bg-background md:shadow-xl backdrop-blur-xl"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          borderRadius={24}
        >
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12 px-6 py-6">
            {/* Album Art */}
            <div className="w-full md:w-48 md:h-48 relative group">
              <Image
                src="/assets/images/featured-player-album.jpeg"
                alt="Era Malapetaka by Carnage"
                width={256}
                height={256}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-6xl text-white hover:text-purple-400 transition-colors duration-300"
                >
                  {isPlaying ? "⏸" : "▶"}
                </button>
              </div>
            </div>

            {/* Player Controls and Info */}
            <div className="flex-1 w-full z-10">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold">Era Malapetaka</h3>
                <p className="text-foreground">Carnage</p>
              </div>

              {/* Time Info */}
              <div className="flex justify-end text-sm text-foreground/60 -mt-5 mb-2">
                <span>{formatTime(currentTime)}/{formatTime(duration)}</span>
              </div>

              {/* Progress Bar */}
              <div
                ref={progressBarRef}
                className="w-full bg-gray-700 rounded-full h-2 mb-4 cursor-pointer"
                onClick={handleProgressClick}
              >
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                ></div>
              </div>

              {/* Controls */}
              <div className="flex justify-between items-center">
                {/* <button className="text-2xl hover:text-purple-400 transition-colors duration-300">
                  ⏮
                </button> */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-4xl hover:text-purple-400 transition-colors duration-300"
                >
                  {isPlaying ? "⏸" : "▶"}
                </button>
                {/* <button className="text-2xl hover:text-purple-400 transition-colors duration-300">
                  ⏭
                </button> */}
              </div>

              {/* Visualizer */}
              <div className="mt-8 h-4 rounded-lg overflow-hidden">
                <div className="flex h-full items-end justify-around">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-purple-500 rounded-t-sm"
                      style={{
                        height: `${Math.random() * 100}%`,
                        opacity: isPlaying ? 1 : 0.5,
                        transition: "all 0.2s ease",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ShineBorder>
      </div>

      {/* Audio Tag */}
      <audio ref={audioRef} src="/assets/audios/era-malapetaka.mp3" />
    </div>
  );
};

export default FeaturedPlayerSection;
