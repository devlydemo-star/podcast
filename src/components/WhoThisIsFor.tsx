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
  iconBg: string;
  badgeColor: string;
  activeBtn: string;
  activeRing: string;
  accentText: string;
}

export default function WhoThisIsFor() {
  const [selectedPersona, setSelectedPersona] = useState<string>("devs");

  const audiences: AudienceCard[] = [
    {
      id: "devs",
      title: "Student Developers",
      description: "People learning to build software and AI products, breaking out of tutorial hell late into the night.",
      badge: "Engineering",
      icon: <Terminal className="w-6 h-6 text-slate-800" />,
      gradient: "from-[#2BF4C3]/10 via-transparent to-transparent",
      recommendedFocus: "Ep. 01: Code Architecture Post-Mortems",
      primaryStack: "Next.js, TypeScript, Tailwind, Supabase, Git",
      actionMission: "Ship an uncomfortably early v0 directly to production this weekend.",
      iconBg: "bg-slate-50 border-slate-200 text-slate-800",
      badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
      activeBtn: "bg-slate-900 text-white shadow-md",
      activeRing: "border-[#2BF4C3] ring-2 ring-[#2BF4C3]/30",
      accentText: "text-emerald-700",
    },
    {
      id: "founders",
      title: "Student Founders",
      description: "People validating ideas, talking to early users, shipping v0s, and launching products while in school.",
      badge: "Early Stage",
      icon: <Rocket className="w-6 h-6 text-slate-800" />,
      gradient: "from-[#2BF4C3]/10 via-transparent to-transparent",
      recommendedFocus: "Founder Toolkit: 15-Page Guest Blueprint",
      primaryStack: "Product Analytics, Stripe Billing, Linear, PostHog",
      actionMission: "Interview 10 real users with zero pitching; uncover actual pain points.",
      iconBg: "bg-slate-50 border-slate-200 text-slate-800",
      badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
      activeBtn: "bg-slate-900 text-white shadow-md",
      activeRing: "border-[#2BF4C3] ring-2 ring-[#2BF4C3]/30",
      accentText: "text-emerald-700",
    },
    {
      id: "creators",
      title: "Creators & Solo Hackers",
      description: "People building in public, making videos, sharing their work openly, and building an audience from day one.",
      badge: "Public Build",
      icon: <Share2 className="w-6 h-6 text-slate-800" />,
      gradient: "from-[#2BF4C3]/10 via-transparent to-transparent",
      recommendedFocus: "Community Spotlight: Building in Public",
      primaryStack: "X (Twitter), YouTube, Loom, Substack, Open Metrics",
      actionMission: "Publish your first development log with zero vanity filters.",
      iconBg: "bg-slate-50 border-slate-200 text-slate-800",
      badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
      activeBtn: "bg-slate-900 text-white shadow-md",
      activeRing: "border-[#2BF4C3] ring-2 ring-[#2BF4C3]/30",
      accentText: "text-emerald-700",
    },
    {
      id: "entrepreneurs",
      title: "Future Entrepreneurs",
      description: "People dreaming of building sustainable companies without waiting for permission, degrees, or pedigree.",
      badge: "High Agency",
      icon: <Lightbulb className="w-6 h-6 text-slate-800" />,
      gradient: "from-[#2BF4C3]/10 via-transparent to-transparent",
      recommendedFocus: "Ep. 03: Unit Economics for Bootstrappers",
      primaryStack: "B2B SaaS, Micro-SaaS Tooling, Direct Distribution",
      actionMission: "Validate demand before writing a single line of backend logic.",
      iconBg: "bg-slate-50 border-slate-200 text-slate-800",
      badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
      activeBtn: "bg-slate-900 text-white shadow-md",
      activeRing: "border-[#2BF4C3] ring-2 ring-[#2BF4C3]/30",
      accentText: "text-emerald-700",
    },
    {
      id: "learners",
      title: "Self Learners",
      description: "People teaching themselves complex engineering, systems design, design taste, and modern technology.",
      badge: "Compounding",
      icon: <BookOpen className="w-6 h-6 text-slate-800" />,
      gradient: "from-[#2BF4C3]/10 via-transparent to-transparent",
      recommendedFocus: "The 5-Stage Universal Builder Framework",
      primaryStack: "AI LLM APIs, Deep Technical RFCs, Open Source Kernels",
      actionMission: "Read one open source repo architecture and recreate its core algorithm.",
      iconBg: "bg-slate-50 border-slate-200 text-slate-800",
      badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
      activeBtn: "bg-slate-900 text-white shadow-md",
      activeRing: "border-[#2BF4C3] ring-2 ring-[#2BF4C3]/30",
      accentText: "text-emerald-700",
    },
    {
      id: "builders",
      title: "All-Round Builders",
      description: "Anyone obsessed with turning imagination into reality and creating something meaningful from nothing.",
      badge: "Execution",
      icon: <Hammer className="w-6 h-6 text-slate-800" />,
      gradient: "from-[#2BF4C3]/10 via-transparent to-transparent",
      recommendedFocus: "Movement Principles: The Extreme Agency Oath",
      primaryStack: "Multi-disciplinary Problem Solving, Fast Prototyping",
      actionMission: "Commit code daily. Let the compounding momentum do the rest.",
      iconBg: "bg-slate-50 border-slate-200 text-slate-800",
      badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
      activeBtn: "bg-slate-900 text-white shadow-md",
      activeRing: "border-[#2BF4C3] ring-2 ring-[#2BF4C3]/30",
      accentText: "text-emerald-700",
    },
  ];

  const currentPersona = audiences.find((a) => a.id === selectedPersona) || audiences[0];

  return (
    <section id="who-its-for" className="py-24 relative bg-[#F8FAFC] border-t border-slate-200/80 overflow-hidden">
      {/* Clean brand ambient glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#2BF4C3]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#2BF4C3]/40 mb-4 shadow-xs">
            <Users className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
              The Ecosystem &amp; Builder Personas
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Who This <span className="text-[#00C49F]">Is For</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            The Young Founder Show isn&apos;t for spectators or corporate theorists. It exists for the young, relentless builders actively engineering the future from dorm rooms and late-night desks.
          </p>
        </div>

        {/* Master 3D Ecosystem Showcase & Interactive Persona Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-5xl mx-auto mb-16 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#2BF4C3]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            {/* Left Col: 3D Community Artwork */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md group/eco">
                <div className="relative rounded-[14px] overflow-hidden bg-white">
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
            </div>

            {/* Right Col: Interactive Persona Guidance */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${currentPersona.badgeColor}`}>
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

              {/* Persona Breakdown Card with Colorful Highlights */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-slate-50 border border-slate-200 space-y-3 shadow-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Recommended Episode Track:</span>
                    <span className={`text-xs font-bold ${currentPersona.accentText}`}>{currentPersona.recommendedFocus}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Cpu className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Core Tooling &amp; Stack:</span>
                    <span className="text-xs font-mono text-slate-700 font-medium">{currentPersona.primaryStack}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Your Day-1 Mission:</span>
                    <span className="text-xs text-slate-700 italic font-medium">{currentPersona.actionMission}</span>
                  </div>
                </div>
              </div>

              {/* Persona Selector Tabs with Vibrant Color Pills */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Select Your Persona Track:
                </span>
                <div className="flex flex-wrap gap-2">
                  {audiences.map((aud) => (
                    <button
                      key={aud.id}
                      onClick={() => setSelectedPersona(aud.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                        selectedPersona === aud.id
                          ? aud.activeBtn
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

        {/* 6 Premium Vibrant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((card) => {
            const isSelected = selectedPersona === card.id;
            return (
              <div
                key={card.id}
                onClick={() => setSelectedPersona(card.id)}
                className={`bg-white rounded-3xl p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? `${card.activeRing} shadow-xl -translate-y-1`
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
                    <div className={`w-13 h-13 rounded-2xl border flex items-center justify-center shadow-sm group-hover:scale-110 transition-all duration-300 ${card.iconBg}`}>
                      {card.icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border transition-colors ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className={`text-xl font-black text-slate-900 transition-colors mb-2.5 group-hover:${card.accentText}`}>
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom indicator line */}
                <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-teal-600 animate-pulse" : "bg-slate-300"}`} />
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      {isSelected ? "Active Persona" : "Click to Explore"}
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
