import React from "react";
import {
  Phone,
  MapPin,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  ArrowRight,
  Building2,
  Clock,
  Truck,
  Wrench,
  Layers,
  RefreshCw,
} from "lucide-react";

/**
 * Sydney Epoxy Floors — landing page
 * Palette: white background, black text, red accent (#CC1F1F)
 * Display face: tight industrial grotesk stack; Body: system sans; Spec data: monospace
 */

const RED = "#CC1F1F";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1632863677807-846708d3f9c4?q=80&w=1800&auto=format&fit=crop",
  grind: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=1200&auto=format&fit=crop",
  flake: "https://images.unsplash.com/photo-1597047084897-51e81819a499?q=80&w=1200&auto=format&fit=crop",
  metallic: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=1200&auto=format&fit=crop",
  warehouse: "https://images.unsplash.com/photo-1565214975484-3cfa9e56f914?q=80&w=1800&auto=format&fit=crop",
  showroom: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
};

const RATE_CARD = [
  {
    name: "Standard industrial seal",
    price: "$28 – $60",
    unit: "/ sqm",
    life: "5–7 yrs",
    note: "Diamond grind, basic prep, 2 coats 100% solids epoxy resin.",
  },
  {
    name: "SEF premium flake system",
    price: "$80 – $135",
    unit: "/ sqm",
    life: "10+ yrs commercial · 15+ yrs residential",
    note: "Full broadcast flake system with UV-stable topcoat.",
  },
  {
    name: "Metallic / marble effect",
    price: "$150 – $250",
    unit: "/ sqm",
    life: "10+ yrs structural · 5–7 yrs aesthetic",
    note: "Recoating the clear coat maintains aesthetic retention.",
  },
  {
    name: "Commercial kitchen system",
    price: "$80 – $120",
    unit: "/ sqm",
    life: "5–7 yrs",
    note: "Chemical and thermal-resistant, slip-rated finish.",
  },
  {
    name: "Standard epoxy coving",
    price: "$80 – $120",
    unit: "/ linear m",
    life: "—",
    note: "Minimum charge of $1,500 applies.",
  },
  {
    name: "6mm polyurethane cement",
    price: "$180 – $250",
    unit: "/ sqm",
    life: "10+ yrs",
    note: "Excludes coving, falls, ramping, drainage setting.",
  },
];

const FACTORS = [
  {
    icon: Layers,
    title: "Size of the job",
    body: "Larger floors mean a lower rate per sqm — mobilisation cost is fixed, and big-format planetary grinders cover ground faster than residential push-grinders.",
  },
  {
    icon: Truck,
    title: "Site access",
    body: "Stairs, lifts and tight corridors force smaller handheld grinders, which take 2–3× longer to prep concrete than our truck-mounted gear.",
  },
  {
    icon: Clock,
    title: "Working hours",
    body: "Standard rates apply Mon–Fri, 7am–3.30pm. After-hours and weekend work to protect your trading hours attracts penalty labour rates.",
  },
  {
    icon: Building2,
    title: "Parking & logistics",
    body: "CBD sites and strict strata buildings without onsite parking add cost for paid parking or ferrying equipment from a distance.",
  },
  {
    icon: Wrench,
    title: "Condition of the slab",
    body: "Cracks, divots and ramping need repair mortar and extra grinding before a single coat goes down — invisible work that protects the finish.",
  },
  {
    icon: RefreshCw,
    title: "Staged works",
    body: "Splitting a warehouse into stages to keep you trading multiplies travel, setup and site-clean for every visit.",
  },
];

const RED_FLAGS = [
  {
    title: "The prep shortcut",
    cheap: "Acid etching or light hand grinders",
    sef: "Industrial diamond grinding to spec CSP",
    result: "Epoxy sits on the surface and lifts under hot tyres.",
  },
  {
    title: "The material shortcut",
    cheap: "Water-based, high-solvent epoxy",
    sef: "100% solids resin — what we pour is what stays",
    result: "Thin coat wears through within months.",
  },
  {
    title: "The UV shortcut",
    cheap: "No polyaspartic topcoat",
    sef: "UV-stable 100% solids polyaspartic topcoat",
    result: "Floor yellows and turns rough within 12 months.",
  },
];

