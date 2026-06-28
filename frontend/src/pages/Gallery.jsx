import { useState, useEffect, useCallback, useRef } from "react";

/* ----------------------------------------------------------------
   GALLERY DATA — replace src with your real image paths
------------------------------------------------------------------- */
const galleryImages = [
  { src: "/src/assets/image1.jpg", alt: "Metallic epoxy flooring finish in Sydney warehouse" },
  { src: "/src/assets/image2.jpg", alt: "Flake epoxy flooring in commercial showroom" },
  { src: "/src/assets/image3.jpg", alt: "Garage epoxy flooring solid colour finish" },
  { src: "/src/assets/iamge4.jpg", alt: "Industrial epoxy flooring heavy traffic rated" },
  { src: "/src/assets/image5.jpg", alt: "Workshop epoxy flooring chemical resistant" },
  { src: "/src/assets/image6.jpg", alt: "Commercial kitchen epoxy flooring slip resistant" },
  { src: "/src/assets/image7.jpg", alt: "Metallic swirl epoxy flooring statement finish" },
  { src: "/src/assets/image8.jpg", alt: "Concrete grinding surface preparation" },
  { src: "/src/assets/image9.jpg", alt: "Driveway epoxy flooring Sydney residential" },
  { src: "/src/assets/image10.jpg", alt: "Self levelling epoxy flooring warehouse" },
  { src: "/src/assets/image11.jpg", alt: "Epoxy flooring over tiles bathroom" },
  { src: "/src/assets/image12.jpg", alt: "Flake epoxy textured grip finish" },
  { src: "/src/assets/image13.jpg", alt: "High performance epoxy repair industrial floor" },
  { src: "/src/assets/image14.jpg", alt: "Mechanical workshop epoxy flooring finish" },
  { src: "/src/assets/image15.jpg", alt: "Metallic epoxy flooring showroom Silverwater" },
  { src: "/src/assets/image16.jpg", alt: "Metallic epoxy flooring showroom Silverwater" },
  { src: "/src/assets/image17.jpg", alt: "Metallic epoxy flooring showroom Silverwater" },
  { src: "/src/assets/image18.jpg", alt: "Metallic epoxy flooring showroom Silverwater" },
  { src: "/src/assets/image19.jpg", alt: "Metallic epoxy flooring showroom Silverwater" },
  { src: "/src/assets/image20.jpg", alt: "Metallic epoxy flooring showroom Silverwater" },
  { src: "/src/assets/image21.jpg", alt: "Metallic epoxy flooring showroom Silverwater" },
  { src: "/src/assets/image22.jpg", alt: "Metallic epoxy flooring showroom Silverwater" },
  { src: "/src/assets/image23.jpg", alt: "Metallic epoxy flooring showroom Silverwater" },
  { src: "/src/assets/image24.jpg", alt: "Metallic epoxy flooring showroom Silverwater" },
  { src: "/src/assets/image25.jpg", alt: "Metallic epoxy flooring showroom Silverwater" },
];

/* ----------------------------------------------------------------
   Scroll reveal hook + wrapper (same pattern used on the homepage)
------------------------------------------------------------------- */
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

