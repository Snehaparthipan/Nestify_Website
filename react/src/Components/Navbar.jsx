import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    setMobileDropdown(false);
  };

  return (
    <div className="nav-container">
      <nav className="navbar">
        <h1 className="logo">Nestify</h1>

        {/* <input type="text" placeholder="search" className="searchbar" /> */}
        <Link className="req" to="/Consultant">Request Consultant</Link>

        <ul className="nav-links">
          <Link className="nav-item" to="/">Home</Link>
          <Link className="nav-item" to="/about">About</Link>

          <div className="dropdown-wrapper">
            <p className="nav-item drop-btn" onClick={() => setDesktopDropdown(!desktopDropdown)}>
              Categories ▾
            </p>
            {desktopDropdown && (
              <ul className="dropdown-menu">
                <Link className="drop-item" to="/kitchen">Kitchen</Link>
                <Link className="drop-item" to="/bedroom">Bedroom</Link>
                <Link className="drop-item" to="/dining">Dining Room</Link>
                <Link className="drop-item" to="/living">Living Room</Link>
              </ul>
            )}
          </div>

          <Link className="nav-item" to="/contact">Contact</Link>
        </ul>

        <button className="menu-btn" onClick={toggleMobileMenu}>
          {mobileMenu ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenu && (
        <ul className="mobile-menu show">
          {/* <input type="text" placeholder="search" className="searchbar-mobile" /> */}
          <Link className="req-mobile" to="/Consultant">Request Consultant</Link>

          <Link className="mobile-item" to="/" onClick={toggleMobileMenu}>Home</Link>
          <Link className="mobile-item" to="/about" onClick={toggleMobileMenu}>About</Link>

          <button className="mobile-item drop-btn" onClick={() => setMobileDropdown(!mobileDropdown)}>
            Categories ▾
          </button>

          {mobileDropdown && (
            <ul className="mobile-dropdown show">
              <Link className="drop-item" to="/kitchen" onClick={toggleMobileMenu}>Kitchen</Link>
              <Link className="drop-item" to="/bedroom" onClick={toggleMobileMenu}>Bedroom</Link>
              <Link className="drop-item" to="/dining" onClick={toggleMobileMenu}>Dining Room</Link>
              <Link className="drop-item" to="/living" onClick={toggleMobileMenu}>Living Room</Link>
            </ul>
          )}

          <Link className="mobile-item" to="/contact" onClick={toggleMobileMenu}>Contact</Link>
        </ul>
      )}
    </div>
  );
}
