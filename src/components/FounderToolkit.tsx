"use client";

import React, { useState } from "react";
import {
  Compass,
  Mic,
  Video,
  Clock,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  Users,
  ChevronDown,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Zap,
  BookOpen,
  Headphones,
  Wifi,
  Camera,
  Layers,
  Rocket,
  Code2,
  Bot,
  GraduationCap,
  Target,
  Sprout,
  Hammer,
  Lightbulb,
  Radio,
  Share2,
  Download,
  FileText,
  Eye,
  X,
  Check,
  Star,
  Flame,
} from "lucide-react";
import { SHOW_INFO } from "@/data/podcastData";

const PDF_URL = "/The-Young-Founder-Show-Guest-Experience-Kit.pdf";
const PDF_FILENAME = "The-Young-Founder-Show-Guest-Experience-Kit.pdf";

export default function FounderToolkit() {
  const [activeTab, setActiveTab] = useState<"overview" | "prep" | "topics" | "journey" | "faq">("overview");
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  
  // Interactive checklist state
  const [checklist, setChecklist] = useState({
    room: true,
    earphones: true,
    internet: false,
    camera: false,
  });

  // Accordion state for FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleChecklist = (key: keyof typeof checklist) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = Object.values(checklist).filter(Boolean).length;
  const checklistPercent = (completedCount / 4) * 100;

  const tabs = [
    {
      id: "overview",
      label: "Overview & Guarantees",
      icon: Compass,
      activeColor: "bg-gradient-to-r from-[#2BF4C3] to-[#10B981] text-[#03100D] shadow-[0_0_25px_rgba(43,244,195,0.4)]",
      glowColor: "text-[#2BF4C3]",
    },
    {
      id: "prep",
      label: "Recording Checklist",
      icon: Mic,
      activeColor: "bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] text-[#03100D] shadow-[0_0_25px_rgba(6,182,212,0.4)]",
      glowColor: "text-[#06B6D4]",
    },
    {
      id: "topics",
      label: "Discussion Guide",
      icon: MessageSquare,
      activeColor: "bg-gradient-to-r from-[#A855F7] to-[#EC4899] text-white shadow-[0_0_25px_rgba(168,85,247,0.45)]",
      glowColor: "text-[#C084FC]",
    },
    {
      id: "journey",
      label: "5-Step Guest Journey",
      icon: Layers,
      activeColor: "bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-[#03100D] shadow-[0_0_25px_rgba(245,158,11,0.4)]",
      glowColor: "text-[#F59E0B]",
    },
    {
      id: "faq",
      label: "Guest FAQ & Apply",
      icon: HelpCircle,
      activeColor: "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white shadow-[0_0_25px_rgba(99,102,241,0.4)]",
      glowColor: "text-[#818CF8]",
    },
  ] as const;

  const conversationThemes = [
    {
      icon: Rocket,
      title: "Startups",
      desc: "From first spark of an idea to onboarding your first paying customer.",
      gradient: "from-orange-500/20 via-rose-500/10 to-transparent",
      borderColor: "border-orange-500/40 hover:border-orange-400",
      badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
      glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]",
    },
    {
      icon: Code2,
      title: "Technology",
      desc: "The tools, frameworks, and modern stacks builders rely on day-to-day.",
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
      borderColor: "border-cyan-500/40 hover:border-cyan-400",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]",
    },
    {
      icon: Bot,
      title: "AI",
      desc: "Where artificial intelligence is heading and how builders harness it today.",
      gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
      borderColor: "border-purple-500/40 hover:border-purple-400",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]",
    },
    {
      icon: GraduationCap,
      title: "Learning",
      desc: "The hard-earned skills, trial-and-error, and lessons that actually stick.",
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      borderColor: "border-emerald-500/40 hover:border-emerald-400",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]",
    },
    {
      icon: Target,
      title: "Productivity",
      desc: "Getting more done with hyper-focused effort while balancing student life.",
      gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
      borderColor: "border-amber-500/40 hover:border-amber-400",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]",
    },
    {
      icon: Sprout,
      title: "Personal Growth",
      desc: "The founder psychology, mindset shifts, and emotional stamina behind the work.",
      gradient: "from-teal-500/20 via-green-500/10 to-transparent",
      borderColor: "border-teal-500/40 hover:border-teal-400",
      badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/30",
      glow: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.25)]",
    },
    {
      icon: Hammer,
      title: "Building in Public",
      desc: "Sharing raw progress, metrics, and vulnerabilities before it's polished.",
      gradient: "from-[#2BF4C3]/20 via-cyan-500/10 to-transparent",
      borderColor: "border-[#2BF4C3]/40 hover:border-[#2BF4C3]",
      badgeColor: "bg-[#2BF4C3]/20 text-[#2BF4C3] border-[#2BF4C3]/30",
      glow: "group-hover:shadow-[0_0_30px_rgba(43,244,195,0.25)]",
    },
    {
      icon: Lightbulb,
      title: "Entrepreneurship",
      desc: "Turning rough napkin sketches into viable, compounding real-world momentum.",
      gradient: "from-yellow-500/20 via-amber-500/10 to-transparent",
      borderColor: "border-yellow-500/40 hover:border-yellow-400",
      badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      glow: "group-hover:shadow-[0_0_30px_rgba(234,179,8,0.25)]",
    },
  ];

  const discussionTopics = [
    { num: "01", title: "Your Story", desc: "How you got started in tech/entrepreneurship and what sparked your curiosity.", gradient: "from-cyan-400 to-blue-500" },
    { num: "02", title: "Your Journey", desc: "The turning points, early prototypes, and unexpected pivots along the way.", gradient: "from-blue-400 to-indigo-500" },
    { num: "03", title: "Your Failures", desc: "The bugs, failed launches, and rejections you're comfortable discussing openly.", gradient: "from-purple-400 to-pink-500" },
    { num: "04", title: "Your Lessons", desc: "The key realizations that completely transformed how you think and execute.", gradient: "from-rose-400 to-orange-500" },
    { num: "05", title: "What You're Building", desc: "Your current product architecture, stack, target users, and early signals.", gradient: "from-amber-400 to-yellow-500" },
    { num: "06", title: "Future Goals", desc: "Where you're taking your vision over the next 6 to 12 months.", gradient: "from-emerald-400 to-teal-500" },
    { num: "07", title: "Personal Growth", desc: "Managing self-doubt, staying disciplined, and building resilient habits.", gradient: "from-teal-400 to-cyan-500" },
    { num: "08", title: "Startup Insights", desc: "Actionable takeaways and advice for student builders starting tomorrow.", gradient: "from-[#2BF4C3] to-[#8B5CF6]" },
  ];

  const guestSteps = [
    {
      step: "01",
      title: "Invitation & Scheduling",
      desc: "We review your application, reach out directly, and lock in a 45-minute recording slot that fits your schedule.",
      tag: "Coordination",
      gradient: "from-cyan-500 to-blue-600",
      textColor: "text-cyan-400",
      borderColor: "border-cyan-500/30",
    },
    {
      step: "02",
      title: "Relaxed Recording",
      desc: "A casual, unscripted video & audio conversation. No grilling, no stress — just an authentic chat about your journey.",
      tag: "20–45 Mins",
      gradient: "from-blue-500 to-indigo-600",
      textColor: "text-blue-400",
      borderColor: "border-blue-500/30",
    },
    {
      step: "03",
      title: "Audio & Video Crafting",
      desc: "Our production team cleans up audio noise, levels sound, and polishes pacing to make your story shine.",
      tag: "Studio Polish",
      gradient: "from-purple-500 to-pink-600",
      textColor: "text-purple-400",
      borderColor: "border-purple-500/30",
    },
    {
      step: "04",
      title: "Global Distribution",
      desc: "Your episode goes live across Spotify, YouTube, Apple Podcasts, and our website community.",
      tag: "Multi-Platform",
      gradient: "from-pink-500 to-rose-600",
      textColor: "text-pink-400",
      borderColor: "border-pink-500/30",
    },
    {
      step: "05",
      title: "Highlight Promotion",
      desc: "We cut dynamic short clips for LinkedIn and Instagram, tagging you and your project to help you gain users and allies.",
      tag: "Virality & Reach",
      gradient: "from-amber-500 to-orange-600",
      textColor: "text-amber-400",
      borderColor: "border-amber-500/30",
    },
  ];

  const faqs = [
    {
      q: "Do I need podcast experience?",
      a: "Not at all. Most guests haven't been on a podcast before. We treat this as an informal, friendly builder-to-builder chat and guide the conversation together naturally.",
      accent: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10",
    },
    {
      q: "Do I need special audio/video equipment?",
      a: "No special gear required! A laptop or phone with a working mic and standard earphones/headphones is more than enough to capture high quality audio.",
      accent: "text-purple-400 border-purple-500/40 bg-purple-500/10",
    },
    {
      q: "Can I promote my startup or project?",
      a: "Yes — we strongly encourage it! Your project, code, and vision are core parts of your story. We feature your project link and social handles in the show notes.",
      accent: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
    },
    {
      q: "Can I share the episode with my own audience?",
      a: "Absolutely. Once published, you'll receive the full episode link and custom-cut social clips to share with your network, investors, and future users.",
      accent: "text-amber-400 border-amber-500/40 bg-amber-500/10",
    },
    {
      q: "Is participation free?",
      a: "Yes, always 100% free. There is no cost, sponsor fee, or catch — ever. This show is strictly about documenting authentic builder journeys.",
      accent: "text-rose-400 border-rose-500/40 bg-rose-500/10",
    },
  ];

  return (
    <section id="toolkit" className="py-24 relative bg-[#020B09] border-t border-white/5 overflow-hidden">
      {/* Dynamic Multi-Color Ambient Lighting */}
      <div className="absolute top-10 left-10 w-[600px] h-[400px] bg-gradient-to-br from-[#2BF4C3]/15 via-[#06B6D4]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[650px] h-[450px] bg-gradient-to-bl from-[#8B5CF6]/15 via-[#EC4899]/10 to-transparent rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[700px] h-[400px] bg-gradient-to-tr from-[#F59E0B]/12 via-[#10B981]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      {/* Cyber-grid background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#2bf4c3_1px,transparent_1px)] [background-size:32px_32px] opacity-8 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          {/* Iridescent Eyebrow Badge */}
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-[#2BF4C3] via-[#818CF8] via-[#EC4899] to-[#F59E0B] shadow-[0_0_20px_rgba(43,244,195,0.3)] mb-4 animate-in fade-in duration-500">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#051412]/95 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#2BF4C3] animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest bg-gradient-to-r from-[#2BF4C3] via-[#A5B4FC] to-[#F472B6] bg-clip-text text-transparent">
                Guest Experience Kit &amp; Founder Toolkit
              </span>
            </div>
          </div>

          {/* Luminous Gradient Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
            Everything You Need To Know <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#2BF4C3] via-[#38BDF8] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(43,244,195,0.3)]">
              Before We Hit Record
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed mb-6 font-normal">
            The official 15-page handbook for student founders, builders, and creators joining The Young Founder Show. No script, no pressure — just an honest, unvarnished look at your climb.
          </p>

          {/* Quick Action Buttons with Glowing Holographic Accents */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => setIsPdfModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs sm:text-sm bg-gradient-to-r from-[#2BF4C3] via-[#06B6D4] to-[#3B82F6] text-[#03100D] shadow-[0_0_30px_rgba(43,244,195,0.45)] hover:shadow-[0_0_45px_rgba(43,244,195,0.7)] transition-all transform hover:scale-105 cursor-pointer"
            >
              <Eye className="w-4 h-4 text-[#03100D]" />
              <span>Read 15-Page PDF Online</span>
            </button>

            <a
              href={PDF_URL}
              download={PDF_FILENAME}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm bg-[#081717] hover:bg-[#0e2727] text-white border border-[#2BF4C3]/40 hover:border-[#2BF4C3] shadow-lg shadow-black/60 hover:shadow-[#2BF4C3]/20 transition-all transform hover:scale-105 cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#2BF4C3]" />
              <span>Download PDF Kit (2.2 MB)</span>
            </a>
          </div>
        </div>

        {/* Interactive Colorful Tabs Navigation */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer select-none ${
                  isActive
                    ? `${tab.activeColor} scale-105 transform`
                    : "bg-[#081717]/80 hover:bg-[#0e2624] text-[#94A3B8] hover:text-white border border-white/10 hover:border-white/25 backdrop-blur-md"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "" : tab.glowColor}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Overview & Guarantees */}
        {activeTab === "overview" && (
          <div className="space-y-12 animate-in fade-in zoom-in-98 duration-300">
            
            {/* Quote Banner */}
            <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#081c19] via-[#0b2723] to-[#0d1f2d] border border-[#2BF4C3]/40 relative overflow-hidden text-center max-w-4xl mx-auto shadow-[0_0_45px_rgba(43,244,195,0.15)]">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2BF4C3] via-[#818CF8] to-[#EC4899]" />
              <div className="absolute -top-10 -left-10 w-36 h-36 bg-[#2BF4C3]/15 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-[#818CF8]/15 rounded-full blur-2xl" />

              <span className="text-5xl sm:text-6xl font-serif text-[#2BF4C3]/70 leading-none block mb-2">&ldquo;</span>
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight -mt-4 mb-4">
                Every builder has a story worth sharing.
              </p>
              <p className="text-xs sm:text-base text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed">
                Thank you for saying yes. You&apos;re joining a growing community of student founders, developers, and creators documenting the messy, uncertain, unglamorous middle of building something — not just the highlight reel at the end.
              </p>
            </div>

            {/* Featured Luxury 3D PDF Booklet Spotlight Card */}
            <div className="group rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#061c17] via-[#0d1d36] to-[#1e0d29] border border-[#2BF4C3]/40 hover:border-[#2BF4C3] max-w-4xl mx-auto shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 hover:shadow-[0_0_40px_rgba(43,244,195,0.25)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#EC4899]/15 via-[#8B5CF6]/15 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-5 relative z-10">
                {/* Visual 3D PDF Icon with holographic gradient border */}
                <div className="w-16 h-20 rounded-2xl bg-gradient-to-b from-[#2BF4C3] via-[#06B6D4] to-[#8B5CF6] p-[1.5px] flex-shrink-0 shadow-[0_0_25px_rgba(43,244,195,0.3)]">
                  <div className="w-full h-full rounded-2xl bg-[#03100D] flex flex-col items-center justify-center text-white">
                    <FileText className="w-7 h-7 text-[#2BF4C3] mb-1" />
                    <span className="text-[9px] font-mono font-black tracking-widest text-[#2BF4C3]">15 PGS</span>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2BF4C3]/20 border border-[#2BF4C3]/50 text-[#2BF4C3] text-[10px] font-black uppercase tracking-wider">
                      <Sparkles className="w-3 h-3" />
                      <span>Official Welcome Package</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-bold border border-purple-500/30">
                      PDF · 2.2 MB
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-black text-white group-hover:text-[#2BF4C3] transition-colors">
                    The Young Founder Show: Guest Experience Kit
                  </h4>
                  <p className="text-xs text-[#94A3B8] max-w-md mt-1">
                    Complete reference containing conversation themes, technical checklist, discussion questions, builder principles, and FAQs.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-end relative z-10">
                <button
                  onClick={() => setIsPdfModalOpen(true)}
                  className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#2BF4C3] to-[#06B6D4] hover:from-[#22d3a9] hover:to-[#0284c7] text-[#03100D] shadow-lg shadow-[#2BF4C3]/25 transition-all cursor-pointer transform hover:scale-105"
                >
                  <Eye className="w-4 h-4" />
                  <span>Read Online</span>
                </button>
                <a
                  href={PDF_URL}
                  download={PDF_FILENAME}
                  className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs bg-[#081717] hover:bg-[#0d2626] text-white border border-[#2BF4C3]/30 hover:border-[#2BF4C3] transition-all cursor-pointer transform hover:scale-105"
                >
                  <Download className="w-4 h-4 text-[#2BF4C3]" />
                  <span>Download</span>
                </a>
              </div>
            </div>

            {/* 3 Core Guarantees with Vibrant Multi-Color Glows */}
            <div>
              <div className="text-center mb-6">
                <span className="text-xs font-black uppercase tracking-widest bg-gradient-to-r from-[#2BF4C3] via-[#A855F7] to-[#F59E0B] bg-clip-text text-transparent">
                  Our 3 Promises To Every Guest
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Promise 1: Mission-Driven */}
                <div className="group rounded-3xl p-7 bg-gradient-to-b from-[#081f1b] to-[#05110e] border border-[#2BF4C3]/40 hover:border-[#2BF4C3] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(43,244,195,0.2)]">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2BF4C3]/25 to-emerald-500/15 border border-[#2BF4C3]/50 flex items-center justify-center mb-5 text-[#2BF4C3] shadow-md">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-white mb-2 group-hover:text-[#2BF4C3] transition-colors">
                    Mission-Driven
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    Built around one clear purpose: real, vulnerable lessons over manufactured, polished soundbites.
                  </p>
                </div>

                {/* Promise 2: No Script Needed */}
                <div className="group rounded-3xl p-7 bg-gradient-to-b from-[#180f2b] to-[#0c0817] border border-purple-500/40 hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/25 to-pink-500/15 border border-purple-500/50 flex items-center justify-center mb-5 text-purple-300 shadow-md">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-white mb-2 group-hover:text-purple-300 transition-colors">
                    No Script Needed
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    Zero rehearsed corporate answers. Just a relaxed, guided builder-to-builder conversation about your climb.
                  </p>
                </div>

                {/* Promise 3: Always 100% Free */}
                <div className="group rounded-3xl p-7 bg-gradient-to-b from-[#231a08] to-[#120d04] border border-amber-500/40 hover:border-amber-400 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/25 to-yellow-500/15 border border-amber-500/50 flex items-center justify-center mb-5 text-amber-300 shadow-md">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-white mb-2 group-hover:text-amber-300 transition-colors">
                    Always 100% Free
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    No cost, no hidden catch, no pay-to-play — ever. This is about elevating genuine builders, not selling slots.
                  </p>
                </div>
              </div>
            </div>

            {/* Why This Exists Comparison Box */}
            <div className="rounded-3xl p-6 sm:p-10 bg-[#081717]/90 border border-white/10 relative overflow-hidden">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2BF4C3] mb-1 block">Our Difference</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">Why This Podcast Exists</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* Typical Startup Content */}
                <div className="rounded-2xl p-6 bg-[#03100D]/80 border border-rose-500/20">
                  <span className="text-xs font-bold tracking-wider uppercase text-rose-400/80 block mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    Typical Startup Media
                  </span>
                  <ul className="space-y-3.5">
                    {[
                      "Billionaire success stories in hindsight",
                      "Polished outcomes with details removed",
                      "The highlight reel after achieving scale",
                      "Glossing over early failures and self-doubt",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#94A3B8]">
                        <span className="w-2 h-2 rounded-full bg-[#94A3B8]/40 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* The Young Founder Show */}
                <div className="rounded-2xl p-6 bg-gradient-to-br from-[#061d19] to-[#092a23] border border-[#2BF4C3]/50 shadow-[0_0_30px_rgba(43,244,195,0.15)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[#2BF4C3]/15 rounded-full blur-2xl" />
                  <span className="text-xs font-bold tracking-wider uppercase text-[#2BF4C3] block mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2BF4C3] animate-ping" />
                    The Young Founder Show
                  </span>
                  <ul className="space-y-3.5">
                    {[
                      "Documenting the real journey as it unfolds",
                      "Real technical mistakes, bugs, and lost users",
                      "Raw startup lessons you can test tomorrow",
                      "Building in public with full transparency",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-white font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#2BF4C3] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Recording Prep & Checklist */}
        {activeTab === "prep" && (
          <div className="space-y-10 animate-in fade-in zoom-in-98 duration-300 max-w-5xl mx-auto">
            
            {/* 4 Format Specs with Curated Vivid Colors */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-2xl p-5 border border-pink-500/30 bg-gradient-to-b from-pink-500/15 via-rose-500/5 to-[#081717] text-center shadow-lg hover:border-pink-400 transition-all">
                <Video className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                <span className="text-[11px] uppercase tracking-wider text-pink-300 font-bold block">Recording Format</span>
                <p className="text-sm sm:text-base font-black text-white mt-1">Video + Audio</p>
              </div>

              <div className="rounded-2xl p-5 border border-amber-500/30 bg-gradient-to-b from-amber-500/15 via-orange-500/5 to-[#081717] text-center shadow-lg hover:border-amber-400 transition-all">
                <Clock className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold block">Episode Duration</span>
                <p className="text-sm sm:text-base font-black text-white mt-1">20–45 Minutes</p>
              </div>

              <div className="rounded-2xl p-5 border border-cyan-500/30 bg-gradient-to-b from-cyan-500/15 via-blue-500/5 to-[#081717] text-center shadow-lg hover:border-cyan-400 transition-all">
                <Radio className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <span className="text-[11px] uppercase tracking-wider text-cyan-300 font-bold block">Conversation Style</span>
                <p className="text-sm sm:text-base font-black text-white mt-1">Casual &amp; Relaxed</p>
              </div>

              <div className="rounded-2xl p-5 border border-emerald-500/30 bg-gradient-to-b from-emerald-500/15 via-teal-500/5 to-[#081717] text-center shadow-lg hover:border-emerald-400 transition-all">
                <Share2 className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <span className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold block">Distribution</span>
                <p className="text-sm sm:text-base font-black text-white mt-1">Spotify · YouTube</p>
              </div>
            </div>

            {/* Interactive Pre-Recording Technical Checklist with Dynamic Gradient Progress Bar */}
            <div className="rounded-3xl p-6 sm:p-10 border border-[#06B6D4]/40 bg-gradient-to-b from-[#081a24] to-[#040e14] shadow-2xl relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">Pre-Flight Technical Checklist</h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
                    Click items to check them off as you get ready for recording.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                      {completedCount} of 4 Ready
                    </span>
                    <span className="text-[10px] text-[#94A3B8]">
                      {checklistPercent === 100 ? "Ready to roll!" : "Almost there"}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-cyan-400/30 bg-cyan-500/15 flex items-center justify-center font-mono font-bold text-cyan-300 text-sm">
                    {checklistPercent}%
                  </div>
                </div>
              </div>

              {/* Live Animated Progress Bar */}
              <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden mb-6">
                <div
                  className="h-full bg-gradient-to-r from-[#2BF4C3] via-[#06B6D4] to-[#8B5CF6] transition-all duration-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.6)]"
                  style={{ width: `${checklistPercent}%` }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Item 1 */}
                <div
                  onClick={() => toggleChecklist("room")}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 select-none ${
                    checklist.room
                      ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/10 border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                      : "bg-[#03100D]/80 border-white/10 text-[#94A3B8] hover:border-white/25"
                  }`}
                >
                  <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    checklist.room ? "bg-emerald-400 text-[#03100D]" : "border border-white/20"
                  }`}>
                    {checklist.room ? <Check className="w-4 h-4 stroke-[3]" /> : null}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Quiet Room</h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5">
                      Find a quiet indoor spot with closed doors and minimal background echoes.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div
                  onClick={() => toggleChecklist("earphones")}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 select-none ${
                    checklist.earphones
                      ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/10 border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                      : "bg-[#03100D]/80 border-white/10 text-[#94A3B8] hover:border-white/25"
                  }`}
                >
                  <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    checklist.earphones ? "bg-cyan-400 text-[#03100D]" : "border border-white/20"
                  }`}>
                    {checklist.earphones ? <Check className="w-4 h-4 stroke-[3]" /> : null}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Earphones Recommended</h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5">
                      AirPods or wired earphones prevent speaker feedback from leaking into your mic.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div
                  onClick={() => toggleChecklist("internet")}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 select-none ${
                    checklist.internet
                      ? "bg-gradient-to-r from-purple-500/20 to-indigo-500/10 border-purple-500/60 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                      : "bg-[#03100D]/80 border-white/10 text-[#94A3B8] hover:border-white/25"
                  }`}
                >
                  <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    checklist.internet ? "bg-purple-400 text-white" : "border border-white/20"
                  }`}>
                    {checklist.internet ? <Check className="w-4 h-4 stroke-[3]" /> : null}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Stable Internet Connection</h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5">
                      A stable WiFi or hotspot connection ensures fluid video frame rates and zero dropouts.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div
                  onClick={() => toggleChecklist("camera")}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 select-none ${
                    checklist.camera
                      ? "bg-gradient-to-r from-amber-500/20 to-orange-500/10 border-amber-500/60 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                      : "bg-[#03100D]/80 border-white/10 text-[#94A3B8] hover:border-white/25"
                  }`}
                >
                  <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    checklist.camera ? "bg-amber-400 text-[#03100D]" : "border border-white/20"
                  }`}>
                    {checklist.camera ? <Check className="w-4 h-4 stroke-[3]" /> : null}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Camera Optional</h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5">
                      Video is great for social clips, but audio-only is totally welcomed if you prefer.
                    </p>
                  </div>
                </div>
              </div>

              {/* 100% Ready Celebration Alert */}
              {checklistPercent === 100 && (
                <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-[#2BF4C3]/20 border border-emerald-400/50 flex items-center gap-3 animate-in zoom-in-95 duration-200">
                  <Flame className="w-5 h-5 text-emerald-400 flex-shrink-0 animate-bounce" />
                  <p className="text-xs sm:text-sm font-bold text-white">
                    You&apos;re 100% ready for the recording session! We look forward to documenting your story.
                  </p>
                </div>
              )}
            </div>

          </div>
        )}

        {/* Tab 3: Themes & Discussion Guide */}
        {activeTab === "topics" && (
          <div className="space-y-14 animate-in fade-in zoom-in-98 duration-300">
            
            {/* 8 Conversation Themes in Vivid Colors */}
            <div>
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-xs font-black uppercase tracking-widest text-[#C084FC]">Conversation Themes</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">What We Talk About</h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-2">
                  Every episode weaves through these core areas based on where your unique journey leads.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {conversationThemes.map((theme, idx) => {
                  const ThemeIcon = theme.icon;
                  return (
                    <div
                      key={idx}
                      className={`group rounded-2xl p-5 border ${theme.borderColor} bg-gradient-to-b ${theme.gradient} bg-[#081717] flex flex-col justify-between transition-all duration-300 ${theme.glow}`}
                    >
                      <div>
                        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-3.5 ${theme.badgeColor}`}>
                          <ThemeIcon className="w-5 h-5" />
                        </div>
                        <h4 className="text-base font-black text-white mb-1.5">{theme.title}</h4>
                        <p className="text-xs text-[#CBD5E1] leading-relaxed">{theme.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 8 Core Discussion Prompts with Rainbow Badges */}
            <div className="rounded-3xl p-6 sm:p-10 border border-purple-500/30 bg-gradient-to-b from-[#120822] via-[#090412] to-[#081717]">
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-xs font-black uppercase tracking-widest text-purple-300">Conversation Guide</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">8 Discussion Prompts</h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-2">
                  A loose guide, not a rigid script. We follow the conversation wherever it naturally leads.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {discussionTopics.map((topic, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-[#05030a]/80 border border-white/10 hover:border-purple-400/50 transition-all flex items-start gap-4 group"
                  >
                    <span className={`text-sm font-mono font-black bg-gradient-to-r ${topic.gradient} text-[#03100D] px-2.5 py-1 rounded-xl shadow-md flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      {topic.num}
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                        {topic.title}
                      </h4>
                      <p className="text-xs text-[#CBD5E1] leading-relaxed">{topic.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Tab 4: 5-Step Guest Journey */}
        {activeTab === "journey" && (
          <div className="space-y-12 animate-in fade-in zoom-in-98 duration-300 max-w-5xl mx-auto">
            
            {/* Step Progression */}
            <div className="text-center max-w-xl mx-auto mb-4">
              <span className="text-xs font-black uppercase tracking-widest text-amber-400">Your Journey With Us</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">What To Expect Step-by-Step</h3>
            </div>

            <div className="space-y-4">
              {guestSteps.map((step, idx) => (
                <div
                  key={idx}
                  className={`group rounded-2xl p-6 border ${step.borderColor} bg-gradient-to-r from-[#0d1424] via-[#081717] to-[#0d1424] flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 hover:scale-[1.01]`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center font-mono font-black text-sm text-[#03100D] shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      {step.step}
                    </span>
                    <div>
                      <h4 className={`text-base sm:text-lg font-black text-white mb-1 group-hover:${step.textColor} transition-colors`}>
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed max-w-2xl">{step.desc}</p>
                    </div>
                  </div>
                  <div className="self-start md:self-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-white/10 border ${step.borderColor} ${step.textColor}`}>
                      {step.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Beyond the Episode (Community perks in colorful cards) */}
            <div className="rounded-3xl p-6 sm:p-10 border border-amber-500/30 bg-gradient-to-b from-[#181105] to-[#081717]">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Beyond The Episode</span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">What You Become Part Of</h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
                  Being a guest is just the start of your journey in our founder ecosystem.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { title: "Weekly Lessons", desc: "Fresh takeaways from fellow student builders.", badge: "text-cyan-400 border-cyan-500/30" },
                  { title: "Founder Insights", desc: "Real perspective from builders currently in the arena.", badge: "text-purple-400 border-purple-500/30" },
                  { title: "Peer Networking", desc: "Direct connections with student devs and co-founders.", badge: "text-emerald-400 border-emerald-500/30" },
                  { title: "Encouragement Hub", desc: "A supportive founder space built on grit, not ego.", badge: "text-rose-400 border-rose-500/30" },
                  { title: "Future Collabs", desc: "First in line for co-features and guest invitations.", badge: "text-amber-400 border-amber-500/30" },
                  { title: "Early Access", desc: "First access to upcoming episode series and resources.", badge: "text-[#2BF4C3] border-[#2BF4C3]/30" },
                ].map((perk, idx) => (
                  <div key={idx} className={`p-4 rounded-2xl bg-[#03100D]/80 border ${perk.badge} hover:scale-103 transition-transform`}>
                    <h5 className="text-xs sm:text-sm font-black text-white mb-1">{perk.title}</h5>
                    <p className="text-[11px] text-[#94A3B8]">{perk.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Tab 5: Guest FAQ & Apply */}
        {activeTab === "faq" && (
          <div className="space-y-12 animate-in fade-in zoom-in-98 duration-300 max-w-4xl mx-auto">
            
            {/* FAQ Accordion with Colorful Badges */}
            <div className="space-y-3.5">
              <div className="text-center mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-[#818CF8]">Good To Know</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">Frequently Asked Questions</h3>
              </div>

              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                      isOpen
                        ? "border-[#818CF8]/60 bg-gradient-to-b from-[#110e24] to-[#081717] shadow-[0_0_25px_rgba(129,140,248,0.2)]"
                        : "border-white/10 bg-[#081717] hover:border-white/20"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-white flex items-center gap-3">
                        <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${faq.accent}`}>
                          Q{idx + 1}
                        </span>
                        <span>{faq.q}</span>
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#94A3B8] transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? "rotate-180 text-[#818CF8]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed border-t border-white/5">
                        <div className="pt-3 font-normal">
                          {faq.a}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Meet The Host Card with Radiant Holographic Ring */}
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#081717] via-[#10142b] to-[#1a0f2e] border border-[#818CF8]/40 flex flex-col sm:flex-row items-center gap-6 shadow-2xl relative overflow-hidden">
              <div className="w-24 h-24 rounded-full p-[2px] bg-gradient-to-tr from-[#2BF4C3] via-[#818CF8] to-[#EC4899] flex-shrink-0 shadow-[0_0_30px_rgba(129,140,248,0.4)]">
                <div className="w-full h-full rounded-full bg-[#03100D] flex items-center justify-center font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#2BF4C3] to-[#818CF8]">
                  MD
                </div>
              </div>

              <div className="text-center sm:text-left">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#2BF4C3]">Meet The Host</span>
                <h4 className="text-xl font-black text-white mt-0.5">Maher Dhami</h4>
                <p className="text-xs bg-gradient-to-r from-[#2BF4C3] to-[#818CF8] bg-clip-text text-transparent uppercase font-mono tracking-wider font-bold mb-2">
                  Founder · Builder · Developer
                </p>
                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed italic">
                  &ldquo;The Young Founder Show exists to give the builder&apos;s journey the attention it deserves — before the outcome is known. This isn&apos;t about any one person&apos;s story. It&apos;s about creating space for yours.&rdquo;
                </p>
              </div>
            </div>

          </div>
        )}

        {/* Universal Section Footer Callout with Iridescent Gradient Mesh */}
        <div className="mt-20 text-center">
          <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-[#061d19] via-[#0b1f3b] to-[#1f0d2b] border border-[#2BF4C3]/40 max-w-4xl mx-auto shadow-[0_0_50px_rgba(43,244,195,0.2)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2BF4C3] via-[#818CF8] via-[#EC4899] to-[#F59E0B]" />
            
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-3">
              Ready to Share Your Builder Journey?
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5E1] max-w-xl mx-auto mb-8 font-normal">
              Submit your project details via our official guest intake form. We review every submission and reach out directly to schedule an episode.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-4">
              <a
                href={SHOW_INFO.communityFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-black text-sm bg-gradient-to-r from-[#2BF4C3] to-[#06B6D4] hover:from-[#22d3a9] hover:to-[#0284c7] text-[#03100D] shadow-[0_0_30px_rgba(43,244,195,0.4)] hover:shadow-[0_0_45px_rgba(43,244,195,0.7)] transition-all transform hover:scale-105 cursor-pointer"
              >
                <Users className="w-4 h-4 text-[#03100D]" />
                <span>Apply as a Guest on the Show</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsPdfModalOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-sm bg-[#081717] hover:bg-[#0d2626] text-white border border-[#2BF4C3]/40 hover:border-[#2BF4C3] transition-all transform hover:scale-105 cursor-pointer shadow-lg"
              >
                <Eye className="w-4 h-4 text-[#2BF4C3]" />
                <span>Read Full 15-Page PDF</span>
              </button>

              <a
                href={PDF_URL}
                download={PDF_FILENAME}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-sm bg-transparent hover:bg-white/10 text-[#CBD5E1] hover:text-white border border-white/20 hover:border-white transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF (2.2 MB)</span>
              </a>
            </div>

            <p className="text-[11px] text-[#94A3B8] mt-4 font-mono">
              100% free participation · No script needed · Video or audio only
            </p>
          </div>
        </div>

      </div>

      {/* Fullscreen PDF Reader Modal with High-End Multi-Color Header */}
      {isPdfModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#03100D] border border-[#2BF4C3]/40 rounded-3xl w-full max-w-5xl h-[92vh] flex flex-col shadow-[0_0_60px_rgba(43,244,195,0.25)] overflow-hidden relative">
            
            {/* Modal Top Rainbow Line */}
            <div className="h-1 bg-gradient-to-r from-[#2BF4C3] via-[#818CF8] via-[#EC4899] to-[#F59E0B]" />

            {/* Modal Top Bar */}
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-[#081717]/95 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2BF4C3]/20 to-[#818CF8]/20 border border-[#2BF4C3]/40 flex items-center justify-center text-[#2BF4C3]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">The Young Founder Show — Guest Experience Kit</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#2BF4C3] font-mono font-bold">15 Pages</span>
                    <span className="text-[10px] text-[#94A3B8]">• Official Welcome Package &amp; Handbook</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={PDF_URL}
                  download={PDF_FILENAME}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-black bg-gradient-to-r from-[#2BF4C3] to-[#06B6D4] text-[#03100D] transition-transform hover:scale-105"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <a
                  href={PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/15 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in New Tab</span>
                </a>
                <button
                  onClick={() => setIsPdfModalOpen(false)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
                  aria-label="Close PDF Viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content: Embedded PDF iframe */}
            <div className="flex-1 w-full bg-[#050e0c] relative">
              <iframe
                src={`${PDF_URL}#toolbar=1&navpanes=0`}
                className="w-full h-full border-0"
                title="The Young Founder Show Guest Experience Kit PDF"
              />
            </div>

            {/* Mobile Footer helper */}
            <div className="sm:hidden px-4 py-2.5 border-t border-white/10 bg-[#081717] flex items-center justify-between">
              <a
                href={PDF_URL}
                download={PDF_FILENAME}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2BF4C3]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF (2.2 MB)</span>
              </a>
              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#94A3B8]"
              >
                <span>New Tab</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
