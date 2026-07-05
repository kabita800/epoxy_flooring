import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  Award,
  ShieldCheck,
  Wrench,
  Leaf,
  Star,
  MapPin,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

/* ----------------------------------------------------------------
   DATA
------------------------------------------------------------------- */
const heroImages = [
  "/src/assets/DiamondGrindinginWarehouse.png",
  "/src/assets/SEF2CColour2024.png",
  "/src/assets/homepage-Section1.jpg",
];

const instagramPosts = [
  { type: "video", src: "/src/assets/Instagram/post1.mp4" },
  { type: "video", src: "/src/assets/Instagram/post2.mp4" },
  { type: "video", src: "/src/assets/Instagram/post3.mp4" },
  { type: "video", src: "/src/assets/Instagram/post4.mp4" },
  { type: "video", src: "/src/assets/Instagram/post5.mp4" },
  { type: "video", src: "/src/assets/Instagram/post6.mp4" },
  { type: "video", src: "/src/assets/Instagram/post7.mp4" },
  { type: "video", src: "/src/assets/Instagram/post8.mp4" },
];

const services = [
  {
    title: "Warehouse Epoxy Flooring",
    image: "/src/assets/floor.jpg",
    link: "/services/warehouse-epoxy-flooring",
    spec: "High load-bearing",
  },
  {
    title: "Workshop Epoxy Flooring",
    image: "/src/assets/floors.jpg",
    link: "/services/workshop-epoxy-flooring",
    spec: "Chemical resistant",
  },
  {
    title: "Garage Epoxy Flooring",
    image: "/src/assets/garage.jpg",
    link: "/services/garage-epoxy-flooring",
    spec: "Stain proof",
  },
  {
    title: "Industrial Epoxy Flooring",
    image: "/src/assets/industrial.jpg",
    link: "/services/industrial-epoxy-flooring",
    spec: "Heavy traffic rated",
  },
  {
    title: "Epoxy for Kitchens",
    image: "/src/assets/commerical.jpg",
    link: "/services/epoxy-kitchens",
    spec: "Food-safe finish",
  },
  {
    title: "Cementitious Polyurethane",
    image: "/src/assets/concrete.jpg",
    link: "/services/polyurethane-floor-coating",
    spec: "Impact resistant",
  },
  {
    title: "Metallic Epoxy Flooring",
    image: "/src/assets/metallic.jpg",
    link: "/services/metallic-epoxy-flooring",
    spec: "Statement finish",
  },
  {
    title: "Solid Colour Epoxy",
    image: "/src/assets/floor.jpg",
    link: "/services/solid-colour-epoxy",
    spec: "Clean modern look",
  },
  {
    title: "Premium Flake Epoxy",
    image: "/src/assets/flake.jpg",
    link: "/services/flake-epoxy-flooring",
    spec: "Textured grip",
  },
  {
    title: "SEF SuperClear",
    image: "/src/assets/industrial.jpg",
    link: "/services/sef-superclear",
    spec: "Grind and seal",
  },
  {
    title: "Epoxy Over Tiles",
    image: "/src/assets/floors.jpg",
    link: "/services/epoxy-over-tiles",
    spec: "No demolition",
  },
  {
    title: "Heavy Duty Line Marking",
    image: "/src/assets/concrete.jpg",
    link: "/services/line-marking",
    spec: "Safe traffic flow",
  },
  {
    title: "Driveway Epoxy Flooring",
    image: "/src/assets/garage.jpg",
    link: "/services/driveway-epoxy-flooring",
    spec: "Weather resistant",
  },
];

const serviceList = [
  "Garage Epoxy Flooring",
  "Industrial Environment Epoxy Flooring",
  "Commercial Kitchen Epoxy Flooring",
  "Warehouse Epoxy Flooring",
  "Mechanical Workshop Flooring",
  "Concrete Grinding & Sealing",
  "Metallic Epoxy Flooring",
  "Flake Epoxy Flooring",
  "High Performance Epoxy Repairs",
  "Self-Levelling Epoxy Flooring",
  "Epoxy Flooring Over Tiles",
  "Driveway Epoxy Flooring",
];

