"use client";

import React from "react";
import Image from "next/image";
import { SHOW_INFO } from "@/data/podcastData";
import { ShieldCheck, Terminal, Quote, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative bg-[#03100D] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#2BF4C3]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photo / Logo Badge of the Host (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px]">
              
              {/* Outer decorative glowing frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#2BF4C3]/20 via-transparent to-[#1DD1B9]/20 rounded-3xl blur-lg opacity-70" />

              <div className="relative bg-[#081717] rounded-3xl p-5 sm:p-6 border border-[#2BF4C3]/30 shadow-2xl">
                
                {/* Official Circular Logo Badge Container */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-inner bg-[#03100D] border border-white/5">
                  <Image
                    src={SHOW_INFO.hostImage}
                    alt="Maher Dhami - Host of The Young Founder Show"
                    fill
                    className="object-cover hover:scale-103 transition-transform duration-700"
                  />
                </div>

                {/* Host Credential Badges */}
                <div className="grid grid-cols-3 gap-2.5 mt-4 pt-4 border-t border-white/10 text-center">
                  <div className="p-2.5 rounded-xl bg-[#03100D] border border-white/5">
                    <p className="text-xs font-bold text-white">DevLy</p>
                    <p className="text-[10px] text-[#94A3B8]">Flagship SaaS</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#03100D] border border-white/5">
                    <p className="text-xs font-bold text-white">CODIEPAG</p>
                    <p className="text-[10px] text-[#94A3B8]">First Venture</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#03100D] border border-white/5">
                    <p className="text-xs font-bold text-[#2BF4C3]">Public</p>
                    <p className="text-[10px] text-[#94A3B8]">Building Daily</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081717] border border-[#2BF4C3]/30 mb-4">
              <Award className="w-3.5 h-3.5 text-[#2BF4C3]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#2BF4C3]">
                Authentic Journey
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Why This <br />
              <span className="text-gradient-teal">Podcast Exists</span>
            </h2>

            {/* Main Manifesto */}
            <div className="space-y-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed mb-8">
              <p className="text-white font-medium">
                The Young Founder Show is a platform where <span className="text-[#2BF4C3] font-bold">real experiences matter more</span> than polished success stories.
              </p>
              <p>
                Every episode explores startup lessons, mistakes, growth, technology, AI, student life, and the journey of building something meaningful.
              </p>
              <p className="text-sm text-[#94A3B8]">
                Too much startup advice online comes from people decades into their career who have forgotten what it feels like to ship an MVP with zero users, zero budget, and zero certainty. Here, Maher documents the unvarnished truths in real time as they unfold.
              </p>
            </div>

            {/* Pillar Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="glass-panel p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-2.5 text-[#2BF4C3] font-bold text-sm mb-1.5">
                  <Terminal className="w-4 h-4" />
                  <span>Real Engineering Lessons</span>
                </div>
                <p className="text-xs text-[#94A3B8]">
                  No buzzwords. Real architectural trade-offs, code failures, and scaling lessons.
                </p>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-2.5 text-[#2BF4C3] font-bold text-sm mb-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Unfiltered Post-Mortems</span>
                </div>
                <p className="text-xs text-[#94A3B8]">
                  Deconstructing what broke in CODIEPAG and how it paved the way for DevLy.
                </p>
              </div>
            </div>

            {/* Host Personal Quote Callout */}
            <div className="w-full p-4 sm:p-5 rounded-2xl bg-[#081717] border-l-4 border-[#2BF4C3] border-y border-r border-white/5 flex gap-4 items-start">
              <Quote className="w-6 h-6 text-[#2BF4C3] flex-shrink-0 mt-1 opacity-70" />
              <div>
                <p className="text-xs sm:text-sm italic text-white leading-relaxed">
                  &ldquo;I started this podcast because I wanted an archive of the raw climb. Not the victory lap, but the honest messy grind in the trenches.&rdquo;
                </p>
                <p className="text-xs font-bold text-[#2BF4C3] mt-2">
                  — Maher Dhami, Host
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
