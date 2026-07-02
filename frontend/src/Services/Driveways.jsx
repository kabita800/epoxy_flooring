import React, { useState, useEffect, useRef } from "react";

/**
 * Heavy Duty Floor Coating for Residential Driveways & Outdoor Areas
 *
 * Same visual system as the previous SEF pages: white surfaces, steel-grey
 * neutrals, and a single deep-red accent (#A11717) used sparingly. Compact
 * hero, simple sections, cost-factor breakdown, image gallery.
 */

const BENEFITS = [
  {
    label: "Durability",
    detail: "Industrial-grade, UV-resistant top coats withstand traffic, weather and chemicals.",
  },
  {
    label: "Visual appeal",
    detail: "A smooth, glossy finish in a range of colours, patterns and finishes.",
  },
  {
    label: "Low maintenance",
    detail: "Resists dirt, oil and stains — sweeping and the odd hose-down is usually enough.",
  },
  {
    label: "Longevity",
    detail: "A protective layer that helps prevent cracks, potholes and other damage.",
  },
  {
    label: "Safety",
    detail: "Creates a non-slip surface, with light-reflective options for night visibility.",
  },
  {
    label: "Eco-friendly",
    detail: "Low-VOC or solvent-free formulations with minimal impact on air quality.",
  },
];

const COST_FACTORS = [
  "Required level of surface preparation and the current state of the surface",
  "Accessibility — roads with limited access require remote-controlled equipment",
  "Size of the area — larger floor areas generally result in a lower per-square-metre fee",
  "Chosen finish type and slip resistance",
];

const GALLERY = [
  {
    src: "/src/assets/image20.jpg",
    alt: "Resurfaced residential driveway with epoxy coating",
  },
  {
    src: "/src/assets/image19.jpg",
    alt: "Grey epoxy coated driveway in front of a modern home",
  },
  {
    src: "/src/assets/image21.jpg",
    alt: "Outdoor patio area with non-slip epoxy finish",
  },
  {
    src: "/src/assets/image22.jpg",
    alt: "Driveway resurfacing project before and after",
  },
  {
    src: "/src/assets/image23.jpg",
    alt: "Two pack polyurethane coated driveway",
  },
  {
    src: "/src/assets/image24.jpg",
    alt: "Outdoor alfresco area with epoxy floor coating",
  },
  {
    src: "/src/assets/image25.jpg",
    alt: "Light-reflective epoxy driveway finish",
  },
  {
    src: "/src/assets/image18.jpg",
    alt: "Completed driveway resurfacing project",
  },
];

