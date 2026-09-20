"use client";

import React from "react";
import { Code, Flame, Radio, Users } from "lucide-react";

export default function StatsSection() {
  const pillars = [
    {
      icon: <Code className="w-5 h-5 text-[#2BF4C3]" />,
      title: "Student Builders",
      subtitle: "Developers, founders & creators",
    },
    {
      icon: <Flame className="w-5 h-5 text-[#2BF4C3]" />,
      title: "Unfiltered Reality",
      subtitle: "The real climb before success",
    },
    {
      icon: <Radio className="w-5 h-5 text-[#2BF4C3]" />,
      title: "Weekly Drops",
      subtitle: "Streaming on Spotify & YouTube",
    },
    {
      icon: <Users className="w-5 h-5 text-[#2BF4C3]" />,
      title: "The Movement",
      subtitle: "Building the future together",
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#081717] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-2xl shadow-black/80 backdrop-blur-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-4 ${
                idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-[#03100D] border border-white/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-extrabold text-white leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-[#94A3B8] font-medium leading-tight mt-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
