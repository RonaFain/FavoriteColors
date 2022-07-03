import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

export function AppHeader() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const classOpen = isMenuOpen ? 'open' : ''

  return (
    <header className="app-header full">
      <div className={`screen-overlay ${classOpen}`} onClick={toggleMenu}></div>
      <div className="main-layout">
        <div className="header-container">
          <NavLink to="/" className="logo">
            Logo
          </NavLink>
          <nav className={`nav-container ${classOpen}`}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
          </nav>
          <GiHamburgerMenu className="hamburger-icon" onClick={toggleMenu} />
        </div>
      </div>
    </header>
  )
}
