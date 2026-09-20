"use client";

import React, { useState } from "react";
import { FOUNDER_WISDOM } from "@/data/podcastData";
import { Quote, Lightbulb, Share2, Check } from "lucide-react";

export default function FounderWisdom() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeQuote = FOUNDER_WISDOM[activeIdx];

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(`"${activeQuote.quote}" — Maher Dhami (The Young Founder Show)`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="wisdom" className="py-20 relative bg-[#03100D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081717] border border-[#2BF4C3]/30 mb-3">
            <Lightbulb className="w-3.5 h-3.5 text-[#2BF4C3]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#2BF4C3]">
              Founder Principles
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Founder <span className="text-gradient-teal">Wisdom</span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-2">
            Unfiltered mental models, startup heuristics, and raw advice from the frontlines of building.
          </p>
        </div>

        {/* Featured Quote Highlight Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#2BF4C3]/30 shadow-2xl relative mb-8 overflow-hidden">
          
          <div className="absolute top-6 right-8 text-[#2BF4C3]/10 pointer-events-none">
            <Quote className="w-32 h-32" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2BF4C3]/15 text-[#2BF4C3] border border-[#2BF4C3]/30 mb-6">
              {activeQuote.theme}
            </span>

            <blockquote className="text-xl sm:text-3xl font-extrabold text-white leading-relaxed tracking-tight mb-6">
              &ldquo;{activeQuote.quote}&rdquo;
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div>
                <p className="text-base font-bold text-white">Maher Dhami</p>
                <p className="text-xs text-[#94A3B8]">{activeQuote.context}</p>
              </div>

              <button
                onClick={handleCopyQuote}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors self-start sm:self-auto cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#2BF4C3]" />
                    <span className="text-[#2BF4C3]">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-[#94A3B8]" />
                    <span>Share Quote</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Quote Switcher Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FOUNDER_WISDOM.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIdx(idx)}
              className={`p-4 rounded-2xl text-left transition-all cursor-pointer ${
                activeIdx === idx
                  ? "glass-panel border-[#2BF4C3] shadow-lg shadow-[#2BF4C3]/15"
                  : "bg-[#081717] border border-white/5 hover:border-white/20 text-[#94A3B8]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#2BF4C3] uppercase">{item.theme}</span>
                <span className="text-[10px] font-mono text-[#94A3B8] uppercase">Insight</span>
              </div>
              <p className="text-xs text-white line-clamp-2 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
