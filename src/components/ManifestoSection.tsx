"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, Users, Compass, Rocket, ShieldCheck } from "lucide-react";
import { SHOW_INFO } from "@/data/podcastData";
import { SpotifyIcon } from "@/components/BrandIcons";

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="py-28 relative overflow-hidden bg-[#F8FAFC] border-t border-slate-200">
      {/* Subtle brand ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-[#2BF4C3]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-[#00C49F]" />
          <span className="text-xs font-bold uppercase tracking-widest text-slate-800">
            The Movement &amp; Golden Compass
          </span>
        </div>

        {/* Large Emotional Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.05] mb-6">
          A Better Tomorrow <br className="hidden sm:inline" />
          <span className="text-[#00C49F]">Starts With Building Today.</span>
        </h2>

        <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
          The Young Founder Show exists for anyone trying to create something meaningful before the world knows their name.
        </p>

        {/* Master 3D Compass & Manifesto Showcase Card with Clean Slate Frame */}
        <div className="relative max-w-4xl mx-auto mb-14 border-2 border-slate-200 hover:border-[#2BF4C3]/60 rounded-3xl shadow-xl group overflow-hidden bg-white p-1">
          <div className="relative w-full rounded-[21px] overflow-hidden bg-white">
            
            {/* Top logo mint accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#2BF4C3] z-10" />

            {/* 3D Compass Artwork */}
            <div className="relative w-full h-72 sm:h-96 md:h-[420px] overflow-hidden bg-slate-900">
              <Image
                src="/images/compass-manifesto-3d.jpg"
                alt="3D Golden Compass and Architectural Launch Blueprint"
                fill
                className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105 opacity-95"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              {/* Floating Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-md">
                  <Compass className="w-3.5 h-3.5 text-[#2BF4C3]" />
                  <span>ARCHITECTURAL BLUEPRINT</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-900/90 border border-[#2BF4C3]/40 backdrop-blur-md text-[#2BF4C3] text-xs font-mono font-bold shadow-md">
                  PROJECT NEBULA · 2026
                </span>
              </div>

              {/* Bottom Emotional Callout on Image */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-left">
                <span className="text-xs font-mono text-[#2BF4C3] font-bold uppercase tracking-wider block mb-1">
                  The Unwritten Rule
                </span>
                <h3 className="text-xl sm:text-3xl font-black text-white leading-tight drop-shadow-md">
                  &ldquo;You don&apos;t wait for permission. You build.&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1 font-medium">
                  Whether you&apos;re shipping an early MVP, learning a new framework, or chasing a conviction — you are already on the arena floor.
                </p>
              </div>
            </div>

            {/* Subtle Bottom Card Bar */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-[#2BF4C3] flex items-center justify-center font-bold shadow-sm">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-900">
                    Relentless Execution Flywheel
                  </h4>
                  <p className="text-xs text-slate-500">
                    Documenting the climb while it&apos;s still happening.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-900 bg-[#2BF4C3]/10 px-3.5 py-1 rounded-full border border-[#2BF4C3]/30 shadow-2xs">
                  ✓ 100% Free Movement
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Dual High-Impact Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          
          {/* Join Community Button */}
          <a
            href={SHOW_INFO.communityFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white shadow-xl ring-1 ring-[#2BF4C3]/40 transition-all transform hover:scale-[1.02] cursor-pointer"
          >
            <Users className="w-5 h-5 text-[#2BF4C3]" />
            <span>Join The Community</span>
          </a>

          {/* Listen on Spotify */}
          <a
            href={SHOW_INFO.spotifyShowUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 hover:border-[#2BF4C3] shadow-sm hover:shadow-md transition-all transform hover:scale-[1.02] cursor-pointer"
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
