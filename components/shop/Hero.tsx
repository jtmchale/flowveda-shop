"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { CHECKOUT_URL, CLINICIAN_COUNT } from "@/lib/constants";

const ROTATION_MS = 5500;

interface Slide {
  eyebrowVisible?: boolean;
  headline: React.ReactNode;
  subhead: React.ReactNode;
  cta: { label: string; href: string };
  footer: React.ReactNode;
  rightVisual?: "video" | "product" | "result";
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const slides: Slide[] = [
    // SLIDE 1 — Brand pitch
    {
      headline: (
        <>
          The world wants your reaction.
          <em className="block mt-3">Own the moment before.</em>
        </>
      ),
      subhead: (
        <>A daily nootropic that supports calm, focused awareness, so you can recognize the moment before reaction, and choose how you respond.</>
      ),
      cta: { label: "Start Your 60-Day Awakening", href: CHECKOUT_URL },
      footer: (
        <>
          86% Ayurvedic. Clinically studied ingredients.
          <br />
          60-day money-back guarantee.
        </>
      ),
    },
    // SLIDE 2 — Product pitch
    {
      headline: (
        <>
          The Biology of Choice.
          <em className="block mt-3">Encapsulated.</em>
        </>
      ),
      subhead: (
        <>Eight clinically studied ingredients. One purpose: the calm, focused attention to choose how you respond.</>
      ),
      cta: { label: "Start Your 60-Day Awakening — $99", href: CHECKOUT_URL },
      footer: (
        <>
          $99 · 40% off the $165 retail.
          <br />
          60-day money-back guarantee.
        </>
      ),
    },
    // SLIDE 3 — Result pitch
    {
      headline: (
        <>
          Reclaim the moments
          <em className="block mt-3">that matter.</em>
        </>
      ),
      subhead: (
        <>You have half a second between what just happened and what you&rsquo;re about to do. The moment before is yours. Start living by your own rules.</>
      ),
      cta: { label: "Start Your 60-Day Awakening", href: CHECKOUT_URL },
      footer: (
        <>
          Eight ingredients. One purpose.
          <br />
          60-day money-back guarantee.
        </>
      ),
    },
  ];

  const tick = useCallback(() => {
    if (paused || document.hidden) return;
    setIndex((prev) => (prev + 1) % slides.length);
  }, [paused, slides.length]);

  useEffect(() => {
    const interval = setInterval(tick, ROTATION_MS);
    return () => clearInterval(interval);
  }, [tick]);

  const slide = slides[index];
  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className="relative min-h-[680px] md:min-h-[760px] flex items-center overflow-hidden bg-fv-midnight"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Full-bleed video background — runs continuously, does NOT change between slides */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-reactionary-world.jpeg"
          className="w-full h-full object-cover opacity-55"
        >
          {/* Andrej drops the heartbeat MP4 here */}
        </video>
        {/* Gradient scrim for readability of left-column content */}
        <div className="absolute inset-0 bg-gradient-to-r from-fv-midnight/85 via-fv-midnight/65 to-fv-midnight/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-fv-midnight/30 via-transparent to-fv-midnight/50" />
      </div>

      {/* Slide content — left-aligned on desktop, centered on mobile */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 md:px-12 py-24 md:py-32 w-full">
        <div className="max-w-[640px]">
          {/* Eyebrow with badge */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in" key={`eyebrow-${index}`}>
            <Image
              src="/images/clinicians-choice-badge.svg"
              alt={`${CLINICIAN_COUNT}+ Clinicians' Choice — Verified by FrontRow MD`}
              width={148}
              height={30}
              priority
              className="h-7 md:h-8 w-auto"
            />
          </div>

          {/* Headline — rotates */}
          <h1
            key={`h1-${index}`}
            className="font-display font-extrabold text-white tracking-[-0.02em] leading-[1.05] mb-6 animate-fade-in"
            style={{ fontSize: "clamp(34px, 4.6vw, 60px)", textShadow: "0 2px 24px rgba(0,0,0,0.55)" }}
          >
            {slide.headline}
          </h1>

          {/* Subhead — rotates */}
          <p
            key={`sub-${index}`}
            className="font-body font-medium text-white/90 mb-9 max-w-[560px] animate-fade-in"
            style={{ fontSize: "clamp(17px, 1.7vw, 19px)", lineHeight: 1.65, textShadow: "0 1px 12px rgba(0,0,0,0.55)" }}
          >
            {slide.subhead}
          </p>

          {/* CTA — rotates */}
          <Link
            key={`cta-${index}`}
            href={slide.cta.href}
            className="inline-block bg-fv-grad-purple text-white font-body font-bold text-[14px] tracking-[0.10em] uppercase rounded-[10px] px-10 py-[18px] shadow-fv-cta hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(102,71,156,0.55)] transition-all duration-200 animate-fade-in"
          >
            {slide.cta.label} →
          </Link>

          {/* Footer — rotates */}
          <p
            key={`foot-${index}`}
            className="font-body text-[14px] font-medium text-white/70 mt-6 leading-[1.6] animate-fade-in"
          >
            {slide.footer}
          </p>
        </div>

        {/* Slide indicators + nav */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 flex items-center gap-4 z-20">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-base flex items-center justify-center backdrop-blur-sm transition-colors"
          >
            ←
          </button>

          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next slide"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-base flex items-center justify-center backdrop-blur-sm transition-colors"
          >
            →
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
}
