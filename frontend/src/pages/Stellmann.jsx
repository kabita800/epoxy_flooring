import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const FEATURES = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
    title: "No demolition",
    desc: "Applied directly over your existing tiles — no ripping up, no rebuilding.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Virtually invisible",
    desc: "Crystal-clear finish preserves the colour and pattern of stone or ceramic.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Chemical bond",
    desc: "Permanently bonded to the substrate — not just sitting on top.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Soft underfoot",
    desc: "Safe for bare feet, children, and pets — no sharp grit.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Professional surface prep",
    desc: "We use industrial-grade chemical neutralisers and mechanical scrubbing equipment to fully decontaminate the surface. This ensures a bond that lasts years, not months.",
  },
  {
    num: "02",
    title: "Customised grip level",
    desc: "We mix the aggregate ratio on-site. A softer P3/P4 finish for internal showers, maximum P5 traction for outdoor ramps and pool edges. One size never fits all.",
  },
  {
    num: "03",
    title: "No cloudy finish",
    desc: "Our applicators are trained to apply resin at the exact micron thickness required, monitoring humidity and temperature to deliver a crystal-clear result.",
  },
  {
    num: "04",
    title: "Backed by 21 years",
    desc: "You get the peace of mind of a real business with a physical address — not just a bottle with a warranty label that blames 'user error'.",
  },
];

const AREAS = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    label: "Residential",
    title: "Bathrooms & laundries",
    desc: "P3-rated clear coating bonds directly to your tiles. Comfortable on bare feet, immediate grab the moment it gets wet or soapy.",
    tags: ["Shower bases", "Bathroom floors", "Bathtubs", "Laundries"],
    rating: "P3 / P4",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
    label: "Outdoor",
    title: "Pool surrounds & patios",
    desc: "P4/P5 aggregate cuts through standing water and pool splash-out. UV stable — won't yellow or peel under the harsh Australian sun.",
    tags: ["Pool coping", "Patios", "Balconies", "Driveways", "Stairs"],
    rating: "P4 / P5",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    label: "Commercial",
    title: "Foyers & strata common areas",
    desc: "We meet AS 4586 requirements and can arrange independent slip testing for a Certificate of Compliance — protecting you from negligence claims.",
    tags: ["Hotel foyers", "Retail fronts", "Office entryways", "Kitchens"],
    rating: "Custom",
  },
];

const FAQS = [
  {
    q: "Will the coating change the look of my tiles?",
    a: "No. The Stellmann Clear System is virtually invisible. Applied at a precise micron thickness, it preserves the colour, pattern, and natural beauty of your tiles.",
  },
  {
    q: "How long does installation take?",
    a: "Most residential jobs are completed in a single day. Larger commercial projects may take longer. We assess your site and give a clear timeframe before starting.",
  },
  {
    q: "Is the non-slip surface hard to clean?",
    a: "Not at all. The system creates a seamless, hygienic barrier with no ridges for grime to accumulate in (for internal P3/P4 finishes). A mop and standard household cleaner is all you need.",
  },
  {
    q: "How long will the coating last?",
    a: "When professionally applied with correct surface prep, the coating is designed for a lifespan measured in years. DIY applications without proper prep often fail within months.",
  },
  {
    q: "Does it work on all types of tiles?",
    a: "It's compatible with ceramic, porcelain, natural stone, and marble. We confirm suitability during the onsite assessment before any work begins.",
  },
  {
    q: "Is this suitable for driveways or areas with forklifts?",
    a: "Yes. For high-traffic and heavy-load areas we recommend a P5 aggregate mix. We'll assess your specific zone and recommend the right formulation.",
  },
];

const STATS = [
  { value: "21+", label: "Years in business" },
  { value: "P3–P5", label: "Slip rating options" },
  { value: "CSIRO", label: "Certified system" },
  { value: "100%", label: "Tile-preserving" },
];

/* Scroll-triggered reveal wrapper. Fades + slides an element in once it
   enters the viewport, with an optional stagger delay. */
