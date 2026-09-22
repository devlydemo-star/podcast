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
    <footer className="border-t border-slate-200 bg-white pt-16 pb-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5">
            <div className="mb-4">
              <BrandLogo withAvatar={false} textSize="text-lg" />
            </div>

            <p className="text-sm font-semibold text-[#00C49F] mb-3">
              {SHOW_INFO.tagline}
            </p>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm mb-6">
              A movement documenting the real climb of building software, learning from mistakes, and sharing startup lessons before success arrives. Built for student founders, developers, and creators.
            </p>

            {/* Social Links Row */}
            <div className="flex items-center gap-3">
              <a
                href={SHOW_INFO.spotifyShowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#1DB954] hover:border-slate-300 transition-colors shadow-sm"
                title="Spotify"
              >
                <SpotifyIcon className="w-4 h-4" />
              </a>
              <a
                href={SHOW_INFO.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#FF0000] hover:border-slate-300 transition-colors shadow-sm"
                title="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={SHOW_INFO.communityFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#00C49F] hover:border-slate-300 transition-colors shadow-sm"
                title="Join Community Form"
              >
                <Users className="w-4 h-4" />
              </a>
              <a
                href={SHOW_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#0A66C2] hover:border-slate-300 transition-colors shadow-sm"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={SHOW_INFO.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-950 hover:border-slate-300 transition-colors shadow-sm"
                title="Twitter / X"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={SHOW_INFO.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-950 hover:border-slate-300 transition-colors shadow-sm"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-900 mb-4">
              Explore The Movement
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <a href="#who-its-for" className="hover:text-[#00C49F] transition-colors">
                  Who This Is For
                </a>
              </li>
              <li>
                <a href="#why-different" className="hover:text-[#00C49F] transition-colors">
                  Why This Show Is Different
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-[#00C49F] transition-colors">
                  The Builder&apos;s Journey
                </a>
              </li>
              <li>
                <a href="#takeaways" className="hover:text-[#00C49F] transition-colors">
                  What You&apos;ll Take Away
                </a>
              </li>
              <li>
                <a href="#principles" className="hover:text-[#00C49F] transition-colors">
                  The Movement Principles
                </a>
              </li>
              <li>
                <a href="#toolkit" className="hover:text-[#00C49F] text-slate-900 font-semibold transition-colors">
                  Founder &amp; Guest Toolkit
                </a>
              </li>
              <li>
                <a
                  href="/The-Young-Founder-Show-Guest-Experience-Kit.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00C49F] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Guest Kit PDF Guide</span>
                  <span className="text-[10px] text-slate-900 font-mono font-bold bg-[#2BF4C3]/15 px-1.5 py-0.5 rounded border border-[#2BF4C3]/40">2.2MB</span>
                </a>
              </li>
              <li>
                <a href="#latest-episode" className="hover:text-[#00C49F] transition-colors">
                  Sample Episode (EP. 01)
                </a>
              </li>
              <li>
                <a href="#manifesto" className="hover:text-[#00C49F] transition-colors">
                  The Manifesto
                </a>
              </li>
            </ul>
          </div>

          {/* Platforms & Projects (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-900 mb-4">
              Listen &amp; Connect
            </h4>
            <div className="space-y-3">
              <a
                href={SHOW_INFO.communityFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#2BF4C3] hover:bg-white flex items-center justify-between transition-colors group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#2BF4C3]/10 border border-[#2BF4C3]/30 flex items-center justify-center text-[#00C49F] group-hover:scale-105 transition-transform">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 group-hover:text-[#00C49F] transition-colors">
                      Join Community Form
                    </p>
                    <p className="text-[10px] text-slate-500">Apply to join student builders</p>
                  </div>
                </div>
                <span className="text-xs text-[#00C49F] group-hover:translate-x-0.5 transition-transform">&rarr;</span>
              </a>

              <a
                href={SHOW_INFO.spotifyShowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#2BF4C3] hover:bg-white flex items-center justify-between transition-colors group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#1DB954]/10 flex items-center justify-center text-[#1DB954] group-hover:scale-105 transition-transform">
                    <SpotifyIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 group-hover:text-[#00C49F] transition-colors">
                      Listen on Spotify
                    </p>
                    <p className="text-[10px] text-slate-500">Follow for weekly drops</p>
                  </div>
                </div>
                <span className="text-xs text-[#00C49F] group-hover:translate-x-0.5 transition-transform">&rarr;</span>
              </a>

              <a
                href={SHOW_INFO.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white flex items-center justify-between transition-colors group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-rose-50 flex items-center justify-center text-[#FF0000] group-hover:scale-105 transition-transform">
                    <YoutubeIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                      Subscribe on YouTube
                    </p>
                    <p className="text-[10px] text-slate-500">Video podcast &amp; visual breakdowns</p>
                  </div>
                </div>
                <span className="text-xs text-slate-400 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} The Young Founder Show. All rights reserved.</p>
          
          <div className="flex items-center gap-1.5 font-medium text-slate-700">
            <span>Built for</span>
            <span className="text-[#00C49F] font-bold">Student Founders &amp; Builders</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#00C49F] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
