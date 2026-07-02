import React, { useState, useEffect, useRef, useCallback } from "react";
import { ZoomIn } from "lucide-react";

/**
 * High Build Epoxy Floor Repair — Sydney Epoxy Floors (animated)
 *
 * Same visual system as the other SEF pages: white surfaces, steel-grey
 * neutrals, and a single deep-red accent (#A11717) used sparingly. This pass
 * layers in a page-load sequence, scroll-triggered reveals, staggered grids,
 * hover micro-interactions and lightbox transitions — all respecting
 * prefers-reduced-motion.
 */

const LOCATIONS = [
  "Sydney",
  "Wollongong",
  "Blue Mountains",
  "Gosford",
  "Newcastle",
  "Canberra",
];

const REPAIR_LIST = [
  {
    label: "Damaged concrete",
    detail: "Restores worn or broken slabs back to a sound, stable surface.",
  },
  {
    label: "Spalled joints",
    detail: "Rebuilds crumbling joint edges before they widen and spread.",
  },
  {
    label: "Re-surfacing",
    detail: "Rebuilds a smooth, even wear layer over tired concrete.",
  },
  {
    label: "Cracks",
    detail: "Fills and seals cracks to stop moisture and further movement.",
  },
  {
    label: "Epoxy injection",
    detail: "Bonds and reinforces structural cracks from the inside out.",
  },
  {
    label: "Concrete tanks",
    detail: "Repairs and re-lines tanks for a durable, watertight finish.",
  },
];

const DETAILED_SERVICES = [
  {
    title: "High Build Epoxy Mortar",
    detail:
      "Our repair and maintenance work is carried out using high build epoxy resin mortar, built to handle joints, patching and striping without compromising the strength of the slab beneath. Ongoing needs are met and your flooring system stays well-preserved for the long run.",
  },
  {
    title: "Time-Efficient Repairs",
    detail:
      "If your business needs to remain open, our repair crew work efficiently around your schedule. Skilled, dedicated tradespeople bring the latest technology to every job, so you get the finest repairs and results with minimal disruption.",
  },
  {
    title: "Economical & Long-Lasting",
    detail:
      "Epoxy is a more affordable alternative to traditional flooring options and stands the test of time. It also cuts down on cleaning tools and products, since stains and dirt are easy to manage on a repaired epoxy surface.",
  },
  {
    title: "Preventative Protection",
    detail:
      "Attending to issues before they grow keeps your flooring safer and your costs down. A High Build Epoxy Floor Repair is an easy, cost-effective way to stop a small problem becoming a significant, expensive one.",
  },
];

const APPLICATIONS = [
  "Warehouse Floors",
  "Workshops",
  "Garages",
  "Shops",
  "Showrooms",
  "Commercial Kitchens",
  "Industrial Environments",
  "Offices",
  "Concrete Tanks",
  "Loading Docks",
];

