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
      bgGradient: "from-teal-50 to-emerald-100/60",
      borderAccent: "border-teal-200",
      strokeColor: "#0D9488",
      dotColor: "#0D9488",
      sparkline: "M0 18 Q 20 8, 40 14 T 80 4",
      tagColor: "bg-teal-50 text-teal-700 border-teal-200",
    },
    {
      icon: <Flame className="w-5 h-5 text-purple-600" />,
      title: "Unfiltered Reality",
      subtitle: "The climb before success",
      badge: "100% Raw",
      bgGradient: "from-purple-50 to-indigo-100/60",
      borderAccent: "border-purple-200",
      strokeColor: "#7C3AED",
      dotColor: "#7C3AED",
      sparkline: "M0 16 Q 20 18, 40 10 T 80 2",
      tagColor: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      icon: <Radio className="w-5 h-5 text-amber-600" />,
      title: "Weekly Drops",
      subtitle: "Spotify & YouTube",
      badge: "Weekly",
      bgGradient: "from-amber-50 to-orange-100/60",
      borderAccent: "border-amber-200",
      strokeColor: "#EA580C",
      dotColor: "#EA580C",
      sparkline: "M0 14 Q 20 6, 40 12 T 80 4",
      tagColor: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      icon: <Users className="w-5 h-5 text-sky-600" />,
      title: "The Movement",
      subtitle: "Building together",
      badge: "Community",
      bgGradient: "from-sky-50 to-blue-100/60",
      borderAccent: "border-sky-200",
      strokeColor: "#0284C7",
      dotColor: "#0284C7",
      sparkline: "M0 18 Q 20 12, 40 6 T 80 2",
      tagColor: "bg-sky-50 text-sky-700 border-sky-200",
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white border-2 border-slate-200/90 hover:border-teal-500/30 transition-all rounded-3xl p-6 sm:p-7 shadow-2xl shadow-slate-200/80 relative overflow-hidden">
        {/* Top vibrant multi-color rainbow border */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-purple-500 via-amber-500 to-sky-500" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between gap-3 group ${
                idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.bgGradient} border ${item.borderAccent} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-tight mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Mini Sparkline SVG Graphic with Vibrant Stroke */}
              <div className="hidden lg:block w-16 h-8 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 80 20" className="w-full h-full overflow-visible">
                  <path
                    d={item.sparkline}
                    fill="none"
                    stroke={item.strokeColor}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="80" cy="3" r="3.5" fill={item.dotColor} className="animate-pulse" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
