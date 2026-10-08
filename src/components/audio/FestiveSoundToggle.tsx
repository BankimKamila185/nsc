import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, Music } from 'lucide-react';
import confetti from 'canvas-confetti';

export const FestiveSoundToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  const triggerFlowerBlessings = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.85, x: 0.9 },
      colors: ['#D69B32', '#A61B2B', '#FFF1D2', '#B83A24', '#F3C969'],
      shapes: ['circle'],
      scalar: 1.2
    });
  };

  // Web Audio Synthesizer for Dhak (Bengali festival drum) & Conch (Shankha) tone
  const playDhakBeat = (ctx: AudioContext, time: number, pitch = 140, isHigh = false) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = isHigh ? 'triangle' : 'sine';
    osc.frequency.setValueAtTime(pitch, time);
    osc.frequency.exponentialRampToValueAtTime(pitch * 0.4, time + 0.18);

    gain.gain.setValueAtTime(0.35, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(time);
    osc.stop(time + 0.22);
  };

  const playShankhaChant = (ctx: AudioContext, time: number) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(420, time);
    osc.frequency.linearRampToValueAtTime(480, time + 0.6);
    osc.frequency.exponentialRampToValueAtTime(390, time + 1.2);

    gain.gain.setValueAtTime(0.01, time);
    gain.gain.linearRampToValueAtTime(0.18, time + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 1.3);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(time);
    osc.stop(time + 1.35);
  };

  const startFestiveRhythm = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      let beatCount = 0;
      // Classic Bengali Dhak Pattern: "Dha-kura-kura, Dha-kura-kura, Dha-kura-kura Dha-Dha"
      const interval = window.setInterval(() => {
        const now = ctx.currentTime;
        const step = beatCount % 8;

        if (step === 0) {
          playDhakBeat(ctx, now, 130, false); // Heavy 'Dha'
          if (beatCount % 32 === 0) {
            playShankhaChant(ctx, now); // Ceremonial Shankha invocation
            triggerFlowerBlessings();
          }
        } else if (step === 1 || step === 2) {
          playDhakBeat(ctx, now, 240, true); // Sharp rim 'Kura'
        } else if (step === 4) {
          playDhakBeat(ctx, now, 130, false);
        } else if (step === 5 || step === 6) {
          playDhakBeat(ctx, now, 240, true);
        } else if (step === 7) {
          playDhakBeat(ctx, now, 180, true);
        }

        beatCount++;
      }, 160);

      intervalRef.current = interval;
      setIsPlaying(true);
      triggerFlowerBlessings();
    } catch {
      console.warn('Audio context unavailable');
    }
  };

  const stopFestiveRhythm = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopFestiveRhythm();
    } else {
      startFestiveRhythm();
    }
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2">
      {/* Flower Blessing Button */}
      <button
        onClick={triggerFlowerBlessings}
        className="p-2.5 sm:p-3 rounded-full bg-[#7A1018] text-[#F3C969] border-2 border-[#D69B32] shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer group flex items-center justify-center"
        title="Receive Pushpanjali Flower Blessing"
        aria-label="Pushpanjali Blessings"
      >
        <Sparkles size={18} className="group-hover:rotate-45 transition-transform" />
      </button>

      {/* Dhak & Shankho Audio Rhythm Toggle */}
      <button
        onClick={toggleSound}
        className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-full border-2 border-[#D69B32] shadow-2xl flex items-center gap-2 text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
          isPlaying
            ? 'bg-[#A61B2B] text-white animate-pulse'
            : 'bg-[#3A080D] text-[#FFF1D2] hover:bg-[#7A1018]'
        }`}
        title={isPlaying ? 'Mute Festive Dhak Rhythm' : 'Play Festive Dhak & Shankho Sound'}
        aria-label="Toggle festive ambient rhythm"
      >
        {isPlaying ? (
          <>
            <Volume2 size={16} className="text-[#F3C969]" />
            <span className="hidden sm:inline">Dhak Rhythm ON</span>
            <Music size={14} className="text-[#F3C969] animate-bounce" />
          </>
        ) : (
          <>
            <VolumeX size={16} className="text-[#D69B32]" />
            <span className="hidden sm:inline">Festive Dhak</span>
          </>
        )}
      </button>
    </div>
  );
};
