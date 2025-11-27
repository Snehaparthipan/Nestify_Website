import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  return (
    <div className="nav-container">
      <nav className="navbar">
        <h1 className="logo">Nestify</h1>

        <ul className="nav-links">
          <Link className="nav-item" to="/">
            Home
          </Link>
          <Link className="nav-item" to="/about">
            About
          </Link>

          <div className="dropdown-wrapper">
            <p
              className="nav-item drop-btn"
              onClick={() => setDropdown(!dropdown)}
            >
              Categories ▾
            </p>

            {dropdown && (
              <ul className="dropdown-menu">
                <Link className="drop-item" to="/kitchen">
                  Kitchen
                </Link>
                <Link className="drop-item" to="/bedroom">
                  Bedroom
                </Link>
                <Link className="drop-item" to="/dining">
                  Dining Room
                </Link>
                <Link className="drop-item" to="/living">
                  Living Room
                </Link>
              </ul>
            )}
          </div>

          <Link className="nav-item" to="/contact">
            Contact
          </Link>

          {/* Cart Icon */}
          <i
            className="fa-solid fa-cart-shopping cart"
            onClick={() => setCartOpen(!cartOpen)}
          ></i>

          {/* Wishlist Icon */}
          <i
            className="fa-solid fa-heart wishlist"
            onClick={() => setWishlistOpen(!wishlistOpen)}
          ></i>
        </ul>

        <button className="menu-btn" onClick={() => setMobileMenu(!mobileMenu)}>
          ☰
        </button>
      </nav>

      {/* Cart Dropdown */}
      {cartOpen && (
        <ul className="cart-dropdown">
          {cartItems.length === 0 ? (
            <li>Your cart is empty!</li>
          ) : (
            cartItems.map((item, index) => <li key={index}>{item.name}</li>)
          )}
        </ul>
      )}

      {/* Wishlist Dropdown */}
      {wishlistOpen && (
        <ul className="wishlist-dropdown">
          {wishlistItems.length === 0 ? (
            <li>Your wishlist is empty!</li>
          ) : (
            wishlistItems.map((item, index) => <li key={index}>{item.name}</li>)
          )}
        </ul>
      )}

      {/* Mobile Menu */}
      {mobileMenu && (
        <ul className="mobile-menu">
          <Link className="mobile-item" to="/">
            Home
          </Link>
          <Link className="mobile-item" to="/about">
            About
          </Link>

          <button
            className="mobile-item drop-btn"
            onClick={() => setDropdown(!dropdown)}
          >
            Categories ▾
          </button>

          {dropdown && (
            <ul className="mobile-dropdown">
              <Link className="drop-item" to="/kitchen">
                Kitchen
              </Link>
              <Link className="drop-item" to="/bedroom">
                Bedroom
              </Link>
              <Link className="drop-item" to="/dining">
                Dining Room
              </Link>
              <Link className="drop-item" to="/living">
                Living Room
              </Link>
            </ul>
          )}

          <Link className="mobile-item" to="/contact">
            Contact
          </Link>

          {/* Mobile Cart */}
          <i
            className="mobile-item fa-solid fa-cart-shopping"
            onClick={() => setCartOpen(!cartOpen)}
          ></i>

          {/* Mobile Wishlist */}
          <i
            className="mobile-item fa-solid fa-heart"
            onClick={() => setWishlistOpen(!wishlistOpen)}
          ></i>
        </ul>
      )}
    </div>
  );
}
