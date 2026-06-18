import { useState } from "react";
import { ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#" },

  {
    label: "Epoxy Flooring Services",
    href: "#",
    dropdown: [
      "Epoxy For Kitchens and Food Processing Areas",
      "Epoxy Flooring Systems For Industrial Environments",
      "Warehouse Epoxy Flooring System",
      "Workshop Epoxy Floor Coating System",
      "Garage Epoxy Flooring",
      "Cementitious Polyurethane Floor Coating Systems",
      "Metallic & Marble Effect Epoxy Flooring System",
      "Solid Colour Epoxy Flooring",
      "Premium Flake Epoxy Flooring",
      "SEF SuperClear | Grind and Seal",
      "Epoxy Flooring Over Tiles",
      "Heavy Duty Line Marking Using Two Pack Products",
      "Epoxy Flooring For Driveways",
      "Concrete Grinding Service",
      "High Build Epoxy Repair Service",
    ],
  },

  { label: "Stellmann Non-Slip", href: "#" },
  { label: "2026 Cost Guide", href: "#", badge: "New" },
  { label: "Gallery", href: "#" },
  { label: "Reviews", href: "#" },
  { label: "Blog", href: "#" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <nav className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0 no-underline">
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


        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-0.5 list-none m-0 p-0">

          {NAV_LINKS.map(({ label, href, dropdown, badge }) => (

            <li
              key={label}
              className="relative"
              onMouseEnter={() => dropdown && setOpenDropdown(true)}
              onMouseLeave={() => dropdown && setOpenDropdown(false)}
            >

              <a
                href={href}
                onClick={() => setActive(label)}
                className={[
                  "flex items-center gap-1 px-3 py-1.5 rounded-md text-[13px] tracking-wide transition-colors duration-150 no-underline whitespace-nowrap",
                  active === label
                    ? "text-gray-900"
                    : "text-gray-700 hover:text-black hover:bg-black/[0.07]",
                ].join(" ")}
              >

                {label}

                {badge && (
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded-full bg-[#CC1F1F]/20 text-[#f08080]">
                    {badge}
                  </span>
                )}

                {dropdown && (
                  <ChevronDown className="w-3 h-3 opacity-50" />
                )}

              </a>


              {/* Epoxy Dropdown */}
              {dropdown && openDropdown && (
                <div className="absolute top-full left-0 mt-2 w-[300px] bg-white shadow-lg py-3 z-50">

                  {dropdown.map((item) => (

                    <a
                      key={item}
                      href="#"
                      className="
                        block
                        px-6
                        py-2
                        text-[13px]
                        font-semibold
                        text-gray-500
                        leading-tight
                        no-underline
                        hover:text-[#CC1F1F]
                        transition-colors
                      "
                    >
                      {item}
                    </a>

                  ))}

                </div>
              )}

            </li>

          ))}

        </ul>



        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3 shrink-0">

          <div className="hidden lg:block w-px h-5 bg-white/10" />

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-1.5 bg-[#CC1F1F] hover:bg-[#b31a1a] text-white text-[13px] font-medium tracking-wide px-4 py-2 rounded-md transition-colors duration-150 no-underline"
          >
            Contact Us <span aria-hidden="true">→</span>
          </a>


          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-1.5 text-black/60 hover:text-black transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >

            <span
              className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block w-5 h-0.5 bg-current transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />

          </button>

        </div>

      </div>



      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/[0.06] px-6 py-4 flex flex-col gap-1">

          {NAV_LINKS.map(({ label, href, badge }) => (

            <a
              key={label}
              href={href}
              onClick={() => {
                setActive(label);
                setMobileOpen(false);
              }}
              className={[
                "flex items-center justify-between px-3 py-2.5 rounded-md text-sm no-underline transition-colors",
                active === label
                  ? "text-black bg-black/[0.07]"
                  : "text-black/60 hover:text-black hover:bg-black/[0.05]",
              ].join(" ")}
            >

              {label}

              {badge && (
                <span className="text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded-full bg-[#CC1F1F]/20 text-[#f08080]">
                  {badge}
                </span>
              )}

            </a>

          ))}


          <a
            href="#contact"
            className="mt-3 flex items-center justify-center gap-1.5 bg-[#CC1F1F] hover:bg-[#b31a1a] text-white text-sm font-medium tracking-wide px-4 py-2.5 rounded-md transition-colors no-underline"
          >
            Contact Us →
          </a>

        </div>
      )}

    </nav>
  );
}