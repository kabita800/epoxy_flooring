import React, { useState, useEffect, useRef } from "react";

/**
 * Epoxy Coating for Workshop Floors — landing page (ANIMATED)
 *
 * Same design system as the Commercial Kitchen / Industrial / Warehouse
 * pages: white surfaces, a quiet steel-grey neutral palette, and a single
 * deep-red accent (#A11717) used sparingly. Motion layered throughout: a
 * staggered hero entrance with ambient zoom, scroll-triggered reveals on
 * every section, image panels that ease in with a gentle zoom, staggered
 * detail/risk lists, hover micro-interactions, and a smooth lightbox
 * transition. Respects prefers-reduced-motion.
 */

const BENEFITS = [
  { label: "Oil & fuel resistant", detail: "Seals concrete pores and cracks — won't go soft under oil or fuel spills." },
  { label: "Slip-resistant", detail: "Safe for personnel and visitors without making the surface difficult to clean." },
  { label: "Professional finish", detail: "Aesthetically pleasing and available in a variety of colours and finishes." },
  { label: "Brighter & safer", detail: "Lifts surface light reflection and instantly improves workplace safety." },
];

const BENEFIT_DETAILS = [
  {
    label: "Oil and fuel resistance",
    detail: "Epoxy flooring will seal the concrete pores and cracks and will not go soft if an oil or fuel spill occurs, offering a surface that is simple to mop to keep it looking clean and fresh.",
  },
  {
    label: "Aesthetically pleasing",
    detail: "Workshop epoxy flooring will improve the overall appearance of a workshop and provide a professional work environment. Epoxy resins are available in a variety of colours and finishes, allowing you to select the style that best suits your workshop.",
  },
  {
    label: "Durability and longevity",
    detail: "Epoxy flooring is known for its durability and resistance to damage. It can withstand heavy foot traffic, as well as the weight of forklifts and other equipment commonly found in workshops. Properly applied resin flooring can last up to 10 years before it requires re-coating.",
  },
  {
    label: "Slip-resistant and easy to keep clean",
    detail: "Workshop epoxy flooring materials are slip-resistant, making it safer for personnel and visitors while not compromising on making it a difficult surface to clean.",
  },
];

const GALLERY = [
  { src: "/src/assets/image9.jpg", alt: "Finished epoxy floor in a mechanical workshop" },
  { src: "/src/assets/image10.jpg", alt: "Seamless coated flooring in an automotive workshop" },
  { src: "/src/assets/image11.jpg", alt: "Slip-resistant floor coating in a vehicle workshop" },
  { src: "/src/assets/image22.jpg", alt: "Workshop epoxy floor coating finished project" },
  { src: "/src/assets/image25.jpg", alt: "Coated flooring in a mechanical repair workshop" },
  { src: "/src/assets/image24.jpg", alt: "Professional epoxy finish in a busy workshop" },
  { src: "/src/assets/image6.jpg", alt: "Durable resin flooring in a trade workshop" },
  { src: "/src/assets/image12.jpg", alt: "Epoxy line marking in a workshop floor" },
];

const SERVICE_AREAS = ["Sydney", "Canberra", "Wollongong", "Blue Mountains", "Newcastle"];

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

