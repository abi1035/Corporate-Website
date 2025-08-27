// File: src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // "retirement" | "ltc" | null
  const wrapRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    function onDocClick(e) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <>
      {/* Utility (top) bar */}
      <div className="util util--solid" role="navigation" aria-label="Top utility links">
        <div className="container row">
          <div className="util-left">
            <a className="badge" href="#">Family Resources</a>
            <a href="#">Uplifting News</a>
            <a href="#">Our Advertising</a>
            <a href="#">Our Blog</a>
            <a href="#">Investors</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="util-right">
            <a className="phone" href="tel:+18337185050" aria-label="Call 1-833-718-5050">📞 1‑833‑718‑5050</a>
            {/* <button className="search" aria-label="Search">🔍</button> */}
          </div>
        </div>
      </div>

      {/* Sticky main header */}
      <header className="sticky" role="banner">
        <div className="container nav" ref={wrapRef}>
          <a className="brand" href="#" aria-label="Company home">
            <img
              src="./Logo.png"
              alt="Logo"
            />
            {/* <span>LTC Company</span>No */}
          </a>

          {/* Mobile hamburger */}
          <button
            className="hamburger"
            aria-expanded={mobileOpen}
            aria-controls="primaryMenu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            ☰ Menu
          </button>

          <div className={`menu-wrap ${mobileOpen ? "open" : ""}`}>
            <nav aria-label="Primary">
              <ul id="primaryMenu" className="menu">
                {/* <li
                  className={`dropdown ${openDropdown === "retirement" ? "is-open" : ""}`}
                >
                  <a
                    href="#"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === "retirement"}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenDropdown((d) => (d === "retirement" ? null : "retirement"));
                    }}
                    onKeyDown={(e) => {
                      if (["Enter", " ", "ArrowDown"].includes(e.key)) {
                        e.preventDefault();
                        setOpenDropdown("retirement");
                      }
                    }}
                  >
                    Retirement ▾
                  </a>
                  <div className="submenu" role="menu">
                    <a href="#" role="menuitem">Overview</a>
                    <a href="#" role="menuitem">Independent Living</a>
                    <a href="#" role="menuitem">Assisted Living</a>
                  </div>
                </li> */}

                <li className={`dropdown ${openDropdown === "ltc" ? "is-open" : ""}`}>
                  <a
                    href="#"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === "ltc"}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenDropdown((d) => (d === "ltc" ? null : "ltc"));
                    }}
                    onKeyDown={(e) => {
                      if (["Enter", " ", "ArrowDown"].includes(e.key)) {
                        e.preventDefault();
                        setOpenDropdown("ltc");
                      }
                    }}
                  >
                    Long‑Term & Continuing Care ▾
                  </a>
                  <div className="submenu" role="menu">
                    <a href="#" role="menuitem">Long‑Term Care</a>
                    <a href="#" role="menuitem">Complex Continuing Care</a>
                    <a href="#" role="menuitem">Respite & Convalescent</a>
                  </div>
                </li>

                <li><Link to="/about">About Us</Link></li>
                <li><a href="#">Find a Home</a></li>
                <li><Link to="/careers" className="cta hiring">Hiring Now</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

