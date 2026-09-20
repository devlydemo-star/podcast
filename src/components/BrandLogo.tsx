"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SHOW_INFO } from "@/data/podcastData";

export function SoundWaveBars({ className = "h-5" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <span className="w-1 h-3.5 bg-[#2BF4C3] rounded-full" />
      <span className="w-1 h-6 bg-[#2BF4C3] rounded-full" />
      <span className="w-1 h-4 bg-[#2BF4C3] rounded-full" />
      <span className="w-1 h-5.5 bg-[#2BF4C3] rounded-full" />
      <span className="w-1 h-2.5 bg-[#2BF4C3] rounded-full" />
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
          className={`relative ${avatarSize} rounded-full overflow-hidden border-2 border-[#2BF4C3] shadow-md shadow-[#2BF4C3]/30 flex-shrink-0 bg-[#020B09] group-hover:scale-105 transition-transform duration-300`}
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
          <span className="text-[10px] font-semibold text-white/90 uppercase tracking-widest block -mb-0.5">
            The
          </span>
          <span className={`font-black tracking-tight text-white ${textSize}`}>
            YOUNG{" "}
          </span>
          <span className={`font-black tracking-tight text-[#2BF4C3] ${textSize}`}>
            FOUNDER{" "}
          </span>
          <span className="font-script text-xl sm:text-2xl text-white font-bold ml-0.5">
            Show
          </span>
        </div>
      </div>
    </Link>
  );
}
