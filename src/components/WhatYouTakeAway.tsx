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
}

export default function WhatYouTakeAway() {
  const takeaways: TakeawayItem[] = [
    {
      id: "startup-thinking",
      title: "Startup Thinking",
      subtitle: "From Zero to PMF",
      description: "How to identify hair-on-fire problems, validate demand before writing code, and build a defensible product moat.",
      icon: <Lightbulb className="w-5 h-5 text-teal-600" />,
      tag: "Strategy",
    },
    {
      id: "learning-systems",
      title: "Learning Systems",
      subtitle: "Escaping Tutorial Hell",
      description: "Proven frameworks to deconstruct complex technical domains, read open source source code, and master skills at 5x speed.",
      icon: <Cpu className="w-5 h-5 text-teal-600" />,
      tag: "Engineering",
    },
    {
      id: "building-habits",
      title: "Building Habits",
      subtitle: "Compounding Daily Progress",
      description: "Protecting uninterrupted deep work blocks, avoiding shiny-object distractions, and staying consistent when excitement fades.",
      icon: <Clock className="w-5 h-5 text-teal-600" />,
      tag: "Discipline",
    },
    {
      id: "ai-insights",
      title: "AI & Technology Insights",
      subtitle: "The 2026 Developer Edge",
      description: "Practical workflows using autonomous AI agents, prompt chaining, local models, and shipping AI-first web applications.",
      icon: <Bot className="w-5 h-5 text-teal-600" />,
      tag: "Future Tech",
    },
    {
      id: "product-dev",
      title: "Product Development Lessons",
      subtitle: "Shipping What Users Love",
      description: "Scoping down MVPs to the core essence, engineering responsive UX, avoiding premature optimization, and rapid iteration.",
      icon: <Layers className="w-5 h-5 text-teal-600" />,
      tag: "Execution",
    },
    {
      id: "founder-psychology",
      title: "Founder Psychology",
      subtitle: "Conquering Self-Doubt",
      description: "Navigating imposter syndrome when everyone is older than you, developing unshakeable conviction, and overcoming fear of failure.",
      icon: <Brain className="w-5 h-5 text-teal-600" />,
      tag: "Mindset",
    },
    {
      id: "productivity",
      title: "Productivity",
      subtitle: "Crazy Schedules Simplified",
      description: "Tactical systems to juggle morning college lectures, afternoon code sprints, podcast recording, and personal physical health.",
      icon: <Target className="w-5 h-5 text-teal-600" />,
      tag: "Systems",
    },
    {
      id: "career-growth",
      title: "Career Growth",
      subtitle: "High Agency & Distribution",
      description: "Creating your own luck by building in public, attracting mentors, and building an unassailable reputation through shipped work.",
      icon: <TrendingUp className="w-5 h-5 text-teal-600" />,
      tag: "Trajectory",
    },
  ];

  return (
    <section id="takeaways" className="py-24 relative bg-white border-t border-slate-200/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 mb-3.5 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Tangible Skills
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            What You&apos;ll <span className="text-teal-600">Take Away</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Every conversation delivers concrete mental models and practical disciplines you can immediately apply to your projects, studies, and career.
          </p>
        </div>

        {/* 8 Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {takeaways.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 border border-slate-200/90 hover:border-teal-500/50 hover:shadow-xl hover:-translate-y-1 shadow-sm"
            >
              {/* Subtle hover wash */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Header row with icon & tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:border-teal-300 transition-all">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200 group-hover:text-teal-700 group-hover:bg-teal-50 group-hover:border-teal-200 transition-colors">
                    {item.tag}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-teal-700 mt-1 mb-2.5">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom indicator */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                <span>Actionable Heuristic</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
