"use client";

import React, { useState } from "react";
import { Shield, Sparkles, Check, Share2, Quote } from "lucide-react";

interface MovementPrinciple {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  rule: string;
}

export default function MovementPrinciples() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const principles: MovementPrinciple[] = [
    {
      id: "p1",
      number: "01",
      title: "Build Before You're Ready",
      tagline: "Action Creates Confidence",
      description: "Permission is never given by the world. Waiting until you feel qualified or having every credential in place guarantees you never launch. Start building today.",
      rule: "The moment you start building, you stop being a spectator and start shaping reality.",
    },
    {
      id: "p2",
      number: "02",
      title: "Consistency Beats Motivation",
      tagline: "The Compounding Flywheel",
      description: "Motivation gets you started on day one; relentless consistency carries you through the quiet months of zero traction. Showing up every single day is the ultimate moat.",
      rule: "Four focused deep work hours daily will out-build 10 people relying on sporadic bursts.",
    },
    {
      id: "p3",
      number: "03",
      title: "Learning Is A Competitive Advantage",
      tagline: "Speed of Adaptation",
      description: "In an era of rapid AI and evolving paradigms, static knowledge expires fast. The student builder with an insatiable hunger to learn and adapt will always outpace legacy thinking.",
      rule: "Treat curiosity like compounding interest. Never stop asking how the machine works.",
    },
    {
      id: "p4",
      number: "04",
      title: "Failure Is Feedback",
      tagline: "Tuition for Resilience",
      description: "A failed launch or zero initial users is not an identity—it is market feedback. Every rejection holds the precise clue you need to pivot, refine, and improve your product.",
      rule: "Failure is not fatal; it is simply compressed data showing you where to look next.",
    },
    {
      id: "p5",
      number: "05",
      title: "Start Small. Think Long Term.",
      tagline: "Obsessive Focus First",
      description: "Generational platforms start by solving a painful, specific problem for 10 people. Don't try to build an empire on day one—build an indispensable tool today.",
      rule: "Win the smallest possible surface area first before attempting to conquer the world.",
    },
    {
      id: "p6",
      number: "06",
      title: "Share What You Learn",
      tagline: "The Power of Building in Public",
      description: "When you share your build notes, mistakes, and metrics openly, you build authentic trust. Your vulnerabilities become community strength and attract your true tribe.",
      rule: "Document the actual climb. Polished victory laps inspire nobody; honest struggle inspires everyone.",
    },
  ];

  const handleCopy = (p: MovementPrinciple) => {
    navigator.clipboard.writeText(`"${p.title}" — The Young Founder Principles (The Young Founder Show)`);
    setCopiedId(p.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="principles" className="py-24 relative bg-white border-t border-slate-200/80 overflow-hidden">
      {/* Subtle ambient brand glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#2BF4C3]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 mb-3.5 shadow-sm">
            <Shield className="w-3.5 h-3.5 text-[#00C49F]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
              The Movement Manifesto
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            The Young Founder <span className="text-[#00C49F]">Principles</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            These are not corporate rules. They are the battle-tested principles of a generation of ambitious builders refusing to stay on the sidelines.
          </p>
        </div>

        {/* 6 Movement Principles Grid with Cohesive Brand Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p) => {
            const isCopied = copiedId === p.id;
            return (
              <div
                key={p.id}
                className="bg-white rounded-3xl p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 border border-slate-200 hover:border-[#2BF4C3] hover:shadow-xl hover:-translate-y-1 shadow-sm"
              >
                {/* Decorative corner number */}
                <span className="absolute top-6 right-7 font-mono font-black text-2xl sm:text-3xl text-slate-200 group-hover:text-[#2BF4C3]/40 transition-colors pointer-events-none">
                  {p.number}
                </span>

                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider inline-block px-2.5 py-0.5 rounded-full border mb-3 bg-slate-100 text-slate-700 border-slate-200 group-hover:border-[#2BF4C3]/40 group-hover:text-[#00C49F] transition-colors">
                    {p.tagline}
                  </span>

                  <h3 className="text-xl font-black text-slate-900 transition-colors mb-3 leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {p.description}
                  </p>
                </div>

                <div>
                  {/* Highlight rule callout */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 mb-4 shadow-2xs">
                    <p className="text-xs italic font-medium text-slate-800 leading-relaxed">
                      &ldquo;{p.rule}&rdquo;
                    </p>
                  </div>

                  {/* Copy Action Row */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-slate-500 uppercase">Principle {p.number}</span>
                    <button
                      onClick={() => handleCopy(p)}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#00C49F] transition-colors cursor-pointer"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#00C49F]" />
                          <span className="text-[#00C49F] font-bold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-3.5 h-3.5" />
                          <span>Share</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
