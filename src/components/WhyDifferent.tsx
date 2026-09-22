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
    <section id="why-different" className="py-24 relative bg-white border-t border-slate-200/80">
      {/* Vibrant ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-[550px] h-[550px] bg-gradient-to-br from-teal-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-50 via-indigo-50 to-pink-50 border border-teal-200/80 mb-3.5 shadow-sm">
            <Split className="w-3.5 h-3.5 text-teal-600" />
            <span className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-teal-800 via-indigo-800 to-rose-800 bg-clip-text text-transparent">
              The Core Difference
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Why This Show <span className="text-gradient-vibrant">Is Different</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            The internet is flooded with advice from billionaires who forgot what it feels like to ship an MVP with zero users. We do things differently.
          </p>
        </div>

        {/* Comparison Dual-Cards Grid with Centered VS Badge */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Centered Desktop VS Floating Pill with Vibrant Gradient */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-tr from-rose-500 via-purple-600 to-teal-500 text-white font-black text-xs items-center justify-center shadow-xl ring-4 ring-white">
            VS
          </div>

          {/* Left Card: Most Startup Content */}
          <div className="rounded-3xl p-7 sm:p-10 bg-slate-50 border border-slate-200 flex flex-col justify-between relative overflow-hidden shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200">
                <div>
                  <span className="text-xs font-mono uppercase font-bold text-slate-400 tracking-widest block mb-1">
                    The Mainstream Standard
                  </span>
                  <h3 className="text-2xl font-black text-slate-800">
                    Most Startup Content
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-500 shadow-sm">
                  <XCircle className="w-5 h-5" />
                </div>
              </div>

              {/* Graphical Metric Comparison Bar */}
              <div className="mb-6 p-4 rounded-2xl bg-white border border-slate-200/80 space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-slate-600">
                    <span>Hindsight &amp; PR Glamour</span>
                    <span className="text-rose-600 font-mono">92%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-rose-500 rounded-full w-[92%]" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-slate-600">
                    <span>Applicable to Student Builders</span>
                    <span className="text-slate-400 font-mono">8%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-slate-300 rounded-full w-[8%]" />
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {traditionalPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-800">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 italic">
              Result: Passive entertainment that makes young builders feel behind and inadequate.
            </div>
          </div>

          {/* Right Card: The Young Founder Show */}
          <div className="bg-white rounded-3xl p-7 sm:p-10 border-2 border-teal-500/40 shadow-xl shadow-teal-900/5 flex flex-col justify-between relative overflow-hidden">
            {/* Top accent badge */}
            <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500" />

            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                <div>
                  <span className="text-xs font-mono uppercase font-bold text-teal-600 tracking-widest block mb-1">
                    Our Philosophy
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">
                    The Young Founder Show
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shadow-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>

              {/* Graphical Metric Comparison Bar */}
              <div className="mb-6 p-4 rounded-2xl bg-teal-50/50 border border-teal-200/60 space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-teal-900">
                    <span>Real-Time In-The-Trenches Truth</span>
                    <span className="text-teal-700 font-mono">98%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-teal-100 overflow-hidden">
                    <div className="h-full bg-teal-600 rounded-full w-[98%]" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-teal-900">
                    <span>Transparent Bugs, Failures &amp; Costs</span>
                    <span className="text-teal-700 font-mono">100%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-teal-100 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[100%]" />
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {showPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-teal-700">
              <Zap className="w-4 h-4 text-teal-600" />
              <span>Result: Real empowerment, high agency, and clarity to build right now.</span>
            </div>
          </div>

        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-4xl mx-auto shadow-sm">
          <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed italic">
            &ldquo;We believe the lessons you learn bleeding through a stubborn bug at 2 AM or getting rejected by your first 20 beta testers are ten times more valuable than a billionaire&apos;s victory lap.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
