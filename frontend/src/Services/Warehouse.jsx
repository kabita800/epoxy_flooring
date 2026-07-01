import React, { useState, useEffect } from "react";

/**
 * Warehouse Epoxy Flooring Systems — landing page
 *
 * Same design system as the Commercial Kitchen / Industrial pages: white
 * surfaces, a quiet steel-grey neutral palette, and a single deep-red
 * accent (#A11717) used sparingly. Compact hero, simple sections, gallery
 * with lightbox.
 */

const BENEFITS = [
  {
    label: "Seals & protects concrete",
    detail: "Stops concrete dusting and protects the slab beneath.",
  },
  {
    label: "Professional finish",
    detail: "Aesthetically pleasing, seamless and easy on the eye.",
  },
  {
    label: "Built for heavy loads",
    detail: "Exceptionally strong, withstands forklifts and large machinery.",
  },
  {
    label: "Brighter & safer",
    detail: "Lifts surface light reflection and improves workplace safety.",
  },
  {
    label: "Chemical resistant",
    detail: "Resists chemical spills, fuels and oils.",
  },
];

const WHY_ITEMS = [
  {
    label: "Dustproofing",
    detail:
      "Epoxy flooring seals the concrete surface, eliminating concrete dusting and creating a clean, easy-to-maintain warehouse floor.",
  },
  {
    label: "Aesthetically professional finish",
    detail:
      "A smooth, seamless epoxy finish improves the appearance of warehouse floors while creating a brighter, more organised working environment.",
  },
  {
    label: "Built for heavy traffic & forklifts",
    detail:
      "High-performance epoxy systems provide long-term protection against wear and abrasion, extending the life of warehouse concrete floors.",
  },
  {
    label: "Slip and chemical-resistant",
    detail:
      "Anti-slip additives and chemical-resistant coatings reduce slip hazards while protecting floors from oils, fuels and chemical spills.",
  },
  {
    label: "Customisable for warehouse operations",
    detail:
      "Epoxy floors can be customised with safety line marking, walkways, colour zoning and exclusion zones to suit operational and compliance requirements.",
  },
  {
    label: "Durability and longevity",
    detail:
      "Industrial epoxy floors are built to withstand constant forklift movement, heavy loads and impact without cracking or surface breakdown.",
  },
  {
    label: "Long-term cost efficiency",
    detail:
      "Epoxy flooring lasts significantly longer than standard concrete sealers, reducing maintenance, repairs and downtime over time.",
  },
  {
    label: "Seamless & hygienic surface",
    detail:
      "With no grout lines or joints, epoxy flooring improves hygiene standards and makes cleaning faster and more effective.",
  },
  {
    label: "Improved light reflection & visibility",
    detail:
      "Light-coloured epoxy coatings reflect light, increasing visibility and improving overall workplace safety.",
  },
];

const SYSTEMS = [
  {
    name: "Two-Coat Epoxy Flooring System",
    summary:
      "A cost-effective epoxy flooring system designed to seal concrete, eliminate dusting and improve durability in warehouses with light to moderate traffic.",
    best: "Light to medium-duty warehouses and storage areas",
    points: [
      "Typically 300–350 microns dry film thickness",
      "Seals concrete and prevents dusting",
      "Improves appearance and cleanliness",
      "Suitable for pallet jacks and light forklift use",
    ],
  },
  {
    name: "Three-Coat Epoxy Flooring System",
    summary:
      "A more robust epoxy flooring system that provides increased thickness, strength and wear resistance for warehouses with regular forklift traffic.",
    best: "Medium to high-traffic warehouses and distribution centres",
    points: [
      "Approx. 1 mm total dry film thickness",
      "Increased impact and abrasion resistance",
      "Improved durability compared to two-coat systems",
    ],
  },
  {
    name: "High-Build / Heavy-Duty Epoxy Flooring System",
    summary:
      "A high-performance epoxy flooring system engineered for demanding warehouse and industrial environments with heavy machinery, constant traffic and high wear conditions.",
    best: "Heavy-duty warehouses, manufacturing facilities and industrial environments",
    points: [
      "3–5 mm total system thickness",
      "Designed to withstand heavy forklifts, machinery and impact",
    ],
  },
];

const PROCESS_STEPS = [
  {
    title: "Surface Preparation",
    detail:
      "Concrete surfaces are diamond ground or shot blasted to remove contaminants, open the surface and create the correct profile for epoxy adhesion.",
  },
  {
    title: "Crack Repairs & Surface Levelling",
    detail:
      "Cracks, joints and surface imperfections are repaired using epoxy fillers and mortars to create a smooth, uniform base.",
  },
  {
    title: "Epoxy Priming",
    detail:
      "Specialised epoxy primers are applied to penetrate the concrete and ensure strong bonding between the slab and the epoxy system.",
  },
  {
    title: "Epoxy System Application",
    detail:
      "The selected epoxy flooring system is applied in multiple coats to achieve the specified thickness and performance level for the warehouse environment.",
  },
  {
    title: "Anti-Slip & Safety Finishes (If Required)",
    detail:
      "Slip-resistant additives, safety line marking and colour zoning are installed where required to improve safety and operational efficiency.",
  },
];

const SERVICE_AREAS = [
  "Sydney Metro",
  "Western Sydney",
  "Inner West",
  "South West Sydney",
  "Central Coast",
  "Surrounding NSW Regions",
];

const INSTALLED_IN = [
  "Warehouses and Logistics Centres",
  "Manufacturing and Production Facilities",
  "Cold Storage and Food Processing Areas",
  "Workshops and Bulk Storage Facilities",
];

