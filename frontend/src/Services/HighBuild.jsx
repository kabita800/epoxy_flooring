import React, { useState, useEffect } from "react";

/**
 * High Build Epoxy Floor Repair — Sydney Epoxy Floors
 *
 * Same visual system as the other SEF pages: white surfaces, steel-grey
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

export default function HighBuildEpoxyFloorRepair() {
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
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=80"
          alt="High build epoxy resin mortar repair on a concrete floor joint"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2326] via-[#1C2326]/60 to-[#1C2326]/30" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#e2867a]">
            High Build Epoxy Floor Repair
          </p>
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Refresh your flooring and increase your safety today
          </h1>
          <p className="mt-5 max-w-xl text-[15px] text-[#cfd6d4] sm:text-base">
            The right joints, patching and striping protect your slab's
            structural integrity — and everyone who works on it. High build
            epoxy resin mortar repairs, done by a team that pays attention
            to the details.
          </p>

          <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
            {LOCATIONS.map((loc, i) => (
              <React.Fragment key={loc}>
                <li className="text-sm text-[#cfd6d4]">{loc}</li>
                {i < LOCATIONS.length - 1 && (
                  <span className="text-sm text-[#5b6669]" aria-hidden="true">
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </ul>

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
              View completed repairs →
            </a>
          </div>
        </div>
      </header>

      {/* ===== REPAIR SERVICES ===== */}
      <section id="benefits" className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
          Repairs we provide
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
          Industrial and commercial epoxy repair, for a range of industries
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {REPAIR_LIST.map((s) => (
            <div key={s.label}>
              <span className="block h-px w-10 bg-[#A11717]" />
              <h3 className="mt-4 text-[15px] font-semibold text-[#1C2326]">
                {s.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5b6669]">
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section
        id="why-us"
        className="border-y border-[#eceeed] bg-[#FAFBFB] py-14"
      >
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Why it works
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
            Attention to detail that protects your slab
          </h2>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <p>
                When it comes to flooring repairs, a company that pays
                attention to the little details makes a big difference.
                Getting the joints, patching and striping right has a real
                impact on facility maintenance, on the structural integrity
                of your floor slab, and on overall safety.
              </p>
              <p>
                Sydney Epoxy Floors provide floor maintenance and repairs
                using high build epoxy resin mortar, so your ongoing needs
                can always be met and your flooring system stays easily
                well-preserved.
              </p>
            </div>

            <p className="rounded-xl border border-[#eceeed] bg-white px-5 py-4 text-sm text-[#3f4a4d]">
              <span className="font-semibold text-[#1C2326]">
                A more economical alternative.
              </span>{" "}
              Epoxy repairs stand the test of time and are easy to keep
              clean, saving you the cost of extra cleaning tools and
              products down the line.
            </p>
          </div>
        </div>
      </section>

      {/* ===== DETAILED SERVICES ===== */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
          Our approach
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
          Time-efficient repairs so your business can soldier on
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {DETAILED_SERVICES.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-[#eceeed] bg-white p-6 sm:p-8"
            >
              <span className="block h-px w-10 bg-[#A11717]" />
              <h3 className="mt-4 text-[15px] font-semibold text-[#1C2326]">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5b6669]">
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== APPLICATIONS ===== */}
      <section id="areas" className="bg-[#0E1214] py-12">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Suitable for
          </p>
          <h2 className="mt-3 text-center text-3xl font-semibold leading-tight text-white">
            Epoxy floor repair for every kind of space
          </h2>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {APPLICATIONS.map((area) => (
              <li
                key={area}
                className="flex items-center gap-2 text-sm text-[#e7eaec]"
              >
                <span
                  className="h-1.5 w-1.5 flex-none rounded-full bg-[#A11717]"
                  aria-hidden="true"
                />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== GALLERY — 4 columns ===== */}
      <section id="gallery" className="bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Completed work
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]">
            Photos of our completed epoxy floor repairs
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
            Stop a small issue becoming a significant one. Contact Sydney
            Epoxy Floors today to schedule a High Build Epoxy Floor Repair
            consultation.
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
