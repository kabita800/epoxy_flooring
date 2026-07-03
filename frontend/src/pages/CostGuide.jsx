import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  Phone,
  MapPin,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Building2,
  Clock,
  Truck,
  Wrench,
  Layers,
  RefreshCw,
} from "lucide-react";

/* ----------------------------------------------------------------
   DATA
------------------------------------------------------------------- */
const IMAGES = {
  hero: "/src/assets/industrial.jpg",
  grind: "/src/assets/DiamondGrindinginWarehouse.png",
  flake: "/src/assets/flake.jpg",
  metallic: "/src/assets/metallic.jpg",
  warehouse: "/src/assets/floor.jpg",
  showroom: "/src/assets/SEF2CColour2024.png",
};

const RATE_CARD = [
  {
    name: "Standard industrial seal",
    price: "$28–60",
    unit: "/sqm",
    life: "5–7 yrs",
    note: "Diamond grind, basic prep, 2 coats 100% solids epoxy resin.",
  },
  {
    name: "SEF premium flake system",
    price: "$80–135",
    unit: "/sqm",
    life: "10+ yrs commercial",
    note: "Full broadcast flake system with UV-stable topcoat.",
  },
  {
    name: "Metallic / marble effect",
    price: "$150–250",
    unit: "/sqm",
    life: "10+ yrs structural",
    note: "Recoating the clear coat maintains aesthetic retention.",
  },
  {
    name: "Commercial kitchen system",
    price: "$80–120",
    unit: "/sqm",
    life: "5–7 yrs",
    note: "Chemical and thermal-resistant, slip-rated finish.",
  },
  {
    name: "Standard epoxy coving",
    price: "$80–120",
    unit: "/linear m",
    life: "Min. $1,500",
    note: "Applied at wall-floor junctions for hygienic sealing.",
  },
  {
    name: "6mm polyurethane cement",
    price: "$180–250",
    unit: "/sqm",
    life: "10+ yrs",
    note: "Excludes coving, falls, ramping, drainage setting.",
  },
];

const FACTORS = [
  {
    icon: Layers,
    title: "Size of the job",
    body: "Larger floors mean a lower rate per sqm — mobilisation cost is fixed, and big-format planetary grinders cover ground faster.",
  },
  {
    icon: Truck,
    title: "Site access",
    body: "Stairs, lifts and tight corridors force smaller handheld grinders, which take 2–3× longer than truck-mounted gear.",
  },
  {
    icon: Clock,
    title: "Working hours",
    body: "Standard rates apply Mon–Fri, 7am–3.30pm. After-hours work to protect your trading hours attracts penalty rates.",
  },
  {
    icon: Building2,
    title: "Parking & logistics",
    body: "CBD sites and strict strata buildings without onsite parking add cost for paid parking or ferrying equipment.",
  },
  {
    icon: Wrench,
    title: "Condition of the slab",
    body: "Cracks, divots and ramping need repair mortar and extra grinding before a single coat goes down.",
  },
  {
    icon: RefreshCw,
    title: "Staged works",
    body: "Splitting a warehouse into stages to keep you trading multiplies travel, setup and site-clean per visit.",
  },
];

const RED_FLAGS = [
  {
    title: "The prep shortcut",
    cheap: "Acid etching or light hand grinders",
    sef: "Industrial diamond grinding to spec CSP",
    result: "Epoxy lifts under hot tyres.",
  },
  {
    title: "The material shortcut",
    cheap: "Water-based, high-solvent epoxy",
    sef: "100% solids resin",
    result: "Thin coat wears through within months.",
  },
  {
    title: "The UV shortcut",
    cheap: "No polyaspartic topcoat",
    sef: "UV-stable polyaspartic topcoat",
    result: "Floor yellows within 12 months.",
  },
];

const PROMISE = [
  {
    title: "Local & permanent",
    body: "Two fully stocked, brick-and-mortar showrooms. Not a mobile number that can disappear.",
  },
  {
    title: "No hot-tyre exclusion",
    body: "Most budget warranties exclude hot tyre pick-up in the fine print. Ours doesn't.",
  },
  {
    title: "Proven longevity",
    body: "One of the few NSW companies that has watched its own floors survive 20 years of real use.",
  },
];

