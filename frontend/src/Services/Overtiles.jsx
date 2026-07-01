import React, { useState, useEffect, useRef, useCallback } from "react";
import before1 from "/src/assets/before1.jpeg";
import after1 from "/src/assets/after1.jpg";

import before2 from "/src/assets/before2.webp";
import after2 from "/src/assets/after2.webp";

import before3 from "/src/assets/before3.jpg";
import after3 from "/src/assets/after3.jpg";

/**
 * Epoxy Flooring Over Tiles — landing page
 *
 * Same visual system as the previous SEF pages: white surfaces, steel-grey
 * neutrals, and a single deep-red accent (#A11717) used sparingly. Compact
 * hero, simple sections, before/after slider, system breakdown with
 * application steps, video showcase, image gallery.
 */

const BENEFITS = [
  {
    label: "Tile renewal",
    detail: "Refreshes worn tiles, covering imperfections, cracks and signs of wear.",
  },
  {
    label: "Variety of systems",
    detail: "Solid colour, flake, or metallic and marble — all applied over existing tiles.",
  },
  {
    label: "Hygienic & safe",
    detail: "Doesn't harbour bacteria, meeting Australian Health and Safety Standards.",
  },
  {
    label: "Commercial-grade durability",
    detail: "Withstands heavy foot traffic, spills and constant kitchen activity.",
  },
  {
    label: "No disruption to floor height",
    detail: ">5mm dry film thickness, so doors and cabinets don't need removing.",
  },
];

const APPLICATIONS = [
  "Commercial Kitchens",
  "Residential Garage Floors",
  "Mechanical Workshops",
  "Shopping Centres",
  "Restaurant Floors",
  "Lift Lobbies",
  "Balconies",
  "Bars & Cafes",
];

const SYSTEMS = [
  {
    title: "Solid or Single-Colour System",
    tagline: "Seamless, clean and cost-effective.",
    description:
      "A seamless, smooth surface that enhances the visual appeal of tiled floors with a clean, modern look. Cost-effective and easy to maintain. The roller-applied finish with fine anti-slip media achieves an R10 or P3 slip rating, and can be made more anti-slip on request. A polyurethane topcoat is also available as an alternative for UV resistance and extra protection. This finish marks and scratches more easily than the flake system — the flake option below is also available in a single colour if you want more resistance.",
    cure: "Light foot traffic next day, heavy traffic after 5 days.",
    steps: [
      "Preparation — scan the floor, remove drummy tiles, and diamond grind to de-gloss and create mechanical bonding.",
      "Patching — patch removed tile areas using SEF Epoxy Mortar.",
      "Priming — apply 1 coat of SEF100EP Tile-Lock Primer at 2mm.",
      "2nd stage grinding — grind over the cured primer to remove high points and fill low points with SEF-EP Filler.",
      "1st top coat — one coat of Premium Grade Epoxy Top Coat with fine anti-slip media at 150 microns DFT.",
      "Final coat — a second coat of Premium Grade Epoxy Top Coat with fine anti-slip media at 150 microns DFT.",
    ],
  },
  {
    title: "Premium Seamless Flake System",
    tagline: "Extremely durable, decorative, and easy to maintain.",
    description:
      "The SEF Premium Full Flake Epoxy and Polyaspartic Coating System beautifies your floor while delivering years of trouble-free service. Eco-friendly and available in 20+ custom flake patterns, imperfections and scratches are barely visible and wear takes significantly longer to show. The flooring is naturally slip resistant without sacrificing ease of cleaning.",
    cure: "Light foot traffic next day, heavy traffic after 5 days.",
    note: "Visit our Rydalmere or Silverwater showrooms to see the available finishes in person.",
    steps: [
      "Preparation — scan the floor, remove drummy tiles, and diamond grind to de-gloss and create mechanical bonding.",
      "Patching — patch removed tile areas using SEF Epoxy Mortar.",
      "Priming — apply 1 coat of SEF100EP Tile-Lock Primer at 2mm.",
      "2nd stage grinding — grind over the cured primer to remove high points and fill low points with SEF-EP Filler.",
      "Base coat & flake — apply Premium Grade Coloured Epoxy Resin and broadcast full flake to cover completely.",
      "Cleaning excess flake — vacuum up loose, uncollected flake.",
      "Protective clear coat — one full coat of ultra high solids polyaspartic clear coat, squeegee-applied at 350 microns DFT.",
    ],
  },
  {
    title: "Metallic & Marble Effect System",
    tagline: "Shine and sophistication in a durable finish.",
    description:
      "Metallic and marble epoxy transforms mundane tiled surfaces into dazzling works of art, with endless design possibilities to suit any interior. The metallic tint reinforces the floor's strength and durability, while one simple clean brings back a shiny, like-new surface.",
    cure: "Light foot traffic next day, heavy traffic after 5 days.",
    note: "Our metallic system is on display at 6 Giffard Street, Silverwater NSW 2128 — come see how it performs in person.",
    steps: [
      "Preparation — scan the floor, remove drummy tiles, and diamond grind to de-gloss and create mechanical bonding.",
      "Patching — patch removed tile areas using SEF Epoxy Mortar.",
      "Priming — apply 1 coat of SEF100EP Tile-Lock Primer at 2mm.",
      "2nd stage grinding — grind over the cured primer, fill low points with SEF-EP Filler, then vacuum and mop.",
      "Coloured base coat — apply Premium Grade Coloured Epoxy Resin at 150 microns; ensure a uniform look before proceeding.",
      "Decorative metallic or marble effect — apply the decorative layer at 500 microns and allow to cure.",
      "Protective clear coat — one full coat of ultra high solids polyaspartic clear coat, roller-applied at 150 microns DFT.",
    ],
  },
];

