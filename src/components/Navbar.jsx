import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <span className="logo-highlight">Mr.</span> Tea Cafe
        </NavLink>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/menu" onClick={closeMenu}>Menu</NavLink>
          <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

          <NavLink to="/contact" className="nav-cta" onClick={closeMenu}>
            Order Now
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
