import React, { useState, useEffect, useRef, useCallback } from "react";
import { ZoomIn, Play } from "lucide-react";
import before1 from "/src/assets/before1.jpg";
import after1 from "/src/assets/after1.jpg";

import before2 from "/src/assets/before3.jpg";
import after2 from "/src/assets/after3.jpg";

import before3 from "/src/assets/before7.jpg";
import after3 from "/src/assets/after7.jpg";

/**
 * Epoxy Flooring Over Tiles — landing page (animated)
 *
 * Same visual system as the other SEF pages: white surfaces, steel-grey
 * neutrals, and a single deep-red accent (#A11717) used sparingly. This
 * pass layers in a page-load sequence, scroll-triggered reveals, staggered
 * grids, an animated system-card accordion with staggered step reveal, an
 * inviting idle-pulse on the before/after handle, hover micro-interactions
 * and lightbox transitions — all respecting prefers-reduced-motion.
 */

const BENEFITS = [
  {
    label: "Tile renewal",
    detail: "Refreshes worn tiles, covering imperfections, cracks and signs of wear.",
  },
  {
    label: "Variety of systems",
    detail: "Solid colour, flake, or metallic and marble — all applied over existing tiles.",
  },
  {
    label: "Hygienic & safe",
    detail: "Doesn't harbour bacteria, meeting Australian Health and Safety Standards.",
  },
  {
    label: "Commercial-grade durability",
    detail: "Withstands heavy foot traffic, spills and constant kitchen activity.",
  },
  {
    label: "No disruption to floor height",
    detail: ">5mm dry film thickness, so doors and cabinets don't need removing.",
  },
];

const APPLICATIONS = [
  "Commercial Kitchens",
  "Residential Garage Floors",
  "Mechanical Workshops",
  "Shopping Centres",
  "Restaurant Floors",
  "Lift Lobbies",
  "Balconies",
  "Bars & Cafes",
];

const SYSTEMS = [
  {
    title: "Solid or Single-Colour System",
    tagline: "Seamless, clean and cost-effective.",
    description:
      "A seamless, smooth surface that enhances the visual appeal of tiled floors with a clean, modern look. Cost-effective and easy to maintain. The roller-applied finish with fine anti-slip media achieves an R10 or P3 slip rating, and can be made more anti-slip on request. A polyurethane topcoat is also available as an alternative for UV resistance and extra protection. This finish marks and scratches more easily than the flake system — the flake option below is also available in a single colour if you want more resistance.",
    cure: "Light foot traffic next day, heavy traffic after 5 days.",
    steps: [
      "Preparation — scan the floor, remove drummy tiles, and diamond grind to de-gloss and create mechanical bonding.",
      "Patching — patch removed tile areas using SEF Epoxy Mortar.",
      "Priming — apply 1 coat of SEF100EP Tile-Lock Primer at 2mm.",
      "2nd stage grinding — grind over the cured primer to remove high points and fill low points with SEF-EP Filler.",
      "1st top coat — one coat of Premium Grade Epoxy Top Coat with fine anti-slip media at 150 microns DFT.",
      "Final coat — a second coat of Premium Grade Epoxy Top Coat with fine anti-slip media at 150 microns DFT.",
    ],
  },
  {
    title: "Premium Seamless Flake System",
    tagline: "Extremely durable, decorative, and easy to maintain.",
    description:
      "The SEF Premium Full Flake Epoxy and Polyaspartic Coating System beautifies your floor while delivering years of trouble-free service. Eco-friendly and available in 20+ custom flake patterns, imperfections and scratches are barely visible and wear takes significantly longer to show. The flooring is naturally slip resistant without sacrificing ease of cleaning.",
    cure: "Light foot traffic next day, heavy traffic after 5 days.",
    note: "Visit our Rydalmere or Silverwater showrooms to see the available finishes in person.",
    steps: [
      "Preparation — scan the floor, remove drummy tiles, and diamond grind to de-gloss and create mechanical bonding.",
      "Patching — patch removed tile areas using SEF Epoxy Mortar.",
      "Priming — apply 1 coat of SEF100EP Tile-Lock Primer at 2mm.",
      "2nd stage grinding — grind over the cured primer to remove high points and fill low points with SEF-EP Filler.",
      "Base coat & flake — apply Premium Grade Coloured Epoxy Resin and broadcast full flake to cover completely.",
      "Cleaning excess flake — vacuum up loose, uncollected flake.",
      "Protective clear coat — one full coat of ultra high solids polyaspartic clear coat, squeegee-applied at 350 microns DFT.",
    ],
  },
  {
    title: "Metallic & Marble Effect System",
    tagline: "Shine and sophistication in a durable finish.",
    description:
      "Metallic and marble epoxy transforms mundane tiled surfaces into dazzling works of art, with endless design possibilities to suit any interior. The metallic tint reinforces the floor's strength and durability, while one simple clean brings back a shiny, like-new surface.",
    cure: "Light foot traffic next day, heavy traffic after 5 days.",
    note: "Our metallic system is on display at 6 Giffard Street, Silverwater NSW 2128 — come see how it performs in person.",
    steps: [
      "Preparation — scan the floor, remove drummy tiles, and diamond grind to de-gloss and create mechanical bonding.",
      "Patching — patch removed tile areas using SEF Epoxy Mortar.",
      "Priming — apply 1 coat of SEF100EP Tile-Lock Primer at 2mm.",
      "2nd stage grinding — grind over the cured primer, fill low points with SEF-EP Filler, then vacuum and mop.",
      "Coloured base coat — apply Premium Grade Coloured Epoxy Resin at 150 microns; ensure a uniform look before proceeding.",
      "Decorative metallic or marble effect — apply the decorative layer at 500 microns and allow to cure.",
      "Protective clear coat — one full coat of ultra high solids polyaspartic clear coat, roller-applied at 150 microns DFT.",
    ],
  },
];

