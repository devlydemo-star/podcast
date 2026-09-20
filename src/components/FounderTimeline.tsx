"use client";

import React, { useState } from "react";
import { TIMELINE_MILESTONES } from "@/data/podcastData";
import { Compass, Sparkles } from "lucide-react";

export default function FounderTimeline() {
  const [selectedIdx, setSelectedIdx] = useState(2); // Default to "Building DevLy"

  return (
    <section id="journey" className="py-24 relative bg-[#03100D] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#2BF4C3]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081717] border border-[#2BF4C3]/30 mb-3">
            <Compass className="w-3.5 h-3.5 text-[#2BF4C3]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#2BF4C3]">
              The Real Arc
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Founder Journey <span className="text-gradient-teal">Timeline</span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-3">
            In 2022 started learning programming, in 2024 founded CODIEPAG, and in 2026 till onwards building DevLy. Click each milestone to explore.
          </p>
        </div>

        {/* Desktop Milestone Horizontal Navigator */}
        <div className="relative mb-12 hidden md:block max-w-4xl mx-auto">
          {/* Horizontal connecting line */}
          <div className="absolute top-5 left-12 right-12 h-0.5 bg-gradient-to-r from-[#2BF4C3]/20 via-[#2BF4C3]/50 to-[#1DD1B9]/20" />

          <div className="grid grid-cols-4 gap-4 relative z-10">
            {TIMELINE_MILESTONES.map((m, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedIdx(idx)}
                  className="flex flex-col items-center group cursor-pointer text-center"
                >
                  {/* Circle Node */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                      isSelected
                        ? "bg-[#2BF4C3] text-[#03100D] ring-4 ring-[#2BF4C3]/30 scale-110 shadow-lg shadow-[#2BF4C3]/50"
                        : "bg-[#081717] border border-white/20 text-[#94A3B8] group-hover:border-[#2BF4C3] group-hover:text-white"
                    }`}
                  >
                    {idx + 1}
                  </div>

                  {/* Year */}
                  <span
                    className={`text-xs font-mono font-bold mt-2.5 transition-colors ${
                      isSelected ? "text-[#2BF4C3]" : "text-[#94A3B8]"
                    }`}
                  >
                    {m.year}
                  </span>

                  {/* Short Title */}
                  <span
                    className={`text-xs font-semibold mt-1 px-1 line-clamp-2 leading-tight transition-colors ${
                      isSelected ? "text-white font-bold" : "text-[#94A3B8]/70 group-hover:text-[#94A3B8]"
                    }`}
                  >
                    {m.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Milestone Detail Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#2BF4C3]/30 shadow-2xl relative overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left detail info (8 cols) */}
            <div className="lg:col-span-8">
              
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2BF4C3]/15 text-[#2BF4C3] border border-[#2BF4C3]/30">
                  {TIMELINE_MILESTONES[selectedIdx].year} Milestone
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium text-white/80 bg-white/5 border border-white/10">
                  {TIMELINE_MILESTONES[selectedIdx].badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">
                {TIMELINE_MILESTONES[selectedIdx].title}
              </h3>

              <p className="text-sm font-semibold text-[#2BF4C3] mb-4">
                {TIMELINE_MILESTONES[selectedIdx].subtitle}
              </p>

              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
                {TIMELINE_MILESTONES[selectedIdx].description}
              </p>

              {/* Key Lesson Box */}
              <div className="p-4 rounded-2xl bg-[#03100D] border border-white/10 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#2BF4C3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase font-bold text-[#2BF4C3] tracking-wider mb-1">
                    Hard-Won Takeaway:
                  </p>
                  <p className="text-xs sm:text-sm italic text-white/95">
                    &ldquo;{TIMELINE_MILESTONES[selectedIdx].keyLesson}&rdquo;
                  </p>
                </div>
              </div>

            </div>

            {/* Right quick switch list (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-2.5 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
              <p className="text-xs uppercase font-bold text-[#94A3B8] tracking-wider mb-2">
                Timeline Progression:
              </p>
              {TIMELINE_MILESTONES.map((m, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedIdx(idx)}
                  className={`flex items-center justify-between p-3 rounded-xl text-xs text-left transition-all cursor-pointer ${
                    selectedIdx === idx
                      ? "bg-[#2BF4C3]/15 border border-[#2BF4C3]/40 text-white font-bold"
                      : "bg-[#081717] border border-white/5 text-[#94A3B8] hover:text-white hover:border-white/15"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-mono text-[#2BF4C3]">
                      {idx + 1}
                    </span>
                    <span className="truncate max-w-[170px]">{m.title}</span>
                  </div>
                  <span className="text-[10px] font-mono opacity-70">{m.year}</span>
                </button>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
