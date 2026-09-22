"use client";

import React from "react";
import { Code, Flame, Radio, Users } from "lucide-react";

export default function StatsSection() {
  const pillars = [
    {
      icon: <Code className="w-5 h-5 text-teal-600" />,
      title: "Student Builders",
      subtitle: "Developers, founders & creators",
    },
    {
      icon: <Flame className="w-5 h-5 text-teal-600" />,
      title: "Unfiltered Reality",
      subtitle: "The real climb before success",
    },
    {
      icon: <Radio className="w-5 h-5 text-teal-600" />,
      title: "Weekly Drops",
      subtitle: "Streaming on Spotify & YouTube",
    },
    {
      icon: <Users className="w-5 h-5 text-teal-600" />,
      title: "The Movement",
      subtitle: "Building the future together",
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xl shadow-slate-200/60">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-4 ${
                idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 font-medium leading-tight mt-1">
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