const VIDEOS = [
  {
    title: "Epoxy Flooring Applied Over Old Tiles in a Commercial Kitchen",
    embedUrl: "https://www.youtube.com/embed/G-MbLHCdoLA",
  },
  {
    title: "Metallic Epoxy Flooring Applied Over Old Tiles",
    embedUrl: "https://www.youtube.com/embed/H9cotao1r7E",
  },
];
const GALLERY = [
  {
    src: "/src/assets/image3.jpg",
    alt: "Epoxy flooring applied over old tiles in a kitchen",
  },
  {
    src: "/src/assets/iamge4.jpg",
    alt: "Solid colour epoxy coating over tiled restaurant floor",
  },
  {
    src: "/src/assets/image5.jpg",
    alt: "Flake epoxy coating applied over tiles in a garage",
  },
  {
    src: "/src/assets/image6.jpg",
    alt: "Metallic epoxy floor over tiles in a shopping centre",
  },
  {
    src: "/src/assets/image7.jpg",
    alt: "Epoxy over tile flooring in a mechanical workshop",
  },
  {
    src: "/src/assets/image8.jpg",
    alt: "Epoxy tiled flooring transformation in a lift lobby",
  },
  {
    src: "/src/assets/image9.jpg",
    alt: "Epoxy coating over old tiles on a balcony",
  },
  {
    src: "/src/assets/image10.jpg",
    alt: "Epoxy tile renewal in a cafe",
  },
];

/* ---------------------------------------------------------------------- */
/* Scroll-reveal primitive                                                 */
/* ---------------------------------------------------------------------- */

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -64px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  ...rest
}) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ---------------------------------------------------------------------- */
/* Before / after slider                                                   */
/* ---------------------------------------------------------------------- */

