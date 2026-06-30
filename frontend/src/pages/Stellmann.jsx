import { useState } from "react";
import { Link } from "react-router-dom";

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
      </svg>
    ),
    title: "No demolition",
    desc: "Applied directly over your existing tiles — no ripping up, no rebuilding.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: "Virtually invisible",
    desc: "Crystal-clear finish preserves the colour and pattern of stone or ceramic.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Chemical bond",
    desc: "Permanently bonded to the substrate — not just sitting on top.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
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

export default function Stellmann() {
  const [openFaq, setOpenFaq] = useState(null);

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

        @keyframes stlPulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(161,23,23,0.45); } 70% { box-shadow: 0 0 0 8px rgba(161,23,23,0); } }
        @keyframes stlFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes stlDrop { 0% { stroke-dashoffset: 1; } 100% { stroke-dashoffset: 0; } }

        .stl-feature { transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), border-color 0.3s ease, box-shadow 0.4s ease; }
        .stl-feature:hover { transform: translateY(-5px); border-color: var(--resin); box-shadow: 0 20px 36px -16px rgba(22,24,27,0.18); }
        .stl-feature:hover .stl-feature-icon { background: var(--resin); color: var(--paper); }
        .stl-feature-icon { transition: background-color 0.3s ease, color 0.3s ease; }

        .stl-step-num { transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), background-color 0.3s ease; }
        .stl-step:hover .stl-step-num { transform: scale(1.1); background: var(--resin); color: var(--paper); }

        .stl-area-card { transition: transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease; }
        .stl-area-card:hover { transform: translateY(-6px); box-shadow: 0 26px 46px -18px rgba(22,24,27,0.4); }

        .stl-faq-btn { transition: background-color 0.25s ease; }
        .stl-faq-btn:hover h3 { color: var(--resin-deep); }

        .stl-plus { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease; }

        .stl-cta-btn { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease; }
        .stl-cta-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 30px -10px rgba(161,23,23,0.5); }

        .stl-chip { animation: stlFloat 5s ease-in-out infinite; }
        .stl-dot-live { animation: stlPulse 2s ease-out infinite; }

        .stl-tag { transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease; }
        .stl-area-card:hover .stl-tag { border-color: var(--resin-soft); }
      `}</style>

      <div className="stl-root">
        {/* ============ HERO — split diagonal panel, distinct from homepage's full-bleed slider ============ */}
<section className="relative bg-white overflow-hidden">
<div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 pt-16 pb-10 md:pt-24 md:pb-12">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
              <div>
                <p className="stl-mono uppercase tracking-[2px] text-[11px] sm:text-xs text-[var(--resin-soft)] font-semibold mb-4 flex items-center gap-2.5">
                  <span className="inline-block w-6 h-px bg-[var(--resin-soft)]" />
                  Approved Stellmann Applicator
                </p>

                <h1 className="stl-display text-3xl sm:text-4xl md:text-[3.1rem] font-extrabold leading-[1.08] text-black mb-5">
                  Stop slips.
                  <br />
                  <span className="text-[var(--resin)]">Keep your tiles.</span>
                </h1>

                <p className="text-sm md:text-base text-black/65 max-w-md mb-8 leading-relaxed">
                  An invisible, CSIRO-certified non-slip finish bonded
                  directly onto your existing tiles — no demolition, no
                  colour change, just certified grip the moment it gets wet.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-9">
                  <button className="stl-cta-btn bg-[var(--resin)] hover:bg-[var(--resin-deep)] text-[var(--paper)] px-6 py-3 rounded-sm font-semibold stl-mono text-xs uppercase tracking-wide">
                    Get a free safety quote
                  </button>
                  <a
                    href="tel:1300037699"
                    className="border border-[var(--paper)]/25 hover:bg-[var(--paper)] hover:text-[var(--ink)] text-[var(--paper)] px-6 py-3 rounded-sm font-semibold no-underline text-center stl-mono text-xs uppercase tracking-wide transition-colors"
                  >
                    1300 037 699
                  </a>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Virtually invisible", "No demolition", "P3–P5 certified", "UV stable"].map((t) => (
                    <span
                      key={t}
                      className="stl-mono text-[10px] uppercase tracking-wide text-[var(--paper)]/55 border border-[var(--paper)]/15 px-3 py-1.5 rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — a stat-card stack, not an image slider, to keep this hero visually distinct */}
              <div className="relative">
                <div className="bg-[var(--ink-soft)] border border-[var(--paper)]/10 rounded-sm p-7 md:p-8">
                  <p className="stl-mono text-[10px] uppercase tracking-[1.5px] text-[var(--resin-soft)] mb-5">
                    By the numbers
                  </p>
                  <div className="grid grid-cols-2 gap-5">
                    {STATS.map((s) => (
                      <div key={s.label}>
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
                    <span className="text-[13px] text-[var(--paper)]/70">Booking now across Sydney</span>
                  </div>
                </div>

                <div className="stl-chip absolute -bottom-5 -left-5 hidden sm:block bg-[var(--resin)] text-[var(--paper)] rounded-sm px-4 py-3 shadow-xl">
                  <p className="stl-mono text-[9px] uppercase tracking-wide opacity-80">Slip Rating</p>
                  <p className="font-bold text-sm">P3 – P5</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ HOW IT WORKS — feature grid ============ */}
<section className="pt-6 pb-14 md:pt-8 md:pb-20 bg-[var(--paper)]">
            <div className="max-w-6xl mx-auto px-5 md:px-10">
            <div className="max-w-xl mb-10">
              <span className="stl-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[1.5px] text-[var(--resin-deep)] font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--resin)]" />
                How It Works
              </span>
              <h2 className="stl-display text-2xl md:text-3xl font-extrabold text-[var(--ink)] leading-tight mb-3">
                Not acid etching. Not grip tape.
              </h2>
              <p className="text-sm text-[var(--steel)] leading-relaxed max-w-lg">
                A high-clarity polyurethane coating infused with anti-slip
                microspheres bonds chemically to your existing surface —
                same look, certified grip the moment it gets wet.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="stl-feature bg-[var(--concrete)] border border-[var(--ink)]/8 rounded-sm p-6"
                >
                  <div className="stl-feature-icon w-11 h-11 rounded-sm bg-[var(--paper)] text-[var(--resin-deep)] flex items-center justify-center mb-5">
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-sm text-[var(--ink)] mb-2">{f.title}</h3>
                  <p className="text-[13px] text-[var(--steel)] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WHY US — numbered list, ink background ============ */}
        <section className="py-14 md:py-20 bg-[var(--ink)]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-xl mb-10">
              <span className="stl-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[1.5px] text-[var(--resin-soft)] font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--resin-soft)]" />
                The SEF Difference
              </span>
              <h2 className="stl-display text-2xl md:text-3xl font-extrabold text-[var(--paper)] leading-tight">
                Why hire an approved applicator?
              </h2>
              <p className="text-sm text-[var(--paper)]/60 leading-relaxed mt-3 max-w-lg">
                A long-lasting, invisible result depends entirely on how
                it's applied. Here's what separates a professional job
                from a DIY bottle.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
              {STEPS.map((s) => (
                <div key={s.num} className="stl-step flex gap-5">
                  <span className="stl-step-num shrink-0 stl-mono text-xs font-bold text-[var(--resin-soft)] bg-[var(--ink-soft)] border border-[var(--paper)]/10 w-10 h-10 rounded-sm flex items-center justify-center">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-sm text-[var(--paper)] mb-1.5">{s.title}</h3>
                    <p className="text-[13px] text-[var(--paper)]/55 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SERVICE AREAS — three rated panels ============ */}
        <section className="py-14 md:py-20 bg-[var(--concrete)]">
          <div className="max-w-6xl mx-auto px-5 md:px-10">
            <div className="max-w-xl mb-10">
              <span className="stl-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[1.5px] text-[var(--resin-deep)] font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--resin)]" />
                Where We Work
              </span>
              <h2 className="stl-display text-2xl md:text-3xl font-extrabold text-[var(--ink)] leading-tight">
                Every tiled surface, made safe
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {AREAS.map((a) => (
                <div
                  key={a.title}
                  className="stl-area-card bg-[var(--paper)] rounded-sm p-6 flex flex-col gap-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-sm bg-[var(--ink)] text-[var(--resin-soft)] flex items-center justify-center">
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
                    <h3 className="font-bold text-[15px] text-[var(--ink)] mb-2">{a.title}</h3>
                    <p className="text-[13px] text-[var(--steel)] leading-relaxed">{a.desc}</p>
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
              ))}
            </div>
          </div>
        </section>

        {/* ============ FAQ — accordion ============ */}
        <section className="py-14 md:py-20 bg-[var(--paper)]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-10">
              <span className="stl-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[1.5px] text-[var(--resin-deep)] font-semibold mb-3">
                <span className="w-1.5 h-1.5 text-center rounded-full bg-[var(--resin)]" />
                FAQ
              </span>
              
              <h2 className="stl-display text-2xl text-center md:text-3xl font-extrabold text-[var(--ink)] leading-tight">
                Common questions
              </h2>
            </div>

            <div className="divide-y divide-[var(--ink)]/10">
              {FAQS.map((f, i) => (
                <div key={i}>
                  <button
                    className="stl-faq-btn w-full text-left py-5 flex items-center justify-between gap-4"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <h3 className="font-semibold text-[14px] text-[var(--ink)] transition-colors">{f.q}</h3>
                    <span
                      className={`stl-plus shrink-0 w-7 h-7 rounded-sm border flex items-center justify-center ${
                        openFaq === i
                          ? "bg-[var(--resin)] border-[var(--resin)] text-[var(--paper)] rotate-45"
                          : "border-[var(--ink)]/15 text-[var(--steel)]"
                      }`}
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                  {openFaq === i && (
                    <p className="pb-6 text-[13px] text-[var(--steel)] leading-relaxed pr-12">{f.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="py-14 md:py-20 bg-[var(--ink)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="stl-mono text-[11px] font-bold tracking-[1.5px] uppercase text-[var(--resin-soft)] mb-4">
              Sydney Epoxy Floors
            </p>
            <h2 className="stl-display text-2xl md:text-[2.25rem] font-extrabold text-[var(--paper)] mb-4 leading-snug">
              Ready to make your floors safe?
            </h2>
            <p className="text-[var(--paper)]/60 text-[14px] leading-relaxed mb-9 max-w-md mx-auto">
              Don't wait for a slip-and-fall to happen. Get an onsite
              assessment or quick estimate from Sydney's approved
              Stellmann applicators.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/contact"
                className="stl-cta-btn bg-[var(--resin)] hover:bg-[var(--resin-deep)] text-[var(--paper)] px-7 py-3.5 rounded-sm font-semibold stl-mono text-xs uppercase tracking-wide no-underline inline-block"
              >
                Get a free quote
              </Link>
              <a
                href="tel:1300037699"
                className="border border-[var(--paper)]/25 hover:bg-[var(--paper)] hover:text-[var(--ink)] text-[var(--paper)] px-7 py-3.5 rounded-sm font-semibold stl-mono text-xs uppercase tracking-wide transition-colors"
              >
                1300 037 699
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
