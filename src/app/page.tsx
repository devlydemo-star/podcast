"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import WhyDifferent from "@/components/WhyDifferent";
import BuildersJourney from "@/components/BuildersJourney";
import WhatYouTakeAway from "@/components/WhatYouTakeAway";
import FounderWisdom from "@/components/FounderWisdom";
import LatestEpisodeSection from "@/components/LatestEpisodeSection";
import MovementPrinciples from "@/components/MovementPrinciples";
import FounderToolkit from "@/components/FounderToolkit";
import ManifestoSection from "@/components/ManifestoSection";
import Footer from "@/components/Footer";
import FloatingSpotify from "@/components/FloatingSpotify";
import NewsletterModal from "@/components/NewsletterModal";

export default function Home() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-[#2BF4C3]/30 selection:text-slate-900 font-sans antialiased">
      
      {/* Top Navigation Bar */}
      <Navbar onOpenNewsletterModal={() => setIsNewsletterOpen(true)} />

      {/* 1. Hero Section (Repositioned: Built for Student Founders) */}
      <Hero />

      {/* 2. Floating Movement Pillars Ribbon */}
      <StatsSection />

      {/* 3. Who This Is For (6 Archetype Cards) */}
      <WhoThisIsFor />

      {/* 4. Why This Show Is Different (Comparison vs Mainstream Content) */}
      <WhyDifferent />

      {/* 5. The Builder's Journey (Universal 5-Stage Framework) */}
      <BuildersJourney />

      {/* 6. What You'll Take Away (8 Visual Skill Cards) */}
      <WhatYouTakeAway />

      {/* 7. Unfiltered Founder Wisdom & Heuristics */}
      <FounderWisdom />

      {/* 8. Sample Episode Spotlight */}
      <LatestEpisodeSection />

      {/* 8. The Young Founder Principles (Movement Manifesto) */}
      <MovementPrinciples />

      {/* 9. Guest Experience Kit & Founder Toolkit */}
      <FounderToolkit />

      {/* 10. A Better Tomorrow Starts With Building Today (Emotional Pre-Footer) */}
      <ManifestoSection />

      {/* 11. Footer */}
      <Footer />

      {/* Floating Spotify Quick-Launch CTA Pill */}
      <FloatingSpotify />

      {/* Newsletter VIP Modal Popup */}
      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />

    </div>
  );
}
