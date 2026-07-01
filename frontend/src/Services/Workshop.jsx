import React, { useState, useEffect } from "react";

/**
 * Epoxy Coating for Workshop Floors — landing page
 *
 * Same design system as the Commercial Kitchen / Industrial / Warehouse pages:
 * white surfaces, a quiet steel-grey neutral palette, and a single deep-red
 * accent (#A11717) used sparingly. Compact hero, simple sections, gallery
 * with lightbox.
 */

const BENEFITS = [
  { label: "Oil & fuel resistant", detail: "Seals concrete pores and cracks — won't go soft under oil or fuel spills." },
  { label: "Slip-resistant", detail: "Safe for personnel and visitors without making the surface difficult to clean." },
  { label: "Professional finish", detail: "Aesthetically pleasing and available in a variety of colours and finishes." },
  { label: "Brighter & safer", detail: "Lifts surface light reflection and instantly improves workplace safety." },
];

const BENEFIT_DETAILS = [
  {
    label: "Oil and fuel resistance",
    detail: "Epoxy flooring will seal the concrete pores and cracks and will not go soft if an oil or fuel spill occurs, offering a surface that is simple to mop to keep it looking clean and fresh.",
  },
  {
    label: "Aesthetically pleasing",
    detail: "Workshop epoxy flooring will improve the overall appearance of a workshop and provide a professional work environment. Epoxy resins are available in a variety of colours and finishes, allowing you to select the style that best suits your workshop.",
  },
  {
    label: "Durability and longevity",
    detail: "Epoxy flooring is known for its durability and resistance to damage. It can withstand heavy foot traffic, as well as the weight of forklifts and other equipment commonly found in workshops. Properly applied resin flooring can last up to 10 years before it requires re-coating.",
  },
  {
    label: "Slip-resistant and easy to keep clean",
    detail: "Workshop epoxy flooring materials are slip-resistant, making it safer for personnel and visitors while not compromising on making it a difficult surface to clean.",
  },
];

const GALLERY = [
  { src: "/src/assets/image9.jpg", alt: "Finished epoxy floor in a mechanical workshop" },
  { src: "/src/assets/image10.jpg", alt: "Seamless coated flooring in an automotive workshop" },
  { src: "/src/assets/image11.jpg", alt: "Slip-resistant floor coating in a vehicle workshop" },
  { src: "/src/assets/image22.jpg", alt: "Workshop epoxy floor coating finished project" },
  { src: "/src/assets/image25.jpg", alt: "Coated flooring in a mechanical repair workshop" },
  { src: "/src/assets/image24.jpg", alt: "Professional epoxy finish in a busy workshop" },
  { src: "/src/assets/image6.jpg", alt: "Durable resin flooring in a trade workshop" },
  { src: "/src/assets/image12.jpg", alt: "Epoxy line marking in a workshop floor" },
];

const SERVICE_AREAS = ["Sydney", "Canberra", "Wollongong", "Blue Mountains", "Newcastle"];

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
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-3 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
        aria-label="Previous image"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
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
          <span className="ml-2 text-[#7a8487]">({index + 1}/{images.length})</span>
        </figcaption>
      </figure>
    </div>
  );
}