const serviceAreas = [
  "Sydney Eastern Suburbs",
  "Sydney CBD",
  "Sydney North Shore",
  "Sydney Inner West",
  "Sydney Hills District",
  "Blue Mountains",
  "Western Sydney",
  "Hawkesbury",
  "South West Sydney",
  "Sutherland Shire",
  "Wollongong",
  "Newcastle",
  "Gosford",
  "Central Coast",
];

const whyCards = [
  {
    icon: Award,
    title: "21+ Years of Experience",
    text: "Over two decades delivering premium epoxy flooring solutions across Sydney using UV-stable systems built for Australian conditions.",
  },
  {
    icon: Wrench,
    title: "Industrial Diamond Grinding",
    text: "Every floor receives professional diamond grinding preparation to create a permanent bond and prevent peeling or delamination.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Compliance",
    text: "HACCP-compliant flooring systems with up to R13 slip resistance for commercial kitchens, healthcare and industrial facilities.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Systems",
    text: "Low-VOC, non-toxic epoxy systems that are safer for families, pets, employees and customers.",
  },
  {
    icon: Star,
    title: "330+ Five-Star Reviews",
    text: "One of Sydney's highest-rated epoxy flooring specialists with a 4.9-star average rating and a commitment to customer satisfaction.",
  },
  {
    icon: MapPin,
    title: "Visit Our Showroom",
    text: "Explore our Silverwater showroom and compare flake, metallic and solid-colour epoxy finishes before making your decision.",
  },
];

/* ----------------------------------------------------------------
   Scroll reveal hook
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

const Reveal = ({
  as: Tag = "div",
  className = "",
  delay = 0,
  children,
  ...rest
}) => {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

const CountUp = ({ to, suffix = "", duration = 1400, className = "" }) => {
  const [ref, inView] = useInView();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    let raf;
    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * to));
      if (progress < 1) raf = requestAnimationFrame(step);
      else setValue(to);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
};

/* Signature element: a marbled "poured epoxy" swirl, built in SVG.
   Evokes metallic/flake epoxy pours without using any image assets. */
