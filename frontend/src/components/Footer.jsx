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
  "Home",
  "Epoxy Flooring Services",
  "Stellmann Non-Slip",
  "2026 Cost Guide",
  "Gallery",
  "Reviews",
  "Blog",
  "Terms of Trade",
  "Contact Us",
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
            className="text-[12.5px] text-gray-500 hover:text-[#CC1F1F] transition-colors leading-snug"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#f8f7f5] border-t border-[#e5e3de] font-sans">
      <div className="max-w-6xl mx-auto px-8 pt-10 pb-8 grid grid-cols-[180px_1fr_1fr_1fr] gap-10">
        {/* Brand column */}
        <div>
          <a
            href="#"
            className="flex items-center gap-2.5 shrink-0 no-underline"
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

          <p className="flex items-center gap-2 text-[13px] text-gray-600 hover:text-[#CC1F1F] transition-colors mb-2 no-underline">
            Premium epoxy flooring solutions that deliver exceptional
            durability, seamless finishes, and lasting protection for
            residential, commercial, and industrial spaces.
          </p>
        </div>

        {/* Contact column */}
        <div>
          <ColLabel>Contact us</ColLabel>
          <a
            href="tel:1300037699"
            className="flex items-center gap-2 text-[13px] text-gray-600 hover:text-[#CC1F1F] transition-colors mb-2 no-underline"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#CC1F1F"
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
            className="flex items-center gap-2 text-[13px] text-gray-600 hover:text-[#CC1F1F] transition-colors no-underline"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#CC1F1F"
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
                className="w-[30px] h-[30px] rounded-md border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-[#CC1F1F] hover:text-[#CC1F1F] transition-colors"
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
        <div>
          <ColLabel>Flooring services</ColLabel>
          <LinkList items={SERVICES_LEFT} />
        </div>

        {/* Services right */}
        <div>
          <ColLabel>More services</ColLabel>
          <LinkList items={SERVICES_RIGHT} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#e0ded9]">
        <div className="max-w-6xl mx-auto px-8 py-3.5 flex items-center justify-between flex-wrap gap-2">
          <nav
            className="flex flex-wrap gap-x-4 gap-y-1"
            aria-label="Footer navigation"
          >
            {BOTTOM_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[12px] text-gray-500 hover:text-[#CC1F1F] transition-colors no-underline"
              >
                {link}
              </a>
            ))}
          </nav>
          <span className="text-[12px] text-gray-500">
            &copy; 2026 Industrial Coatings Co Pty Ltd
          </span>
        </div>
      </div>
    </footer>
  );
}
