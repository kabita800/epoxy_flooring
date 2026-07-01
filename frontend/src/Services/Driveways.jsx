import React, { useState, useEffect } from "react";

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
    src: "/src/assets/image66.jpg",
    alt: "Resurfaced residential driveway with epoxy coating",
  },
  {
    src: "/src/assets/image67.jpg",
    alt: "Grey epoxy coated driveway in front of a modern home",
  },
  {
    src: "/src/assets/image68.jpg",
    alt: "Outdoor patio area with non-slip epoxy finish",
  },
  {
    src: "/src/assets/image69.jpg",
    alt: "Driveway resurfacing project before and after",
  },
  {
    src: "/src/assets/image70.jpg",
    alt: "Two pack polyurethane coated driveway",
  },
  {
    src: "/src/assets/image71.jpg",
    alt: "Outdoor alfresco area with epoxy floor coating",
  },
  {
    src: "/src/assets/image72.jpg",
    alt: "Light-reflective epoxy driveway finish",
  },
  {
    src: "/src/assets/image73.jpg",
    alt: "Completed driveway resurfacing project",
  },
];

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
      `}</style>

      {/* ===== HERO — compact ===== */}
      <header className="relative flex h-[60vh] min-h-[420px] items-center overflow-hidden bg-[#1C2326] text-white">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
          alt="Resurfaced residential driveway with a glossy epoxy coating"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2326] via-[#1C2326]/60 to-[#1C2326]/30" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#e2867a]">
            Residential Driveways &amp; Outdoor Areas
          </p>
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Improve the look of your driveway with a high-performance floor
            coating system
          </h1>
          <p className="mt-5 max-w-xl text-[15px] text-[#cfd6d4] sm:text-base">
            A beautiful driveway is more than kerb appeal — it can lift the
            value of your property and set the tone the moment guests
            arrive.
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
          Benefits of resurfacing with a two pack coating system
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* ===== WHY / FIRST IMPRESSIONS ===== */}
      <section
        id="why-us"
        className="border-y border-[#eceeed] bg-[#FAFBFB] py-14"
      >
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Why it works
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
            The first thing guests notice
          </h2>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
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
            </div>

            <p className="rounded-xl border border-[#eceeed] bg-white px-5 py-4 text-sm text-[#3f4a4d]">
              Visit our showrooms in Silverwater and Rydalmere to see the
              different designs and finish options available for
              resurfacing your driveway.
            </p>
          </div>
        </div>
      </section>

      {/* ===== COST FACTORS ===== */}
      <section id="cost" className="bg-[#0E1214] py-14">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Getting a quote
          </p>
          <h2 className="mt-3 text-center text-3xl font-semibold leading-tight text-white">
            What determines the cost to resurface a driveway
          </h2>

          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {COST_FACTORS.map((factor) => (
              <li
                key={factor}
                className="flex items-start gap-3 text-sm leading-relaxed text-[#e7eaec]"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#A11717]"
                  aria-hidden="true"
                />
                {factor}
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <p className="mx-auto max-w-xl text-sm text-[#cfd6d4]">
              To get an idea of cost, send us your address and a few photos
              of your driveway and we'll get back to you with an estimate.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-block rounded-full bg-[#A11717] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#8a1313]"
            >
              Send photos for an estimate
            </a>
          </div>
        </div>
      </section>

      {/* ===== GALLERY — 4 columns ===== */}
      <section id="gallery" className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Completed work
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]">
            Photos of our completed outdoor &amp; driveway resurfacing
            projects
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
            Turn your driveway into a long-lasting, eye-catching masterpiece
            — get a free quote today.
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
