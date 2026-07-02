import React, { useState, useEffect, useRef } from "react";

/**
 * Cementitious Polyurethane (Poly-Cement) Floor Coatings — landing page
 *
 * Same visual system as the Commercial Kitchen Flooring page: white
 * surfaces, steel-grey neutrals, and a single deep-red accent (#A11717)
 * used sparingly. Compact hero, simple sections, image gallery.
 */

const BENEFITS = [
  {
    label: "High impact & abrasion resistance",
    detail: "Built to take dropped equipment and constant foot and wheel traffic.",
  },
  {
    label: "Chemical & thermal resistance",
    detail: "Stands up to acids, alkalis, amines, salts and solvents.",
  },
  {
    label: "Moisture-tolerant",
    detail: "Compatible with newly cured concrete, even in damp conditions.",
  },
  {
    label: "HACCP compliant",
    detail: "Meets hygiene requirements for food processing environments.",
  },
  {
    label: "-25°C to +130°C service range",
    detail: "Performs in freezers, chiller rooms and high-heat wash areas alike.",
  },
];

const WHY_POINTS = [
  "Tested antimicrobial performance",
  "Odourless, non-tainting to food",
  "Electrostatic propensity protection",
  "High impact and abrasion resistance",
  "Excellent chemical resistance",
  "High thermal shock resistance",
  "Moisture-tolerant, compatible with newly cured concrete",
  "Wide service temperature range from -25°C to +130°C",
  "Easy to clean and maintain, steam-cleanable",
  "Complies with HACCP requirements",
  "Fire resistant",
  "Fast return to service, adjustable cure time",
];

const AREAS = [
  {
    name: "Meat Processing Plants",
    icon: (
      <path
        d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"
        strokeLinejoin="round"
      />
    ),
  },
  {
    name: "Dairy, Food & Beverage Facilities",
    icon: <path d="M9 2h6l-1 6h2l-5 14-1-8H8l1-6V2z" strokeLinejoin="round" />,
  },
  {
    name: "Warehouses & Distribution Centres",
    icon: (
      <>
        <path d="M4 4h16v4H4z" strokeLinejoin="round" />
        <path d="M6 8v12M18 8v12M4 20h16" strokeLinecap="round" />
      </>
    ),
  },
  {
    name: "Chemical & Minerals Processing",
    icon: (
      <>
        <path d="M9 2h6v5l4 11a1 1 0 01-1 2H6a1 1 0 01-1-2l4-11V2z" strokeLinejoin="round" />
        <path d="M8 15h8" strokeLinecap="round" />
      </>
    ),
  },
  {
    name: "Mining & Ammonium Nitrate Storage",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M7 12h10" strokeLinecap="round" />
      </>
    ),
  },
  {
    name: "Chiller Rooms",
    icon: <path d="M12 2v20M5 6l14 12M19 6L5 18" strokeLinecap="round" />,
  },
  {
    name: "Food Waste / Treatment Plants",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    name: "Heavy Engineering Workshops",
    icon: (
      <path
        d="M14.7 6.3a4 4 0 01-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 015.4-5.4l-2.6 2.6-2-2 2.6-2.6z"
        strokeLinejoin="round"
      />
    ),
  },
  {
    name: "Commercial Kitchens & Bars",
    icon: (
      <>
        <path d="M4 4h16v4H4z" strokeLinejoin="round" />
        <path d="M6 8v12M18 8v12M4 20h16" strokeLinecap="round" />
      </>
    ),
  },
];

const GALLERY = [
  {
    src: "/src/assets/image9.jpg",
    alt: "Finished poly-cement floor in a meat processing plant",
  },
  {
    src: "/src/assets/image10.jpg",
    alt: "Seamless cementitious polyurethane flooring in a food facility",
  },
  {
    src: "/src/assets/image11.jpg",
    alt: "Slip-resistant heavy-duty floor coating near processing equipment",
  },
  {
    src: "/src/assets/image22.jpg",
    alt: "Industrial poly-cement floor coating finished project",
  },
  {
    src: "/src/assets/image25.jpg",
    alt: "Coated flooring in a chiller room",
  },
  {
    src: "/src/assets/image24.jpg",
    alt: "Hygienic seamless flooring in a food and beverage plant",
  },
  {
    src: "/src/assets/image6.jpg",
    alt: "Durable cementitious resin flooring in a heavy engineering workshop",
  },
  {
    src: "/src/assets/image12.jpg",
    alt: "Industrial coated floor in a warehouse loading area",
  },
];

