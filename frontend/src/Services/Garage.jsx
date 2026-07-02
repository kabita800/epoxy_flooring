import React, { useState, useEffect, useRef } from "react";

/**
 * Garage Epoxy Flooring -- landing page
 *
 * Same design system as the other pages: white surfaces, steel-grey neutral
 * palette, deep-red accent (#A11717). Extra sections for trust badges,
 * 3 systems, 5-step process, and YouTube video placeholders.
 *
 * Fixed: all curly/smart quotes replaced with straight ASCII equivalents.
 */

const TRUST_BADGES = [
  { label: "330+ 4.9 Star Reviews", icon: "⭐" },
  { label: "5-Year Real Warranty", icon: "🛡️" },
  { label: "21 Years of Experience", icon: "🏆" },
  { label: "Australian Made", icon: "🇦🇺" },
];

const BENEFITS = [
  {
    label: "Permanent dust-proofing",
    detail:
      'Eliminates the constant "chalking" and dust created by raw concrete, keeping your cars, laundry, and storage items cleaner.',
  },
  {
    label: "Showroom aesthetics",
    detail:
      "Instantly beautifies the space with a seamless, professional finish. Available in a wide variety of flake and solid colours to match your home's style.",
  },
  {
    label: "Heavy-duty durability",
    detail:
      'Engineered to withstand the toughest conditions. Our floors resist "hot tyre pick-up" (delamination), oil drips, fuel spills, and heavy foot traffic.',
  },
  {
    label: "Effortless maintenance",
    detail:
      "The non-porous surface repels dirt, grime, and liquids. Simply sweep or mop to keep it looking brand new -- no more scrubbing oil stains.",
  },
  {
    label: "Enhanced safety",
    detail:
      "We offer anti-slip texturing options to ensure your family stays safe from falls, even when the floor is wet.",
  },
  {
    label: "Instant property value",
    detail:
      "A finished garage is a highly desirable feature for prospective buyers, offering an immediate return on investment and street appeal.",
  },
  {
    label: "Brighter environment",
    detail:
      "The high-gloss finish reflects light, effectively brightening up the room without the need for expensive extra lighting fixtures.",
  },
  {
    label: "Concrete protection",
    detail:
      "Seals and protects your foundation from moisture, cracks, and aggressive road salts that can degrade raw concrete over time.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Surface Preparation (Diamond Grinding)",
    detail:
      "Success starts here. We prepare the concrete floor by diamond grinding to remove existing coatings, stains, and weak surface layers. This opens the concrete pores, allowing the epoxy to penetrate deep into the subfloor. We also repair any concrete spalling, cracks, or breakage using high-strength two-pack epoxy mortars.",
  },
  {
    title: "Priming the Subfloor",
    detail:
      "We apply one coat of Premium Grade Low Viscosity Epoxy Primer. This thin resin soaks into the open concrete pores to anchor the system, achieving a Dry Film Thickness (DFT) of 150 microns.",
  },
  {
    title: "Base Coat & Flake Broadcast",
    detail:
      'We apply a layer of Premium Grade Coloured Epoxy Resin. While the resin is wet, we broadcast your chosen decorative flakes to "full rejection" -- meaning we cover the floor completely until no wet epoxy is visible.',
  },
  {
    title: "Scrape & Vacuum",
    detail:
      "Once cured, we reclaim the excess flake. We then mechanically scrape the floor to remove sharp edges and vacuum thoroughly. This ensures the texture is aggressive enough for grip, but smooth enough to be comfortable.",
  },
  {
    title: "The Protective Clear Coat (Polyaspartic)",
    detail:
      "Finally, we seal the system with a UV-stable, Ultra High Solids Polyaspartic Clear Coat. Crucially, we apply this using a squeegee (not just a roller) to ensure a thick, durable finish of 350 microns. This locks in the flake and protects against hot tyres and sunlight.",
  },
];

