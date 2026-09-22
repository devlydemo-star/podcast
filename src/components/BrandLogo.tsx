"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SHOW_INFO } from "@/data/podcastData";

export function SoundWaveBars({ className = "h-5" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <span className="w-1 h-3.5 bg-teal-600 rounded-full" />
      <span className="w-1 h-6 bg-teal-600 rounded-full" />
      <span className="w-1 h-4 bg-teal-600 rounded-full" />
      <span className="w-1 h-5.5 bg-teal-600 rounded-full" />
      <span className="w-1 h-2.5 bg-teal-600 rounded-full" />
    </div>
  );
}

export default function BrandLogo({
  withAvatar = true,
  avatarSize = "w-10 h-10",
  textSize = "text-base",
}: {
  withAvatar?: boolean;
  avatarSize?: string;
  textSize?: string;
}) {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      {withAvatar && (
        <div
          className={`relative ${avatarSize} rounded-full overflow-hidden border-2 border-teal-600 shadow-sm shadow-teal-600/20 flex-shrink-0 bg-slate-100 group-hover:scale-105 transition-transform duration-300`}
        >
          <Image
            src={SHOW_INFO.coverImage}
            alt="The Young Founder Show"
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="flex items-center gap-2">
        <div className="leading-tight">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block -mb-0.5">
            The
          </span>
          <span className={`font-black tracking-tight text-slate-900 ${textSize}`}>
            YOUNG{" "}
          </span>
          <span className={`font-black tracking-tight text-teal-600 ${textSize}`}>
            FOUNDER{" "}
          </span>
          <span className="font-script text-xl sm:text-2xl text-slate-900 font-bold ml-0.5">
            Show
          </span>
        </div>
      </div>
    </Link>
  );
}