/** Image panel that eases in with a soft zoom-out, used in the text+image rows */
function ImageReveal({ src, alt, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`img-reveal ${visible ? "is-visible" : ""} overflow-hidden rounded-2xl border border-[#eceeed] ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      <img src={src} alt={alt} className="img-reveal-inner h-80 w-full object-cover" />
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
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-3 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:-translate-x-1 sm:left-6"
        aria-label="Previous image"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-3 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:translate-x-1 sm:right-6"
        aria-label="Next image"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
          <span className="ml-2 text-[#7a8487]">({index + 1}/{images.length})</span>
        </figcaption>
      </figure>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/*  Page                                                                   */
/* ---------------------------------------------------------------------- */

export default function WorkshopFlooring() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i === 0 ? GALLERY.length - 1 : i - 1));
  const nextImage = () => setLightboxIndex((i) => (i === GALLERY.length - 1 ? 0 : i + 1));

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

        /* ---------- divider line draw ---------- */
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

        /* ---------- image panels (text + image rows) ---------- */
        .img-reveal {
          opacity: 0;
          transform: translateY(24px) scale(0.97);
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1),
            transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }
        .img-reveal.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .img-reveal-inner {
          transition: transform 0.6s ease;
        }
        .img-reveal:hover .img-reveal-inner {
          transform: scale(1.06);
        }

        /* ---------- staggered lists ---------- */
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

        /* ---------- risk card ---------- */
        .risk-card {
          transition: box-shadow 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .risk-card:hover {
          box-shadow: 0 16px 32px -16px rgba(28,35,38,0.2);
          transform: translateY(-4px);
        }
        .risk-item {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .is-visible .risk-item {
          opacity: 1;
          transform: translateY(0);
        }

        /* ---------- primary cta ---------- */
        .primary-cta {
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease;
        }
        .primary-cta:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 14px 28px -10px rgba(161,23,23,0.45);
        }

        /* ---------- colour chart / service areas panel ---------- */
        @keyframes chipShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .chart-bg {
          background: linear-gradient(120deg, #0E1214, #1C2326, #0E1214);
          background-size: 200% 200%;
          animation: chipShift 10s ease infinite;
        }
        .chart-cta {
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease;
        }
        .chart-cta:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 14px 28px -10px rgba(161,23,23,0.5);
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
          .reveal, .img-reveal { opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      {/* ===== HERO ===== */}
      <header
        className={`relative flex h-[60vh] min-h-[420px] items-center overflow-hidden bg-[#1C2326] text-white ${
          heroLoaded ? "hero-in" : ""
        }`}
      >
        <img
          src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=1600&q=80"
          alt="Workshop with seamless epoxy floor coating"
          className="hero-img absolute inset-0 h-full w-full object-cover opacity-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2326] via-[#1C2326]/60 to-[#1C2326]/30" />

        <span className="float-particle absolute left-[8%] top-[22%] h-2 w-2 rounded-full bg-[#e2867a]/70" style={{ animationDelay: "0s" }} aria-hidden="true" />
        <span className="float-particle absolute left-[22%] top-[65%] h-1.5 w-1.5 rounded-full bg-white/50" style={{ animationDelay: "1.2s" }} aria-hidden="true" />
        <span className="float-particle absolute right-[14%] top-[30%] h-2 w-2 rounded-full bg-[#A11717]/60" style={{ animationDelay: "2.1s" }} aria-hidden="true" />
        <span className="float-particle absolute right-[26%] top-[70%] h-1 w-1 rounded-full bg-white/60" style={{ animationDelay: "0.6s" }} aria-hidden="true" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="hero-eyebrow text-xs font-medium uppercase tracking-[0.25em] text-[#e2867a] opacity-0">
            Servicing: Sydney, Canberra, Wollongong, Blue Mountains and Newcastle
          </p>
          <h1 className="hero-title mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight opacity-0 sm:text-4xl lg:text-5xl">
            Epoxy coating for workshop floors
          </h1>
          <p className="hero-copy mt-5 max-w-xl text-[15px] text-[#cfd6d4] opacity-0 sm:text-base">
            Protective, durable and aesthetically appealing epoxy flooring
            systems designed for the busy environment of modern-day workshops —
            installed fast, with minimal disruption to your schedule.
          </p>
          <div className="hero-cta mt-8 flex flex-wrap items-center gap-5 opacity-0">
            <a
              href="#contact"
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">What you get</p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
            Benefits
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.label} delay={i * 100} className="benefit-card">
              <span className="divider-line block h-px w-10 bg-[#A11717]" />
              <h3 className="mt-4 text-[15px] font-semibold text-[#1C2326]">{b.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5b6669]">{b.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== WHY EPOXY FOR WORKSHOPS ===== */}
      <section id="why-us" className="border-y border-[#eceeed] bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">Why it works</p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
              Why epoxy flooring is the most suitable solution for workshop floors
            </h2>
          </Reveal>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <Reveal delay={100} className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <p>
                Workshop epoxy flooring provides a protective, durable, and
                aesthetically appealing solution for the busy environment of
                modern-day workshops. It is designed to be incredibly
                hard-wearing, not only providing protection for the surface
                below but also an easy-to-clean top layer with excellent
                resistance to vehicles and personnel.
              </p>
              <p>
                An epoxy floor painting system can provide long-term
                protection while offering affordable maintenance costs and
                savings in labour and repair. This makes it an ideal choice
                for workshop owners and managers looking to improve their
                working environment.
              </p>
              <p className="text-[#5b6669]">
                Please scroll to the bottom of the page to view images of our
                finished projects in various systems and colour schemes.
              </p>
            </Reveal>

            <ImageReveal
              src="/src/assets/image17.jpg"
              alt="Seamless epoxy floor coating installed in a mechanical workshop"
              delay={150}
            />
          </div>
        </div>
      </section>

      {/* ===== BENEFIT DETAILS ===== */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">In detail</p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
            Benefits of applying epoxy flooring to your workshop floor
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {BENEFIT_DETAILS.map((b, i) => (
            <Reveal key={b.label} delay={i * 100} className="benefit-card">
              <span className="divider-line block h-px w-10 bg-[#A11717]" />
              <h3 className="mt-4 text-[15px] font-semibold text-[#1C2326]">{b.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5b6669]">{b.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== USEFUL INFO / RISKS ===== */}
      <section className="border-y border-[#eceeed] bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">Good to know</p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
              Useful information about workshop epoxy flooring
            </h2>
          </Reveal>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <Reveal delay={100} className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <p>
                Workshop floors are not a good fit for all epoxy flooring
                products. A specific epoxy floor coating solution is required
                for workshop floors in order to survive heavy vehicle traffic,
                oil, fuel, chemical spills such as brake and transmission
                fluid, and frequent mechanical cleaning.
              </p>
              <p>
                Our workshop epoxy flooring systems can be applied over a long
                weekend to minimise disturbance to your business schedule and
                offer an incredibly durable, safe surface for personnel and
                vehicles to operate on.
              </p>
              <a
                href="#contact"
                className="primary-cta inline-block rounded-full bg-[#A11717] px-7 py-3 text-sm font-semibold text-white"
              >
                Contact us today to arrange a free site quote
              </a>
            </Reveal>

            <Reveal delay={200} className="risk-card rounded-2xl border border-[#eceeed] bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
                Risks of selecting the wrong floor coating
              </p>
              <ul className="mt-4 space-y-4">
                <li className="risk-item" style={{ transitionDelay: "80ms" }}>
                  <span className="divider-line block h-px w-10 bg-[#A11717]" />
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6669]">
                    Smooth floors present a risk of falls and slips, whereas
                    rough floors make it difficult to maintain a clean surface,
                    resulting in dirty floors.
                  </p>
                </li>
                <li className="risk-item" style={{ transitionDelay: "220ms" }}>
                  <span className="divider-line block h-px w-10 bg-[#A11717]" />
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6669]">
                    Excessive wear: while low-solids and water-based epoxies
                    are much easier to apply, they are not suitable for
                    workshop floors and will lift or wear off quickly.
                  </p>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== MECHANICAL WORKSHOP SYSTEM ===== */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">Our system</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-[#1C2326]">
            Sydney Epoxy Floors mechanical workshop epoxy flooring system
          </h2>
        </Reveal>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
          <Reveal delay={100} className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
            <p>
              Our mechanical workshop epoxy flooring system has been designed
              to withstand the wear and tear of heavy traffic, oil spills, and
              other hazards while also providing an added layer of safety
              through optimum slip resistance — while being easy to clean for
              a long-lasting appearance and improving workflow efficiency.
            </p>
            <p>
              We provide professional installation and can work around your
              business to reduce disruption during working hours. Our coatings
              offer a fast curing/drying time and are ready for vehicular
              traffic within 48 hours — so within a relatively short period of
              time, your employees and customers will experience the instant
              brightening effect that our workshop floor epoxy coating systems
              provide.
            </p>
          </Reveal>

          <ImageReveal
            src="/src/assets/image22.jpg"
            alt="Completed mechanical workshop epoxy floor coating"
            delay={150}
          />
        </div>
      </section>

      {/* ===== EPOXY LINE MARKING ===== */}
      <section className="border-y border-[#eceeed] bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">Additional service</p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
              Epoxy line marking
            </h2>
          </Reveal>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <Reveal delay={100} className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <p>
                In workshops, epoxy line marking is a vital alternative when
                conventional line marking paint is insufficient. Epoxy
                resin-based markings provide permanence and visibility while
                guaranteeing resilience to wear and tear, compared with
                standard line marking paint.
              </p>
              <p>
                This approach encourages safety and organisation by precisely
                defining workstations, safety zones, and traffic patterns.
                While directing the flow of people and equipment, the sleek
                and easily maintained surface enhances the professional
                appearance.
              </p>
            </Reveal>

            <ImageReveal
              src="/src/assets/image12.jpg"
              alt="Epoxy line marking in a workshop floor"
              delay={150}
            />
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREAS / COLOUR CHART ===== */}
      <section className="chart-bg py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-10 sm:grid-cols-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">Where we work</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-white">Service areas</h2>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                {SERVICE_AREAS.map((area, i) => (
                  <li
                    key={area}
                    className="app-item flex items-center gap-2 text-sm text-[#e7eaec]"
                    style={{ transitionDelay: `${i * 80}ms` }}
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
            </Reveal>

            <Reveal delay={100}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">Colours</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-white">Epoxy flooring colour chart</h2>
              <p className="mt-4 text-[15px] text-[#cfd6d4]">
                Click on the chart below to view and download our full range
                of epoxy colours. Custom colours can be mixed on request.
              </p>
              <a
                href="#"
                className="chart-cta mt-5 inline-block rounded-full border border-[#A11717] px-7 py-3 text-sm font-semibold text-white hover:bg-[#A11717]"
              >
                View colour chart
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== GALLERY — 4 columns ===== */}
      <section id="gallery" className="bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">Completed work</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]">
              Photos of our completed workshop epoxy flooring projects
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
            Get a personalised quote for your workshop epoxy floor coating project.
          </p>
          <a
            href="#contact-form"
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
