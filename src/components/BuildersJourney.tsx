"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BookOpen, Hammer, AlertTriangle, RefreshCw, Repeat, Compass, Sparkles, ArrowRight, GitBranch, CheckCircle2 } from "lucide-react";

interface JourneyStage {
  step: number;
  name: string;
  tagline: string;
  description: string;
  mindset: string;
  icon: React.ReactNode;
  activeColor: string;
  activeRing: string;
  iconBg: string;
  textColor: string;
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
      icon: <BookOpen className="w-5 h-5 text-sky-600" />,
      activeColor: "bg-sky-600 text-white shadow-lg shadow-sky-600/30",
      activeRing: "ring-4 ring-sky-200",
      iconBg: "bg-sky-50 border-sky-200",
      textColor: "text-sky-600",
    },
    {
      step: 2,
      name: "Build",
      tagline: "Shipping The Embarrassing v0",
      description: "You dare to take ideas out of your notebook and write living code. You build apps you personally want to use, deploy to production, launch to strangers, and experience the thrill of creating something from scratch.",
      mindset: "If you aren't embarrassed by your first version, you launched too late.",
      icon: <Hammer className="w-5 h-5 text-teal-600" />,
      activeColor: "bg-teal-600 text-white shadow-lg shadow-teal-600/30",
      activeRing: "ring-4 ring-teal-200",
      iconBg: "bg-teal-50 border-teal-200",
      textColor: "text-teal-600",
    },
    {
      step: 3,
      name: "Fail",
      tagline: "The Inevitable Trial",
      description: "Bugs at 2 AM. Zero traffic on launch day. Scope creep that threatens your motivation. Feature requests that lead nowhere. You realize building software is easy, but finding true product-market fit is brutally hard.",
      mindset: "Failure is not the opposite of success; it is the tuition you pay for insight.",
      icon: <AlertTriangle className="w-5 h-5 text-orange-600" />,
      activeColor: "bg-orange-600 text-white shadow-lg shadow-orange-600/30",
      activeRing: "ring-4 ring-orange-200",
      iconBg: "bg-orange-50 border-orange-200",
      textColor: "text-orange-600",
    },
    {
      step: 4,
      name: "Improve",
      tagline: "Feedback, Resilience & Pivoting",
      description: "You swallow your ego and listen obsessively to real users. You strip away vanity metrics, optimize architecture, rewrite clunky UX, and fix bottlenecks. You discover that resilience is a superpower.",
      mindset: "Listen to the truth in customer churn, not the polite applause of friends.",
      icon: <RefreshCw className="w-5 h-5 text-purple-600" />,
      activeColor: "bg-purple-600 text-white shadow-lg shadow-purple-600/30",
      activeRing: "ring-4 ring-purple-200",
      iconBg: "bg-purple-50 border-purple-200",
      textColor: "text-purple-600",
    },
    {
      step: 5,
      name: "Repeat",
      tagline: "Compounding & Extreme Agency",
      description: "You realize the secret is simple: never quit. You stack small daily wins, embrace extreme agency, refine your taste, and repeat the cycle with faster iteration and deeper conviction.",
      mindset: "Consistency beats motivation every single time. Keep shipping.",
      icon: <Repeat className="w-5 h-5 text-pink-600" />,
      activeColor: "bg-pink-600 text-white shadow-lg shadow-pink-600/30",
      activeRing: "ring-4 ring-pink-200",
      iconBg: "bg-pink-50 border-pink-200",
      textColor: "text-pink-600",
    },
  ];

  const currentStage = stages[activeStep - 1];

  return (
    <section id="journey" className="py-24 relative bg-[#F8FAFC] border-t border-slate-200/80 overflow-hidden">
      {/* Vibrant ambient background auroras */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-teal-400/15 via-indigo-400/10 to-pink-400/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-amber-400/15 via-orange-400/10 to-sky-400/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-50 via-indigo-50 to-pink-50 border border-teal-200/80 mb-3.5 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-teal-600" />
            <span className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-teal-800 via-indigo-800 to-rose-800 bg-clip-text text-transparent">
              The Universal Framework
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            The Builder&apos;s <span className="text-gradient-vibrant">Journey</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Every founder, developer, and creator walks this exact path. It is never a straight line from idea to exit—it is a continuous cycle of growth.
          </p>
        </div>

        {/* 5-Step Horizontal Navigation Nodes with Vibrant Gradient Connecting Track */}
        <div className="relative mb-14 max-w-4xl mx-auto">
          {/* Multi-colored connecting horizontal track */}
          <div className="hidden sm:block absolute top-6 left-12 right-12 h-1 bg-gradient-to-r from-sky-400 via-teal-400 via-orange-400 via-purple-400 to-pink-500 rounded-full shadow-xs opacity-70" />

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
                        ? `${stage.activeColor} ${stage.activeRing} scale-110 shadow-md`
                        : "bg-white border border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-900 shadow-sm"
                    }`}
                  >
                    {stage.step}
                  </div>

                  {/* Stage Name */}
                  <span
                    className={`text-xs sm:text-sm font-black mt-2.5 transition-colors uppercase tracking-wider ${
                      isSelected ? stage.textColor : "text-slate-500 group-hover:text-slate-900"
                    }`}
                  >
                    {stage.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Spotlight Card with 3D Graphic */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-teal-500/30 shadow-2xl relative overflow-hidden max-w-5xl mx-auto mb-16">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-500 via-teal-500 via-orange-500 via-purple-500 to-pink-500" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Stage Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center shadow-sm ${currentStage.iconBg}`}>
                    {currentStage.icon}
                  </div>
                  <div>
                    <span className={`text-xs font-mono uppercase font-bold tracking-wider ${currentStage.textColor}`}>
                      Stage 0{currentStage.step} of 05
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                      {currentStage.name}: {currentStage.tagline}
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-700 border border-teal-200">
                  Universal Law
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {currentStage.description}
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-slate-50 border border-slate-200 flex items-start gap-3.5 shadow-sm">
                <Sparkles className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
                    Mindset Rule:
                  </p>
                  <p className="text-xs sm:text-sm italic font-semibold text-slate-800 leading-relaxed">
                    &ldquo;{currentStage.mindset}&rdquo;
                  </p>
                </div>
              </div>

              {/* Visual stage loop mini-flow with vibrant colors */}
              <div className="flex items-center gap-2 pt-2 text-xs font-mono text-slate-500 overflow-x-auto pb-1">
                <span className="font-bold text-teal-700">LOOP:</span>
                <span className={activeStep === 1 ? "text-sky-600 font-black underline" : ""}>Learn</span>
                <span>→</span>
                <span className={activeStep === 2 ? "text-teal-600 font-black underline" : ""}>Build</span>
                <span>→</span>
                <span className={activeStep === 3 ? "text-orange-600 font-black underline" : ""}>Fail</span>
                <span>→</span>
                <span className={activeStep === 4 ? "text-purple-600 font-black underline" : ""}>Improve</span>
                <span>→</span>
                <span className={activeStep === 5 ? "text-pink-600 font-black underline" : ""}>Repeat</span>
                <span className="text-slate-400">↺</span>
              </div>
            </div>

            {/* Right Col: 3D Developer Desk Graphic with Vibrant Glowing Frame */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden bg-gradient-to-tr from-sky-400 via-teal-400 via-purple-500 to-pink-500 p-[2.5px] shadow-2xl group/journey">
                <div className="relative rounded-[14px] overflow-hidden bg-white">
                  <Image
                    src="/images/builder-journey-graphic.jpg"
                    alt="3D Developer Desk and Builder Architecture Flowchart"
                    width={640}
                    height={640}
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover/journey:scale-105"
                  />
                  
                  {/* Overlay floating badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm flex items-center gap-1.5">
                    <GitBranch className="w-3.5 h-3.5 text-teal-600" />
                    <span className="text-[11px] font-black text-slate-900 uppercase tracking-wider">Git Commit Loop</span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-mono font-bold shadow-md">
                    Active: Stage {currentStage.step}/5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Narrative: Maher's story is one example */}
        <div className="max-w-5xl mx-auto rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-md relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-600">
                Supporting Example
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                Maher&apos;s Journey Is One Example Of This Path
              </h4>
            </div>
            <span className="text-xs text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 font-bold">
              Student Builder Example
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
            Host Maher Dhami does not claim to have arrived at the finish line. His story—starting to learn programming in 2022, learning hard lessons from early venture CODIEPAG in 2024, and now building developer platform DevLy—is simply one example of the universal framework that every ambitious student builder walks.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-sky-50/60 to-white border border-sky-200 hover:border-sky-400 hover:shadow-md transition-all">
              <span className="text-xs font-mono text-sky-700 block font-bold mb-1">2022 • Learn</span>
              <span className="text-sm font-bold text-slate-900 block">First Lines of Code</span>
              <span className="text-xs text-slate-500 mt-1 block">HTML, CSS, JS fundamentals &amp; curiosity</span>
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-50/60 to-white border border-orange-200 hover:border-orange-400 hover:shadow-md transition-all">
              <span className="text-xs font-mono text-orange-700 block font-bold mb-1">2024 • Build &amp; Fail</span>
              <span className="text-sm font-bold text-slate-900 block">CODIEPAG Lessons</span>
              <span className="text-xs text-slate-500 mt-1 block">Early client work, product scope &amp; hard pivots</span>
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-50/60 to-white border border-teal-200 hover:border-teal-400 hover:shadow-md transition-all">
              <span className="text-xs font-mono text-teal-700 block font-bold mb-1">2026+ • Improve &amp; Repeat</span>
              <span className="text-sm font-bold text-slate-900 block">DevLy &amp; The Podcast</span>
              <span className="text-xs text-slate-500 mt-1 block">Developer tooling, community &amp; weekly episodes</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
