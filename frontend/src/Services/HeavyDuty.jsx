import React, { useState, useEffect } from "react";

/**
 * Heavy Duty Line Marking Service — landing page
 *
 * Same visual system as the previous SEF pages: white surfaces, steel-grey
 * neutrals, and a single deep-red accent (#A11717) used sparingly. Compact
 * hero, simple sections, material comparison cards, image gallery.
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

export default function HeavyDutyLineMarking() {
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
          src="https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=1600&q=80"
          alt="Heavy duty line marking in an industrial warehouse"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2326] via-[#1C2326]/60 to-[#1C2326]/30" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#e2867a]">
            Servicing Sydney
          </p>
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Heavy duty line marking, built for the busiest facilities
          </h1>
          <p className="mt-5 max-w-xl text-[15px] text-[#cfd6d4] sm:text-base">
            Epoxy, MMA, two pack polyurethane and polyaspartic line marking
            for mega warehouses, workshops, food processing facilities and
            bus depots — engineered to outlast traditional paint.
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
          Heavy duty line marking vs. traditional paint
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

      {/* ===== WHY / PREP ===== */}
      <section
        id="why-us"
        className="border-y border-[#eceeed] bg-[#FAFBFB] py-14"
      >
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Why it works
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
            Preparation is the key
          </h2>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <p>
                Before applying a two pack line marking product, proper
                preparation is crucial. That means cleaning, repairing and
                grinding the surface, plus ensuring the right temperature
                and humidity for application. Skip these steps and you risk
                poor adhesion, premature wear, and a shortened lifespan.
              </p>
              <p>
                It's just as important to choose the right two pack product
                for the specific application, since different formulations
                suit different surfaces and environments.
              </p>
              <p>
                Our team takes the time to properly prepare the surface and
                select the right product, so the resulting line marking is
                more durable and long-lasting — saving time and money over
                the long run.
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

      {/* ===== MATERIAL OPTIONS ===== */}
      <section id="materials" className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
          Choose your material
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
          Heavy duty line marking materials
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-[#5b6669]">
          Two pack products cost around 5 times more than standard line
          marking paint, but the superior adhesion and durability make them
          the right choice for a long-term line marking solution.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {MATERIALS.map((m) => (
            <div
              key={m.title}
              className="rounded-2xl border border-[#eceeed] bg-white p-6"
            >
              <span className="block h-px w-10 bg-[#A11717]" />
              <h3 className="mt-4 text-[15px] font-semibold text-[#1C2326]">
                {m.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5b6669]">
                {m.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TRADITIONAL PAINT COMPARISON ===== */}
      <section className="bg-[#0E1214] py-14">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Weighing it up
          </p>
          <h2 className="mt-3 text-center text-3xl font-semibold leading-tight text-white">
            What about traditional line marking paint?
          </h2>
          <p className="mt-5 text-center text-[15px] leading-relaxed text-[#cfd6d4]">
            Traditional line marking paint, such as waterborne or
            chlorinated rubber products, has been widely used for decades
            in car parks and sports fields. Its fast curing time allows
            quick application with minimal disruption, and it's forgiving
            and easy to apply with good adhesion to most surfaces and
            minimal prep. It simply doesn't match the durability or
            lifespan of Epoxy, MMA, Polyaspartic or Two Pack Polyurethane.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="/sydney-line-marking"
              className="rounded-full border border-[#3a4448] px-7 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              Get a general line marking quote →
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
            Photos of our completed heavy duty line marking projects
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
            Get a personalised quote for your heavy duty line marking
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
