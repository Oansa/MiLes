import { useState } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">MiLes</span>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#what-we-do" onClick={() => setIsMenuOpen(false)}>What We Do</a>
          <a href="#capabilities" onClick={() => setIsMenuOpen(false)}>Capabilities</a>
          <a href="#who-its-for" onClick={() => setIsMenuOpen(false)}>Who It's For</a>
        </nav>
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
