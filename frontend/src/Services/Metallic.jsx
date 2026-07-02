import React, { useState, useEffect, useRef, useCallback } from "react";
import { ZoomIn } from "lucide-react";
import before1 from "/src/assets/before1.jpg";
import after1 from "/src/assets/after1.jpg";

import before2 from "/src/assets/before2.jpg";
import after2 from "/src/assets/after2.jpg";

import before3 from "/src/assets/before3.jpg";
import after3 from "/src/assets/after3.jpg";

/**
 * Metallic & Marble Effect Epoxy Flooring — landing page (animated)
 *
 * Same visual system as the other SEF pages: white surfaces, steel-grey
 * neutrals, and a single deep-red accent (#A11717) used sparingly. This
 * pass layers in a page-load sequence, scroll-triggered reveals, staggered
 * grids, an inviting idle-pulse on the before/after handle, hover
 * micro-interactions and lightbox transitions — all respecting
 * prefers-reduced-motion.
 */

const BENEFITS = [
  {
    label: "One-of-a-kind finish",
    detail: "Every floor is hand-manipulated, so no two pours look the same.",
  },
  {
    label: "High gloss, satin or matt",
    detail: "Choose the sheen level that suits the space.",
  },
  {
    label: "Tile-compatible",
    detail:
      "Applies directly over concrete or tiled floors, no removal needed.",
  },
  {
    label: "Deep, dimensional look",
    detail:
      "Metallic pigments create the illusion of craters, ripples and flow.",
  },
  {
    label: "Durable protective topcoat",
    detail: "Finished with an Ultra-Premium Urethane layer for long-term wear.",
  },
];

const APPLICATIONS = [
  "High-End Garages",
  "Luxury Homes",
  "Game's Rooms",
  "Night Clubs",
  "Wine Cellars",
  "Lift Lobbies",
  "Entrances",
  "Shops",
];

const PROCESS = [
  {
    step: "01",
    title: "Self-level primer",
    detail:
      "A 1mm coloured self-level epoxy primer fills minor imperfections and creates a clean base. Tiled floors get an extra base coat to fill grout lines, then a sand-back and fill of any defects.",
  },
  {
    step: "02",
    title: "Effect coat",
    detail:
      "A 100% solids self-level epoxy resin, blended with metallic pigments or a metallic and liquid epoxy mix, is manipulated by hand to create the finished visual effect.",
  },
  {
    step: "03",
    title: "Urethane topcoat",
    detail:
      "After buffing and sanding back all high points, a thin layer of Ultra-Premium Urethane is roller-applied to protect and finish the surface.",
  },
];

