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
      icon: <Lightbulb className="w-5 h-5 text-slate-800" />,
      tag: "Strategy",
      iconBg: "bg-slate-50 border-slate-200 text-slate-800",
      tagBg: "bg-slate-50 text-slate-700 border-slate-200",
      hoverBorder: "hover:border-[#2BF4C3]",
      glowGradient: "from-[#2BF4C3]/5 via-transparent to-transparent",
    },
    {
      id: "learning-systems",
      title: "Learning Systems",
      subtitle: "Escaping Tutorial Hell",
      description: "Proven frameworks to deconstruct complex technical domains, read open source source code, and master skills at 5x speed.",
      icon: <Cpu className="w-5 h-5 text-slate-800" />,
      tag: "Engineering",
      iconBg: "bg-slate-50 border-slate-200 text-slate-800",
      tagBg: "bg-slate-50 text-slate-700 border-slate-200",
      hoverBorder: "hover:border-[#2BF4C3]",
      glowGradient: "from-[#2BF4C3]/5 via-transparent to-transparent",
    },
    {
      id: "building-habits",
      title: "Building Habits",
      subtitle: "Compounding Daily Progress",
      description: "Protecting uninterrupted deep work blocks, avoiding shiny-object distractions, and staying consistent when excitement fades.",
      icon: <Clock className="w-5 h-5 text-slate-800" />,
      tag: "Discipline",
      iconBg: "bg-slate-50 border-slate-200 text-slate-800",
      tagBg: "bg-slate-50 text-slate-700 border-slate-200",
      hoverBorder: "hover:border-[#2BF4C3]",
      glowGradient: "from-[#2BF4C3]/5 via-transparent to-transparent",
    },
    {
      id: "ai-insights",
      title: "AI & Technology Insights",
      subtitle: "The 2026 Developer Edge",
      description: "Practical workflows using autonomous AI agents, prompt chaining, local models, and shipping AI-first web applications.",
      icon: <Bot className="w-5 h-5 text-slate-800" />,
      tag: "Future Tech",
      iconBg: "bg-slate-50 border-slate-200 text-slate-800",
      tagBg: "bg-slate-50 text-slate-700 border-slate-200",
      hoverBorder: "hover:border-[#2BF4C3]",
      glowGradient: "from-[#2BF4C3]/5 via-transparent to-transparent",
    },
    {
      id: "product-dev",
      title: "Product Development Lessons",
      subtitle: "Shipping What Users Love",
      description: "Scoping down MVPs to the core essence, engineering responsive UX, avoiding premature optimization, and rapid iteration.",
      icon: <Layers className="w-5 h-5 text-slate-800" />,
      tag: "Execution",
      iconBg: "bg-slate-50 border-slate-200 text-slate-800",
      tagBg: "bg-slate-50 text-slate-700 border-slate-200",
      hoverBorder: "hover:border-[#2BF4C3]",
      glowGradient: "from-[#2BF4C3]/5 via-transparent to-transparent",
    },
    {
      id: "founder-psychology",
      title: "Founder Psychology",
      subtitle: "Conquering Self-Doubt",
      description: "Navigating imposter syndrome when everyone is older than you, developing unshakeable conviction, and overcoming fear of failure.",
      icon: <Brain className="w-5 h-5 text-slate-800" />,
      tag: "Mindset",
      iconBg: "bg-slate-50 border-slate-200 text-slate-800",
      tagBg: "bg-slate-50 text-slate-700 border-slate-200",
      hoverBorder: "hover:border-[#2BF4C3]",
      glowGradient: "from-[#2BF4C3]/5 via-transparent to-transparent",
    },
    {
      id: "productivity",
      title: "Productivity",
      subtitle: "Crazy Schedules Simplified",
      description: "Tactical systems to juggle morning college lectures, afternoon code sprints, podcast recording, and personal physical health.",
      icon: <Target className="w-5 h-5 text-slate-800" />,
      tag: "Systems",
      iconBg: "bg-slate-50 border-slate-200 text-slate-800",
      tagBg: "bg-slate-50 text-slate-700 border-slate-200",
      hoverBorder: "hover:border-[#2BF4C3]",
      glowGradient: "from-[#2BF4C3]/5 via-transparent to-transparent",
    },
    {
      id: "career-growth",
      title: "Career Growth",
      subtitle: "High Agency & Distribution",
      description: "Creating your own luck by building in public, attracting mentors, and building an unassailable reputation through shipped work.",
      icon: <TrendingUp className="w-5 h-5 text-slate-800" />,
      tag: "Trajectory",
      iconBg: "bg-slate-50 border-slate-200 text-slate-800",
      tagBg: "bg-slate-50 text-slate-700 border-slate-200",
      hoverBorder: "hover:border-[#2BF4C3]",
      glowGradient: "from-[#2BF4C3]/5 via-transparent to-transparent",
    },
  ];

  return (
    <section id="takeaways" className="py-24 relative bg-white border-t border-slate-200/80 overflow-hidden">
      {/* Clean subtle ambient glow */}
      <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-[#2BF4C3]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#2BF4C3]/40 mb-3.5 shadow-xs">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Tangible Skills &amp; Playbooks
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            What You&apos;ll <span className="text-[#00C49F]">Take Away</span>
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

        {/* Bottom Summary Banner */}
        <div className="mt-12 rounded-3xl bg-white border border-slate-200 shadow-lg max-w-5xl mx-auto overflow-hidden">
          <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-[#2BF4C3] flex items-center justify-center font-black text-xl shadow-md flex-shrink-0">
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
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold shadow-2xs">
                ✓ Open Source Stacks
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold shadow-2xs">
                ✓ No Gatekeeping
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold shadow-2xs">
                ✓ 100% Free Access
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
