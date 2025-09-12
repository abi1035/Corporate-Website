// File: src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link,useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // "retirement" | "ltc" | null
  const wrapRef = useRef(null);
  const location = useLocation();
  // const [policiesOpen, setPoliciesOpen] = useState(false);




    // Default hero text
  let heroText = (
    <>
      We’re here to make your life <span>better.</span>
    </>
  );

  // Override for Burton path
  if (location.pathname === "/burton") {
    heroText = (
      <>
        Dedicated to making life brighter, <span>together.</span>
      </>
    );
  }


   const pageClass = location.pathname === "/burton" ? "burton-header" : "";

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
<header className={`sticky hero-header ${pageClass}`} role="banner">
  <div className="container">
    {/* Utility Row */}
    <div className="util-row">
<div className="util-left">
  <a className="badge" style={{ color: "#000" }} href="#">Family Resources</a>
  <a href="#">Uplifting News</a>
  <a href="#">Our Advertising</a>

  {/* Quality Dropdown */}
  <div
    className="util-dropdown"
    onMouseEnter={() => setOpenDropdown("quality")}
    onMouseLeave={() => setOpenDropdown(null)}
  >
    <a href="#" className="util-trigger">Quality ▾</a>

    <div className={`util-panel ${openDropdown === "quality" ? "open" : ""}`}>
      <div className="util-columns">
        {/* Column 1 */}
        <div className="util-col">
          <h3>Accreditation</h3>
          <ul>
            <li>CARF Accreditation</li>
            <li>BSPO Standards</li>
            <li>Resident Satisfaction Surveys</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="util-col">
          <h3>Quality Programs</h3>
          <ul>
            <li>Falls Prevention</li>
            <li>Infection Control</li>
            <li>Medication Safety</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="util-col">
          <h3>Continuous Improvement</h3>
          <ul>
            <li>QIP (Quality Improvement Plan)</li>
            <li>Internal Audits</li>
            <li>Best Practice Initiatives</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <a href="#">Investors</a>

  {/* Policies Dropdown */}
  <div
    className="util-dropdown"
    onMouseEnter={() => setOpenDropdown("policies")}
    onMouseLeave={() => setOpenDropdown(null)}
  >
    <a href="#" className="util-trigger">Policies ▾</a>

    <div className={`util-panel ${openDropdown === "policies" ? "open" : ""}`}>
      <div className="util-columns">
        {/* Column 1 */}
        <div className="util-col">
          <h3>Policies</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Accessibility Policy</li>
            <li>Multi-Year Accessibility Plan</li>
            <li>AODA Accessibility Feedback Process</li>
            <li>AODA Customer Service Feedback</li>
            <li>Visitor Policy</li>
            <li>COVID-19 Testing Policy</li>
            <li>Passive Screening</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="util-col">
          <h3>Emergency Management</h3>
          <ul>
            <li>Emergency Management Plan for Burton Manor</li>
            <li>Emergency Management Plan for Henley House</li>
            <li>Emergency Management Plan for Henley Place</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
      <div className="util-right">
        <span className="phone">📞 1-416-243-9019</span>
      </div>
    </div>

    {/* Main Nav Row */}
    <div className="nav">
  
        
        <div className="brand"><Link to="/"><img  src="./Logo1.png" alt="Logo"/></Link></div>

      

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
                Homes ▾
              </a>
              <div className="submenu">
                <Link to='/burton'>Burton Manor</Link>
                <a href="#">Henley House</a>
                <a href="#">Henley Place</a>
              </div>
            </li>
            <li><Link to='/about'>About Us</Link></li>
            <li><a href="#">Events</a></li>
            <li><Link to="/careers" className="cta hiring">Hiring Now</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
    <div className="hero-content">
    <h1>{heroText}</h1>
    {/* <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.</p> */}
    <Link to='/about'><div className="hero-btn">Discover More</div></Link>
  </div>
</header>

    </>
  );
}

