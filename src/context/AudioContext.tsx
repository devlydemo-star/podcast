"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { Episode, EPISODES } from "@/data/podcastData";

interface AudioContextType {
  currentEpisode: Episode | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playbackRate: number;
  isPlayerVisible: boolean;
  playEpisode: (episode: Episode) => void;
  togglePlay: () => void;
  pause: () => void;
  seek: (seconds: number) => void;
  setVolume: (vol: number) => void;
  setPlaybackRate: (rate: number) => void;
  skipTime: (seconds: number) => void;
  closePlayer: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(EPISODES[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(EPISODES[0]?.durationSeconds || 2520);
  const [volume, setVolumeState] = useState<number>(0.85);
  const [playbackRate, setPlaybackRateState] = useState<number>(1);
  const [isPlayerVisible, setIsPlayerVisible] = useState<boolean>(false);

  // Web Audio Synthesizer for realistic playback simulation
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize Web Audio API on user interaction
  const initWebAudio = (freq: number = 220) => {
    try {
      if (typeof window === "undefined") return;
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      // Stop previous osc if running
      if (oscRef.current) {
        try {
          oscRef.current.stop();
          oscRef.current.disconnect();
        } catch {
          // ignore
        }
      }

      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      // Warm podcast ambient intro frequency with gentle pulse
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Low volume for gentle ambient sound
      gain.gain.setValueAtTime(0.02 * volume, ctx.currentTime);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      oscRef.current = osc;
      gainNodeRef.current = gain;
    } catch {
      // AudioContext fallback
    }
  };

  const stopWebAudio = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      try {
        gainNodeRef.current.gain.linearRampToValueAtTime(0, audioCtxRef.current.currentTime + 0.05);
      } catch {
        // ignore
      }
    }
    if (oscRef.current) {
      try {
        oscRef.current.stop();
        oscRef.current.disconnect();
      } catch {
        // ignore
      }
      oscRef.current = null;
    }
  };

  // Timer interval for playback progress
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            stopWebAudio();
            return 0;
          }
          return prev + 1 * playbackRate;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, duration, playbackRate]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      stopWebAudio();
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  const playEpisode = (episode: Episode) => {
    setCurrentEpisode(episode);
    setDuration(episode.durationSeconds);
    setCurrentTime(0);
    setIsPlaying(true);
    setIsPlayerVisible(true);
    initWebAudio(episode.audioPreviewToneFrequency || 220);
  };

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      stopWebAudio();
    } else {
      setIsPlaying(true);
      setIsPlayerVisible(true);
      initWebAudio(currentEpisode?.audioPreviewToneFrequency || 220);
    }
  };

  const pause = () => {
    setIsPlaying(false);
    stopWebAudio();
  };

  const seek = (seconds: number) => {
    setCurrentTime(Math.min(Math.max(0, seconds), duration));
  };

  const skipTime = (seconds: number) => {
    setCurrentTime((prev) => Math.min(Math.max(0, prev + seconds), duration));
  };

  const setVolume = (vol: number) => {
    const clamped = Math.min(Math.max(0, vol), 1);
    setVolumeState(clamped);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(0.02 * clamped, audioCtxRef.current.currentTime);
    }
  };

  const setPlaybackRate = (rate: number) => {
    setPlaybackRateState(rate);
  };

  const closePlayer = () => {
    pause();
    setIsPlayerVisible(false);
  };

  return (
    <AudioContext.Provider
      value={{
        currentEpisode,
        isPlaying,
        currentTime,
        duration,
        volume,
        playbackRate,
        isPlayerVisible,
        playEpisode,
        togglePlay,
        pause,
        seek,
        setVolume,
        setPlaybackRate,
        skipTime,
        closePlayer,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
