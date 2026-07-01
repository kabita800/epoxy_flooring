import { useState } from "react";
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

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}

        <NavLink to="/" className="flex items-center gap-3 no-underline">
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
                  className="

flex
items-center
gap-1
px-3
py-2
rounded-md
text-[13px]
text-gray-700
hover:text-[#A11717]
hover:bg-red-50
transition
bg-transparent
border-none
cursor-pointer

"
                >
                  {label}

                  <ChevronDown className="w-3 h-3" />
                </button>
              : <NavLink
                  to={href}
                  className={({ isActive }) =>
                    [
                      "px-3 py-2 rounded-md text-[13px] transition no-underline",

                      isActive ?
                        "text-[#A11717] font-bold"
                      : "text-gray-700 hover:text-[#A11717] hover:bg-red-50",
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
                <div
                  className="

absolute

top-full

left-0

mt-2

w-[280px]

max-h-[320px]

overflow-y-auto

bg-white

shadow-lg

rounded-md

border

border-gray-200

py-2

z-50

"
                >
                  {dropdown.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.href}
                      onClick={() => setOpenDropdown(false)}
                      className="

block

px-4

py-1.5

text-[12px]

font-medium

text-gray-600

hover:text-[#A11717]

hover:bg-red-50

transition

no-underline

"
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
            className="hidden lg:flex bg-[#A11717] text-white px-4 py-2 rounded-md text-sm no-underline"
          >
            Contact Us →
          </NavLink>

          <button
            className="lg:hidden flex flex-col gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="w-5 h-0.5 bg-black" />

            <span className="w-5 h-0.5 bg-black" />

            <span className="w-5 h-0.5 bg-black" />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}

      {mobileOpen && (
        <div className="lg:hidden border-t px-6 py-4 flex flex-col gap-2">
          {NAV_LINKS.map(({ label, href, badge }) => (
            <NavLink
              key={label}
              to={href}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                [
                  "px-3 py-2 rounded-md text-sm no-underline",

                  isActive ?
                    "text-[#A11717] font-bold bg-red-50"
                  : "text-gray-700",
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
            className="mt-3 bg-[#A11717] text-white px-3 py-2.5 rounded-md text-sm font-semibold text-center no-underline hover:bg-[#831111] transition duration-200"
          >
            Contact Us →
          </NavLink>
        </div>
      )}
    </nav>
  );
}
