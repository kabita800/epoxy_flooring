import React, { useState, useEffect, useRef, useCallback } from "react";
import { ZoomIn } from "lucide-react";

/**
 * Heavy Duty Line Marking Service — landing page (animated)
 *
 * Same visual system as the previous SEF pages: white surfaces, steel-grey
 * neutrals, and a single deep-red accent (#A11717) used sparingly. This pass
 * layers in a page-load sequence, scroll-triggered reveals, staggered grids,
 * hover micro-interactions and lightbox transitions — all respecting
 * prefers-reduced-motion.
 */

const BENEFITS = [
  {
    label: "Durability",
    detail: "Withstands heavy traffic, abrasion and impact, resisting chemicals and oils.",
  },
  {
    label: "Visibility",
    detail: "Excellent visibility even in low light, available in a range of colours.",
  },
  {
    label: "Fast curing time",
    detail: "Polyaspartic and MMA cure quickly, minimising facility downtime.",
  },
  {
    label: "Longevity",
    detail: "Longer lifespan than traditional paint, cutting reapplication and maintenance.",
  },
  {
    label: "Preparation-led results",
    detail: "Cleaning, repairing and grinding the surface first for lasting adhesion.",
  },
];

const APPLICATIONS = [
  "Mega Warehouses",
  "Mechanical Workshops",
  "Food Processing Facilities",
  "Bus Depots",
  "Truck Depots",
  "Roads",
];

const MATERIALS = [
  {
    title: "Epoxy",
    detail:
      "Excellent chemical resistance and strong resistance against wear and dirt, making it easy to keep clean in mechanical workshops, warehouses and food facilities.",
  },
  {
    title: "MMA",
    detail:
      "Highly resistant to abrasion and chemicals, with fast cure and UV-stable properties suited to indoor and outdoor areas. Cures in sub-zero temperatures, but produces a strong smell while curing.",
  },
  {
    title: "Polyaspartic",
    detail:
      "Lower odour than other products, with quick curing and sunlight resistance for indoor and outdoor use. Typically needs diamond grinding or shot blasting, and may require an epoxy-based primer.",
  },
  {
    title: "Two Pack Polyurethane",
    detail:
      "Excellent weather resistance and high durability, delivering long-lasting performance under heavy traffic and harsh environmental conditions.",
  },
];

