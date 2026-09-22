"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { SHOW_INFO } from "@/data/podcastData";

interface NavbarProps {
  onOpenNewsletterModal?: () => void;
}

interface NavItem {
  name: string;
  href: string;
  active?: boolean;
  action?: () => void;
}

export default function Navbar({ onOpenNewsletterModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavItem[] = [
    { name: "Home", href: "#home", active: true },
    { name: "Who It's For", href: "#who-its-for" },
    { name: "Why Different", href: "#why-different" },
    { name: "The Journey", href: "#journey" },
    { name: "Takeaways", href: "#takeaways" },
    { name: "Principles", href: "#principles" },
    { name: "Founder Toolkit", href: "#toolkit" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <BrandLogo avatarSize="w-10 h-10" textSize="text-base sm:text-lg" />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.action) {
                    e.preventDefault();
                    link.action();
                  }
                }}
                className={`text-sm font-semibold transition-all relative py-1 ${
                  link.active
                    ? "text-slate-900 font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>{link.name}</span>
                {link.active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Actions: Listen on Spotify CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={SHOW_INFO.spotifyShowUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow-md transition-all transform hover:scale-[1.02] cursor-pointer"
            >
              <span>Listen on Spotify</span>
              <ArrowRight className="w-4 h-4 text-teal-400" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={SHOW_INFO.spotifyShowUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full text-xs font-bold bg-slate-900 text-white"
            >
              Spotify
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-6 py-5 shadow-xl animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-3.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.action) {
                    e.preventDefault();
                    link.action();
                  }
                }}
                className={`text-base font-semibold py-1 transition-colors ${
                  link.active ? "text-teal-600 font-bold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-200">
              <a
                href={SHOW_INFO.spotifyShowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm bg-slate-900 text-white shadow-sm"
              >
                <span>Listen on Spotify</span>
                <ArrowRight className="w-4 h-4 text-teal-400" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