const SYSTEM1_FEATURES = [
  {
    label: "Superior safety (texture)",
    detail:
      "The flake texture provides a natural grip, making it significantly safer to walk on when wet -- perfect for rainy days when you drive a wet car in.",
  },
  {
    label: "UV resistance (won't yellow)",
    detail:
      "Sealed with a UV-stable Polyaspartic topcoat, this floor will never yellow or fade from sunlight exposure when your garage door is open.",
  },
  {
    label: "Hides dirt &amp; imperfections",
    detail:
      "The decorative flake pattern effectively camouflages dust, footprints, and tyre marks, keeping your garage looking cleaner for longer.",
  },
  {
    label: "Maximum durability",
    detail:
      "The combination of epoxy base and polyaspartic topcoat creates a finish that is harder and more scratch-resistant than standard epoxy.",
  },
];

const SYSTEM2_FEATURES = [
  {
    label: "First coat (primer)",
    detail:
      "We apply a Premium Grade Tinted Low-Viscosity Epoxy Primer that penetrates deep into the concrete pores to anchor the system.",
  },
  {
    label: "Second coat (topcoat)",
    detail:
      "We finish with a roller-applied Premium Epoxy Topcoat (available in Grey, Beige, or custom colours) with fine anti-slip media added.",
  },
  {
    label: "Slip rating",
    detail: "Standard R10 / P3 rating -- safe for residential use.",
  },
  {
    label: "Timeline &amp; warranty",
    detail:
      "Installation takes 2 days. Light foot traffic allowed after 24 hours. Backed by a 5-Year Structural Warranty.",
  },
];

const SYSTEM3_FEATURES = [
  {
    label: "Unique visuals",
    detail:
      "No two floors are alike. The metallic pigments flow during application to create deep, pearlescent swirls.",
  },
  {
    label: "High-end sophistication",
    detail:
      'Instantly transforms a dull space into a luxury showroom or "Man Cave."',
  },
  {
    label: "Seamless hygiene",
    detail:
      "Like our other systems, it is completely seamless and easy to clean.",
  },
];

const VIDEOS = [
  {
    src: "https://www.youtube.com/embed/JQVmo7AHKMM",
    title: "Customer Testimonial - Pierre, Premium Seamless Flake Flooring",
    caption: "Customer Testimonial – Pierre, Premium Seamless Flake Flooring",
  },
  {
    src: "https://www.youtube.com/embed/O8dXn6xAjmY",
    title: "Sydney Epoxy Floors - Our Team in Action",
    caption: "Sydney Epoxy Floors – Our Team in Action",
  },
  {
    src: "https://www.youtube.com/embed/-Cb4kkpcCdw",
    title: "Warranty Claim | Customer Testimonial",
    caption: "Warranty Claim | Customer Testimonial",
  },
  {
    src: "https://www.youtube.com/embed/pDzWwnmVMmU",
    title: "Tim attending to a garage floor coating warranty claim",
    caption: "Tim attending to a garage floor coating warranty claim",
  },
  {
    src: "https://www.youtube.com/embed/-Cb4kkpcCdw",
    title: "Warranty Claim | Customer Testimonial",
    caption: "Warranty Claim | Customer Testimonial",
  },
  {
    src: "https://www.youtube.com/embed/WoXL6tQQ2vw",
    title: "Tim attending to a garage floor coating warranty claim",
    caption: "Tim attending to a garage floor coating warranty claim",
  },
];

const GALLERY = [
  {
    src: "/src/assets/image9.jpg",
    alt: "Premium flake epoxy finish in a Sydney residential garage",
  },
  {
    src: "/src/assets/image10.jpg",
    alt: "Seamless solid colour epoxy garage floor",
  },
  {
    src: "/src/assets/image11.jpg",
    alt: "Metallic marble effect epoxy floor in a home garage",
  },
  {
    src: "/src/assets/image22.jpg",
    alt: "Completed garage epoxy floor coating project",
  },
  {
    src: "/src/assets/image25.jpg",
    alt: "Showroom finish residential garage floor coating",
  },
  {
    src: "/src/assets/image24.jpg",
    alt: "Premium flake system installed in a double garage",
  },
  {
    src: "/src/assets/image6.jpg",
    alt: "Durable epoxy coating in a home workshop garage",
  },
  {
    src: "/src/assets/image12.jpg",
    alt: "Anti-slip epoxy garage flooring completed project",
  },
];

