"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Sparkles, Bell, ArrowRight, Users } from "lucide-react";
import confetti from "canvas-confetti";
import BrandLogo from "@/components/BrandLogo";
import { SHOW_INFO } from "@/data/podcastData";

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

    // Open community application form
    try {
      window.open(SHOW_INFO.communityFormUrl, "_blank", "noopener,noreferrer");
    } catch {
      // fallback
    }

    try {
      confetti({
        particleCount: 80,
        spread: 65,
        origin: { y: 0.6 },
        colors: ["#2BF4C3", "#1DD1B9", "#FFFFFF"],
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative text-slate-900">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 cursor-pointer transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center mx-auto mb-4 text-teal-700">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Welcome aboard, {name}!</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-5">
              We opened the community application form in a new tab. If it didn&apos;t open automatically, click the button below:
            </p>

            <a
              href={SHOW_INFO.communityFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mb-4"
            >
              <Users className="w-4 h-4 text-teal-400" />
              <span>Complete Application Form</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="text-xs text-slate-500 hover:text-teal-700 cursor-pointer transition-colors"
            >
              Back to Show
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <BrandLogo avatarSize="w-12 h-12" textSize="text-base sm:text-lg" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200 mb-3">
              <Bell className="w-3 h-3 text-teal-600" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700">
                Founder VIP List &amp; Community
              </span>
            </div>

            <h3 className="text-2xl font-black text-slate-900 mb-2">
              Never Miss an Episode or Lesson
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Subscribe to weekly retrospective briefings and apply to get access to our Founder Community.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-teal-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="founder@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-teal-500 focus:bg-white"
                />
              </div>

              {error && <p className="text-xs text-rose-500 font-medium">{error}</p>}

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Users className="w-4 h-4 text-teal-400" />
                <span>Apply to Join Community</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
