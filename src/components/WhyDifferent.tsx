"use client";

import React from "react";
import { XCircle, CheckCircle2, Split, Zap } from "lucide-react";

export default function WhyDifferent() {
  const traditionalPoints = [
    {
      title: "Comes from people who already succeeded",
      desc: "Delivered by founders 15+ years removed from the ground floor, forgetting what day zero actually feels like.",
    },
    {
      title: "Focuses only on outcomes & victory laps",
      desc: "Celebrates funding rounds, IPOs, and overnight success myths without revealing the brutal middle.",
    },
    {
      title: "Conceals mistakes and embarrassing failures",
      desc: "Filtered PR narratives that hide the fatal bugs, awkward rejections, and months of zero traction.",
    },
    {
      title: "Promotes survivorship bias",
      desc: "Offers polished hindsight formulas that rarely work for student builders starting from scratch today.",
    },
  ];

  const showPoints = [
    {
      title: "Documents the process in real time",
      desc: "Capturing the raw climb while building is actively happening—not from a pedestal years later.",
    },
    {
      title: "Shares mistakes and code post-mortems",
      desc: "Unvarnished breakdowns of why early features flopped, bad architecture choices, and how to recover.",
    },
    {
      title: "Shares psychological uncertainty",
      desc: "Honest discussions about imposter syndrome, balancing coursework with coding, and fighting self-doubt.",
    },
    {
      title: "Shares lessons while they actually happen",
      desc: "Concrete, actionable heuristics and mental models tested on real products in current tech landscapes.",
    },
  ];

  return (
    <section id="why-different" className="py-24 relative bg-[#020B09] border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#2BF4C3]/8 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#081717] border border-[#2BF4C3]/30 mb-3.5 shadow-sm">
            <Split className="w-3.5 h-3.5 text-[#2BF4C3]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#2BF4C3]">
              The Core Difference
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Why This Show <span className="text-gradient-teal">Is Different</span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-3 leading-relaxed">
            The internet is flooded with advice from billionaires who forgot what it feels like to ship an MVP with zero users. We do things differently.
          </p>
        </div>

        {/* Comparison Dual-Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Card: Most Startup Content */}
          <div className="rounded-3xl p-7 sm:p-10 bg-[#081210]/60 border border-white/10 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono uppercase font-bold text-[#94A3B8] tracking-widest block mb-1">
                    The Mainstream Standard
                  </span>
                  <h3 className="text-2xl font-black text-white/80">
                    Most Startup Content
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                  <XCircle className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-6">
                {traditionalPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <XCircle className="w-5 h-5 text-rose-400/80 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white/85">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#94A3B8]/80 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-xs text-[#94A3B8]/70 italic">
              Result: Passive entertainment that makes young builders feel behind and inadequate.
            </div>
          </div>

          {/* Right Card: The Young Founder Show */}
          <div className="glass-panel rounded-3xl p-7 sm:p-10 border-2 border-[#2BF4C3]/50 shadow-[0_0_40px_rgba(43,244,195,0.12)] flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#081717] to-[#03100D]">
            {/* Top accent badge */}
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#2BF4C3] via-[#1DD1B9] to-[#2BF4C3]" />

            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#2BF4C3]/20">
                <div>
                  <span className="text-xs font-mono uppercase font-bold text-[#2BF4C3] tracking-widest block mb-1">
                    Our Philosophy
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    The Young Founder Show
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#2BF4C3]/20 border border-[#2BF4C3]/40 flex items-center justify-center text-[#2BF4C3] shadow-md shadow-[#2BF4C3]/30">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-6">
                {showPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#2BF4C3] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#2BF4C3]/20 flex items-center gap-2 text-xs font-semibold text-[#2BF4C3]">
              <Zap className="w-4 h-4 text-[#2BF4C3]" />
              <span>Result: Real empowerment, high agency, and clarity to build right now.</span>
            </div>
          </div>

        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#081717] border border-[#2BF4C3]/25 text-center max-w-4xl mx-auto">
          <p className="text-sm sm:text-base text-white/95 font-medium leading-relaxed italic">
            &ldquo;We believe the lessons you learn bleeding through a stubborn bug at 2 AM or getting rejected by your first 20 beta testers are ten times more valuable than a billionaire&apos;s victory lap.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
