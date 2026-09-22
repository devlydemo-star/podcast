"use client";

import React, { useState } from "react";
import { FOUNDER_WISDOM } from "@/data/podcastData";
import { Quote, Lightbulb, Share2, Check, Sparkles, User } from "lucide-react";

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
    <section id="wisdom" className="py-24 relative bg-[#F8FAFC] border-t border-slate-200/80 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-sky-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-50 via-indigo-50 to-pink-50 border border-teal-200/80 mb-3.5 shadow-sm">
            <Lightbulb className="w-3.5 h-3.5 text-teal-600" />
            <span className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-teal-800 via-indigo-800 to-rose-800 bg-clip-text text-transparent">
              Founder Principles &amp; Heuristics
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Unfiltered <span className="text-gradient-vibrant">Founder Wisdom</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Raw mental models, startup heuristics, and honest advice forged in the messy trenches of building and shipping.
          </p>
        </div>

        {/* Featured Quote Highlight Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-teal-500/30 shadow-2xl relative mb-10 overflow-hidden max-w-4xl mx-auto">
          {/* Top vibrant accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-400 via-indigo-500 via-purple-500 to-pink-500" />
          
          {/* Subtle background quote watermark */}
          <div className="absolute -top-4 right-6 text-teal-600/10 pointer-events-none select-none">
            <Quote className="w-40 h-40" />
          </div>

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-700 border border-teal-200 shadow-sm">
                <Sparkles className="w-3 h-3 text-teal-600" />
                <span>{activeQuote.theme}</span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-500">
                Episode Heuristic #{activeIdx + 1}
              </span>
            </div>

            <blockquote className="text-xl sm:text-3xl font-extrabold text-slate-900 leading-relaxed tracking-tight mb-8">
              &ldquo;{activeQuote.quote}&rdquo;
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                  MD
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900">Maher Dhami</p>
                  <p className="text-xs text-slate-500 font-medium">{activeQuote.context}</p>
                </div>
              </div>

              <button
                onClick={handleCopyQuote}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-all cursor-pointer self-start sm:self-auto shadow-sm hover:shadow"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-teal-600" />
                    <span className="text-teal-700">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-slate-500" />
                    <span>Share Quote</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Quote Switcher Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {FOUNDER_WISDOM.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIdx(idx)}
              className={`p-5 rounded-2xl text-left transition-all cursor-pointer border ${
                activeIdx === idx
                  ? "bg-white border-teal-500 shadow-md ring-2 ring-teal-100 scale-[1.02]"
                  : "bg-white/80 border-slate-200 hover:border-slate-300 text-slate-600 hover:bg-white shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-bold uppercase tracking-wider ${activeIdx === idx ? "text-teal-700" : "text-slate-500"}`}>
                  {item.theme}
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-400">
                  0{idx + 1}
                </span>
              </div>
              <p className="text-xs font-medium text-slate-800 line-clamp-3 leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
