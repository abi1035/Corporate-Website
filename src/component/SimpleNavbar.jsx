import { Link } from "react-router-dom";
import "./SimpleNavbar.css";

export default function SimpleNavbar() {
  return (
    <header className="simple-navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <Link to='/'><img src="/Logo1.png" alt="Primacare Logo" /></Link>
        </div>

        {/* Nav Links */}
        <nav>
          <ul className="nav-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/teams">Our Teams</Link></li>
            <li><Link to="/benefits">Benefits</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/saved-jobs">Saved Jobs (0)</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
