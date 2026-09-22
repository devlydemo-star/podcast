"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Terminal, 
  Rocket, 
  Share2, 
  Lightbulb, 
  BookOpen, 
  Hammer, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Code2,
  Cpu,
  Users
} from "lucide-react";

interface AudienceCard {
  id: string;
  title: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
  gradient: string;
  recommendedFocus: string;
  primaryStack: string;
  actionMission: string;
}

export default function WhoThisIsFor() {
  const [selectedPersona, setSelectedPersona] = useState<string>("devs");

  const audiences: AudienceCard[] = [
    {
      id: "devs",
      title: "Student Developers",
      description: "People learning to build software and AI products, breaking out of tutorial hell late into the night.",
      badge: "Engineering",
      icon: <Terminal className="w-6 h-6 text-teal-600" />,
      gradient: "from-teal-500/10 via-transparent to-transparent",
      recommendedFocus: "Ep. 01: Code Architecture Post-Mortems",
      primaryStack: "Next.js, TypeScript, Tailwind, Supabase, Git",
      actionMission: "Ship an uncomfortably early v0 directly to production this weekend.",
    },
    {
      id: "founders",
      title: "Student Founders",
      description: "People validating ideas, talking to early users, shipping v0s, and launching products while in school.",
      badge: "Early Stage",
      icon: <Rocket className="w-6 h-6 text-teal-600" />,
      gradient: "from-cyan-500/10 via-transparent to-transparent",
      recommendedFocus: "Founder Toolkit: 15-Page Guest Blueprint",
      primaryStack: "Product Analytics, Stripe Billing, Linear, PostHog",
      actionMission: "Interview 10 real users with zero pitching; uncover actual pain points.",
    },
    {
      id: "creators",
      title: "Creators & Solo Hackers",
      description: "People building in public, making videos, sharing their work openly, and building an audience from day one.",
      badge: "Public Build",
      icon: <Share2 className="w-6 h-6 text-teal-600" />,
      gradient: "from-emerald-500/10 via-transparent to-transparent",
      recommendedFocus: "Community Spotlight: Building in Public",
      primaryStack: "X (Twitter), YouTube, Loom, Substack, Open Metrics",
      actionMission: "Publish your first development log with zero vanity filters.",
    },
    {
      id: "entrepreneurs",
      title: "Future Entrepreneurs",
      description: "People dreaming of building sustainable companies without waiting for permission, degrees, or pedigree.",
      badge: "High Agency",
      icon: <Lightbulb className="w-6 h-6 text-teal-600" />,
      gradient: "from-teal-600/10 via-transparent to-transparent",
      recommendedFocus: "Ep. 03: Unit Economics for Bootstrappers",
      primaryStack: "B2B SaaS, Micro-SaaS Tooling, Direct Distribution",
      actionMission: "Validate demand before writing a single line of backend logic.",
    },
    {
      id: "learners",
      title: "Self Learners",
      description: "People teaching themselves complex engineering, systems design, design taste, and modern technology.",
      badge: "Compounding",
      icon: <BookOpen className="w-6 h-6 text-teal-600" />,
      gradient: "from-sky-500/10 via-transparent to-transparent",
      recommendedFocus: "The 5-Stage Universal Builder Framework",
      primaryStack: "AI LLM APIs, Deep Technical RFCs, Open Source Kernels",
      actionMission: "Read one open source repo architecture and recreate its core algorithm.",
    },
    {
      id: "builders",
      title: "All-Round Builders",
      description: "Anyone obsessed with turning imagination into reality and creating something meaningful from nothing.",
      badge: "Execution",
      icon: <Hammer className="w-6 h-6 text-teal-600" />,
      gradient: "from-teal-700/10 via-transparent to-transparent",
      recommendedFocus: "Movement Principles: The Extreme Agency Oath",
      primaryStack: "Multi-disciplinary Problem Solving, Fast Prototyping",
      actionMission: "Commit code daily. Let the compounding momentum do the rest.",
    },
  ];

  const currentPersona = audiences.find((a) => a.id === selectedPersona) || audiences[0];

  return (
    <section id="who-its-for" className="py-24 relative bg-[#F8FAFC] border-t border-slate-200/80 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-sky-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 mb-3.5 shadow-sm">
            <Users className="w-3.5 h-3.5 text-teal-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              The Ecosystem &amp; Builder Personas
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Who This <span className="text-teal-600">Is For</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            The Young Founder Show isn&apos;t for spectators or corporate theorists. It exists for the young, relentless builders actively engineering the future from dorm rooms and late-night desks.
          </p>
        </div>

        {/* Master 3D Ecosystem Showcase & Interactive Persona Card */}
        <div className="bg-white rounded-3xl border-2 border-teal-500/30 shadow-xl overflow-hidden max-w-5xl mx-auto mb-16 relative">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-sky-500 to-indigo-600 z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            {/* Left Col: 3D Community Artwork */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group/eco">
                <Image
                  src="/images/ecosystem-3d.jpg"
                  alt="3D Student Builder Ecosystem and Collaboration Hub"
                  width={680}
                  height={480}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover/eco:scale-105"
                  priority
                />
                
                {/* Floating pill tags */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  <span>COLLABORATIVE HUBS</span>
                </div>

                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 text-[11px] font-mono font-bold shadow-md">
                  GitHub · AI · Production Apps
                </div>
              </div>
            </div>

            {/* Right Col: Interactive Persona Guidance */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                    Active Persona Focus
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {currentPersona.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  {currentPersona.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  {currentPersona.description}
                </p>
              </div>

              {/* Persona Breakdown Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Recommended Episode Track:</span>
                    <span className="text-xs text-teal-700 font-semibold">{currentPersona.recommendedFocus}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Cpu className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Core Tooling &amp; Stack:</span>
                    <span className="text-xs font-mono text-slate-600">{currentPersona.primaryStack}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Your Day-1 Mission:</span>
                    <span className="text-xs text-slate-700 italic">{currentPersona.actionMission}</span>
                  </div>
                </div>
              </div>

              {/* Persona Selector Tabs */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Explore Your Persona Track:
                </span>
                <div className="flex flex-wrap gap-2">
                  {audiences.map((aud) => (
                    <button
                      key={aud.id}
                      onClick={() => setSelectedPersona(aud.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                        selectedPersona === aud.id
                          ? "bg-teal-600 text-white border-teal-600 shadow-sm shadow-teal-600/30 scale-105"
                          : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      {aud.title.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 6 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((card) => {
            const isSelected = selectedPersona === card.id;
            return (
              <div
                key={card.id}
                onClick={() => setSelectedPersona(card.id)}
                className={`bg-white rounded-3xl p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? "border-teal-500 ring-2 ring-teal-200 shadow-xl -translate-y-1"
                    : "border-slate-200/90 hover:border-teal-500/40 hover:shadow-lg hover:-translate-y-0.5 shadow-sm"
                }`}
              >
                {/* Subtle gradient hover wash */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-teal-50/80 border border-teal-100 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-teal-300 transition-all duration-300">
                      {card.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200 group-hover:text-teal-700 group-hover:bg-teal-50 group-hover:border-teal-200 transition-colors">
                      {card.badge}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-teal-600 transition-colors mb-2.5">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom indicator line */}
                <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-teal-600 animate-pulse" : "bg-slate-300"}`} />
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      {isSelected ? "Active Focus" : "Click to Explore"}
                    </span>
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "text-teal-600 translate-x-1" : "text-slate-400 group-hover:translate-x-0.5"}`} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
