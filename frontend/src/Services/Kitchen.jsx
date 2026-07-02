import React, { useState, useEffect, useRef, useCallback } from "react";
import { ZoomIn } from "lucide-react";

/**
 * Commercial Kitchen & Food Processing Floor Coatings — landing page (animated)
 *
 * Same design system as the other SEF pages: white surfaces, a quiet
 * steel-grey neutral palette, and a single deep-red accent (#A11717) used
 * sparingly. This pass layers in a page-load sequence, scroll-triggered
 * reveals, staggered grids, hover micro-interactions, an animated accordion,
 * and lightbox transitions — all respecting prefers-reduced-motion.
 */

const NAV_LINKS = ["Benefits", "Why us", "Areas", "Gallery", "FAQ"];

const BENEFITS = [
  {
    label: "Fast turnaround",
    detail: "Installed over a single weekend to minimise downtime.",
  },
  {
    label: "Slip resistance",
    detail: "Engineered texture holds traction even when wet.",
  },
  {
    label: "Food-compliant",
    detail: "Meets hygiene standards for food prep environments.",
  },
  {
    label: "Impact & thermal shock",
    detail: "Withstands dropped equipment and rapid temperature swings.",
  },
  {
    label: "Seamless & easy to clean",
    detail: "Joint-free surface resists contaminants and bacteria.",
  },
];

const FAQ = [
  {
    q: "What are the available options for commercial kitchen floor coating?",
    a: "Epoxy and cementitious polyurethane (poly-cement) systems, such as Sikafloor Purcem, are the two primary food-grade solutions we install.",
  },
  {
    q: "What is the difference between the two?",
    a: "Epoxy systems are fast-curing and cost-effective for lighter-duty kitchens, while poly-cement systems offer greater thermal shock and impact resistance for high-traffic, high-staff environments.",
  },
  {
    q: "What is the cost difference?",
    a: "Poly-cement systems carry a higher material cost than epoxy, reflecting their superior durability under constant heat, moisture and heavy foot traffic.",
  },
  {
    q: "What product do you recommend for our jobs?",
    a: "For kitchens running more than five staff, we recommend a polyurethane cement system such as Sikafloor Purcem.",
  },
  {
    q: "Why is my epoxy floor failing?",
    a: "Low-solids or water-based epoxies are not built for food-industry conditions, and tend to lift or wear away quickly under grease, heat and washdown.",
  },
  {
    q: "How do I select the right contractor?",
    a: "Look for a contractor with documented food-industry installs, a fast single-visit turnaround, and willingness to provide a free on-site measurement and quote.",
  },
];