/* Scroll-triggered reveal wrapper -- fades + slides an element in once it
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
      className={`gaf-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{
        transitionDelay: visible ? `${delay}ms` : "0ms",
        "--gaf-y": `${y}px`,
        "--gaf-x": `${x}px`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// -- YouTube placeholder -------------------------------------------------------
function VideoPlaceholder({ label }) {
  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-2xl border border-[#eceeed] bg-[#EDF1F0]">
      <div className="gaf-play-pulse flex h-14 w-14 items-center justify-center rounded-full bg-[#A11717]">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <p className="px-4 text-center text-sm font-medium text-[#5b6669]">
        {label}
      </p>
      <p className="text-xs text-[#9aa3a6]">Paste YouTube embed URL here</p>
    </div>
  );
}

// -- Lightbox ------------------------------------------------------------------
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
      className="gaf-lightbox-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="gaf-lightbox-ctrl absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:rotate-90 sm:right-6 sm:top-6"
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
        className="gaf-lightbox-ctrl absolute left-3 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:-translate-x-1 sm:left-6"
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
        className="gaf-lightbox-ctrl absolute right-3 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:translate-x-1 sm:right-6"
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
          className="gaf-lightbox-img max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
        />
        <figcaption className="gaf-lightbox-caption mt-4 text-center text-sm text-[#cfd6d4]">
          {img.alt}
          <span className="ml-2 text-[#7a8487]">
            ({index + 1}/{images.length})
          </span>
        </figcaption>
      </figure>
    </div>
  );
}

// -- Page ----------------------------------------------------------------------
export default function GarageFlooring() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i === 0 ? GALLERY.length - 1 : i - 1));
  const nextImage = () =>
    setLightboxIndex((i) => (i === GALLERY.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen bg-white font-[Inter,sans-serif] text-[#2E3A3E]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        /* ---------- keyframes ---------- */
        @keyframes gafHeroIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes gafKenBurns { from { transform: scale(1.08); } to { transform: scale(1); } }
        @keyframes gafPulseDot { 0%, 100% { box-shadow: 0 0 0 0 rgba(161,23,23,0.45); } 70% { box-shadow: 0 0 0 7px rgba(161,23,23,0); } }
        @keyframes gafUnderline { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes gafFadeScale { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: scale(1); } }
        @keyframes gafOverlayIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes gafGlow { 0%, 100% { box-shadow: 0 0 0 0 rgba(161,23,23,0.35); } 50% { box-shadow: 0 0 0 10px rgba(161,23,23,0); } }
        @keyframes gafPlayPulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(161,23,23,0.5); transform: scale(1); } 50% { box-shadow: 0 0 0 9px rgba(161,23,23,0); transform: scale(1.05); } }
        @keyframes gafBadgePop { from { opacity: 0; transform: translateY(10px) scale(0.9); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes gafLineGrow { from { transform: scaleY(0); } to { transform: scaleY(1); } }

        /* ---------- scroll reveal ---------- */
        .gaf-reveal {
          opacity: 0;
          transform: translate3d(var(--gaf-x, 0), var(--gaf-y, 28px), 0);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1);
          will-change: opacity, transform;
        }
        .gaf-reveal.is-visible { opacity: 1; transform: translate3d(0,0,0); }

        /* ---------- hero ---------- */
        .gaf-hero-bg-img { animation: gafKenBurns 12s ease-out forwards; }
        .gaf-hero-item { opacity: 0; animation: gafHeroIn 0.9s cubic-bezier(0.22,1,0.36,1) forwards; }
        .gaf-hero-d1 { animation-delay: .1s; }
        .gaf-hero-d2 { animation-delay: .26s; }
        .gaf-hero-d3 { animation-delay: .42s; }
        .gaf-hero-d4 { animation-delay: .58s; }

        .gaf-cta-glow { animation: gafGlow 2.6s ease-in-out infinite; transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background-color 0.2s ease; }
        .gaf-cta-glow:hover { animation: none; transform: translateY(-3px); }

        .gaf-scroll-link { transition: color 0.25s ease; display: inline-flex; align-items: center; gap: 0.35rem; }
        .gaf-scroll-link svg { transition: transform 0.25s ease; }
        .gaf-scroll-link:hover svg { transform: translateX(4px); }

        .gaf-eyebrow-dot { display: inline-block; width: 6px; height: 6px; border-radius: 999px; background: #A11717; animation: gafPulseDot 2.2s ease-out infinite; margin-right: 6px; }

        .gaf-underline { display: block; height: 2px; width: 40px; background: #A11717; margin-top: 10px; transform-origin: left center; animation: gafUnderline 0.6s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: .2s; transform: scaleX(0); }

        /* ---------- trust badges ---------- */
        .gaf-badge { opacity: 0; animation: gafBadgePop 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards; transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1); }
        .gaf-badge:hover { transform: translateY(-3px) scale(1.04); }
        .gaf-badge:nth-child(1) { animation-delay: .05s; }
        .gaf-badge:nth-child(2) { animation-delay: .15s; }
        .gaf-badge:nth-child(3) { animation-delay: .25s; }
        .gaf-badge:nth-child(4) { animation-delay: .35s; }
        .gaf-badge-icon { display: inline-block; transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1); }
        .gaf-badge:hover .gaf-badge-icon { transform: scale(1.25) rotate(-8deg); }

        /* ---------- benefits ---------- */
        .gaf-benefit-rule { transition: width 0.4s cubic-bezier(0.22,1,0.36,1), background-color 0.3s ease; }
        .gaf-benefit:hover .gaf-benefit-rule { width: 2.5rem; background-color: #8a1313; }
        .gaf-benefit:hover h3 { color: #A11717; }
        .gaf-benefit h3 { transition: color 0.3s ease; }
        .gaf-benefit { transition: transform 0.35s cubic-bezier(0.22,1,0.36,1); }
        .gaf-benefit:hover { transform: translateY(-4px); }

        /* ---------- why industrial-grade image ---------- */
        .gaf-why-img-wrap { overflow: hidden; }
        .gaf-why-img { transition: transform 0.6s cubic-bezier(0.22,1,0.36,1); }
        .gaf-why-img-wrap:hover .gaf-why-img { transform: scale(1.06); }

        /* ---------- system cards ---------- */
        .gaf-system-card { transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease, border-color 0.3s ease; }
        .gaf-system-card:hover { transform: translateY(-5px); box-shadow: 0 22px 42px -20px rgba(28,35,38,0.22); border-color: #A11717; }
        .gaf-mini-feature { transition: transform 0.3s cubic-bezier(0.22,1,0.36,1); }
        .gaf-mini-feature:hover { transform: translateY(-3px); }
        .gaf-mini-feature:hover .gaf-benefit-rule { width: 2rem; background-color: #8a1313; }
        .gaf-mini-feature:hover h4 { color: #A11717; }
        .gaf-mini-feature h4 { transition: color 0.3s ease; }
        .gaf-warning-box { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .gaf-warning-box:hover { transform: translateY(-2px); box-shadow: 0 10px 22px -12px rgba(180,130,20,0.35); }

        /* ---------- process steps ---------- */
        .gaf-process-wrap { position: relative; }
        .gaf-process-line {
          position: absolute; left: 2.15rem; top: 0; bottom: 0; width: 2px;
          background: linear-gradient(to bottom, #A11717, #eceeed);
          transform-origin: top center; animation: gafLineGrow 1.4s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .gaf-process-step { transition: transform 0.3s ease; }
        .gaf-process-step:hover { transform: translateX(4px); }
        .gaf-process-num {
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), background-color 0.3s ease, color 0.3s ease;
        }
        .gaf-process-step:hover .gaf-process-num { transform: scale(1.15); background-color: #A11717; color: #fff; }
        .gaf-process-step:hover h3 { color: #A11717; }
        .gaf-process-step h3 { transition: color 0.3s ease; }

        /* ---------- videos ---------- */
        .gaf-video-card { transition: transform 0.4s cubic-bezier(0.22,1,0.36,1); }
        .gaf-video-card:hover { transform: translateY(-5px); }
        .gaf-video-card iframe { transition: filter 0.3s ease; }
        .gaf-play-pulse { animation: gafPlayPulse 2.2s ease-in-out infinite; }

        /* ---------- colour chart cta ---------- */
        .gaf-chart-cta { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background-color 0.25s ease, color 0.25s ease; }
        .gaf-chart-cta:hover { transform: translateY(-3px) scale(1.03); }

        /* ---------- gallery ---------- */
        .gaf-gallery-btn { transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease; }
        .gaf-gallery-btn:hover { transform: translateY(-5px); box-shadow: 0 18px 34px -16px rgba(28,35,38,0.35); }
        .gaf-gallery-overlay {
          position: absolute; inset: 0; display: flex; align-items: flex-end; padding: 12px;
          background: linear-gradient(to top, rgba(28,35,38,0.65), transparent 55%);
          opacity: 0; transition: opacity 0.35s ease;
        }
        .gaf-gallery-btn:hover .gaf-gallery-overlay { opacity: 1; }
        .gaf-gallery-icon {
          width: 30px; height: 30px; border-radius: 999px; background: rgba(255,255,255,0.92);
          display: flex; align-items: center; justify-content: center; color: #1C2326;
          transform: scale(0.7); opacity: 0; transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease;
        }
        .gaf-gallery-btn:hover .gaf-gallery-icon { transform: scale(1); opacity: 1; }

        /* ---------- lightbox ---------- */
        .gaf-lightbox-overlay { animation: gafOverlayIn 0.25s ease forwards; }
        .gaf-lightbox-img { animation: gafFadeScale 0.35s cubic-bezier(0.22,1,0.36,1) forwards; }
        .gaf-lightbox-caption { opacity: 0; animation: gafHeroIn 0.4s ease forwards; animation-delay: 0.1s; }
        .gaf-lightbox-ctrl { transition: background-color 0.2s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1); }

        /* ---------- footer ---------- */
        .gaf-footer-brand { transition: letter-spacing 0.3s ease; }
        .gaf-footer-brand:hover { letter-spacing: 0.02em; }

        @media (prefers-reduced-motion: reduce) {
          .gaf-reveal, .gaf-hero-item, .gaf-hero-bg-img, .gaf-underline, .gaf-cta-glow, .gaf-lightbox-img, .gaf-lightbox-caption, .gaf-badge, .gaf-play-pulse, .gaf-process-line {
            animation: none !important; opacity: 1 !important; transform: none !important; transition: none !important;
          }
          * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
        }
      `}</style>

      {/* ===== HERO ===== */}
      <header className="relative flex h-[60vh] min-h-[420px] items-center overflow-hidden bg-[#1C2326] text-white">
        <img
          src="/src/assets/image11.jpg"
          alt="Premium epoxy garage floor coating Sydney"
          className="gaf-hero-bg-img absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2326] via-[#1C2326]/60 to-[#1C2326]/30" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="gaf-hero-item gaf-hero-d1 text-xs font-medium uppercase tracking-[0.25em] text-[#e2867a]">
            Sydney&apos;s Premium Garage Epoxy Flooring Specialists Since 2004
          </p>
          <h1 className="gaf-hero-item gaf-hero-d2 mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Transform your dull concrete into a stunning, dust-free showroom
          </h1>
          <p className="gaf-hero-item gaf-hero-d3 mt-5 max-w-xl text-[15px] text-[#cfd6d4] sm:text-base">
            Trusted by 330+ Sydney locals. Industrial-grade epoxy and
            polyaspartic systems installed by experts -- built to last 15+
            years, not peel in 12 months.
          </p>
          <div className="gaf-hero-item gaf-hero-d4 mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="gaf-cta-glow rounded-full bg-[#A11717] px-7 py-3 text-sm font-semibold text-white hover:bg-[#8a1313] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2326]"
            >
              Get a free quote
            </a>
            <a
              href="#gallery"
              className="gaf-scroll-link text-sm font-medium text-[#cfd6d4] transition hover:text-white"
            >
              View completed projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* ===== TRUST BADGES ===== */}
      <div className="border-b border-[#eceeed] bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-6">
          {TRUST_BADGES.map((b) => (
            <div
              key={b.label}
              className="gaf-badge flex items-center gap-2 text-sm font-medium text-[#1C2326]"
            >
              <span className="gaf-badge-icon text-lg">{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>
      </div>

      {/* ===== BENEFITS ===== */}
      <section id="benefits" className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717] flex items-center">
            <span className="gaf-eyebrow-dot" />
            What you get
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
            Why choose a premium epoxy floor for your home?
          </h2>
          <span className="gaf-underline" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.label} delay={(i % 4) * 90} y={22}>
              <div className="gaf-benefit">
                <span className="gaf-benefit-rule block h-px w-10 bg-[#A11717]" />
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

      {/* ===== WHY INDUSTRIAL-GRADE ===== */}
      <section className="border-y border-[#eceeed] bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717] flex items-center">
              <span className="gaf-eyebrow-dot" />
              Why it works
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
              Why industrial-grade coatings for residential garages?
            </h2>
            <span className="gaf-underline" />
          </Reveal>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <Reveal x={-20} y={12} className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <p>
                Many homeowners make the mistake of using DIY paving paints or
                hardware store epoxy kits. Unfortunately, these products often
                fail within 12 months due to &ldquo;hot tyre pick-up&rdquo; --
                where hot tyres melt the coating and peel it away from the
                concrete.
              </p>
              <p>
                <span className="font-semibold text-[#1C2326]">
                  The solution?
                </span>{" "}
                We use the same industrial-grade epoxy and polyaspartic systems
                found in high-traffic warehouses, adapted for your home.
              </p>
              <p>
                Transforming Sydney floors since 2004, we bring over two decades
                of industrial expertise to your residential project. A correctly
                applied industrial coating is a one-time investment. We believe
                in empowering you to make an educated decision so you get a
                floor that lasts 15+ years -- not one that peels in 12 months.
              </p>
              <p className="text-[#5b6669]">
                Please scroll to the bottom of the page to view images of our
                finished projects in various systems and colour schemes.
              </p>
            </Reveal>

            <Reveal delay={150} x={20} y={12} className="gaf-why-img-wrap overflow-hidden rounded-2xl border border-[#eceeed]">
              <img
                src="/src/assets/image17.jpg"
                alt="Industrial-grade epoxy coating applied in a residential garage"
                className="gaf-why-img h-80 w-full object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== SYSTEMS ===== */}
      <section id="systems" className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717] flex items-center">
            <span className="gaf-eyebrow-dot" />
            Our systems
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
            Our common garage floor coating systems
          </h2>
          <span className="gaf-underline" />
        </Reveal>

        {/* System 1 -- Flake */}
        <Reveal delay={100} y={30}>
          <div className="gaf-system-card mt-10 rounded-2xl border border-[#eceeed] bg-[#FAFBFB] p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="block h-px w-10 flex-none bg-[#A11717]" />
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#A11717]">
                Highly Recommended -- Chosen by 90% of our customers
              </p>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-[#1C2326]">
              1. The Premium Seamless Flake System
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#3f4a4d]">
              The ultimate solution for residential garages. This is not just a
              paint; it is a multi-layered industrial system designed for safety
              and maximum longevity.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {SYSTEM1_FEATURES.map((f, i) => (
                <Reveal key={f.label} delay={i * 70} y={14} className="gaf-mini-feature">
                  <span className="gaf-benefit-rule block h-px w-8 bg-[#A11717]" />
                  <h4
                    className="mt-3 text-[15px] font-semibold text-[#1C2326]"
                    dangerouslySetInnerHTML={{ __html: f.label }}
                  />
                  <p className="mt-1 text-sm leading-relaxed text-[#5b6669]">
                    {f.detail}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* System 2 -- Solid Colour */}
        <Reveal delay={100} y={30}>
          <div className="gaf-system-card mt-6 rounded-2xl border border-[#eceeed] bg-[#FAFBFB] p-8">
            <span className="block h-px w-10 bg-[#A11717]" />
            <h3 className="mt-4 text-xl font-semibold text-[#1C2326]">
              2. The Solid Colour Epoxy System
            </h3>
            <p className="mt-1 text-sm italic text-[#5b6669]">
              The clean, industrial choice for a minimalist finish.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-[#3f4a4d]">
              For homeowners seeking a sleek, uniform look, our Solid Colour
              System provides a high-gloss, seamless finish that transforms dull
              concrete into a bright, professional surface.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {SYSTEM2_FEATURES.map((f, i) => (
                <Reveal key={f.label} delay={i * 70} y={14} className="gaf-mini-feature">
                  <span className="gaf-benefit-rule block h-px w-8 bg-[#A11717]" />
                  <h4
                    className="mt-3 text-[15px] font-semibold text-[#1C2326]"
                    dangerouslySetInnerHTML={{ __html: f.label }}
                  />
                  <p className="mt-1 text-sm leading-relaxed text-[#5b6669]">
                    {f.detail}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={250}>
              <div className="gaf-warning-box mt-6 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-[#5b6669]">
                <span className="font-semibold text-[#1C2326]">
                  &#9888;&#65039; Important design note:{" "}
                </span>
                While solid colour floors look spectacular when freshly cleaned,
                they do not hide dirt as well as our Flake Systems. Dust,
                footprints, and scratches are more visible on a solid glossy
                surface. If you want a floor that camouflages dirt, we recommend
                upgrading to the Premium Seamless Flake System.
              </div>
            </Reveal>
          </div>
        </Reveal>

        {/* System 3 -- Metallic */}
        <Reveal delay={100} y={30}>
          <div className="gaf-system-card mt-6 rounded-2xl border border-[#eceeed] bg-[#FAFBFB] p-8">
            <span className="block h-px w-10 bg-[#A11717]" />
            <h3 className="mt-4 text-xl font-semibold text-[#1C2326]">
              3. Metallic &amp; Marble Effect Epoxy System
            </h3>
            <p className="mt-1 text-sm italic text-[#5b6669]">
              The ultimate &ldquo;Showroom&rdquo; finish for unparalleled style.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-[#3f4a4d]">
              For those looking to turn their floor into a work of art, our
              Metallic System creates a stunning, high-gloss 3D effect that looks
              like flowing resin-based liquid marble. Every floor is hand-crafted
              and completely unique.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
              {SYSTEM3_FEATURES.map((f, i) => (
                <Reveal key={f.label} delay={i * 70} y={14} className="gaf-mini-feature">
                  <span className="gaf-benefit-rule block h-px w-8 bg-[#A11717]" />
                  <h4 className="mt-3 text-[15px] font-semibold text-[#1C2326]">
                    {f.label}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-[#5b6669]">
                    {f.detail}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={250}>
              <div className="gaf-warning-box mt-6 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-[#5b6669]">
                <span className="font-semibold text-[#1C2326]">
                  &#9888;&#65039; Important usage advisory:{" "}
                </span>
                While metallic floors are extremely durable, they are designed
                primarily for aesthetics. The glass-like finish will show scratches
                from small stones or heavy tools more than a textured Flake floor.
                If your garage sees frequent rain or wet cars, we strongly recommend
                our Flake System for better slip resistance.
              </div>
            </Reveal>
          </div>
        </Reveal>
      </section>

      {/* ===== 5-STEP PROCESS ===== */}
      <section className="border-y border-[#eceeed] bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717] flex items-center">
              <span className="gaf-eyebrow-dot" />
              How we work
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-[#1C2326]">
              Our 5-step professional installation process
            </h2>
            <span className="gaf-underline" />
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#3f4a4d]">
              We don&apos;t skip steps. Here is how we guarantee a floor that
              lasts.
            </p>
          </Reveal>

          <div className="gaf-process-wrap mt-10 divide-y divide-[#e4e7e6] border-t border-[#e4e7e6]">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 90} y={18}>
                <div className="gaf-process-step flex gap-6 py-6">
                  <span className="gaf-process-num flex h-8 w-8 flex-none items-center justify-center rounded-full border border-[#A11717]/30 text-sm font-semibold text-[#A11717]">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#1C2326]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5b6669]">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VIDEOS ===== */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717] flex items-center">
            <span className="gaf-eyebrow-dot" />
            See us in action
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]">
            Meet Tim Burmin &amp; watch our team at work
          </h2>
          <span className="gaf-underline" />

          <p className="mt-4 text-[15px] leading-relaxed text-[#3f4a4d]">
            Our residential manager Tim Burmin specialises in garage floor epoxy
            flooring. Watch real customer testimonials and our team in action.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((v, i) => (
            <Reveal key={`${v.src}-${i}`} delay={(i % 3) * 100} y={24}>
              <div className="gaf-video-card">
                <div className="overflow-hidden rounded-xl shadow-lg aspect-video">
                  <iframe
                    className="h-full w-full"
                    src={v.src}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-[#1C2326]">
                  {v.caption}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <p className="text-center text-sm text-[#5b6669]">
            Our SEF Premium Flake System is backed by a 5-year warranty. Watch the
            videos above to see how we handle warranty claims.
          </p>
        </Reveal>
      </section>

      {/* ===== COLOUR CHART / FREE QUOTE ===== */}
      <section className="bg-[#0E1214] py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex justify-center">
            <Reveal className="max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717] flex items-center justify-center">
                <span className="gaf-eyebrow-dot" />
                Colours
              </p>

              <h2 className="mt-3 text-2xl font-semibold leading-tight text-white">
                Epoxy flooring colour chart
              </h2>

              <p className="mt-4 text-[15px] text-[#cfd6d4]">
                Click on the chart below to view and download our full range of
                epoxy colours.
              </p>

              <a
                href="#"
                className="gaf-chart-cta mt-5 inline-block rounded-full border border-[#A11717] px-7 py-3 text-sm font-semibold text-white hover:bg-[#A11717]"
              >
                View colour chart
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section id="gallery" className="bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717] flex items-center justify-center">
              <span className="gaf-eyebrow-dot" />
              Completed work
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]">
              Photos of our completed garage epoxy flooring projects
            </h2>
            <span className="gaf-underline mx-auto" />
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {GALLERY.map((img, i) => (
              <Reveal key={img.src} delay={(i % 4) * 90} y={26}>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="gaf-gallery-btn group relative overflow-hidden rounded-xl bg-[#EDF1F0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A11717] focus-visible:ring-offset-2 w-full"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-56"
                    loading="lazy"
                  />
                  <span className="gaf-gallery-overlay">
                    <span className="gaf-gallery-icon">
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
          <span className="gaf-footer-brand text-sm font-semibold text-[#1C2326]">
            Sydney <span className="text-[#A11717]">Epoxy</span> Floor
          </span>
          <p className="max-w-md text-sm text-[#5b6669]">
            Get a personalised quote for your garage epoxy floor coating
            project.
          </p>
          <a
            href="#contact-form"
            className="gaf-cta-glow rounded-full bg-[#A11717] px-7 py-3 text-sm font-semibold text-white hover:bg-[#8a1313]"
          >
            Contact us today!
          </a>
          <p className="mt-6 text-xs text-[#9aa3a6]"></p>
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
