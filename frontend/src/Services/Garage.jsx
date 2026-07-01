import React, { useState, useEffect } from "react";

/**
 * Garage Epoxy Flooring -- landing page
 *
 * Same design system as the other pages: white surfaces, steel-grey neutral
 * palette, deep-red accent (#A11717). Extra sections for trust badges,
 * 3 systems, 5-step process, and YouTube video placeholders.
 *
 * Fixed: all curly/smart quotes replaced with straight ASCII equivalents.
 */

const TRUST_BADGES = [
  { label: "330+ 4.9 Star Reviews", icon: "⭐" },
  { label: "5-Year Real Warranty", icon: "🛡️" },
  { label: "21 Years of Experience", icon: "🏆" },
  { label: "Australian Made", icon: "🇦🇺" },
];

const BENEFITS = [
  {
    label: "Permanent dust-proofing",
    detail:
      'Eliminates the constant "chalking" and dust created by raw concrete, keeping your cars, laundry, and storage items cleaner.',
  },
  {
    label: "Showroom aesthetics",
    detail:
      "Instantly beautifies the space with a seamless, professional finish. Available in a wide variety of flake and solid colours to match your home's style.",
  },
  {
    label: "Heavy-duty durability",
    detail:
      'Engineered to withstand the toughest conditions. Our floors resist "hot tyre pick-up" (delamination), oil drips, fuel spills, and heavy foot traffic.',
  },
  {
    label: "Effortless maintenance",
    detail:
      "The non-porous surface repels dirt, grime, and liquids. Simply sweep or mop to keep it looking brand new -- no more scrubbing oil stains.",
  },
  {
    label: "Enhanced safety",
    detail:
      "We offer anti-slip texturing options to ensure your family stays safe from falls, even when the floor is wet.",
  },
  {
    label: "Instant property value",
    detail:
      "A finished garage is a highly desirable feature for prospective buyers, offering an immediate return on investment and street appeal.",
  },
  {
    label: "Brighter environment",
    detail:
      "The high-gloss finish reflects light, effectively brightening up the room without the need for expensive extra lighting fixtures.",
  },
  {
    label: "Concrete protection",
    detail:
      "Seals and protects your foundation from moisture, cracks, and aggressive road salts that can degrade raw concrete over time.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Surface Preparation (Diamond Grinding)",
    detail:
      "Success starts here. We prepare the concrete floor by diamond grinding to remove existing coatings, stains, and weak surface layers. This opens the concrete pores, allowing the epoxy to penetrate deep into the subfloor. We also repair any concrete spalling, cracks, or breakage using high-strength two-pack epoxy mortars.",
  },
  {
    title: "Priming the Subfloor",
    detail:
      "We apply one coat of Premium Grade Low Viscosity Epoxy Primer. This thin resin soaks into the open concrete pores to anchor the system, achieving a Dry Film Thickness (DFT) of 150 microns.",
  },
  {
    title: "Base Coat & Flake Broadcast",
    detail:
      'We apply a layer of Premium Grade Coloured Epoxy Resin. While the resin is wet, we broadcast your chosen decorative flakes to "full rejection" -- meaning we cover the floor completely until no wet epoxy is visible.',
  },
  {
    title: "Scrape & Vacuum",
    detail:
      "Once cured, we reclaim the excess flake. We then mechanically scrape the floor to remove sharp edges and vacuum thoroughly. This ensures the texture is aggressive enough for grip, but smooth enough to be comfortable.",
  },
  {
    title: "The Protective Clear Coat (Polyaspartic)",
    detail:
      "Finally, we seal the system with a UV-stable, Ultra High Solids Polyaspartic Clear Coat. Crucially, we apply this using a squeegee (not just a roller) to ensure a thick, durable finish of 350 microns. This locks in the flake and protects against hot tyres and sunlight.",
  },
];

const GALLERY = [
  {
    src: "/src/assets/image9.jpg",
    alt: "Premium flake epoxy finish in a Sydney residential garage",
  },
  {
    src: "/src/assets/image10.jpg",
    alt: "Seamless solid colour epoxy garage floor",
  },
  {
    src: "/src/assets/image11.jpg",
    alt: "Metallic marble effect epoxy floor in a home garage",
  },
  {
    src: "/src/assets/image22.jpg",
    alt: "Completed garage epoxy floor coating project",
  },
  {
    src: "/src/assets/image25.jpg",
    alt: "Showroom finish residential garage floor coating",
  },
  {
    src: "/src/assets/image24.jpg",
    alt: "Premium flake system installed in a double garage",
  },
  {
    src: "/src/assets/image6.jpg",
    alt: "Durable epoxy coating in a home workshop garage",
  },
  {
    src: "/src/assets/image12.jpg",
    alt: "Anti-slip epoxy garage flooring completed project",
  },
];