const AREAS = [
  {
    name: "Freezers & Coolrooms",
    icon: <path d="M12 2v20M5 6l14 12M19 6L5 18" strokeLinecap="round" />,
  },
  {
    name: "Washrooms",
    icon: (
      <path
        d="M7 3v6M17 3v6M4 9h16l-1.5 11a2 2 0 01-2 2h-9a2 2 0 01-2-2L4 9z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    name: "Commercial Kitchens",
    icon: (
      <>
        <path d="M4 4h16v4H4z" strokeLinejoin="round" />
        <path d="M6 8v12M18 8v12M4 20h16" strokeLinecap="round" />
      </>
    ),
  },
  {
    name: "Food Processing Areas",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    name: "Loading Bays",
    icon: (
      <>
        <rect x="3" y="9" width="13" height="8" rx="1" />
        <path d="M16 12h3l2 3v2h-5z" strokeLinejoin="round" />
        <circle cx="7.5" cy="19" r="1.5" />
        <circle cx="17.5" cy="19" r="1.5" />
      </>
    ),
  },
  {
    name: "Abattoirs",
    icon: (
      <path
        d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"
        strokeLinejoin="round"
      />
    ),
  },
  {
    name: "Beverage Processing Areas",
    icon: <path d="M9 2h6l-1 6h2l-5 14-1-8H8l1-6V2z" strokeLinejoin="round" />,
  },
];

const GALLERY = [
  {
    src: "/src/assets/image9.jpg",
    alt: "Finished epoxy floor in a commercial kitchen prep area",
  },
  {
    src: "/src/assets/image10.jpg",
    alt: "Seamless coated flooring in a food processing facility",
  },
  {
    src: "/src/assets/image11.jpg",
    alt: "Slip-resistant floor coating near stainless kitchen equipment",
  },
  {
    src: "/src/assets/image22.jpg",
    alt: "Industrial kitchen floor coating finished project",
  },
  {
    src: "/src/assets/image25.jpg",
    alt: "Coated flooring in a commercial food preparation area",
  },
  {
    src: "/src/assets/image24.jpg",
    alt: "Hygienic seamless flooring in a restaurant kitchen",
  },
  {
    src: "/src/assets/image6.jpg",
    alt: "Durable resin flooring in a food processing plant",
  },
  {
    src: "/src/assets/image12.jpg",
    alt: "Industrial coated floor in a loading bay area",
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
/* FAQ accordion                                                           */
/* ---------------------------------------------------------------------- */

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="faq-row border-b border-[#e4e7e6]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-5 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="faq-question text-[15px] font-medium text-[#1C2326]">
          {item.q}
        </span>
        <span
          className={`faq-icon flex h-7 w-7 flex-none items-center justify-center rounded-full border text-base leading-none ${
            isOpen ?
              "border-[#A11717] text-[#A11717] faq-icon-open"
            : "border-[#c7cccb] text-[#5b6669]"
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ?
            "grid-rows-[1fr] pb-5 opacity-100"
          : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="min-h-0 text-sm leading-relaxed text-[#5b6669]">
          {item.a}
        </p>
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

export default function CommercialKitchenFlooring() {
  const [openIndex, setOpenIndex] = useState(0);
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

        .reveal-right { transform: translateX(24px); }
        .reveal-right.reveal-visible { transform: translateX(0); }

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

        /* ---------- cards / feature image ---------- */
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

        .feature-img {
          transition: transform 0.7s cubic-bezier(.16,.84,.44,1);
        }
        .feature-img-wrap:hover .feature-img {
          transform: scale(1.06);
        }

        /* ---------- areas list ---------- */
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

        /* ---------- FAQ accordion ---------- */
        .faq-row {
          transition: background-color 0.3s ease;
        }
        .faq-row:hover {
          background-color: #FAFBFB;
        }
        .faq-question {
          transition: color 0.25s ease, transform 0.25s ease;
        }
        .faq-row:hover .faq-question {
          color: #A11717;
          transform: translateX(2px);
        }
        .faq-icon {
          transition: transform 0.35s cubic-bezier(.16,.84,.44,1),
                      border-color 0.3s ease, color 0.3s ease, background-color 0.3s ease;
        }
        .faq-icon-open { transform: rotate(135deg); }
        .faq-row:hover .faq-icon:not(.faq-icon-open) {
          border-color: #A11717;
          color: #A11717;
          transform: rotate(90deg);
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
          .reveal, .reveal-left, .reveal-right, .reveal-scale, .hero-item {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .hero-img, .hero-overlay, .bullet-dot, .glow-cta,
          .lightbox-backdrop, .lightbox-img, .link-arrow:hover span {
            animation: none !important;
          }
          .lift-card:hover, .gallery-btn:hover, .btn-primary:hover,
          .icon-btn:hover, .feature-img-wrap:hover .feature-img,
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
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80"
          alt="Commercial kitchen with seamless industrial floor coating"
          className="hero-img absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-t from-[#1C2326] via-[#1C2326]/60 to-[#1C2326]/30" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="hero-item hero-eyebrow text-xs font-medium uppercase tracking-[0.25em] text-[#e2867a]">
            Food &amp; Hospitality Flooring Systems
          </p>
          <h1 className="hero-item hero-title mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Industrial-grade floor coatings for commercial kitchens &amp; food
            processing plants
          </h1>
          <p className="hero-item hero-desc mt-5 max-w-xl text-[15px] text-[#cfd6d4] sm:text-base">
            Resin-based systems built to survive heat, grease, washdown and
            heavy foot traffic — installed fast, seamless, and compliant with
            good hygiene practice standards.
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
          Engineered for the demands of food-grade environments
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

      {/* ===== WHY SUITABLE ===== */}
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
            Built for the conditions food prep floors actually face
          </Reveal>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <Reveal delay={120} className="reveal-left">
                <p>
                  In food preparation areas, flooring affects the hygiene of an
                  entire facility. Our coating systems for commercial kitchens and
                  food processing areas are built to the highest standards,
                  helping sites comply with good hygiene practice guidelines.
                </p>
              </Reveal>
              <Reveal delay={210} className="reveal-left">
                <p>
                  Resin-based industrial coatings install quickly, hold up to
                  constant wear, resist slips, and form a thick protective barrier
                  — without forcing a long shutdown.
                </p>
              </Reveal>
              <Reveal delay={300} className="reveal-left">
                <p>
                  Not every epoxy product belongs in a commercial kitchen. Floors
                  here face heavy foot traffic, constant moisture, food fats and
                  oils, and frequent mechanical cleaning, so the system has to be
                  matched to the environment, not just to the floor.
                </p>
              </Reveal>
            </div>

            <Reveal
              delay={160}
              className="reveal-right lift-card feature-img-wrap overflow-hidden rounded-2xl border border-[#eceeed]"
            >
              <img
                src="/src/assets/image17.jpg"
                alt="Seamless epoxy floor coating installed in a commercial kitchen"
                className="feature-img h-80 w-full object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== AREAS SERVED ===== */}
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
            Areas we coat
          </Reveal>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {AREAS.map((area, i) => (
              <Reveal
                key={area.name}
                as="li"
                delay={i * 65}
                className="reveal-scale flex items-center gap-2 text-sm text-[#e7eaec]"
              >
                <span
                  className="bullet-dot h-1.5 w-1.5 flex-none rounded-full bg-[#A11717]"
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
          <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Completed work
          </Reveal>
          <Reveal
            delay={80}
            as="h2"
            className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]"
          >
            Photos of our completed food industry floor coating projects
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

      {/* ===== FAQ — accordion ===== */}
      <section id="faq" className="mx-auto max-w-4xl px-6 py-14">
        <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
          FAQ
        </Reveal>
        <Reveal
          delay={80}
          as="h2"
          className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]"
        >
          Useful tips &amp; questions
        </Reveal>

        <Reveal delay={160} className="mt-8 border-t border-[#e4e7e6]">
          {FAQ.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </Reveal>
      </section>

      {/* ===== FOOTER ===== */}
      <footer id="contact" className="border-t border-[#eceeed] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
          <Reveal as="span" className="text-sm font-semibold text-[#1C2326]">
            Sydney <span className="text-[#A11717]">Epoxy</span> Floor
          </Reveal>
          <Reveal delay={80} as="p" className="max-w-md text-sm text-[#5b6669]">
            Get a personalised quote for your commercial kitchen or food
            processing floor.
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
