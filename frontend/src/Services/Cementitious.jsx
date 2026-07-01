import React, { useState, useEffect } from "react";

/**
 * Cementitious Polyurethane (Poly-Cement) Floor Coatings — landing page
 *
 * Same visual system as the Commercial Kitchen Flooring page: white
 * surfaces, steel-grey neutrals, and a single deep-red accent (#A11717)
 * used sparingly. Compact hero, simple sections, image gallery.
 */

const BENEFITS = [
  {
    label: "High impact & abrasion resistance",
    detail: "Built to take dropped equipment and constant foot and wheel traffic.",
  },
  {
    label: "Chemical & thermal resistance",
    detail: "Stands up to acids, alkalis, amines, salts and solvents.",
  },
  {
    label: "Moisture-tolerant",
    detail: "Compatible with newly cured concrete, even in damp conditions.",
  },
  {
    label: "HACCP compliant",
    detail: "Meets hygiene requirements for food processing environments.",
  },
  {
    label: "-25°C to +130°C service range",
    detail: "Performs in freezers, chiller rooms and high-heat wash areas alike.",
  },
];

const WHY_POINTS = [
  "Tested antimicrobial performance",
  "Odourless, non-tainting to food",
  "Electrostatic propensity protection",
  "High impact and abrasion resistance",
  "Excellent chemical resistance",
  "High thermal shock resistance",
  "Moisture-tolerant, compatible with newly cured concrete",
  "Wide service temperature range from -25°C to +130°C",
  "Easy to clean and maintain, steam-cleanable",
  "Complies with HACCP requirements",
  "Fire resistant",
  "Fast return to service, adjustable cure time",
];

const AREAS = [
  {
    name: "Meat Processing Plants",
    icon: (
      <path
        d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"
        strokeLinejoin="round"
      />
    ),
  },
  {
    name: "Dairy, Food & Beverage Facilities",
    icon: <path d="M9 2h6l-1 6h2l-5 14-1-8H8l1-6V2z" strokeLinejoin="round" />,
  },
  {
    name: "Warehouses & Distribution Centres",
    icon: (
      <>
        <path d="M4 4h16v4H4z" strokeLinejoin="round" />
        <path d="M6 8v12M18 8v12M4 20h16" strokeLinecap="round" />
      </>
    ),
  },
  {
    name: "Chemical & Minerals Processing",
    icon: (
      <>
        <path d="M9 2h6v5l4 11a1 1 0 01-1 2H6a1 1 0 01-1-2l4-11V2z" strokeLinejoin="round" />
        <path d="M8 15h8" strokeLinecap="round" />
      </>
    ),
  },
  {
    name: "Mining & Ammonium Nitrate Storage",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M7 12h10" strokeLinecap="round" />
      </>
    ),
  },
  {
    name: "Chiller Rooms",
    icon: <path d="M12 2v20M5 6l14 12M19 6L5 18" strokeLinecap="round" />,
  },
  {
    name: "Food Waste / Treatment Plants",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    name: "Heavy Engineering Workshops",
    icon: (
      <path
        d="M14.7 6.3a4 4 0 01-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 015.4-5.4l-2.6 2.6-2-2 2.6-2.6z"
        strokeLinejoin="round"
      />
    ),
  },
  {
    name: "Commercial Kitchens & Bars",
    icon: (
      <>
        <path d="M4 4h16v4H4z" strokeLinejoin="round" />
        <path d="M6 8v12M18 8v12M4 20h16" strokeLinecap="round" />
      </>
    ),
  },
];

const GALLERY = [
  {
    src: "/src/assets/image9.jpg",
    alt: "Finished poly-cement floor in a meat processing plant",
  },
  {
    src: "/src/assets/image10.jpg",
    alt: "Seamless cementitious polyurethane flooring in a food facility",
  },
  {
    src: "/src/assets/image11.jpg",
    alt: "Slip-resistant heavy-duty floor coating near processing equipment",
  },
  {
    src: "/src/assets/image22.jpg",
    alt: "Industrial poly-cement floor coating finished project",
  },
  {
    src: "/src/assets/image25.jpg",
    alt: "Coated flooring in a chiller room",
  },
  {
    src: "/src/assets/image24.jpg",
    alt: "Hygienic seamless flooring in a food and beverage plant",
  },
  {
    src: "/src/assets/image6.jpg",
    alt: "Durable cementitious resin flooring in a heavy engineering workshop",
  },
  {
    src: "/src/assets/image12.jpg",
    alt: "Industrial coated floor in a warehouse loading area",
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

export default function PolyCementFlooring() {
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
          src="/src/assets/image16.jpg"
          alt="Cementitious polyurethane floor coating in a food processing facility"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2326] via-[#1C2326]/60 to-[#1C2326]/30" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#e2867a]">
            Cementitious Polyurethane Flooring Systems
          </p>
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Poly-cement floor coatings for ultra-protection in busy food
            processing facilities, kitchens &amp; workshops
          </h1>
          <p className="mt-5 max-w-xl text-[15px] text-[#cfd6d4] sm:text-base">
            Engineered for extreme conditions — high impact, chemical
            exposure, and thermal shock — while staying compliant with HACCP
            hygiene standards.
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
          Ultra-protection engineered for the toughest floors
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

      {/* ===== WHY POLY-CEMENT ===== */}
      <section
        id="why-us"
        className="border-y border-[#eceeed] bg-[#FAFBFB] py-14"
      >
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Why it works
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
            Why poly-cement is the best option for freezers &amp; heavy-duty
            food processing areas
          </h2>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <p>
                Poly-cement, or polyurethane cement, is designed for floors
                where extreme protection is required, resisting a broad range
                of organic and inorganic acids, alkalis, amines, salts and
                solvents.
              </p>
              <p>
                Where standard epoxy systems fall short under sustained heat,
                chemical exposure and mechanical stress, poly-cement holds up
                — making it the system of choice for the most demanding food
                and industrial environments.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {WHY_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-sm text-[#3f4a4d]"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#A11717]"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== AREAS SERVED ===== */}
      <section id="areas" className="bg-[#0E1214] py-12">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Suitable for
          </p>
          <h2 className="mt-3 text-center text-3xl font-semibold leading-tight text-white">
            Areas of application
          </h2>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {AREAS.map((area) => (
              <li
                key={area.name}
                className="flex items-center gap-2 text-sm text-[#e7eaec]"
              >
                <span
                  className="h-1.5 w-1.5 flex-none rounded-full bg-[#A11717]"
                  aria-hidden="true"
                />
                {area.name}
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
            Photos of our completed poly-cement flooring projects
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
            Get a personalised quote for your food processing, freezer or
            heavy-duty flooring project.
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