// -- YouTube placeholder -------------------------------------------------------
function VideoPlaceholder({ label }) {
  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-2xl border border-[#eceeed] bg-[#EDF1F0]">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#A11717]">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <p className="px-4 text-center text-sm font-medium text-[#5b6669]">
        {label}
      </p>
      <p className="text-xs text-[#9aa3a6]">Paste YouTube embed URL here</p>
    </div>
  );
}

// -- Lightbox ------------------------------------------------------------------
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

// -- Page ----------------------------------------------------------------------
export default function GarageFlooring() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i === 0 ? GALLERY.length - 1 : i - 1));
  const nextImage = () =>
    setLightboxIndex((i) => (i === GALLERY.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen bg-white font-[Inter,sans-serif] text-[#2E3A3E]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      `}</style>

      {/* ===== HERO ===== */}
      <header className="relative flex h-[60vh] min-h-[420px] items-center overflow-hidden bg-[#1C2326] text-white">
        <img
          src="/src/assets/image11.jpg"
          alt="Premium epoxy garage floor coating Sydney"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2326] via-[#1C2326]/60 to-[#1C2326]/30" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#e2867a]">
            Sydney&apos;s Premium Garage Epoxy Flooring Specialists Since 2004
          </p>
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Transform your dull concrete into a stunning, dust-free showroom
          </h1>
          <p className="mt-5 max-w-xl text-[15px] text-[#cfd6d4] sm:text-base">
            Trusted by 330+ Sydney locals. Industrial-grade epoxy and
            polyaspartic systems installed by experts -- built to last 15+
            years, not peel in 12 months.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="rounded-full bg-[#A11717] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#8a1313] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2326]"
            >
              Get a free quote
            </a>
            <a
              href="#gallery"
              className="text-sm font-medium text-[#cfd6d4] transition hover:text-white"
            >
              View completed projects &rarr;
            </a>
          </div>
        </div>
      </header>

      {/* ===== TRUST BADGES ===== */}
      <div className="border-b border-[#eceeed] bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-6">
          {TRUST_BADGES.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 text-sm font-medium text-[#1C2326]"
            >
              <span className="text-lg">{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>
      </div>

      {/* ===== BENEFITS ===== */}
      <section id="benefits" className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
          What you get
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
          Why choose a premium epoxy floor for your home?
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* ===== WHY INDUSTRIAL-GRADE ===== */}
      <section className="border-y border-[#eceeed] bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Why it works
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
            Why industrial-grade coatings for residential garages?
          </h2>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-[15px] leading-relaxed text-[#3f4a4d]">
              <p>
                Many homeowners make the mistake of using DIY paving paints or
                hardware store epoxy kits. Unfortunately, these products often
                fail within 12 months due to &ldquo;hot tyre pick-up&rdquo; --
                where hot tyres melt the coating and peel it away from the
                concrete.
              </p>
              <p>
                <span className="font-semibold text-[#1C2326]">
                  The solution?
                </span>{" "}
                We use the same industrial-grade epoxy and polyaspartic systems
                found in high-traffic warehouses, adapted for your home.
              </p>
              <p>
                Transforming Sydney floors since 2004, we bring over two decades
                of industrial expertise to your residential project. A correctly
                applied industrial coating is a one-time investment. We believe
                in empowering you to make an educated decision so you get a
                floor that lasts 15+ years -- not one that peels in 12 months.
              </p>
              <p className="text-[#5b6669]">
                Please scroll to the bottom of the page to view images of our
                finished projects in various systems and colour schemes.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#eceeed]">
              <img
                src="/src/assets/image17.jpg"
                alt="Industrial-grade epoxy coating applied in a residential garage"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SYSTEMS ===== */}
      <section id="systems" className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
          Our systems
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#1C2326]">
          Our common garage floor coating systems
        </h2>

        {/* System 1 -- Flake */}
        <div className="mt-10 rounded-2xl border border-[#eceeed] bg-[#FAFBFB] p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="block h-px w-10 flex-none bg-[#A11717]" />
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#A11717]">
              Highly Recommended -- Chosen by 90% of our customers
            </p>
          </div>
          <h3 className="mt-4 text-xl font-semibold text-[#1C2326]">
            1. The Premium Seamless Flake System
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-[#3f4a4d]">
            The ultimate solution for residential garages. This is not just a
            paint; it is a multi-layered industrial system designed for safety
            and maximum longevity.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {[
              {
                label: "Superior safety (texture)",
                detail:
                  "The flake texture provides a natural grip, making it significantly safer to walk on when wet -- perfect for rainy days when you drive a wet car in.",
              },
              {
                label: "UV resistance (won't yellow)",
                detail:
                  "Sealed with a UV-stable Polyaspartic topcoat, this floor will never yellow or fade from sunlight exposure when your garage door is open.",
              },
              {
                label: "Hides dirt &amp; imperfections",
                detail:
                  "The decorative flake pattern effectively camouflages dust, footprints, and tyre marks, keeping your garage looking cleaner for longer.",
              },
              {
                label: "Maximum durability",
                detail:
                  "The combination of epoxy base and polyaspartic topcoat creates a finish that is harder and more scratch-resistant than standard epoxy.",
              },
            ].map((f) => (
              <div key={f.label}>
                <span className="block h-px w-8 bg-[#A11717]" />
                <h4
                  className="mt-3 text-[15px] font-semibold text-[#1C2326]"
                  dangerouslySetInnerHTML={{ __html: f.label }}
                />
                <p className="mt-1 text-sm leading-relaxed text-[#5b6669]">
                  {f.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* System 2 -- Solid Colour */}
        <div className="mt-6 rounded-2xl border border-[#eceeed] bg-[#FAFBFB] p-8">
          <span className="block h-px w-10 bg-[#A11717]" />
          <h3 className="mt-4 text-xl font-semibold text-[#1C2326]">
            2. The Solid Colour Epoxy System
          </h3>
          <p className="mt-1 text-sm italic text-[#5b6669]">
            The clean, industrial choice for a minimalist finish.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-[#3f4a4d]">
            For homeowners seeking a sleek, uniform look, our Solid Colour
            System provides a high-gloss, seamless finish that transforms dull
            concrete into a bright, professional surface.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {[
              {
                label: "First coat (primer)",
                detail:
                  "We apply a Premium Grade Tinted Low-Viscosity Epoxy Primer that penetrates deep into the concrete pores to anchor the system.",
              },
              {
                label: "Second coat (topcoat)",
                detail:
                  "We finish with a roller-applied Premium Epoxy Topcoat (available in Grey, Beige, or custom colours) with fine anti-slip media added.",
              },
              {
                label: "Slip rating",
                detail: "Standard R10 / P3 rating -- safe for residential use.",
              },
              {
                label: "Timeline &amp; warranty",
                detail:
                  "Installation takes 2 days. Light foot traffic allowed after 24 hours. Backed by a 5-Year Structural Warranty.",
              },
            ].map((f) => (
              <div key={f.label}>
                <span className="block h-px w-8 bg-[#A11717]" />
                <h4
                  className="mt-3 text-[15px] font-semibold text-[#1C2326]"
                  dangerouslySetInnerHTML={{ __html: f.label }}
                />
                <p className="mt-1 text-sm leading-relaxed text-[#5b6669]">
                  {f.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-[#5b6669]">
            <span className="font-semibold text-[#1C2326]">
              &#9888;&#65039; Important design note:{" "}
            </span>
            While solid colour floors look spectacular when freshly cleaned,
            they do not hide dirt as well as our Flake Systems. Dust,
            footprints, and scratches are more visible on a solid glossy
            surface. If you want a floor that camouflages dirt, we recommend
            upgrading to the Premium Seamless Flake System.
          </div>
        </div>

        {/* System 3 -- Metallic */}
        <div className="mt-6 rounded-2xl border border-[#eceeed] bg-[#FAFBFB] p-8">
          <span className="block h-px w-10 bg-[#A11717]" />
          <h3 className="mt-4 text-xl font-semibold text-[#1C2326]">
            3. Metallic &amp; Marble Effect Epoxy System
          </h3>
          <p className="mt-1 text-sm italic text-[#5b6669]">
            The ultimate &ldquo;Showroom&rdquo; finish for unparalleled style.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-[#3f4a4d]">
            For those looking to turn their floor into a work of art, our
            Metallic System creates a stunning, high-gloss 3D effect that looks
            like flowing resin-based liquid marble. Every floor is hand-crafted
            and completely unique.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
            {[
              {
                label: "Unique visuals",
                detail:
                  "No two floors are alike. The metallic pigments flow during application to create deep, pearlescent swirls.",
              },
              {
                label: "High-end sophistication",
                detail:
                  'Instantly transforms a dull space into a luxury showroom or "Man Cave."',
              },
              {
                label: "Seamless hygiene",
                detail:
                  "Like our other systems, it is completely seamless and easy to clean.",
              },
            ].map((f) => (
              <div key={f.label}>
                <span className="block h-px w-8 bg-[#A11717]" />
                <h4 className="mt-3 text-[15px] font-semibold text-[#1C2326]">
                  {f.label}
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-[#5b6669]">
                  {f.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-[#5b6669]">
            <span className="font-semibold text-[#1C2326]">
              &#9888;&#65039; Important usage advisory:{" "}
            </span>
            While metallic floors are extremely durable, they are designed
            primarily for aesthetics. The glass-like finish will show scratches
            from small stones or heavy tools more than a textured Flake floor.
            If your garage sees frequent rain or wet cars, we strongly recommend
            our Flake System for better slip resistance.
          </div>
        </div>
      </section>

      {/* ===== 5-STEP PROCESS ===== */}
      <section className="border-y border-[#eceeed] bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            How we work
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-[#1C2326]">
            Our 5-step professional installation process
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#3f4a4d]">
            We don&apos;t skip steps. Here is how we guarantee a floor that
            lasts.
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
        </div>
      </section>

      {/* ===== VIDEOS ===== */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
          See us in action
        </p>

        <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]">
          Meet Tim Burmin &amp; watch our team at work
        </h2>

        <p className="mt-4 text-[15px] leading-relaxed text-[#3f4a4d]">
          Our residential manager Tim Burmin specialises in garage floor epoxy
          flooring. Watch real customer testimonials and our team in action.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Video 1 */}
          <div>
            <div className="overflow-hidden rounded-xl shadow-lg aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/JQVmo7AHKMM"
                title="Customer Testimonial - Pierre, Premium Seamless Flake Flooring"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-[#1C2326]">
              Customer Testimonial – Pierre, Premium Seamless Flake Flooring
            </h3>
          </div>

          {/* Video 2 */}
          <div>
            <div className="overflow-hidden rounded-xl shadow-lg aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/O8dXn6xAjmY"
                title="Sydney Epoxy Floors - Our Team in Action"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-[#1C2326]">
              Sydney Epoxy Floors – Our Team in Action
            </h3>
          </div>

          {/* Video 3 */}
          <div>
            <div className="overflow-hidden rounded-xl shadow-lg aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/-Cb4kkpcCdw"
                title="Warranty Claim | Customer Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-[#1C2326]">
              Warranty Claim | Customer Testimonial
            </h3>
          </div>

          <div>
            <div className="overflow-hidden rounded-xl shadow-lg aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/pDzWwnmVMmU"
                title="Tim attending to a garage floor coating warranty claim"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-[#1C2326]">
              Tim attending to a garage floor coating warranty claim
            </h3>
          </div>

          <div>
            <div className="overflow-hidden rounded-xl shadow-lg aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/-Cb4kkpcCdw"
                title="Warranty Claim | Customer Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-[#1C2326]">
              Warranty Claim | Customer Testimonial
            </h3>
          </div>

          <div>
            <div className="overflow-hidden rounded-xl shadow-lg aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/WoXL6tQQ2vw"
                title="Tim attending to a garage floor coating warranty claim"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-[#1C2326]">
              Tim attending to a garage floor coating warranty claim
            </h3>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-[#5b6669]">
          Our SEF Premium Flake System is backed by a 5-year warranty. Watch the
          videos above to see how we handle warranty claims.
        </p>
      </section>

      {/* ===== COLOUR CHART / FREE QUOTE ===== */}
      <section className="bg-[#0E1214] py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex justify-center">
            <div className="max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
                Colours
              </p>

              <h2 className="mt-3 text-2xl font-semibold leading-tight text-white">
                Epoxy flooring colour chart
              </h2>

              <p className="mt-4 text-[15px] text-[#cfd6d4]">
                Click on the chart below to view and download our full range of
                epoxy colours.
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

      {/* ===== GALLERY ===== */}
      <section id="gallery" className="bg-[#FAFBFB] py-14">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A11717]">
            Completed work
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1C2326]">
            Photos of our completed garage epoxy flooring projects
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
            Get a personalised quote for your garage epoxy floor coating
            project.
          </p>
          <a
            href="#contact-form"
            className="rounded-full bg-[#A11717] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#8a1313]"
          >
            Contact us today!
          </a>
          <p className="mt-6 text-xs text-[#9aa3a6]"></p>
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