export default function WorkshopFlooring() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i === 0 ? GALLERY.length - 1 : i - 1));
  const nextImage = () => setLightboxIndex((i) => (i === GALLERY.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen bg-white text-[#2E3A3E] font-[Inter,sans-serif]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      `}</style>

      {/* ===== HERO ===== */}
      <header className="relative flex h-[60vh] min-h-[420px] items-center overflow-hidden bg-[#1C2326] text-white">
        <img
          src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=1600&q=80"
          alt="Workshop with seamless epoxy floor coating"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2326] via-[#1C2326]/60 to-[#1C2326]/30" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#e2867a]">
            Servicing: Sydney, Canberra, Wollongong, Blue Mountains and Newcastle
          </p>
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Epoxy coating for workshop floors
          </h1>
          <p className="mt-5 max-w-xl text-[15px] text-[#cfd6d4] sm:text-base">
            Protective, durable and aesthetically appealing epoxy flooring
            systems designed for the busy environment of modern-day workshops —
            installed fast, with minimal disruption to your schedule.
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

      {/* ===== WHY EPOXY FOR WORKSHOPS ===== */}
      <section id="why-us" className="border-y border-[#eceeed] bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">Why it works</p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
            Why epoxy flooring is the most suitable solution for workshop floors
          </h2>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <p>
                Workshop epoxy flooring provides a protective, durable, and
                aesthetically appealing solution for the busy environment of
                modern-day workshops. It is designed to be incredibly
                hard-wearing, not only providing protection for the surface
                below but also an easy-to-clean top layer with excellent
                resistance to vehicles and personnel.
              </p>
              <p>
                An epoxy floor painting system can provide long-term
                protection while offering affordable maintenance costs and
                savings in labour and repair. This makes it an ideal choice
                for workshop owners and managers looking to improve their
                working environment.
              </p>
              <p className="text-[#5b6669]">
                Please scroll to the bottom of the page to view images of our
                finished projects in various systems and colour schemes.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#eceeed]">
              <img
                src="/src/assets/image17.jpg"
                alt="Seamless epoxy floor coating installed in a mechanical workshop"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFIT DETAILS ===== */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">In detail</p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
          Benefits of applying epoxy flooring to your workshop floor
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {BENEFIT_DETAILS.map((b) => (
            <div key={b.label}>
              <span className="block h-px w-10 bg-[#A11717]" />
              <h3 className="mt-4 text-[15px] font-semibold text-[#1C2326]">{b.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5b6669]">{b.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== USEFUL INFO / RISKS ===== */}
      <section className="border-y border-[#eceeed] bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">Good to know</p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
            Useful information about workshop epoxy flooring
          </h2>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <p>
                Workshop floors are not a good fit for all epoxy flooring
                products. A specific epoxy floor coating solution is required
                for workshop floors in order to survive heavy vehicle traffic,
                oil, fuel, chemical spills such as brake and transmission
                fluid, and frequent mechanical cleaning.
              </p>
              <p>
                Our workshop epoxy flooring systems can be applied over a long
                weekend to minimise disturbance to your business schedule and
                offer an incredibly durable, safe surface for personnel and
                vehicles to operate on.
              </p>
              <a
                href="#contact"
                className="inline-block rounded-full bg-[#A11717] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#8a1313]"
              >
                Contact us today to arrange a free site quote
              </a>
            </div>

            <div className="rounded-2xl border border-[#eceeed] bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
                Risks of selecting the wrong floor coating
              </p>
              <ul className="mt-4 space-y-4">
                <li>
                  <span className="block h-px w-10 bg-[#A11717]" />
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6669]">
                    Smooth floors present a risk of falls and slips, whereas
                    rough floors make it difficult to maintain a clean surface,
                    resulting in dirty floors.
                  </p>
                </li>
                <li>
                  <span className="block h-px w-10 bg-[#A11717]" />
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6669]">
                    Excessive wear: while low-solids and water-based epoxies
                    are much easier to apply, they are not suitable for
                    workshop floors and will lift or wear off quickly.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MECHANICAL WORKSHOP SYSTEM ===== */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">Our system</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-[#1C2326]">
          Sydney Epoxy Floors mechanical workshop epoxy flooring system
        </h2>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
            <p>
              Our mechanical workshop epoxy flooring system has been designed
              to withstand the wear and tear of heavy traffic, oil spills, and
              other hazards while also providing an added layer of safety
              through optimum slip resistance — while being easy to clean for
              a long-lasting appearance and improving workflow efficiency.
            </p>
            <p>
              We provide professional installation and can work around your
              business to reduce disruption during working hours. Our coatings
              offer a fast curing/drying time and are ready for vehicular
              traffic within 48 hours — so within a relatively short period of
              time, your employees and customers will experience the instant
              brightening effect that our workshop floor epoxy coating systems
              provide.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#eceeed]">
            <img
              src="/src/assets/image22.jpg"
              alt="Completed mechanical workshop epoxy floor coating"
              className="h-80 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== EPOXY LINE MARKING ===== */}
      <section className="border-y border-[#eceeed] bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">Additional service</p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
            Epoxy line marking
          </h2>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <p>
                In workshops, epoxy line marking is a vital alternative when
                conventional line marking paint is insufficient. Epoxy
                resin-based markings provide permanence and visibility while
                guaranteeing resilience to wear and tear, compared with
                standard line marking paint.
              </p>
              <p>
                This approach encourages safety and organisation by precisely
                defining workstations, safety zones, and traffic patterns.
                While directing the flow of people and equipment, the sleek
                and easily maintained surface enhances the professional
                appearance.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#eceeed]">
              <img
                src="/src/assets/image12.jpg"
                alt="Epoxy line marking in a workshop floor"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREAS / COLOUR CHART ===== */}
      <section className="bg-[#0E1214] py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">Where we work</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-white">Service areas</h2>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                {SERVICE_AREAS.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-sm text-[#e7eaec]">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-[#A11717]" aria-hidden="true" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">Colours</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-white">Epoxy flooring colour chart</h2>
              <p className="mt-4 text-[15px] text-[#cfd6d4]">
                Click on the chart below to view and download our full range
                of epoxy colours. Custom colours can be mixed on request.
              </p>
              <a
                href="#"
                className="mt-5 inline-block rounded-full border border-[#A11717] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#A11717]"
              >
                View colour chart
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY — 4 columns ===== */}
      <section id="gallery" className="bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">Completed work</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]">
            Photos of our completed workshop epoxy flooring projects
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
            Get a personalised quote for your workshop epoxy floor coating project.
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
