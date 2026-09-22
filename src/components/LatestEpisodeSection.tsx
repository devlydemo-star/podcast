"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Clock, 
  Sparkles, 
  Headphones, 
  Radio, 
  ArrowRight,
  ListFilter
} from "lucide-react";
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [simulatedSeconds, setSimulatedSeconds] = useState(0);

  const chapters = [
    {
      time: "00:00",
      seconds: 0,
      title: "The Genesis",
      desc: "Why traditional startup content failed us and the inception of The Young Founder Show.",
    },
    {
      time: "04:15",
      seconds: 255,
      title: "Validating in College",
      desc: "Getting real user feedback between morning lectures and avoiding the phantom feature trap.",
    },
    {
      time: "12:30",
      seconds: 750,
      title: "The Fatal 2 AM Bug",
      desc: "How bad database schema design broke customer auth and what we did to salvage the launch.",
    },
    {
      time: "24:45",
      seconds: 1485,
      title: "Scaling to First 1K Users",
      desc: "Zero paid marketing tactics, organic developer communities, and building in public.",
    },
    {
      time: "36:20",
      seconds: 2180,
      title: "The Day-Zero Rulebook",
      desc: "Extreme agency, compounding daily code commits, and the importance of resilience.",
    },
  ];

  // Simulated playback ticker
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setSimulatedSeconds((prev) => (prev >= 2520 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${remainingSecs.toString().padStart(2, "0")}`;
  };

  const handleSelectChapter = (idx: number) => {
    setActiveChapter(idx);
    setSimulatedSeconds(chapters[idx].seconds);
    setIsPlaying(true);
  };

  return (
    <section id="latest-episode" className="py-24 relative bg-[#F8FAFC] border-t border-slate-200/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-teal-500/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] bg-indigo-500/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-50 via-indigo-50 to-pink-50 border border-teal-200/80 mb-3.5 shadow-sm">
            <Radio className="w-3.5 h-3.5 text-teal-600 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-teal-800 via-indigo-800 to-rose-800 bg-clip-text text-transparent">
              Interactive Episode Studio
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Episode 01: <span className="text-gradient-vibrant">Why I Started My First Startup</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Experience the raw recording booth. Explore interactive chapters, review the unvarnished show notes, and dive straight into the live stream.
          </p>
        </div>

        {/* Master 3D Soundstage & Interactive Console Card with Vibrant Frame */}
        <div className="bg-white rounded-3xl border-2 border-teal-500/30 shadow-2xl overflow-hidden max-w-5xl mx-auto mb-16 relative">
          
          {/* Top Decorative Vibrant Gradient Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-400 via-sky-400 via-purple-500 to-pink-500 z-20" />

          {/* Top Half: 3D Soundstage Artwork Showcase */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden bg-slate-900 group">
            <Image
              src="/images/soundstage-3d.jpg"
              alt="3D Podcast Soundstage and Audio Mixing Console"
              fill
              className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105 opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Floating Live Studio Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>STUDIO BROADCAST · 48kHz</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-teal-500/80 backdrop-blur-md text-white text-xs font-mono font-bold shadow-md">
                EPISODE 01 · 42 MINS
              </span>
            </div>

            {/* Bottom Title Bar on Image */}
            <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-teal-300 font-bold uppercase tracking-wider block mb-1">
                  Featured Chapter: {chapters[activeChapter].time}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {chapters[activeChapter].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-lg mt-1 line-clamp-1 sm:line-clamp-none">
                  {chapters[activeChapter].desc}
                </p>
              </div>

              {/* Quick Play Trigger Pill */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-teal-500/30 transition-all cursor-pointer transform hover:scale-105 self-start sm:self-auto"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Pause Stream</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                    <span>Preview Stream</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Bottom Half: Interactive Equalizer & Audio Console */}
          <div className="p-6 sm:p-8 bg-white border-t border-slate-100 space-y-6">
            
            {/* Visual Animated Waveform Equalizer Bars */}
            <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 text-white relative overflow-hidden shadow-inner">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 block font-bold">
                      {isPlaying ? "LIVE AUDIO EQUALIZER STREAMING" : "STANDBY · CLICK PLAY TO TEST WAVEFORM"}
                    </span>
                    <span className="text-sm font-bold text-white">
                      The Young Founder Show — Ep. 01 Master Audio
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-teal-400 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                    {formatTime(simulatedSeconds)} / 42:00
                  </span>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-teal-400" />}
                  </button>
                </div>
              </div>

              {/* Dynamic Animated Waveform Heights */}
              <div className="h-16 flex items-end justify-between gap-1 sm:gap-1.5 px-1 py-1">
                {[
                  35, 60, 45, 80, 65, 90, 50, 75, 40, 85, 95, 60, 
                  70, 85, 45, 90, 55, 75, 80, 65, 90, 40, 70, 50, 
                  60, 85, 95, 40, 75, 65, 80, 55
                ].map((val, idx) => {
                  const animatedHeight = isPlaying 
                    ? Math.max(15, (val * ((idx % 3) + 1) * 0.4) % 100) 
                    : 15;
                  const vibrantPalette = ["#0D9488", "#06B6D4", "#3B82F6", "#8B5CF6", "#EC4899", "#F59E0B"];
                  const barColor = vibrantPalette[idx % vibrantPalette.length];
                  return (
                    <div
                      key={idx}
                      className="flex-1 rounded-full transition-all duration-300"
                      style={{
                        height: `${animatedHeight}%`,
                        backgroundColor: barColor,
                        opacity: isPlaying ? 0.95 : 0.35,
                      }}
                    />
                  );
                })}
              </div>

              {/* Scrubber Track with Vibrant Gradient */}
              <div className="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden cursor-pointer">
                <div 
                  className="bg-gradient-to-r from-teal-400 via-sky-400 via-purple-500 to-pink-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (simulatedSeconds / 2520) * 100)}%` }}
                />
              </div>
            </div>

            {/* Clickable Interactive Chapter Selectors */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ListFilter className="w-4 h-4 text-teal-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Interactive Chapter Breakdown (Jump Directly To Lesson):
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
                {chapters.map((ch, idx) => {
                  const isActive = activeChapter === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectChapter(idx)}
                      className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                        isActive
                          ? "bg-teal-50 border-teal-500 ring-2 ring-teal-200 shadow-sm"
                          : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-[11px] font-mono font-bold ${isActive ? "text-teal-700" : "text-slate-500"}`}>
                          {ch.time}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-ping" />
                        )}
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                        {ch.title}
                      </h4>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* External Platform Launch Row */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-semibold text-slate-600">
                Stream full uncut episode with zero ads:
              </span>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={latest.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow transition-all cursor-pointer"
                >
                  <SpotifyIcon className="w-3.5 h-3.5 text-[#1DB954]" />
                  <span>Spotify</span>
                </a>

                <a
                  href={latest.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 hover:border-slate-300 shadow-2xs transition-all cursor-pointer"
                >
                  <YoutubeIcon className="w-3.5 h-3.5 text-[#FF0000]" />
                  <span>YouTube</span>
                </a>

                <a
                  href="https://podcasts.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 hover:border-slate-300 shadow-2xs transition-all cursor-pointer"
                >
                  <ApplePodcastIcon className="w-3.5 h-3.5 text-[#8727FF]" />
                  <span>Apple</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Centered Mission Quote Banner */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base italic text-slate-600 font-medium leading-relaxed">
            &ldquo;A platform for every student, creator, and dreamer who believes in building a better tomorrow.&rdquo;
          </p>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full mx-auto mt-4" />
        </div>

      </div>
    </section>
  );
}