const VIDEOS = [
  {
    title: "Epoxy Flooring Applied Over Old Tiles in a Commercial Kitchen",
    embedUrl: "https://www.youtube.com/embed/G-MbLHCdoLA",
  },
  {
    title: "Metallic Epoxy Flooring Applied Over Old Tiles",
    embedUrl: "https://www.youtube.com/embed/H9cotao1r7E",
  },
];
const GALLERY = [
  {
    src: "/src/assets/image3.jpg",
    alt: "Epoxy flooring applied over old tiles in a kitchen",
  },
  {
    src: "/src/assets/iamge4.jpg",
    alt: "Solid colour epoxy coating over tiled restaurant floor",
  },
  {
    src: "/src/assets/image5.jpg",
    alt: "Flake epoxy coating applied over tiles in a garage",
  },
  {
    src: "/src/assets/image6.jpg",
    alt: "Metallic epoxy floor over tiles in a shopping centre",
  },
  {
    src: "/src/assets/image7.jpg",
    alt: "Epoxy over tile flooring in a mechanical workshop",
  },
  {
    src: "/src/assets/image8.jpg",
    alt: "Epoxy tiled flooring transformation in a lift lobby",
  },
  {
    src: "/src/assets/image9.jpg",
    alt: "Epoxy coating over old tiles on a balcony",
  },
  {
    src: "/src/assets/image10.jpg",
    alt: "Epoxy tile renewal in a cafe",
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
        src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&q=80"
        alt="Old worn tiled floor before epoxy coating"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1400&q=80"
          alt="Finished epoxy floor applied over tiles"
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

function SystemCard({ system }) {
  const [stepsOpen, setStepsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-[#eceeed] bg-white p-6 sm:p-8">
      <span className="block h-px w-10 bg-[#A11717]" />
      <h3 className="mt-4 text-xl font-semibold text-[#1C2326]">
        {system.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-[#A11717]">
        {system.tagline}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-[#5b6669]">
        {system.description}
      </p>

      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-[#7a8487]">
        {system.cure}
      </p>

      {system.note && (
        <p className="mt-4 rounded-xl border border-[#eceeed] bg-[#FAFBFB] px-4 py-3 text-sm text-[#3f4a4d]">
          {system.note}
        </p>
      )}

      <button
        type="button"
        onClick={() => setStepsOpen((v) => !v)}
        className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#1C2326] focus:outline-none"
        aria-expanded={stepsOpen}
      >
        <span
          className={`flex h-6 w-6 flex-none items-center justify-center rounded-full border text-sm leading-none transition-colors ${
            stepsOpen ?
              "border-[#A11717] text-[#A11717]"
            : "border-[#c7cccb] text-[#5b6669]"
          }`}
        >
          {stepsOpen ? "–" : "+"}
        </span>
        Application steps
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          stepsOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <ol className="min-h-0 space-y-3">
          {system.steps.map((step, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-[#3f4a4d]">
              <span className="flex-none font-semibold text-[#A11717]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
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

export default function EpoxyOverTiles() {
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
          src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600&q=80"
          alt="Epoxy flooring applied over old tiles"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2326] via-[#1C2326]/60 to-[#1C2326]/30" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#e2867a]">
            SEF Premium Over Tile Epoxy Flooring
          </p>
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Can epoxy flooring be applied over floor tiles?
          </h1>
          <p className="mt-5 max-w-xl text-[15px] text-[#cfd6d4] sm:text-base">
            Yes — with correct preparation and true industrial grade epoxy
            resin coatings, our system gives new life to most old tiled
            surfaces, without disturbing floor heights.
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
          Fast, durable and smart floor covering systems
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
            Ideal for the following applications
          </h2>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <p>
                Whether it's a busy kitchen, a showroom, or the toughness
                needed in a garage floor, epoxy flooring effortlessly fits
                in, making it a go-to choice across a wide range of spaces.
              </p>
              <p>
                Tiles must be sound and fairly damage-free for the system to
                be applied over them. From there, the process is relatively
                fast, and preparation is the most important key to a
                successful result.
              </p>
              <p className="rounded-xl border border-[#eceeed] bg-white px-5 py-4 text-sm text-[#3f4a4d]">
                Unfortunately, at this point in time, we don't offer this
                service inside homes.
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
          Move the white slider to compare an old tiled floor against our
          finished epoxy over tile system.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                 <BeforeAfterSlider before={before1} after={after1} />
                 <BeforeAfterSlider before={before2} after={after2} />
                 <BeforeAfterSlider before={before3} after={after3} />
               </div>
      </section>

      {/* ===== AVAILABLE SYSTEMS ===== */}
      <section id="systems" className="bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Choose your system
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
            Available epoxy flooring systems for over tiles
          </h2>

          <div className="mt-10 space-y-8">
            {SYSTEMS.map((system) => (
              <SystemCard key={system.title} system={system} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== VIDEO SHOWCASE ===== */}
      <section id="videos" className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
          Watch it happen
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
          See old tiled floors being transformed
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {VIDEOS.map((video) => (
            <div key={video.title}>
              <div className="overflow-hidden rounded-2xl border border-[#eceeed] bg-[#0E1214]">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src={video.embedUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
              <p className="mt-3 text-sm font-medium text-[#1C2326]">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== GALLERY — 4 columns ===== */}
      <section id="gallery" className="bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Completed work
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]">
            Photos of our completed epoxy flooring projects on tiles
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
            Get a personalised quote for your over-tile epoxy flooring
            project.
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
