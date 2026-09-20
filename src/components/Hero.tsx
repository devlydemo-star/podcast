"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import { SoundWaveBars } from "@/components/BrandLogo";
import { YoutubeIcon, SpotifyIcon } from "@/components/BrandIcons";
import { SHOW_INFO } from "@/data/podcastData";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-hero-gradient">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/3 right-[15%] w-[550px] h-[550px] bg-[#2BF4C3]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-[350px] h-[350px] bg-[#2BF4C3]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Buttons (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pill Badge: BUILT FOR STUDENT FOUNDERS */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#081717] border border-[#2BF4C3]/30 shadow-md shadow-[#2BF4C3]/10 mb-7">
              <Sparkles className="w-3.5 h-3.5 text-[#2BF4C3]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Built for Student Founders &amp; Builders
              </span>
            </div>

            {/* Giant Styled Headline */}
            <div className="mb-6 leading-none">
              <span className="text-2xl sm:text-3xl font-bold text-white block mb-1">
                The
              </span>
              <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[0.95] mb-1">
                YOUNG
              </h1>
              <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                <span className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight text-[#2BF4C3] leading-[0.95]">
                  FOUNDER
                </span>
                <span className="font-script text-4xl sm:text-6xl xl:text-7xl text-white font-normal self-end pb-1 sm:pb-2">
                  Show
                </span>
                <div className="self-center pb-1">
                  <SoundWaveBars className="h-6 sm:h-9" />
                </div>
              </div>
            </div>

            {/* New Repositioned Tagline */}
            <div className="text-base sm:text-xl font-semibold text-white/95 mb-4 tracking-wide leading-snug">
              <p>Real stories from the journey of building something meaningful before success arrives.</p>
            </div>

            {/* Audience-First Description */}
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-xl mb-8">
              A podcast and movement dedicated to student developers, young founders, creators, and self-taught builders. We document the messy reality—the late nights, broken launches, self-doubt, and hard-won lessons—before the world knows your name.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-4">
              
              {/* Listen on Spotify */}
              <a
                href={SHOW_INFO.spotifyShowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm bg-[#2BF4C3] hover:bg-[#22d3a9] text-[#03100D] shadow-lg shadow-[#2BF4C3]/30 hover:shadow-[#2BF4C3]/50 transition-all transform hover:scale-105 cursor-pointer"
              >
                <SpotifyIcon className="w-4 h-4 text-[#03100D]" />
                <span>Listen on Spotify</span>
              </a>

              {/* Watch on YouTube */}
              <a
                href={SHOW_INFO.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-sm bg-transparent hover:bg-white/5 text-white border border-white/30 hover:border-white transition-all transform hover:scale-105 cursor-pointer"
              >
                <YoutubeIcon className="w-4 h-4 text-[#FF0000]" />
                <span>Watch on YouTube</span>
              </a>

              {/* Who This Is For button */}
              <a
                href="#who-its-for"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-semibold text-sm bg-transparent hover:bg-white/5 text-white border border-white/30 hover:border-[#2BF4C3] hover:text-[#2BF4C3] transition-all cursor-pointer group"
              >
                <span>Who This Is For</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

            </div>

          </div>

          {/* Right Column: Circular Official Artwork with Cyan Ring (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
              
              {/* Outer pulsing glow ring */}
              <div className="absolute inset-0 rounded-full bg-[#2BF4C3]/20 blur-3xl scale-95 pointer-events-none" />

              {/* Exact Circular Artwork Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#2BF4C3] shadow-[0_0_50px_rgba(43,244,195,0.35)] bg-[#03100D] group">
                <Image
                  src={SHOW_INFO.coverImage}
                  alt="The Young Founder Show - Built for Student Founders & Builders"
                  fill
                  priority
                  className="object-cover group-hover:scale-103 transition-transform duration-700"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