const GALLERY = [
  { src: "/src/assets/image9.jpg", alt: "Finished epoxy floor in a warehouse" },
  {
    src: "/src/assets/image10.jpg",
    alt: "Seamless coated flooring in a distribution centre",
  },
  {
    src: "/src/assets/image11.jpg",
    alt: "Forklift-rated floor coating in a logistics centre",
  },
  {
    src: "/src/assets/image22.jpg",
    alt: "Warehouse epoxy floor coating finished project",
  },
  {
    src: "/src/assets/image25.jpg",
    alt: "Coated flooring in a manufacturing facility",
  },
  {
    src: "/src/assets/image24.jpg",
    alt: "Heavy-duty epoxy flooring in a bulk storage facility",
  },
  {
    src: "/src/assets/image6.jpg",
    alt: "Durable resin flooring in a production facility",
  },
  {
    src: "/src/assets/image12.jpg",
    alt: "Industrial coated floor in a warehouse loading bay",
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

export default function WarehouseFlooring() {
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
          src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=80"
          alt="Warehouse with seamless epoxy floor coating"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2326] via-[#1C2326]/60 to-[#1C2326]/30" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#e2867a]">
            Warehouse Flooring Systems
          </p>
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Warehouse epoxy flooring systems Sydney
          </h1>
          <p className="mt-5 max-w-xl text-[15px] text-[#cfd6d4] sm:text-base">
            Durable, seamless and high-performance epoxy flooring systems
            designed specifically for warehouses, factories and industrial
            facilities across Sydney and NSW.
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
          Benefits
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

      {/* ===== INTRO / SERVICE AREAS ===== */}
      <section className="border-y border-[#eceeed] bg-[#F7F4EE] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Overview
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
            Industrial epoxy flooring for warehouses & distribution centres
          </h2>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <p>
                Warehouse epoxy flooring provides a tough, non-porous surface
                that protects concrete from heavy traffic, forklifts, pallet
                jacks, chemical spills and daily wear.
              </p>
              <p className="font-medium text-[#1C2326]">
                Our systems are commonly installed in:
              </p>
              <ul className="space-y-2">
                {INSTALLED_IN.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 flex-none rounded-full bg-[#A11717]"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <p className="font-medium text-[#1C2326]">We service:</p>
              <ul className="grid grid-cols-2 gap-2">
                {SERVICE_AREAS.map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 flex-none rounded-full bg-[#A11717]"
                      aria-hidden="true"
                    />
                    {area}
                  </li>
                ))}
              </ul>
              <p className="text-[#5b6669]">
                Please scroll to the bottom of the page to view images of our
                finished projects in various systems and colour schemes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY IDEAL ===== */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
              Why Choose Epoxy
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]">
              Why epoxy flooring is ideal for warehouse environments
            </h2>

            <p className="mt-4 text-[15px] leading-relaxed text-[#5B6669]">
              Built for demanding industrial spaces, epoxy flooring provides
              long-lasting performance, improved safety, and a clean
              professional finish with minimal maintenance.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WHY_ITEMS.map((item, index) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#ECEEED] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#A11717]/30 hover:shadow-md"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#A11717]/10 text-sm font-semibold text-[#A11717]">
                  {(index + 1).toString().padStart(2, "0")}
                </div>

                <h3 className="text-lg font-semibold text-[#1C2326]">
                  {item.label}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#5B6669]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SYSTEMS ===== */}
      <section className="border-y border-[#eceeed] bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Our systems
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
            Warehouse epoxy flooring systems we install
          </h2>
          <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-[#3f4a4d]">
            We install a range of industrial epoxy flooring systems to suit
            different warehouse environments, traffic levels and operational
            requirements. Each system is selected based on site conditions,
            forklift traffic and expected wear.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {SYSTEMS.map((sys) => (
              <div
                key={sys.name}
                className="flex flex-col rounded-2xl border border-[#eceeed] bg-white p-6"
              >
                <span className="block h-px w-10 bg-[#A11717]" />
                <h3 className="mt-4 text-lg font-semibold leading-snug text-[#1C2326]">
                  {sys.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5b6669]">
                  {sys.summary}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#A11717]">
                  Best for
                </p>
                <p className="mt-1 text-sm text-[#3f4a4d]">{sys.best}</p>
                <ul className="mt-4 space-y-2 text-sm text-[#3f4a4d]">
                  {sys.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#A11717]"
                        aria-hidden="true"
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
          How we work
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-[#1C2326]">
          Our warehouse epoxy flooring application process
        </h2>
        <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-[#3f4a4d]">
          Every warehouse epoxy flooring system is installed using a proven
          preparation and application process to ensure maximum adhesion,
          durability and long-term performance. The exact system thickness and
          number of coats will vary depending on site conditions and operational
          requirements.
        </p>

        <div className="mt-10 divide-y divide-[#e4e7e6] border-t border-[#e4e7e6]">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.title} className="flex gap-6 py-6">
              <span className="flex-none text-sm font-semibold text-[#A11717]">
                Step {i + 1}
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-[#1C2326]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b6669]">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== COLOUR CHART ===== */}
      <section className="bg-[#0E1214] py-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Colours
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white">
            Epoxy flooring colour chart
          </h2>
          <p className="mt-4 text-[15px] text-[#cfd6d4]">
            Click on the chart below to view and download our full range of
            epoxy colours!
          </p>
          <a
            href="/src/assets/color coding.pdf"
            className="mt-6 inline-block rounded-full border border-[#A11717] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#A11717]"
          >
            View colour chart
          </a>
        </div>
      </section>

      {/* ===== GALLERY — 4 columns ===== */}
      <section id="gallery" className="bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Completed work
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]">
            Photos of our completed warehouse epoxy flooring projects
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
            Get a personalised quote for your warehouse epoxy flooring project.
          </p>
          <a
            href="/contact"
            className="rounded-full bg-[#A11717] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#8a1313]"
          >
            Contact us today!
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
