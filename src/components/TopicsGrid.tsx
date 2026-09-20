"use client";

import React from "react";
import { TOPICS, TopicItem } from "@/data/podcastData";
import { Layers } from "lucide-react";

export default function TopicsGrid() {
  return (
    <section id="topics" className="py-20 relative bg-[#03100D]/90 border-t border-white/5">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#2BF4C3]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081717] border border-[#2BF4C3]/30 mb-3">
            <Layers className="w-3.5 h-3.5 text-[#2BF4C3]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#2BF4C3]">
              Core Themes
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Topics <span className="text-gradient-teal">Covered</span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-3">
            Every conversation centers around concrete, actionable disciplines that empower modern developers, student builders, and entrepreneurs.
          </p>
        </div>

        {/* Topics Grid (8 Cards) without episode count badge */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TOPICS.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>

      </div>
    </section>
  );
}

function TopicCard({ topic }: { topic: TopicItem }) {
  return (
    <div className="glass-panel-hover rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden">
      {/* Gradient subtle hover background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
      />

      <div>
        {/* Top bar with Icon */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl p-2.5 rounded-xl bg-[#03100D] border border-white/5 shadow-inner group-hover:scale-110 transition-transform duration-300">
            {topic.icon}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white group-hover:text-[#2BF4C3] transition-colors">
          {topic.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-[#94A3B8] leading-relaxed mt-2.5">
          {topic.description}
        </p>
      </div>
    </div>
  );
}