/* ----------------------------------------------------------------
   Scroll reveal
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

const Eyebrow = ({ children, light = false }) => (
  <span
    className={`cg-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[2px] font-semibold mb-4 ${
      light ? "text-[var(--clay)]" : "text-[var(--brick)]"
    }`}
  >
    <span
      className={`w-1 h-1 rounded-full ${light ? "bg-[var(--clay)]" : "bg-[var(--brick)]"}`}
    />
    {children}
  </span>
);

export default function CostGuide() {
  const [activeFactor, setActiveFactor] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFactor((prev) => (prev === FACTORS.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentFactor = FACTORS[activeFactor];
  const CurrentIcon = currentFactor.icon;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

        :root {
          --ink: #1A1A18;
          --slate: #6B6862;
          --slate-soft: #9C9890;
          --cream: #FCFBF9;
          --surface: #F6F3ED;
          --surface-deep: #EFEAE0;
          --line: rgba(26,26,24,0.08);
          --brick: #A11717;
          --brick-deep: #A11717;
          --clay: #A11717;
          --good: #2F7A4F;
        }

        .cg-root { font-family: 'Inter', sans-serif; color: var(--ink); background: var(--cream); }
        .cg-serif { font-family: 'Fraunces', serif; font-optical-sizing: auto; letter-spacing: -0.015em; }
        .cg-mono { font-family: 'JetBrains Mono', monospace; letter-spacing: 0.04em; }

        @keyframes fadeUp { 0% { opacity: 0; transform: translateY(24px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes glowPulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.8; } }
        @keyframes factorSlideIn { 0% { opacity: 0; transform: translateX(12px); } 100% { opacity: 1; transform: translateX(0); } }

        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }
        .reveal-visible { opacity: 1; transform: translateY(0); }

        .glow { animation: glowPulse 6s ease-in-out infinite; }

        .btn-primary {
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s cubic-bezier(0.16,1,0.3,1);
          box-shadow: 0 1px 2px rgba(161,23,23,0.15), 0 8px 20px -8px rgba(161,23,23,0.35);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 2px 4px rgba(161,23,23,0.2), 0 16px 32px -10px rgba(161,23,23,0.45); }
        .btn-primary:active { transform: translateY(0); }

        .btn-ghost {
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease, background-color 0.3s ease;
        }
        .btn-ghost:hover { transform: translateY(-2px); border-color: var(--ink); }

        .lift-card {
          transition: transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1);
          box-shadow: 0 1px 2px rgba(26,26,24,0.04), 0 1px 1px rgba(26,26,24,0.03);
        }
        .lift-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 1px 2px rgba(26,26,24,0.04), 0 20px 40px -16px rgba(26,26,24,0.18);
        }

        .price-row { transition: background-color 0.3s ease; }
        .price-row:hover { background-color: var(--surface); }

        .factor-slide-enter { animation: factorSlideIn 0.45s cubic-bezier(0.16,1,0.3,1); }

        .img-zoom img { transition: transform 0.7s cubic-bezier(0.16,1,0.3,1); }
        .img-zoom:hover img { transform: scale(1.06); }

        .num-badge {
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), background-color 0.3s ease;
        }
        .promise-item:hover .num-badge { background: var(--brick); color: var(--cream); transform: scale(1.08); }

        @media (prefers-reduced-motion: reduce) {
          .reveal, .glow, .btn-primary, .btn-ghost, .lift-card, .price-row, .img-zoom img, .num-badge {
            animation: none !important;
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      <div className="cg-root">
        {/* ---------- HERO ---------- */}
        <header className="relative max-w-6xl mx-auto px-6 lg:px-10 pt-12 pb-12 md:pt-12 md:pb-12">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <Reveal className="md:col-span-7">
              <Eyebrow>2026 Sydney rate guide</Eyebrow>
              <h1 className="cg-serif text-[2.6rem] sm:text-[3.1rem] md:text-[3.6rem] font-medium leading-[1.05] text-[var(--ink)]">
                What should you{" "}
                <span className="italic text-[var(--brick)]">actually pay</span>{" "}
                for epoxy flooring?
              </h1>
              <p className="text-[var(--slate)] text-base md:text-lg mt-6 max-w-xl leading-relaxed">
                Quotes across Sydney vary by hundreds of dollars per sqm. This
                guide breaks down 2026 market rates, what really drives your
                price, and the 21-year difference between a warranty you can
                trust and one that's marketing math.
              </p>
              <div className="flex flex-wrap items-center gap-5 mt-9">
                <Link
                  to="/contact"
                  className="btn-primary bg-[var(--brick)] hover:bg-[var(--brick-deep)] text-white px-7 py-3.5 rounded-full font-semibold no-underline inline-flex items-center gap-2 text-[15px]"
                >
                  Contact us <ArrowRight size={16} />
                </Link>
                <span className="cg-mono text-[11px] text-[var(--slate-soft)] uppercase tracking-wide">
                  21+ years, same company
                </span>
              </div>
            </Reveal>

            <Reveal delay={150} className="md:col-span-5 relative">
              <div className="relative">
                <div
                  className="glow absolute -inset-6 rounded-full opacity-60 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(161,23,23,0.18), transparent 70%)",
                  }}
                />
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_30px_60px_-20px_rgba(26,26,24,0.25)]">
                  <img
                    src={IMAGES.hero}
                    alt="Glossy epoxy resin floor finish"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-6 py-5 hidden sm:block shadow-[0_20px_40px_-12px_rgba(26,26,24,0.2)] border border-[var(--line)]">
                  <p className="cg-serif text-3xl font-medium leading-none text-[var(--brick)]">
                    21+
                  </p>
                  <p className="cg-mono text-[10px] uppercase tracking-wide text-[var(--slate-soft)] mt-1.5">
                    years, one company
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </header>

        {/* ---------- RATE CARD ---------- */}
        <section className="py-16 md:py-16 bg-[var(--cream)]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <Reveal className="flex items-end justify-between flex-wrap gap-4 mb-10">
              <div>
                <Eyebrow>2026 rate card</Eyebrow>
                <h2 className="cg-serif text-2xl md:text-[2.1rem] font-medium text-[var(--ink)]">
                  Estimated Sydney pricing
                </h2>
              </div>
              <span className="cg-mono text-[11px] text-[var(--slate-soft)] max-w-xs text-right hidden md:block uppercase tracking-wide">
                Final price depends on slab CSP
              </span>
            </Reveal>

            <Reveal className="rounded-2xl border border-[var(--line)] overflow-hidden bg-white shadow-[0_1px_2px_rgba(26,26,24,0.04)]">
              {RATE_CARD.map((item, i) => (
                <div
                  key={item.name}
                  className={`price-row grid grid-cols-12 gap-4 px-6 md:px-8 py-6 items-center ${
                    i !== RATE_CARD.length - 1 ?
                      "border-b border-[var(--line)]"
                    : ""
                  }`}
                >
                  <div className="col-span-12 md:col-span-5">
                    <h3 className="font-semibold text-[var(--ink)] text-[15px]">
                      {item.name}
                    </h3>
                    <p className="text-[var(--slate)] text-[13px] mt-1 leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                  <div className="col-span-7 md:col-span-3">
                    <span className="cg-serif text-xl font-medium text-[var(--ink)]">
                      {item.price}
                    </span>
                    <span className="text-[13px] text-[var(--slate-soft)] ml-1">
                      {item.unit}
                    </span>
                  </div>
                  <div className="col-span-5 md:col-span-4 md:text-right">
                    <span className="cg-mono text-[11px] uppercase tracking-wide text-[var(--brick)] bg-[var(--brick)]/8 px-2.5 py-1 rounded-full">
                      {item.life}
                    </span>
                  </div>
                </div>
              ))}
            </Reveal>
            <Reveal className="text-[var(--slate)] text-[13px] mt-6 max-w-2xl leading-relaxed">
              Additional coats, joint repairs and cutting off dynabolts incur
              extra cost. If your slab has old oil staining, rising damp or
              failed prior coatings, additional prep is required to meet our
              quality standard.
            </Reveal>
          </div>
        </section>

        {/* ---------- WHAT AFFECTS YOUR QUOTE ---------- */}
        <section className="py-16 md:py-24 bg-[var(--surface)]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <Reveal className="max-w-2xl mb-12">
              <Eyebrow>Behind the number</Eyebrow>
              <h2 className="cg-serif text-2xl md:text-[2.1rem] font-medium text-[var(--ink)] leading-[1.2]">
                About half of your quote is logistics and labour, not material.
              </h2>
            </Reveal>

            {/* Mobile Slider */}
