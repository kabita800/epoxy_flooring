import React, { useState, useEffect, useRef } from "react";

/**
 * Warehouse Epoxy Flooring Systems — landing page (ANIMATED)
 *
 * Same design system as the Commercial Kitchen / Industrial pages: white
 * surfaces, a quiet steel-grey neutral palette, and a single deep-red
 * accent (#A11717) used sparingly. Motion layered throughout: a staggered
 * hero entrance with ambient zoom, scroll-triggered reveals on every
 * section, animated numbered "why" cards, animated system-comparison
 * cards, a progressively drawing process timeline, a pulsing colour-chart
 * CTA, hover micro-interactions, and a smooth lightbox transition.
 * Respects prefers-reduced-motion.
 */

const BENEFITS = [
  {
    label: "Seals & protects concrete",
    detail: "Stops concrete dusting and protects the slab beneath.",
  },
  {
    label: "Professional finish",
    detail: "Aesthetically pleasing, seamless and easy on the eye.",
  },
  {
    label: "Built for heavy loads",
    detail: "Exceptionally strong, withstands forklifts and large machinery.",
  },
  {
    label: "Brighter & safer",
    detail: "Lifts surface light reflection and improves workplace safety.",
  },
  {
    label: "Chemical resistant",
    detail: "Resists chemical spills, fuels and oils.",
  },
];

const WHY_ITEMS = [
  {
    label: "Dustproofing",
    detail:
      "Epoxy flooring seals the concrete surface, eliminating concrete dusting and creating a clean, easy-to-maintain warehouse floor.",
  },
  {
    label: "Aesthetically professional finish",
    detail:
      "A smooth, seamless epoxy finish improves the appearance of warehouse floors while creating a brighter, more organised working environment.",
  },
  {
    label: "Built for heavy traffic & forklifts",
    detail:
      "High-performance epoxy systems provide long-term protection against wear and abrasion, extending the life of warehouse concrete floors.",
  },
  {
    label: "Slip and chemical-resistant",
    detail:
      "Anti-slip additives and chemical-resistant coatings reduce slip hazards while protecting floors from oils, fuels and chemical spills.",
  },
  {
    label: "Customisable for warehouse operations",
    detail:
      "Epoxy floors can be customised with safety line marking, walkways, colour zoning and exclusion zones to suit operational and compliance requirements.",
  },
  {
    label: "Durability and longevity",
    detail:
      "Industrial epoxy floors are built to withstand constant forklift movement, heavy loads and impact without cracking or surface breakdown.",
  },
  {
    label: "Long-term cost efficiency",
    detail:
      "Epoxy flooring lasts significantly longer than standard concrete sealers, reducing maintenance, repairs and downtime over time.",
  },
  {
    label: "Seamless & hygienic surface",
    detail:
      "With no grout lines or joints, epoxy flooring improves hygiene standards and makes cleaning faster and more effective.",
  },
  {
    label: "Improved light reflection & visibility",
    detail:
      "Light-coloured epoxy coatings reflect light, increasing visibility and improving overall workplace safety.",
  },
];

const SYSTEMS = [
  {
    name: "Two-Coat Epoxy Flooring System",
    summary:
      "A cost-effective epoxy flooring system designed to seal concrete, eliminate dusting and improve durability in warehouses with light to moderate traffic.",
    best: "Light to medium-duty warehouses and storage areas",
    points: [
      "Typically 300–350 microns dry film thickness",
      "Seals concrete and prevents dusting",
      "Improves appearance and cleanliness",
      "Suitable for pallet jacks and light forklift use",
    ],
  },
  {
    name: "Three-Coat Epoxy Flooring System",
    summary:
      "A more robust epoxy flooring system that provides increased thickness, strength and wear resistance for warehouses with regular forklift traffic.",
    best: "Medium to high-traffic warehouses and distribution centres",
    points: [
      "Approx. 1 mm total dry film thickness",
      "Increased impact and abrasion resistance",
      "Improved durability compared to two-coat systems",
    ],
  },
  {
    name: "High-Build / Heavy-Duty Epoxy Flooring System",
    summary:
      "A high-performance epoxy flooring system engineered for demanding warehouse and industrial environments with heavy machinery, constant traffic and high wear conditions.",
    best: "Heavy-duty warehouses, manufacturing facilities and industrial environments",
    points: [
      "3–5 mm total system thickness",
      "Designed to withstand heavy forklifts, machinery and impact",
    ],
  },
];

