import React, { useState, useEffect, useRef, useCallback } from "react";
import before1 from "/src/assets/before7.jpg";
import after1 from "/src/assets/after7.jpg";

import before2 from "/src/assets/before2.jpg";
import after2 from "/src/assets/after2.jpg";

import before3 from "/src/assets/before4.jpg";
import after3 from "/src/assets/after4.jpg";

/**
 * Seamless Epoxy Flake Flooring — landing page (ANIMATED)
 *
 * Same visual system as before (white surfaces, steel-grey neutrals,
 * deep-red #A11717 accent) but with motion layered in throughout:
 * a staggered hero entrance, scroll-triggered reveals on every section,
 * a slow ambient zoom on the hero image, animated dividers/counters,
 * hover micro-interactions on cards and gallery tiles, and smooth
 * transitions on the lightbox and before/after slider.
 *
 * Respects prefers-reduced-motion.
 */

const BENEFITS = [
  {
    label: "Durability",
    detail: "Withstands heavy foot traffic, vehicle weight, hot tyre pick-up and chemicals.",
  },
  {
    label: "Easy to maintain",
    detail: "Sweeps, mops or scrubs clean with a mild detergent.",
  },
  {
    label: "Slip-resistant",
    detail: "Textured, non-slip surface stays safe in wet or dry conditions.",
  },
  {
    label: "Aesthetically pleasing",
    detail: "Wide range of colours and patterns for a customised, textured look.",
  },
  {
    label: "Cost-effective & fast",
    detail: "Cheaper and quicker to install than tile or natural stone, ready to use once cured.",
  },
];

const APPLICATIONS = [
  "Garages",
  "Warehouses",
  "Storage Facilities",
  "Patios",
  "Retail Stores",
  "Shopping Centres",
  "Lift Lobbies",
  "Cafes",
  "Showrooms",
  "Veterinary Clinics",
  "Residential Interior / Exterior",
  "Restrooms",
  "Bars, Pubs & Taverns",
];

