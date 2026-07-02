import React, { useState, useEffect, useRef } from "react";

/**
 * Sydney Concrete Grinding — Dustless Concrete Grinding Service
 *
 * Same visual system as the previous SEF pages: white surfaces, steel-grey
 * neutrals, and a single deep-red accent (#A11717) used sparingly. Compact
 * hero, simple sections, service cards, image gallery.
 */

const LOCATIONS = [
  "Sydney",
  "Wollongong",
  "Blue Mountains",
  "Gosford",
  "Newcastle",
  "Canberra",
];

const SERVICES_LIST = [
  {
    label: "Concrete grinding",
    detail: "Smooths, levels and prepares concrete surfaces for a flawless finish.",
  },
  {
    label: "Grinding over tiles",
    detail: "De-glosses and preps tiled surfaces for coating or re-tiling.",
  },
  {
    label: "Existing coating removal",
    detail: "Strips old coatings back to a clean, workable substrate.",
  },
  {
    label: "Glue & adhesive removal",
    detail: "Clears tile adhesive and residue ahead of your next surface.",
  },
  {
    label: "Line marking removal",
    detail: "Removes old line marking cleanly, ready for re-marking.",
  },
];

const DETAILED_SERVICES = [
  {
    title: "Concrete Grinding",
    detail:
      "Advanced floor grinding techniques and equipment smooth and level concrete surfaces, removing existing coatings and imperfections and preparing them for a flawless finish. Precision work that gets your floors or walls ready for whatever comes next, aesthetic or functional.",
  },
  {
    title: "Tile Surface Preparation",
    detail:
      "Planning to replace or re-tile a surface? We meticulously remove existing tile adhesive or other coatings, making sure the surface is perfectly clean and ready for the next phase of your project.",
  },
  {
    title: "Dust-Free Operation",
    detail:
      "Cutting-edge dust extraction equipment and methods minimise dust and airborne particles throughout the entire process — a cleaner environment for our team and clients, and a reduced risk of respiratory issues.",
  },
  {
    title: "Professional Expertise",
    detail:
      "With over 21 years operating in the industry, our skilled team takes pride in attention to detail and a commitment to customer satisfaction. Trust us to handle your project with real professionalism.",
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
  "House Slabs",
  "Sports Fields",
];

const GALLERY = [
  {
    src: "/src/assets/image1.jpg",
    alt: "Dustless concrete grinding equipment in a warehouse",
  },
  {
    src: "/src/assets/image2.jpg",
    alt: "Concrete grinding preparation in a commercial kitchen",
  },
  {
    src: "/src/assets/image3.jpg",
    alt: "Diamond grinding of a garage floor slab",
  },
  {
    src: "/src/assets/iamge4.jpg",
    alt: "Tile surface preparation before recoating",
  },
  {
    src: "/src/assets/image5.jpg",
    alt: "Concrete grinding in an industrial workshop",
  },
  {
    src: "/src/assets/image6.jpg",
    alt: "Coating removal on a factory floor",
  },
  {
    src: "/src/assets/image7.jpg",
    alt: "Line marking removal in a warehouse aisle",
  },
  {
    src: "/src/assets/image8.jpg",
    alt: "Concrete grinding on a sports field slab",
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
      className={`scg-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{
        transitionDelay: visible ? `${delay}ms` : "0ms",
        "--scg-y": `${y}px`,
        "--scg-x": `${x}px`,
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
      className="scg-lightbox-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="scg-lightbox-ctrl absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:rotate-90 sm:right-6 sm:top-6"
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
        className="scg-lightbox-ctrl absolute left-3 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:-translate-x-1 sm:left-6"
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
        className="scg-lightbox-ctrl absolute right-3 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:translate-x-1 sm:right-6"
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
          className="scg-lightbox-img max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
        />
        <figcaption className="scg-lightbox-caption mt-4 text-center text-sm text-[#cfd6d4]">
          {img.alt}
          <span className="ml-2 text-[#7a8487]">
            ({index + 1}/{images.length})
          </span>
        </figcaption>
      </figure>
    </div>
  );
}

export default function SydneyConcreteGrinding() {
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
        @keyframes scgHeroIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scgKenBurns { from { transform: scale(1.08); } to { transform: scale(1); } }
        @keyframes scgPulseDot { 0%, 100% { box-shadow: 0 0 0 0 rgba(161,23,23,0.45); } 70% { box-shadow: 0 0 0 7px rgba(161,23,23,0); } }
        @keyframes scgUnderline { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes scgFadeScale { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: scale(1); } }
        @keyframes scgOverlayIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scgGlow { 0%, 100% { box-shadow: 0 0 0 0 rgba(161,23,23,0.35); } 50% { box-shadow: 0 0 0 10px rgba(161,23,23,0); } }
        @keyframes scgSeparatorFade { from { opacity: 0; } to { opacity: 1; } }

        /* ---------- scroll reveal ---------- */
        .scg-reveal {
          opacity: 0;
          transform: translate3d(var(--scg-x, 0), var(--scg-y, 28px), 0);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1);
          will-change: opacity, transform;
        }
        .scg-reveal.is-visible { opacity: 1; transform: translate3d(0,0,0); }

        /* ---------- hero ---------- */
        .scg-hero-bg-img { animation: scgKenBurns 12s ease-out forwards; }
        .scg-hero-item { opacity: 0; animation: scgHeroIn 0.9s cubic-bezier(0.22,1,0.36,1) forwards; }
        .scg-hero-d1 { animation-delay: .1s; }
        .scg-hero-d2 { animation-delay: .24s; }
        .scg-hero-d3 { animation-delay: .38s; }
        .scg-hero-d4 { animation-delay: .52s; }
        .scg-hero-d5 { animation-delay: .66s; }

        .scg-loc-item { opacity: 0; animation: scgHeroIn 0.6s ease forwards; }
        .scg-loc-sep { opacity: 0; animation: scgSeparatorFade 0.6s ease forwards; }

        .scg-cta-glow { animation: scgGlow 2.6s ease-in-out infinite; transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background-color 0.2s ease; }
        .scg-cta-glow:hover { animation: none; transform: translateY(-3px); }

        .scg-scroll-link { transition: color 0.25s ease; display: inline-flex; align-items: center; gap: 0.35rem; }
        .scg-scroll-link svg { transition: transform 0.25s ease; }
        .scg-scroll-link:hover svg { transform: translateX(4px); }

        .scg-eyebrow-dot { display: inline-block; width: 6px; height: 6px; border-radius: 999px; background: #A11717; animation: scgPulseDot 2.2s ease-out infinite; margin-right: 6px; }

        .scg-underline { display: block; height: 2px; width: 40px; background: #A11717; margin-top: 10px; transform-origin: left center; animation: scgUnderline 0.6s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: .2s; transform: scaleX(0); }

        /* ---------- service cards ---------- */
        .scg-benefit-rule { transition: width 0.4s cubic-bezier(0.22,1,0.36,1), background-color 0.3s ease; }
        .scg-benefit:hover .scg-benefit-rule { width: 2.5rem; background-color: #8a1313; }
        .scg-benefit:hover h3 { color: #A11717; }
        .scg-benefit h3 { transition: color 0.3s ease; }
        .scg-benefit { transition: transform 0.35s cubic-bezier(0.22,1,0.36,1); }
        .scg-benefit:hover { transform: translateY(-4px); }

        /* ---------- why-us callout ---------- */
        .scg-callout { transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease, border-color 0.3s ease; }
        .scg-callout:hover { transform: translateY(-4px); box-shadow: 0 16px 30px -14px rgba(28,35,38,0.18); border-color: #A11717; }

        /* ---------- detailed service cards ---------- */
        .scg-service-card { transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease, border-color 0.3s ease; }
        .scg-service-card:hover { transform: translateY(-6px); box-shadow: 0 22px 40px -18px rgba(28,35,38,0.22); border-color: #A11717; }
        .scg-service-card:hover .scg-benefit-rule { width: 2.5rem; background-color: #8a1313; }
        .scg-service-card:hover h3 { color: #A11717; }
        .scg-service-card h3 { transition: color 0.3s ease; }

        /* ---------- applications ---------- */
        .scg-area-chip { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), color 0.3s ease; }
        .scg-area-chip:hover { transform: translateY(-3px); color: #ffffff; }
        .scg-area-chip:hover .scg-area-dot { transform: scale(1.7); background-color: #ff6b57; }
        .scg-area-dot { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background-color 0.3s ease; }

        /* ---------- gallery ---------- */
        .scg-gallery-btn { transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease; }
        .scg-gallery-btn:hover { transform: translateY(-5px); box-shadow: 0 18px 34px -16px rgba(28,35,38,0.35); }
        .scg-gallery-overlay {
          position: absolute; inset: 0; display: flex; align-items: flex-end; padding: 12px;
          background: linear-gradient(to top, rgba(28,35,38,0.65), transparent 55%);
          opacity: 0; transition: opacity 0.35s ease;
        }
        .scg-gallery-btn:hover .scg-gallery-overlay { opacity: 1; }
        .scg-gallery-icon {
          width: 30px; height: 30px; border-radius: 999px; background: rgba(255,255,255,0.92);
          display: flex; align-items: center; justify-content: center; color: #1C2326;
          transform: scale(0.7); opacity: 0; transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease;
        }
        .scg-gallery-btn:hover .scg-gallery-icon { transform: scale(1); opacity: 1; }

        /* ---------- lightbox ---------- */
        .scg-lightbox-overlay { animation: scgOverlayIn 0.25s ease forwards; }
        .scg-lightbox-img { animation: scgFadeScale 0.35s cubic-bezier(0.22,1,0.36,1) forwards; }
        .scg-lightbox-caption { opacity: 0; animation: scgHeroIn 0.4s ease forwards; animation-delay: 0.1s; }
        .scg-lightbox-ctrl { transition: background-color 0.2s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1); }

        /* ---------- footer ---------- */
        .scg-footer-brand { transition: letter-spacing 0.3s ease; }
        .scg-footer-brand:hover { letter-spacing: 0.02em; }

        @media (prefers-reduced-motion: reduce) {
          .scg-reveal, .scg-hero-item, .scg-hero-bg-img, .scg-underline, .scg-cta-glow, .scg-lightbox-img, .scg-lightbox-caption, .scg-loc-item, .scg-loc-sep {
            animation: none !important; opacity: 1 !important; transform: none !important; transition: none !important;
          }
          * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
        }
      `}</style>

      {/* ===== HERO — compact ===== */}
      <header className="relative flex h-[60vh] min-h-[420px] items-center overflow-hidden bg-[#1C2326] text-white">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80"
          alt="Dustless diamond concrete grinding equipment on a warehouse floor"
          className="scg-hero-bg-img absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2326] via-[#1C2326]/60 to-[#1C2326]/30" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="scg-hero-item scg-hero-d1 text-xs font-medium uppercase tracking-[0.25em] text-[#e2867a]">
            Sydney Concrete Grinding
          </p>
          <h1 className="scg-hero-item scg-hero-d2 mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Dustless concrete grinding &amp; surface preparation
          </h1>
          <p className="scg-hero-item scg-hero-d3 mt-5 max-w-xl text-[15px] text-[#cfd6d4] sm:text-base">
            Take the hassle out of preparing your floor — state-of-the-art
            equipment and a genuinely dust-free operation, ready for
            whatever comes next.
          </p>

          <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
            {LOCATIONS.map((loc, i) => (
              <React.Fragment key={loc}>
                <li
                  className="scg-loc-item text-sm text-[#cfd6d4]"
                  style={{ animationDelay: `${0.65 + i * 0.08}s` }}
                >
                  {loc}
                </li>
                {i < LOCATIONS.length - 1 && (
                  <span
                    className="scg-loc-sep text-sm text-[#5b6669]"
                    style={{ animationDelay: `${0.7 + i * 0.08}s` }}
                    aria-hidden="true"
                  >
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </ul>

          <div className="scg-hero-item scg-hero-d5 mt-8 flex flex-wrap items-center gap-5">
            <a
              href="/contact"
              className="scg-cta-glow rounded-full bg-[#A11717] px-7 py-3 text-sm font-semibold text-white hover:bg-[#8a1313] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2326]"
            >
              Request a free site quote
            </a>
            <a
              href="#gallery"
              className="scg-scroll-link text-sm font-medium text-[#cfd6d4] transition hover:text-white"
            >
              View completed projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* ===== SERVICES WE PROVIDE ===== */}
      <section id="benefits" className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717] flex items-center">
            <span className="scg-eyebrow-dot" />
            Services we provide
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
            Take the hassle out of preparing your floor
          </h2>
          <span className="scg-underline" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES_LIST.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} y={22}>
              <div className="scg-benefit">
                <span className="scg-benefit-rule block h-px w-10 bg-[#A11717]" />
                <h3 className="mt-4 text-[15px] font-semibold text-[#1C2326]">
                  {s.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b6669]">
                  {s.detail}
                </p>
              </div>
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
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717] flex items-center">
              <span className="scg-eyebrow-dot" />
              Why it works
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
              Exceptional surface preparation, without the mess
            </h2>
            <span className="scg-underline" />
          </Reveal>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <Reveal x={-20} y={12} className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <p>
                Sydney Concrete Grinding is dedicated to exceptional surface
                preparation for both concrete and tile surfaces. With
                state-of-the-art floor preparation equipment and expertise,
                we make sure your surfaces are perfectly prepared for
                whatever comes next.
              </p>
              <p>
                One of the key benefits of choosing us is our commitment to
                a dust-free operation. Advanced technology and specialised
                dust extractors let us complete our work efficiently while
                keeping dust at bay, without compromising quality.
              </p>
            </Reveal>

            <Reveal delay={150} x={20} y={12}>
              <p className="scg-callout rounded-xl border border-[#eceeed] bg-white px-5 py-4 text-sm text-[#3f4a4d]">
                <span className="font-semibold text-[#1C2326]">
                  21+ years in the industry.
                </span>{" "}
                We prioritise quality, efficiency and customer satisfaction
                above all else, working closely with clients to deliver
                tailored surface preparation solutions.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== DETAILED SERVICES ===== */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717] flex items-center">
            <span className="scg-eyebrow-dot" />
            Our services
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
            How we prepare your surface
          </h2>
          <span className="scg-underline" />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {DETAILED_SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 110} y={26}>
              <div className="scg-service-card rounded-2xl border border-[#eceeed] bg-white p-6 sm:p-8">
                <span className="scg-benefit-rule block h-px w-10 bg-[#A11717]" />
                <h3 className="mt-4 text-[15px] font-semibold text-[#1C2326]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b6669]">
                  {s.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== APPLICATIONS ===== */}
      <section id="areas" className="bg-[#0E1214] py-12">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717] flex items-center justify-center">
              <span className="scg-eyebrow-dot" />
              Suitable for
            </p>
            <h2 className="mt-3 text-center text-3xl font-semibold leading-tight text-white">
              Diamond grinding for every kind of space
            </h2>
            <span className="scg-underline mx-auto" />
          </Reveal>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {APPLICATIONS.map((area, i) => (
              <Reveal key={area} as="li" delay={i * 55} y={10} className="scg-area-chip flex items-center gap-2 text-sm text-[#e7eaec]">
                <span
                  className="scg-area-dot h-1.5 w-1.5 flex-none rounded-full bg-[#A11717]"
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
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717] flex items-center">
              <span className="scg-eyebrow-dot" />
              Completed work
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]">
              Photos of our completed concrete grinding projects
            </h2>
            <span className="scg-underline" />
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {GALLERY.map((img, i) => (
              <Reveal key={img.src} delay={(i % 4) * 90} y={26}>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="scg-gallery-btn group relative overflow-hidden rounded-xl bg-[#EDF1F0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A11717] focus-visible:ring-offset-2 w-full"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-56"
                    loading="lazy"
                  />
                  <span className="scg-gallery-overlay">
                    <span className="scg-gallery-icon">
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
          <span className="scg-footer-brand text-sm font-semibold text-[#1C2326]">
            Sydney <span className="text-[#A11717]">Epoxy</span> Floor
          </span>
          <p className="max-w-md text-sm text-[#5b6669]">
            Let Sydney Concrete Grinding be your partner in surface
            preparation. Contact us today to schedule a consultation.
          </p>
          <a
            href="/contact"
            className="scg-cta-glow rounded-full bg-[#A11717] px-7 py-3 text-sm font-semibold text-white hover:bg-[#8a1313]"
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