const PROCESS_STEPS = [
  {
    title: "Surface Preparation",
    detail:
      "Concrete surfaces are diamond ground or shot blasted to remove contaminants, open the surface and create the correct profile for epoxy adhesion.",
  },
  {
    title: "Crack Repairs & Surface Levelling",
    detail:
      "Cracks, joints and surface imperfections are repaired using epoxy fillers and mortars to create a smooth, uniform base.",
  },
  {
    title: "Epoxy Priming",
    detail:
      "Specialised epoxy primers are applied to penetrate the concrete and ensure strong bonding between the slab and the epoxy system.",
  },
  {
    title: "Epoxy System Application",
    detail:
      "The selected epoxy flooring system is applied in multiple coats to achieve the specified thickness and performance level for the warehouse environment.",
  },
  {
    title: "Anti-Slip & Safety Finishes (If Required)",
    detail:
      "Slip-resistant additives, safety line marking and colour zoning are installed where required to improve safety and operational efficiency.",
  },
];

const SERVICE_AREAS = [
  "Sydney Metro",
  "Western Sydney",
  "Inner West",
  "South West Sydney",
  "Central Coast",
  "Surrounding NSW Regions",
];

const INSTALLED_IN = [
  "Warehouses and Logistics Centres",
  "Manufacturing and Production Facilities",
  "Cold Storage and Food Processing Areas",
  "Workshops and Bulk Storage Facilities",
];

const GALLERY = [
  { src: "/src/assets/image9.jpg", alt: "Finished epoxy floor in a warehouse" },
  {
    src: "/src/assets/image10.jpg",
    alt: "Seamless coated flooring in a distribution centre",
  },
  {
    src: "/src/assets/image11.jpg",
    alt: "Forklift-rated floor coating in a logistics centre",
  },
  {
    src: "/src/assets/image22.jpg",
    alt: "Warehouse epoxy floor coating finished project",
  },
  {
    src: "/src/assets/image25.jpg",
    alt: "Coated flooring in a manufacturing facility",
  },
  {
    src: "/src/assets/image24.jpg",
    alt: "Heavy-duty epoxy flooring in a bulk storage facility",
  },
  {
    src: "/src/assets/image6.jpg",
    alt: "Durable resin flooring in a production facility",
  },
  {
    src: "/src/assets/image12.jpg",
    alt: "Industrial coated floor in a warehouse loading bay",
  },
];

/* ---------------------------------------------------------------------- */
/*  Scroll-reveal hook — adds "is-visible" once an element enters view    */
/* ---------------------------------------------------------------------- */

function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px", ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return [ref, visible];
}

