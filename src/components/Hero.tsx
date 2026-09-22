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
      {/* Background tech grid pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />

      {/* Clean subtle brand ambient lighting */}
      <div className="absolute top-1/4 right-[10%] w-[600px] h-[600px] bg-[#2BF4C3]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 left-5 w-[450px] h-[450px] bg-[#00C49F]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Buttons (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Clean Pill Badge: BUILT FOR STUDENT FOUNDERS */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#2BF4C3]/40 shadow-xs mb-7">
              <span className="w-2 h-2 rounded-full bg-[#2BF4C3] animate-pulse" />
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Built for Student Founders &amp; Builders
              </span>
            </div>

            {/* Giant Styled Headline faithfully styled after the Official Show Logo */}
            <div className="mb-4 leading-none">
              <span className="text-2xl sm:text-3xl font-bold text-slate-900 block mb-1">
                The
              </span>
              <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight text-slate-900 leading-[0.95] mb-1">
                YOUNG
              </h1>
              <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                <span className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight bg-gradient-to-r from-[#00C49F] via-[#1DD1B9] to-[#2BF4C3] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(43,244,195,0.4)] leading-[0.95]">
                  FOUNDER
                </span>
                <span className="font-script text-4xl sm:text-6xl xl:text-7xl text-slate-900 font-normal self-end pb-1 sm:pb-2 relative inline-block">
                  Show
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] sm:h-[4px] bg-[#2BF4C3] rounded-full shadow-[0_0_10px_rgba(43,244,195,0.8)]" />
                </span>
                <div className="self-center pb-1">
                  <SoundWaveBars className="h-6 sm:h-9" />
                </div>
              </div>
            </div>

            {/* Official Logo Motto Ribbon: REAL STORIES. REAL LESSONS. A BRIGHTER TOMORROW. */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-slate-700 mb-5 flex-wrap">
              <span>Real Stories.</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2BF4C3]" />
              <span>Real Lessons.</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2BF4C3]" />
              <span className="text-[#00C49F] font-black">A Brighter Tomorrow.</span>
            </div>

            {/* Audience-First Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mb-6">
              A podcast and movement dedicated to student developers, young founders, creators, and self-taught builders. We document the messy reality—the late nights, broken launches, self-doubt, and hard-won lessons—before the world knows your name.
            </p>

            {/* Live Audio Preview Bar Graphic with Vibrant Equalizer */}
            <div className="w-full max-w-lg mb-8 p-3.5 rounded-2xl bg-white/95 border border-slate-200/90 shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-teal-600 to-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-teal-600/30">
                  <SpotifyIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-900">Latest Episode Stream</span>
                    <span className="text-[9px] font-mono text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200 font-bold uppercase">Streaming Now</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium">Why I Started My First Startup • 38:15 min</p>
                </div>
              </div>

              {/* Animated equalizer bars in logo mint green */}
              <div className="flex items-end gap-1 h-5 px-2">
                <span className="w-1 bg-[#2BF4C3] rounded-full wave-bar" style={{ animationDelay: "0s" }} />
                <span className="w-1 bg-[#00C49F] rounded-full wave-bar" style={{ animationDelay: "0.2s" }} />
                <span className="w-1 bg-[#2BF4C3] rounded-full wave-bar" style={{ animationDelay: "0.4s" }} />
                <span className="w-1 bg-[#00C49F] rounded-full wave-bar" style={{ animationDelay: "0.1s" }} />
                <span className="w-1 bg-[#2BF4C3] rounded-full wave-bar" style={{ animationDelay: "0.3s" }} />
              </div>
            </div>

            {/* Action Buttons Row with Vibrant Shadow CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-6">
              
              {/* Listen on Spotify */}
              <a
                href={SHOW_INFO.spotifyShowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 border border-teal-500/30 transition-all transform hover:scale-[1.02] cursor-pointer"
              >
                <SpotifyIcon className="w-4 h-4 text-[#1DB954]" />
                <span>Listen on Spotify</span>
              </a>

              {/* Watch on YouTube */}
              <a
                href={SHOW_INFO.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-sm bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 hover:border-red-300 shadow-sm hover:shadow-md transition-all transform hover:scale-[1.02] cursor-pointer"
              >
                <YoutubeIcon className="w-4 h-4 text-[#FF0000]" />
                <span>Watch on YouTube</span>
              </a>

              {/* Who This Is For button */}
              <a
                href="#who-its-for"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-semibold text-sm bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-teal-500 hover:text-teal-600 shadow-sm transition-all cursor-pointer group"
              >
                <span>Who This Is For</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-teal-600" />
              </a>

            </div>

            {/* Social Proof Graphic: Avatars & Community */}
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <div className="flex -space-x-2 overflow-hidden">
                <span className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-gradient-to-tr from-teal-500 to-cyan-400 text-[10px] font-bold text-white flex items-center justify-center shadow-sm">
                  MD
                </span>
                <span className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-gradient-to-tr from-purple-500 to-indigo-500 text-[10px] font-bold text-white flex items-center justify-center shadow-sm">
                  DEV
                </span>
                <span className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-gradient-to-tr from-amber-500 to-rose-400 text-[10px] font-bold text-white flex items-center justify-center shadow-sm">
                  YC
                </span>
              </div>
              <p className="font-medium text-slate-600">
                Joined by <strong className="text-teal-700 font-bold">500+ student founders</strong> &amp; developers building the future
              </p>
            </div>

          </div>

          {/* Right Column: 3D High-Tech Studio Showcase Graphic with Vibrant Border */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[480px]">
              
              {/* Clean Studio Card Graphic */}
              <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-white border-2 border-slate-200/90 shadow-2xl hover:border-[#2BF4C3]/50 transition-colors group">
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-white">
                  <Image
                    src="/images/hero-studio-graphic.jpg"
                    alt="The Young Founder Show 3D Tech Podcast Studio"
                    fill
                    priority
                    className="object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                  
                  {/* Soft scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Graphic Card 1 (Top-Left): LIVE AUDIO METRICS */}
              <div className="absolute -top-5 -left-5 bg-white/95 backdrop-blur-md border border-teal-200 shadow-xl rounded-2xl p-3 flex items-center gap-3 animate-float hidden sm:flex">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-50 to-emerald-100 border border-teal-200 flex items-center justify-center text-teal-700 font-bold">
                  <SpotifyIcon className="w-5 h-5 text-[#1DB954]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-900">Weekly Drops</span>
                  </div>
                  <span className="text-xs font-black text-teal-700">Spotify &bull; YouTube</span>
                </div>
              </div>

              {/* Floating Graphic Card 2 (Bottom-Right): STUDENT FOUNDERS */}
              <div className="absolute -bottom-6 -right-5 bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl rounded-2xl p-3.5 flex items-center gap-3 animate-float-delayed hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-[#2BF4C3] flex items-center justify-center font-black text-sm shadow-md">
                  <Sparkles className="w-5 h-5 text-[#2BF4C3]" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900">Student Builders</p>
                  <p className="text-[10px] font-bold text-slate-600">100% Free · No Fluff</p>
                </div>
              </div>

              {/* Floating Graphic Card 3 (Bottom-Left): BROADCAST QUALITY */}
              <div className="absolute -bottom-5 -left-4 bg-white/95 backdrop-blur-md border border-teal-200 shadow-xl rounded-2xl p-3 flex items-center gap-2.5 animate-float hidden sm:flex">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-500 text-white flex items-center justify-center font-black text-xs shadow-md shadow-teal-500/20">
                  HQ
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-800">Direct Audio</span>
                  </div>
                  <span className="text-xs font-black text-teal-700">Studio Master</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