/* Scroll-triggered reveal wrapper — fades + slides an element in once it
   enters the viewport, with an optional stagger delay. */
function Reveal({ children, delay = 0, y = 28, x = 0, className = "", as: Tag = "div", ...rest }) {
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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`pcf-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{
        transitionDelay: visible ? `${delay}ms` : "0ms",
        "--pcf-y": `${y}px`,
        "--pcf-x": `${x}px`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  if (index === null) return null;
  const img = images[index];

  return (
    <div
      className="pcf-lightbox-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="pcf-lightbox-ctrl absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:rotate-90 sm:right-6 sm:top-6"
        aria-label="Close"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="pcf-lightbox-ctrl absolute left-3 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:-translate-x-1 sm:left-6"
        aria-label="Previous image"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M15 6l-6 6 6 6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="pcf-lightbox-ctrl absolute right-3 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:translate-x-1 sm:right-6"
        aria-label="Next image"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <figure
        className="flex max-h-full max-w-4xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className="pcf-lightbox-img max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
        />
        <figcaption className="pcf-lightbox-caption mt-4 text-center text-sm text-[#cfd6d4]">
          {img.alt}
          <span className="ml-2 text-[#7a8487]">
            ({index + 1}/{images.length})
          </span>
        </figcaption>
      </figure>
    </div>
  );
}

export default function PolyCementFlooring() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i === 0 ? GALLERY.length - 1 : i - 1));
  const nextImage = () =>
    setLightboxIndex((i) => (i === GALLERY.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen bg-white text-[#2E3A3E] font-[Inter,sans-serif]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        /* ---------- keyframes ---------- */
        @keyframes pcfHeroIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pcfKenBurns { from { transform: scale(1.08); } to { transform: scale(1); } }
        @keyframes pcfPulseDot { 0%, 100% { box-shadow: 0 0 0 0 rgba(161,23,23,0.45); } 70% { box-shadow: 0 0 0 7px rgba(161,23,23,0); } }
        @keyframes pcfUnderline { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes pcfFadeScale { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: scale(1); } }
        @keyframes pcfOverlayIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes pcfShimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes pcfBounceArrow { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(4px); } }
        @keyframes pcfGlow { 0%, 100% { box-shadow: 0 0 0 0 rgba(161,23,23,0.35); } 50% { box-shadow: 0 0 0 10px rgba(161,23,23,0); } }

        /* ---------- scroll reveal ---------- */
        .pcf-reveal {
          opacity: 0;
          transform: translate3d(var(--pcf-x, 0), var(--pcf-y, 28px), 0);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1);
          will-change: opacity, transform;
        }
        .pcf-reveal.is-visible { opacity: 1; transform: translate3d(0,0,0); }

        /* ---------- hero ---------- */
        .pcf-hero-bg-img { animation: pcfKenBurns 12s ease-out forwards; }
        .pcf-hero-item { opacity: 0; animation: pcfHeroIn 0.9s cubic-bezier(0.22,1,0.36,1) forwards; }
        .pcf-hero-d1 { animation-delay: .1s; }
        .pcf-hero-d2 { animation-delay: .26s; }
        .pcf-hero-d3 { animation-delay: .42s; }
        .pcf-hero-d4 { animation-delay: .58s; }

        .pcf-cta-glow { animation: pcfGlow 2.6s ease-in-out infinite; transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background-color 0.2s ease; }
        .pcf-cta-glow:hover { animation: none; transform: translateY(-3px); }

        .pcf-scroll-link { transition: color 0.25s ease, gap 0.25s ease; display: inline-flex; align-items: center; gap: 0.35rem; }
        .pcf-scroll-link svg { transition: transform 0.25s ease; }
        .pcf-scroll-link:hover svg { transform: translateX(4px); }

        .pcf-eyebrow-dot { display: inline-block; width: 6px; height: 6px; border-radius: 999px; background: #A11717; animation: pcfPulseDot 2.2s ease-out infinite; margin-right: 6px; }

        .pcf-underline { display: block; height: 2px; width: 40px; background: #A11717; margin-top: 10px; transform-origin: left center; animation: pcfUnderline 0.6s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: .2s; transform: scaleX(0); }

        /* ---------- benefits ---------- */
        .pcf-benefit-rule { transition: width 0.4s cubic-bezier(0.22,1,0.36,1), background-color 0.3s ease; }
        .pcf-benefit:hover .pcf-benefit-rule { width: 2.5rem; background-color: #8a1313; }
        .pcf-benefit:hover h3 { color: #A11717; }
        .pcf-benefit h3 { transition: color 0.3s ease; }
        .pcf-benefit { transition: transform 0.35s cubic-bezier(0.22,1,0.36,1); }
        .pcf-benefit:hover { transform: translateY(-4px); }

        /* ---------- why-us list ---------- */
        .pcf-why-item { transition: transform 0.3s ease, color 0.3s ease; }
        .pcf-why-item:hover { transform: translateX(4px); color: #1C2326; }
        .pcf-why-dot { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background-color 0.3s ease; }
        .pcf-why-item:hover .pcf-why-dot { transform: scale(1.6); }

        /* ---------- areas ---------- */
        .pcf-area-chip { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), color 0.3s ease; }
        .pcf-area-chip:hover { transform: translateY(-3px); color: #ffffff; }
        .pcf-area-chip:hover .pcf-why-dot,
        .pcf-area-chip:hover .pcf-area-dot { transform: scale(1.7); background-color: #ff6b57; }
        .pcf-area-dot { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background-color 0.3s ease; }

        /* ---------- gallery ---------- */
        .pcf-gallery-btn { transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease; }
        .pcf-gallery-btn:hover { transform: translateY(-5px); box-shadow: 0 18px 34px -16px rgba(28,35,38,0.35); }
        .pcf-gallery-overlay {
          position: absolute; inset: 0; display: flex; align-items: flex-end; padding: 12px;
          background: linear-gradient(to top, rgba(28,35,38,0.65), transparent 55%);
          opacity: 0; transition: opacity 0.35s ease;
        }
        .pcf-gallery-btn:hover .pcf-gallery-overlay { opacity: 1; }
        .pcf-gallery-icon {
          width: 30px; height: 30px; border-radius: 999px; background: rgba(255,255,255,0.92);
          display: flex; align-items: center; justify-content: center; color: #1C2326;
          transform: scale(0.7); opacity: 0; transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease;
        }
        .pcf-gallery-btn:hover .pcf-gallery-icon { transform: scale(1); opacity: 1; }

        /* ---------- lightbox ---------- */
        .pcf-lightbox-overlay { animation: pcfOverlayIn 0.25s ease forwards; }
        .pcf-lightbox-img { animation: pcfFadeScale 0.35s cubic-bezier(0.22,1,0.36,1) forwards; }
        .pcf-lightbox-caption { opacity: 0; animation: pcfHeroIn 0.4s ease forwards; animation-delay: 0.1s; }
        .pcf-lightbox-ctrl { transition: background-color 0.2s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1); }

        /* ---------- footer ---------- */
        .pcf-footer-brand { transition: letter-spacing 0.3s ease; }
        .pcf-footer-brand:hover { letter-spacing: 0.02em; }

        @media (prefers-reduced-motion: reduce) {
          .pcf-reveal, .pcf-hero-item, .pcf-hero-bg-img, .pcf-underline, .pcf-cta-glow, .pcf-lightbox-img, .pcf-lightbox-caption {
            animation: none !important; opacity: 1 !important; transform: none !important; transition: none !important;
          }
          * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
        }
      `}</style>

      {/* ===== HERO — compact ===== */}
      <header className="relative flex h-[60vh] min-h-[420px] items-center overflow-hidden bg-[#1C2326] text-white">
        <img
          src="/src/assets/image16.jpg"
          alt="Cementitious polyurethane floor coating in a food processing facility"
          className="pcf-hero-bg-img absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2326] via-[#1C2326]/60 to-[#1C2326]/30" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="pcf-hero-item pcf-hero-d1 text-xs font-medium uppercase tracking-[0.25em] text-[#e2867a]">
            Cementitious Polyurethane Flooring Systems
          </p>
          <h1 className="pcf-hero-item pcf-hero-d2 mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Poly-cement floor coatings for ultra-protection in busy food
            processing facilities, kitchens &amp; workshops
          </h1>
          <p className="pcf-hero-item pcf-hero-d3 mt-5 max-w-xl text-[15px] text-[#cfd6d4] sm:text-base">
            Engineered for extreme conditions — high impact, chemical
            exposure, and thermal shock — while staying compliant with HACCP
            hygiene standards.
          </p>
          <div className="pcf-hero-item pcf-hero-d4 mt-8 flex flex-wrap items-center gap-5">
            <a
              href="/contact"
              className="pcf-cta-glow rounded-full bg-[#A11717] px-7 py-3 text-sm font-semibold text-white hover:bg-[#8a1313] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2326]"
            >
              Request a free site quote
            </a>
            <a
              href="#gallery"
              className="pcf-scroll-link text-sm font-medium text-[#cfd6d4] transition hover:text-white"
            >
              View completed projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* ===== BENEFITS ===== */}
      <section id="benefits" className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717] flex items-center">
            <span className="pcf-eyebrow-dot" />
            What you get
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
            Ultra-protection engineered for the toughest floors
          </h2>
          <span className="pcf-underline" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.label} delay={i * 90} y={22}>
              <div className="pcf-benefit">
                <span className="pcf-benefit-rule block h-px w-10 bg-[#A11717]" />
                <h3 className="mt-4 text-[15px] font-semibold text-[#1C2326]">
                  {b.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b6669]">
                  {b.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== WHY POLY-CEMENT ===== */}
      <section
        id="why-us"
        className="border-y border-[#eceeed] bg-[#FAFBFB] py-14"
      >
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717] flex items-center">
              <span className="pcf-eyebrow-dot" />
              Why it works
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
              Why poly-cement is the best option for freezers &amp; heavy-duty
              food processing areas
            </h2>
            <span className="pcf-underline" />
          </Reveal>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <Reveal x={-20} y={12} className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <p>
                Poly-cement, or polyurethane cement, is designed for floors
                where extreme protection is required, resisting a broad range
                of organic and inorganic acids, alkalis, amines, salts and
                solvents.
              </p>
              <p>
                Where standard epoxy systems fall short under sustained heat,
                chemical exposure and mechanical stress, poly-cement holds up
                — making it the system of choice for the most demanding food
                and industrial environments.
              </p>
            </Reveal>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {WHY_POINTS.map((point, i) => (
                <Reveal key={point} as="li" delay={i * 45} y={14} className="pcf-why-item flex items-start gap-2 text-sm text-[#3f4a4d]">
                  <span
                    className="pcf-why-dot mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#A11717]"
                    aria-hidden="true"
                  />
                  {point}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== AREAS SERVED ===== */}
      <section id="areas" className="bg-[#0E1214] py-12">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717] flex items-center justify-center">
              <span className="pcf-eyebrow-dot" />
              Suitable for
            </p>
            <h2 className="mt-3 text-center text-3xl font-semibold leading-tight text-white">
              Areas of application
            </h2>
            <span className="pcf-underline mx-auto" />
          </Reveal>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {AREAS.map((area, i) => (
              <Reveal key={area.name} as="li" delay={i * 60} y={10} className="pcf-area-chip flex items-center gap-2 text-sm text-[#e7eaec]">
                <span
                  className="pcf-area-dot h-1.5 w-1.5 flex-none rounded-full bg-[#A11717]"
                  aria-hidden="true"
                />
                {area.name}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== GALLERY — 4 columns ===== */}
      <section id="gallery" className="bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717] flex items-center">
              <span className="pcf-eyebrow-dot" />
              Completed work
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]">
              Photos of our completed poly-cement flooring projects
            </h2>
            <span className="pcf-underline" />
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {GALLERY.map((img, i) => (
              <Reveal key={img.src} delay={(i % 4) * 90} y={26}>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="pcf-gallery-btn group relative overflow-hidden rounded-xl bg-[#EDF1F0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A11717] focus-visible:ring-offset-2 w-full"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-56"
                    loading="lazy"
                  />
                  <span className="pcf-gallery-overlay">
                    <span className="pcf-gallery-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="7" />
                        <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                        <path d="M11 8v6M8 11h6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer id="contact" className="border-t border-[#eceeed] py-10">
        <Reveal as="div" className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
          <span className="pcf-footer-brand text-sm font-semibold text-[#1C2326]">
            Sydney <span className="text-[#A11717]">Epoxy</span> Floor
          </span>
          <p className="max-w-md text-sm text-[#5b6669]">
            Get a personalised quote for your food processing, freezer or
            heavy-duty flooring project.
          </p>
          <a
            href="/contact"
            className="pcf-cta-glow rounded-full bg-[#A11717] px-7 py-3 text-sm font-semibold text-white hover:bg-[#8a1313]"
          >
            Contact us
          </a>
        </Reveal>
      </footer>

      <Lightbox
        images={GALLERY}
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </div>
  );
}
