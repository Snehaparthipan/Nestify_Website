import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="nav-container">
      <nav className="navbar">
        <h1 className="logo">Nestify</h1>

        <ul className="nav-links">
          <Link className="nav-item" to="/">Home</Link>
          <Link className="nav-item" to="/about">About</Link>

          <div className="dropdown-wrapper">
            <p className="nav-item drop-btn" onClick={() => setDropdown(!dropdown)}>
              Categories ▾
            </p>

            {dropdown && (
              <ul className="dropdown-menu">
                <Link className="drop-item" to="/kitchen">Kitchen</Link>
                <Link className="drop-item" to="/bedroom">Bedroom</Link>
                <Link className="drop-item" to="/dining">Dining Room</Link>
                <Link className="drop-item" to="/living">Living Room</Link>
              </ul>
            )}
          </div>

          <Link className="nav-item" to="/contact">Contact</Link>
          <i className="fa-solid fa-cart-shopping cart"></i>
        </ul>

        <button className="menu-btn" onClick={() => setMobileMenu(!mobileMenu)}>☰</button>
      </nav>

      {mobileMenu && (
        <ul className="mobile-menu">
          <Link className="mobile-item" to="/">Home</Link>
          <Link className="mobile-item" to="/about">About</Link>

          <button className="mobile-item drop-btn" onClick={() => setDropdown(!dropdown)}>
            Categories ▾
          </button>

          {dropdown && (
            <ul className="mobile-dropdown">
              <Link className="drop-item" to="/kitchen">Kitchen</Link>
              <Link className="drop-item" to="/bedroom">Bedroom</Link>
              <Link className="drop-item" to="/dining">Dining Room</Link>
              <Link className="drop-item" to="/living">Living Room</Link>
            </ul>
          )}

          <Link className="mobile-item" to="/contact">Contact</Link>
        </ul>
      )}
    </div>
  );
}