<div className="block md:hidden max-w-md mx-auto">
  <Reveal key={currentFactor.title}>
    <div className="factor-slide-enter lift-card bg-white rounded-2xl p-7">
      <div className="w-11 h-11 rounded-xl bg-[var(--brick)]/8 flex items-center justify-center mb-5">
        <CurrentIcon
          size={19}
          strokeWidth={1.75}
          className="text-[var(--brick)]"
        />
      </div>

      <h3 className="font-semibold text-[15px] text-[var(--ink)] mb-2">
        {currentFactor.title}
      </h3>

      <p className="text-[var(--slate)] text-[13.5px] leading-relaxed">
        {currentFactor.body}
      </p>
    </div>
  </Reveal>

  <div className="mt-6 flex items-center justify-center gap-2">
    {FACTORS.map((_, index) => (
      <button
        key={index}
        type="button"
        aria-label={`Show factor ${index + 1}`}
        onClick={() => setActiveFactor(index)}
        className={`h-2.5 rounded-full transition-all duration-300 ${
          activeFactor === index
            ? "w-6 bg-[var(--brick)]"
            : "w-2.5 bg-[var(--ink)]/20"
        }`}
      />
    ))}
  </div>
</div>

{/* Desktop Grid */}
<div className="hidden md:grid md:grid-cols-4 gap-6">
  {FACTORS.map((factor, i) => {
    const Icon = factor.icon;

    return (
      <Reveal key={factor.title} delay={i * 80} y={18}>
        <div className="lift-card bg-white rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="w-11 h-11 rounded-xl bg-[var(--brick)]/8 flex items-center justify-center mb-5">
            <Icon
              size={19}
              strokeWidth={1.75}
              className="text-[var(--brick)]"
            />
          </div>

          <h3 className="font-semibold text-[15px] text-[var(--ink)] mb-2">
            {factor.title}
          </h3>

          <p className="text-[13.5px] text-[var(--slate)] leading-relaxed">
            {factor.body}
          </p>
        </div>
      </Reveal>
    );
  })}
