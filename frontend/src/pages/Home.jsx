import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { Award, ShieldCheck, Wrench, Leaf, Star, MapPin } from "lucide-react";
import { Building2 } from "lucide-react";

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
  },
  {
    title: "Workshop Epoxy Flooring",
    image: "/src/assets/floors.jpg",
    link: "/services/workshop-epoxy-flooring",
  },
  {
    title: "Garage Epoxy Flooring",
    image: "/src/assets/garage.jpg",
    link: "/services/garage-epoxy-flooring",
  },
  {
    title: "Industrial Epoxy Flooring",
    image: "/src/assets/industrial.jpg",
    link: "/services/industrial-epoxy-flooring",
  },
  {
    title: "Commercial Epoxy Flooring",
    image: "/src/assets/commerical.jpg",
    link: "/services/commercial-epoxy-flooring",
  },
  {
    title: "Metallic Epoxy Flooring",
    image: "/src/assets/metallic.jpg",
    link: "/services/metallic-epoxy-flooring",
  },
  {
    title: "Flake Epoxy Flooring",
    image: "/src/assets/flake.jpg",
    link: "/services/flake-epoxy-flooring",
  },
  {
    title: "Concrete Grinding",
    image: "/src/assets/concrete.jpg",
    link: "/services/concrete-grinding",
  },
];

/* ----------------------------------------------------------------
   Lightweight scroll-reveal hook (IntersectionObserver based).
   Respects prefers-reduced-motion automatically via the CSS below.
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

/* Wrapper that fades + rises content into view once scrolled to. */
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

