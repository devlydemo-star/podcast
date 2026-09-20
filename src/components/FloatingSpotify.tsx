"use client";

import React from "react";
import { SpotifyIcon } from "@/components/BrandIcons";
import { SHOW_INFO } from "@/data/podcastData";

export default function FloatingSpotify() {
  return (
    <aside aria-label="Spotify Quick Access" className="fixed bottom-6 right-6 z-40">
      <a
        href={SHOW_INFO.spotifyShowUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#041512]/95 border border-[#2BF4C3]/50 shadow-2xl shadow-black/80 hover:scale-105 transition-all duration-300 backdrop-blur-xl"
      >
        {/* Subtle pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#2BF4C3]/20 blur-sm group-hover:bg-[#2BF4C3]/40 transition-all -z-10" />

        <div className="w-7 h-7 rounded-full bg-[#2BF4C3] text-[#03100D] flex items-center justify-center font-bold">
          <SpotifyIcon className="w-4 h-4" />
        </div>

        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase font-bold text-[#2BF4C3] tracking-wider leading-tight">
            Stream Show
          </span>
          <span className="text-xs font-extrabold text-white group-hover:text-[#2BF4C3] transition-colors leading-tight">
            Listen on Spotify
          </span>
        </div>
      </a>
    </aside>
  );
}
