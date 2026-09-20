"use client";

import React from "react";
import { Terminal, Rocket, Share2, Lightbulb, BookOpen, Hammer, Sparkles } from "lucide-react";

interface AudienceCard {
  id: string;
  title: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
  gradient: string;
}

export default function WhoThisIsFor() {
  const audiences: AudienceCard[] = [
    {
      id: "devs",
      title: "Student Developers",
      description: "People learning to build software and AI products, breaking out of tutorial hell late into the night.",
      badge: "Engineering",
      icon: <Terminal className="w-6 h-6 text-[#2BF4C3]" />,
      gradient: "from-teal-500/15 via-transparent to-transparent",
    },
    {
      id: "founders",
      title: "Student Founders",
      description: "People validating ideas, talking to early users, shipping v0s, and launching products while in school.",
      badge: "Early Stage",
      icon: <Rocket className="w-6 h-6 text-[#2BF4C3]" />,
      gradient: "from-cyan-500/15 via-transparent to-transparent",
    },
    {
      id: "creators",
      title: "Creators",
      description: "People building in public, making videos, sharing their work openly, and building an audience from day one.",
      badge: "Public Build",
      icon: <Share2 className="w-6 h-6 text-[#2BF4C3]" />,
      gradient: "from-emerald-500/15 via-transparent to-transparent",
    },
    {
      id: "entrepreneurs",
      title: "Future Entrepreneurs",
      description: "People dreaming of building sustainable companies without waiting for permission, degrees, or pedigree.",
      badge: "High Agency",
      icon: <Lightbulb className="w-6 h-6 text-[#2BF4C3]" />,
      gradient: "from-teal-400/15 via-transparent to-transparent",
    },
    {
      id: "learners",
      title: "Self Learners",
      description: "People teaching themselves complex engineering, systems design, design taste, and modern technology.",
      badge: "Compounding",
      icon: <BookOpen className="w-6 h-6 text-[#2BF4C3]" />,
      gradient: "from-sky-500/15 via-transparent to-transparent",
    },
    {
      id: "builders",
      title: "Builders",
      description: "Anyone obsessed with turning imagination into reality and creating something meaningful from nothing.",
      badge: "Execution",
      icon: <Hammer className="w-6 h-6 text-[#2BF4C3]" />,
      gradient: "from-teal-600/15 via-transparent to-transparent",
    },
  ];

  return (
    <section id="who-its-for" className="py-24 relative bg-[#03100D] border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#2BF4C3]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#081717] border border-[#2BF4C3]/30 mb-3.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#2BF4C3]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#2BF4C3]">
              The Audience &amp; Tribe
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Who This <span className="text-gradient-teal">Is For</span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-3 leading-relaxed">
            The Young Founder Show isn&apos;t for spectators or corporate theorists. It exists for the young, relentless builders who are actively creating the future with their own hands.
          </p>
        </div>

        {/* 6 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((card) => (
            <div
              key={card.id}
              className="glass-panel-hover rounded-3xl p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 border border-white/5 hover:border-[#2BF4C3]/40"
            >
              {/* Subtle gradient hover wash */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Top Row: Icon + Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-[#081717] border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:border-[#2BF4C3]/50 transition-all duration-300">
                    {card.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/5 text-[#94A3B8] border border-white/10 group-hover:text-[#2BF4C3] group-hover:border-[#2BF4C3]/30 transition-colors">
                    {card.badge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-extrabold text-white group-hover:text-[#2BF4C3] transition-colors mb-2.5">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom indicator line */}
              <div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2BF4C3]" />
                <span className="text-[11px] font-medium text-white/70 uppercase tracking-wider">
                  Belongs here
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
