"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { SpotifyIcon, YoutubeIcon } from "@/components/BrandIcons";
import { SHOW_INFO, EPISODES } from "@/data/podcastData";

function ApplePodcastIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 7.04c.66-.82 1.11-1.96.99-3.1-.96.04-2.12.64-2.8 1.44-.61.71-1.14 1.87-.99 2.98 1.07.08 2.16-.54 2.8-1.32z" />
    </svg>
  );
}

export default function LatestEpisodeSection() {
  const latest = EPISODES[0];

  return (
    <section id="latest-episode" className="py-24 relative bg-[#F8FAFC] border-t border-slate-200/80 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[550px] h-[400px] bg-teal-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-16 border-b border-slate-200">
          
          {/* Column 1: Text info & CTAs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Sample Episode Spotlight
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Why I Started My First Startup
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              In this episode, we break down the unvarnished reality behind launching a first software project — the initial spark, early validation mistakes, shipping late at night, and what we learned before success arrived.
            </p>

            <div className="flex items-center gap-3.5 flex-wrap">
              <a
                href={latest.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
              >
                <SpotifyIcon className="w-4 h-4 text-[#1DB954]" />
                <span>Listen on Spotify</span>
              </a>

              <a
                href={latest.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm transition-all cursor-pointer hover:scale-[1.02]"
              >
                <YoutubeIcon className="w-4 h-4 text-[#FF0000]" />
                <span>Watch on YouTube</span>
              </a>
            </div>
          </div>

          {/* Column 2: Episode Card Artwork (4 cols) */}
          <div className="lg:col-span-4">
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xl group hover:border-teal-500/60 transition-all">
              {/* Cover Artwork */}
              <div className="absolute inset-0">
                <Image
                  src={SHOW_INFO.coverImage}
                  alt="Why I Started My First Startup - The Young Founder Show"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
              </div>

              {/* Text Overlay on bottom */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between items-start text-left z-10">
                <span className="text-xs font-mono font-bold text-teal-400 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-teal-500/30 uppercase tracking-wider">
                  EP. 01
                </span>

                <div className="w-full">
                  <h3 className="text-sm font-black text-white leading-tight uppercase tracking-tight mb-2 drop-shadow-md">
                    WHY I STARTED MY FIRST STARTUP
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-teal-300 bg-slate-950/90 px-2.5 py-0.5 rounded-full border border-teal-500/30">
                      Full Audio Breakdown
                    </span>
                    <span className="text-[10px] text-slate-300 font-mono">
                      Spotify &bull; YouTube
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Listen On Platforms (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-4 h-0.5 bg-teal-600" />
              <span className="text-xs uppercase font-extrabold tracking-widest text-slate-500">
                LISTEN ON
              </span>
            </div>

            {/* Spotify */}
            <a
              href={SHOW_INFO.spotifyShowUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-teal-500 hover:shadow-md transition-all group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1DB954] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <SpotifyIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                    Spotify
                  </h4>
                  <p className="text-[10px] text-slate-500">Listen on Spotify</p>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* YouTube */}
            <a
              href={SHOW_INFO.youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-teal-500 hover:shadow-md transition-all group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FF0000] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <YoutubeIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                    YouTube
                  </h4>
                  <p className="text-[10px] text-slate-500">Watch video podcast</p>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* Apple Podcasts */}
            <a
              href="https://podcasts.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-teal-500 hover:shadow-md transition-all group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#8727FF] to-[#D544FF] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <ApplePodcastIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                    Apple Podcasts
                  </h4>
                  <p className="text-[10px] text-slate-500">Audio episodes</p>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all" />
            </a>
          </div>

        </div>

        {/* Centered Mission Quote Banner */}
        <div className="pt-12 text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base italic text-slate-600 font-medium leading-relaxed">
            &ldquo;A platform for every student, creator, and dreamer who believes in building a better tomorrow.&rdquo;
          </p>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full mx-auto mt-4" />
        </div>

      </div>
    </section>
  );
}