const PourSwirl = ({ className = "", style = {} }) => (
  <svg
    viewBox="0 0 600 600"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="pourGrad1" cx="35%" cy="35%" r="70%">
        <stop offset="0%" stopColor="#A11717" />
        <stop offset="35%" stopColor="#A11717" />
        <stop offset="70%" stopColor="#A11717" />
        <stop offset="100%" stopColor="#16181B" />
      </radialGradient>
      <filter id="pourBlur">
        <feGaussianBlur stdDeviation="0.6" />
      </filter>
    </defs>
    <circle cx="300" cy="300" r="280" fill="url(#pourGrad1)" />
    <path
      d="M300 60 C420 90 540 200 520 320 C500 450 380 540 260 520 C140 500 60 380 90 250 C115 145 200 40 300 60Z"
      fill="none"
      stroke="#FAFAF8"
      strokeOpacity="0.18"
      strokeWidth="3"
      filter="url(#pourBlur)"
    />
    <path
      d="M300 130 C390 150 460 220 450 300 C440 390 360 450 280 440 C200 430 140 360 150 280 C160 200 220 115 300 130Z"
      fill="none"
      stroke="#FAFAF8"
      strokeOpacity="0.28"
      strokeWidth="2.5"
      filter="url(#pourBlur)"
    />
    <path
      d="M300 190 C350 200 390 240 385 290 C380 345 335 380 290 375 C245 370 210 330 215 285 C220 240 255 182 300 190Z"
      fill="none"
      stroke="#FAFAF8"
      strokeOpacity="0.4"
      strokeWidth="2"
      filter="url(#pourBlur)"
    />
    <circle cx="300" cy="300" r="38" fill="#FAFAF8" fillOpacity="0.9" />
  </svg>
);

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [activeWhyCard, setActiveWhyCard] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slider);
  }, []);

  useEffect(() => {
    const whySlider = setInterval(() => {
      setActiveWhyCard((prev) => (prev === whyCards.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(whySlider);
  }, []);

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

        .sef-root {
          font-family: 'Inter', sans-serif;
          color: var(--ink);
          background: var(--paper);
        }
        .sef-display {
          font-family: 'Archivo Expanded', 'Archivo', sans-serif;
          letter-spacing: -0.01em;
        }
        .sef-mono {
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.02em;
        }

        @keyframes kenburns { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }
        @keyframes fadeUp { 0% { opacity: 0; transform: translateY(28px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes spinSlow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes floatSlow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes dotPulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(161,23,23,0.5); } 70% { box-shadow: 0 0 0 9px rgba(161,23,23,0); } }
        @keyframes arrowSlide { 0% { transform: translateX(0); } 50% { transform: translateX(5px); } 100% { transform: translateX(0); } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes whySlideIn { 0% { opacity: 0; transform: translateX(12px); } 100% { opacity: 1; transform: translateX(0); } }

        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1);
          will-change: opacity, transform;
        }
        .reveal-visible { opacity: 1; transform: translateY(0); }

        .hero-kenburns { animation: kenburns 9s ease-out forwards; }
        .hero-fade-img { transition: opacity 1.1s ease-in-out; }

        .hero-content > * {
          opacity: 0;
          transform: translateY(22px);
          animation: fadeUp 0.85s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .hero-loaded .hero-content > *:nth-child(1) { animation-delay: 0.1s; }
        .hero-loaded .hero-content > *:nth-child(2) { animation-delay: 0.25s; }
        .hero-loaded .hero-content > *:nth-child(3) { animation-delay: 0.4s; }
        .hero-loaded .hero-content > *:nth-child(4) { animation-delay: 0.55s; }

        .pour-spin { animation: spinSlow 38s linear infinite; }
        .pour-float { animation: floatSlow 5s ease-in-out infinite; }

        .hero-dot { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background-color 0.3s ease, width 0.3s ease; }
        .hero-dot-active { animation: dotPulse 2s ease-out infinite; }

        .btn-primary {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
        }
        .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 14px 30px -10px rgba(161,23,23,0.55); }
        .btn-primary:active { transform: translateY(-1px) scale(0.98); }

        .btn-ghost { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease; }
        .btn-ghost:hover { transform: translateY(-3px); }

        .stat-block { transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1); }
        .stat-block:hover { transform: translateY(-3px); }

        .service-card {
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease;
        }
        .service-card:hover { transform: translateY(-10px); box-shadow: 0 28px 50px -16px rgba(22,24,27,0.45); }
        .service-card-img { transition: transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .service-card:hover .service-card-img { transform: scale(1.12); }
        .service-card-arrow {
          transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .service-card:hover .service-card-arrow { animation: arrowSlide 0.9s ease-in-out infinite; }

        .why-card { transition: transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease, border-color 0.45s ease; }
        .why-card:hover { transform: translateY(-6px); border-color: var(--resin); }
        .why-card:hover .why-icon { transform: scale(1.12) rotate(-5deg); background: var(--resin); }
        .why-card:hover .why-icon svg { color: var(--paper); }
        .why-icon { transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1), background-color 0.3s ease; }
        .why-icon svg { transition: color 0.3s ease; }
        .why-slider-enter { animation: whySlideIn 0.45s cubic-bezier(0.22,1,0.36,1); }

        .spec-row { transition: padding-left 0.25s ease; }
        .spec-row:hover { padding-left: 6px; }
        .spec-row:hover h3 { color: var(--resin-deep); }
        .spec-row h3 { transition: color 0.25s ease; }

        .insta-tile { transition: transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease; }
        .insta-tile:hover { transform: translateY(-6px); box-shadow: 0 20px 40px -14px rgba(22,24,27,0.4); }
        .insta-tile-media { transition: transform 0.6s cubic-bezier(0.22,1,0.36,1); }
        .insta-tile:hover .insta-tile-media { transform: scale(1.08); }

        .follow-btn { transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease; }
        .follow-btn:hover { transform: scale(1.05); box-shadow: 0 16px 32px -10px rgba(161,23,23,0.5); }

        .map-card { transition: box-shadow 0.4s ease; }
        .map-card:hover { box-shadow: 0 24px 48px -16px rgba(22,24,27,0.3); }

        .directions-btn { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background-color 0.3s ease; }
        .directions-btn:hover { transform: scale(1.05); }

        .marquee-track { animation: marquee 28s linear infinite; }

        .diagonal-cut {
          clip-path: polygon(0 3vw, 100% 0, 100% 100%, 0 calc(100% - 3vw));
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal, .hero-content > *, .hero-kenburns, .hero-dot-active, .pour-spin, .pour-float,
          .btn-primary, .btn-ghost, .stat-block, .service-card, .service-card-img, .service-card-arrow,
          .why-card, .why-icon, .spec-row, .insta-tile, .insta-tile-media,
          .follow-btn, .map-card, .directions-btn, .hero-fade-img, .marquee-track {
            animation: none !important;
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      <div className="sef-root">
        {/*  HERO  */}
        <section className="relative w-full min-h-[78vh] md:h-[78vh] overflow-hidden bg-[var(--ink)]">
          {heroImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt="Epoxy Flooring"
              className={`hero-fade-img absolute inset-0 w-full h-full object-cover ${
                index === current ? "opacity-100 hero-kenburns" : "opacity-0"
              }`}
            />
          ))}

          {/* Ink gradient overlay instead of flat black */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/70 to-[var(--ink)]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/80 via-transparent to-transparent" />

          {/* Signature pour swirl, floating top-right of hero */}
          <PourSwirl className="pour-spin absolute -right-20 -top-20 w-[300px] h-[300px] opacity-70 hidden lg:block" />

          <div
            className={`relative z-10 max-w-6xl mx-auto h-full flex items-center justify-center px-5 sm:px-8 md:px-10 py-10 sm:items-end sm:justify-start md:items-center md:pb-0 ${loaded ? "hero-loaded" : ""}`}
          >
            <div className="max-w-2xl w-full text-[var(--paper)] hero-content text-center sm:text-left flex flex-col items-center sm:items-start">
              <p className="sef-mono uppercase tracking-[2px] text-[11px] sm:text-xs text-[var(--resin-soft)] font-semibold mb-4 flex items-center gap-2.5 justify-center sm:justify-start">
                <span className="inline-block w-6 h-px bg-[var(--resin-soft)]" />
                Sydney · Est. 2003
              </p>

              <h1 className="sef-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.05] mb-4 text-center sm:text-left">
                Floors poured to
                <br />
                <span className="text-[var(--resin-soft)]">
                  outlast everything
                </span>
                <br />
                on top of them.
              </h1>

              <p className="text-sm md:text-base text-[var(--paper)]/70 max-w-lg mb-7 leading-relaxed text-center sm:text-left mx-auto sm:mx-0">
                High-performance epoxy flooring systems engineered for
                warehouses, workshops, garages and commercial spaces across
                Sydney — diamond-ground, seamless, built for decades.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start">
                <Link
                  to="/contact"
                  className="btn-primary bg-[var(--resin)] hover:bg-[var(--resin-deep)] text-[var(--paper)] px-5 py-2.5 rounded-sm font-semibold no-underline inline-flex items-center justify-center gap-2 sef-mono text-xs uppercase tracking-wide"
                >
                  Get Free Quote <ArrowRight size={14} />
                </Link>
                <a
                  href="#services"
                  className="btn-ghost border border-[var(--paper)]/30 hover:bg-[var(--paper)] hover:text-[var(--ink)] text-[var(--paper)] px-5 py-2.5 rounded-sm font-semibold no-underline text-center sef-mono text-xs uppercase tracking-wide"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Show slide ${index + 1}`}
                className={`hero-dot h-1 rounded-full ${
                  current === index ?
                    "bg-[var(--resin)] hero-dot-active w-6"
                  : "bg-[var(--paper)]/40 w-3"
                }`}
              />
            ))}
          </div>
        </section>

        {/*  INTRO / STATS */}
        <section className="py-14 md:py-20 bg-[var(--paper)]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <Reveal>
                <span className="sef-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[1.5px] text-[var(--resin-deep)] font-semibold mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--resin)]" />
                  Sydney's Top Rated Epoxy Contractors
                </span>

                <h2 className="sef-display text-2xl md:text-3xl font-extrabold text-[var(--ink)] leading-[1.15] mb-4">
                  Built on prep.
                  <br />
                  <span className="text-[var(--resin-deep)]">
                    Finished to last.
                  </span>
                </h2>

                <p className="text-sm md:text-base text-[var(--steel)] leading-relaxed mb-6 max-w-md">
                  Our qualified team, experienced estimators, and project
                  managers are committed to client satisfaction from first
                  enquiry to final coat. We invest continuously in advanced
                  grinding equipment and ongoing training so every floor we pour
                  is effective, environmentally responsible, and built to
                  outlast the building around it.
                </p>

                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center gap-2 bg-[var(--ink)] hover:bg-[var(--ink-soft)] text-[var(--paper)] px-4 py-2.5 rounded-sm font-semibold sef-mono text-xs uppercase tracking-wide no-underline"
                >
                  Start your project <ArrowUpRight size={14} />
                </Link>

                <div className="flex gap-6 sm:gap-8 mt-10 border-t border-[var(--ink)]/10 pt-6">
                  <div className="stat-block">
                    <h3 className="sef-display text-2xl font-extrabold text-[var(--resin-deep)]">
                      <CountUp to={21} suffix="+" />
                    </h3>
                    <p className="sef-mono text-[10px] uppercase tracking-wide text-[var(--steel)] mt-1.5">
                      Years Experience
                    </p>
                  </div>
                  <div className="stat-block">
                    <h3 className="sef-display text-2xl font-extrabold text-[var(--resin-deep)]">
                      <CountUp to={500} suffix="+" />
                    </h3>
                    <p className="sef-mono text-[10px] uppercase tracking-wide text-[var(--steel)] mt-1.5">
                      Projects Done
                    </p>
                  </div>
                  <div className="stat-block">
                    <h3 className="sef-display text-2xl font-extrabold text-[var(--resin-deep)]">
                      <CountUp to={100} suffix="%" />
                    </h3>
                    <p className="sef-mono text-[10px] uppercase tracking-wide text-[var(--steel)] mt-1.5">
                      Satisfaction
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={150} className="relative">
                <div className="overflow-hidden rounded-sm shadow-xl relative">
                  {heroImages.map((image, index) => (
                    <img
                      key={image}
                      src={image}
                      alt=""
                      className={`hero-fade-img w-full h-[240px] sm:h-[320px] md:h-[400px] object-cover ${
                        current === index ? "block" : "hidden"
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 ring-1 ring-inset ring-[var(--paper)]/10" />
                </div>

                <div className="pour-float absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-[var(--ink)] text-[var(--paper)] shadow-xl rounded-sm px-4 py-3.5 max-w-[210px]">
                  <p className="sef-mono text-[9px] uppercase tracking-[1.5px] text-[var(--resin-soft)] mb-1.5">
                    Coverage
                  </p>
                  <h4 className="font-bold text-sm leading-snug">
                    Industrial · Commercial · Residential
                  </h4>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/*  SERVICES GRID */}
        <section id="services" className="py-14 md:py-20 bg-[var(--concrete)]">
          <div className="max-w-6xl mx-auto px-5 md:px-10">
            <Reveal className="max-w-xl mb-8">
              <span className="sef-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[1.5px] text-[var(--resin-deep)] font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--resin)]" />
                What We Pour
              </span>
              <h2 className="sef-display text-2xl md:text-3xl font-extrabold text-[var(--ink)] leading-tight">
                Epoxy Flooring Services
              </h2>
            </Reveal>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service, i) => (
                <Reveal
                  key={service.title}
                  delay={i * 60}
                  as={Link}
                  to={service.link}
                  className="service-card group relative overflow-hidden rounded-sm shadow-md block bg-[var(--ink)]"
                >
                  <div className="relative h-[170px] sm:h-[200px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-card-img w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/20 to-transparent" />
                  </div>

                  <div className="absolute top-3 left-3">
                    <span className="sef-mono text-[9px] uppercase tracking-wide text-white bg-[var(--ink)]/70 px-2 py-0.5 rounded-sm">
                      {service.spec}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-3.5 flex items-end justify-between gap-2">
                    <h3 className="text-[var(--paper)] text-sm font-bold leading-tight">
                      {service.title}
                    </h3>
                    <div className="service-card-arrow shrink-0 w-7 h-7 bg-[var(--resin)] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <ArrowRight size={13} className="text-[var(--paper)]" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WHY CHOOSE US ============ */}
        <section className="py-14 md:py-20 bg-[var(--ink)] relative overflow-hidden">
          <PourSwirl className="pour-spin absolute -left-24 bottom-0 w-[340px] h-[340px] opacity-[0.1] hidden lg:block" />

          <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
            <Reveal className="max-w-xl mb-10">
              <span className="sef-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[1.5px] text-[var(--resin-soft)] font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--resin-soft)]" />
                Why Sydney Trusts Us
              </span>
              <h2 className="sef-display text-2xl md:text-3xl font-extrabold text-[var(--paper)] leading-tight">
                The authority in
                <br />
                <span className="text-[var(--resin-soft)]">
                  high-performance flooring
                </span>
              </h2>
            </Reveal>

            <div className="block md:hidden max-w-3xl mx-auto">
              {(() => {
                const item = whyCards[activeWhyCard];
                const Icon = item.icon;

                return (
                  <Reveal key={item.title}>
                    <div className="why-card why-slider-enter bg-[var(--ink-soft)] rounded-sm p-6 border border-[var(--paper)]/10 text-center">
                      <div className="why-icon w-12 h-12 rounded-sm bg-[var(--paper)]/10 flex items-center justify-center mb-4 mx-auto">
                        <Icon className="w-5 h-5 text-[var(--resin-soft)]" />
                      </div>

                      <h3 className="text-base font-bold text-[var(--paper)] mb-3">
                        {item.title}
                      </h3>

                      <p className="text-[var(--paper)]/70 text-[14px] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })()}

              <div className="mt-6 flex items-center justify-center gap-2">
                {whyCards.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show reason ${index + 1}`}
                    onClick={() => setActiveWhyCard(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeWhyCard === index ?
                        "w-6 bg-[var(--resin)]"
                      : "w-2.5 bg-[var(--paper)]/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {whyCards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={index * 80} y={18}>
                    <div className="why-card bg-[var(--ink-soft)]/80 rounded-sm p-6 md:p-8 border border-[var(--paper)]/10 h-full">
                      <div className="why-icon w-12 h-12 rounded-sm bg-[var(--paper)]/10 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-[var(--resin-soft)]" />
                      </div>

                      <h3 className="text-base md:text-lg font-bold text-[var(--paper)] mb-3">
                        {item.title}
                      </h3>

                      <p className="text-[var(--paper)]/70 text-[14px] md:text-[15px] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ SERVICE AREAS ============ */}
        <section className="py-16 md:py-20 bg-[var(--paper)]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <Reveal className="max-w-xl mb-10">
              <span className="sef-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[1.5px] text-[var(--resin-deep)] font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--resin)]" />
                Where We Work
              </span>
              <h2 className="sef-display text-2xl md:text-3xl font-extrabold text-[var(--ink)] leading-tight">
                Servicing all of Sydney &amp; beyond
              </h2>
            </Reveal>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <Reveal className="rounded-lg overflow-hidden border border-[var(--ink)]/10">
                <iframe
                  title="Sydney Epoxy Floors Showroom"
                  src="https://maps.google.com/maps?q=6%20Giffard%20Street%20Silverwater%20NSW%202128&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-[260px] border-0 grayscale contrast-125"
                  loading="lazy"
                  allowFullScreen
                />
                <div className="p-5 bg-[var(--ink)]">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-start gap-2.5">
                      <MapPin
                        className="text-[var(--resin-soft)] mt-0.5 shrink-0"
                        size={16}
                      />
                      <div>
                        <p className="font-semibold text-[var(--paper)] text-sm">
                          6 Giffard Street
                        </p>
                        <p className="text-[var(--paper)]/50 text-sm">
                          Silverwater NSW 2128
                        </p>
                      </div>
                    </div>
                    <a
                      href="https://maps.google.com/?q=6+Giffard+Street+Silverwater+NSW+2128"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="directions-btn shrink-0 bg-[var(--resin)] text-[var(--paper)] px-3.5 py-2 rounded-sm text-xs font-semibold"
                    >
                      Directions
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-4 gap-y-3">
                  {serviceAreas.map((area, i) => (
                    <div
                      key={area}
                      className="flex items-center gap-2.5 py-1.5"
                      style={{
                        opacity: 0,
                        animation:
                          "fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) forwards",
                        animationDelay: `${i * 0.04}s`,
                      }}
                    >
                      <MapPin
                        size={14}
                        className="text-[var(--resin)] shrink-0"
                      />
                      <span className="text-[var(--ink)] text-[14px]">
                        {area}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ SERVICE SPEC LIST ============ */}
        <section className="py-16 md:py-20 bg-[var(--concrete)]">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <Reveal className="max-w-xl mb-10">
              <span className="sef-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[1.5px] text-[var(--resin-deep)] font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--resin)]" />
                What We Do
              </span>
              <h2 className="sef-display text-2xl md:text-3xl font-extrabold text-[var(--ink)] leading-tight mb-3">
                Every system we install
              </h2>
              <p className="text-sm text-[var(--steel)] leading-relaxed">
                Concrete floor preparation, industrial-grade coatings, and
                durable systems designed for heavy traffic — and easy to keep
                clean for decades after.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-1">
              {serviceList.map((service, index) => (
                <Reveal
                  key={service}
                  delay={(index % 6) * 50}
                  as="div"
                  className="spec-row flex items-center gap-3 py-3 border-b border-[var(--ink)]/10"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--resin)] shrink-0" />
                  <h3 className="text-[14px] font-medium text-[var(--ink)]">
                    {service}
                  </h3>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12 rounded-lg bg-[var(--ink)] p-7 md:p-8 text-center">
              <h3 className="sef-display text-lg md:text-xl font-extrabold text-[var(--paper)] mb-2">
                Not sure which system fits your floor?
              </h3>
              <p className="max-w-md mx-auto text-[13px] text-[var(--paper)]/60 mb-5 leading-relaxed">
                Speak with our specialists for expert advice, product
                recommendations, and a free on-site assessment.
              </p>
              <Link
                to="/contact"
                className="btn-primary bg-[var(--resin)] hover:bg-[var(--resin-deep)] text-[var(--paper)] px-6 py-2.5 rounded-sm text-xs font-semibold sef-mono uppercase tracking-wide no-underline inline-block"
              >
                Book Free Assessment
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ============ INSTAGRAM ============ */}
        <section className="py-14 md:py-20 bg-[var(--paper)]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <Reveal className="text-center mb-8">
              <span className="sef-mono inline-flex items-center justify-center gap-2 text-[11px] uppercase tracking-[1.5px] text-[var(--resin-deep)] font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--resin)]" />
                On Site, On Instagram
              </span>
              <h2 className="sef-display text-2xl md:text-3xl font-extrabold text-[var(--ink)] mb-2">
                Follow the pours
              </h2>
              <p className="text-sm text-[var(--steel)] mb-5">
                @sydneyepoxyfloors.com.au
              </p>

              <a
                href="https://www.instagram.com/sydneyepoxyfloors.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="follow-btn inline-flex items-center gap-2 bg-[var(--ink)] text-[var(--paper)] px-5 py-2.5 rounded-sm font-semibold sef-mono text-xs uppercase tracking-wide"
              >
                Follow <ArrowUpRight size={13} />
              </a>
            </Reveal>

            <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {instagramPosts.map((post, index) => (
                <Reveal
                  key={index}
                  as="a"
                  delay={(index % 4) * 70}
                  {...{
                    href: "https://www.instagram.com/sydneyepoxyfloors.com.au/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }}
                  className="insta-tile group overflow-hidden rounded-sm aspect-square bg-[var(--ink)] block relative"
                >
                  {post.type === "video" ?
                    <video
                      src={post.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="insta-tile-media w-full h-full object-cover"
                    />
                  : <img
                      src={post.src}
                      alt={`Instagram post ${index + 1}`}
                      className="insta-tile-media w-full h-full object-cover"
                    />
                  }
                </Reveal>
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
              Get a personalised quote for your commercial kitchen or food
              processing floor.
            </p>
            <a
              href="/contact"
              className="rounded-full bg-[#A11717] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#8a1313]"
            >
              Contact us
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
