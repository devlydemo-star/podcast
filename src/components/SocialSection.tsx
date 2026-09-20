"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SpotifyIcon, YoutubeIcon, LinkedinIcon, TwitterIcon, InstagramIcon, GithubIcon } from "@/components/BrandIcons";
import { SHOW_INFO } from "@/data/podcastData";

export default function SocialSection() {
  const socialChannels = [
    {
      name: "Spotify",
      handle: "The Young Founder Show",
      desc: "Stream episodes, rate & follow",
      url: SHOW_INFO.spotifyShowUrl,
      icon: <SpotifyIcon className="w-6 h-6 text-[#1DD1B9]" />,
      color: "hover:border-[#1DD1B9]",
      badge: "45k+ Downloads",
    },
    {
      name: "YouTube",
      handle: "@maherdhami",
      desc: "Full video episodes & shorts",
      url: SHOW_INFO.youtubeChannelUrl,
      icon: <YoutubeIcon className="w-6 h-6 text-[#FF0000]" />,
      color: "hover:border-[#FF0000]/60",
      badge: "Watch in 4K",
    },
    {
      name: "LinkedIn",
      handle: "Maher Dhami",
      desc: "Startup essays & milestones",
      url: SHOW_INFO.socialLinks.linkedin,
      icon: <LinkedinIcon className="w-6 h-6 text-[#0A66C2]" />,
      color: "hover:border-[#0A66C2]/60",
      badge: "Connect",
    },
    {
      name: "X (Twitter)",
      handle: "@maherdhami",
      desc: "Daily build logs & MRR stats",
      url: SHOW_INFO.socialLinks.twitter,
      icon: <TwitterIcon className="w-6 h-6 text-white" />,
      color: "hover:border-white/60",
      badge: "Daily Updates",
    },
    {
      name: "Instagram",
      handle: "@maherdhami",
      desc: "Behind-the-scenes & clips",
      url: SHOW_INFO.socialLinks.instagram,
      icon: <InstagramIcon className="w-6 h-6 text-[#E4405F]" />,
      color: "hover:border-[#E4405F]/60",
      badge: "Visual Clips",
    },
    {
      name: "GitHub",
      handle: "maherdhami",
      desc: "Open source code & repositories",
      url: SHOW_INFO.socialLinks.github,
      icon: <GithubIcon className="w-6 h-6 text-[#3EF7D8]" />,
      color: "hover:border-[#3EF7D8]/60",
      badge: "Source Code",
    },
  ];

  return (
    <section className="py-20 relative bg-[#070D1C]/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-widest text-[#3EF7D8] font-bold mb-2">
            Multi-Platform Distribution
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Connect Across <span className="text-gradient-teal">Socials</span>
          </h2>
          <p className="text-sm text-[#B0B7C3] mt-2">
            Join the conversation, ask questions for upcoming Q&As, and follow the build-in-public journey.
          </p>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {socialChannels.map((channel) => (
            <a
              key={channel.name}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-panel-hover rounded-2xl p-5 sm:p-6 flex items-start justify-between group transition-all duration-300 border border-white/10 ${channel.color}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#050816] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {channel.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-bold text-white group-hover:text-[#3EF7D8] transition-colors">
                      {channel.name}
                    </h3>
                    <span className="text-[10px] font-semibold text-[#3EF7D8] bg-[#3EF7D8]/10 px-2 py-0.5 rounded-full border border-[#3EF7D8]/20">
                      {channel.badge}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-white/80">{channel.handle}</p>
                  <p className="text-[11px] text-[#B0B7C3] mt-0.5">{channel.desc}</p>
                </div>
              </div>

              <ArrowUpRight className="w-5 h-5 text-[#B0B7C3] group-hover:text-[#3EF7D8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