function SectionLabel({ children }) {
  return (
    <p
      className="font-mono text-xs tracking-[0.25em] uppercase mb-3"
      style={{ color: RED }}
    >
      {children}
    </p>
  );
}

function PriceRow({ item }) {
  return (
    <div className="grid grid-cols-12 gap-4 border-b border-black/10 py-5 items-start">
      <div className="col-span-12 md:col-span-4">
        <p className="font-semibold text-black text-base leading-snug">{item.name}</p>
        <p className="text-black/55 text-sm mt-1 leading-snug">{item.note}</p>
      </div>
      <div className="col-span-6 md:col-span-3 font-mono text-black">
        <span className="text-xl">{item.price}</span>{" "}
        <span className="text-sm text-black/55">{item.unit}</span>
      </div>
      <div
        className="col-span-6 md:col-span-5 font-mono text-sm md:text-right"
        style={{ color: RED }}
      >
        {item.life}
      </div>
    </div>
  );
}

export default function CostGuide() {
  return (
    <div className="bg-white text-black font-sans antialiased">
      {/* ---------- HERO ---------- */}
      <header className="relative max-w-6xl mx-auto px-6 pt-8 pb-16 md:pt-14 md:pb-24">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <span className="inline-block bg-red-100 text-[#CC1F1F] px-4 py-2 rounded-full text-sm font-semibold mb-4">
             2026 Sydney rate guide
            </span>
            <h1 className="font-black text-[2.6rem] leading-[1.04] tracking-tight md:text-[3.6rem]">
              What should you{" "}
              <span style={{ color: RED }}>actually pay</span> for epoxy
              flooring?
            </h1>
            <p className="text-black/65 text-lg mt-6 max-w-xl leading-relaxed">
              Quotes across Sydney vary by hundreds of dollars per sqm. This
              guide breaks down 2026 market rates, what really drives your
              price, and the 21-year difference between a warranty you can
              trust and one that's marketing math.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button
                className="text-white font-bold px-6 py-3.5 rounded-sm hover:opacity-90 transition-opacity flex items-center gap-2"
                style={{ backgroundColor: RED }}
              >
                Contact Us <ArrowRight size={16} />
              </button>
              <span className="font-mono text-sm text-black/50">
                21+ years · same company, same name
              </span>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm border border-black/10">
              <img
                src="/src/assets/industrial.jpg"
                alt="Glossy epoxy resin floor finish"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white border border-black/15 rounded-sm px-5 py-4 hidden sm:block shadow-sm">
              <p className="font-mono text-3xl font-bold leading-none" style={{ color: RED }}>
                21+
              </p>
              <p className="text-xs text-black/55 mt-1">years, one company</p>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- TIMELINE SIGNATURE: 21 YEARS VS PHOENIX ---------- */}
      <section className="border-y border-black/10 py-16 bg-black/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block bg-red-100 text-[#CC1F1F] px-4 py-2 rounded-full text-sm font-semibold mb-4">
             The warranty questions
            </span>
          <h2 className="font-black text-3xl md:text-4xl tracking-tight max-w-2xl">
            A 20-year warranty is only as old as the company writing it.
          </h2>
          <p className="text-black/65 mt-4 max-w-2xl leading-relaxed">
            Some Sydney operators advertise decades of "combined experience" —
            adding up five employees' resumes to make a two-year-old company
            sound established. Others close down and reopen under a new name
            once warranty claims pile up. Here's what continuous operation
            actually looks like on a timeline.
          </p>
          </div>
          </section>

      {/* ---------- RATE CARD ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <span className="inline-block bg-red-100 text-[#CC1F1F] px-4 py-2 rounded-full text-sm font-semibold mb-4">
             2026 rate card
            </span>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="font-black text-3xl md:text-4xl tracking-tight">
            Estimated Sydney pricing
          </h2>
          <span className="font-mono text-xs text-black/50 max-w-xs text-right hidden md:block">
            Final price depends on your slab's CSP — see factors below
          </span>
        </div>

        <div className="mt-10 bg-white border border-black/12 rounded-sm px-6 md:px-8">
          {RATE_CARD.map((item) => (
            <PriceRow key={item.name} item={item} />
          ))}
        </div>
        <p className="text-black/55 text-sm mt-5 max-w-2xl leading-relaxed">
          Additional coats, joint repairs and cutting off dynabolts incur
          extra cost. If your slab has old oil staining, rising damp or
          failed prior coatings, additional prep is required to meet our
          quality standard.
        </p>
      </section>

      {/* ---------- WHAT AFFECTS YOUR QUOTE ---------- */}
      <section className="border-y border-black/10 py-20 bg-black/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block bg-red-100 text-[#CC1F1F] px-4 py-2 rounded-full text-sm font-semibold mb-4">
             Behind the number
            </span>
          <h2 className="font-black text-3xl md:text-4xl tracking-tight max-w-2xl">
            About half of your quote is logistics and labour, not material.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 mt-12 rounded-sm overflow-hidden">
            {FACTORS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white p-6">
                <Icon size={20} strokeWidth={1.75} style={{ color: RED }} className="mb-4" />
                <h3 className="font-bold text-base mb-2">{title}</h3>
                <p className="text-black/55 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SYSTEMS GALLERY ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <span className="inline-block bg-red-100 text-[#CC1F1F] px-4 py-2 rounded-full text-sm font-semibold mb-4">
             Finishes
            </span>
        <h2 className="font-black text-3xl md:text-4xl tracking-tight max-w-2xl">
          From a sealed warehouse floor to a full metallic showpiece.
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { img: IMAGES.grind, name: "Diamond grind & prep", desc: "Industrial CSP-rated surface preparation — the foundation every coat depends on." },
            { img: IMAGES.flake, name: "Premium flake system", desc: "Broadcast flake with UV-stable topcoat. 10+ years commercial, 15+ residential." },
            { img: IMAGES.metallic, name: "Metallic & marble effect", desc: "Pigment-driven, one-of-a-kind floors for showrooms and feature spaces." },
          ].map((s) => (
            <div key={s.name} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-sm border border-black/10">
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-base mt-4">{s.name}</h3>
              <p className="text-black/55 text-sm mt-1.5 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- RED FLAG COMPARISON ---------- */}
      <section className="border-y border-black/10 py-20 bg-black/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          
          <span className="inline-block bg-red-100 text-[#CC1F1F] px-4 py-2 rounded-full text-sm font-semibold mb-4">
             Why cheap quotes fail?
            </span>
          <h2 className="font-black text-3xl md:text-4xl tracking-tight max-w-2xl">
            A quote 30% under market is usually cutting one of three corners.
          </h2>

          <div className="mt-12 space-y-px bg-black/10 rounded-sm overflow-hidden">
            <div className="grid grid-cols-12 bg-white px-6 py-3 font-mono text-[11px] uppercase tracking-wider text-black/45">
              <div className="col-span-3">Shortcut</div>
              <div className="col-span-4 flex items-center gap-2">
                <XCircle size={13} style={{ color: RED }} /> Budget approach
              </div>
              <div className="col-span-3 flex items-center gap-2">
                <CheckCircle2 size={13} style={{ color: "#1F7A2E" }} /> SEF standard
              </div>
              <div className="col-span-2">Result</div>
            </div>
            {RED_FLAGS.map((r) => (
              <div
                key={r.title}
                className="grid grid-cols-12 bg-white px-6 py-5 items-start gap-2"
              >
                <div className="col-span-12 md:col-span-3 font-bold text-sm">{r.title}</div>
                <div className="col-span-12 md:col-span-4 text-sm" style={{ color: RED }}>{r.cheap}</div>
                <div className="col-span-12 md:col-span-3 text-sm text-black/75">{r.sef}</div>
                <div className="col-span-12 md:col-span-2 text-xs text-black/50">{r.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SHOWROOM ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            
               <span className="inline-block bg-red-100 text-[#CC1F1F] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            See it before you sign
            </span>
            <h2 className="font-black text-3xl tracking-tight">
              Most contractors show you a plastic sample. We'll show you the
              floor.
            </h2>
            <p className="text-black/65 mt-4 leading-relaxed">
              Walk full-scale installations of our premium flake and metallic
              systems — feel the thickness, see the texture, meet the team
              that's been doing this since the early 2000s.
            </p>
            <div className="mt-6 space-y-3 font-mono text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} style={{ color: RED }} className="mt-0.5 flex-shrink-0" />
                <span>Silverwater — 6 Giffard Street, Silverwater NSW</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} style={{ color: RED }} className="mt-0.5 flex-shrink-0" />
                <span>Rydalmere — Unit C/283 Victoria Road, Rydalmere NSW</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="aspect-[16/10] overflow-hidden rounded-sm border border-black/10">
              <img
                src={IMAGES.showroom}
                alt="Sydney Epoxy Floors showroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WARRANTY PROMISE ---------- */}
      <section className="border-y border-black/10 py-20 bg-black/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block bg-red-100 text-[#CC1F1F] px-4 py-2 rounded-full text-sm font-semibold mb-4">
          The SEF warranty promise
            </span>
          </div>
          <h2 className="font-black text-3xl md:text-4xl tracking-tight max-w-2xl text-black">
            A warranty is only as good as the company behind it.
          </h2>

          <div className="grid sm:grid-cols-3 gap-8 mt-12">
            <div>
              <p className="font-mono text-xs mb-2" style={{ color: RED }}>01</p>
              <h3 className="font-bold text-lg mb-2">Local & permanent</h3>
              <p className="text-black/60 text-sm leading-relaxed">
                Two fully stocked, brick-and-mortar showrooms. Not a mobile
                number that can disappear.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs mb-2" style={{ color: RED }}>02</p>
              <h3 className="font-bold text-lg mb-2">No hot-tyre exclusion</h3>
              <p className="text-black/60 text-sm leading-relaxed">
                Most budget warranties exclude hot tyre pick-up in the fine
                print. Ours doesn't — our bond is strong enough not to need
                the loophole.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs mb-2" style={{ color: RED }}>03</p>
              <h3 className="font-bold text-lg mb-2">Proven longevity</h3>
              <p className="text-black/60 text-sm leading-relaxed">
                One of the few NSW companies that has actually watched its
                own floors survive 20 years of real-world use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src={IMAGES.warehouse}
            alt="Large industrial epoxy floor"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="font-black text-4xl md:text-5xl tracking-tight max-w-2xl mx-auto">
            Don't gamble on a budget estimate.
          </h2>
          <p className="text-black/65 mt-4 max-w-xl mx-auto leading-relaxed">
            Get a fixed price, backed by 21 years of experience and a
            warranty that doesn't need an exit clause.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              className="text-white font-bold px-7 py-4 rounded-sm hover:opacity-90 transition-opacity flex items-center gap-2"
              style={{ backgroundColor: RED }}
            >
              Get your free quote <ArrowRight size={16} />
            </button>
            <a
              href="tel:1300037699"
              className="border border-black/20 text-black font-bold px-7 py-4 rounded-sm hover:bg-black/[0.03] transition-colors flex items-center gap-2"
            >
              <Phone size={16} /> 1300 037 699
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
