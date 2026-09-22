"use client";

import React from "react";
import { Code, Flame, Radio, Users } from "lucide-react";

export default function StatsSection() {
  const pillars = [
    {
      icon: <Code className="w-5 h-5 text-emerald-700" />,
      title: "Student Builders",
      subtitle: "Developers & founders",
      badge: "Builders",
      bgGradient: "from-slate-50/80 to-white",
      borderAccent: "border-slate-200",
      strokeColor: "#00C49F",
      dotColor: "#2BF4C3",
      sparkline: "M0 18 Q 20 8, 40 14 T 80 4",
      tagColor: "bg-slate-50 text-slate-800 border-slate-200",
    },
    {
      icon: <Flame className="w-5 h-5 text-emerald-700" />,
      title: "Unfiltered Reality",
      subtitle: "The climb before success",
      badge: "100% Raw",
      bgGradient: "from-slate-50/80 to-white",
      borderAccent: "border-slate-200",
      strokeColor: "#00C49F",
      dotColor: "#2BF4C3",
      sparkline: "M0 16 Q 20 18, 40 10 T 80 2",
      tagColor: "bg-slate-50 text-slate-800 border-slate-200",
    },
    {
      icon: <Radio className="w-5 h-5 text-emerald-700" />,
      title: "Weekly Drops",
      subtitle: "Spotify & YouTube",
      badge: "Weekly",
      bgGradient: "from-slate-50/80 to-white",
      borderAccent: "border-slate-200",
      strokeColor: "#00C49F",
      dotColor: "#2BF4C3",
      sparkline: "M0 14 Q 20 6, 40 12 T 80 4",
      tagColor: "bg-slate-50 text-slate-800 border-slate-200",
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-700" />,
      title: "The Movement",
      subtitle: "Building together",
      badge: "Community",
      bgGradient: "from-slate-50/80 to-white",
      borderAccent: "border-slate-200",
      strokeColor: "#00C49F",
      dotColor: "#2BF4C3",
      sparkline: "M0 18 Q 20 12, 40 6 T 80 2",
      tagColor: "bg-slate-50 text-slate-800 border-slate-200",
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white border border-slate-200 hover:border-[#2BF4C3]/40 transition-all rounded-3xl p-6 sm:p-7 shadow-xl shadow-slate-100 relative overflow-hidden">
        {/* Top clean logo mint green accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#2BF4C3]" />

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
