"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Sparkles, Bell, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import BrandLogo from "@/components/BrandLogo";
import { SHOW_INFO } from "@/data/podcastData";
import { WhatsappIcon } from "@/components/BrandIcons";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

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
        particleCount: 80,
        spread: 65,
        origin: { y: 0.6 },
        colors: ["#2BF4C3", "#25D366", "#FFFFFF"],
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#03100D] border border-[#2BF4C3]/30 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-[#25D366]/20 border border-[#25D366] flex items-center justify-center mx-auto mb-4 text-[#25D366]">
              <WhatsappIcon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Welcome aboard, {name}!</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed mb-5">
              We opened the official WhatsApp Community in a new tab. If it didn&apos;t open automatically, click the button below:
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
              onClick={onClose}
              className="text-xs text-[#94A3B8] hover:text-[#2BF4C3] cursor-pointer transition-colors"
            >
              Back to Show
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <BrandLogo avatarSize="w-12 h-12" textSize="text-base sm:text-lg" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#081717] border border-[#2BF4C3]/30 mb-3">
              <Bell className="w-3 h-3 text-[#2BF4C3]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#2BF4C3]">
                Founder VIP List & WhatsApp
              </span>
            </div>

            <h3 className="text-2xl font-black text-white mb-2">
              Never Miss an Episode or Lesson
            </h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
              Subscribe to weekly retrospective briefings and get direct access to our WhatsApp Founder Community.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-[#081717] border border-white/10 text-white text-sm focus:outline-none focus:border-[#2BF4C3]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="founder@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#081717] border border-white/10 text-white text-sm focus:outline-none focus:border-[#2BF4C3]"
                />
              </div>

              {error && <p className="text-xs text-rose-400 font-medium">{error}</p>}

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-sm bg-[#2BF4C3] hover:bg-[#22d3a9] text-[#03100D] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#2BF4C3]/20"
              >
                <WhatsappIcon className="w-4 h-4 text-[#03100D]" />
                <span>Join WhatsApp Community</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
