import React, { useState, useEffect, useRef } from "react";

/**
 * SEF SuperClear — Concrete Grind & Seal System landing page (ANIMATED)
 *
 * Same visual system as the Seamless Flake / Solid Colour pages:
 * white surfaces, steel-grey neutrals, and a single deep-red accent
 * (#A11717) used sparingly. Motion layered throughout: a staggered hero
 * entrance with ambient zoom, scroll-triggered reveals on every section,
 * animated dividers/counters, hover micro-interactions, and a smooth
 * lightbox transition. Respects prefers-reduced-motion.
 */

const BENEFITS = [
  {
    label: "Natural beauty, enhanced",
    detail: "Brings out the natural look of concrete while adding a protective clear coating.",
  },
  {
    label: "Cost-effective",
    detail: "The look of polished concrete, without the cost of the real thing.",
  },
  {
    label: "Crack & ramp repair",
    detail: "Fixes and repairs cracks, and can build and seal ramps in the same process.",
  },
  {
    label: "Low VOC & eco-friendly",
    detail: "Environmentally friendly top coats with minimal off-gassing.",
  },
  {
    label: "Matte, Satin or Gloss",
    detail: "Top coats available in the finish that suits your space.",
  },
];

const APPLICATIONS = [
  "Photography Studios",
  "Shops & Retail Stores",
  "Night Clubs",
  "Bars",
  "Homes",
  "Patios",
  "Storage Facilities",
  "Factories",
];

const GALLERY = [
  {
    src: "/src/assets/image20.jpg",
    alt: "SuperClear grind and seal concrete floor in a retail store",
  },
  {
    src: "/src/assets/image21.jpg",
    alt: "Clear coated concrete floor in a photography studio",
  },
  {
    src: "/src/assets/image22.jpg",
    alt: "Grind and seal concrete floor finish in a home interior",
  },
  {
    src: "/src/assets/image23.jpg",
    alt: "Polished-look concrete floor in a night club",
  },
  {
    src: "/src/assets/image24.jpg",
    alt: "SuperClear coated concrete patio floor",
  },
  {
    src: "/src/assets/image25.jpg",
    alt: "Grind and seal flooring in a storage facility",
  },
  {
    src: "/src/assets/image1.jpg",
    alt: "Clear coated concrete floor in a bar",
  },
  {
    src: "/src/assets/image2.jpg",
    alt: "Satin finish grind and seal concrete floor in a factory",
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

export default function SuperClearGrindAndSeal() {
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

        /* floating ambient particles in hero — droplets of "clear coat" */
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

        /* ---------- comparison callout shimmer ---------- */
        @keyframes shimmerSweep {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .compare-card {
          position: relative;
          overflow: hidden;
        }
        .compare-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            100deg,
            transparent 40%,
            rgba(161,23,23,0.08) 50%,
            transparent 60%
          );
          background-size: 250% 100%;
          animation: shimmerSweep 5s ease-in-out infinite;
          pointer-events: none;
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
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
          alt="Clear coated grind and seal concrete floor"
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
            SEF SuperClear — Grind &amp; Seal System
          </p>
          <h1 className="hero-title mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight opacity-0 sm:text-4xl lg:text-5xl">
            Achieve a look that always keeps up with the changing trends
          </h1>
          <p className="hero-copy mt-5 max-w-xl text-[15px] text-[#cfd6d4] opacity-0 sm:text-base">
            A transparent coating system that creates the look of polished
            concrete, clean, easy to maintain and simple to work into any
            colour scheme, without the hefty cost of the real thing.
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
            Optimum protection, without the polished concrete price tag
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
              Suitable for a wide range of spaces
            </h2>
          </Reveal>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <Reveal delay={100} className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <p>
                Interior designers love the look of polished concrete
                because it's clean, easy to maintain, and simple to work
                into a range of colour schemes. Our Grind and Seal service
                creates that same look, without the hefty cost of actual
                polished concrete.
              </p>
              <p>
                An epoxy flooring finish adds aesthetic value to any space,
                available in flake, metallic and polished concrete looks —
                exuding both sophistication and style.
              </p>
              <p className="compare-card rounded-xl border border-[#eceeed] bg-white px-5 py-4 text-sm text-[#3f4a4d]">
                <span className="font-semibold text-[#1C2326]">
                  Polished concrete vs. Grind and Seal:
                </span>{" "}
                the two differ mainly in price. SuperClear brings out the
                natural beauty of concrete while giving optimum protection,
                and is well suited to fixing and repairing cracks, building
                ramps, and sealing floors at a cost-effective price.
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
                <CountUp to={21} suffix="+" />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-[#7a8487]">
                Years experience
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-[#1C2326]">
                <CountUp to={800} suffix="+" />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-[#7a8487]">
                Floors sealed
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-[#1C2326]">
                <CountUp to={3} />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-[#7a8487]">
                Finish options
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-[#1C2326]">
                <CountUp to={50} suffix="%" />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-[#7a8487]">
                Avg. cost saving
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== GALLERY — 4 columns ===== */}
      <section id="gallery" className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
              Completed work
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]">
              Photos of our completed clear coating &amp; grind and seal
              projects
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
            Get a personalised quote for your grind and seal or SuperClear
            concrete floor.
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
