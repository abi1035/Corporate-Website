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
   

      {/* Sticky main header */}
<header className="sticky hero-header" role="banner">
  <div className="container">
    {/* Utility Row */}
    <div className="util-row">
      <div className="util-left">
        <a className="badge" style={{color: "#000",}} href="#">Family Resources</a>
        <a href="#">Uplifting News</a>
        <a href="#">Our Advertising</a>
        <a href="#">Our Blog</a>
        <a href="#">Investors</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="util-right">
        <span className="phone">📞 1-833-718-5050</span>
      </div>
    </div>

    {/* Main Nav Row */}
    <div className="nav">
      <a className="brand" href="#">
        <img src="./Logo1.png" alt="Logo"/>
      </a>

      {/* Mobile Hamburger */}
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
            <li className={`dropdown ${openDropdown === "ltc" ? "is-open" : ""}`}>
              <a href="#" onClick={(e)=>{ e.preventDefault(); setOpenDropdown(openDropdown==="ltc"?null:"ltc"); }}>
                Long-Term & Continuing Care ▾
              </a>
              <div className="submenu">
                <a href="#">Long-Term Care</a>
                <a href="#">Complex Continuing Care</a>
                <a href="#">Respite & Convalescent</a>
              </div>
            </li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Find a Home</a></li>
            <li><a href="#" className="cta hiring">Hiring Now</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
    <div className="hero-content">
    <h1>We’re here to make your life better.</h1>
    {/* <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.</p> */}
    <a href="#learn-more" className="hero-btn">Discover More</a>
  </div>
</header>

    </>
  );
}

