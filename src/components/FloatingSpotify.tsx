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
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-white/95 border-2 border-slate-200 shadow-xl hover:shadow-2xl hover:scale-105 hover:border-[#2BF4C3] transition-all duration-300 backdrop-blur-xl"
      >
        <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center font-bold shadow-md relative">
          <SpotifyIcon className="w-4 h-4 text-[#1DB954]" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#2BF4C3] border-2 border-white animate-pulse" />
        </div>

        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase font-bold text-[#00C49F] tracking-wider leading-tight">
            Stream Show
          </span>
          <span className="text-xs font-black text-slate-900 group-hover:text-[#00C49F] transition-colors leading-tight">
            Listen on Spotify
          </span>
        </div>
      </a>
    </aside>
  );
}
