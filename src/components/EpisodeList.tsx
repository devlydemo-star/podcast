"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Search, Clock, Calendar, Filter, ChevronRight, X, Sparkles, CheckCircle2, ExternalLink } from "lucide-react";
import { SpotifyIcon, YoutubeIcon } from "@/components/BrandIcons";
import { EPISODES, Episode } from "@/data/podcastData";

interface EpisodeListProps {
  activeFilter?: string;
  setActiveFilter?: (filter: string) => void;
}

export default function EpisodeList({
  activeFilter: externalFilter,
  setActiveFilter: setExternalFilter,
}: EpisodeListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [internalCategory, setInternalCategory] = useState("All");
  const [selectedEpisodeModal, setSelectedEpisodeModal] = useState<Episode | null>(null);

  const activeCategory = externalFilter !== undefined ? externalFilter : internalCategory;
  const setCategory = (cat: string) => {
    if (setExternalFilter) setExternalFilter(cat);
    setInternalCategory(cat);
  };

  const categories = [
    "All",
    "Startups",
    "AI & Tech",
    "Technology",
    "Building in Public",
    "Founder Stories",
    "Productivity",
    "Personal Growth",
    "Learning",
  ];

  const filteredEpisodes = useMemo(() => {
    return EPISODES.filter((ep) => {
      const matchesCategory =
        activeCategory === "All" ||
        ep.category.toLowerCase() === activeCategory.toLowerCase() ||
        ep.tags.some((t) => t.toLowerCase().includes(activeCategory.toLowerCase()));

      const matchesSearch =
        searchQuery.trim() === "" ||
        ep.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ep.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ep.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        ep.number.toString().includes(searchQuery);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="all-episodes" className="py-24 relative bg-[#03100D]/95 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081717] border border-[#2BF4C3]/30 mb-3">
              <SpotifyIcon className="w-3.5 h-3.5 text-[#2BF4C3]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#2BF4C3]">
                Full Episode Catalog
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              All <span className="text-gradient-teal">Episodes</span>
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-2">
              Browse detailed show notes, takeaways, and lessons from building DevLy, CODIEPAG, and modern tech products.
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, keyword, or #..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#081717] border border-white/10 text-white placeholder-[#94A3B8]/60 text-sm focus:outline-none focus:border-[#2BF4C3] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none no-scrollbar">
          <Filter className="w-4 h-4 text-[#2BF4C3] flex-shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#2BF4C3] text-[#03100D] shadow-md shadow-[#2BF4C3]/20 font-bold"
                  : "bg-[#081717] text-[#94A3B8] hover:text-white border border-white/5 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Episodes Grid */}
        {filteredEpisodes.length === 0 ? (
          <div className="text-center py-16 glass-panel rounded-2xl border border-white/10">
            <p className="text-lg font-bold text-white mb-2">No episodes found matching your search</p>
            <p className="text-xs text-[#94A3B8] mb-4">Try searching for &quot;DevLy&quot;, &quot;SaaS&quot;, &quot;AI&quot;, or click &quot;All&quot;.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setCategory("All");
              }}
              className="px-4 py-2 rounded-xl bg-[#2BF4C3] text-[#03100D] text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEpisodes.map((episode) => {
              return (
                <div
                  key={episode.id}
                  className="glass-panel-hover rounded-2xl p-4 sm:p-5 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Top Thumbnail & Badge */}
                  <div>
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-4 border border-white/10 group-hover:border-[#2BF4C3]/40 transition-colors">
                      <Image
                        src={episode.thumbnail}
                        alt={episode.title}
                        fill
                        className="object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#03100D]/90 via-black/20 to-black/10" />

                      {/* Episode Badge */}
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-[#03100D]/90 backdrop-blur-md border border-[#2BF4C3]/30 text-[11px] font-bold text-[#2BF4C3]">
                        EP #{episode.number}
                      </div>

                      {/* Duration & Category */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-white/90">
                        <span className="flex items-center gap-1 bg-[#03100D]/85 px-2 py-0.5 rounded border border-white/10">
                          <Clock className="w-3 h-3 text-[#2BF4C3]" />
                          {episode.duration}
                        </span>
                        <span className="bg-[#2BF4C3]/20 text-[#2BF4C3] font-semibold px-2 py-0.5 rounded border border-[#2BF4C3]/30">
                          {episode.category}
                        </span>
                      </div>
                    </div>

                    {/* Date & Tags */}
                    <div className="flex items-center justify-between text-[11px] text-[#94A3B8] mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#2BF4C3]" />
                        {episode.releaseDate}
                      </span>
                      <span className="text-[10px] text-[#2BF4C3] font-mono">
                        {episode.tags[0]}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-white group-hover:text-[#2BF4C3] transition-colors line-clamp-2 leading-snug mb-2">
                      {episode.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#94A3B8] line-clamp-2 leading-relaxed mb-4">
                      {episode.description}
                    </p>
                  </div>

                  {/* Bottom Actions: External Links to Spotify & YouTube + Notes modal */}
                  <div className="pt-3 border-t border-white/5 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      {/* Spotify Link */}
                      <a
                        href={episode.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold bg-[#081717] hover:bg-[#0d2723] text-white border border-[#2BF4C3]/30 hover:border-[#2BF4C3] transition-all"
                      >
                        <SpotifyIcon className="w-3.5 h-3.5 text-[#2BF4C3]" />
                        <span>Spotify</span>
                      </a>

                      {/* YouTube Link */}
                      <a
                        href={episode.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all"
                      >
                        <YoutubeIcon className="w-3.5 h-3.5 text-[#FF0000]" />
                        <span>YouTube</span>
                      </a>
                    </div>

                    {/* Expand Details Trigger */}
                    <button
                      onClick={() => setSelectedEpisodeModal(episode)}
                      className="w-full text-center text-[11px] text-[#94A3B8] hover:text-[#2BF4C3] transition-colors py-1 flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>View Takeaways & Notes</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Episode Details Modal */}
      {selectedEpisodeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#081717] border border-[#2BF4C3]/30 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setSelectedEpisodeModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-[#2BF4C3] uppercase tracking-wider mb-2">
              <span>Episode #{selectedEpisodeModal.number}</span>
              <span>•</span>
              <span>{selectedEpisodeModal.category}</span>
              <span>•</span>
              <span>{selectedEpisodeModal.duration}</span>
            </div>

            <h3 className="text-2xl font-black text-white mb-3">
              {selectedEpisodeModal.title}
            </h3>

            <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
              {selectedEpisodeModal.longDescription || selectedEpisodeModal.description}
            </p>

            <div className="bg-[#03100D] rounded-2xl p-4 border border-white/10 mb-6">
              <h4 className="text-xs uppercase font-bold text-[#2BF4C3] tracking-wider mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Key Discussion Takeaways:
              </h4>
              <ul className="space-y-2.5">
                {selectedEpisodeModal.takeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#2BF4C3] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={selectedEpisodeModal.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#2BF4C3] text-[#03100D] flex items-center justify-center gap-2 shadow-lg shadow-[#2BF4C3]/20 hover:bg-[#22d3a9] transition-colors"
              >
                <SpotifyIcon className="w-4 h-4 text-[#03100D]" />
                <span>Listen on Spotify</span>
              </a>
              <a
                href={selectedEpisodeModal.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl text-xs font-semibold bg-[#03100D] border border-white/10 text-white flex items-center justify-center gap-2 hover:border-[#FF0000] transition-colors"
              >
                <YoutubeIcon className="w-4 h-4 text-[#FF0000]" />
                <span>Watch on YouTube</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
