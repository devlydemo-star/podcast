"use client";

import React from "react";
import { 
  Lightbulb, 
  Cpu, 
  Clock, 
  Bot, 
  Layers, 
  Brain, 
  Target, 
  TrendingUp, 
  CheckCircle,
  GraduationCap
} from "lucide-react";

interface TakeawayItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
  iconBg: string;
  tagBg: string;
  hoverBorder: string;
  glowGradient: string;
}

export default function WhatYouTakeAway() {
  const takeaways: TakeawayItem[] = [
    {
      id: "startup-thinking",
      title: "Startup Thinking",
      subtitle: "From Zero to PMF",
      description: "How to identify hair-on-fire problems, validate demand before writing code, and build a defensible product moat.",
      icon: <Lightbulb className="w-5 h-5 text-amber-600" />,
      tag: "Strategy",
      iconBg: "bg-amber-50 border-amber-200",
      tagBg: "bg-amber-50 text-amber-700 border-amber-200",
      hoverBorder: "hover:border-amber-400 hover:shadow-amber-500/10",
      glowGradient: "from-amber-500/10 via-transparent to-transparent",
    },
    {
      id: "learning-systems",
      title: "Learning Systems",
      subtitle: "Escaping Tutorial Hell",
      description: "Proven frameworks to deconstruct complex technical domains, read open source source code, and master skills at 5x speed.",
      icon: <Cpu className="w-5 h-5 text-cyan-600" />,
      tag: "Engineering",
      iconBg: "bg-cyan-50 border-cyan-200",
      tagBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
      hoverBorder: "hover:border-cyan-400 hover:shadow-cyan-500/10",
      glowGradient: "from-cyan-500/10 via-transparent to-transparent",
    },
    {
      id: "building-habits",
      title: "Building Habits",
      subtitle: "Compounding Daily Progress",
      description: "Protecting uninterrupted deep work blocks, avoiding shiny-object distractions, and staying consistent when excitement fades.",
      icon: <Clock className="w-5 h-5 text-emerald-600" />,
      tag: "Discipline",
      iconBg: "bg-emerald-50 border-emerald-200",
      tagBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      hoverBorder: "hover:border-emerald-400 hover:shadow-emerald-500/10",
      glowGradient: "from-emerald-500/10 via-transparent to-transparent",
    },
    {
      id: "ai-insights",
      title: "AI & Technology Insights",
      subtitle: "The 2026 Developer Edge",
      description: "Practical workflows using autonomous AI agents, prompt chaining, local models, and shipping AI-first web applications.",
      icon: <Bot className="w-5 h-5 text-purple-600" />,
      tag: "Future Tech",
      iconBg: "bg-purple-50 border-purple-200",
      tagBg: "bg-purple-50 text-purple-700 border-purple-200",
      hoverBorder: "hover:border-purple-400 hover:shadow-purple-500/10",
      glowGradient: "from-purple-500/10 via-transparent to-transparent",
    },
    {
      id: "product-dev",
      title: "Product Development Lessons",
      subtitle: "Shipping What Users Love",
      description: "Scoping down MVPs to the core essence, engineering responsive UX, avoiding premature optimization, and rapid iteration.",
      icon: <Layers className="w-5 h-5 text-rose-600" />,
      tag: "Execution",
      iconBg: "bg-rose-50 border-rose-200",
      tagBg: "bg-rose-50 text-rose-700 border-rose-200",
      hoverBorder: "hover:border-rose-400 hover:shadow-rose-500/10",
      glowGradient: "from-rose-500/10 via-transparent to-transparent",
    },
    {
      id: "founder-psychology",
      title: "Founder Psychology",
      subtitle: "Conquering Self-Doubt",
      description: "Navigating imposter syndrome when everyone is older than you, developing unshakeable conviction, and overcoming fear of failure.",
      icon: <Brain className="w-5 h-5 text-indigo-600" />,
      tag: "Mindset",
      iconBg: "bg-indigo-50 border-indigo-200",
      tagBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
      hoverBorder: "hover:border-indigo-400 hover:shadow-indigo-500/10",
      glowGradient: "from-indigo-500/10 via-transparent to-transparent",
    },
    {
      id: "productivity",
      title: "Productivity",
      subtitle: "Crazy Schedules Simplified",
      description: "Tactical systems to juggle morning college lectures, afternoon code sprints, podcast recording, and personal physical health.",
      icon: <Target className="w-5 h-5 text-orange-600" />,
      tag: "Systems",
      iconBg: "bg-orange-50 border-orange-200",
      tagBg: "bg-orange-50 text-orange-700 border-orange-200",
      hoverBorder: "hover:border-orange-400 hover:shadow-orange-500/10",
      glowGradient: "from-orange-500/10 via-transparent to-transparent",
    },
    {
      id: "career-growth",
      title: "Career Growth",
      subtitle: "High Agency & Distribution",
      description: "Creating your own luck by building in public, attracting mentors, and building an unassailable reputation through shipped work.",
      icon: <TrendingUp className="w-5 h-5 text-teal-600" />,
      tag: "Trajectory",
      iconBg: "bg-teal-50 border-teal-200",
      tagBg: "bg-teal-50 text-teal-700 border-teal-200",
      hoverBorder: "hover:border-teal-400 hover:shadow-teal-500/10",
      glowGradient: "from-teal-500/10 via-transparent to-transparent",
    },
  ];

  return (
    <section id="takeaways" className="py-24 relative bg-white border-t border-slate-200/80 overflow-hidden">
      {/* Vibrant background ambient auroras */}
      <div className="absolute top-1/2 right-1/3 w-[600px] h-[600px] bg-gradient-to-br from-teal-400/12 via-purple-400/10 to-pink-400/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-amber-400/12 via-sky-400/10 to-teal-400/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-50 via-indigo-50 to-pink-50 border border-teal-200/80 mb-3.5 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
            <span className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-teal-800 via-indigo-800 to-rose-800 bg-clip-text text-transparent">
              Tangible Skills &amp; Playbooks
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            What You&apos;ll <span className="text-gradient-vibrant">Take Away</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-normal">
            Every conversation delivers concrete mental models and practical disciplines you can immediately apply to your projects, studies, and career.
          </p>
        </div>

        {/* 8 Vibrant Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {takeaways.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-3xl p-6 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 border border-slate-200/90 ${item.hoverBorder} hover:shadow-xl hover:-translate-y-1 shadow-sm`}
            >
              {/* Subtle hover wash */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.glowGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

              <div>
                {/* Header row with colorful icon & tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shadow-sm group-hover:scale-110 transition-all ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-mono uppercase font-bold px-2.5 py-0.5 rounded-full border transition-colors ${item.tagBg}`}>
                    {item.tag}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-black text-slate-900 group-hover:text-teal-600 transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-teal-700 mt-1 mb-2.5">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom indicator */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                <span>Actionable Heuristic</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Graphic Compounding Summary Banner with Vibrant Border */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-teal-400 via-indigo-500 to-pink-500 p-[2.5px] shadow-xl max-w-5xl mx-auto">
          <div className="rounded-[22px] p-6 sm:p-8 bg-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-500 via-indigo-600 to-pink-500 text-white flex items-center justify-center font-black text-xl shadow-md shadow-teal-600/30 flex-shrink-0">
                ⚡
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-black text-slate-900">
                  Compounding Returns On Every Episode
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Each discussion is engineered to save you months of trial-and-error by exposing the real traps early.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold shadow-2xs">
                ✓ Open Source Stacks
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold shadow-2xs">
                ✓ No Gatekeeping
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-800 text-xs font-bold shadow-2xs">
                ✓ 100% Free Access
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