function BeforeAfterSlider({ before, after }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [interacted, setInteracted] = useState(false);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const handleMove = (e) => {
      if (!draggingRef.current) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      updateFromClientX(clientX);
    };
    const handleUp = () => {
      draggingRef.current = false;
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleUp);
    };
  }, [updateFromClientX]);

  const startDrag = () => {
    draggingRef.current = true;
    setInteracted(true);
  };

  return (
    <div
      ref={containerRef}
      className="slider-frame relative aspect-[16/9] w-full select-none overflow-hidden rounded-2xl border border-[#eceeed]"
    >
       <img
        src={before}
        alt="Before"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={after}
          alt="After"
          className="h-full w-full object-cover"
          style={{
            width:
              containerRef.current ? containerRef.current.offsetWidth : "100%",
            maxWidth: "none",
          }}
          draggable={false}
        />
      </div>

      <div
        className="absolute inset-y-0 z-10 flex w-0 items-center justify-center"
        style={{ left: `${position}%` }}
      >
        <div className="absolute h-full w-[2px] bg-white" />
        <button
          type="button"
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          className={`slider-handle relative flex h-10 w-10 flex-none cursor-ew-resize items-center justify-center rounded-full bg-white shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A11717] ${
            interacted ? "" : "slider-handle-invite"
          }`}
          aria-label="Drag to compare before and after"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1C2326"
            strokeWidth="2"
          >
            <path
              d="M8 6l-6 6 6 6M16 6l6 6-6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <span className="tag-before absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white">
        Before
      </span>
      <span className="tag-after absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white">
        After
      </span>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* System card with animated accordion                                     */
/* ---------------------------------------------------------------------- */

function SystemCard({ system }) {
  const [stepsOpen, setStepsOpen] = useState(false);

  return (
    <div className="lift-card group rounded-2xl border border-[#eceeed] bg-white p-6 sm:p-8">
      <span className="accent-line accent-line-hover block h-px w-10 bg-[#A11717]" />
      <h3 className="mt-4 text-xl font-semibold text-[#1C2326]">
        {system.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-[#A11717]">
        {system.tagline}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-[#5b6669]">
        {system.description}
      </p>

      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-[#7a8487]">
        {system.cure}
      </p>

      {system.note && (
        <p className="mt-4 rounded-xl border border-[#eceeed] bg-[#FAFBFB] px-4 py-3 text-sm text-[#3f4a4d]">
          {system.note}
        </p>
      )}

      <button
        type="button"
        onClick={() => setStepsOpen((v) => !v)}
        className="faq-row -mx-2 mt-6 flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-semibold text-[#1C2326] focus:outline-none"
        aria-expanded={stepsOpen}
      >
        <span
          className={`faq-icon flex h-6 w-6 flex-none items-center justify-center rounded-full border text-sm leading-none ${
            stepsOpen ?
              "border-[#A11717] text-[#A11717] faq-icon-open"
            : "border-[#c7cccb] text-[#5b6669]"
          }`}
        >
          +
        </span>
        <span className="faq-question">Application steps</span>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          stepsOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <ol className={`steps-list min-h-0 space-y-3 ${stepsOpen ? "steps-list-open" : ""}`}>
          {system.steps.map((step, i) => (
            <li
              key={i}
              className="step-line flex gap-3 text-sm leading-relaxed text-[#3f4a4d]"
              style={{ transitionDelay: stepsOpen ? `${i * 45}ms` : "0ms" }}
            >
              <span className="flex-none font-semibold text-[#A11717]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* Lightbox                                                                 */
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
        className="icon-btn absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
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
        className="icon-btn absolute left-3 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
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
        className="icon-btn absolute right-3 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
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
          className="lightbox-img max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
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
/* Page                                                                     */
/* ---------------------------------------------------------------------- */

export default function EpoxyOverTiles() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = useCallback(
    () => setLightboxIndex((i) => (i === 0 ? GALLERY.length - 1 : i - 1)),
    []
  );
  const nextImage = useCallback(
    () => setLightboxIndex((i) => (i === GALLERY.length - 1 ? 0 : i + 1)),
    []
  );

  return (
    <div className="min-h-screen bg-white text-[#2E3A3E] font-[Inter,sans-serif]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        /* ---------- generic scroll reveal ---------- */
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(.16,.84,.44,1),
                      transform 0.7s cubic-bezier(.16,.84,.44,1);
          will-change: opacity, transform;
        }
        .reveal-visible { opacity: 1; transform: translateY(0); }

        .reveal-left { transform: translateX(-24px); }
        .reveal-left.reveal-visible { transform: translateX(0); }

        .reveal-scale { transform: translateY(18px) scale(0.94); }
        .reveal-scale.reveal-visible { transform: translateY(0) scale(1); }

        /* accent line grows in on reveal */
        .accent-line {
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.7s cubic-bezier(.16,.84,.44,1) 0.15s;
        }
        .reveal-visible .accent-line { transform: scaleX(1); }
        .group:hover .accent-line-hover { transform: scaleX(1.6); }
        .accent-line-hover { transition: transform 0.4s ease; }

        /* ---------- hero load-in sequence ---------- */
        .hero-item {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.8s cubic-bezier(.16,.84,.44,1),
                      transform 0.8s cubic-bezier(.16,.84,.44,1);
        }
        .hero-loaded .hero-item { opacity: 1; transform: translateY(0); }
        .hero-loaded .hero-eyebrow { transition-delay: 0.05s; }
        .hero-loaded .hero-title   { transition-delay: 0.18s; }
        .hero-loaded .hero-desc    { transition-delay: 0.34s; }
        .hero-loaded .hero-cta     { transition-delay: 0.48s; }

        @keyframes kenburns {
          0%   { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .hero-img { animation: kenburns 22s ease-in-out infinite alternate; }

        @keyframes overlayPulse {
          0%, 100% { opacity: 0.9; }
          50%      { opacity: 0.72; }
        }
        .hero-overlay { animation: overlayPulse 9s ease-in-out infinite; }

        @keyframes arrowNudge {
          0%, 100% { transform: translateX(0); }
          50%      { transform: translateX(5px); }
        }
        .link-arrow:hover span { animation: arrowNudge 0.8s ease-in-out infinite; display: inline-block; }

        /* ---------- buttons ---------- */
        .btn-primary {
          position: relative;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
        }
        .btn-primary::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.35), transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .btn-primary:hover::after { opacity: 1; }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px -8px rgba(161,23,23,0.55);
        }
        .btn-primary:active { transform: translateY(0) scale(0.98); }

        /* ---------- cards ---------- */
        .lift-card {
          transition: transform 0.35s cubic-bezier(.16,.84,.44,1),
                      box-shadow 0.35s cubic-bezier(.16,.84,.44,1),
                      border-color 0.35s ease;
        }
        .lift-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 34px -18px rgba(28,35,38,0.28);
          border-color: #d8dcdb;
        }

        /* ---------- applications list ---------- */
        @keyframes bulletPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.5); opacity: 0.55; }
        }
        .bullet-dot { animation: bulletPulse 2.4s ease-in-out infinite; }

        /* ---------- before / after slider ---------- */
        .slider-frame { transition: box-shadow 0.4s ease; }
        .slider-frame:hover { box-shadow: 0 18px 34px -18px rgba(28,35,38,0.3); }
        @keyframes handleInvite {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(161,23,23,0.0), 0 4px 10px rgba(0,0,0,0.25); }
          50%      { transform: scale(1.08); box-shadow: 0 0 0 8px rgba(161,23,23,0.12), 0 4px 10px rgba(0,0,0,0.25); }
        }
        .slider-handle-invite { animation: handleInvite 1.8s ease-in-out infinite; }
        .slider-handle { transition: transform 0.2s ease; }
        .slider-handle:hover { transform: scale(1.12); }
        .slider-handle:active { transform: scale(0.95); }

        .tag-before, .tag-after { opacity: 0; transition: opacity 0.5s ease; }
        .reveal-visible .tag-before { opacity: 1; transition-delay: 0.3s; }
        .reveal-visible .tag-after  { opacity: 1; transition-delay: 0.45s; }

        /* ---------- system card accordion ---------- */
        .faq-row { transition: background-color 0.3s ease; }
        .faq-row:hover { background-color: #FAFBFB; }
        .faq-question { transition: color 0.25s ease, transform 0.25s ease; }
        .faq-row:hover .faq-question { color: #A11717; transform: translateX(2px); }
        .faq-icon {
          transition: transform 0.35s cubic-bezier(.16,.84,.44,1),
                      border-color 0.3s ease, color 0.3s ease;
        }
        .faq-icon-open { transform: rotate(135deg); }
        .faq-row:hover .faq-icon:not(.faq-icon-open) {
          border-color: #A11717;
          color: #A11717;
          transform: rotate(90deg);
        }

        .step-line {
          opacity: 0;
          transform: translateX(-10px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .steps-list-open .step-line { opacity: 1; transform: translateX(0); }

        /* ---------- video showcase ---------- */
        .video-card {
          transition: transform 0.35s cubic-bezier(.16,.84,.44,1),
                      box-shadow 0.35s cubic-bezier(.16,.84,.44,1),
                      border-color 0.35s ease;
        }
        .video-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 34px -18px rgba(28,35,38,0.28);
          border-color: #3a4448;
        }

        /* ---------- gallery ---------- */
        .gallery-btn {
          transition: transform 0.4s cubic-bezier(.16,.84,.44,1), box-shadow 0.4s ease;
        }
        .gallery-btn:hover {
          transform: translateY(-4px) scale(1.015);
          box-shadow: 0 16px 30px -16px rgba(28,35,38,0.35);
        }
        .gallery-img {
          transition: transform 0.6s cubic-bezier(.16,.84,.44,1), filter 0.5s ease;
        }
        .gallery-btn:hover .gallery-img {
          transform: scale(1.09);
          filter: brightness(0.85);
        }
        .gallery-overlay {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .gallery-btn:hover .gallery-overlay {
          opacity: 1;
          transform: translateY(0);
        }
        .gallery-zoom-icon {
          transform: scale(0.6) rotate(-12deg);
          opacity: 0;
          transition: transform 0.4s cubic-bezier(.34,1.56,.64,1) 0.05s, opacity 0.3s ease;
        }
        .gallery-btn:hover .gallery-zoom-icon {
          transform: scale(1) rotate(0deg);
          opacity: 1;
        }

        /* ---------- lightbox ---------- */
        @keyframes backdropIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .lightbox-backdrop { animation: backdropIn 0.25s ease; }

        @keyframes imgIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        .lightbox-img { animation: imgIn 0.35s cubic-bezier(.16,.84,.44,1); }

        .icon-btn { transition: transform 0.2s ease, background-color 0.2s ease; }
        .icon-btn:hover { transform: scale(1.1); }
        .icon-btn:active { transform: scale(0.92); }

        /* ---------- footer CTA glow ---------- */
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(161,23,23,0.35); }
          50%      { box-shadow: 0 0 0 12px rgba(161,23,23,0); }
        }
        .glow-cta { animation: glowPulse 2.6s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .reveal, .reveal-left, .reveal-scale, .hero-item,
          .tag-before, .tag-after, .step-line {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .hero-img, .hero-overlay, .bullet-dot, .glow-cta,
          .slider-handle-invite, .lightbox-backdrop, .lightbox-img,
          .link-arrow:hover span {
            animation: none !important;
          }
          .lift-card:hover, .gallery-btn:hover, .btn-primary:hover,
          .icon-btn:hover, .slider-handle:hover, .video-card:hover,
          .faq-icon, .faq-question {
            transform: none !important;
          }
        }
      `}</style>

      {/* ===== HERO — compact ===== */}
      <header
        className={`relative flex h-[60vh] min-h-[420px] items-center overflow-hidden bg-[#1C2326] text-white ${
          heroLoaded ? "hero-loaded" : ""
        }`}
      >
        <img
          src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600&q=80"
          alt="Epoxy flooring applied over old tiles"
          className="hero-img absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-t from-[#1C2326] via-[#1C2326]/60 to-[#1C2326]/30" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="hero-item hero-eyebrow text-xs font-medium uppercase tracking-[0.25em] text-[#e2867a]">
            SEF Premium Over Tile Epoxy Flooring
          </p>
          <h1 className="hero-item hero-title mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Can epoxy flooring be applied over floor tiles?
          </h1>
          <p className="hero-item hero-desc mt-5 max-w-xl text-[15px] text-[#cfd6d4] sm:text-base">
            Yes — with correct preparation and true industrial grade epoxy
            resin coatings, our system gives new life to most old tiled
            surfaces, without disturbing floor heights.
          </p>
          <div className="hero-item hero-cta mt-8 flex flex-wrap items-center gap-5">
            <a
              href="/contact"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
              }}
              className="btn-primary rounded-full bg-[#A11717] px-7 py-3 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2326]"
            >
              Request a free site quote
            </a>
            <a
              href="#gallery"
              className="link-arrow text-sm font-medium text-[#cfd6d4] transition hover:text-white"
            >
              View completed projects <span>→</span>
            </a>
          </div>
        </div>
      </header>

      {/* ===== BENEFITS ===== */}
      <section id="benefits" className="mx-auto max-w-6xl px-6 py-14">
        <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
          What you get
        </Reveal>
        <Reveal
          delay={80}
          as="h2"
          className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]"
        >
          Fast, durable and smart floor covering systems
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.label} delay={i * 90} className="group">
              <span className="accent-line block h-px w-10 bg-[#A11717]" />
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

      {/* ===== WHY / APPLICATIONS ===== */}
      <section
        id="why-us"
        className="border-y border-[#eceeed] bg-[#FAFBFB] py-14"
      >
        <div className="mx-auto max-w-6xl px-6">
          <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Why it works
          </Reveal>
          <Reveal
            delay={80}
            as="h2"
            className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]"
          >
            Ideal for the following applications
          </Reveal>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <Reveal delay={120} className="reveal-left">
                <p>
                  Whether it's a busy kitchen, a showroom, or the toughness
                  needed in a garage floor, epoxy flooring effortlessly fits
                  in, making it a go-to choice across a wide range of spaces.
                </p>
              </Reveal>
              <Reveal delay={210} className="reveal-left">
                <p>
                  Tiles must be sound and fairly damage-free for the system to
                  be applied over them. From there, the process is relatively
                  fast, and preparation is the most important key to a
                  successful result.
                </p>
              </Reveal>
              <Reveal
                delay={300}
                className="reveal-left lift-card rounded-xl border border-[#eceeed] bg-white px-5 py-4 text-sm text-[#3f4a4d]"
                as="p"
              >
                Unfortunately, at this point in time, we don't offer this
                service inside homes.
              </Reveal>
            </div>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {APPLICATIONS.map((use, i) => (
                <Reveal
                  key={use}
                  as="li"
                  delay={i * 80}
                  className="reveal-left flex items-start gap-2 text-sm text-[#3f4a4d]"
                >
                  <span
                    className="bullet-dot mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#A11717]"
                    aria-hidden="true"
                  />
                  {use}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== BEFORE / AFTER SLIDER ===== */}
      <section id="transformation" className="mx-auto max-w-6xl px-6 py-14">
        <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
          See the difference
        </Reveal>
        <Reveal
          delay={80}
          as="h2"
          className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]"
        >
          Drag the slider to view the transformation
        </Reveal>
        <Reveal delay={160} as="p" className="mt-3 max-w-xl text-sm text-[#5b6669]">
          Move the white slider to compare an old tiled floor against our
          finished epoxy over tile system.
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={120} className="reveal-scale">
            <BeforeAfterSlider before={after1} after={before1} />
          </Reveal>
          <Reveal delay={220} className="reveal-scale">
            <BeforeAfterSlider before={after2} after={before2} />
          </Reveal>
          <Reveal delay={320} className="reveal-scale">
            <BeforeAfterSlider before={after3} after={before3} />
          </Reveal>
        </div>
      </section>

      {/* ===== AVAILABLE SYSTEMS ===== */}
      <section id="systems" className="bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Choose your system
          </Reveal>
          <Reveal
            delay={80}
            as="h2"
            className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]"
          >
            Available epoxy flooring systems for over tiles
          </Reveal>

          <div className="mt-10 space-y-8">
            {SYSTEMS.map((system, i) => (
              <Reveal key={system.title} delay={i * 110} className="reveal-scale">
                <SystemCard system={system} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VIDEO SHOWCASE ===== */}
      <section id="videos" className="mx-auto max-w-6xl px-6 py-14">
        <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
          Watch it happen
        </Reveal>
        <Reveal
          delay={80}
          as="h2"
          className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]"
        >
          See old tiled floors being transformed
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {VIDEOS.map((video, i) => (
            <Reveal key={video.title} delay={i * 130} className="reveal-scale">
              <div className="video-card overflow-hidden rounded-2xl border border-[#eceeed] bg-[#0E1214]">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src={video.embedUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
              <p className="mt-3 text-sm font-medium text-[#1C2326]">
                {video.title}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== GALLERY — 4 columns ===== */}
      <section id="gallery" className="bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Completed work
          </Reveal>
          <Reveal
            delay={80}
            as="h2"
            className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]"
          >
            Photos of our completed epoxy flooring projects on tiles
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {GALLERY.map((img, i) => (
              <Reveal key={img.src} delay={i * 70} className="reveal-scale">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="gallery-btn group relative block w-full overflow-hidden rounded-xl bg-[#EDF1F0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A11717] focus-visible:ring-offset-2"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="gallery-img h-48 w-full object-cover sm:h-56"
                    loading="lazy"
                  />
                  <div className="gallery-overlay absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-t from-black/60 via-black/10 to-transparent">
                    <ZoomIn className="gallery-zoom-icon h-6 w-6 text-white" />
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer id="contact" className="border-t border-[#eceeed] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
          <Reveal as="span" className="text-sm font-semibold text-[#1C2326]">
            Sydney <span className="text-[#A11717]">Epoxy</span> Floor
          </Reveal>
          <Reveal delay={80} as="p" className="max-w-md text-sm text-[#5b6669]">
            Get a personalised quote for your over-tile epoxy flooring
            project.
          </Reveal>
          <Reveal delay={160}>
            <a
              href="/contact"
              className="btn-primary glow-cta rounded-full bg-[#A11717] px-7 py-3 text-sm font-semibold text-white"
            >
              Contact us
            </a>
          </Reveal>
        </div>
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
