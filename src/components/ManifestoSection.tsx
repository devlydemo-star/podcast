"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { SHOW_INFO } from "@/data/podcastData";
import { WhatsappIcon, SpotifyIcon } from "@/components/BrandIcons";

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="py-28 relative overflow-hidden bg-gradient-to-b from-[#03100D] via-[#051A15] to-[#03100D] border-t border-[#2BF4C3]/20">
      {/* Intense centered ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#2BF4C3]/12 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#081717] border border-[#2BF4C3]/40 mb-6 shadow-lg shadow-[#2BF4C3]/15">
          <Sparkles className="w-4 h-4 text-[#2BF4C3]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#2BF4C3]">
            The Movement
          </span>
        </div>

        {/* Large Emotional Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] mb-8">
          A Better Tomorrow <br className="hidden sm:inline" />
          <span className="text-gradient-teal">Starts With Building Today.</span>
        </h2>

        {/* Core Manifesto Body */}
        <div className="max-w-3xl mx-auto space-y-6 text-lg sm:text-2xl text-[#94A3B8] font-normal leading-relaxed mb-12">
          <p className="text-white font-medium">
            The Young Founder Show exists for anyone trying to create something meaningful before the world knows their name.
          </p>
          <p>
            Whether you&apos;re building a startup, learning to code, creating content, or chasing a dream, you&apos;re already on the journey.
          </p>
          <p className="text-2xl sm:text-3xl font-black text-[#2BF4C3] tracking-tight pt-2">
            Keep building.
          </p>
        </div>

        {/* Dual High-Impact Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          
          {/* Join WhatsApp Community */}
          <a
            href={SHOW_INFO.whatsappCommunityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all transform hover:scale-105 cursor-pointer"
          >
            <WhatsappIcon className="w-5 h-5 text-white" />
            <span>Join WhatsApp Community</span>
          </a>

          {/* Listen on Spotify */}
          <a
            href={SHOW_INFO.spotifyShowUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm bg-[#081717] hover:bg-[#0c2222] text-white border border-[#2BF4C3]/40 hover:border-[#2BF4C3] shadow-lg transition-all transform hover:scale-105 cursor-pointer"
          >
            <SpotifyIcon className="w-5 h-5 text-[#2BF4C3]" />
            <span>Listen on Spotify</span>
          </a>

        </div>

        {/* Closing Tagline */}
        <p className="text-xs sm:text-sm text-[#94A3B8]/70 tracking-widest uppercase mt-12 font-mono">
          The Young Founder Show • Real Stories. Real Lessons. A Brighter Tomorrow.
        </p>

      </div>
    </section>
  );
}
