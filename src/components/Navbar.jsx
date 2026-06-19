import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = NAV_LINKS.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-inner container">
        <a className="navbar-logo" onClick={() => handleNav('#home')} href="#home">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">RM</span>
          <span className="logo-bracket"> /&gt;</span>
        </a>

        <ul className="navbar-links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`nav-link ${active === href.replace('#', '') ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNav(href) }}
              >
                {label}
                {active === href.replace('#', '') && (
                  <motion.span className="nav-dot" layoutId="navDot" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                className={`mobile-link ${active === href.replace('#', '') ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNav(href) }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          padding: 1rem 0;
          transition: all 0.3s ease;
        }
        .navbar.scrolled {
          background: rgba(10, 10, 15, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 0.65rem 0;
          box-shadow: 0 4px 30px rgba(0,0,0,0.3);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar-logo {
          font-family: 'Fira Code', monospace;
          font-size: 1.3rem;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.1rem;
        }
        .logo-bracket {
          color: var(--primary);
        }
        .logo-name {
          color: var(--text-primary);
          font-weight: 800;
        }
        .navbar-links {
          display: flex;
          list-style: none;
          gap: 0.25rem;
          align-items: center;
        }
        .nav-link {
          position: relative;
          padding: 0.45rem 0.9rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: 8px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(255,255,255,0.05);
        }
        .nav-link.active {
          color: var(--primary);
        }
        .nav-dot {
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          background: var(--primary);
          border-radius: 50%;
        }
        .hamburger {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.4rem;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .hamburger:hover {
          background: rgba(255,255,255,0.08);
        }
        .mobile-menu {
          overflow: hidden;
          background: rgba(10, 10, 15, 0.97);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex;
          flex-direction: column;
          padding: 1rem;
          gap: 0.25rem;
        }
        .mobile-link {
          padding: 0.75rem 1rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          border-radius: 10px;
          transition: all 0.2s;
        }
        .mobile-link:hover, .mobile-link.active {
          color: var(--primary);
          background: rgba(108, 99, 255, 0.08);
        }
        @media (max-width: 768px) {
          .navbar-links { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>
    </motion.nav>
  )
}