/* Animated count-up number, triggers once visible */
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
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      setValue(Math.floor(eased * to));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setValue(to);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <h3 ref={ref} className={className}>
      {value}
      {suffix}
    </h3>
  );
};

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  useEffect(() => {
    // trigger hero entrance animation on mount
    const t = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <>
      {/* ---------------------------------------------------------
          Global animation styles. Co-located so this file stays
          drop-in; move to a stylesheet if you prefer.
      ----------------------------------------------------------- */}
      <style>{`
        @keyframes kenburns {
          0%   { transform: scale(1); }
          100% { transform: scale(1.12); }
        }
        @keyframes fadeUp {
          0%   { opacity: 0; transform: translateY(28px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes dotPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(204,31,31,0.45); }
          70% { box-shadow: 0 0 0 8px rgba(204,31,31,0); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes arrowSlide {
          0% { transform: translateX(0); }
          50% { transform: translateX(4px); }
          100% { transform: translateX(0); }
        }

        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }
        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-kenburns {
          animation: kenburns 9s ease-out forwards;
        }

        .hero-fade-img {
          transition: opacity 1.1s ease-in-out;
        }

        .hero-content > * {
          opacity: 0;
          transform: translateY(24px);
          animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .hero-loaded .hero-content > *:nth-child(1) { animation-delay: 0.15s; }
        .hero-loaded .hero-content > *:nth-child(2) { animation-delay: 0.32s; }
        .hero-loaded .hero-content > *:nth-child(3) { animation-delay: 0.5s; }
        .hero-loaded .hero-content > *:nth-child(4) { animation-delay: 0.68s; }

        .hero-dot {
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.35s ease;
        }
        .hero-dot:hover {
          transform: scale(1.25);
        }
        .hero-dot-active {
          animation: dotPulse 2s ease-out infinite;
        }

        .cta-btn {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, background-color 0.3s ease;
        }
        .cta-btn:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 10px 28px -8px rgba(204,31,31,0.55);
        }
        .cta-btn:active {
          transform: translateY(-1px) scale(0.99);
        }
        .cta-btn-outline {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }
        .cta-btn-outline:hover {
          transform: translateY(-3px) scale(1.03);
        }

        .stat-card {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .stat-card:hover {
          transform: translateY(-4px);
        }

        .service-card {
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease;
        }
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px -12px rgba(0,0,0,0.35);
        }
        .service-card-img {
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), filter 0.6s ease;
        }
        .service-card:hover .service-card-img {
          transform: scale(1.14);
        }
        .service-card-overlay {
          transition: background-color 0.4s ease;
        }
        .service-card-arrow {
          transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .service-card:hover .service-card-arrow {
          animation: arrowSlide 0.9s ease-in-out infinite;
        }

        .feature-card {
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s ease;
        }
        .feature-card:hover {
          transform: translateY(-6px);
        }
        .feature-card:hover .feature-icon {
          transform: scale(1.15) rotate(-6deg);
        }
        .feature-icon {
          transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .area-card {
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.35s ease, box-shadow 0.35s ease;
        }
        .area-card:hover {
          transform: translateY(-3px) scale(1.02);
        }
        .area-card:hover .area-pin {
          animation: floatSlow 1.2s ease-in-out infinite;
        }

        .service-tile {
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .service-tile:hover {
          transform: translateY(-5px);
        }
        .service-tile:hover .service-tile-arrow {
          transform: translateX(3px) scale(1.08);
        }
        .service-tile-arrow {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .service-tile-num {
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .service-tile:hover .service-tile-num {
          transform: translateX(2px);
        }

        .insta-tile {
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease;
        }
        .insta-tile:hover {
          transform: scale(1.04) translateY(-4px);
          box-shadow: 0 18px 36px -10px rgba(0,0,0,0.35);
        }
        .insta-tile-media {
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .insta-tile:hover .insta-tile-media {
          transform: scale(1.1);
        }

        .follow-btn {
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease;
        }
        .follow-btn:hover {
          transform: scale(1.07) rotate(-1deg);
          box-shadow: 0 14px 30px -8px rgba(217, 70, 160, 0.5);
        }

        .map-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .map-card:hover {
          box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
        }

        .directions-btn {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s ease;
        }
        .directions-btn:hover {
          transform: scale(1.06);
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal, .hero-content > *, .hero-kenburns, .hero-dot, .hero-dot-active,
          .cta-btn, .cta-btn-outline, .stat-card, .service-card, .service-card-img,
          .service-card-arrow, .feature-card, .feature-icon, .area-card, .area-pin,
          .service-tile, .service-tile-arrow, .service-tile-num, .insta-tile,
          .insta-tile-media, .follow-btn, .map-card, .directions-btn, .hero-fade-img {
            animation: none !important;
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      <section className="relative w-full min-h-[85vh] md:h-[85vh] overflow-hidden">
        {/* Background Slider */}
        {heroImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="Epoxy Flooring"
            className={`
            hero-fade-img
            absolute inset-0 w-full h-full object-cover
            ${index === current ? "opacity-100 hero-kenburns" : "opacity-0"}
          `}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div
          className={`
        relative z-10
        max-w-7xl mx-auto
        h-full
        flex items-center
        px-5 sm:px-8 md:px-12
        ${loaded ? "hero-loaded" : ""}
      `}
        >
          <div className="max-w-3xl text-white hero-content">
            <p
              className="
            uppercase
            tracking-[4px]
            text-sm
            text-[#CC1F1F]
            font-semibold
            mb-5
          "
            >
              Premium Epoxy Flooring Solutions
            </p>

            <h1
              className="
           text-3xl
sm:text-4xl
md:text-6xl
            font-bold
            leading-tight
            mb-6
          "
            >
              Transform Your Floors
              <br />
              With Durable Epoxy Coatings
            </h1>

            <p
              className="
           text-sm
sm:text-base
md:text-lg
            text-white/80
            max-w-xl
            mb-8
          "
            >
              High-performance epoxy flooring systems designed for homes,
              warehouses, workshops and commercial spaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {" "}
              <a
                href="#contact"
                className="
                cta-btn
                bg-[#CC1F1F]
                hover:bg-[#b31a1a]
                text-white
                px-7 py-3
                rounded-md
                font-medium
                no-underline
              "
              >
                Get Free Quote →
              </a>
              <a
                href="#services"
                className="
                cta-btn-outline
                border
                border-white/60
                hover:bg-white
                hover:text-black
                text-white
                px-7 py-3
                rounded-md
                font-medium
                no-underline
              "
              >
                View Services
              </a>
            </div>
          </div>
        </div>

        {/* Slider Dots */}
        <div
          className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        flex
        gap-3
        z-20
      "
        >
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`
              hero-dot
              w-3 h-3 rounded-full
              ${current === index ? "bg-[#CC1F1F] hero-dot-active" : "bg-white/50"}
            `}
            />
          ))}
        </div>
      </section>

      {/* Sydney Epoxy Floors Sydney's Top Rated Epoxy Flooring Contractors */}

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <Reveal>
              <span className="inline-block bg-red-100 text-[#CC1F1F] text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Sydney's Top Rated Epoxy Flooring Contractors
              </span>

              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Premium Epoxy Flooring
                <span className="text-[#CC1F1F]"> Solutions built To Last</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our qualified employees, experienced estimators, and management
                team are committed to ensuring client satisfaction from the
                moment we receive your request until the project is completed.
                We work hard to maintain our market-leading reputation and
                provide high-quality epoxy floor coatings. Our ongoing
                investment in superior and technologically advanced equipment,
                as well as ongoing team member training, ensures that we can
                provide the most effective, environmentally friendly, and
                cost-effective epoxy flooring options.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="cta-btn bg-[#CC1F1F] hover:bg-[#b31a1a] text-white px-6 py-2 rounded-lg font-semibold"
                >
                  Click here for more inquiry!
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-10 mt-12">
                <div className="stat-card">
                  <CountUp
                    to={15}
                    suffix="+"
                    className="text-3xl font-bold text-[#CC1F1F]"
                  />
                  <p className="text-gray-600">Years Experience</p>
                </div>

                <div className="stat-card">
                  <CountUp
                    to={500}
                    suffix="+"
                    className="text-3xl font-bold text-[#CC1F1F]"
                  />
                  <p className="text-gray-600">Projects Completed</p>
                </div>

                <div className="stat-card">
                  <CountUp
                    to={100}
                    suffix="%"
                    className="text-3xl font-bold text-[#CC1F1F]"
                  />
                  <p className="text-gray-600">Customer Satisfaction</p>
                </div>
              </div>
            </Reveal>

            {/* RIGHT IMAGE SLIDER */}
            <Reveal delay={150} className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                {heroImages.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt=""
                    className={`hero-fade-img 
w-full 
h-[300px]
sm:h-[400px]
md:h-[500px]
object-cover ${current === index ? "block" : "hidden"}`}
                  />
                ))}
              </div>

              {/* Floating Card */}
              <div
                className="absolute
bottom-3
left-3
sm:-bottom-6
sm:-left-6
bg-white
 shadow-xl rounded-2xl px-6 py-4"
                style={{ animation: "floatSlow 4s ease-in-out infinite" }}
              >
                <h4 className="font-bold text-gray-900">
                  Industrial • Commercial • Residential
                </h4>
                <p className="text-sm text-gray-500">
                  High-performance epoxy flooring systems
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* services */}
      <div>
        <Reveal
          as="h2"
          className="text-2xl md:text-3xl font-bold text-center mb-3 mt-8"
        >
          Our Epoxy Flooring <span className="text-[#CC1F1F]">Services</span>
        </Reveal>

        <div
          className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-5
px-5
md:px-12
py-6
"
        >
          {" "}
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 70}
              as="a"
              {...{ href: service.link }}
              className="service-card group relative overflow-hidden rounded-2xl shadow-lg block"
            >
              <img
                src={service.image}
                alt={service.title}
                className="service-card-img w-full h-[240px]
sm:h-[280px] object-cover"
              />

              {/* Overlay */}
              <div className="service-card-overlay absolute inset-0 bg-black/35 group-hover:bg-black/30" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <h3 className="text-white text-2xl font-bold text-center leading-tight">
                  {service.title}
                </h3>
              </div>

              {/* Hover Arrow */}
              <div className="service-card-arrow absolute bottom-4 right-4 w-10 h-10 bg-[#CC1F1F] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100">
                →
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/*why choose us*/}
      <section className="py-10 sm:py-12 bg-[#F8EEDB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Heading */}
          <Reveal className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block bg-red-100 text-[#CC1F1F] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Why Choose Sydney Epoxy Floors
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Sydney's Trusted Authority in
              <span className="text-[#CC1F1F]">
                {" "}
                High-Performance Epoxy Flooring
              </span>
            </h2>
          </Reveal>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Reveal
              delay={0}
              className="feature-card bg-white rounded-2xl p-6
sm:p-8 shadow-sm hover:shadow-xl"
            >
              <Award className="feature-icon w-12 h-12 text-[#CC1F1F] mb-5" />
              <h3 className="text-xl font-bold mb-3">
                21+ Years of Experience
              </h3>
              <p className="text-gray-600">
                Over two decades delivering premium epoxy flooring solutions
                across Sydney using UV-stable systems built for Australian
                conditions.
              </p>
            </Reveal>

            <Reveal
              delay={70}
              className="feature-card bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl"
            >
              <Wrench className="feature-icon w-12 h-12 text-[#CC1F1F] mb-5" />
              <h3 className="text-xl font-bold mb-3">
                Industrial Diamond Grinding
              </h3>
              <p className="text-gray-600">
                Every floor receives professional diamond grinding preparation
                to create a permanent bond and prevent peeling or delamination.
              </p>
            </Reveal>

            <Reveal
              delay={140}
              className="feature-card bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl"
            >
              <ShieldCheck className="feature-icon w-12 h-12 text-[#CC1F1F] mb-5" />
              <h3 className="text-xl font-bold mb-3">Safety & Compliance</h3>
              <p className="text-gray-600">
                HACCP-compliant flooring systems with up to R13 slip resistance
                for commercial kitchens, healthcare and industrial facilities.
              </p>
            </Reveal>

            <Reveal
              delay={0}
              className="feature-card bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl"
            >
              <Leaf className="feature-icon w-12 h-12 text-[#CC1F1F] mb-5" />
              <h3 className="text-xl font-bold mb-3">Eco-Friendly Systems</h3>
              <p className="text-gray-600">
                Low-VOC, non-toxic epoxy systems that are safer for families,
                pets, employees and customers.
              </p>
            </Reveal>

            <Reveal
              delay={70}
              className="feature-card bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl"
            >
              <Star className="feature-icon w-12 h-12 text-[#CC1F1F] mb-5" />
              <h3 className="text-xl font-bold mb-3">330+ Five-Star Reviews</h3>
              <p className="text-gray-600">
                One of Sydney's highest-rated epoxy flooring specialists with a
                4.9-star average rating and a commitment to customer
                satisfaction.
              </p>
            </Reveal>

            <Reveal
              delay={140}
              className="feature-card bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl"
            >
              <MapPin className="feature-icon w-12 h-12 text-[#CC1F1F] mb-5" />
              <h3 className="text-xl font-bold mb-3">Visit Our Showroom</h3>
              <p className="text-gray-600">
                Explore our Silverwater showroom and compare flake, metallic and
                solid-colour epoxy finishes before making your decision.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services in sydney */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Heading */}
          <Reveal className="text-center max-w-3xl mx-auto mb-8">
            <span className="inline-block bg-red-100 text-[#CC1F1F] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Service Areas in Sydney
            </span>

            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-12">
              Epoxy Flooring Contractors
              <span className="text-[#CC1F1F]">
                {" "}
                Servicing All Areas of Sydney
              </span>
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Showroom Card */}
            <Reveal className="map-card bg-gray-50 rounded-3xl overflow-hidden shadow-lg">
              <iframe
                title="Sydney Epoxy Floors Showroom"
                src="https://maps.google.com/maps?q=6%20Giffard%20Street%20Silverwater%20NSW%202128&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[350px] border-0"
                loading="lazy"
                allowFullScreen
              />

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Visit Our Showroom</h3>

                <p className="text-gray-600 mb-4">
                  See and walk on our epoxy flooring finishes before making a
                  decision.
                </p>

                <div className="flex items-center justify-between mt-6 gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#CC1F1F] mt-1 shrink-0" />

                    <div>
                      <p className="font-semibold text-gray-900">
                        6 Giffard Street
                      </p>
                      <p className="text-gray-600">Silverwater NSW 2128</p>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=6+Giffard+Street+Silverwater+NSW+2128"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="directions-btn shrink-0 bg-[#CC1F1F] text-white px-4 py-2 rounded-lg hover:bg-[#b31a1a]"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Service Regions */}
            <Reveal delay={150}>
              <h3 className="text-2xl font-bold mb-8">Areas We Service</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
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
                ].map((area, i) => (
                  <div
                    key={area}
                    className="area-card bg-white border border-gray-200 rounded-xl p-4 hover:border-[#CC1F1F] hover:shadow-lg"
                    style={{
                      opacity: 0,
                      animation: `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards`,
                      animationDelay: `${i * 0.05}s`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="area-pin w-5 h-5 text-[#CC1F1F]" />
                      <span className="font-medium text-gray-800">{area}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our epoxy flooring services include */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Heading */}
          <Reveal className="text-center max-w-4xl mx-auto mb-8">
            <span className="inline-block bg-red-100 text-[#CC1F1F] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              What We Do
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Epoxy Flooring
              <span className="text-[#CC1F1F]"> Services Include</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Sydney Epoxy Floors specialises in concrete floor preparation,
              industrial-grade epoxy coatings, and durable flooring systems
              designed to withstand heavy traffic while remaining easy to clean
              and maintain.
            </p>
          </Reveal>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
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
            ].map((service, index) => (
              <Reveal
                key={service}
                delay={(index % 6) * 60}
                as="div"
                className="service-tile group bg-white rounded-xl p-4 border border-gray-200 hover:border-[#CC1F1F] hover:shadow-lg"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="service-tile-num text-2xl font-bold text-gray-200 group-hover:text-[#CC1F1F]/20">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  <span className="service-tile-arrow w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-[#CC1F1F] font-bold text-sm">
                    →
                  </span>
                </div>

                <h3 className="text-base font-semibold text-gray-900 leading-snug">
                  {service}
                </h3>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 rounded-2xl bg-gradient-to-r from-[#CC1F1F] to-[#b31a1a] p-6 text-center text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Need Help Choosing The Right Flooring System?
            </h3>

            <p className="max-w-xl mx-auto text-sm text-white/90 mb-5">
              Speak with our epoxy flooring specialists for expert advice,
              product recommendations and a free site assessment.
            </p>

            <button className="cta-btn bg-white text-[#CC1F1F] px-6 py-3 rounded-lg text-sm font-semibold hover:scale-105">
              Contact Us
            </button>
          </Reveal>
        </div>
      </section>

      {/* Instagram Section */}

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <Reveal className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Check out our Instagram Page!
            </h2>

            <p className="text-lg text-gray-600 mb-5">
              @sydneyepoxyfloors.com.au
            </p>

            <a
              href="https://www.instagram.com/sydneyepoxyfloors.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="
          follow-btn
          inline-block
          bg-gradient-to-r
          from-purple-600
          via-pink-500
          to-orange-400
          text-white
          px-8
          py-3
          rounded-xl
          font-semibold
          shadow-md
        "
            >
              Follow
            </a>
          </Reveal>

          {/* Instagram Posts Grid */}

          <div
            className="
    max-w-4xl
    mx-auto
    grid
    grid-cols-2
sm:grid-cols-3
lg:grid-cols-4
    gap-3
  "
          >
            {instagramPosts.map((post, index) => (
              <Reveal
                key={index}
                as="a"
                delay={(index % 4) * 80}
                {...{
                  href: "https://www.instagram.com/sydneyepoxyfloors.com.au/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                }}
                className="
        insta-tile
        group
        overflow-hidden
        rounded-xl
        aspect-square
        bg-gray-200
        block
      "
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
    </>
  );
};

export default Home;