function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 0,
  className = "",
  as: Tag = "div",
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`stl-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{
        transitionDelay: visible ? `${delay}ms` : "0ms",
        "--stl-y": `${y}px`,
        "--stl-x": `${x}px`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default function Stellmann() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev === FEATURES.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentFeature = FEATURES[activeFeature];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;800;900&family=Archivo+Expanded:wght@700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

        :root {
          --ink: #16181B;
          --ink-soft: #2A2D32;
          --steel: #5B6470;
          --concrete: #EDEAE3;
          --concrete-deep: #E2DDD2;
          --paper: #FAFAF8;
          --resin: #A11717;
          --resin-deep: #A11717;
          --resin-soft: #A11717;
        }

        .stl-root { font-family: 'Inter', sans-serif; color: var(--ink); background: var(--paper); }
        .stl-display { font-family: 'Archivo Expanded', 'Archivo', sans-serif; letter-spacing: -0.01em; }
        .stl-mono { font-family: 'JetBrains Mono', monospace; letter-spacing: 0.02em; }

        /* ---------- keyframes ---------- */
        @keyframes stlPulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(161,23,23,0.45); } 70% { box-shadow: 0 0 0 8px rgba(161,23,23,0); } }
        @keyframes stlFloat { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-8px) rotate(-1.5deg); } }
        @keyframes stlHeroIn { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes stlHeroInRight { from { opacity: 0; transform: translateY(18px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes stlShine { to { background-position: 200% center; } }
        @keyframes stlDrift { from { background-position: 0 0; } to { background-position: 260px 260px; } }
        @keyframes stlGlowPulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(161,23,23,0.38); } 50% { box-shadow: 0 0 0 12px rgba(161,23,23,0); } }
        @keyframes stlSpinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes stlWiggle { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(8deg); } }
        @keyframes stlUnderline { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes stlSlideIn { 0% { opacity: 0; transform: translateX(12px); } 100% { opacity: 1; transform: translateX(0); } }

        /* ---------- scroll reveal ---------- */
        .stl-reveal {
          opacity: 0;
          transform: translate3d(var(--stl-x, 0), var(--stl-y, 28px), 0);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1);
          will-change: opacity, transform;
        }
        .stl-reveal.is-visible { opacity: 1; transform: translate3d(0,0,0); }

        /* ---------- hero entrance ---------- */
        .stl-hero-item { opacity: 0; animation: stlHeroIn 0.85s cubic-bezier(0.22,1,0.36,1) forwards; }
        .stl-hero-d1 { animation-delay: .05s; }
        .stl-hero-d2 { animation-delay: .18s; }
        .stl-hero-d3 { animation-delay: .32s; }
        .stl-hero-d4 { animation-delay: .46s; }
        .stl-hero-d5 { animation-delay: .58s; }
        .stl-hero-panel { opacity: 0; animation: stlHeroInRight 0.9s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: .4s; }

        .stl-hero-bg {
          position: absolute; inset: 0; pointer-events: none; opacity: 0.55;
          background-image: radial-gradient(circle, rgba(161,23,23,0.14) 1.5px, transparent 1.5px);
          background-size: 26px 26px;
          animation: stlDrift 22s linear infinite;
        }

        .stl-shine-text {
          background: linear-gradient(90deg, var(--resin) 0%, #ff7a63 25%, var(--resin) 50%, #ff7a63 75%, var(--resin) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: stlShine 5s linear infinite;
        }

        .stl-stat { opacity: 0; animation: stlHeroIn 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
        .stl-stat:nth-child(1) { animation-delay: .75s; }
        .stl-stat:nth-child(2) { animation-delay: .87s; }
        .stl-stat:nth-child(3) { animation-delay: .99s; }
        .stl-stat:nth-child(4) { animation-delay: 1.11s; }

        /* ---------- eyebrow / heading micro-motion ---------- */
        .stl-eyebrow-dot { animation: stlPulse 2.2s ease-out infinite; }
        .stl-heading-underline {
          display: block; height: 3px; width: 46px; background: var(--resin);
          transform-origin: left center; animation: stlUnderline 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: .15s; transform: scaleX(0);
        }

        /* ---------- interactive hovers ---------- */
        .stl-feature { transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), border-color 0.3s ease, box-shadow 0.4s ease; }
        .stl-feature-slider { animation: stlSlideIn 0.45s cubic-bezier(0.22,1,0.36,1); }
        .stl-feature:hover { transform: translateY(-6px); border-color: var(--resin); box-shadow: 0 20px 36px -16px rgba(22,24,27,0.18); }
        .stl-feature:hover .stl-feature-icon { background: var(--resin); color: var(--paper); transform: rotate(-8deg) scale(1.08); }
        .stl-feature-icon { transition: background-color 0.3s ease, color 0.3s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1); }

        .stl-step-num { transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), background-color 0.3s ease; }
        .stl-step:hover .stl-step-num { transform: scale(1.12) rotate(-4deg); background: var(--resin); color: var(--paper); }
        .stl-step:hover h3 { color: var(--resin-soft); }
        .stl-step h3 { transition: color 0.3s ease; }

        .stl-area-card { transition: transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease; }
        .stl-area-card:hover { transform: translateY(-7px); box-shadow: 0 26px 46px -18px rgba(22,24,27,0.4); }
        .stl-area-icon { transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1); }
        .stl-area-card:hover .stl-area-icon { transform: rotate(8deg) scale(1.08); animation: stlWiggle 1.4s ease-in-out infinite; }

        .stl-faq-btn { transition: background-color 0.25s ease; }
        .stl-faq-btn:hover h3 { color: var(--resin-deep); }
        .stl-faq-panel { display: grid; transition: grid-template-rows 0.45s cubic-bezier(0.22,1,0.36,1); }
        .stl-faq-panel-inner { overflow: hidden; }
        .stl-faq-answer { transition: opacity 0.35s ease, transform 0.35s ease; }

        .stl-plus { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease; }

        .stl-cta-btn { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease; }
        .stl-cta-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 30px -10px rgba(161,23,23,0.5); }
        .stl-cta-glow { animation: stlGlowPulse 2.6s ease-in-out infinite; }
        .stl-cta-glow:hover { animation: none; }

        .stl-chip { animation: stlFloat 5s ease-in-out infinite; }
        .stl-dot-live { animation: stlPulse 2s ease-out infinite; }

        .stl-tag { transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.25s ease; }
        .stl-area-card:hover .stl-tag { border-color: var(--resin-soft); }
        .stl-tag:hover { transform: translateY(-2px); background: var(--resin); color: var(--paper); border-color: var(--resin); }

        .stl-tel-icon { display: inline-block; transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1); }
        a[href^="tel:"]:hover .stl-tel-icon { transform: rotate(14deg) scale(1.15); }

        /* ---------- respect reduced motion ---------- */
        @media (prefers-reduced-motion: reduce) {
          .stl-reveal, .stl-hero-item, .stl-hero-panel, .stl-stat, .stl-heading-underline {
            animation: none !important; opacity: 1 !important; transform: none !important; transition: none !important;
          }
          * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
        }
      `}</style>

      <div className="stl-root">
        {/* ============ HERO — split diagonal panel, distinct from homepage's full-bleed slider ============ */}
        <section className="relative bg-white overflow-hidden">
          <div className="stl-hero-bg" aria-hidden="true" />
          <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 pt-10 pb-8 md:pt-16 md:pb-10 relative">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
              <div>
                <p className="stl-hero-item stl-hero-d1 stl-mono uppercase tracking-[2px] text-[11px] sm:text-xs text-[var(--resin-soft)] font-semibold mb-4 flex items-center gap-2.5">
                  <span className="inline-block w-6 h-px bg-[var(--resin-soft)]" />
                  Approved Stellmann Applicator
                </p>

                <h1 className="stl-hero-item stl-hero-d2 stl-display text-3xl sm:text-4xl md:text-[3.1rem] font-extrabold leading-[1.08] text-black mb-5">
                  Stop slips.
                  <br />
                  <span className="stl-shine-text">Keep your tiles.</span>
                </h1>

                <p className="stl-hero-item stl-hero-d3 text-sm md:text-base text-black/65 max-w-md mb-8 leading-relaxed">
                  An invisible, CSIRO-certified non-slip finish bonded directly
                  onto your existing tiles — no demolition, no colour change,
                  just certified grip the moment it gets wet.
                </p>

                <div className="stl-hero-item stl-hero-d4 flex flex-col sm:flex-row gap-3 mb-9">
                  <Link
                    to="/contact"
                    className="stl-cta-btn stl-cta-glow inline-flex items-center justify-center bg-[var(--resin)] hover:bg-[var(--resin-deep)] text-[var(--paper)] px-6 py-3 rounded-sm font-semibold stl-mono text-xs uppercase tracking-wide"
                  >
                    Get a free safety quote
                  </Link>
                  <a
                    href="tel:1300037699"
                    className="border border-[var(--paper)]/25 bg-[var(--paper)] text-[var(--ink)] px-6 py-3 rounded-sm font-semibold no-underline text-center stl-mono text-xs uppercase tracking-wide transition-colors"
                  >
                    <span className="stl-tel-icon">☎</span> 1300 037 699
                  </a>
                </div>

                <div className="stl-hero-item stl-hero-d5 flex flex-wrap gap-2">
                  {[
                    "Virtually invisible",
                    "No demolition",
                    "P3–P5 certified",
                    "UV stable",
                  ].map((t) => (
                    <span
                      key={t}
                      className="stl-tag stl-mono text-[10px] uppercase tracking-wide text-[var(--paper)]/55 border border-[var(--paper)]/15 px-3 py-1.5 rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — a stat-card stack, not an image slider, to keep this hero visually distinct */}
              <div className="stl-hero-panel relative">
                <div className="bg-[var(--ink-soft)] border border-[var(--paper)]/10 rounded-sm p-7 md:p-8">
                  <p className="stl-mono text-[10px] uppercase tracking-[1.5px] text-[var(--resin-soft)] mb-5">
                    By the numbers
                  </p>
                  <div className="grid grid-cols-2 gap-5">
                    {STATS.map((s) => (
                      <div key={s.label} className="stl-stat">
                        <h3 className="stl-display text-2xl font-extrabold text-[var(--paper)]">
                          {s.value}
                        </h3>
                        <p className="stl-mono text-[10px] uppercase tracking-wide text-[var(--paper)]/50 mt-1.5">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-7 pt-6 border-t border-[var(--paper)]/10 flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--resin)] stl-dot-live" />
                    <span className="text-[13px] text-[var(--paper)]/70">
                      Booking now across Sydney
                    </span>
                  </div>
                </div>

                <div className="stl-chip absolute -bottom-5 -left-5 hidden sm:block bg-[var(--resin)] text-[var(--paper)] rounded-sm px-4 py-3 shadow-xl">
                  <p className="stl-mono text-[9px] uppercase tracking-wide opacity-80">
                    Slip Rating
                  </p>
                  <p className="font-bold text-sm">P3 – P5</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ HOW IT WORKS — feature grid ============ */}
        <section className="pt-4 pb-14 md:pt-8 md:pb-20 bg-[var(--paper)]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">
    <Reveal className="max-w-2xl mb-12">
      <span className="stl-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[1.5px] text-[var(--resin-deep)] font-semibold mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--resin)] stl-eyebrow-dot" />
        How It Works
      </span>

      <h2 className="stl-display text-2xl lg:text-3xl font-extrabold text-[var(--ink)] leading-tight mb-3">
        Not acid etching. Not grip tape.
      </h2>

      <span className="stl-heading-underline mb-4" />
    </Reveal>

    {/* Mobile */}
  <div className="block md:hidden">
  <Reveal key={currentFeature.title}>
    <div className="group bg-[var(--concrete)] border border-[var(--ink)]/8 rounded-sm p-5">
      <div className="w-10 h-10 rounded-sm bg-[var(--paper)] text-[var(--resin-deep)] flex items-center justify-center mb-4">
        {currentFeature.icon}
      </div>

      <h3 className="text-base font-bold text-[var(--ink)] mb-2">
        {currentFeature.title}
      </h3>

      <p className="text-[13px] leading-6 text-[var(--steel)]">
        {currentFeature.desc}
      </p>
    </div>
  </Reveal>

  <div className="mt-6 flex justify-center gap-2">
    {FEATURES.map((_, index) => (
      <button
        key={index}
        onClick={() => setActiveFeature(index)}
        className={`h-2.5 rounded-full transition-all ${
          activeFeature === index
            ? "w-6 bg-[var(--resin)]"
            : "w-2.5 bg-[var(--ink)]/20"
        }`}
      />
    ))}
  </div>
</div>

    {/* Desktop */}
    {/* Desktop: grid of feature boxes */}
<div className="hidden md:grid md:grid-cols-4 gap-6 lg:gap-8">
  {FEATURES.map((f, i) => (
    <Reveal key={f.title} delay={i * 80} y={18}>
      <div className="group h-full bg-[var(--concrete)] border border-[var(--ink)]/8 rounded-sm p-5 lg:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
  <div className="w-10 h-10 rounded-sm bg-[var(--paper)] text-[var(--resin-deep)] flex items-center justify-center mb-4">
    {f.icon}
  </div>

  <h3 className="text-base font-bold text-[var(--ink)] mb-2">
    {f.title}
  </h3>

  <p className="text-[13px] leading-6 text-[var(--steel)]">
    {f.desc}
  </p>
</div>
    </Reveal>
  ))}
</div>
  </div>
</section>

        {/* ============ WHY US — numbered list, ink background ============ */}
        <section className="py-14 md:py-20 bg-[var(--ink)]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <Reveal className="max-w-xl mb-10">
              <span className="stl-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[1.5px] text-[var(--resin-soft)] font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--resin-soft)] stl-eyebrow-dot" />
                The SEF Difference
              </span>
              <h2 className="stl-display text-2xl md:text-3xl font-extrabold text-[var(--paper)] leading-tight">
                Why hire an approved applicator?
              </h2>
              <span className="stl-heading-underline mt-3" />
              <p className="text-sm text-[var(--paper)]/60 leading-relaxed mt-3 max-w-lg">
                A long-lasting, invisible result depends entirely on how it's
                applied. Here's what separates a professional job from a DIY
                bottle.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
              {STEPS.map((s, i) => (
                <Reveal
                  key={s.num}
                  delay={i * 110}
                  x={i % 2 === 0 ? -18 : 18}
                  y={12}
                >
                  <div className="stl-step flex gap-5">
                    <span className="stl-step-num shrink-0 stl-mono text-xs font-bold text-[var(--resin-soft)] bg-[var(--ink-soft)] border border-[var(--paper)]/10 w-10 h-10 rounded-sm flex items-center justify-center">
                      {s.num}
                    </span>
                    <div>
                      <h3 className="font-bold text-sm text-[var(--paper)] mb-1.5">
                        {s.title}
                      </h3>
                      <p className="text-[13px] text-[var(--paper)]/55 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SERVICE AREAS — three rated panels ============ */}
        <section className="py-14 md:py-20 bg-[var(--concrete)]">
          <div className="max-w-6xl mx-auto px-5 md:px-10">
            <Reveal className="max-w-xl mb-10">
              <span className="stl-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[1.5px] text-[var(--resin-deep)] font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--resin)] stl-eyebrow-dot" />
                Where We Work
              </span>
              <h2 className="stl-display text-2xl md:text-3xl font-extrabold text-[var(--ink)] leading-tight">
                Every tiled surface, made safe
              </h2>
              <span className="stl-heading-underline mt-3" />
            </Reveal>

            <div className="grid md:grid-cols-3 gap-4">
              {AREAS.map((a, i) => (
                <Reveal key={a.title} delay={i * 130} y={34}>
                  <div className="stl-area-card bg-[var(--paper)] rounded-sm p-6 flex flex-col gap-4 h-full">
                    <div className="flex items-center justify-between">
                      <div className="stl-area-icon w-11 h-11 rounded-sm bg-[var(--ink)] text-[var(--resin-soft)] flex items-center justify-center">
                        {a.icon}
                      </div>
                      <span className="stl-mono text-[10px] font-bold uppercase text-[var(--resin-deep)] bg-[var(--concrete-deep)] px-2.5 py-1 rounded-sm">
                        {a.rating}
                      </span>
                    </div>
                    <div>
                      <p className="stl-mono text-[9px] text-[var(--steel)] mb-1 uppercase tracking-widest font-bold">
                        {a.label}
                      </p>
                      <h3 className="font-bold text-[15px] text-[var(--ink)] mb-2">
                        {a.title}
                      </h3>
                      <p className="text-[13px] text-[var(--steel)] leading-relaxed">
                        {a.desc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-[var(--ink)]/8">
                      {a.tags.map((t) => (
                        <span
                          key={t}
                          className="stl-tag text-[11px] text-[var(--steel)] bg-[var(--concrete)] border border-[var(--ink)]/8 px-2.5 py-1 rounded-sm font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FAQ — accordion ============ */}
        <section className="py-14 md:py-20 bg-[var(--paper)]">
          <div className="max-w-3xl mx-auto px-6">
            <Reveal className="mb-10">
              <span className="stl-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[1.5px] text-[var(--resin-deep)] font-semibold mb-3 justify-center w-full">
                <span className="w-1.5 h-1.5 text-center rounded-full bg-[var(--resin)] stl-eyebrow-dot" />
                FAQ
              </span>

              <h2 className="stl-display text-2xl text-center md:text-3xl font-extrabold text-[var(--ink)] leading-tight">
                Common questions
              </h2>
            </Reveal>

            <div className="divide-y divide-[var(--ink)]/10">
              {FAQS.map((f, i) => {
                const open = openFaq === i;
                return (
                  <Reveal key={i} delay={i * 60} y={16}>
                    <button
                      className="stl-faq-btn w-full text-left py-5 flex items-center justify-between gap-4"
                      onClick={() => setOpenFaq(open ? null : i)}
                      aria-expanded={open}
                    >
                      <h3 className="font-semibold text-[14px] text-[var(--ink)] transition-colors">
                        {f.q}
                      </h3>
                      <span
                        className={`stl-plus shrink-0 w-7 h-7 rounded-sm border flex items-center justify-center ${
                          open ?
                            "bg-[var(--resin)] border-[var(--resin)] text-[var(--paper)] rotate-45"
                          : "border-[var(--ink)]/15 text-[var(--steel)]"
                        }`}
                      >
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className="stl-faq-panel"
                      style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                    >
                      <div className="stl-faq-panel-inner">
                        <p
                          className="stl-faq-answer pb-6 text-[13px] text-[var(--steel)] leading-relaxed pr-12"
                          style={{
                            opacity: open ? 1 : 0,
                            transform:
                              open ? "translateY(0)" : "translateY(-6px)",
                          }}
                        >
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="py-14 md:py-20 bg-[var(--ink)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Reveal>
              <p className="stl-mono text-[11px] font-bold tracking-[1.5px] uppercase text-[var(--resin-soft)] mb-4">
                Sydney Epoxy Floors
              </p>
              <h2 className="stl-display text-2xl md:text-[2.25rem] font-extrabold text-[var(--paper)] mb-4 leading-snug">
                Ready to make your floors safe?
              </h2>
              <p className="text-[var(--paper)]/60 text-[14px] leading-relaxed mb-9 max-w-md mx-auto">
                Don't wait for a slip-and-fall to happen. Get an onsite
                assessment or quick estimate from Sydney's approved Stellmann
                applicators.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  to="/contact"
                  className="stl-cta-btn stl-cta-glow bg-[var(--resin)] hover:bg-[var(--resin-deep)] text-[var(--paper)] px-7 py-3.5 rounded-sm font-semibold stl-mono text-xs uppercase tracking-wide no-underline inline-block"
                >
                  Get a free quote
                </Link>
                <a
                  href="tel:1300037699"
                  className="border border-[var(--paper)]/25 hover:bg-[var(--paper)] hover:text-[var(--ink)] text-[var(--paper)] px-7 py-3.5 rounded-sm font-semibold stl-mono text-xs uppercase tracking-wide transition-colors"
                >
                  <span className="stl-tel-icon">☎</span> 1300 037 699
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
