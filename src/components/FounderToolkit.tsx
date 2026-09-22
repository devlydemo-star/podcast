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

  const tabs = [
    { id: "overview", label: "Overview & Guarantees", icon: Compass },
    { id: "prep", label: "Recording Checklist", icon: Mic },
    { id: "topics", label: "Discussion Guide", icon: MessageSquare },
    { id: "journey", label: "5-Step Guest Journey", icon: Layers },
    { id: "faq", label: "Guest FAQ & Apply", icon: HelpCircle },
  ] as const;

  const conversationThemes = [
    {
      icon: Rocket,
      title: "Startups",
      desc: "From first spark of an idea to onboarding your first paying customer.",
      color: "from-rose-500/20 to-orange-500/10 text-orange-400 border-orange-500/30",
    },
    {
      icon: Code2,
      title: "Technology",
      desc: "The tools, frameworks, and modern stacks builders rely on day-to-day.",
      color: "from-blue-500/20 to-cyan-500/10 text-cyan-400 border-cyan-500/30",
    },
    {
      icon: Bot,
      title: "AI",
      desc: "Where artificial intelligence is heading and how builders harness it today.",
      color: "from-purple-500/20 to-indigo-500/10 text-purple-400 border-purple-500/30",
    },
    {
      icon: GraduationCap,
      title: "Learning",
      desc: "The hard-earned skills, trial-and-error, and lessons that actually stick.",
      color: "from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30",
    },
    {
      icon: Target,
      title: "Productivity",
      desc: "Getting more done with hyper-focused effort while balancing student life.",
      color: "from-amber-500/20 to-yellow-500/10 text-amber-400 border-amber-500/30",
    },
    {
      icon: Sprout,
      title: "Personal Growth",
      desc: "The founder psychology, mindset shifts, and emotional stamina behind the work.",
      color: "from-green-500/20 to-emerald-500/10 text-green-400 border-green-500/30",
    },
    {
      icon: Hammer,
      title: "Building in Public",
      desc: "Sharing raw progress, metrics, and vulnerabilities before it's polished.",
      color: "from-teal-500/20 to-cyan-500/10 text-[#2BF4C3] border-[#2BF4C3]/30",
    },
    {
      icon: Lightbulb,
      title: "Entrepreneurship",
      desc: "Turning rough napkin sketches into viable, compounding real-world momentum.",
      color: "from-yellow-500/20 to-amber-500/10 text-yellow-300 border-yellow-500/30",
    },
  ];

  const discussionTopics = [
    { num: "01", title: "Your Story", desc: "How you got started in tech/entrepreneurship and what sparked your curiosity." },
    { num: "02", title: "Your Journey", desc: "The turning points, early prototypes, and unexpected pivots along the way." },
    { num: "03", title: "Your Failures", desc: "The bugs, failed launches, and rejections you're comfortable discussing openly." },
    { num: "04", title: "Your Lessons", desc: "The key realizations that completely transformed how you think and execute." },
    { num: "05", title: "What You're Building", desc: "Your current product architecture, stack, target users, and early signals." },
    { num: "06", title: "Future Goals", desc: "Where you're taking your vision over the next 6 to 12 months." },
    { num: "07", title: "Personal Growth", desc: "Managing self-doubt, staying disciplined, and building resilient habits." },
    { num: "08", title: "Startup Insights", desc: "Actionable takeaways and advice for student builders starting tomorrow." },
  ];

  const guestSteps = [
    {
      step: "01",
      title: "Invitation & Scheduling",
      desc: "We review your application, reach out directly, and lock in a 45-minute recording slot that fits your schedule.",
      tag: "Coordination",
    },
    {
      step: "02",
      title: "Relaxed Recording",
      desc: "A casual, unscripted video & audio conversation. No grilling, no stress — just an authentic chat about your journey.",
      tag: "20–45 Mins",
    },
    {
      step: "03",
      title: "Audio & Video Crafting",
      desc: "Our production team cleans up audio noise, levels sound, and polishes pacing to make your story shine.",
      tag: "Studio Polish",
    },
    {
      step: "04",
      title: "Global Distribution",
      desc: "Your episode goes live across Spotify, YouTube, Apple Podcasts, and our website community.",
      tag: "Multi-Platform",
    },
    {
      step: "05",
      title: "Highlight Promotion",
      desc: "We cut dynamic short clips for LinkedIn and Instagram, tagging you and your project to help you gain users and allies.",
      tag: "Virality & Reach",
    },
  ];

  const faqs = [
    {
      q: "Do I need podcast experience?",
      a: "Not at all. Most guests haven't been on a podcast before. We treat this as an informal, friendly builder-to-builder chat and guide the conversation together naturally.",
    },
    {
      q: "Do I need special audio/video equipment?",
      a: "No special gear required! A laptop or phone with a working mic and standard earphones/headphones is more than enough to capture high quality audio.",
    },
    {
      q: "Can I promote my startup or project?",
      a: "Yes — we strongly encourage it! Your project, code, and vision are core parts of your story. We feature your project link and social handles in the show notes.",
    },
    {
      q: "Can I share the episode with my own audience?",
      a: "Absolutely. Once published, you'll receive the full episode link and custom-cut social clips to share with your network, investors, and future users.",
    },
    {
      q: "Is participation free?",
      a: "Yes, always 100% free. There is no cost, sponsor fee, or catch — ever. This show is strictly about documenting authentic builder journeys.",
    },
  ];

  return (
    <section id="toolkit" className="py-24 relative bg-[#020B09] border-t border-white/5 overflow-hidden">
      {/* Background ambient radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-[#2BF4C3]/7 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1DD1B9]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#081717] border border-[#2BF4C3]/30 mb-4 shadow-sm shadow-[#2BF4C3]/10">
            <Sparkles className="w-3.5 h-3.5 text-[#2BF4C3]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2BF4C3]">
              Guest Experience Kit &amp; Founder Toolkit
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Everything You Need To Know <br className="hidden sm:inline" />
            <span className="text-gradient-teal">Before We Hit Record</span>
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed mb-6">
            The official handbook for student founders, builders, and creators joining The Young Founder Show. No script, no pressure — just an honest conversation about your journey.
          </p>

          {/* Quick PDF Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsPdfModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs bg-[#2BF4C3] hover:bg-[#22d3a9] text-[#03100D] shadow-lg shadow-[#2BF4C3]/20 hover:shadow-[#2BF4C3]/40 transition-all cursor-pointer transform hover:scale-102"
            >
              <Eye className="w-4 h-4 text-[#03100D]" />
              <span>Read 15-Page PDF Online</span>
            </button>

            <a
              href={PDF_URL}
              download={PDF_FILENAME}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs bg-[#081717] hover:bg-[#0e2727] text-white border border-[#2BF4C3]/40 hover:border-[#2BF4C3] shadow-md transition-all cursor-pointer transform hover:scale-102"
            >
              <Download className="w-4 h-4 text-[#2BF4C3]" />
              <span>Download PDF Kit (2.2 MB)</span>
            </a>
          </div>
        </div>

        {/* Interactive Tabs Navigation */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#2BF4C3] text-[#03100D] shadow-lg shadow-[#2BF4C3]/25 scale-102"
                    : "bg-[#081717] hover:bg-[#0d2626] text-[#94A3B8] hover:text-white border border-white/5 hover:border-white/20"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#03100D]" : "text-[#2BF4C3]"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Overview & Guarantees */}
        {activeTab === "overview" && (
          <div className="space-y-12 animate-in fade-in zoom-in-98 duration-300">
            
            {/* Quote Banner */}
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-[#2BF4C3]/30 relative overflow-hidden text-center max-w-4xl mx-auto shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2BF4C3] to-transparent" />
              <span className="text-4xl sm:text-5xl font-serif text-[#2BF4C3]/60 leading-none">&ldquo;</span>
              <p className="text-xl sm:text-2xl font-bold text-white tracking-tight -mt-4 mb-3">
                Every builder has a story worth sharing.
              </p>
              <p className="text-xs sm:text-sm text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
                Thank you for saying yes. You&apos;re joining a growing community of student founders, developers, and creators documenting the messy, uncertain, unglamorous middle of building something — not just the highlight reel at the end.
              </p>
            </div>

            {/* Featured PDF Booklet Card */}
            <div className="glass-panel-hover rounded-3xl p-6 sm:p-8 border border-[#2BF4C3]/30 bg-gradient-to-r from-[#081717] via-[#051f1a] to-[#081717] max-w-4xl mx-auto shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-20 rounded-xl bg-[#03100D] border border-[#2BF4C3]/40 flex flex-col items-center justify-center text-[#2BF4C3] flex-shrink-0 shadow-lg shadow-[#2BF4C3]/10">
                  <FileText className="w-7 h-7 mb-1" />
                  <span className="text-[9px] font-mono font-bold tracking-widest uppercase">PDF</span>
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2BF4C3]/15 text-[#2BF4C3] text-[10px] font-bold uppercase tracking-wider mb-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Official 15-Page Guide</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    The Young Founder Show: Guest Experience Kit
                  </h4>
                  <p className="text-xs text-[#94A3B8] max-w-md mt-1">
                    Download or read the comprehensive guide including conversation frameworks, preparation tips, builder principles, and FAQ.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <button
                  onClick={() => setIsPdfModalOpen(true)}
                  className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs bg-[#2BF4C3] hover:bg-[#22d3a9] text-[#03100D] shadow-md transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>Read Online</span>
                </button>
                <a
                  href={PDF_URL}
                  download={PDF_FILENAME}
                  className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs bg-[#081717] hover:bg-[#0d2626] text-white border border-white/20 hover:border-[#2BF4C3] transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#2BF4C3]" />
                  <span>Download</span>
                </a>
              </div>
            </div>

            {/* 3 Core Guarantees */}
            <div>
              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2BF4C3]">Our 3 Promises To Every Guest</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-panel-hover rounded-2xl p-6 sm:p-8 border border-white/10 bg-[#081717]">
                  <div className="w-12 h-12 rounded-xl bg-[#2BF4C3]/15 border border-[#2BF4C3]/40 flex items-center justify-center mb-5 text-[#2BF4C3]">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Mission-Driven</h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    Built around one clear purpose: real, vulnerable lessons over manufactured, polished soundbites.
                  </p>
                </div>

                <div className="glass-panel-hover rounded-2xl p-6 sm:p-8 border border-white/10 bg-[#081717]">
                  <div className="w-12 h-12 rounded-xl bg-[#2BF4C3]/15 border border-[#2BF4C3]/40 flex items-center justify-center mb-5 text-[#2BF4C3]">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">No Script Needed</h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    Zero rehearsed corporate answers. Just a relaxed, guided builder-to-builder conversation about your climb.
                  </p>
                </div>

                <div className="glass-panel-hover rounded-2xl p-6 sm:p-8 border border-white/10 bg-[#081717]">
                  <div className="w-12 h-12 rounded-xl bg-[#2BF4C3]/15 border border-[#2BF4C3]/40 flex items-center justify-center mb-5 text-[#2BF4C3]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Always 100% Free</h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    No cost, no hidden catch, no pay-to-play — ever. This is about elevating genuine builders, not selling slots.
                  </p>
                </div>
              </div>
            </div>

            {/* Why This Exists Comparison Box */}
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 bg-[#081717]">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2BF4C3] mb-1 block">Our Difference</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">Why This Podcast Exists</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* Typical Startup Content */}
                <div className="rounded-2xl p-6 bg-[#03100D]/80 border border-white/10">
                  <span className="text-xs font-bold tracking-wider uppercase text-[#94A3B8] block mb-4">
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
                <div className="rounded-2xl p-6 bg-[#081717] border border-[#2BF4C3]/40 shadow-lg shadow-[#2BF4C3]/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#2BF4C3]/10 rounded-full blur-xl" />
                  <span className="text-xs font-bold tracking-wider uppercase text-[#2BF4C3] block mb-4">
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
            
            {/* 4 Format Specs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="glass-panel rounded-2xl p-5 border border-white/10 bg-[#081717] text-center">
                <Video className="w-6 h-6 text-[#2BF4C3] mx-auto mb-2" />
                <span className="text-[11px] uppercase tracking-wider text-[#94A3B8] font-bold block">Recording Format</span>
                <p className="text-sm sm:text-base font-bold text-white mt-1">Video + Audio</p>
              </div>

              <div className="glass-panel rounded-2xl p-5 border border-white/10 bg-[#081717] text-center">
                <Clock className="w-6 h-6 text-[#2BF4C3] mx-auto mb-2" />
                <span className="text-[11px] uppercase tracking-wider text-[#94A3B8] font-bold block">Episode Duration</span>
                <p className="text-sm sm:text-base font-bold text-white mt-1">20–45 Minutes</p>
              </div>

              <div className="glass-panel rounded-2xl p-5 border border-white/10 bg-[#081717] text-center">
                <Radio className="w-6 h-6 text-[#2BF4C3] mx-auto mb-2" />
                <span className="text-[11px] uppercase tracking-wider text-[#94A3B8] font-bold block">Conversation Style</span>
                <p className="text-sm sm:text-base font-bold text-white mt-1">Casual &amp; Relaxed</p>
              </div>

              <div className="glass-panel rounded-2xl p-5 border border-white/10 bg-[#081717] text-center">
                <Share2 className="w-6 h-6 text-[#2BF4C3] mx-auto mb-2" />
                <span className="text-[11px] uppercase tracking-wider text-[#94A3B8] font-bold block">Distribution</span>
                <p className="text-sm sm:text-base font-bold text-white mt-1">Spotify · YouTube</p>
              </div>
            </div>

            {/* Interactive Pre-Recording Technical Checklist */}
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#2BF4C3]/30 bg-[#081717] shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Pre-Flight Technical Checklist</h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8]">
                    Click items to mark them as ready before your scheduled recording session.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2BF4C3]/10 border border-[#2BF4C3]/30 text-xs font-bold text-[#2BF4C3]">
                  <span>{Object.values(checklist).filter(Boolean).length} of 4 Ready</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Item 1 */}
                <div
                  onClick={() => toggleChecklist("room")}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 select-none ${
                    checklist.room
                      ? "bg-[#2BF4C3]/10 border-[#2BF4C3]/50 text-white"
                      : "bg-[#03100D] border-white/10 text-[#94A3B8] hover:border-white/20"
                  }`}
                >
                  <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    checklist.room ? "bg-[#2BF4C3] text-[#03100D]" : "border border-white/20"
                  }`}>
                    {checklist.room ? <CheckCircle2 className="w-4 h-4" /> : null}
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
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 select-none ${
                    checklist.earphones
                      ? "bg-[#2BF4C3]/10 border-[#2BF4C3]/50 text-white"
                      : "bg-[#03100D] border-white/10 text-[#94A3B8] hover:border-white/20"
                  }`}
                >
                  <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    checklist.earphones ? "bg-[#2BF4C3] text-[#03100D]" : "border border-white/20"
                  }`}>
                    {checklist.earphones ? <CheckCircle2 className="w-4 h-4" /> : null}
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
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 select-none ${
                    checklist.internet
                      ? "bg-[#2BF4C3]/10 border-[#2BF4C3]/50 text-white"
                      : "bg-[#03100D] border-white/10 text-[#94A3B8] hover:border-white/20"
                  }`}
                >
                  <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    checklist.internet ? "bg-[#2BF4C3] text-[#03100D]" : "border border-white/20"
                  }`}>
                    {checklist.internet ? <CheckCircle2 className="w-4 h-4" /> : null}
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
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 select-none ${
                    checklist.camera
                      ? "bg-[#2BF4C3]/10 border-[#2BF4C3]/50 text-white"
                      : "bg-[#03100D] border-white/10 text-[#94A3B8] hover:border-white/20"
                  }`}
                >
                  <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    checklist.camera ? "bg-[#2BF4C3] text-[#03100D]" : "border border-white/20"
                  }`}>
                    {checklist.camera ? <CheckCircle2 className="w-4 h-4" /> : null}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Camera Optional</h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5">
                      Video is great for social clips, but audio-only is totally welcomed if you prefer.
                    </p>
                  </div>
                </div>

              </div>

              {/* Founder Mindset Note */}
              <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#03100D] border border-white/10 flex items-start gap-3.5">
                <Zap className="w-5 h-5 text-[#2BF4C3] flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  <strong className="text-white">Remember:</strong> There is no need to memorize rehearsed talking points. If you stumble or make a mistake, don&apos;t worry — our editing team cleans up pauses and coughs before publishing!
                </p>
              </div>

            </div>

          </div>
        )}

        {/* Tab 3: Themes & Discussion Guide */}
        {activeTab === "topics" && (
          <div className="space-y-14 animate-in fade-in zoom-in-98 duration-300">
            
            {/* 8 Conversation Themes */}
            <div>
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2BF4C3]">Conversation Themes</span>
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
                      className="glass-panel-hover rounded-2xl p-5 border border-white/10 bg-[#081717] flex flex-col justify-between"
                    >
                      <div>
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${theme.color} border flex items-center justify-center mb-3.5`}>
                          <ThemeIcon className="w-5 h-5" />
                        </div>
                        <h4 className="text-base font-bold text-white mb-1.5">{theme.title}</h4>
                        <p className="text-xs text-[#94A3B8] leading-relaxed">{theme.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 8 Core Discussion Prompts */}
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 bg-[#081717]">
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2BF4C3]">Conversation Guide</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">8 Discussion Prompts</h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-2">
                  A loose guide, not a rigid script. We follow the conversation wherever it naturally leads.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {discussionTopics.map((topic, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-[#03100D] border border-white/5 hover:border-[#2BF4C3]/30 transition-colors flex items-start gap-4"
                  >
                    <span className="text-sm font-mono font-black text-[#2BF4C3] bg-[#2BF4C3]/10 px-2.5 py-1 rounded-lg">
                      {topic.num}
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white mb-1">{topic.title}</h4>
                      <p className="text-xs text-[#94A3B8] leading-relaxed">{topic.desc}</p>
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
              <span className="text-xs font-bold uppercase tracking-widest text-[#2BF4C3]">Your Journey With Us</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">What To Expect Step-by-Step</h3>
            </div>

            <div className="space-y-4">
              {guestSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="glass-panel-hover rounded-2xl p-6 border border-white/10 bg-[#081717] flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-xl bg-[#2BF4C3]/10 border border-[#2BF4C3]/30 flex items-center justify-center font-mono font-bold text-sm text-[#2BF4C3] flex-shrink-0">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white mb-1">{step.title}</h4>
                      <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-2xl">{step.desc}</p>
                    </div>
                  </div>
                  <div className="self-start md:self-center">
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-white/80">
                      {step.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Beyond the Episode (Community perks) */}
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#2BF4C3]/25 bg-[#081717]">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2BF4C3]">Beyond The Episode</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">What You Become Part Of</h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
                  Being a guest is just the start of your journey in our founder ecosystem.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { title: "Weekly Lessons", desc: "Fresh takeaways from fellow student builders." },
                  { title: "Founder Insights", desc: "Real perspective from builders currently in the arena." },
                  { title: "Peer Networking", desc: "Direct connections with student devs and co-founders." },
                  { title: "Encouragement Hub", desc: "A supportive founder space built on grit, not ego." },
                  { title: "Future Collabs", desc: "First in line for co-features and guest invitations." },
                  { title: "Early Access", desc: "First access to upcoming episode series and resources." },
                ].map((perk, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#03100D] border border-white/5">
                    <h5 className="text-xs sm:text-sm font-bold text-white mb-1">{perk.title}</h5>
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
            
            {/* FAQ Accordion */}
            <div className="space-y-3">
              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2BF4C3]">Good To Know</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">Frequently Asked Questions</h3>
              </div>

              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="glass-panel rounded-2xl border border-white/10 bg-[#081717] overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-white flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-[#2BF4C3] bg-[#2BF4C3]/10 px-2 py-0.5 rounded">
                          Q
                        </span>
                        <span>{faq.q}</span>
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#94A3B8] transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? "rotate-180 text-[#2BF4C3]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-[#94A3B8] leading-relaxed border-t border-white/5">
                        <div className="pt-3">
                          {faq.a}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Meet The Host Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 bg-[#081717] flex flex-col sm:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-full border-2 border-[#2BF4C3] bg-[#03100D] flex items-center justify-center font-black text-xl text-[#2BF4C3] flex-shrink-0 shadow-[0_0_20px_rgba(43,244,195,0.25)]">
                MD
              </div>
              <div className="text-center sm:text-left">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2BF4C3]">Meet The Host</span>
                <h4 className="text-xl font-bold text-white mt-0.5">Maher Dhami</h4>
                <p className="text-xs text-[#94A3B8] uppercase font-mono tracking-wider mb-2">Founder · Builder · Developer</p>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed italic">
                  &ldquo;The Young Founder Show exists to give the builder&apos;s journey the attention it deserves — before the outcome is known. This isn&apos;t about any one person&apos;s story. It&apos;s about creating space for yours.&rdquo;
                </p>
              </div>
            </div>

          </div>
        )}

        {/* Universal Section Footer Callout: Apply as Guest CTA */}
        <div className="mt-16 text-center">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#2BF4C3]/30 bg-gradient-to-r from-[#081717] via-[#041c18] to-[#081717] max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2BF4C3] to-transparent" />
            
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              Ready to Share Your Builder Journey?
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] max-w-xl mx-auto mb-6">
              Submit your project details via our official guest intake form. We review every submission and reach out directly to schedule an episode.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-4">
              <a
                href={SHOW_INFO.communityFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm bg-[#2BF4C3] hover:bg-[#22d3a9] text-[#03100D] shadow-xl shadow-[#2BF4C3]/30 hover:shadow-[#2BF4C3]/50 transition-all transform hover:scale-105 cursor-pointer"
              >
                <Users className="w-4 h-4 text-[#03100D]" />
                <span>Apply as a Guest on the Show</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsPdfModalOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-sm bg-[#081717] hover:bg-[#0d2626] text-white border border-[#2BF4C3]/40 hover:border-[#2BF4C3] transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4 text-[#2BF4C3]" />
                <span>Read Full 15-Page PDF</span>
              </button>

              <a
                href={PDF_URL}
                download={PDF_FILENAME}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-sm bg-transparent hover:bg-white/5 text-[#94A3B8] hover:text-white border border-white/20 hover:border-white transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            </div>

            <p className="text-[11px] text-[#94A3B8]/60 mt-4">
              100% free participation · No script needed · Video or audio only
            </p>
          </div>
        </div>

      </div>

      {/* Fullscreen PDF Reader Modal */}
      {isPdfModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#03100D] border border-[#2BF4C3]/30 rounded-3xl w-full max-w-5xl h-[92vh] flex flex-col shadow-2xl overflow-hidden relative">
            
            {/* Modal Top Bar */}
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-[#081717]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2BF4C3]/15 border border-[#2BF4C3]/30 flex items-center justify-center text-[#2BF4C3]">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">The Young Founder Show — Guest Experience Kit</h3>
                  <p className="text-[11px] text-[#94A3B8]">15 Pages · Complete Guide &amp; Handbook</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={PDF_URL}
                  download={PDF_FILENAME}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#2BF4C3] hover:bg-[#22d3a9] text-[#03100D] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
                <a
                  href={PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in New Tab</span>
                </a>
                <button
                  onClick={() => setIsPdfModalOpen(false)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
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
                <span>Download PDF</span>
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
