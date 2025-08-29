import "./Footer.css";


export default function Footer(){


    return(
        <>
    <footer className="site-footer">
        <div className="container footer__grid">
    {/* Brand */}
    <a href="/" className="footer__brand" aria-label="Primacare home">
      <img className="lastSectionLogo" src="/Logo1.png" alt="Primacare logo" />
    </a>

    {/* Footer navigation */}
    <nav aria-label="Footer">
      <ul className="footer__links">
        <li><a href="/policies">Policies</a></li>
        <li><a href="/homes">Our Homes</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/careers">Join Us</a></li>
        <li><a href="/news">News</a></li>
      </ul>
    </nav>

    {/* Social icons */}
    <div className="footer__social" aria-label="Social media">
      <a className="icon" href="https://www.linkedin.com/" aria-label="LinkedIn">
        {/* LinkedIn SVG */}
        <svg viewBox="0 0 24 24" width="22" height="22" role="img">
          <path fill="#0A66C2"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.036-1.85-3.036-1.853 0-2.136 1.447-2.136 2.942v5.663H9.352V9h3.414v1.561h.048c.476-.9 1.638-1.85 3.372-1.85 3.609 0 4.274 2.376 4.274 5.465v6.276zM5.337 7.433A2.062 2.062 0 1 1 5.34 3.31a2.062 2.062 0 0 1-.003 4.123zM6.999 20.452H3.67V9h3.329v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.73V22.27C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.27V1.73C24 .774 23.2 0 22.225 0z" />
        </svg>
      </a>
      <a className="icon" href="https://www.instagram.com/" aria-label="Instagram">
        {/* Instagram SVG */}
        <svg viewBox="0 0 24 24" width="22" height="22" role="img">
          <path fill="#E1306C"
            d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18 5.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
        </svg>
      </a>
    </div>
  </div>

  {/* Bottom bar */}
  <div className="footer__bar">
    <div className="container footer__barInner">
      <p className="footerText">© {new Date().getFullYear()} Primacare Living Solutions. All rights reserved.</p>
      <a className="footer__phone" href="tel:1-416-243-9019">1-416-243-9019</a>
    </div>
  </div>
</footer>  
        </>
    )
}