function Reveal({ as: Tag = "div", className = "", delay = 0, children, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ---------------------------------------------------------------------- */
/*  Animated count-up number                                              */
/* ---------------------------------------------------------------------- */

function CountUp({ to, suffix = "", duration = 1400 }) {
  const [ref, visible] = useReveal();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = null;
    let raf;
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible, to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

/* ---------------------------------------------------------------------- */
/*  Animated process step — line grows into view, number pops in         */
/* ---------------------------------------------------------------------- */

function ProcessStep({ step, index, isLast }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className="process-step relative flex gap-6 py-6">
      {!isLast && (
        <span
          className={`process-connector absolute left-[9px] top-12 w-px bg-[#e4e7e6] ${
            visible ? "is-visible" : ""
          }`}
        />
      )}
      <span
        className={`step-dot relative z-10 mt-0.5 flex h-[19px] w-[19px] flex-none items-center justify-center rounded-full border-2 border-[#A11717] bg-white transition-transform duration-500 ${
          visible ? "scale-100" : "scale-0"
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#A11717]" />
      </span>
      <div
        className={`transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <span className="text-sm font-semibold text-[#A11717]">
          Step {index + 1}
        </span>
        <h3 className="mt-1 text-[15px] font-semibold text-[#1C2326]">
          {step.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#5b6669]">
          {step.detail}
        </p>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/*  Lightbox                                                               */
/* ---------------------------------------------------------------------- */

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
      className="lightbox-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:rotate-90 sm:right-6 sm:top-6"
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
        className="absolute left-3 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:-translate-x-1 sm:left-6"
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
        className="absolute right-3 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:translate-x-1 sm:right-6"
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
        key={index}
        className="lightbox-figure flex max-h-full max-w-4xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
        />
        <figcaption className="mt-4 text-center text-sm text-[#cfd6d4]">
          {img.alt}
          <span className="ml-2 text-[#7a8487]">
            ({index + 1}/{images.length})
          </span>
        </figcaption>
      </figure>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/*  Page                                                                   */
/* ---------------------------------------------------------------------- */

export default function WarehouseFlooring() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i === 0 ? GALLERY.length - 1 : i - 1));
  const nextImage = () =>
    setLightboxIndex((i) => (i === GALLERY.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen bg-white text-[#2E3A3E] font-[Inter,sans-serif]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        /* ---------- base reveal-on-scroll ---------- */
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ---------- hero ---------- */
        @keyframes heroImgIn {
          from { opacity: 0; transform: scale(1.12); }
          to { opacity: 0.45; transform: scale(1); }
        }
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        .hero-img {
          animation: heroImgIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards,
            kenburns 18s ease-in-out 1.4s infinite alternate;
        }
        @keyframes fadeUpHero {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-in .hero-eyebrow { animation: fadeUpHero 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s both; }
        .hero-in .hero-title { animation: fadeUpHero 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s both; }
        .hero-in .hero-copy { animation: fadeUpHero 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both; }
        .hero-in .hero-cta { animation: fadeUpHero 0.8s cubic-bezier(0.16,1,0.3,1) 0.65s both; }

        @keyframes pulseRing {
          0% { box-shadow: 0 0 0 0 rgba(161,23,23,0.45); }
          70% { box-shadow: 0 0 0 12px rgba(161,23,23,0); }
          100% { box-shadow: 0 0 0 0 rgba(161,23,23,0); }
        }
        .cta-pulse {
          animation: pulseRing 2.6s ease-out infinite;
        }

        @keyframes arrowNudge {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(6px); }
        }
        .arrow-nudge:hover .nudge-arrow {
          animation: arrowNudge 0.9s ease-in-out infinite;
        }

        @keyframes floatY {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-18px) translateX(6px); }
        }
        .float-particle {
          animation: floatY 6s ease-in-out infinite;
        }

        /* ---------- benefit divider line draw ---------- */
        .divider-line {
          transform-origin: left;
          transform: scaleX(0);
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .is-visible .divider-line {
          transform: scaleX(1);
        }
        .benefit-card {
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .benefit-card:hover {
          transform: translateY(-6px);
        }
        .benefit-card:hover .divider-line {
          transform: scaleX(1.3);
          background-color: #8a1313;
        }

        /* ---------- simple bullet lists stagger ---------- */
        .app-item {
          opacity: 0;
          transform: translateX(-10px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .is-visible .app-item {
          opacity: 1;
          transform: translateX(0);
        }
        .app-dot {
          transition: transform 0.3s ease;
        }
        .app-item:hover .app-dot {
          transform: scale(1.6);
        }
        @keyframes dotPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(161,23,23,0.5); }
          50% { box-shadow: 0 0 0 5px rgba(161,23,23,0); }
        }
        .is-visible .app-dot {
          animation: dotPulse 2.4s ease-out infinite;
        }

        /* ---------- why-choose numbered cards ---------- */
        .why-card {
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1),
            box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .why-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px -16px rgba(28,35,38,0.2);
        }
        .why-badge {
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1),
            background-color 0.3s ease;
        }
        .why-card:hover .why-badge {
          transform: scale(1.12) rotate(-6deg);
          background-color: rgba(161,23,23,0.18);
        }

        /* ---------- system cards ---------- */
        .system-card {
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1),
            box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .system-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px -14px rgba(28,35,38,0.2);
          border-color: #A11717;
        }
        .system-card:hover .divider-line {
          transform: scaleX(1.3);
          background-color: #8a1313;
        }
        .system-point {
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .is-visible .system-point {
          opacity: 1;
          transform: translateX(0);
        }

        /* ---------- process timeline ---------- */
        .process-connector {
          height: 0;
          transition: height 0.6s cubic-bezier(0.16,1,0.3,1) 0.15s;
        }
        .process-connector.is-visible {
          height: calc(100% + 1.5rem);
        }

        /* ---------- colour chart CTA ---------- */
        .chart-cta {
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1),
            box-shadow 0.3s ease, background-color 0.3s ease;
        }
        .chart-cta:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 14px 28px -10px rgba(161,23,23,0.5);
        }
        @keyframes chipShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .chart-bg {
          background: linear-gradient(120deg, #0E1214, #1C2326, #0E1214);
          background-size: 200% 200%;
          animation: chipShift 10s ease infinite;
        }

        /* ---------- gallery ---------- */
        .gallery-tile {
          opacity: 0;
          transform: translateY(24px) scale(0.96);
          transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1),
            transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .is-visible .gallery-tile {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .gallery-caption {
          transform: translateY(100%);
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .group:hover .gallery-caption {
          transform: translateY(0);
        }
        .group:hover img {
          filter: brightness(0.85);
        }

        /* ---------- lightbox transitions ---------- */
        @keyframes backdropIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .lightbox-backdrop {
          animation: backdropIn 0.25s ease forwards;
        }
        @keyframes figureIn {
          from { opacity: 0; transform: scale(0.94); }
          to { opacity: 1; transform: scale(1); }
        }
        .lightbox-figure {
          animation: figureIn 0.3s cubic-bezier(0.16,1,0.3,1) forwards;
        }

        /* ---------- footer cta ---------- */
        .footer-cta {
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease;
        }
        .footer-cta:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 12px 24px -8px rgba(161,23,23,0.45);
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
          .reveal, .process-step > div, .step-dot { opacity: 1 !important; transform: none !important; }
          .process-connector { height: calc(100% + 1.5rem) !important; }
        }
      `}</style>

      {/* ===== HERO — compact ===== */}
      <header
        className={`relative flex h-[60vh] min-h-[420px] items-center overflow-hidden bg-[#1C2326] text-white ${
          heroLoaded ? "hero-in" : ""
        }`}
      >
        <img
          src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=80"
          alt="Warehouse with seamless epoxy floor coating"
          className="hero-img absolute inset-0 h-full w-full object-cover opacity-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2326] via-[#1C2326]/60 to-[#1C2326]/30" />

        <span className="float-particle absolute left-[8%] top-[22%] h-2 w-2 rounded-full bg-[#e2867a]/70" style={{ animationDelay: "0s" }} aria-hidden="true" />
        <span className="float-particle absolute left-[22%] top-[65%] h-1.5 w-1.5 rounded-full bg-white/50" style={{ animationDelay: "1.2s" }} aria-hidden="true" />
        <span className="float-particle absolute right-[14%] top-[30%] h-2 w-2 rounded-full bg-[#A11717]/60" style={{ animationDelay: "2.1s" }} aria-hidden="true" />
        <span className="float-particle absolute right-[26%] top-[70%] h-1 w-1 rounded-full bg-white/60" style={{ animationDelay: "0.6s" }} aria-hidden="true" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="hero-eyebrow text-xs font-medium uppercase tracking-[0.25em] text-[#e2867a] opacity-0">
            Warehouse Flooring Systems
          </p>
          <h1 className="hero-title mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight opacity-0 sm:text-4xl lg:text-5xl">
            Warehouse epoxy flooring systems Sydney
          </h1>
          <p className="hero-copy mt-5 max-w-xl text-[15px] text-[#cfd6d4] opacity-0 sm:text-base">
            Durable, seamless and high-performance epoxy flooring systems
            designed specifically for warehouses, factories and industrial
            facilities across Sydney and NSW.
          </p>
          <div className="hero-cta mt-8 flex flex-wrap items-center gap-5 opacity-0">
            <a
              href="/contact"
              className="cta-pulse rounded-full bg-[#A11717] px-7 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-105 hover:bg-[#8a1313] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2326]"
            >
              Request a free site quote
            </a>
            <a
              href="#gallery"
              className="arrow-nudge group inline-flex items-center gap-1 text-sm font-medium text-[#cfd6d4] transition hover:text-white"
            >
              View completed projects
              <span className="nudge-arrow inline-block">→</span>
            </a>
          </div>
        </div>
      </header>

      {/* ===== BENEFITS ===== */}
      <section id="benefits" className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            What you get
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
            Benefits
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.label} delay={i * 90} className="benefit-card">
              <span className="divider-line block h-px w-10 bg-[#A11717]" />
              <h3 className="mt-4 text-[15px] font-semibold text-[#1C2326]">
                {b.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5b6669]">
                {b.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== INTRO / SERVICE AREAS ===== */}
      <section className="border-y border-[#eceeed] bg-[#F7F4EE] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
              Overview
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
              Industrial epoxy flooring for warehouses & distribution centres
            </h2>
          </Reveal>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <Reveal delay={100} className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <p>
                Warehouse epoxy flooring provides a tough, non-porous surface
                that protects concrete from heavy traffic, forklifts, pallet
                jacks, chemical spills and daily wear.
              </p>
              <p className="font-medium text-[#1C2326]">
                Our systems are commonly installed in:
              </p>
              <ul className="space-y-2">
                {INSTALLED_IN.map((item, i) => (
                  <li
                    key={item}
                    className="app-item flex items-center gap-2"
                    style={{ transitionDelay: `${i * 70}ms` }}
                  >
                    <span
                      className="app-dot h-1.5 w-1.5 flex-none rounded-full bg-[#A11717]"
                      style={{ animationDelay: `${i * 220}ms` }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200} className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <p className="font-medium text-[#1C2326]">We service:</p>
              <ul className="grid grid-cols-2 gap-2">
                {SERVICE_AREAS.map((area, i) => (
                  <li
                    key={area}
                    className="app-item flex items-center gap-2"
                    style={{ transitionDelay: `${i * 70}ms` }}
                  >
                    <span
                      className="app-dot h-1.5 w-1.5 flex-none rounded-full bg-[#A11717]"
                      style={{ animationDelay: `${i * 220}ms` }}
                      aria-hidden="true"
                    />
                    {area}
                  </li>
                ))}
              </ul>
              <p className="text-[#5b6669]">
                Please scroll to the bottom of the page to view images of our
                finished projects in various systems and colour schemes.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== WHY IDEAL ===== */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
              Why Choose Epoxy
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]">
              Why epoxy flooring is ideal for warehouse environments
            </h2>

            <p className="mt-4 text-[15px] leading-relaxed text-[#5B6669]">
              Built for demanding industrial spaces, epoxy flooring provides
              long-lasting performance, improved safety, and a clean
              professional finish with minimal maintenance.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WHY_ITEMS.map((item, index) => (
              <Reveal
                key={item.label}
                delay={(index % 3) * 90}
                className="why-card rounded-xl border border-[#ECEEED] bg-white p-6 hover:border-[#A11717]/30"
              >
                <div className="why-badge mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#A11717]/10 text-sm font-semibold text-[#A11717]">
                  {(index + 1).toString().padStart(2, "0")}
                </div>

                <h3 className="text-lg font-semibold text-[#1C2326]">
                  {item.label}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#5B6669]">
                  {item.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SYSTEMS ===== */}
      <section className="border-y border-[#eceeed] bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
              Our systems
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
              Warehouse epoxy flooring systems we install
            </h2>
            <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-[#3f4a4d]">
              We install a range of industrial epoxy flooring systems to suit
              different warehouse environments, traffic levels and operational
              requirements. Each system is selected based on site conditions,
              forklift traffic and expected wear.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {SYSTEMS.map((sys, si) => (
              <Reveal
                key={sys.name}
                delay={si * 130}
                className="system-card flex flex-col rounded-2xl border border-[#eceeed] bg-white p-6"
              >
                <span className="divider-line block h-px w-10 bg-[#A11717]" />
                <h3 className="mt-4 text-lg font-semibold leading-snug text-[#1C2326]">
                  {sys.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5b6669]">
                  {sys.summary}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#A11717]">
                  Best for
                </p>
                <p className="mt-1 text-sm text-[#3f4a4d]">{sys.best}</p>
                <ul className="mt-4 space-y-2 text-sm text-[#3f4a4d]">
                  {sys.points.map((p, pi) => (
                    <li
                      key={p}
                      className="system-point flex items-start gap-2"
                      style={{ transitionDelay: `${pi * 90}ms` }}
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#A11717]"
                        aria-hidden="true"
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            How we work
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-[#1C2326]">
            Our warehouse epoxy flooring application process
          </h2>
          <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-[#3f4a4d]">
            Every warehouse epoxy flooring system is installed using a proven
            preparation and application process to ensure maximum adhesion,
            durability and long-term performance. The exact system thickness and
            number of coats will vary depending on site conditions and operational
            requirements.
          </p>
        </Reveal>

        <div className="mt-10 divide-y divide-[#e4e7e6] border-t border-[#e4e7e6]">
          {PROCESS_STEPS.map((step, i) => (
            <ProcessStep
              key={step.title}
              step={step}
              index={i}
              isLast={i === PROCESS_STEPS.length - 1}
            />
          ))}
        </div>
      </section>

      {/* ===== COLOUR CHART ===== */}
      <section className="chart-bg py-12">
        <Reveal as="div" className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Colours
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white">
            Epoxy flooring colour chart
          </h2>
          <p className="mt-4 text-[15px] text-[#cfd6d4]">
            Click on the chart below to view and download our full range of
            epoxy colours!
          </p>
          <a
            href="/src/assets/color coding.pdf"
            className="chart-cta mt-6 inline-block rounded-full border border-[#A11717] px-7 py-3 text-sm font-semibold text-white hover:bg-[#A11717]"
          >
            View colour chart
          </a>
        </Reveal>
      </section>

      {/* ===== GALLERY — 4 columns ===== */}
      <section id="gallery" className="bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
              Completed work
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]">
              Photos of our completed warehouse epoxy flooring projects
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {GALLERY.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="gallery-tile group relative overflow-hidden rounded-xl bg-[#EDF1F0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A11717] focus-visible:ring-offset-2"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-56"
                  loading="lazy"
                />
                <span className="gallery-caption absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-left text-xs text-white">
                  {img.alt}
                </span>
              </button>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer id="contact" className="border-t border-[#eceeed] py-10">
        <Reveal as="div" className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
          <span className="text-sm font-semibold text-[#1C2326]">
            Sydney <span className="text-[#A11717]">Epoxy</span> Floor
          </span>
          <p className="max-w-md text-sm text-[#5b6669]">
            Get a personalised quote for your warehouse epoxy flooring project.
          </p>
          <a
            href="/contact"
            className="footer-cta rounded-full bg-[#A11717] px-7 py-3 text-sm font-semibold text-white"
          >
            Contact us today!
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
