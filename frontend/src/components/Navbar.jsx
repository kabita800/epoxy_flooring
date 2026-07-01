import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "Epoxy Flooring Services",

    dropdown: [
      {
        label: "Epoxy For Kitchens and Food Processing Areas",
        href: "/services/epoxy-kitchens",
      },

      {
        label: "Epoxy Flooring Systems For Industrial Environments",
        href: "/services/industrial-epoxy-flooring",
      },

      {
        label: "Warehouse Epoxy Flooring System",
        href: "/services/warehouse-epoxy-flooring",
      },

      {
        label: "Workshop Epoxy Floor Coating System",
        href: "/services/workshop-epoxy-flooring",
      },

      {
        label: "Garage Epoxy Flooring",
        href: "/services/garage-epoxy-flooring",
      },

      {
        label: "Cementitious Polyurethane Floor Coating Systems",
        href: "/services/polyurethane-floor-coating",
      },

      {
        label: "Metallic & Marble Effect Epoxy Flooring System",
        href: "/services/metallic-epoxy-flooring",
      },

      {
        label: "Solid Colour Epoxy Flooring",
        href: "/services/solid-colour-epoxy",
      },

      {
        label: "Premium Flake Epoxy Flooring",
        href: "/services/flake-epoxy-flooring",
      },

      {
        label: "SEF SuperClear | Grind and Seal",
        href: "/services/sef-superclear",
      },

      {
        label: "Epoxy Flooring Over Tiles",
        href: "/services/epoxy-over-tiles",
      },

      {
        label: "Heavy Duty Line Marking Using Two Pack Products",
        href: "/services/line-marking",
      },

      {
        label: "Epoxy Flooring For Driveways",
        href: "/services/driveway-epoxy-flooring",
      },

      {
        label: "Concrete Grinding Service",
        href: "/services/concrete-grinding",
      },

      {
        label: "High Build Epoxy Repair Service",
        href: "/services/epoxy-repair-service",
      },
    ],
  },

  {
    label: "Stellmann Non-Slip",
    href: "/stellmann",
  },

  {
    label: "2026 Cost Guide",
    href: "/cost-guide",
    badge: "New",
  },

  {
    label: "Gallery",
    href: "/gallery",
  },

  {
    label: "Blog",
    href: "/blog",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`nav-shell sticky top-0 z-50 ${scrolled ? "scrolled" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}

        <NavLink
          to="/"
          className="flex items-center gap-3 no-underline transition-transform duration-300 hover:-translate-y-0.5"
        >
          <img
            src="/src/assets/logo.svg"
            alt="Sydney Epoxy Floors"
            className="h-12 w-auto"
          />
        </NavLink>

        {/* DESKTOP MENU */}

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href, dropdown, badge }) => (
            <li
              key={label}
              className="relative"
              onMouseEnter={() => dropdown && setOpenDropdown(true)}
              onMouseLeave={() => {
                if (dropdown) {
                  setTimeout(() => setOpenDropdown(false), 200);
                }
              }}
            >
              {dropdown ?
                <button
                  onClick={() => setOpenDropdown(!openDropdown)}
                  aria-expanded={openDropdown}
                  className="nav-link-hover flex items-center gap-1 px-3 py-2 rounded-full text-[13px] text-gray-700 hover:text-[#A11717] hover:bg-red-50/70 transition-all duration-300 bg-transparent border-none cursor-pointer"
                >
                  {label}

                  <ChevronDown className="w-3 h-3" />
                </button>
              : <NavLink
                  to={href}
                  className={({ isActive }) =>
                    [
                      "nav-link-hover px-3 py-2 rounded-full text-[13px] transition-all duration-300 no-underline",

                      isActive ?
                        "text-[#A11717] font-bold"
                      : "text-gray-700 hover:text-[#A11717] hover:bg-red-50/70",
                    ].join(" ")
                  }
                >
                  {label}

                  {badge && (
                    <span className="ml-2 text-[10px] bg-red-100 text-[#A11717] px-1.5 py-0.5 rounded-full">
                      {badge}
                    </span>
                  )}
                </NavLink>
              }

              {/* DROPDOWN */}

              {dropdown && openDropdown && (
                <div className="dropdown-panel absolute top-full left-0 mt-2 w-[280px] max-h-[320px] overflow-y-auto bg-white/95 shadow-[0_20px_45px_-20px_rgba(22,24,27,0.45)] rounded-2xl border border-gray-200 py-2 z-50 backdrop-blur">
                  {dropdown.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.href}
                      onClick={() => setOpenDropdown(false)}
                      className="block px-4 py-2 text-[12px] font-medium text-gray-600 hover:text-[#A11717] hover:bg-red-50/70 transition-all duration-300 no-underline"
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-3">
          <NavLink
            to="/contact"
            className="hidden lg:flex bg-[#A11717] text-white px-4 py-2 rounded-full text-sm no-underline shadow-[0_14px_30px_-15px_rgba(161,23,23,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_35px_-12px_rgba(161,23,23,0.9)]"
          >
            Contact Us →
          </NavLink>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-full hover:bg-red-50/70 transition-all duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
          >
            <span
              className={`w-5 h-0.5 bg-black transition-all duration-300 ${mobileOpen ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`w-5 h-0.5 bg-black transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-5 h-0.5 bg-black transition-all duration-300 ${mobileOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}

      {mobileOpen && (
        <div className="mobile-menu-panel lg:hidden border-t border-black/5 px-6 py-4 flex flex-col gap-2 bg-white/95 backdrop-blur">
          {NAV_LINKS.map(({ label, href, badge }) => (
            <NavLink
              key={label}
              to={href}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                [
                  "px-3 py-2 rounded-full text-sm no-underline transition-all duration-300",

                  isActive ?
                    "text-[#A11717] font-bold bg-red-50"
                  : "text-gray-700 hover:bg-red-50/70 hover:text-[#A11717]",
                ].join(" ")
              }
            >
              {label}

              {badge && (
                <span className="ml-2 text-xs text-[#A11717]">{badge}</span>
              )}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 bg-[#A11717] text-white px-3 py-2.5 rounded-full text-sm font-semibold text-center no-underline hover:bg-[#831111] transition-all duration-300"
          >
            Contact Us →
          </NavLink>
        </div>
      )}
    </nav>
  );
}
