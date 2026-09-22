"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SHOW_INFO } from "@/data/podcastData";
import { Heart, ArrowUp, Users } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { SpotifyIcon, YoutubeIcon, LinkedinIcon, TwitterIcon, GithubIcon, WhatsappIcon } from "@/components/BrandIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#2BF4C3]/15 bg-[#020B09] pt-16 pb-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5">
            <div className="mb-4">
              <BrandLogo avatarSize="w-12 h-12" textSize="text-lg" />
            </div>

            <p className="text-sm font-semibold text-[#2BF4C3] mb-3">
              {SHOW_INFO.tagline}
            </p>

            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm mb-6">
              A movement documenting the real climb of building software, learning from mistakes, and sharing startup lessons before success arrives. Built for student founders, developers, and creators.
            </p>

            {/* Social Links Row */}
            <div className="flex items-center gap-3">
              <a
                href={SHOW_INFO.spotifyShowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#081717] border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#2BF4C3] hover:border-[#2BF4C3] transition-colors"
                title="Spotify"
              >
                <SpotifyIcon className="w-4 h-4" />
              </a>
              <a
                href={SHOW_INFO.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#081717] border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#FF0000] hover:border-[#FF0000] transition-colors"
                title="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={SHOW_INFO.communityFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#081717] border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#2BF4C3] hover:border-[#2BF4C3] transition-colors"
                title="Join Community Form"
              >
                <Users className="w-4 h-4" />
              </a>
              <a
                href={SHOW_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#081717] border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={SHOW_INFO.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#081717] border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-white transition-colors"
                title="Twitter / X"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={SHOW_INFO.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#081717] border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#2BF4C3] hover:border-[#2BF4C3] transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-4">
              Explore The Movement
            </h4>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              <li>
                <a href="#who-its-for" className="hover:text-[#2BF4C3] transition-colors">
                  Who This Is For
                </a>
              </li>
              <li>
                <a href="#why-different" className="hover:text-[#2BF4C3] transition-colors">
                  Why This Show Is Different
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-[#2BF4C3] transition-colors">
                  The Builder&apos;s Journey
                </a>
              </li>
              <li>
                <a href="#takeaways" className="hover:text-[#2BF4C3] transition-colors">
                  What You&apos;ll Take Away
                </a>
              </li>
              <li>
                <a href="#principles" className="hover:text-[#2BF4C3] transition-colors">
                  The Movement Principles
                </a>
              </li>
              <li>
                <a href="#latest-episode" className="hover:text-[#2BF4C3] transition-colors">
                  Sample Episode (EP. 01)
                </a>
              </li>
              <li>
                <a href="#manifesto" className="hover:text-[#2BF4C3] transition-colors">
                  The Manifesto
                </a>
              </li>
            </ul>
          </div>

          {/* Platforms & Projects (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-4">
              Listen &amp; Connect
            </h4>
            <div className="space-y-3">
              <a
                href={SHOW_INFO.communityFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#081717] border border-white/5 hover:border-[#2BF4C3]/40 flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#2BF4C3]/10 flex items-center justify-center text-[#2BF4C3] group-hover:scale-105 transition-transform">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white group-hover:text-[#2BF4C3] transition-colors">
                      Join Community Form
                    </p>
                    <p className="text-[10px] text-[#94A3B8]">Apply to join student builders</p>
                  </div>
                </div>
                <span className="text-xs text-[#2BF4C3] group-hover:translate-x-0.5 transition-transform">&rarr;</span>
              </a>

              <a
                href={SHOW_INFO.spotifyShowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#081717] border border-white/5 hover:border-[#2BF4C3]/30 flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <SpotifyIcon className="w-4 h-4 text-[#2BF4C3]" />
                  <div>
                    <p className="text-xs font-bold text-white group-hover:text-[#2BF4C3] transition-colors">
                      Listen on Spotify
                    </p>
                    <p className="text-[10px] text-[#94A3B8]">Follow for weekly drops</p>
                  </div>
                </div>
                <span className="text-xs text-[#2BF4C3]">&rarr;</span>
              </a>

              <a
                href={SHOW_INFO.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#081717] border border-white/5 hover:border-[#FF0000]/30 flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <YoutubeIcon className="w-4 h-4 text-[#FF0000]" />
                  <div>
                    <p className="text-xs font-bold text-white group-hover:text-[#FF0000] transition-colors">
                      Subscribe on YouTube
                    </p>
                    <p className="text-[10px] text-[#94A3B8]">Video podcast &amp; visual breakdowns</p>
                  </div>
                </div>
                <span className="text-xs text-[#FF0000]">&rarr;</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>© {new Date().getFullYear()} The Young Founder Show. All rights reserved.</p>
          
          <div className="flex items-center gap-1.5 font-medium text-white">
            <span>Built for</span>
            <span className="text-[#2BF4C3] font-bold">Student Founders &amp; Builders</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#94A3B8] hover:text-[#2BF4C3] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
