"use client";

import React from "react";
import { Code, Flame, Radio, Users } from "lucide-react";

export default function StatsSection() {
  const pillars = [
    {
      icon: <Code className="w-5 h-5 text-teal-600" />,
      title: "Student Builders",
      subtitle: "Developers & founders",
      badge: "Builders",
      sparkline: "M0 18 Q 20 8, 40 14 T 80 4",
    },
    {
      icon: <Flame className="w-5 h-5 text-teal-600" />,
      title: "Unfiltered Reality",
      subtitle: "The climb before success",
      badge: "100% Raw",
      sparkline: "M0 16 Q 20 18, 40 10 T 80 2",
    },
    {
      icon: <Radio className="w-5 h-5 text-teal-600" />,
      title: "Weekly Drops",
      subtitle: "Spotify & YouTube",
      badge: "Weekly",
      sparkline: "M0 14 Q 20 6, 40 12 T 80 4",
    },
    {
      icon: <Users className="w-5 h-5 text-teal-600" />,
      title: "The Movement",
      subtitle: "Building together",
      badge: "Community",
      sparkline: "M0 18 Q 20 12, 40 6 T 80 2",
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xl shadow-slate-200/60">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between gap-3 ${
                idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-tight mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Mini Sparkline SVG Graphic */}
              <div className="hidden lg:block w-16 h-8 flex-shrink-0 opacity-70">
                <svg viewBox="0 0 80 20" className="w-full h-full overflow-visible">
                  <path
                    d={item.sparkline}
                    fill="none"
                    stroke="#0D9488"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="80" cy="3" r="3" fill="#0D9488" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
