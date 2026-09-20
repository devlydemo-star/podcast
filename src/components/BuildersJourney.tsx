"use client";

import React, { useState } from "react";
import { BookOpen, Hammer, AlertTriangle, RefreshCw, Repeat, Compass, Sparkles } from "lucide-react";

interface JourneyStage {
  step: number;
  name: string;
  tagline: string;
  description: string;
  mindset: string;
  icon: React.ReactNode;
}

export default function BuildersJourney() {
  const [activeStep, setActiveStep] = useState(1);

  const stages: JourneyStage[] = [
    {
      step: 1,
      name: "Learn",
      tagline: "Breaking Out of Tutorial Hell",
      description: "Curiosity sparks. You stop watching endless courses and start reading documentation, tinkering with terminal scripts, understanding fundamental computer science, and discovering how modern software really works.",
      mindset: "Curiosity is the greatest compounding interest in software engineering.",
      icon: <BookOpen className="w-5 h-5 text-[#2BF4C3]" />,
    },
    {
      step: 2,
      name: "Build",
      tagline: "Shipping The Embarrassing v0",
      description: "You dare to take ideas out of your notebook and write living code. You build apps you personally want to use, deploy to production, launch to strangers, and experience the thrill of creating something from scratch.",
      mindset: "If you aren't embarrassed by your first version, you launched too late.",
      icon: <Hammer className="w-5 h-5 text-[#2BF4C3]" />,
    },
    {
      step: 3,
      name: "Fail",
      tagline: "The Inevitable Trial",
      description: "Bugs at 2 AM. Zero traffic on launch day. Scope creep that threatens your motivation. Feature requests that lead nowhere. You realize building software is easy, but finding true product-market fit is brutally hard.",
      mindset: "Failure is not the opposite of success; it is the tuition you pay for insight.",
      icon: <AlertTriangle className="w-5 h-5 text-[#2BF4C3]" />,
    },
    {
      step: 4,
      name: "Improve",
      tagline: "Feedback, Resilience & Pivoting",
      description: "You swallow your ego and listen obsessively to real users. You strip away vanity metrics, optimize architecture, rewrite clunky UX, and fix bottlenecks. You discover that resilience is a superpower.",
      mindset: "Listen to the truth in customer churn, not the polite applause of friends.",
      icon: <RefreshCw className="w-5 h-5 text-[#2BF4C3]" />,
    },
    {
      step: 5,
      name: "Repeat",
      tagline: "Compounding & Extreme Agency",
      description: "You realize the secret is simple: never quit. You stack small daily wins, embrace extreme agency, refine your taste, and repeat the cycle with faster iteration and deeper conviction.",
      mindset: "Consistency beats motivation every single time. Keep shipping.",
      icon: <Repeat className="w-5 h-5 text-[#2BF4C3]" />,
    },
  ];

  const currentStage = stages[activeStep - 1];

  return (
    <section id="journey" className="py-24 relative bg-[#03100D] border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/3 w-[550px] h-[550px] bg-[#2BF4C3]/6 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#081717] border border-[#2BF4C3]/30 mb-3.5 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#2BF4C3]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#2BF4C3]">
              The Universal Framework
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            The Builder&apos;s <span className="text-gradient-teal">Journey</span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-3 leading-relaxed">
            Every founder, developer, and creator walks this exact path. It is never a straight line from idea to exit—it is a continuous cycle of growth.
          </p>
        </div>

        {/* 5-Step Horizontal Navigation Nodes */}
        <div className="relative mb-12 max-w-4xl mx-auto">
          {/* Connecting horizontal line */}
          <div className="hidden sm:block absolute top-6 left-12 right-12 h-0.5 bg-gradient-to-r from-[#2BF4C3]/20 via-[#2BF4C3]/60 to-[#2BF4C3]/20" />

          <div className="grid grid-cols-5 gap-2 sm:gap-4 relative z-10">
            {stages.map((stage) => {
              const isSelected = activeStep === stage.step;
              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStep(stage.step)}
                  className="flex flex-col items-center group cursor-pointer text-center"
                >
                  {/* Circle Node */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-sm transition-all duration-300 ${
                      isSelected
                        ? "bg-[#2BF4C3] text-[#03100D] ring-4 ring-[#2BF4C3]/30 scale-110 shadow-lg shadow-[#2BF4C3]/50"
                        : "bg-[#081717] border border-white/20 text-[#94A3B8] group-hover:border-[#2BF4C3] group-hover:text-white"
                    }`}
                  >
                    {stage.step}
                  </div>

                  {/* Stage Name */}
                  <span
                    className={`text-xs sm:text-sm font-extrabold mt-2.5 transition-colors uppercase tracking-wider ${
                      isSelected ? "text-[#2BF4C3]" : "text-[#94A3B8] group-hover:text-white"
                    }`}
                  >
                    {stage.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Spotlight Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#2BF4C3]/30 shadow-2xl relative overflow-hidden max-w-4xl mx-auto mb-16">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#081717] border border-white/10 flex items-center justify-center">
                {currentStage.icon}
              </div>
              <div>
                <span className="text-xs font-mono uppercase font-bold text-[#2BF4C3] tracking-wider">
                  Stage 0{currentStage.step}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {currentStage.name}: {currentStage.tagline}
                </h3>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2BF4C3]/15 text-[#2BF4C3] border border-[#2BF4C3]/30">
              Universal Law
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
            {currentStage.description}
          </p>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#081717] border border-white/10 flex items-start gap-3.5">
            <Sparkles className="w-5 h-5 text-[#2BF4C3] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#2BF4C3] mb-1">
                Mindset Rule:
              </p>
              <p className="text-xs sm:text-sm italic text-white/95 leading-relaxed">
                &ldquo;{currentStage.mindset}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Supporting Narrative: Maher's story is one example */}
        <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 bg-[#081717] border border-white/10 relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2BF4C3]">
                Supporting Example
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Maher&apos;s Journey Is One Example Of This Path
              </h4>
            </div>
            <span className="text-xs text-[#94A3B8] bg-[#03100D] px-3 py-1 rounded-full border border-white/10">
              Student Builder Example
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-5">
            Host Maher Dhami does not claim to have arrived at the finish line. His story—starting to learn programming in 2022, learning hard lessons from early venture CODIEPAG in 2024, and now building developer platform DevLy—is simply one example of the universal framework that every ambitious student builder walks.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div className="p-3 rounded-xl bg-[#03100D] border border-white/5">
              <span className="text-[11px] font-mono text-[#2BF4C3] block font-bold">2022 • Learn</span>
              <span className="text-xs font-semibold text-white">First Lines of Code</span>
            </div>
            <div className="p-3 rounded-xl bg-[#03100D] border border-white/5">
              <span className="text-[11px] font-mono text-[#2BF4C3] block font-bold">2024 • Build &amp; Fail</span>
              <span className="text-xs font-semibold text-white">CODIEPAG Lessons</span>
            </div>
            <div className="p-3 rounded-xl bg-[#03100D] border border-white/5">
              <span className="text-[11px] font-mono text-[#2BF4C3] block font-bold">2026+ • Improve &amp; Repeat</span>
              <span className="text-xs font-semibold text-white">DevLy &amp; The Podcast</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
