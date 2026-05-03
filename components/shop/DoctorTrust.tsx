"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const doctors = [
  { name: "Dr. Joseph Raccuglia, MD", practice: "Family Medicine", years: "30+ Years",
    photo: "https://cdn.prod.website-files.com/67fc611cc6ab80a4e678c07a/69da2b5ae75b29e62e394da5_Dise%C3%B1o%20sin%20t%C3%ADtulo%20(18).png",
    quote: "I share this with my patients as an option for its ability to aid focus." },
  { name: "Dr. John Kasper, DO", practice: "Internal Medicine", years: "30+ Years",
    photo: "https://cdn.prod.website-files.com/67fc611cc6ab80a4e678c07a/69da2b5adad4106df47d0183_Dise%C3%B1o%20sin%20t%C3%ADtulo%20(23).png",
    quote: "I recommend this for people who want to feel relaxed enough to focus without stimulants." },
  { name: "Dr. Rajeev Grover, MD", practice: "Internal Medicine", years: "30+ Years",
    photo: "https://cdn.prod.website-files.com/67fc611cc6ab80a4e678c07a/69da2b5adc0fe80a840c953c_Dise%C3%B1o%20sin%20t%C3%ADtulo%20(19).png",
    quote: "I recommend this to my patients for its promising benefits for recall and cognition." },
  { name: "Dr. Nicholas Biassotto", practice: "Family Medicine", years: "45+ Years",
    photo: "https://cdn.prod.website-files.com/67fc611cc6ab80a4e678c07a/69da2b5af5a90b31b7abd128_Dise%C3%B1o%20sin%20t%C3%ADtulo%20(6).png",
    quote: "Keeps your ability to pay attention steady by reducing stress interference." },
  { name: "Dr. Lloyd Pina, NP", practice: "Family Medicine", years: "10+ Years",
    photo: "https://cdn.prod.website-files.com/67fc611cc6ab80a4e678c07a/69da2b5ac17ae988fa7d154b_Dise%C3%B1o%20sin%20t%C3%ADtulo%20(16).png",
    quote: "It does a good job and can help you gain control over your focus." },
  { name: "Dr. Judy Pierson, FNP", practice: "Internal Medicine", years: "13+ Years",
    photo: "https://cdn.prod.website-files.com/67fc611cc6ab80a4e678c07a/69da2b5ab5f59779f7a3e1ee_Dise%C3%B1o%20sin%20t%C3%ADtulo%20(20).png",
    quote: "Can help the body handle mental strain so you can better focus." },
  { name: "Dr. William Fader, NP", practice: "Family Medicine", years: "5 Years",
    photo: "https://cdn.prod.website-files.com/67fc611cc6ab80a4e678c07a/69da2b5a07e169d0e84bb72a_Dise%C3%B1o%20sin%20t%C3%ADtulo%20(15).png",
    quote: "Steadies the mind and keeps you mentally sharp, even under pressure." },
  { name: "Dr. Sabeena Faiz, NP", practice: "Primary Care", years: "18+ Years",
    photo: "https://cdn.prod.website-files.com/67fc611cc6ab80a4e678c07a/69da2b5a23d4bc28eb5016be_Dise%C3%B1o%20sin%20t%C3%ADtulo%20(14).png",
    quote: "Helps my patients cope with stress while maintaining focus." },
  { name: "Dr. Jessica Turner, NP", practice: "Family Medicine", years: "10+ Years",
    photo: "https://cdn.prod.website-files.com/67fc611cc6ab80a4e678c07a/69da2b5ae534894fe0181ab8_Dise%C3%B1o%20sin%20t%C3%ADtulo%20(17).png",
    quote: "Provides the nutrients needed for calmness and clear thinking." },
];

const translationCards = [
  { icon: "✓", text: "Calm focus without overstimulation" },
  { icon: "✓", text: "Reduced stress-driven reactivity" },
  { icon: "✓", text: "Clarity and emotional regulation" },
  { icon: "✓", text: "A different approach to nootropics" },
];