const Reveal = ({ as: Tag = "div", className = "", delay = 0, children, ...rest }) => {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`gal-reveal ${inView ? "gal-reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const isOpen = activeIndex !== null;

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (
        (prev - 1 + galleryImages.length) % galleryImages.length
      ),
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryImages.length,
    );
  }, []);

  /* Keyboard navigation */
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, closeLightbox, showPrev, showNext]);

  /* Lock body scroll while lightbox is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* Hero entrance trigger */
  useEffect(() => {
    const t = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;800;900&family=Archivo+Expanded:wght@700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

        :root {
          --ink: #16181B;
          --ink-soft: #2A2D32;
          --steel: #5B6470;
          --concrete: #EDEAE3;
          --concrete-deep: #E2DDD2;
          --paper: #FAFAF8;
          --resin: #A11717;
          --resin-deep: #A11717;
          --resin-soft: #A11717;
        }

        .gal-root { font-family: 'Inter', sans-serif; color: var(--ink); background: var(--paper); }
        .gal-display { font-family: 'Archivo Expanded', 'Archivo', sans-serif; letter-spacing: -0.01em; }
        .gal-mono { font-family: 'JetBrains Mono', monospace; letter-spacing: 0.02em; }

        @keyframes galFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes galZoomIn { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
        @keyframes galFadeUp { 0% { opacity: 0; transform: translateY(26px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes galDotPulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(161,23,23,0.5); } 70% { box-shadow: 0 0 0 8px rgba(161,23,23,0); } }
        @keyframes galShimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }

        /* Generic scroll reveal */
        .gal-reveal {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1);
          will-change: opacity, transform;
        }
        .gal-reveal-visible { opacity: 1; transform: translateY(0); }

        /* Hero entrance */
        .gal-hero-content > * {
          opacity: 0;
          transform: translateY(20px);
          animation: galFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .gal-hero-loaded .gal-hero-content > *:nth-child(1) { animation-delay: 0.05s; }
        .gal-hero-loaded .gal-hero-content > *:nth-child(2) { animation-delay: 0.2s; }
        .gal-hero-loaded .gal-hero-content > *:nth-child(3) { animation-delay: 0.35s; }

        .gal-hero-img {
          opacity: 0;
          transform: translateY(20px) scale(1.02);
          animation: galFadeUp 0.9s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.25s;
        }
        .gal-hero-img img { transition: transform 8s ease-out; }
        .gal-hero-img:hover img { transform: scale(1.08); }

        .gal-pulse-dot { animation: galDotPulse 2.2s ease-out infinite; }

        /* Gallery tiles */
        .gal-tile {
          transition: transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease;
          opacity: 0;
          transform: translateY(22px);
        }
        .gal-tile-visible {
          animation: galFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .gal-tile:hover { transform: translateY(-6px) !important; box-shadow: 0 24px 44px -18px rgba(22,24,27,0.4); }
        .gal-tile-img { transition: transform 0.6s cubic-bezier(0.22,1,0.36,1); }
        .gal-tile:hover .gal-tile-img { transform: scale(1.08); }
        .gal-tile-overlay { transition: opacity 0.35s ease; }
        .gal-tile-view-label { transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1); transform: translateY(6px); }
        .gal-tile:hover .gal-tile-view-label { transform: translateY(0); }

        /* Loading shimmer skeleton, shown until each image fires onLoad */
        .gal-tile-skeleton {
          background: linear-gradient(90deg, var(--concrete) 25%, var(--concrete-deep) 37%, var(--concrete) 63%);
          background-size: 400% 100%;
          animation: galShimmer 1.8s ease-in-out infinite;
        }

        /* Artistry cards */
        .gal-art-card { transition: transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease, border-color 0.3s ease; }
        .gal-art-card:hover { transform: translateY(-6px); box-shadow: 0 22px 40px -16px rgba(22,24,27,0.18); }
        .gal-art-card .gal-art-dot { transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1); }
        .gal-art-card:hover .gal-art-dot { transform: scale(1.6); }

        /* CTA button */
        .gal-btn-primary { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, background-color 0.3s ease; }
        .gal-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 14px 30px -10px rgba(161,23,23,0.5); }
        .gal-btn-primary:active { transform: translateY(-1px) scale(0.98); }

        /* Lightbox */
        .gal-lightbox-backdrop { animation: galFadeIn 0.25s ease forwards; }
        .gal-lightbox-img { animation: galZoomIn 0.3s cubic-bezier(0.22,1,0.36,1) forwards; }
        .gal-caption-fade { animation: galFadeIn 0.4s ease forwards; animation-delay: 0.1s; opacity: 0; }

        .gal-ctrl { transition: background-color 0.25s ease, transform 0.25s cubic-bezier(0.34,1.56,0.64,1); }
        .gal-ctrl:hover { background-color: var(--resin); transform: scale(1.08); }
        .gal-ctrl:active { transform: scale(0.94); }

        @media (prefers-reduced-motion: reduce) {
          .gal-reveal, .gal-hero-content > *, .gal-hero-img, .gal-hero-img img, .gal-pulse-dot,
          .gal-tile, .gal-tile-img, .gal-tile-overlay, .gal-tile-view-label, .gal-tile-skeleton,
          .gal-art-card, .gal-art-dot, .gal-btn-primary, .gal-lightbox-backdrop, .gal-lightbox-img,
          .gal-caption-fade, .gal-ctrl {
            animation: none !important;
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      <div className="gal-root">
        {/* ============ HEADER ============ */}
        <section className="py-8 md:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className={`gal-hero-content ${loaded ? "gal-hero-loaded" : ""}`}>
                <span className="gal-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[1.5px] text-[var(--resin-soft)] font-semibold mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--resin-soft)] gal-pulse-dot" />
                  Sydney Epoxy Floors
                </span>

                <h1 className="gal-display text-3xl md:text-5xl font-extrabold text-black leading-tight mb-6">
                  Welcome to Sydney Epoxy Floors Gallery
                </h1>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Discover exceptional epoxy flooring creations in Sydney. As
                  your premier destination for epoxy flooring solutions, we're
                  thrilled to showcase a stunning collection of exquisite floor
                  coating finishes that redefine spaces. Whether you're a
                  homeowner, a business owner, or an interior designer seeking
                  inspiration, our gallery is a haven for those who appreciate
                  the artistry and innovation of epoxy floors.
                </p>
              </div>

              {/* Right Image */}
              <div className="relative gal-hero-img">
                <img
                  src="/src/assets/concrete.jpg" // replace with your image
                  alt="Sydney Epoxy Floors Gallery"
                  className="w-full h-[350px] md:h-[450px] object-cover rounded-3xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============ GALLERY GRID ============ */}
        <section className="py-8 md:py-14 bg-[var(--paper)]">
          <div className="max-w-6xl mx-auto px-5 md:px-10">
            <Reveal className="max-w-xl mb-10">
              <span className="gal-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[1.5px] text-[var(--resin-deep)] font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--resin)]" />
                The Collection
              </span>
              <h2 className="gal-display text-2xl md:text-3xl font-extrabold text-[var(--ink)] leading-tight">
                Explore Our Epoxy Flooring Collection
              </h2>
            </Reveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {galleryImages.map((image, index) => (
                <GalleryTile
                  key={image.src}
                  image={image}
                  index={index}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ============ UNVEILING EPOXY ARTISTRY ============ */}
<section className="py-8 md:py-12 bg-[var(--concrete)]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card 1 */}
      <Reveal
        delay={0}
        className="group gal-art-card bg-white rounded-3xl p-8 shadow-sm transition-all duration-500 hover:bg-black hover:-translate-y-2 hover:shadow-2xl"
      >
        <span className="gal-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[1.5px] text-[var(--resin-deep)] group-hover:text-white font-semibold mb-3 transition-colors duration-500">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--resin)] gal-art-dot" />
          Our Craft
        </span>

        <h2 className="gal-display text-2xl font-extrabold text-[var(--ink)] group-hover:text-white mb-4 transition-colors duration-500">
          Unveiling Epoxy Artistry
        </h2>

        <p className="text-sm text-[var(--steel)] group-hover:text-white/80 leading-relaxed transition-colors duration-500">
          Our gallery isn't just a showcase; it's a celebration of epoxy
          craftsmanship. With years of experience as Sydney's trusted
          epoxy flooring experts, we take pride in presenting you with
          the finest examples of our work.
        </p>
      </Reveal>

      {/* Card 2 */}
      <Reveal
        delay={120}
        className="group gal-art-card bg-white rounded-3xl p-8 shadow-sm transition-all duration-500 hover:bg-black hover:-translate-y-2 hover:shadow-2xl"
      >
        <span className="gal-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[1.5px] text-[var(--resin-deep)] group-hover:text-white font-semibold mb-3 transition-colors duration-500">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--resin)] gal-art-dot" />
          Elevate Your Space
        </span>

        <h2 className="gal-display text-2xl font-extrabold text-[var(--ink)] group-hover:text-white mb-4 transition-colors duration-500">
          More Than a Surface
        </h2>

        <p className="text-sm text-[var(--steel)] group-hover:text-white/80 leading-relaxed transition-colors duration-500">
          Epoxy flooring is more than just a surface; it's a statement.
          Discover the transformative power of our epoxy floors as they
          redefine residential, commercial, and industrial spaces.
        </p>
      </Reveal>

      {/* Card 3 */}
      <Reveal
        delay={240}
        className="group gal-art-card bg-white rounded-3xl p-8 shadow-sm transition-all duration-500 hover:bg-black hover:-translate-y-2 hover:shadow-2xl"
      >
        <span className="gal-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[1.5px] text-[var(--resin-soft)] group-hover:text-white font-semibold mb-3 transition-colors duration-500">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--resin-soft)] gal-art-dot" />
          Get Involved
        </span>

        <h2 className="gal-display text-2xl font-extrabold text-black group-hover:text-white mb-4 transition-colors duration-500">
          Immersive Experiences & Insights
        </h2>

        <p className="text-sm text-black/70 group-hover:text-white/80 leading-relaxed transition-colors duration-500">
          Engage with epoxy flooring on a deeper level through immersive
          experiences. Join virtual workshops, gain insights from our epoxy
          experts, and explore the techniques that make each floor a true
          masterpiece.
        </p>
      </Reveal>

    </div>
  </div>
</section>

        {/* ============ CUSTOM SOLUTIONS CTA ============ */}
        <section className="py-8 md:py-12 bg-[var(--concrete)]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <Reveal>
              <span className="gal-mono inline-flex items-center justify-center gap-2 text-[11px] uppercase tracking-[1.5px] text-[var(--resin-deep)] font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--resin)]" />
                Custom Epoxy Solutions
              </span>
              <h2 className="gal-display text-2xl md:text-3xl font-extrabold text-[var(--ink)] leading-tight mb-4">
                A Floor as Unique as You Are
              </h2>
              <p className="text-sm text-[var(--steel)] leading-relaxed mb-7">
                Our team specialises in creating custom epoxy designs tailored to
                your vision and space. From personalised colours to branded
                patterns, we bring your ideas to life, making your floors a true
                reflection of your style.
              </p>
              <button className="gal-btn-primary bg-[var(--resin)] hover:bg-[var(--resin-deep)] text-[var(--paper)] px-6 py-3 rounded-sm font-semibold gal-mono text-xs uppercase tracking-wide">
                Request a Custom Quote
              </button>
            </Reveal>
          </div>
        </section>

        {/* ============ LIGHTBOX ============ */}
        {isOpen && (
          <div
            className="gal-lightbox-backdrop fixed inset-0 z-50 bg-[var(--ink)]/95 flex items-center justify-center px-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              aria-label="Close"
              className="gal-ctrl absolute top-5 right-5 w-10 h-10 rounded-full bg-[var(--paper)]/10 text-[var(--paper)] flex items-center justify-center"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Previous arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
              className="gal-ctrl absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[var(--paper)]/10 text-[var(--paper)] flex items-center justify-center"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Next arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="gal-ctrl absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[var(--paper)]/10 text-[var(--paper)] flex items-center justify-center"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Image + caption */}
            <div
              key={activeIndex}
              className="gal-lightbox-img max-w-4xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                className="max-h-[78vh] w-auto object-contain rounded-sm shadow-2xl"
              />
              <div className="gal-caption-fade mt-4 flex items-center gap-3">
                <span className="gal-mono text-[11px] text-[var(--paper)]/50">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(galleryImages.length).padStart(2, "0")}
                </span>
                <span className="text-[var(--paper)]/70 text-[13px]">
                  {galleryImages[activeIndex].alt}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

/* ----------------------------------------------------------------
   Individual gallery tile: reveals on scroll (staggered), shows a
   shimmer skeleton until its image finishes loading.
------------------------------------------------------------------- */
const GalleryTile = ({ image, index, onClick }) => {
  const [ref, inView] = useInView();
  const [imgLoaded, setImgLoaded] = useState(false);
  const staggerDelay = (index % 10) * 50;

  return (
    <button
      ref={ref}
      onClick={onClick}
      style={{ transitionDelay: inView ? `${staggerDelay}ms` : "0ms", animationDelay: inView ? `${staggerDelay}ms` : "0ms" }}
      className={`gal-tile group relative overflow-hidden rounded-sm aspect-square bg-[var(--ink)] block ${
        inView ? "gal-tile-visible" : ""
      }`}
      aria-label={`View ${image.alt}`}
    >
      {!imgLoaded && <span className="gal-tile-skeleton absolute inset-0" />}
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        onLoad={() => setImgLoaded(true)}
        className={`gal-tile-img w-full h-full object-cover transition-opacity duration-500 ${
          imgLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="gal-tile-overlay absolute inset-0 bg-gradient-to-t from-[var(--ink)]/70 via-[var(--ink)]/0 to-transparent opacity-0 group-hover:opacity-100" />
      <span className="gal-tile-view-label absolute bottom-2.5 left-2.5 gal-mono text-[9px] uppercase tracking-wide text-[var(--paper)] opacity-0 group-hover:opacity-100">
        View
      </span>
    </button>
  );
};

export default Gallery;
