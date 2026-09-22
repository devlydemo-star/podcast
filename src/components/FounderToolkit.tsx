"use client";

import React, { useState } from "react";
import Image from "next/image";
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
      activeColor: "bg-teal-600 text-white shadow-md shadow-teal-600/30",
      glowColor: "text-teal-600",
    },
    {
      id: "prep",
      label: "Recording Checklist",
      icon: Mic,
      activeColor: "bg-sky-600 text-white shadow-md shadow-sky-600/30",
      glowColor: "text-sky-600",
    },
    {
      id: "topics",
      label: "Discussion Guide",
      icon: MessageSquare,
      activeColor: "bg-purple-600 text-white shadow-md shadow-purple-600/30",
      glowColor: "text-purple-600",
    },
    {
      id: "journey",
      label: "5-Step Guest Journey",
      icon: Layers,
      activeColor: "bg-amber-600 text-white shadow-md shadow-amber-600/30",
      glowColor: "text-amber-600",
    },
    {
      id: "faq",
      label: "Guest FAQ & Apply",
      icon: HelpCircle,
      activeColor: "bg-indigo-600 text-white shadow-md shadow-indigo-600/30",
      glowColor: "text-indigo-600",
    },
  ] as const;

  const conversationThemes = [
    {
      icon: Rocket,
      title: "Startups",
      desc: "From first spark of an idea to onboarding your first paying customer.",
      gradient: "from-orange-500/10 to-transparent",
      borderColor: "border-orange-200 hover:border-orange-300",
      badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
      glow: "hover:shadow-md",
    },
    {
      icon: Code2,
      title: "Technology",
      desc: "The tools, frameworks, and modern stacks builders rely on day-to-day.",
      gradient: "from-cyan-500/10 to-transparent",
      borderColor: "border-cyan-200 hover:border-cyan-300",
      badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
      glow: "hover:shadow-md",
    },
    {
      icon: Bot,
      title: "AI",
      desc: "Where artificial intelligence is heading and how builders harness it today.",
      gradient: "from-purple-500/10 to-transparent",
      borderColor: "border-purple-200 hover:border-purple-300",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      glow: "hover:shadow-md",
    },
    {
      icon: GraduationCap,
      title: "Learning",
      desc: "The hard-earned skills, trial-and-error, and lessons that actually stick.",
      gradient: "from-emerald-500/10 to-transparent",
      borderColor: "border-emerald-200 hover:border-emerald-300",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      glow: "hover:shadow-md",
    },
    {
      icon: Target,
      title: "Productivity",
      desc: "Getting more done with hyper-focused effort while balancing student life.",
      gradient: "from-amber-500/10 to-transparent",
      borderColor: "border-amber-200 hover:border-amber-300",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      glow: "hover:shadow-md",
    },
    {
      icon: Sprout,
      title: "Personal Growth",
      desc: "The founder psychology, mindset shifts, and emotional stamina behind the work.",
      gradient: "from-teal-500/10 to-transparent",
      borderColor: "border-teal-200 hover:border-teal-300",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
      glow: "hover:shadow-md",
    },
    {
      icon: Hammer,
      title: "Building in Public",
      desc: "Sharing raw progress, metrics, and vulnerabilities before it's polished.",
      gradient: "from-sky-500/10 to-transparent",
      borderColor: "border-sky-200 hover:border-sky-300",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      glow: "hover:shadow-md",
    },
    {
      icon: Lightbulb,
      title: "Entrepreneurship",
      desc: "Turning rough napkin sketches into viable, compounding real-world momentum.",
      gradient: "from-yellow-500/10 to-transparent",
      borderColor: "border-yellow-200 hover:border-yellow-300",
      badgeColor: "bg-yellow-50 text-yellow-700 border-yellow-200",
      glow: "hover:shadow-md",
    },
  ];

  const discussionTopics = [
    { num: "01", title: "Your Story", desc: "How you got started in tech/entrepreneurship and what sparked your curiosity.", gradient: "from-cyan-500 to-blue-600" },
    { num: "02", title: "Your Journey", desc: "The turning points, early prototypes, and unexpected pivots along the way.", gradient: "from-blue-500 to-indigo-600" },
    { num: "03", title: "Your Failures", desc: "The bugs, failed launches, and rejections you're comfortable discussing openly.", gradient: "from-purple-500 to-pink-600" },
    { num: "04", title: "Your Lessons", desc: "The key realizations that completely transformed how you think and execute.", gradient: "from-rose-500 to-orange-600" },
    { num: "05", title: "What You're Building", desc: "Your current product architecture, stack, target users, and early signals.", gradient: "from-amber-500 to-yellow-600" },
    { num: "06", title: "Future Goals", desc: "Where you're taking your vision over the next 6 to 12 months.", gradient: "from-emerald-500 to-teal-600" },
    { num: "07", title: "Personal Growth", desc: "Managing self-doubt, staying disciplined, and building resilient habits.", gradient: "from-teal-500 to-cyan-600" },
    { num: "08", title: "Startup Insights", desc: "Actionable takeaways and advice for student builders starting tomorrow.", gradient: "from-teal-600 to-indigo-600" },
  ];

  const guestSteps = [
    {
      step: "01",
      title: "Invitation & Scheduling",
      desc: "We review your application, reach out directly, and lock in a 45-minute recording slot that fits your schedule.",
      tag: "Coordination",
      gradient: "from-cyan-500 to-blue-600",
      textColor: "text-cyan-700",
      borderColor: "border-cyan-200",
      bgColor: "bg-cyan-50/50",
    },
    {
      step: "02",
      title: "Relaxed Recording",
      desc: "A casual, unscripted video & audio conversation. No grilling, no stress — just an authentic chat about your journey.",
      tag: "20–45 Mins",
      gradient: "from-blue-500 to-indigo-600",
      textColor: "text-blue-700",
      borderColor: "border-blue-200",
      bgColor: "bg-blue-50/50",
    },
    {
      step: "03",
      title: "Audio & Video Crafting",
      desc: "Our production team cleans up audio noise, levels sound, and polishes pacing to make your story shine.",
      tag: "Studio Polish",
      gradient: "from-purple-500 to-pink-600",
      textColor: "text-purple-700",
      borderColor: "border-purple-200",
      bgColor: "bg-purple-50/50",
    },
    {
      step: "04",
      title: "Global Distribution",
      desc: "Your episode goes live across Spotify, YouTube, Apple Podcasts, and our website community.",
      tag: "Multi-Platform",
      gradient: "from-pink-500 to-rose-600",
      textColor: "text-pink-700",
      borderColor: "border-pink-200",
      bgColor: "bg-pink-50/50",
    },
    {
      step: "05",
      title: "Highlight Promotion",
      desc: "We cut dynamic short clips for LinkedIn and Instagram, tagging you and your project to help you gain users and allies.",
      tag: "Virality & Reach",
      gradient: "from-amber-500 to-orange-600",
      textColor: "text-amber-700",
      borderColor: "border-amber-200",
      bgColor: "bg-amber-50/50",
    },
  ];

  const faqs = [
    {
      q: "Do I need podcast experience?",
      a: "Not at all. Most guests haven't been on a podcast before. We treat this as an informal, friendly builder-to-builder chat and guide the conversation together naturally.",
      accent: "text-cyan-700 border-cyan-200 bg-cyan-50",
    },
    {
      q: "Do I need special audio/video equipment?",
      a: "No special gear required! A laptop or phone with a working mic and standard earphones/headphones is more than enough to capture high quality audio.",
      accent: "text-purple-700 border-purple-200 bg-purple-50",
    },
    {
      q: "Can I promote my startup or project?",
      a: "Yes — we strongly encourage it! Your project, code, and vision are core parts of your story. We feature your project link and social handles in the show notes.",
      accent: "text-emerald-700 border-emerald-200 bg-emerald-50",
    },
    {
      q: "Can I share the episode with my own audience?",
      a: "Absolutely. Once published, you'll receive the full episode link and custom-cut social clips to share with your network, investors, and future users.",
      accent: "text-amber-700 border-amber-200 bg-amber-50",
    },
    {
      q: "Is participation free?",
      a: "Yes, always 100% free. There is no cost, sponsor fee, or catch — ever. This show is strictly about documenting authentic builder journeys.",
      accent: "text-rose-700 border-rose-200 bg-rose-50",
    },
  ];

  return (
    <section id="toolkit" className="py-24 relative bg-[#F8FAFC] border-t border-slate-200/80 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-10 left-10 w-[600px] h-[400px] bg-teal-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[650px] h-[450px] bg-indigo-500/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[700px] h-[400px] bg-sky-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          {/* Eyebrow Badge with Vibrant Gradient */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-50 via-indigo-50 to-pink-50 border border-teal-200/80 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-teal-800 via-indigo-800 to-rose-800 bg-clip-text text-transparent">
              Guest Experience Kit &amp; Founder Toolkit
            </span>
          </div>

          {/* Clean Corporate Headline with Vibrant Gradient */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Everything You Need To Know <br className="hidden sm:inline" />
            <span className="text-gradient-vibrant">
              Before We Hit Record
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
            The official 15-page handbook for student founders, builders, and creators joining The Young Founder Show. No script, no pressure — just an honest, unvarnished look at your climb.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => setIsPdfModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] cursor-pointer"
            >
              <Eye className="w-4 h-4 text-teal-400" />
              <span>Read 15-Page PDF Online</span>
            </button>

            <a
              href={PDF_URL}
              download={PDF_FILENAME}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow transition-all transform hover:scale-[1.02] cursor-pointer"
            >
              <Download className="w-4 h-4 text-teal-600" />
              <span>Download PDF Kit (2.2 MB)</span>
            </a>
          </div>
        </div>

        {/* Corporate Styled Tab Navigation Ribbon */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar bg-slate-100 p-1.5 rounded-2xl border border-slate-200 max-w-3xl mx-auto shadow-inner">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer select-none ${
                  isActive
                    ? `${tab.activeColor} shadow-sm`
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/80"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : tab.glowColor}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Overview & Guarantees */}
        {activeTab === "overview" && (
          <div className="space-y-12 animate-in fade-in duration-300">
            
            {/* Quote Banner */}
            <div className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200 relative overflow-hidden text-center max-w-4xl mx-auto shadow-sm">
              <span className="text-5xl sm:text-6xl font-serif text-teal-500/40 leading-none block mb-2">&ldquo;</span>
              <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight -mt-4 mb-4">
                Every builder has a story worth sharing.
              </p>
              <p className="text-xs sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Thank you for saying yes. You&apos;re joining a growing community of student founders, developers, and creators documenting the messy, uncertain, unglamorous middle of building something — not just the highlight reel at the end.
              </p>
            </div>

            {/* Featured 3D Toolkit & Handbook Spotlight Card */}
            <div className="group rounded-3xl p-6 sm:p-10 bg-white border-2 border-teal-500/30 hover:border-teal-500/50 max-w-5xl mx-auto shadow-xl relative overflow-hidden transition-all duration-300">
              {/* Decorative top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-sky-500 to-indigo-600" />
              
              {/* Subtle background tech grid */}
              <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left: Content & Action */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold uppercase tracking-wider shadow-sm">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Official Guest &amp; Builder Asset</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
                      15 Pages · 2.2 MB
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                      100% Free
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                    The Complete Founder Handbook &amp; Guest Experience Kit
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    Everything you need to step into the recording booth with zero anxiety. Packed with authentic interview frameworks, technical audio checklists, question prompts, and real builder principles.
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span>Pre-flight technical checklist</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span>5-Stage builder framework</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span>20+ discussion theme prompts</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span>Zero script, zero grilling guarantee</span>
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="flex flex-wrap items-center gap-3.5 pt-3">
                    <button
                      onClick={() => setIsPdfModalOpen(true)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:scale-[1.02]"
                    >
                      <Eye className="w-4 h-4 text-teal-400" />
                      <span>Read 15-Page PDF Online</span>
                    </button>
                    <a
                      href={PDF_URL}
                      download={PDF_FILENAME}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 hover:border-slate-300 transition-all cursor-pointer shadow-sm hover:shadow"
                    >
                      <Download className="w-4 h-4 text-teal-600" />
                      <span>Download PDF Kit (2.2 MB)</span>
                    </a>
                  </div>
                </div>

                {/* Right: 3D Isometric Toolkit Artwork Showcase with Vibrant Gradient Frame */}
                <div className="lg:col-span-5 relative flex justify-center">
                  <div className="relative w-full max-w-sm rounded-2xl overflow-hidden bg-gradient-to-tr from-teal-400 via-indigo-500 to-pink-500 p-[2.5px] shadow-2xl group/img">
                    <div className="relative rounded-[14px] overflow-hidden bg-white">
                      <Image
                        src="/images/founder-toolkit-3d.jpg"
                        alt="The Young Founder Show 3D Toolkit Briefcase & Blueprint"
                        width={640}
                        height={640}
                        className="w-full h-auto object-cover transform transition-transform duration-500 group-hover/img:scale-105"
                        priority
                      />
                      
                      {/* Floating verified badge */}
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-md flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                        <span className="text-[11px] font-black text-slate-900 uppercase tracking-wider">Official Kit V2</span>
                      </div>

                      {/* Floating page pill */}
                      <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/20 shadow-md text-white text-[11px] font-mono font-bold">
                        15 Comprehensive Pages
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Core Guarantees */}
            <div>
              <div className="text-center mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-teal-700">
                  Our 3 Promises To Every Guest
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Promise 1: Mission-Driven */}
                <div className="group rounded-3xl p-7 bg-white border border-slate-200 hover:border-teal-500/40 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-5 text-teal-600 shadow-sm">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                    Mission-Driven
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Built around one clear purpose: real, vulnerable lessons over manufactured, polished soundbites.
                  </p>
                </div>

                {/* Promise 2: No Script Needed */}
                <div className="group rounded-3xl p-7 bg-white border border-slate-200 hover:border-purple-500/40 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-5 text-purple-600 shadow-sm">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                    No Script Needed
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Zero rehearsed corporate answers. Just a relaxed, guided builder-to-builder conversation about your climb.
                  </p>
                </div>

                {/* Promise 3: Always 100% Free */}
                <div className="group rounded-3xl p-7 bg-white border border-slate-200 hover:border-amber-500/40 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-5 text-amber-600 shadow-sm">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    Always 100% Free
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    No cost, no hidden catch, no pay-to-play — ever. This is about elevating genuine builders, not selling slots.
                  </p>
                </div>
              </div>
            </div>

            {/* Why This Exists Comparison Box */}
            <div className="rounded-3xl p-6 sm:p-10 bg-white border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-1 block">Our Difference</span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Why This Podcast Exists</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* Typical Startup Content */}
                <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold tracking-wider uppercase text-rose-600 block mb-4 flex items-center gap-2">
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
                      <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-600">
                        <span className="w-2 h-2 rounded-full bg-slate-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* The Young Founder Show */}
                <div className="rounded-2xl p-6 bg-teal-50/60 border border-teal-200 shadow-sm relative overflow-hidden">
                  <span className="text-xs font-bold tracking-wider uppercase text-teal-800 block mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-600 animate-ping" />
                    The Young Founder Show
                  </span>
                  <ul className="space-y-3.5">
                    {[
                      "Documenting the real journey as it unfolds",
                      "Real technical mistakes, bugs, and lost users",
                      "Raw startup lessons you can test tomorrow",
                      "Building in public with full transparency",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-900 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
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
          <div className="space-y-10 animate-in fade-in duration-300 max-w-5xl mx-auto">
            
            {/* 4 Format Specs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-2xl p-5 border border-pink-200 bg-white text-center shadow-sm hover:border-pink-300 transition-all">
                <Video className="w-6 h-6 text-pink-600 mx-auto mb-2" />
                <span className="text-[11px] uppercase tracking-wider text-pink-700 font-bold block">Recording Format</span>
                <p className="text-sm sm:text-base font-black text-slate-900 mt-1">Video + Audio</p>
              </div>

              <div className="rounded-2xl p-5 border border-amber-200 bg-white text-center shadow-sm hover:border-amber-300 transition-all">
                <Clock className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <span className="text-[11px] uppercase tracking-wider text-amber-700 font-bold block">Episode Duration</span>
                <p className="text-sm sm:text-base font-black text-slate-900 mt-1">20–45 Minutes</p>
              </div>

              <div className="rounded-2xl p-5 border border-cyan-200 bg-white text-center shadow-sm hover:border-cyan-300 transition-all">
                <Radio className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                <span className="text-[11px] uppercase tracking-wider text-cyan-700 font-bold block">Conversation Style</span>
                <p className="text-sm sm:text-base font-black text-slate-900 mt-1">Casual &amp; Relaxed</p>
              </div>

              <div className="rounded-2xl p-5 border border-emerald-200 bg-white text-center shadow-sm hover:border-emerald-300 transition-all">
                <Share2 className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <span className="text-[11px] uppercase tracking-wider text-emerald-700 font-bold block">Distribution</span>
                <p className="text-sm sm:text-base font-black text-slate-900 mt-1">Spotify · YouTube</p>
              </div>
            </div>

            {/* Interactive Technical Checklist */}
            <div className="rounded-3xl p-6 sm:p-10 border border-slate-200 bg-white shadow-lg relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">Pre-Flight Technical Checklist</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Click items to check them off as you get ready for recording.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block">
                      {completedCount} of 4 Ready
                    </span>
                    <span className="text-[10px] text-slate-500">
                      {checklistPercent === 100 ? "Ready to roll!" : "Almost there"}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-teal-200 bg-teal-50 flex items-center justify-center font-mono font-bold text-teal-700 text-sm">
                    {checklistPercent}%
                  </div>
                </div>
              </div>

              {/* Live Animated Progress Bar */}
              <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden mb-6">
                <div
                  className="h-full bg-teal-600 transition-all duration-500 rounded-full"
                  style={{ width: `${checklistPercent}%` }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Item 1 */}
                <div
                  onClick={() => toggleChecklist("room")}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 select-none ${
                    checklist.room
                      ? "bg-teal-50/70 border-teal-200 text-slate-900 shadow-sm"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    checklist.room ? "bg-teal-600 text-white" : "border border-slate-300 bg-white"
                  }`}>
                    {checklist.room ? <Check className="w-4 h-4 stroke-[3]" /> : null}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Quiet Room</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Find a quiet indoor spot with closed doors and minimal background echoes.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div
                  onClick={() => toggleChecklist("earphones")}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 select-none ${
                    checklist.earphones
                      ? "bg-sky-50/70 border-sky-200 text-slate-900 shadow-sm"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    checklist.earphones ? "bg-sky-600 text-white" : "border border-slate-300 bg-white"
                  }`}>
                    {checklist.earphones ? <Check className="w-4 h-4 stroke-[3]" /> : null}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Earphones Recommended</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      AirPods or wired earphones prevent speaker feedback from leaking into your mic.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div
                  onClick={() => toggleChecklist("internet")}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 select-none ${
                    checklist.internet
                      ? "bg-purple-50/70 border-purple-200 text-slate-900 shadow-sm"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    checklist.internet ? "bg-purple-600 text-white" : "border border-slate-300 bg-white"
                  }`}>
                    {checklist.internet ? <Check className="w-4 h-4 stroke-[3]" /> : null}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Stable Internet Connection</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      A stable WiFi or hotspot connection ensures fluid video frame rates and zero dropouts.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div
                  onClick={() => toggleChecklist("camera")}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 select-none ${
                    checklist.camera
                      ? "bg-amber-50/70 border-amber-200 text-slate-900 shadow-sm"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    checklist.camera ? "bg-amber-600 text-white" : "border border-slate-300 bg-white"
                  }`}>
                    {checklist.camera ? <Check className="w-4 h-4 stroke-[3]" /> : null}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Camera Optional</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Video is great for social clips, but audio-only is totally welcomed if you prefer.
                    </p>
                  </div>
                </div>
              </div>

              {/* 100% Ready Celebration Alert */}
              {checklistPercent === 100 && (
                <div className="mt-6 p-4 rounded-2xl bg-teal-50 border border-teal-200 flex items-center gap-3 animate-in zoom-in-95 duration-200">
                  <Flame className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <p className="text-xs sm:text-sm font-bold text-teal-900">
                    You&apos;re 100% ready for the recording session! We look forward to documenting your story.
                  </p>
                </div>
              )}
            </div>

          </div>
        )}

        {/* Tab 3: Themes & Discussion Guide */}
        {activeTab === "topics" && (
          <div className="space-y-14 animate-in fade-in duration-300">
            
            {/* 8 Conversation Themes */}
            <div>
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-xs font-black uppercase tracking-widest text-teal-700">Conversation Themes</span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">What We Talk About</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2">
                  Every episode weaves through these core areas based on where your unique journey leads.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {conversationThemes.map((theme, idx) => {
                  const ThemeIcon = theme.icon;
                  return (
                    <div
                      key={idx}
                      className={`group rounded-2xl p-5 border ${theme.borderColor} bg-white flex flex-col justify-between transition-all duration-300 shadow-sm ${theme.glow}`}
                    >
                      <div>
                        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-3.5 ${theme.badgeColor}`}>
                          <ThemeIcon className="w-5 h-5" />
                        </div>
                        <h4 className="text-base font-black text-slate-900 mb-1.5">{theme.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{theme.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 8 Core Discussion Prompts */}
            <div className="rounded-3xl p-6 sm:p-10 border border-slate-200 bg-white shadow-sm">
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-xs font-black uppercase tracking-widest text-teal-700">Conversation Guide</span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">8 Discussion Prompts</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2">
                  A loose guide, not a rigid script. We follow the conversation wherever it naturally leads.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {discussionTopics.map((topic, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-500/40 transition-all flex items-start gap-4 group"
                  >
                    <span className="text-sm font-mono font-black bg-teal-50 border border-teal-200 text-teal-700 px-2.5 py-1 rounded-xl shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform">
                      {topic.num}
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">
                        {topic.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{topic.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Tab 4: 5-Step Guest Journey */}
        {activeTab === "journey" && (
          <div className="space-y-12 animate-in fade-in duration-300 max-w-5xl mx-auto">
            
            {/* Step Progression */}
            <div className="text-center max-w-xl mx-auto mb-4">
              <span className="text-xs font-black uppercase tracking-widest text-amber-700">Your Journey With Us</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">What To Expect Step-by-Step</h3>
            </div>

            <div className="space-y-4">
              {guestSteps.map((step, idx) => (
                <div
                  key={idx}
                  className={`group rounded-2xl p-6 border ${step.borderColor} bg-white flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 shadow-sm hover:shadow-md`}
                >
                  <div className="flex items-start gap-4">
                    <span className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center font-mono font-black text-sm text-teal-700 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="text-base sm:text-lg font-black text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">{step.desc}</p>
                    </div>
                  </div>
                  <div className="self-start md:self-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider ${step.bgColor} border ${step.borderColor} ${step.textColor}`}>
                      {step.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Beyond the Episode */}
            <div className="rounded-3xl p-6 sm:p-10 border border-slate-200 bg-white shadow-sm">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Beyond The Episode</span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">What You Become Part Of</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Being a guest is just the start of your journey in our founder ecosystem.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { title: "Weekly Lessons", desc: "Fresh takeaways from fellow student builders.", badge: "text-cyan-700 border-cyan-200 bg-cyan-50" },
                  { title: "Founder Insights", desc: "Real perspective from builders currently in the arena.", badge: "text-purple-700 border-purple-200 bg-purple-50" },
                  { title: "Peer Networking", desc: "Direct connections with student devs and co-founders.", badge: "text-emerald-700 border-emerald-200 bg-emerald-50" },
                  { title: "Encouragement Hub", desc: "A supportive founder space built on grit, not ego.", badge: "text-rose-700 border-rose-200 bg-rose-50" },
                  { title: "Future Collabs", desc: "First in line for co-features and guest invitations.", badge: "text-amber-700 border-amber-200 bg-amber-50" },
                  { title: "Early Access", desc: "First access to upcoming episode series and resources.", badge: "text-teal-700 border-teal-200 bg-teal-50" },
                ].map((perk, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:scale-[1.02] transition-transform">
                    <span className={`inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded border mb-2 ${perk.badge}`}>{perk.title}</span>
                    <p className="text-xs text-slate-600 leading-relaxed">{perk.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Tab 5: Guest FAQ & Apply */}
        {activeTab === "faq" && (
          <div className="space-y-12 animate-in fade-in duration-300 max-w-4xl mx-auto">
            
            {/* FAQ Accordion */}
            <div className="space-y-3.5">
              <div className="text-center mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-indigo-700">Good To Know</span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Frequently Asked Questions</h3>
              </div>

              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                      isOpen
                        ? "border-teal-300 bg-teal-50/40 shadow-sm"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-3">
                        <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${faq.accent}`}>
                          Q{idx + 1}
                        </span>
                        <span>{faq.q}</span>
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? "rotate-180 text-teal-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        <div className="pt-3 font-normal">
                          {faq.a}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Meet The Host Card */}
            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 flex flex-col sm:flex-row items-center gap-6 shadow-md relative overflow-hidden">
              <div className="w-24 h-24 rounded-full p-[2px] bg-teal-600 flex-shrink-0 shadow-sm">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-black text-2xl text-teal-700">
                  MD
                </div>
              </div>

              <div className="text-center sm:text-left">
                <span className="text-[11px] font-black uppercase tracking-wider text-teal-700">Meet The Host</span>
                <h4 className="text-xl font-black text-slate-900 mt-0.5">Maher Dhami</h4>
                <p className="text-xs text-teal-700 uppercase font-mono tracking-wider font-bold mb-2">
                  Founder · Builder · Developer
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  &ldquo;The Young Founder Show exists to give the builder&apos;s journey the attention it deserves — before the outcome is known. This isn&apos;t about any one person&apos;s story. It&apos;s about creating space for yours.&rdquo;
                </p>
              </div>
            </div>

          </div>
        )}

        {/* Universal Section Footer Callout */}
        <div className="mt-20 text-center">
          <div className="rounded-3xl p-8 sm:p-14 bg-white border border-slate-200/90 max-w-4xl mx-auto shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500" />
            
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
              Ready to Share Your Builder Journey?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-8 font-normal">
              Submit your project details via our official guest intake form. We review every submission and reach out directly to schedule an episode.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-4">
              <a
                href={SHOW_INFO.communityFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] cursor-pointer"
              >
                <Users className="w-4 h-4 text-teal-400" />
                <span>Apply as a Guest on the Show</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsPdfModalOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-sm bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 hover:border-slate-300 transition-all transform hover:scale-[1.02] cursor-pointer shadow-sm"
              >
                <Eye className="w-4 h-4 text-teal-600" />
                <span>Read Full 15-Page PDF</span>
              </button>

              <a
                href={PDF_URL}
                download={PDF_FILENAME}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-sm bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 transition-all cursor-pointer shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF (2.2 MB)</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-500 mt-4 font-mono">
              100% free participation · No script needed · Video or audio only
            </p>
          </div>
        </div>

      </div>

      {/* Fullscreen PDF Reader Modal */}
      {isPdfModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-5xl h-[92vh] flex flex-col shadow-2xl overflow-hidden relative">
            
            {/* Modal Top Bar */}
            <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-white">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">The Young Founder Show — Guest Experience Kit</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-teal-700 font-mono font-bold">15 Pages</span>
                    <span className="text-[10px] text-slate-500">• Official Welcome Package &amp; Handbook</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={PDF_URL}
                  download={PDF_FILENAME}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <a
                  href={PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in New Tab</span>
                </a>
                <button
                  onClick={() => setIsPdfModalOpen(false)}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                  aria-label="Close PDF Viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content: Embedded PDF iframe */}
            <div className="flex-1 w-full bg-slate-100 relative">
              <iframe
                src={`${PDF_URL}#toolbar=1&navpanes=0`}
                className="w-full h-full border-0"
                title="The Young Founder Show Guest Experience Kit PDF"
              />
            </div>

            {/* Mobile Footer helper */}
            <div className="sm:hidden px-4 py-2.5 border-t border-slate-200 bg-white flex items-center justify-between">
              <a
                href={PDF_URL}
                download={PDF_FILENAME}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF (2.2 MB)</span>
              </a>
              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-slate-600"
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