const GALLERY = [
  {
    src: "/src/assets/image13.jpg",
    alt: "Metallic epoxy floor with swirling silver and charcoal tones",
  },
  {
    src: "/src/assets/image14.jpg",
    alt: "Marble effect epoxy floor in a luxury home entrance",
  },
  {
    src: "/src/assets/image15.jpg",
    alt: "Deep blue metallic epoxy floor in a games room",
  },
  {
    src: "/src/assets/image16.jpg",
    alt: "High gloss metallic epoxy floor in a showroom",
  },
  {
    src: "/src/assets/image18.jpg",
    alt: "Gold and bronze metallic epoxy floor finish",
  },
  {
    src: "/src/assets/image19.jpg",
    alt: "Marble effect epoxy floor coating in a retail space",
  },
  {
    src: "/src/assets/image20.jpg",
    alt: "Metallic epoxy flooring in a wine cellar",
  },
  {
    src: "/src/assets/image21.jpg",
    alt: "Night club floor with metallic epoxy finish",
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

export default function MetallicMarbleFlooring() {
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

        /* numbered process steps: number "counts in" and pulses subtly */
        @keyframes stepPop {
          0%   { transform: scale(0.6); opacity: 0; }
          60%  { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .reveal-visible .step-number {
          animation: stepPop 0.5s cubic-bezier(.34,1.56,.64,1) 0.1s both;
        }

        /* ---------- applications list ---------- */
        @keyframes bulletPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.5); opacity: 0.55; }
        }
        .bullet-dot { animation: bulletPulse 2.4s ease-in-out infinite; }

        /* ---------- before / after slider ---------- */
        .slider-frame {
          transition: box-shadow 0.4s ease;
        }
        .slider-frame:hover {
          box-shadow: 0 18px 34px -18px rgba(28,35,38,0.3);
        }
        @keyframes handleInvite {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(161,23,23,0.0), 0 4px 10px rgba(0,0,0,0.25); }
          50%      { transform: scale(1.08); box-shadow: 0 0 0 8px rgba(161,23,23,0.12), 0 4px 10px rgba(0,0,0,0.25); }
        }
        .slider-handle-invite { animation: handleInvite 1.8s ease-in-out infinite; }
        .slider-handle {
          transition: transform 0.2s ease;
        }
        .slider-handle:hover { transform: scale(1.12); }
        .slider-handle:active { transform: scale(0.95); }

        .tag-before, .tag-after {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .reveal-visible .tag-before { opacity: 1; transition-delay: 0.3s; }
        .reveal-visible .tag-after  { opacity: 1; transition-delay: 0.45s; }

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
          .reveal, .reveal-left, .reveal-scale, .hero-item, .tag-before, .tag-after {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .hero-img, .hero-overlay, .bullet-dot, .glow-cta, .step-number,
          .slider-handle-invite, .lightbox-backdrop, .lightbox-img,
          .link-arrow:hover span {
            animation: none !important;
          }
          .lift-card:hover, .gallery-btn:hover, .btn-primary:hover,
          .icon-btn:hover, .slider-handle:hover {
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
          src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1600&q=80"
          alt="Metallic epoxy floor with a deep, marbled finish"
          className="hero-img absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-t from-[#1C2326] via-[#1C2326]/60 to-[#1C2326]/30" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="hero-item hero-eyebrow text-xs font-medium uppercase tracking-[0.25em] text-[#e2867a]">
            Metallic &amp; Marble Effect Epoxy Flooring
          </p>
          <h1 className="hero-item hero-title mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Artistic epoxy floors that bring an unmatchable character to your
            space
          </h1>
          <p className="hero-item hero-desc mt-5 max-w-xl text-[15px] text-[#cfd6d4] sm:text-base">
            SEF Liquid Epoxy Marble Effect and SEF Premium Metallic flooring
            systems, hand-finished in high gloss, satin or matt.
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
          A durable floor that doubles as a piece of art
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.label} delay={i * 90}>
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

      {/* ===== WHY METALLIC / MARBLE ===== */}
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
            A hot trend, built on serious material quality
          </Reveal>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <Reveal delay={120} className="reveal-left">
                <p>
                  Metallic epoxy flooring creates a glossy, deep-looking floor in
                  a range of colours and visual effects. Some finishes give a
                  three-dimensional appearance, the illusion of craters, ripples
                  and swirling rivers of metallic-looking plasma — or it can be
                  done in a single, simple colour.
                </p>
              </Reveal>
              <Reveal delay={210} className="reveal-left">
                <p>
                  At Sydney Epoxy Floors, we believe "less is more," but we're
                  just as happy building a finish to suit any taste. The end
                  result depends heavily on the quality of materials used,
                  alongside the applicator's skill level.
                </p>
              </Reveal>
              <Reveal delay={300} className="reveal-left">
                <p>
                  Prices start from $130.00 per SQM for jobs over 100 square
                  metres. Smaller jobs attract higher fees depending on surface
                  condition, access and area size.
                </p>
              </Reveal>
            </div>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {APPLICATIONS.map((point, i) => (
                <Reveal
                  key={point}
                  as="li"
                  delay={i * 80}
                  className="reveal-left flex items-start gap-2 text-sm text-[#3f4a4d]"
                >
                  <span
                    className="bullet-dot mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#A11717]"
                    aria-hidden="true"
                  />
                  {point}
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
          Move the white slider to compare a bare floor before coating against a
          finished metallic epoxy floor.
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

      {/* ===== HOW IT'S APPLIED ===== */}
      <section id="process" className="bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            The process
          </Reveal>
          <Reveal
            delay={80}
            as="h2"
            className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]"
          >
            How metallic &amp; marble effect floors are applied
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {PROCESS.map((p, i) => (
              <Reveal
                key={p.step}
                delay={i * 130}
                className="reveal-scale lift-card rounded-2xl border border-[#eceeed] bg-white p-6"
              >
                <span className="step-number inline-block text-xs font-semibold text-[#A11717]">
                  {p.step}
                </span>
                <h3 className="mt-2 text-[15px] font-semibold text-[#1C2326]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b6669]">
                  {p.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY — 4 columns ===== */}
      <section id="gallery" className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Completed work
          </Reveal>
          <Reveal
            delay={80}
            as="h2"
            className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]"
          >
            Photos of our completed metallic &amp; marble epoxy projects
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
            Get a personalised quote for your metallic or marble effect epoxy
            floor.
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
