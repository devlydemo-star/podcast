"use client";

import React from "react";
import { Sparkles, ArrowRight, Users } from "lucide-react";
import { SHOW_INFO } from "@/data/podcastData";
import { SpotifyIcon } from "@/components/BrandIcons";

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="py-28 relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-teal-50/40 to-[#F8FAFC] border-t border-slate-200">
      {/* Centered ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-teal-500/8 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-teal-600" />
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700">
            The Movement
          </span>
        </div>

        {/* Large Emotional Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.05] mb-8">
          A Better Tomorrow <br className="hidden sm:inline" />
          <span className="text-teal-600">Starts With Building Today.</span>
        </h2>

        {/* Core Manifesto Body */}
        <div className="max-w-3xl mx-auto space-y-6 text-lg sm:text-2xl text-slate-600 font-normal leading-relaxed mb-12">
          <p className="text-slate-900 font-medium">
            The Young Founder Show exists for anyone trying to create something meaningful before the world knows their name.
          </p>
          <p>
            Whether you&apos;re building a startup, learning to code, creating content, or chasing a dream, you&apos;re already on the journey.
          </p>
          <p className="text-2xl sm:text-3xl font-black text-teal-600 tracking-tight pt-2">
            Keep building.
          </p>
        </div>

        {/* Dual High-Impact Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          
          {/* Join Community */}
          <a
            href={SHOW_INFO.communityFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] cursor-pointer"
          >
            <Users className="w-5 h-5 text-teal-400" />
            <span>Join The Community</span>
          </a>

          {/* Listen on Spotify */}
          <a
            href={SHOW_INFO.spotifyShowUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm transition-all transform hover:scale-[1.02] cursor-pointer"
          >
            <SpotifyIcon className="w-5 h-5 text-[#1DB954]" />
            <span>Listen on Spotify</span>
          </a>

        </div>

        {/* Closing Tagline */}
        <p className="text-xs sm:text-sm text-slate-500 tracking-widest uppercase mt-12 font-mono">
          The Young Founder Show • Real Stories. Real Lessons. A Brighter Tomorrow.
        </p>

      </div>
    </section>
  );
}
