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
      icon: <BookOpen className="w-5 h-5 text-teal-600" />,
    },
    {
      step: 2,
      name: "Build",
      tagline: "Shipping The Embarrassing v0",
      description: "You dare to take ideas out of your notebook and write living code. You build apps you personally want to use, deploy to production, launch to strangers, and experience the thrill of creating something from scratch.",
      mindset: "If you aren't embarrassed by your first version, you launched too late.",
      icon: <Hammer className="w-5 h-5 text-teal-600" />,
    },
    {
      step: 3,
      name: "Fail",
      tagline: "The Inevitable Trial",
      description: "Bugs at 2 AM. Zero traffic on launch day. Scope creep that threatens your motivation. Feature requests that lead nowhere. You realize building software is easy, but finding true product-market fit is brutally hard.",
      mindset: "Failure is not the opposite of success; it is the tuition you pay for insight.",
      icon: <AlertTriangle className="w-5 h-5 text-teal-600" />,
    },
    {
      step: 4,
      name: "Improve",
      tagline: "Feedback, Resilience & Pivoting",
      description: "You swallow your ego and listen obsessively to real users. You strip away vanity metrics, optimize architecture, rewrite clunky UX, and fix bottlenecks. You discover that resilience is a superpower.",
      mindset: "Listen to the truth in customer churn, not the polite applause of friends.",
      icon: <RefreshCw className="w-5 h-5 text-teal-600" />,
    },
    {
      step: 5,
      name: "Repeat",
      tagline: "Compounding & Extreme Agency",
      description: "You realize the secret is simple: never quit. You stack small daily wins, embrace extreme agency, refine your taste, and repeat the cycle with faster iteration and deeper conviction.",
      mindset: "Consistency beats motivation every single time. Keep shipping.",
      icon: <Repeat className="w-5 h-5 text-teal-600" />,
    },
  ];

  const currentStage = stages[activeStep - 1];

  return (
    <section id="journey" className="py-24 relative bg-[#F8FAFC] border-t border-slate-200/80">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/3 w-[550px] h-[550px] bg-teal-500/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 mb-3.5 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-teal-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              The Universal Framework
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            The Builder&apos;s <span className="text-teal-600">Journey</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Every founder, developer, and creator walks this exact path. It is never a straight line from idea to exit—it is a continuous cycle of growth.
          </p>
        </div>

        {/* 5-Step Horizontal Navigation Nodes */}
        <div className="relative mb-12 max-w-4xl mx-auto">
          {/* Connecting horizontal line */}
          <div className="hidden sm:block absolute top-6 left-12 right-12 h-0.5 bg-slate-200" />

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
                        ? "bg-teal-600 text-white ring-4 ring-teal-100 scale-110 shadow-md shadow-teal-600/30"
                        : "bg-white border border-slate-200 text-slate-500 hover:border-teal-500 hover:text-slate-900 shadow-sm"
                    }`}
                  >
                    {stage.step}
                  </div>

                  {/* Stage Name */}
                  <span
                    className={`text-xs sm:text-sm font-extrabold mt-2.5 transition-colors uppercase tracking-wider ${
                      isSelected ? "text-teal-700" : "text-slate-500 group-hover:text-slate-900"
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
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-teal-500/20 shadow-xl relative overflow-hidden max-w-5xl mx-auto mb-16">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-sky-500 to-indigo-600" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Stage Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                    {currentStage.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase font-bold text-teal-600 tracking-wider">
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

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentStage.description}
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                <Sparkles className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
                    Mindset Rule:
                  </p>
                  <p className="text-xs sm:text-sm italic font-medium text-slate-800 leading-relaxed">
                    &ldquo;{currentStage.mindset}&rdquo;
                  </p>
                </div>
              </div>

              {/* Visual stage loop mini-flow */}
              <div className="flex items-center gap-2 pt-2 text-xs font-mono text-slate-500 overflow-x-auto pb-1">
                <span className="font-bold text-teal-700">LOOP:</span>
                <span className={activeStep === 1 ? "text-teal-600 font-bold underline" : ""}>Learn</span>
                <span>→</span>
                <span className={activeStep === 2 ? "text-teal-600 font-bold underline" : ""}>Build</span>
                <span>→</span>
                <span className={activeStep === 3 ? "text-teal-600 font-bold underline" : ""}>Fail</span>
                <span>→</span>
                <span className={activeStep === 4 ? "text-teal-600 font-bold underline" : ""}>Improve</span>
                <span>→</span>
                <span className={activeStep === 5 ? "text-teal-600 font-bold underline" : ""}>Repeat</span>
                <span className="text-slate-400">↺</span>
              </div>
            </div>

            {/* Right Col: 3D Developer Desk Graphic */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-slate-200 shadow-xl group/journey">
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
                  Active Iteration: Stage {currentStage.step}/5
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Narrative: Maher's story is one example */}
        <div className="max-w-5xl mx-auto rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-600">
                Supporting Example
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                Maher&apos;s Journey Is One Example Of This Path
              </h4>
            </div>
            <span className="text-xs text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              Student Builder Example
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
            Host Maher Dhami does not claim to have arrived at the finish line. His story—starting to learn programming in 2022, learning hard lessons from early venture CODIEPAG in 2024, and now building developer platform DevLy—is simply one example of the universal framework that every ambitious student builder walks.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-300 transition-colors">
              <span className="text-xs font-mono text-teal-700 block font-bold mb-1">2022 • Learn</span>
              <span className="text-sm font-bold text-slate-900 block">First Lines of Code</span>
              <span className="text-xs text-slate-500 mt-1 block">HTML, CSS, JS fundamentals &amp; curiosity</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-300 transition-colors">
              <span className="text-xs font-mono text-teal-700 block font-bold mb-1">2024 • Build &amp; Fail</span>
              <span className="text-sm font-bold text-slate-900 block">CODIEPAG Lessons</span>
              <span className="text-xs text-slate-500 mt-1 block">Early client work, product scope &amp; hard pivots</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-300 transition-colors">
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
