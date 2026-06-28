import { useState, useEffect, useRef } from "react";

const posts = [
  { id: 1, title: "How Important is Epoxy Flooring in Your Garage?", excerpt: "Having a beautiful house is one of the aspirations of any homeowner. Discover why epoxy flooring is the smartest investment you can make for your garage space.", category: "Garage", readTime: "5 min", featured: true, href: "https://www.sydneyepoxyfloors.com.au/blog/how-important-is-to-have-epoxy-flooring-in-your-garage", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
  { id: 2, title: "What is Epoxy Coating?", excerpt: "An epoxy flooring is one of the toughest and most durable finishes you can have. The term refers to both the materials used and the application process.", category: "Basics", readTime: "4 min", featured: false, href: "https://www.sydneyepoxyfloors.com.au/blog/what-is-epoxy-coating--", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" },
  { id: 3, title: "Why Epoxy Flooring is Best for Your Garage?", excerpt: "One of the most fulfilling achievements is to own a car. Your garage deserves the same level of care and investment as the vehicle it protects.", category: "Garage", readTime: "6 min", featured: false, href: "https://www.sydneyepoxyfloors.com.au/blog/why-epoxy-flooring-is-best-for-your-garage-", image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=800&q=80" },
  { id: 4, title: "What Type of Epoxy Flooring is Best for Your Space?", excerpt: "Epoxy is the most widely used flooring solution for protection and beautification. Learn which system suits your environment perfectly.", category: "Guide", readTime: "7 min", featured: false, href: "https://www.sydneyepoxyfloors.com.au/blog/what-type-of-epoxy-flooring-is-best-for-your-space", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80" },
  { id: 5, title: "5 Known Benefits of Epoxy Floor Coating", excerpt: "When planning to revamp your commercial or living space, find a floor solution that stands the brunt of everyday activities without compromising aesthetics.", category: "Benefits", readTime: "5 min", featured: false, href: "https://www.sydneyepoxyfloors.com.au/blog/known-benefits-of-epoxy-flooring-", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
  { id: 6, title: "Is Garage Epoxy Floor Coating Slippery?", excerpt: "Any wet floor will be slippery — but anti-slip media additives can transform your epoxy floor into a safe, reliable surface for any environment.", category: "Safety", readTime: "4 min", featured: false, href: "https://www.sydneyepoxyfloors.com.au/blog/is-garage-epoxy-floor-coating-slippery-", image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80" },
  { id: 7, title: "The Importance of Epoxy Flooring to Business", excerpt: "In manufacturing, food processing, warehouses and retail stores, the right flooring is a critical business asset — not just a surface.", category: "Commercial", readTime: "6 min", featured: false, href: "https://www.sydneyepoxyfloors.com.au/blog/the-importance-of-epoxy-flooring-to-business", image: "https://images.unsplash.com/photo-1553341640-6f7a00d37e30?w=800&q=80" },
  { id: 8, title: "Flake Polyaspartic Flooring for Sydney Garages", excerpt: "Imagine your garage as a blank canvas ready for transformation. Flake polyaspartic flooring offers a sophisticated blend of durability and design.", category: "Innovation", readTime: "8 min", featured: false, href: "https://www.sydneyepoxyfloors.com.au/blog/discover-the-benefits-of-flake-polyaspartic-flooring-for-sydney-garages", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
  { id: 9, title: "Epoxy Flooring for Hospitals", excerpt: "A hospital has hundreds of moving parts. Choosing the right flooring system — from operating rooms to corridors — is a decision that impacts patient safety.", category: "Healthcare", readTime: "6 min", featured: false, href: "https://www.sydneyepoxyfloors.com.au/blog/epoxy-flooring-for-hospitals", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" },
  { id: 10, title: "Why Preparation is the Most Important Stage", excerpt: "Epoxy applications are durable, easy to clean, and aesthetically pleasing — but none of that matters without meticulous surface preparation first.", category: "Process", readTime: "7 min", featured: false, href: "https://www.sydneyepoxyfloors.com.au/blog/why-preparation-is-the-most-important-stage-of-applying-a-successful-epoxy-flooring-system", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" },
  { id: 11, title: "Flake Epoxy vs Solid Colour Epoxy Flooring", excerpt: "Both options deliver a durable, long-lasting finish — but they serve very different purposes. Here's how to choose the right one for your project.", category: "Comparison", readTime: "5 min", featured: false, href: "https://www.sydneyepoxyfloors.com.au/blog/flake-epoxy-vs-solid-colour-epoxy-flooring", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80" },
  { id: 12, title: "Cost of Epoxy Flooring in Sydney", excerpt: "We believe in transparency and honesty when it comes to rates. Understanding the real cost helps you make a wise investment in your property.", category: "Pricing", readTime: "9 min", featured: false, href: "https://www.sydneyepoxyfloors.com.au/2026-epoxy-flooring-cost-guide-price-vs-value", image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80" },
];

const categories = ["All", "Garage", "Commercial", "Guide", "Benefits", "Safety", "Healthcare", "Process", "Innovation", "Comparison", "Pricing", "Basics"];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

//  Hero Grid (2-col: text left, image right) 
function HeroGrid({ post }) {
  const [ref, inView] = useInView(0.05);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px] overflow-hidden"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      {/* Left: Content */}
      <div className="flex flex-col justify-center px-10 py-14 lg:px-16 bg-white border border-[#f0e8e8] border-r-0 rounded-l-2xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 bg-[#A11717] text-white text-[10px] font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
            Featured
          </span>
          <span className="text-xs text-[#b08080] font-medium tracking-wide">{post.category} · {post.readTime} read</span>
        </div>

        <h2
          className="text-[#0f0505] font-black leading-[1.1] mb-5"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3.5vw, 42px)" }}
        >
          {post.title}
        </h2>

        <p className="text-[15px] leading-[1.8] text-[#6b5050] mb-8 max-w-[480px]">
          {post.excerpt}
        </p>

        <a
          href={post.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="group inline-flex items-center gap-3 self-start"
        >
          <span className="px-6 py-3 bg-[#A11717] text-white text-[12px] font-bold tracking-[1.5px] uppercase rounded-lg transition-all duration-200 group-hover:bg-[#8a1313] group-hover:shadow-lg group-hover:shadow-[rgba(161,23,23,0.3)]">
            Read Article
          </span>
          <span className="text-[#A11717] text-lg transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </div>

      {/* Right: Image */}
      <div className="relative overflow-hidden rounded-r-2xl min-h-[300px] lg:min-h-0">
        <div
          className="absolute inset-0 bg-[#e8d5d5]"
          style={{ opacity: imgLoaded ? 0 : 1, transition: "opacity 0.5s" }}
        />
        <img
          src={post.image}
          alt={post.title}
          onLoad={() => setImgLoaded(true)}
          className="w-full h-full object-cover"
          style={{ opacity: imgLoaded ? 1 : 0, transition: "opacity 0.6s ease" }}
        />
        {/* Overlay gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/10 pointer-events-none" />
        {/* Category pill on image */}
        <div className="absolute top-5 left-5">
          <span className="bg-white/90 backdrop-blur-sm text-[#A11717] text-[10px] font-bold tracking-[1.5px] uppercase px-3 py-1.5 rounded-full shadow-sm">
            {post.category}
          </span>
        </div>
      </div>
    </div>
  );
}

//  Blog Card 
function BlogCard({ post, index }) {
  const [ref, inView] = useInView(0.05);
  const [hovered, setHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.open(post.href, "_blank")}
      className="group flex flex-col cursor-pointer bg-white rounded-xl overflow-hidden"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s ease ${index * 55}ms, transform 0.55s ease ${index * 55}ms`,
        border: "1px solid #f0e8e8",
        boxShadow: hovered
          ? "0 20px 48px rgba(161,23,23,0.1), 0 4px 16px rgba(0,0,0,0.06)"
          : "0 2px 8px rgba(0,0,0,0.04)",
        transition: `opacity 0.55s ease ${index * 55}ms, transform 0.55s ease ${index * 55}ms, box-shadow 0.3s ease`,
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48 bg-[#f5eded]">
        <img
          src={post.image}
          alt={post.title}
          onLoad={() => setImgLoaded(true)}
          className="w-full h-full object-cover"
          style={{
            opacity: imgLoaded ? 1 : 0,
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "opacity 0.5s ease, transform 0.6s ease",
          }}
        />
        {/* Red left accent stripe on hover */}
        <div
          className="absolute left-0 top-0 w-1 h-full bg-[#A11717]"
          style={{
            transform: hovered ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "top",
            transition: "transform 0.3s ease",
          }}
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-[#A11717] text-[9px] font-bold tracking-[1.5px] uppercase px-2.5 py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-[10px] font-bold tracking-[1.5px] uppercase transition-colors duration-200"
            style={{ color: hovered ? "#A11717" : "#b08080" }}
          >
            {post.category}
          </span>
          <span className="text-[11px] text-[#c0a0a0] font-medium">{post.readTime} read</span>
        </div>

        <h3
          className="text-[15px] font-bold leading-snug text-[#0f0505] mb-3 flex-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {post.title}
        </h3>

        <p className="text-[12.5px] leading-relaxed text-[#7a6060] mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* CTA row */}
        <div className="flex items-center justify-between pt-4 border-t border-[#f5eded]">
          <span
            className="text-[11px] font-bold tracking-[1.2px] uppercase transition-colors duration-200"
            style={{ color: hovered ? "#A11717" : "#c0a0a0" }}
          >
            Read article
          </span>
          <span
            className="text-[#A11717] text-base transition-transform duration-200"
            style={{ transform: hovered ? "translateX(4px)" : "translateX(0)" }}
          >
            →
          </span>
        </div>
      </div>
    </div>
  );
}

// ── CTA Banner ────────────────────────────────────────────────────────────────
function CTABanner() {
  const [ref, inView] = useInView(0.1);
  return (
    <div
      ref={ref}
      className="relative mt-20 rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f0505 0%, #1a0a0a 50%, #2a0f0f 100%)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(161,23,23,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(161,23,23,0.06) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />
      {/* Red left bar */}
      <div className="absolute left-0 top-0 w-1.5 h-full bg-[#A11717]" />
      {/* Watermark */}
      <span
        className="absolute -bottom-4 right-8 select-none pointer-events-none font-black"
        style={{ fontFamily: "'Playfair Display', serif", fontSize: "130px", color: "rgba(161,23,23,0.07)", lineHeight: 1 }}
      >SEF</span>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 px-10 py-14 md:px-16">
        <div>
          <p className="text-[10px] font-bold tracking-[3px] uppercase text-[#A11717] mb-3">Ready to transform your space?</p>
          <h2
            className="font-black text-white leading-tight mb-2"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px, 3.5vw, 34px)" }}
          >
            Get a free quote today
          </h2>
          <p className="text-[14px] text-[#7a5a5a] leading-relaxed max-w-sm">
            Sydney's most trusted epoxy flooring specialists. Professional installation, unmatched durability.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <button className="px-8 py-3.5 bg-[#A11717] text-white text-[12px] font-bold tracking-[1.5px] uppercase rounded-xl cursor-pointer hover:bg-[#8a1313] transition-all duration-200 hover:shadow-lg hover:shadow-[rgba(161,23,23,0.4)]">
            Request a Quote
          </button>
          <button className="px-8 py-3.5 bg-white/5 text-white border border-white/15 text-[12px] font-bold tracking-[1.5px] uppercase rounded-xl cursor-pointer hover:bg-white/10 transition-all duration-200">
            View Our Work
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function EpoxyBlog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filterVisible, setFilterVisible] = useState(false);
  const filterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => setFilterVisible(e.isIntersecting || e.boundingClientRect.top < 0), { threshold: 0 });
    if (filterRef.current) observer.observe(filterRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeCategory === "All" ? posts : posts.filter(p => p.category === activeCategory);
  const featured = posts.find(p => p.featured);
  const regularPosts = filtered.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-[#fafafa]" style={{ fontFamily: "'Inter', sans-serif" }}>

      <main className="max-w-6xl mx-auto px-5 md:px-8 py-10 pb-24">

        {/* ── Hero 2-col grid ── */}
        {activeCategory === "All" && featured && (
          <div className="mb-14">
            <HeroGrid post={featured} />
          </div>
        )}

        {/* ── Section header ── */}
        <div ref={filterRef} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-8">
          <div>
            <h3
              className="text-[22px] font-black text-[#0f0505] leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Latest Articles
            </h3>
            <p className="text-[12px] text-[#b08080] mt-0.5">
              <span className="text-[#A11717] font-bold">{regularPosts.length}</span> articles
              {activeCategory !== "All" && <> in <span className="text-[#A11717] font-semibold">{activeCategory}</span></>}
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="text-[10px] font-bold tracking-[1.2px] uppercase px-3 py-1.5 rounded-lg border transition-all duration-150 cursor-pointer"
                style={{
                  background: activeCategory === cat ? "#A11717" : "white",
                  borderColor: activeCategory === cat ? "#A11717" : "#e8dada",
                  color: activeCategory === cat ? "white" : "#8a6a6a",
                  boxShadow: activeCategory === cat ? "0 2px 8px rgba(161,23,23,0.25)" : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-[#A11717]/20 via-[#e8dada] to-transparent mb-10" />

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>

        {/* ── CTA ── */}
        <CTABanner />
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@700;800;900&display=swap');
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        .animate-pulse { animation: pulse 2s infinite; }
      `}</style>
    </div>
  );
}