const GALLERY = [
  {
    src: "/src/assets/image15.jpg",
    alt: "Heavy duty epoxy line marking in a warehouse",
  },
  {
    src: "/src/assets/image16.jpg",
    alt: "Yellow safety line marking in a mechanical workshop",
  },
  {
    src: "/src/assets/image17.jpg",
    alt: "Polyaspartic line marking in a food processing facility",
  },
  {
    src: "/src/assets/image18.jpg",
    alt: "Line marking in a bus depot",
  },
  {
    src: "/src/assets/image19.jpg",
    alt: "Two pack polyurethane line marking on a loading dock",
  },
  {
    src: "/src/assets/image20.jpg",
    alt: "MMA line marking on an outdoor road surface",
  },
  {
    src: "/src/assets/image21.jpg",
    alt: "Heavy duty line marking in a truck depot",
  },
  {
    src: "/src/assets/image22.jpg",
    alt: "Line marking for pedestrian walkways in a warehouse",
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

export default function HeavyDutyLineMarking() {
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

        .btn-outline {
          position: relative;
          overflow: hidden;
          z-index: 0;
          transition: color 0.35s ease, border-color 0.35s ease;
        }
        .btn-outline::before {
          content: "";
          position: absolute;
          inset: 0;
          left: -100%;
          background: #A11717;
          z-index: -1;
          transition: left 0.4s cubic-bezier(.16,.84,.44,1);
        }
        .btn-outline:hover::before { left: 0; }
        .btn-outline:hover { color: #fff; border-color: #A11717; }

        /* ---------- benefit / material cards ---------- */
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
          .reveal, .reveal-left, .reveal-scale, .hero-item {
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
          src="https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=1600&q=80"
          alt="Heavy duty line marking in an industrial warehouse"
          className="hero-img absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-t from-[#1C2326] via-[#1C2326]/60 to-[#1C2326]/30" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="hero-item hero-eyebrow text-xs font-medium uppercase tracking-[0.25em] text-[#e2867a]">
            Servicing Sydney
          </p>
          <h1 className="hero-item hero-title mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Heavy duty line marking, built for the busiest facilities
          </h1>
          <p className="hero-item hero-desc mt-5 max-w-xl text-[15px] text-[#cfd6d4] sm:text-base">
            Epoxy, MMA, two pack polyurethane and polyaspartic line marking
            for mega warehouses, workshops, food processing facilities and
            bus depots — engineered to outlast traditional paint.
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
          Heavy duty line marking vs. traditional paint
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

      {/* ===== WHY / PREP ===== */}
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
            Preparation is the key
          </Reveal>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <Reveal delay={100}>
                <p>
                  Before applying a two pack line marking product, proper
                  preparation is crucial. That means cleaning, repairing and
                  grinding the surface, plus ensuring the right temperature
                  and humidity for application. Skip these steps and you risk
                  poor adhesion, premature wear, and a shortened lifespan.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p>
                  It's just as important to choose the right two pack product
                  for the specific application, since different formulations
                  suit different surfaces and environments.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p>
                  Our team takes the time to properly prepare the surface and
                  select the right product, so the resulting line marking is
                  more durable and long-lasting — saving time and money over
                  the long run.
                </p>
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

      {/* ===== MATERIAL OPTIONS ===== */}
      <section id="materials" className="mx-auto max-w-6xl px-6 py-14">
        <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
          Choose your material
        </Reveal>
        <Reveal
          delay={80}
          as="h2"
          className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]"
        >
          Heavy duty line marking materials
        </Reveal>
        <Reveal delay={160} as="p" className="mt-3 max-w-2xl text-sm text-[#5b6669]">
          Two pack products cost around 5 times more than standard line
          marking paint, but the superior adhesion and durability make them
          the right choice for a long-term line marking solution.
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {MATERIALS.map((m, i) => (
            <Reveal
              key={m.title}
              delay={i * 100}
              className="reveal-scale lift-card group rounded-2xl border border-[#eceeed] bg-white p-6"
            >
              <span className="accent-line accent-line-hover block h-px w-10 bg-[#A11717]" />
              <h3 className="mt-4 text-[15px] font-semibold text-[#1C2326]">
                {m.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5b6669]">
                {m.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== TRADITIONAL PAINT COMPARISON ===== */}
      <section className="bg-[#0E1214] py-14">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal as="p" className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Weighing it up
          </Reveal>
          <Reveal
            delay={80}
            as="h2"
            className="mt-3 text-center text-3xl font-semibold leading-tight text-white"
          >
            What about traditional line marking paint?
          </Reveal>
          <Reveal
            delay={160}
            as="p"
            className="mt-5 text-center text-[15px] leading-relaxed text-[#cfd6d4]"
          >
            Traditional line marking paint, such as waterborne or
            chlorinated rubber products, has been widely used for decades
            in car parks and sports fields. Its fast curing time allows
            quick application with minimal disruption, and it's forgiving
            and easy to apply with good adhesion to most surfaces and
            minimal prep. It simply doesn't match the durability or
            lifespan of Epoxy, MMA, Polyaspartic or Two Pack Polyurethane.
          </Reveal>
          <Reveal delay={260} className="mt-8 flex justify-center">
            <a
              href="/sydney-line-marking"
              className="btn-outline rounded-full border border-[#3a4448] px-7 py-3 text-sm font-semibold text-white"
            >
              Get a general line marking quote →
            </a>
          </Reveal>
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
            Photos of our completed heavy duty line marking projects
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {GALLERY.map((img, i) => (
              <Reveal
                key={img.src}
                delay={i * 70}
                className="reveal-scale"
              >
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
            Get a personalised quote for your heavy duty line marking
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