/* Scroll-triggered reveal wrapper — fades + slides an element in once it
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
      className={`dfc-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{
        transitionDelay: visible ? `${delay}ms` : "0ms",
        "--dfc-y": `${y}px`,
        "--dfc-x": `${x}px`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

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
      className="dfc-lightbox-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="dfc-lightbox-ctrl absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:rotate-90 sm:right-6 sm:top-6"
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
        className="dfc-lightbox-ctrl absolute left-3 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:-translate-x-1 sm:left-6"
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
        className="dfc-lightbox-ctrl absolute right-3 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:translate-x-1 sm:right-6"
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
          className="dfc-lightbox-img max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
        />
        <figcaption className="dfc-lightbox-caption mt-4 text-center text-sm text-[#cfd6d4]">
          {img.alt}
          <span className="ml-2 text-[#7a8487]">
            ({index + 1}/{images.length})
          </span>
        </figcaption>
      </figure>
    </div>
  );
}

export default function DrivewayFloorCoating() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i === 0 ? GALLERY.length - 1 : i - 1));
  const nextImage = () =>
    setLightboxIndex((i) => (i === GALLERY.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen bg-white text-[#2E3A3E] font-[Inter,sans-serif]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        /* ---------- keyframes ---------- */
        @keyframes dfcHeroIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes dfcKenBurns { from { transform: scale(1.08); } to { transform: scale(1); } }
        @keyframes dfcPulseDot { 0%, 100% { box-shadow: 0 0 0 0 rgba(161,23,23,0.45); } 70% { box-shadow: 0 0 0 7px rgba(161,23,23,0); } }
        @keyframes dfcUnderline { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes dfcFadeScale { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: scale(1); } }
        @keyframes dfcOverlayIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes dfcGlow { 0%, 100% { box-shadow: 0 0 0 0 rgba(161,23,23,0.35); } 50% { box-shadow: 0 0 0 10px rgba(161,23,23,0); } }

        /* ---------- scroll reveal ---------- */
        .dfc-reveal {
          opacity: 0;
          transform: translate3d(var(--dfc-x, 0), var(--dfc-y, 28px), 0);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1);
          will-change: opacity, transform;
        }
        .dfc-reveal.is-visible { opacity: 1; transform: translate3d(0,0,0); }

        /* ---------- hero ---------- */
        .dfc-hero-bg-img { animation: dfcKenBurns 12s ease-out forwards; }
        .dfc-hero-item { opacity: 0; animation: dfcHeroIn 0.9s cubic-bezier(0.22,1,0.36,1) forwards; }
        .dfc-hero-d1 { animation-delay: .1s; }
        .dfc-hero-d2 { animation-delay: .26s; }
        .dfc-hero-d3 { animation-delay: .42s; }
        .dfc-hero-d4 { animation-delay: .58s; }

        .dfc-cta-glow { animation: dfcGlow 2.6s ease-in-out infinite; transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background-color 0.2s ease; }
        .dfc-cta-glow:hover { animation: none; transform: translateY(-3px); }

        .dfc-scroll-link { transition: color 0.25s ease; display: inline-flex; align-items: center; gap: 0.35rem; }
        .dfc-scroll-link svg { transition: transform 0.25s ease; }
        .dfc-scroll-link:hover svg { transform: translateX(4px); }

        .dfc-eyebrow-dot { display: inline-block; width: 6px; height: 6px; border-radius: 999px; background: #A11717; animation: dfcPulseDot 2.2s ease-out infinite; margin-right: 6px; }

        .dfc-underline { display: block; height: 2px; width: 40px; background: #A11717; margin-top: 10px; transform-origin: left center; animation: dfcUnderline 0.6s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: .2s; transform: scaleX(0); }

        /* ---------- benefits ---------- */
        .dfc-benefit-rule { transition: width 0.4s cubic-bezier(0.22,1,0.36,1), background-color 0.3s ease; }
        .dfc-benefit:hover .dfc-benefit-rule { width: 2.5rem; background-color: #8a1313; }
        .dfc-benefit:hover h3 { color: #A11717; }
        .dfc-benefit h3 { transition: color 0.3s ease; }
        .dfc-benefit { transition: transform 0.35s cubic-bezier(0.22,1,0.36,1); }
        .dfc-benefit:hover { transform: translateY(-4px); }

        /* ---------- why-us callout ---------- */
        .dfc-callout { transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease, border-color 0.3s ease; }
        .dfc-callout:hover { transform: translateY(-4px); box-shadow: 0 16px 30px -14px rgba(28,35,38,0.18); border-color: #A11717; }

        /* ---------- cost factors ---------- */
        .dfc-cost-item { transition: transform 0.3s ease, color 0.3s ease; }
        .dfc-cost-item:hover { transform: translateX(4px); }
        .dfc-cost-dot { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background-color 0.3s ease; }
        .dfc-cost-item:hover .dfc-cost-dot { transform: scale(1.6); background-color: #ff6b57; }

        /* ---------- gallery ---------- */
        .dfc-gallery-btn { transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease; }
        .dfc-gallery-btn:hover { transform: translateY(-5px); box-shadow: 0 18px 34px -16px rgba(28,35,38,0.35); }
        .dfc-gallery-overlay {
          position: absolute; inset: 0; display: flex; align-items: flex-end; padding: 12px;
          background: linear-gradient(to top, rgba(28,35,38,0.65), transparent 55%);
          opacity: 0; transition: opacity 0.35s ease;
        }
        .dfc-gallery-btn:hover .dfc-gallery-overlay { opacity: 1; }
        .dfc-gallery-icon {
          width: 30px; height: 30px; border-radius: 999px; background: rgba(255,255,255,0.92);
          display: flex; align-items: center; justify-content: center; color: #1C2326;
          transform: scale(0.7); opacity: 0; transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease;
        }
        .dfc-gallery-btn:hover .dfc-gallery-icon { transform: scale(1); opacity: 1; }

        /* ---------- lightbox ---------- */
        .dfc-lightbox-overlay { animation: dfcOverlayIn 0.25s ease forwards; }
        .dfc-lightbox-img { animation: dfcFadeScale 0.35s cubic-bezier(0.22,1,0.36,1) forwards; }
        .dfc-lightbox-caption { opacity: 0; animation: dfcHeroIn 0.4s ease forwards; animation-delay: 0.1s; }
        .dfc-lightbox-ctrl { transition: background-color 0.2s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1); }

        /* ---------- footer ---------- */
        .dfc-footer-brand { transition: letter-spacing 0.3s ease; }
        .dfc-footer-brand:hover { letter-spacing: 0.02em; }

        @media (prefers-reduced-motion: reduce) {
          .dfc-reveal, .dfc-hero-item, .dfc-hero-bg-img, .dfc-underline, .dfc-cta-glow, .dfc-lightbox-img, .dfc-lightbox-caption {
            animation: none !important; opacity: 1 !important; transform: none !important; transition: none !important;
          }
          * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
        }
      `}</style>

      {/* ===== HERO — compact ===== */}
      <header className="relative flex h-[60vh] min-h-[420px] items-center overflow-hidden bg-[#1C2326] text-white">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
          alt="Resurfaced residential driveway with a glossy epoxy coating"
          className="dfc-hero-bg-img absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2326] via-[#1C2326]/60 to-[#1C2326]/30" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="dfc-hero-item dfc-hero-d1 text-xs font-medium uppercase tracking-[0.25em] text-[#e2867a]">
            Residential Driveways &amp; Outdoor Areas
          </p>
          <h1 className="dfc-hero-item dfc-hero-d2 mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Improve the look of your driveway with a high-performance floor
            coating system
          </h1>
          <p className="dfc-hero-item dfc-hero-d3 mt-5 max-w-xl text-[15px] text-[#cfd6d4] sm:text-base">
            A beautiful driveway is more than kerb appeal — it can lift the
            value of your property and set the tone the moment guests
            arrive.
          </p>
          <div className="dfc-hero-item dfc-hero-d4 mt-8 flex flex-wrap items-center gap-5">
            <a
              href="/contact"
              className="dfc-cta-glow rounded-full bg-[#A11717] px-7 py-3 text-sm font-semibold text-white hover:bg-[#8a1313] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2326]"
            >
              Request a free site quote
            </a>
            <a
              href="#gallery"
              className="dfc-scroll-link text-sm font-medium text-[#cfd6d4] transition hover:text-white"
            >
              View completed projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* ===== BENEFITS ===== */}
      <section id="benefits" className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717] flex items-center">
            <span className="dfc-eyebrow-dot" />
            What you get
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
            Benefits of resurfacing with a two pack coating system
          </h2>
          <span className="dfc-underline" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.label} delay={i * 90} y={22}>
              <div className="dfc-benefit">
                <span className="dfc-benefit-rule block h-px w-10 bg-[#A11717]" />
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

      {/* ===== WHY / FIRST IMPRESSIONS ===== */}
      <section
        id="why-us"
        className="border-y border-[#eceeed] bg-[#FAFBFB] py-14"
      >
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717] flex items-center">
              <span className="dfc-eyebrow-dot" />
              Why it works
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
              The first thing guests notice
            </h2>
            <span className="dfc-underline" />
          </Reveal>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <Reveal x={-20} y={12} className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <p>
                A beautiful driveway is a functional necessity and an
                essential part of a property's overall appeal and value. It
                contributes to a homeowner's pride in their home, and
                potential buyers are often willing to pay more for a home
                with a well-maintained, attractive exterior.
              </p>
              <p>
                The driveway is often the very first thing guests notice
                when arriving at a property — a beautiful driveway sets the
                tone for their visit and leaves a lasting impression.
              </p>
            </Reveal>

            <Reveal delay={150} x={20} y={12}>
              <p className="dfc-callout rounded-xl border border-[#eceeed] bg-white px-5 py-4 text-sm text-[#3f4a4d]">
                Visit our showrooms in Silverwater and Rydalmere to see the
                different designs and finish options available for
                resurfacing your driveway.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== COST FACTORS ===== */}
      <section id="cost" className="bg-[#0E1214] py-14">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717] flex items-center justify-center">
              <span className="dfc-eyebrow-dot" />
              Getting a quote
            </p>
            <h2 className="mt-3 text-center text-3xl font-semibold leading-tight text-white">
              What determines the cost to resurface a driveway
            </h2>
            <span className="dfc-underline mx-auto" />
          </Reveal>

          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {COST_FACTORS.map((factor, i) => (
              <Reveal key={factor} as="li" delay={i * 90} y={16} className="dfc-cost-item flex items-start gap-3 text-sm leading-relaxed text-[#e7eaec]">
                <span
                  className="dfc-cost-dot mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#A11717]"
                  aria-hidden="true"
                />
                {factor}
              </Reveal>
            ))}
          </ul>

          <Reveal delay={200} className="mt-10 text-center">
            <p className="mx-auto max-w-xl text-sm text-[#cfd6d4]">
              To get an idea of cost, send us your address and a few photos
              of your driveway and we'll get back to you with an estimate.
            </p>
            <a
              href="/contact"
              className="dfc-cta-glow mt-6 inline-block rounded-full bg-[#A11717] px-7 py-3 text-sm font-semibold text-white hover:bg-[#8a1313]"
            >
              Send photos for an estimate
            </a>
          </Reveal>
        </div>
      </section>

      {/* ===== GALLERY — 4 columns ===== */}
      <section id="gallery" className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717] flex items-center">
              <span className="dfc-eyebrow-dot" />
              Completed work
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]">
              Photos of our completed outdoor &amp; driveway resurfacing
              projects
            </h2>
            <span className="dfc-underline" />
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {GALLERY.map((img, i) => (
              <Reveal key={img.src} delay={(i % 4) * 90} y={26}>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="dfc-gallery-btn group relative overflow-hidden rounded-xl bg-[#EDF1F0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A11717] focus-visible:ring-offset-2 w-full"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-56"
                    loading="lazy"
                  />
                  <span className="dfc-gallery-overlay">
                    <span className="dfc-gallery-icon">
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
          <span className="dfc-footer-brand text-sm font-semibold text-[#1C2326]">
            Sydney <span className="text-[#A11717]">Epoxy</span> Floor
          </span>
          <p className="max-w-md text-sm text-[#5b6669]">
            Turn your driveway into a long-lasting, eye-catching masterpiece
            — get a free quote today.
          </p>
          <a
            href="/contact"
            className="dfc-cta-glow rounded-full bg-[#A11717] px-7 py-3 text-sm font-semibold text-white hover:bg-[#8a1313]"
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
