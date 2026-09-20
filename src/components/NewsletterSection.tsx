"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Sparkles, Send, Bell, ArrowRight, Users2 } from "lucide-react";
import confetti from "canvas-confetti";
import { SHOW_INFO } from "@/data/podcastData";
import { WhatsappIcon } from "@/components/BrandIcons";

export default function NewsletterSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !email.includes("@")) {
      setError("Please enter a valid name and email address.");
      return;
    }

    setError("");
    setSubmitted(true);

    // Open WhatsApp community group invite
    try {
      window.open(SHOW_INFO.whatsappCommunityUrl, "_blank", "noopener,noreferrer");
    } catch {
      // fallback
    }

    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.7 },
        colors: ["#2BF4C3", "#25D366", "#FFFFFF"],
      });
    } catch {
      // ignore
    }
  };

  const benefits = [
    "Weekly actionable lessons",
    "New episode alerts & show takeaways",
    "Community discussions & peer feedback",
    "Builder mindset & mental models",
    "Real startup insights & post-mortems",
  ];

  return (
    <section id="community" className="py-24 relative bg-[#03100D] border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[#2BF4C3]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="glass-panel rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#2BF4C3]/30 shadow-2xl relative overflow-hidden">
          
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2BF4C3] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading, Manifesto & Benefits (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#081717] border border-[#2BF4C3]/30 mb-4 shadow-sm">
                <Users2 className="w-3.5 h-3.5 text-[#2BF4C3]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#2BF4C3]">
                  Join The Movement
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                Join The <span className="text-gradient-teal">Young Founder Community</span>
              </h2>

              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed mb-6">
                Connect with ambitious students, builders, creators, and founders who are building their future one step at a time.
              </p>

              {/* 5 Benefits List */}
              <div className="space-y-3 mb-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#2BF4C3] flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Form Box (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-[#081717] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl">
                
                {submitted ? (
                  <div className="text-center py-6 animate-in zoom-in-95 duration-300">
                    <div className="w-14 h-14 rounded-full bg-[#25D366]/20 border border-[#25D366] flex items-center justify-center mx-auto mb-4 text-[#25D366]">
                      <WhatsappIcon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Welcome to the Movement!</h3>
                    <p className="text-xs text-[#94A3B8] leading-relaxed mb-5">
                      Thank you for joining, <span className="text-[#2BF4C3] font-semibold">{name}</span>! We opened the official WhatsApp Community in a new tab. If it didn&apos;t open automatically, click below to join:
                    </p>

                    <a
                      href={SHOW_INFO.whatsappCommunityUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-5 rounded-xl font-bold text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/30 transition-all flex items-center justify-center gap-2 cursor-pointer mb-4"
                    >
                      <WhatsappIcon className="w-5 h-5 text-white" />
                      <span>Join WhatsApp Community</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setName("");
                        setEmail("");
                      }}
                      className="text-xs text-[#94A3B8] hover:text-[#2BF4C3] transition-colors cursor-pointer"
                    >
                      Subscribe another email
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex"
                        className="w-full px-4 py-3 rounded-xl bg-[#03100D] border border-white/10 text-white placeholder-[#94A3B8]/50 text-sm focus:outline-none focus:border-[#2BF4C3] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="founder@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#03100D] border border-white/10 text-white placeholder-[#94A3B8]/50 text-sm focus:outline-none focus:border-[#2BF4C3] transition-colors"
                      />
                    </div>

                    {error && (
                      <p className="text-xs text-rose-400 font-medium">{error}</p>
                    )}

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-bold text-sm bg-[#2BF4C3] hover:bg-[#22d3a9] text-[#03100D] shadow-lg shadow-[#2BF4C3]/25 hover:shadow-[#2BF4C3]/40 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <WhatsappIcon className="w-4 h-4 text-[#03100D]" />
                      <span>Join WhatsApp Community</span>
                    </button>

                    <p className="text-[11px] text-[#94A3B8]/70 text-center">
                      Instant WhatsApp invite upon submission. No spam ever.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
