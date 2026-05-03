import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section className="relative min-h-[640px] md:min-h-[720px] flex items-center justify-center overflow-hidden bg-fv-midnight px-6 py-32">
      {/* Background: video placeholder + image fallback */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://cdn.prod.website-files.com/67fc611cc6ab80a4e678c07a/69e93ca62699cef2b509f3dd_Reactionary%20world.jpeg"
          className="w-full h-full object-cover opacity-50"
        >
          {/* Real video drops in later. Poster image carries the load for now. */}
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-fv-midnight/35 via-fv-midnight/55 to-fv-midnight/70" />
      </div>

      <div className="relative z-10 max-w-[1080px] mx-auto text-center">
        <h1 className="font-display font-extrabold text-white tracking-[-0.02em] leading-[1.1] mb-3 max-w-[820px] mx-auto"
            style={{ fontSize: "clamp(32px, 4.2vw, 56px)", textShadow: "0 2px 24px rgba(0,0,0,0.55)" }}>
          The world wants your reaction.
          <em className="font-sub not-italic font-medium block my-2 text-[#E8D5F5]" style={{ fontStyle: "italic" }}>
            Own the moment before.
          </em>
          The choice is yours.
        </h1>

        <p className="font-body font-medium text-[#EDEBF0] max-w-[760px] mx-auto mt-7 mb-10"
           style={{ fontSize: "clamp(17px, 1.9vw, 20px)", lineHeight: 1.7, textShadow: "0 1px 12px rgba(0,0,0,0.55)" }}>
          A daily nootropic that supports calm, focused awareness, so you can recognize the moment before reaction, and choose how you respond.
        </p>

        <CTAButton label="Start Your 60-Day Awakening" />

        <p className="font-body text-[14px] font-medium text-white/75 mt-4 tracking-[0.01em]">
          86% Ayurvedic. Clinically studied ingredients. Trusted by 850+ physicians.
        </p>
        <p className="font-body text-[13px] text-white/60 mt-1">
          60-day money-back guarantee.
        </p>
      </div>
    </section>
  );
}