const GALLERY = [
  {
    src: "/src/assets/image11.jpg",
    alt: "Seamless epoxy flake floor in a residential garage",
  },
  {
    src: "/src/assets/image12.jpg",
    alt: "Epoxy flake flooring in a retail showroom",
  },
  {
    src: "/src/assets/image13.jpg",
    alt: "Flake epoxy floor in a warehouse storage facility",
  },
  {
    src: "/src/assets/image14.jpg",
    alt: "Epoxy flake floor finish on a cafe patio",
  },
  {
    src: "/src/assets/image15.jpg",
    alt: "Grey and white epoxy flake flooring in a shop",
  },
  {
    src: "/src/assets/image16.jpg",
    alt: "Epoxy flake floor in a veterinary clinic",
  },
  {
    src: "/src/assets/image17.jpg",
    alt: "Textured epoxy flake floor in a bar interior",
  },
  {
    src: "/src/assets/image18.jpg",
    alt: "Epoxy flake floor coating in a lift lobby",
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
/*  Before / after slider                                                 */
/* ---------------------------------------------------------------------- */

function BeforeAfterSlider({ before, after, delay = 0 }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const draggingRef = useRef(false);
  const [wrapRef, visible] = useReveal();

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

  return (
    <div
      ref={wrapRef}
      className={`reveal reveal-scale ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      <div
        ref={containerRef}
        className="slider-shell relative aspect-[16/9] w-full select-none overflow-hidden rounded-2xl border border-[#eceeed]"
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
            onMouseDown={() => (draggingRef.current = true)}
            onTouchStart={() => (draggingRef.current = true)}
            className="handle-pulse relative flex h-10 w-10 flex-none cursor-ew-resize items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A11717]"
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

        <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white">
          Before
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white">
          After
        </span>
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

export default function SeamlessEpoxyFlakeFlooring() {
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
        .reveal-scale {
          transform: translateY(20px) scale(0.97);
        }
        .reveal-scale.is-visible {
          transform: translateY(0) scale(1);
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

        /* floating ambient particles in hero */
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

        /* ---------- benefit card hover ---------- */
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

        /* ---------- applications list stagger ---------- */
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
          transition: transform 0.3s ease, background-color 0.3s ease;
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

        /* ---------- slider handle ---------- */
        @keyframes handlePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(161,23,23,0.35); }
          50% { box-shadow: 0 0 0 8px rgba(161,23,23,0); }
        }
        .handle-pulse {
          animation: handlePulse 2.2s ease-out infinite;
        }
        .slider-shell {
          transition: box-shadow 0.4s ease;
        }
        .slider-shell:hover {
          box-shadow: 0 18px 40px -12px rgba(28,35,38,0.25);
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

        /* ---------- transformation heading underline sweep ---------- */
        .accent-underline {
          position: relative;
          display: inline-block;
        }
        .accent-underline::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          height: 2px;
          width: 100%;
          background: #A11717;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s;
        }
        .is-visible .accent-underline::after {
          transform: scaleX(1);
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
          .reveal { opacity: 1; transform: none; }
        }
      `}</style>

      {/* ===== HERO — compact ===== */}
      <header
        className={`relative flex h-[60vh] min-h-[420px] items-center overflow-hidden bg-[#1C2326] text-white ${
          heroLoaded ? "hero-in" : ""
        }`}
      >
        <img
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&q=80"
          alt="Seamless epoxy flake floor coating in a garage"
          className="hero-img absolute inset-0 h-full w-full object-cover opacity-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2326] via-[#1C2326]/60 to-[#1C2326]/30" />

        {/* ambient floating particles */}
        <span
          className="float-particle absolute left-[8%] top-[22%] h-2 w-2 rounded-full bg-[#e2867a]/70"
          style={{ animationDelay: "0s" }}
          aria-hidden="true"
        />
        <span
          className="float-particle absolute left-[22%] top-[65%] h-1.5 w-1.5 rounded-full bg-white/50"
          style={{ animationDelay: "1.2s" }}
          aria-hidden="true"
        />
        <span
          className="float-particle absolute right-[14%] top-[30%] h-2 w-2 rounded-full bg-[#A11717]/60"
          style={{ animationDelay: "2.1s" }}
          aria-hidden="true"
        />
        <span
          className="float-particle absolute right-[26%] top-[70%] h-1 w-1 rounded-full bg-white/60"
          style={{ animationDelay: "0.6s" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="hero-eyebrow text-xs font-medium uppercase tracking-[0.25em] text-[#e2867a] opacity-0">
            SEF Premium Seamless Epoxy Flake System
          </p>
          <h1 className="hero-title mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight opacity-0 sm:text-4xl lg:text-5xl">
            Seamless epoxy flake flooring, contemporary looks with unrivalled
            durability
          </h1>
          <p className="hero-copy mt-5 max-w-xl text-[15px] text-[#cfd6d4] opacity-0 sm:text-base">
            A premium flake epoxy system built for a contemporary aesthetic
            and straightforward installation into any residence, garage,
            factory or showroom.
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
            Benefits of the SEF Premium full flake epoxy system
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

      {/* ===== WHY / APPLICATIONS ===== */}
      <section
        id="why-us"
        className="border-y border-[#eceeed] bg-[#FAFBFB] py-14"
      >
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
              Why it works
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
              Suitable for the following applications
            </h2>
          </Reveal>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <Reveal delay={100} className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <p>
                The flakes in the epoxy create a textured, visually
                appealing finish, available in a wide range of colours and
                patterns so you can create a customised look for your space.
              </p>
              <p>
                Because of its thin-layer characteristics, the system can be
                applied directly over existing floor tiles without
                disrupting floor height.
              </p>
              <p>
                Our expert installation guarantees longevity for your epoxy
                flake flooring, making this an investment that will meet
                your flooring needs for years to come.
              </p>
              <p className="rounded-xl border border-[#eceeed] bg-white px-5 py-4 text-sm text-[#3f4a4d] transition-shadow duration-300 hover:shadow-md">
                Visit our Silverwater or Rydalmere showrooms to see the full
                range of flake flooring options in person.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {APPLICATIONS.map((use, i) => (
                  <li
                    key={use}
                    className="app-item flex items-start gap-2 text-sm text-[#3f4a4d]"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <span
                      className="app-dot mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#A11717]"
                      style={{ animationDelay: `${i * 200}ms` }}
                      aria-hidden="true"
                    />
                    {use}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* animated stat strip */}
          <Reveal delay={100} className="mt-14 grid grid-cols-2 gap-6 border-t border-[#eceeed] pt-10 sm:grid-cols-4">
            <div>
              <p className="text-3xl font-semibold text-[#1C2326]">
                <CountUp to={15} suffix="+" />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-[#7a8487]">
                Years experience
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-[#1C2326]">
                <CountUp to={1200} suffix="+" />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-[#7a8487]">
                Floors completed
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-[#1C2326]">
                <CountUp to={13} />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-[#7a8487]">
                Application types
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-[#1C2326]">
                <CountUp to={100} suffix="%" />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-[#7a8487]">
                Seamless finish
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== BEFORE / AFTER SLIDER ===== */}
      <section id="transformation" className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            See the difference
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
            <span className="accent-underline">Drag the slider</span> to view
            the transformation
          </h2>
          <p className="mt-3 max-w-xl text-sm text-[#5b6669]">
            Move the white slider to compare a bare floor before coating
            against our seamless epoxy flake finish.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <BeforeAfterSlider before={after1} after={before1} delay={0} />
          <BeforeAfterSlider before={after2} after={before2} delay={120} />
          <BeforeAfterSlider before={after3} after={before3} delay={240} />
        </div>
      </section>

      {/* ===== GALLERY — 4 columns ===== */}
      <section id="gallery" className="bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
              Completed work
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]">
              Photos of our completed seamless epoxy flake projects
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
            Get a personalised quote for your seamless epoxy flake floor.
          </p>
          <a
            href="/contact"
            className="footer-cta rounded-full bg-[#A11717] px-7 py-3 text-sm font-semibold text-white"
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
