"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { SpotifyIcon } from "@/components/BrandIcons";
import { useAudio } from "@/context/AudioContext";

export default function FloatingAudioPlayer() {
  const {
    currentEpisode,
    isPlaying,
    currentTime,
    duration,
    volume,
    playbackRate,
    isPlayerVisible,
    togglePlay,
    seek,
    setVolume,
    setPlaybackRate,
    skipTime,
    closePlayer,
  } = useAudio();

  const [isMinimized, setIsMinimized] = useState(false);
  const [prevVolume, setPrevVolume] = useState(volume);

  if (!isPlayerVisible || !currentEpisode) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    seek((val / 100) * duration);
  };

  const toggleMute = () => {
    if (volume > 0) {
      setPrevVolume(volume);
      setVolume(0);
    } else {
      setVolume(prevVolume || 0.85);
    }
  };

  const cycleSpeed = () => {
    const rates = [1, 1.25, 1.5, 2];
    const nextIdx = (rates.indexOf(playbackRate) + 1) % rates.length;
    setPlaybackRate(rates[nextIdx]);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMinimized ? "translate-y-[calc(100%-48px)]" : "translate-y-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 pb-3">
        <div className="bg-[#0B1220]/95 backdrop-blur-2xl border border-[#3EF7D8]/30 rounded-2xl p-3 sm:p-4 shadow-2xl shadow-black/80 relative overflow-hidden">
          
          {/* Top subtle scrub progress bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 group cursor-pointer">
            <div
              className="bg-[#3EF7D8] h-full transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex items-center justify-between gap-3 sm:gap-6 mt-1">
            
            {/* Left: Thumbnail & Episode info (35%) */}
            <div className="flex items-center gap-3 min-w-0 max-w-[40%] sm:max-w-[30%]">
              <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-xl overflow-hidden flex-shrink-0 border border-[#3EF7D8]/30">
                <Image
                  src={currentEpisode.thumbnail}
                  alt={currentEpisode.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-[#3EF7D8] uppercase tracking-wider">
                    EP #{currentEpisode.number}
                  </span>
                  {isPlaying && (
                    <div className="flex items-end gap-0.5 h-3">
                      <span className="w-0.5 h-2.5 bg-[#3EF7D8] rounded-full wave-bar" />
                      <span className="w-0.5 h-3 bg-[#3EF7D8] rounded-full wave-bar" style={{ animationDelay: "0.2s" }} />
                      <span className="w-0.5 h-1.5 bg-[#3EF7D8] rounded-full wave-bar" style={{ animationDelay: "0.4s" }} />
                    </div>
                  )}
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                  {currentEpisode.title}
                </h4>
                <p className="text-[10px] sm:text-xs text-[#B0B7C3] truncate">
                  Maher Dhami
                </p>
              </div>
            </div>

            {/* Center: Controls & Scrubber (45%) */}
            <div className="flex-1 flex flex-col items-center max-w-lg">
              
              {/* Playback Buttons */}
              <div className="flex items-center gap-3 sm:gap-5 mb-1.5">
                {/* Skip -15s */}
                <button
                  onClick={() => skipTime(-15)}
                  className="text-[#B0B7C3] hover:text-white transition-colors"
                  title="Rewind 15s"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {/* Play / Pause */}
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-[#3EF7D8] text-[#050816] flex items-center justify-center shadow-lg shadow-[#3EF7D8]/30 hover:scale-105 active:scale-95 transition-all"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 fill-current" />
                  ) : (
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  )}
                </button>

                {/* Skip +30s */}
                <button
                  onClick={() => skipTime(30)}
                  className="text-[#B0B7C3] hover:text-white transition-colors"
                  title="Forward 30s"
                >
                  <RotateCw className="w-4 h-4" />
                </button>

                {/* Speed Toggle */}
                <button
                  onClick={cycleSpeed}
                  className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/10 hover:bg-[#3EF7D8]/20 text-[#3EF7D8] transition-colors border border-white/10"
                  title="Playback Speed"
                >
                  {playbackRate}x
                </button>
              </div>

              {/* Progress Slider & Times */}
              <div className="w-full flex items-center gap-2 text-[10px] sm:text-xs text-[#B0B7C3] font-mono">
                <span>{formatTime(currentTime)}</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progressPercent || 0}
                  onChange={handleSeekChange}
                  className="flex-1 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#3EF7D8]"
                />
                <span>{formatTime(duration)}</span>
              </div>

            </div>

            {/* Right: Volume & Minimize (20%) */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Volume Slider (hidden on tiny screens) */}
              <div className="hidden sm:flex items-center gap-1.5">
                <button
                  onClick={toggleMute}
                  className="text-[#B0B7C3] hover:text-[#3EF7D8] transition-colors"
                  aria-label="Toggle Mute"
                >
                  {volume === 0 ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-16 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#3EF7D8]"
                />
              </div>

              {/* Open in Spotify */}
              <a
                href={currentEpisode.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#1DD1B9]/15 text-[#1DD1B9] border border-[#1DD1B9]/30 hover:bg-[#1DD1B9] hover:text-[#050816] transition-all"
                title="Listen full episode on Spotify"
              >
                <SpotifyIcon className="w-3.5 h-3.5" />
                <span>Spotify</span>
              </a>

              {/* Minimize / Expand */}
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 rounded-lg text-[#B0B7C3] hover:text-white bg-white/5"
                title={isMinimized ? "Expand Player" : "Minimize Player"}
              >
                {isMinimized ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {/* Close Player */}
              <button
                onClick={closePlayer}
                className="p-1.5 rounded-lg text-[#B0B7C3] hover:text-rose-400 bg-white/5"
                title="Close Player"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
