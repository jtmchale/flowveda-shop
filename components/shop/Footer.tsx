export default function Footer() {
  return (
    <footer className="bg-fv-midnight text-white/70 py-12 px-6">
      <div className="fv-container-md text-center space-y-6">
        <p className="font-display font-bold text-white text-[18px]">FlowVeda®</p>

        <p className="font-body text-[12px] leading-[1.65] max-w-[760px] mx-auto italic text-white/55">
          These statements have not been evaluated by the Food and Drug Administration.
          This product is not intended to diagnose, treat, cure, or prevent any disease.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-[14px]">
          <a href="/our-story" className="hover:text-white transition-colors">Our Story</a>
          <a href="/ingredients" className="hover:text-white transition-colors">Ingredients</a>
          <a href="/help" className="hover:text-white transition-colors">Help Center</a>
          <a href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</a>
          <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-white transition-colors">Terms</a>
        </div>

        <p className="font-body text-[12px] text-white/40">
          © {new Date().getFullYear()} FlowVeda® LLC · 401 E Jackson St, Suite 3300 Tampa, FL 33602
        </p>
      </div>
    </footer>
  );
}
