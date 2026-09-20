"use client";

import React from "react";
import Image from "next/image";
import { Play, Pause, Clock, Calendar, CheckCircle2, Sparkles } from "lucide-react";
import { SpotifyIcon, YoutubeIcon } from "@/components/BrandIcons";
import { EPISODES, SHOW_INFO } from "@/data/podcastData";
import { useAudio } from "@/context/AudioContext";

export default function FeaturedEpisode() {
  const featured = EPISODES.find((ep) => ep.featured) || EPISODES[0];
  const { currentEpisode, isPlaying, playEpisode, togglePlay, currentTime, duration } = useAudio();

  const isCurrentPlaying = isPlaying && currentEpisode?.id === featured.id;
  const progressPercent =
    currentEpisode?.id === featured.id && duration > 0
      ? (currentTime / duration) * 100
      : 0;

  return (
    <section id="latest" className="py-20 relative">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#3EF7D8]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3EF7D8] pulse-teal-ring" />
              <span className="text-xs uppercase font-bold tracking-widest text-[#3EF7D8]">
                Featured Broadcast
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Latest Episode
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#B0B7C3]">Released every week on all major channels</span>
          </div>
        </div>

        {/* Featured Episode Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#3EF7D8]/30 shadow-2xl relative overflow-hidden group">
          
          {/* Subtle neon gradient bar across top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3EF7D8] to-transparent opacity-80" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Thumbnail & Play Overlay (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-video sm:aspect-4/3 lg:aspect-square w-full rounded-2xl overflow-hidden border border-[#3EF7D8]/20 shadow-xl group/thumb">
                <Image
                  src={featured.thumbnail}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-black/30 to-black/20" />

                {/* Big Floating Play Button */}
                <button
                  onClick={() => {
                    if (isCurrentPlaying) {
                      togglePlay();
                    } else {
                      playEpisode(featured);
                    }
                  }}
                  className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-[#3EF7D8] text-[#050816] flex items-center justify-center shadow-xl shadow-[#3EF7D8]/40 hover:scale-110 active:scale-95 transition-all duration-300"
                  aria-label={isCurrentPlaying ? "Pause episode" : "Play episode"}
                >
                  {isCurrentPlaying ? (
                    <Pause className="w-8 h-8 fill-current" />
                  ) : (
                    <Play className="w-8 h-8 fill-current ml-1" />
                  )}
                </button>

                {/* Episode Tag in Corner */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-[#050816]/80 backdrop-blur-md border border-[#3EF7D8]/30 text-xs font-bold text-[#3EF7D8]">
                  EPISODE #{featured.number}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                  <span className="flex items-center gap-1.5 bg-[#050816]/80 px-2.5 py-1 rounded-md border border-white/10">
                    <Clock className="w-3.5 h-3.5 text-[#3EF7D8]" />
                    {featured.duration}
                  </span>
                  <span className="flex items-center gap-1.5 bg-[#050816]/80 px-2.5 py-1 rounded-md border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-[#3EF7D8]" />
                    {featured.releaseDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Episode Details (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Category & Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#3EF7D8]/15 text-[#3EF7D8] border border-[#3EF7D8]/30">
                  {featured.category}
                </span>
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-xs text-[#B0B7C3] bg-white/5 border border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4 group-hover:text-[#3EF7D8] transition-colors">
                {featured.title}
              </h3>

              {/* Description */}
              <p className="text-[#B0B7C3] text-sm sm:text-base leading-relaxed mb-6">
                {featured.description}
              </p>

              {/* Audio Waveform Bar */}
              <div className="w-full bg-[#050816] rounded-2xl p-4 border border-white/10 mb-6">
                <div className="flex items-center justify-between text-xs text-[#B0B7C3] mb-2">
                  <span className="flex items-center gap-2 text-white font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#3EF7D8]" />
                    {isCurrentPlaying ? "Audio Stream Active" : "Audio Preview"}
                  </span>
                  <span>{featured.duration}</span>
                </div>

                {/* Simulated interactive waveform visualization */}
                <div className="flex items-end gap-1 sm:gap-1.5 h-10 py-1">
                  {[28, 45, 60, 30, 75, 90, 40, 65, 80, 50, 95, 70, 45, 85, 60, 35, 70, 90, 55, 40, 80, 65, 30, 50, 75, 40, 60, 85, 50, 30].map(
                    (val, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-full transition-all duration-200 cursor-pointer"
                        style={{
                          height: isCurrentPlaying ? undefined : `${val}%`,
                          backgroundColor:
                            progressPercent > (i / 30) * 100
                              ? "#3EF7D8"
                              : "rgba(176, 183, 195, 0.25)",
                        }}
                      >
                        {isCurrentPlaying && (
                          <div
                            className="w-full h-full bg-[#3EF7D8] rounded-full wave-bar"
                            style={{ animationDelay: `${(i % 10) * 0.1}s` }}
                          />
                        )}
                      </div>
                    )
                  )}
                </div>

                {/* Progress bar line */}
                {isCurrentPlaying && (
                  <div className="w-full bg-white/10 h-1 rounded-full mt-2 overflow-hidden">
                    <div
                      className="bg-[#3EF7D8] h-full transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                )}
              </div>

              {/* Key Takeaways */}
              <div className="mb-8 w-full">
                <p className="text-xs uppercase font-bold tracking-wider text-[#3EF7D8] mb-2.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Key Takeaways In This Episode:
                </p>
                <div className="space-y-2">
                  {featured.takeaways.map((takeaway, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#B0B7C3]">
                      <CheckCircle2 className="w-4 h-4 text-[#3EF7D8] flex-shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full">
                
                {/* Play Button */}
                <button
                  onClick={() => {
                    if (isCurrentPlaying) {
                      togglePlay();
                    } else {
                      playEpisode(featured);
                    }
                  }}
                  className="flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm bg-[#3EF7D8] hover:bg-[#1DD1B9] text-[#050816] shadow-lg shadow-[#3EF7D8]/20 hover:shadow-[#3EF7D8]/40 transition-all"
                >
                  {isCurrentPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-current" />
                      <span>Pause Stream</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                      <span>Play Episode #24</span>
                    </>
                  )}
                </button>

                {/* Spotify Link */}
                <a
                  href={featured.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-[#0B1220] hover:bg-[#152038] text-white border border-[#3EF7D8]/30 hover:border-[#3EF7D8] transition-all"
                >
                  <SpotifyIcon className="w-4 h-4 text-[#1DD1B9]" />
                  <span>Open in Spotify</span>
                </a>

                {/* YouTube Link */}
                <a
                  href={featured.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all"
                >
                  <YoutubeIcon className="w-4 h-4 text-[#FF0000]" />
                  <span>Watch Video</span>
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
