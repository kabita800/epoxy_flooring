import React, { useState, useEffect, useRef, useCallback } from "react";
import before1 from "/src/assets/before1.jpeg";
import after1 from "/src/assets/after1.jpg";

import before2 from "/src/assets/before2.webp";
import after2 from "/src/assets/after2.webp";

import before3 from "/src/assets/before3.jpg";
import after3 from "/src/assets/after3.jpg";

/**
 * Seamless Epoxy Flake Flooring — landing page
 *
 * Same visual system as the Solid Colour / Metallic & Marble pages:
 * white surfaces, steel-grey neutrals, and a single deep-red accent
 * (#A11717) used sparingly. Compact hero, simple sections, before/after
 * slider, image gallery.
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




function BeforeAfterSlider({ before, after }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
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

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/9] w-full select-none overflow-hidden rounded-2xl border border-[#eceeed]"
    >
      <img
        src="https://images.unsplash.com/photo-1594736797933-d0f06ba30672?w=1400&q=80"
        alt="Bare concrete floor before seamless epoxy flake coating"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1400&q=80"
          alt="Finished seamless epoxy flake floor after coating"
          className="h-full w-full object-cover"
          style={{
            width: containerRef.current
              ? containerRef.current.offsetWidth
              : "100%",
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
          className="relative flex h-10 w-10 flex-none cursor-ew-resize items-center justify-center rounded-full bg-white shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A11717]"
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
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
        className="absolute left-3 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
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
        className="absolute right-3 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
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

export default function SeamlessEpoxyFlakeFlooring() {
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
      `}</style>

      {/* ===== HERO — compact ===== */}
      <header className="relative flex h-[60vh] min-h-[420px] items-center overflow-hidden bg-[#1C2326] text-white">
        <img
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&q=80"
          alt="Seamless epoxy flake floor coating in a garage"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2326] via-[#1C2326]/60 to-[#1C2326]/30" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#e2867a]">
            SEF Premium Seamless Epoxy Flake System
          </p>
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Seamless epoxy flake flooring, contemporary looks with unrivalled
            durability
          </h1>
          <p className="mt-5 max-w-xl text-[15px] text-[#cfd6d4] sm:text-base">
            A premium flake epoxy system built for a contemporary aesthetic
            and straightforward installation into any residence, garage,
            factory or showroom.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="/contact"
              className="rounded-full bg-[#A11717] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#8a1313] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2326]"
            >
              Request a free site quote
            </a>
            <a
              href="#gallery"
              className="text-sm font-medium text-[#cfd6d4] transition hover:text-white"
            >
              View completed projects →
            </a>
          </div>
        </div>
      </header>

      {/* ===== BENEFITS ===== */}
      <section id="benefits" className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
          What you get
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
          Benefits of the SEF Premium full flake epoxy system
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {BENEFITS.map((b) => (
            <div key={b.label}>
              <span className="block h-px w-10 bg-[#A11717]" />
              <h3 className="mt-4 text-[15px] font-semibold text-[#1C2326]">
                {b.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5b6669]">
                {b.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY / APPLICATIONS ===== */}
      <section
        id="why-us"
        className="border-y border-[#eceeed] bg-[#FAFBFB] py-14"
      >
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Why it works
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
            Suitable for the following applications
          </h2>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
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
              <p className="rounded-xl border border-[#eceeed] bg-white px-5 py-4 text-sm text-[#3f4a4d]">
                Visit our Silverwater or Rydalmere showrooms to see the full
                range of flake flooring options in person.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {APPLICATIONS.map((use) => (
                <li
                  key={use}
                  className="flex items-start gap-2 text-sm text-[#3f4a4d]"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#A11717]"
                    aria-hidden="true"
                  />
                  {use}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== BEFORE / AFTER SLIDER ===== */}
      <section id="transformation" className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
          See the difference
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
          Drag the slider to view the transformation
        </h2>
        <p className="mt-3 max-w-xl text-sm text-[#5b6669]">
          Move the white slider to compare a bare floor before coating
          against our seamless epoxy flake finish.
        </p>

         <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <BeforeAfterSlider before={before1} after={after1} />
                  <BeforeAfterSlider before={before2} after={after2} />
                  <BeforeAfterSlider before={before3} after={after3} />
                </div>
      </section>

      {/* ===== GALLERY — 4 columns ===== */}
      <section id="gallery" className="bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Completed work
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]">
            Photos of our completed seamless epoxy flake projects
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {GALLERY.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group relative overflow-hidden rounded-xl bg-[#EDF1F0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A11717] focus-visible:ring-offset-2"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-56"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer id="contact" className="border-t border-[#eceeed] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
          <span className="text-sm font-semibold text-[#1C2326]">
            Sydney <span className="text-[#A11717]">Epoxy</span> Floor
          </span>
          <p className="max-w-md text-sm text-[#5b6669]">
            Get a personalised quote for your seamless epoxy flake floor.
          </p>
          <a
            href="/contact"
            className="rounded-full bg-[#A11717] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#8a1313]"
          >
            Contact us
          </a>
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
