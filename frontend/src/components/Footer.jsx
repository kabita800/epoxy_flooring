import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

const SERVICES_LEFT = [
  "Kitchens & food processing areas",
  "Warehouse epoxy flooring",
  "Garage epoxy flooring",
  "Metallic & marble effect systems",
  "Premium flake epoxy flooring",
  "Epoxy flooring over tiles",
  "Driveways & high-build repair",
];

const SERVICES_RIGHT = [
  "Industrial environment systems",
  "Workshop floor coating",
  "Cementitious polyurethane systems",
  "Solid colour epoxy flooring",
  "SEF SuperClear — grind & seal",
  "Heavy-duty line marking",
  "Concrete grinding service",
];

const BOTTOM_LINKS = [
  { label: "Home", href: "/" },
  { label: "Epoxy Flooring Services", href: "#" },
  { label: "Stellmann Non-Slip", href: "/stellmann" },
  { label: "2026 Cost Guide", href: "/cost-guide" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Terms of Trade", href: "#" },
  { label: "Contact Us", href: "/contact" },
];

const SOCIALS = [
  {
    label: "Facebook",
    icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  { label: "X / Twitter", icon: "M4 4l16 16M4 20 20 4" },
  {
    label: "Instagram",
    icon: "M 2 6 A 4 4 0 0 1 6 2 H 18 A 4 4 0 0 1 22 6 V 18 A 4 4 0 0 1 18 22 H 6 A 4 4 0 0 1 2 18 Z M 12 16 A 4 4 0 1 0 12 8 A 4 4 0 1 0 12 16 Z M 17.5 6.5 L 17.5 6.5",
  },
  {
    label: "LinkedIn",
    icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  },
];

function ColLabel({ children }) {
  return (
    <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-gray-400 mb-3">
      {children}
    </p>
  );
}

function LinkList({ items }) {
  return (
    <ul className="flex flex-col gap-1.5">
      {items.map((item) => (
        <li key={item}>
          <a
            href="#"
            className="footer-link text-[12.5px] text-gray-500 hover:text-[#A11717] transition-all duration-300 leading-snug"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const navigate = useNavigate();

  const clickCount = useRef(0);
  const timer = useRef(null);

  const handleAdminClick = () => {
    clickCount.current++;

    clearTimeout(timer.current);

    // Reset after 2 seconds if user stops clicking
    timer.current = setTimeout(() => {
      clickCount.current = 0;
    }, 2000);

    if (clickCount.current >= 5) {
      clickCount.current = 0;
      navigate("/admin-login");
    }
  };
  return (
    <footer className="bg-[#f8f7f5] border-t border-[#e5e3de] font-sans relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A11717]/30 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-8 sm:pt-10 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] gap-6 sm:gap-8 lg:gap-10">
        {/* Brand column */}
        <div className="max-w-[280px] sm:col-span-2 lg:col-span-1">
          <a
            href="#"
            className="flex items-center gap-2.5 shrink-0 no-underline transition-transform duration-300 hover:-translate-y-0.5"
          >
            <img
              src="/src/assets/logo.svg"
              alt="Sydney Epoxy Floors"
              className="h-12 w-auto"
            />

            <span className="text-[10px] tracking-widest text-white/35 uppercase leading-relaxed hidden sm:block">
              Sydney Epoxy Floors
              <br />
              Better · Smarter · Greener
            </span>
          </a>

          <p className="flex items-center gap-2 text-[13px] text-gray-600 hover:text-[#A11717] transition-colors mb-2 no-underline">
            Premium epoxy flooring solutions that deliver exceptional
            durability, seamless finishes, and lasting protection for
            residential, commercial, and industrial spaces.
          </p>
        </div>

        {/* Contact column */}
        <div className="sm:mt-0">
          <ColLabel>Contact us</ColLabel>
          <a
            href="tel:1300037699"
            className="flex items-center gap-2 text-[13px] text-gray-600 hover:text-[#A11717] transition-colors mb-2 no-underline"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A11717"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            1300 037 699
          </a>
          <a
            href="mailto:admin@sydneyepoxyfloors.com.au"
            className="flex items-center gap-2 text-[13px] text-gray-600 hover:text-[#A11717] transition-colors no-underline"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A11717"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            admin@sydneyepoxyfloors.com.au
          </a>
          <div className="flex gap-1.5 mt-3.5">
            {SOCIALS.map(({ label, icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="footer-icon w-[30px] h-[30px] rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-[#A11717] hover:text-[#A11717] transition-all duration-300"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d={icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Services left */}
        <div className="sm:mt-0">
          <ColLabel>Flooring services</ColLabel>
          <LinkList items={SERVICES_LEFT} />
        </div>

        {/* Services right */}
        <div className="sm:mt-0">
          <ColLabel>More services</ColLabel>
          <LinkList items={SERVICES_RIGHT} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#e0ded9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <nav
            className="flex flex-wrap gap-x-4 gap-y-1"
            aria-label="Footer navigation"
          >
            {BOTTOM_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                to={href}
                className="footer-link text-[12px] text-gray-500 hover:text-[#A11717] transition-all duration-300 no-underline"
              >
                {label}
              </Link>
            ))}
          </nav>
          <span
  onClick={handleAdminClick}
  className="text-[12px] text-gray-500 cursor-pointer select-none"
>
  &copy; 2026 Industrial Coatings Co Pty Ltd
</span>
        </div>
      </div>
    </footer>
  );
}
