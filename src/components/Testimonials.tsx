"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/data/podcastData";
import { Star, MessageSquare, ChevronLeft, ChevronRight, Radio } from "lucide-react";

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextTestimonial = () => {
    setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="community" className="py-24 relative bg-[#070D1C]/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1220] border border-[#3EF7D8]/30 mb-3">
              <MessageSquare className="w-3.5 h-3.5 text-[#3EF7D8]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#3EF7D8]">
                Community Voices
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              What Builders <span className="text-gradient-teal">Are Saying</span>
            </h2>
            <p className="text-sm sm:text-base text-[#B0B7C3] mt-2">
              Reviews from students, indie hackers, and founders who tune in each week.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-xl bg-[#0B1220] border border-white/10 hover:border-[#3EF7D8] text-white transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-xl bg-[#0B1220] border border-white/10 hover:border-[#3EF7D8] text-white transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid / Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => {
            const isFeatured = idx === currentIdx;
            return (
              <div
                key={t.id}
                className={`glass-panel-hover rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured ? "border-[#3EF7D8]/60 shadow-xl shadow-[#3EF7D8]/10" : "border-white/10"
                }`}
              >
                <div>
                  {/* Rating Stars & Platform */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#3EF7D8]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold text-[#B0B7C3] bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      {t.platform}
                    </span>
                  </div>

                  {/* Review Content */}
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed italic mb-6">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#3EF7D8]/30">
                    <Image
                      src={t.avatar}
                      alt={t.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{t.author}</h4>
                    <p className="text-[11px] text-[#B0B7C3]">{t.role}</p>
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
