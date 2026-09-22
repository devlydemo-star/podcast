"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SHOW_INFO } from "@/data/podcastData";

export function SoundWaveBars({ className = "h-5" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <span className="w-1 h-3.5 bg-[#2BF4C3] rounded-full shadow-[0_0_6px_rgba(43,244,195,0.7)]" />
      <span className="w-1 h-6 bg-[#2BF4C3] rounded-full shadow-[0_0_8px_rgba(43,244,195,0.7)]" />
      <span className="w-1 h-4 bg-[#2BF4C3] rounded-full shadow-[0_0_6px_rgba(43,244,195,0.7)]" />
      <span className="w-1 h-5.5 bg-[#2BF4C3] rounded-full shadow-[0_0_8px_rgba(43,244,195,0.7)]" />
      <span className="w-1 h-2.5 bg-[#2BF4C3] rounded-full shadow-[0_0_6px_rgba(43,244,195,0.7)]" />
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
          className={`relative ${avatarSize} rounded-full overflow-hidden border-2 border-[#2BF4C3] shadow-[0_0_12px_rgba(43,244,195,0.4)] flex-shrink-0 bg-slate-900 group-hover:scale-105 transition-transform duration-300`}
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
          <span className={`font-black tracking-tight bg-gradient-to-r from-[#00C49F] to-[#2BF4C3] bg-clip-text text-transparent group-hover:from-[#2BF4C3] group-hover:to-[#00C49F] transition-all ${textSize}`}>
            FOUNDER{" "}
          </span>
          <span className="font-script text-xl sm:text-2xl text-slate-900 font-bold ml-0.5 relative inline-block">
            Show
            <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#2BF4C3] rounded-full shadow-[0_0_6px_rgba(43,244,195,0.8)]" />
          </span>
        </div>
      </div>
    </Link>
  );
}