</div>
          </div>
        </section>

        {/* ---------- FINISHES GALLERY ---------- */}
        <section className="py-16 md:py-24 bg-[var(--cream)]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <Reveal className="max-w-2xl mb-12">
              <Eyebrow>Finishes</Eyebrow>
              <h2 className="cg-serif text-2xl md:text-[2.1rem] font-medium text-[var(--ink)] leading-[1.2]">
                From a sealed warehouse floor to a full metallic showpiece.
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  img: IMAGES.grind,
                  name: "Diamond grind & prep",
                  desc: "Industrial CSP-rated surface preparation — the foundation every coat depends on.",
                },
                {
                  img: IMAGES.flake,
                  name: "Premium flake system",
                  desc: "Broadcast flake with UV-stable topcoat. 10+ years commercial, 15+ residential.",
                },
                {
                  img: IMAGES.metallic,
                  name: "Metallic & marble effect",
                  desc: "Pigment-driven, one-of-a-kind floors for showrooms and feature spaces.",
                },
              ].map((s, i) => (
                <Reveal key={s.name} delay={i * 80}>
                  <div className="img-zoom aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_1px_2px_rgba(26,26,24,0.06),0_12px_28px_-12px_rgba(26,26,24,0.18)]">
                    <img
                      src={s.img}
                      alt={s.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-[15px] text-[var(--ink)] mt-5">
                    {s.name}
                  </h3>
                  <p className="text-[var(--slate)] text-[13.5px] mt-1.5 leading-relaxed">
                    {s.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- RED FLAG COMPARISON ---------- */}
        <section className="py-16 md:py-24 bg-[var(--surface)]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <Reveal className="max-w-2xl mb-12">
              <Eyebrow>Why cheap quotes fail</Eyebrow>
              <h2 className="cg-serif text-2xl md:text-[2.1rem] font-medium text-[var(--ink)] leading-[1.2]">
                A quote 30% under market is usually cutting one of three
                corners.
              </h2>
            </Reveal>

            <Reveal className="grid gap-4">
              {RED_FLAGS.map((r) => (
                <div
                  key={r.title}
                  className="lift-card bg-white rounded-2xl p-6 md:p-7 grid md:grid-cols-12 gap-4 items-center"
                >
                  <div className="md:col-span-3">
                    <h3 className="font-semibold text-[15px] text-[var(--ink)]">
                      {r.title}
                    </h3>
                  </div>
                  <div className="md:col-span-4 flex items-start gap-2">
                    <XCircle
                      size={15}
                      className="text-[var(--brick)] mt-0.5 shrink-0"
                    />
                    <span className="text-[13.5px] text-[var(--ink)]/70">
                      {r.cheap}
                    </span>
                  </div>
                  <div className="md:col-span-3 flex items-start gap-2">
                    <CheckCircle2
                      size={15}
                      className="text-[var(--good)] mt-0.5 shrink-0"
                    />
                    <span className="text-[13.5px] text-[var(--ink)]/70">
                      {r.sef}
                    </span>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-[12.5px] text-[var(--slate-soft)] italic">
                      {r.result}
                    </span>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ---------- SHOWROOM ---------- */}
        <section className="py-16 md:py-24 bg-[var(--cream)]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <Reveal className="md:col-span-5 order-2 md:order-1">
                <Eyebrow>See it before you sign</Eyebrow>
                <h2 className="cg-serif text-2xl md:text-[2.1rem] font-medium text-[var(--ink)] leading-[1.2]">
                  Most contractors show you a plastic sample. We'll show you the
                  floor.
                </h2>
                <p className="text-[var(--slate)] text-base mt-5 leading-relaxed">
                  Walk full-scale installations of our premium flake and
                  metallic systems — feel the thickness, see the texture, meet
                  the team that's been doing this since the early 2000s.
                </p>
                <div className="mt-7 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={16}
                      className="text-[var(--brick)] mt-0.5 shrink-0"
                    />
                    <span className="text-[14px] text-[var(--ink)]">
                      Silverwater — 6 Giffard Street, Silverwater NSW
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={16}
                      className="text-[var(--brick)] mt-0.5 shrink-0"
                    />
                    <span className="text-[14px] text-[var(--ink)]">
                      Rydalmere — Unit C/283 Victoria Road, Rydalmere NSW
                    </span>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={150} className="md:col-span-7 order-1 md:order-2">
                <div className="aspect-[16/10] overflow-hidden rounded-3xl shadow-[0_1px_2px_rgba(26,26,24,0.06),0_24px_48px_-16px_rgba(26,26,24,0.2)]">
                  <img
                    src={IMAGES.showroom}
                    alt="Sydney Epoxy Floors showroom"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- WARRANTY PROMISE ---------- */}
        <section className="py-16 md:py-24 bg-[var(--surface)]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <Reveal className="max-w-2xl mb-12">
              <Eyebrow>The SEF warranty promise</Eyebrow>
              <h2 className="cg-serif text-2xl md:text-[2.1rem] font-medium text-[var(--ink)] leading-[1.2]">
                A warranty is only as good as the company behind it.
              </h2>
            </Reveal>

            <div className="grid sm:grid-cols-3 gap-8">
              {PROMISE.map((p, i) => (
                <Reveal key={p.title} delay={i * 70} className="promise-item">
                  <div className="num-badge w-9 h-9 rounded-full bg-white border border-[var(--line)] flex items-center justify-center mb-4">
                    <span className="cg-serif text-sm font-medium">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[15px] text-[var(--ink)] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-[var(--slate)] text-[13.5px] leading-relaxed">
                    {p.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- FINAL CTA ---------- */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, #1A1A18, #2A2723)" }}
          />
          <img
            src={IMAGES.warehouse}
            alt="Large industrial epoxy floor"
            className="absolute inset-0 w-full h-full object-cover opacity-[0.08]"
          />
          <div
            className="glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(161,23,23,0.5), transparent 70%)",
            }}
          />
          <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-24 md:py-28 text-center">
            <Reveal>
              <h2 className="cg-serif text-3xl md:text-[2.8rem] font-medium text-white max-w-2xl mx-auto leading-[1.1]">
                Don't gamble on a budget estimate.
              </h2>
              <p className="text-white/55 text-base md:text-lg mt-5 max-w-xl mx-auto leading-relaxed">
                Get a fixed price, backed by 21 years of experience and a
                warranty that doesn't need an exit clause.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-5 mt-10">
                <Link
                  to="/contact"
                  className="btn-primary bg-[var(--brick)] hover:bg-[var(--brick-deep)] text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 text-[15px] no-underline"
                >
                  Get your free quote <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:1300037699"
                  className="btn-ghost border border-white/25 hover:bg-white hover:text-[var(--ink)] text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 no-underline text-[15px]"
                >
                  <Phone size={16} /> 1300 037 699
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
