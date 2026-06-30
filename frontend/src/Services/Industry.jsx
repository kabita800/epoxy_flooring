import React, { useState, useEffect } from "react";

/**
 * Industrial Epoxy Floor Coating Systems — landing page
 *
 * Same design system as the Commercial Kitchen page: white surfaces, a
 * quiet steel-grey neutral palette, and a single deep-red accent (#A11717)
 * used sparingly. Compact hero, simple nav, accordion-free single content
 * page, gallery with lightbox.
 */

const BENEFITS = [
  { label: "Chemical resistance", detail: "Superior resistance to the harshest industrial chemicals." },
  { label: "Longevity & durability", detail: "Built to stand up to heavy, continuous industrial use." },
  { label: "Easy to clean", detail: "Low-porosity surface that's simple to maintain." },
  { label: "Brightening effect", detail: "Lifts light levels in factories and warehouses." },
  { label: "Slip resistance", detail: "Standard-approved traction for safer floors." },
  { label: "Dust-free surface", detail: "Seals the slab to keep dust out of the air." },
  { label: "Food-spill resistance", detail: "Excellent resistance to citric acids and fats." },
];

const APPLICATIONS = [
  { name: "Factory & Warehouse Floors (incl. walls)", icon: <><path d="M4 4h16v4H4z" strokeLinejoin="round" /><path d="M6 8v12M18 8v12M4 20h16" strokeLinecap="round" /></> },
  { name: "Mechanical Workshops", icon: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 00.3 1.9l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.9-.3 1.7 1.7 0 00-1 1.6V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1-1.6 1.7 1.7 0 00-1.9.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.9 1.7 1.7 0 00-1.6-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.6-1 1.7 1.7 0 00-.3-1.9l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.9.3H9a1.7 1.7 0 001-1.6V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.6 1.7 1.7 0 001.9-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.9V9a1.7 1.7 0 001.6 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.6 1z" strokeLinecap="round" strokeLinejoin="round" /></> },
  { name: "Aircraft Hangars", icon: <path d="M2 16l9-3 2-9 2 1-1 8 6 2v2l-6-1-2 5-2-1 1-4-9 2z" strokeLinejoin="round" /> },
  { name: "Treatment Plants", icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" /></> },
  { name: "Commercial Kitchens, Cold Rooms & Freezers", icon: <path d="M12 2v20M5 6l14 12M19 6L5 18" strokeLinecap="round" /> },
  { name: "Food Manufacturing Plants", icon: <><rect x="3" y="9" width="13" height="8" rx="1" /><path d="M16 12h3l2 3v2h-5z" strokeLinejoin="round" /><circle cx="7.5" cy="19" r="1.5" /><circle cx="17.5" cy="19" r="1.5" /></> },
  { name: "Retail Outlets", icon: <><path d="M4 9l1-5h14l1 5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 9h16v11H4z" strokeLinejoin="round" /><path d="M9 13a3 3 0 006 0" strokeLinecap="round" /></> },
  { name: "Service Industry (incl. bars)", icon: <path d="M9 2h6l-1 6h2l-5 14-1-8H8l1-6V2z" strokeLinejoin="round" /> },
  { name: "Offices", icon: <><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M9 8h6M9 12h6M9 16h3" strokeLinecap="round" /></> },
];

const BRANDS = [
  "Sika Australia / SIKAFLOOR",
  "Ultrakote Australia",
  "Parchem",
  "Elite Crete Systems",
  "Epimax",
  "A & I Coatings",
];

const GALLERY = [
  { src: "/src/assets/image9.jpg", alt: "Finished epoxy floor in an industrial warehouse" },
  { src: "/src/assets/image10.jpg", alt: "Seamless coated flooring in a factory floor" },
  { src: "/src/assets/image11.jpg", alt: "Slip-resistant floor coating near industrial equipment" },
  { src: "/src/assets/image22.jpg", alt: "Industrial epoxy floor coating finished project" },
  { src: "/src/assets/image25.jpg", alt: "Coated flooring in a mechanical workshop" },
  { src: "/src/assets/image24.jpg", alt: "Hygienic seamless flooring in a treatment plant" },
  { src: "/src/assets/image6.jpg", alt: "Durable resin flooring in a manufacturing plant" },
  { src: "/src/assets/image12.jpg", alt: "Industrial coated floor in a loading bay area" },
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
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
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
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

export default function IndustrialFlooring() {
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
          src="/src/assets/iamge4.jpg"
          alt="Industrial warehouse with seamless epoxy floor coating"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2326] via-[#1C2326]/60 to-[#1C2326]/30" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#e2867a]">
            Industrial Flooring Systems
          </p>
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Epoxy floor coating systems for industrial environments
          </h1>
          <p className="mt-5 max-w-xl text-[15px] text-[#cfd6d4] sm:text-base">
            The tough environment of an industrial business requires a
            flooring solution that is both hard-wearing and long lasting.
            Sydney Epoxy Floors industrial grade epoxy floor coating systems
            ensure that your floor will stand up to the harshest chemicals
            and meets the Australian Flooring Standards for safety.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
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
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">What you get</p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
          Benefits
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div key={b.label}>
              <span className="block h-px w-10 bg-[#A11717]" />
              <h3 className="mt-4 text-[15px] font-semibold text-[#1C2326]">{b.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5b6669]">{b.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== EPOXY FLOOR PAINTING ===== */}
      <section id="why-us" className="border-y border-[#eceeed] bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">Why it works</p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
            Epoxy floor painting
          </h2>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <p>
                Epoxy coating systems are one of the highest-performing
                systems available in the floor coating industry. They offer
                superior durability, longevity and relatively short
                curing/drying times. They are ideal for industrial
                applications that require superior performance in an
                environment that is typically heavily used, abrasive and
                corrosive.
              </p>
              
              <p>
                The chemical resistance of our industrial floor coatings is
                second to none and ensures your floor will remain safe and
                functional for years to come, even though it is being used
                for heavy industrial applications. You can rest assured
                knowing that your industrial floor will meet the required
                standards of safety in Australia and your employees will be
                risk-free from floor-related slips or falls.
              </p>
             
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#eceeed]">
              <img
                src="/src/assets/image17.jpg"
                alt="Seamless epoxy floor coating installed in an industrial facility"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== APPLICATIONS ===== */}
      <section id="areas" className="bg-[#0E1214] py-12">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">Applications</p>
          <h2 className="mt-3 text-center text-3xl font-semibold leading-tight text-white">
            Our quality flooring solutions are ideal for the following applications
          </h2>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {APPLICATIONS.map((area) => (
              <li key={area.name} className="flex items-center gap-2 text-sm text-[#e7eaec]">
                <span className="h-1.5 w-1.5 flex-none rounded-full bg-[#A11717]" aria-hidden="true" />
                {area.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== GALLERY — 4 columns ===== */}
      <section id="gallery" className="bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">Completed work</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]">
            Photos of our completed industrial epoxy floor projects
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
            Get a personalised quote for your industrial epoxy floor coating project.
          </p>
          <a
            href="#contact-form"
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
