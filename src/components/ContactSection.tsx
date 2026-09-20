"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Send, CheckCircle2, Mic2, Sparkles } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Feedback / Listener Note",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all fields before sending.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1220] border border-[#3EF7D8]/30 mb-3">
            <Mail className="w-3.5 h-3.5 text-[#3EF7D8]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#3EF7D8]">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Reach Out to <span className="text-gradient-teal">Maher</span>
          </h2>
          <p className="text-sm sm:text-base text-[#B0B7C3] mt-2">
            Have a question, feedback on an episode, or want to pitch a guest for the show? Drop a note directly.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#3EF7D8]/30 shadow-2xl relative">
          {submitted ? (
            <div className="text-center py-10 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[#3EF7D8]/20 border border-[#3EF7D8] flex items-center justify-center mx-auto mb-4 text-[#3EF7D8]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
              <p className="text-sm text-[#B0B7C3] max-w-md mx-auto mb-6">
                Thanks for reaching out, <span className="text-white font-semibold">{formData.name}</span>. Maher reads every single message from listeners and will get back to you soon at <span className="text-[#3EF7D8]">{formData.email}</span>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", type: "Feedback / Listener Note", message: "" });
                }}
                className="px-6 py-2.5 rounded-xl bg-[#3EF7D8] text-[#050816] text-xs font-bold"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#B0B7C3] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Maher Dhami"
                    className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-white/10 text-white placeholder-[#B0B7C3]/50 text-sm focus:outline-none focus:border-[#3EF7D8] transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#B0B7C3] mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="maher@devly.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-white/10 text-white placeholder-[#B0B7C3]/50 text-sm focus:outline-none focus:border-[#3EF7D8] transition-colors"
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#B0B7C3] mb-2">
                  Inquiry Topic
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    "Guest Pitch / Interview",
                    "Episode Feedback",
                    "Sponsorship / Collab",
                  ].map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => setFormData({ ...formData, type: item })}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold text-center border transition-all ${
                        formData.type === item
                          ? "bg-[#3EF7D8]/20 border-[#3EF7D8] text-[#3EF7D8]"
                          : "bg-[#050816] border-white/10 text-[#B0B7C3] hover:border-white/20"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#B0B7C3] mb-2">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your thoughts, what episode resonated with you, or who you would like to see on the show..."
                  className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-white/10 text-white placeholder-[#B0B7C3]/50 text-sm focus:outline-none focus:border-[#3EF7D8] transition-colors resize-none"
                />
              </div>

              {error && (
                <p className="text-xs text-rose-400 font-medium">{error}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-sm bg-[#3EF7D8] hover:bg-[#1DD1B9] text-[#050816] shadow-lg shadow-[#3EF7D8]/25 hover:shadow-[#3EF7D8]/40 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to Maher</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