export default function DoctorTrust() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w > 900 ? 3 : w > 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, doctors.length - perView);

  const tick = useCallback(() => {
    if (paused || document.hidden) return;
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [paused, maxIndex]);

  useEffect(() => {
    intervalRef.current = setInterval(tick, 4500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [tick]);

  const next = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section className="fv-section bg-white">
      <div className="fv-container-md">
        {/* Header lockup: badge inline with title */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10 max-w-[920px] mx-auto">
          {/* Badge */}
          <div className="relative w-32 h-32 flex-shrink-0">
            <svg viewBox="0 0 128 128" className="w-full h-full">
              <defs>
                <linearGradient id="badge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4A3375" />
                  <stop offset="50%" stopColor="#66479C" />
                  <stop offset="100%" stopColor="#8265B8" />
                </linearGradient>
              </defs>
              <circle cx="64" cy="64" r="60" fill="none" stroke="url(#badge-grad)" strokeWidth="3" />
              <circle cx="64" cy="64" r="52" fill="white" />
              <text x="64" y="56" textAnchor="middle" className="font-display" fontSize="22" fontWeight="800" fill="#4A3375">850+</text>
              <text x="64" y="74" textAnchor="middle" className="font-body" fontSize="9" fontWeight="700" letterSpacing="1.2" fill="#66479C">PHYSICIANS</text>
              <text x="64" y="92" textAnchor="middle" className="font-sub" fontSize="8" fontStyle="italic" fill="#555759">Verified by FrontRow MD®</text>
            </svg>
          </div>

          {/* Headline + subline */}
          <div className="text-center md:text-left">
            <span className="fv-eyebrow justify-center md:justify-start inline-flex mb-4">Doctor Trust</span>
            <h2 className="fv-display mb-3">
              Trusted by <em>850+ physicians.</em>
            </h2>
            <p className="fv-body-lead text-[16px] max-w-[520px]">
              Doctors independently sharing FlowVeda® with patients. Not paid. Verified.
            </p>
          </div>
        </div>

        {/* Translation pills — centered, redesigned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-[1080px] mx-auto">
          {translationCards.map((card, i) => (
            <div
              key={i}
              className="bg-white border-t-[3px] border-fv-purple rounded-xl p-5 shadow-fv-card flex items-start gap-3 hover:-translate-y-1 hover:shadow-fv-card-hover transition-all duration-200"
            >
              <div className="w-7 h-7 rounded-full bg-fv-purple text-white flex items-center justify-center flex-shrink-0 font-bold text-[14px]">
                {card.icon}
              </div>
              <p className="font-body text-[15px] font-semibold text-fv-charcoal leading-snug pt-0.5">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex gap-6 transition-transform duration-700 ease-out"
            style={{ transform: `translateX(calc(-${index} * (100% / ${perView} + ${24 / perView}px)))` }}
          >
            {doctors.map((doc, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-fv-blue border border-fv-purple rounded-2xl p-6 flex flex-col items-center text-center shadow-fv-card"
                style={{ flex: `0 0 calc((100% - ${(perView - 1) * 24}px) / ${perView})` }}
              >
                <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-3">
                  <img src={doc.photo} alt={doc.name} className="w-full h-full object-cover" />
                </div>
                <p className="font-display font-bold text-white text-[20px] mb-1">{doc.name}</p>
                <p className="font-body font-medium text-[#E8E5ED] text-[16px]">{doc.practice}</p>
                <p className="font-body font-medium text-[#B8B5C0] text-[14px] tracking-[0.12em] uppercase mb-3">{doc.years}</p>
                <div className="border-t border-fv-purple w-full pt-3 flex-1 flex items-start">
                  <p className="font-body text-[#F0EDEA] text-[18px] leading-[1.6]">&ldquo;{doc.quote}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-5 mt-10">
          <button onClick={prev} aria-label="Previous" className="w-12 h-12 rounded-full bg-fv-blue/70 border border-fv-purple/50 text-white text-xl flex items-center justify-center hover:bg-fv-blue transition-colors">←</button>
          <button onClick={next} aria-label="Next" className="w-12 h-12 rounded-full bg-fv-blue/70 border border-fv-purple/50 text-white text-xl flex items-center justify-center hover:bg-fv-blue transition-colors">→</button>
        </div>
      </div>
    </section>
  );
}