const GALLERY = [
  {
    src: "/src/assets/floor.jpg",
    alt: "Epoxy joint and crack repair on a warehouse floor",
  },
  {
    src: "/src/assets/flake.jpg",
    alt: "Concrete surface being patched ahead of epoxy coating",
  },
  {
    src: "/src/assets/floors.jpg",
    alt: "Spalled joint repair on an industrial slab",
  },
  {
    src: "/src/assets/garage.jpg",
    alt: "Crack injection repair on commercial flooring",
  },
  {
    src: "/src/assets/image11.jpg",
    alt: "Re-surfaced concrete floor in a commercial kitchen",
  },
  {
    src: "/src/assets/image12.jpg",
    alt: "High build epoxy mortar applied to a damaged floor section",
  },
  {
    src: "/src/assets/image13.jpg",
    alt: "Repaired and re-lined concrete tank interior",
  },
  {
    src: "/src/assets/metallic.jpg",
    alt: "Finished epoxy floor repair in a warehouse aisle",
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

export default function HighBuildEpoxyFloorRepair() {
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
        .hero-loaded .hero-eyebrow  { transition-delay: 0.05s; }
        .hero-loaded .hero-title    { transition-delay: 0.18s; }
        .hero-loaded .hero-desc     { transition-delay: 0.34s; }
        .hero-loaded .hero-locations{ transition-delay: 0.46s; }
        .hero-loaded .hero-cta      { transition-delay: 0.58s; }

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

        /* location chips: gentle staggered fade already via Reveal, plus a divider fade */
        .loc-divider {
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .hero-loaded .loc-divider { opacity: 1; }

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

        /* ---------- applications / dot lists ---------- */
        @keyframes bulletPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.5); opacity: 0.55; }
        }
        .bullet-dot { animation: bulletPulse 2.4s ease-in-out infinite; }

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
          .reveal, .reveal-left, .reveal-scale, .hero-item, .loc-divider {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .hero-img, .hero-overlay, .bullet-dot, .glow-cta,
          .lightbox-backdrop, .lightbox-img, .link-arrow:hover span {
            animation: none !important;
          }
          .lift-card:hover, .gallery-btn:hover, .btn-primary:hover, .icon-btn:hover {
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
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=80"
          alt="High build epoxy resin mortar repair on a concrete floor joint"
          className="hero-img absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-t from-[#1C2326] via-[#1C2326]/60 to-[#1C2326]/30" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="hero-item hero-eyebrow text-xs font-medium uppercase tracking-[0.25em] text-[#e2867a]">
            High Build Epoxy Floor Repair
          </p>
          <h1 className="hero-item hero-title mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Refresh your flooring and increase your safety today
          </h1>
          <p className="hero-item hero-desc mt-5 max-w-xl text-[15px] text-[#cfd6d4] sm:text-base">
            The right joints, patching and striping protect your slab's
            structural integrity — and everyone who works on it. High build
            epoxy resin mortar repairs, done by a team that pays attention
            to the details.
          </p>

          <ul className="hero-item hero-locations mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
            {LOCATIONS.map((loc, i) => (
              <React.Fragment key={loc}>
                <li className="text-sm text-[#cfd6d4]">{loc}</li>
                {i < LOCATIONS.length - 1 && (
                  <span className="loc-divider text-sm text-[#5b6669]" aria-hidden="true">
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </ul>

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
              View completed repairs <span>→</span>
            </a>
          </div>
        </div>
      </header>

      {/* ===== REPAIR SERVICES ===== */}
      <section id="benefits" className="mx-auto max-w-6xl px-6 py-14">
        <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
          Repairs we provide
        </Reveal>
        <Reveal
          delay={80}
          as="h2"
          className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]"
        >
          Industrial and commercial epoxy repair, for a range of industries
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {REPAIR_LIST.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="group">
              <span className="accent-line block h-px w-10 bg-[#A11717]" />
              <h3 className="mt-4 text-[15px] font-semibold text-[#1C2326]">
                {s.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5b6669]">
                {s.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== WHY US ===== */}
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
            Attention to detail that protects your slab
          </Reveal>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <Reveal delay={100}>
                <p>
                  When it comes to flooring repairs, a company that pays
                  attention to the little details makes a big difference.
                  Getting the joints, patching and striping right has a real
                  impact on facility maintenance, on the structural integrity
                  of your floor slab, and on overall safety.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p>
                  Sydney Epoxy Floors provide floor maintenance and repairs
                  using high build epoxy resin mortar, so your ongoing needs
                  can always be met and your flooring system stays easily
                  well-preserved.
                </p>
              </Reveal>
            </div>

            <Reveal
              delay={220}
              className="reveal-scale lift-card rounded-xl border border-[#eceeed] bg-white px-5 py-4 text-sm text-[#3f4a4d]"
              as="p"
            >
              <span className="font-semibold text-[#1C2326]">
                A more economical alternative.
              </span>{" "}
              Epoxy repairs stand the test of time and are easy to keep
              clean, saving you the cost of extra cleaning tools and
              products down the line.
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== DETAILED SERVICES ===== */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-14">
        <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
          Our approach
        </Reveal>
        <Reveal
          delay={80}
          as="h2"
          className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]"
        >
          Time-efficient repairs so your business can soldier on
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {DETAILED_SERVICES.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 100}
              className="reveal-scale lift-card group rounded-2xl border border-[#eceeed] bg-white p-6 sm:p-8"
            >
              <span className="accent-line accent-line-hover block h-px w-10 bg-[#A11717]" />
              <h3 className="mt-4 text-[15px] font-semibold text-[#1C2326]">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5b6669]">
                {s.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== APPLICATIONS ===== */}
      <section id="areas" className="bg-[#0E1214] py-12">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal as="p" className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Suitable for
          </Reveal>
          <Reveal
            delay={80}
            as="h2"
            className="mt-3 text-center text-3xl font-semibold leading-tight text-white"
          >
            Epoxy floor repair for every kind of space
          </Reveal>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {APPLICATIONS.map((area, i) => (
              <Reveal
                key={area}
                as="li"
                delay={i * 55}
                className="reveal-scale flex items-center gap-2 text-sm text-[#e7eaec]"
              >
                <span
                  className="bullet-dot h-1.5 w-1.5 flex-none rounded-full bg-[#A11717]"
                  aria-hidden="true"
                />
                {area}
              </Reveal>
            ))}
          </ul>
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
            Photos of our completed epoxy floor repairs
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
            Stop a small issue becoming a significant one. Contact Sydney
            Epoxy Floors today to schedule a High Build Epoxy Floor Repair
            consultation.
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
