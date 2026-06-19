import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiHeart, FiArrowUp, FiInstagram } from 'react-icons/fi'
import { HiCode } from 'react-icons/hi'

const NAV_LINKS = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Education',    href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',      href: '#contact' },
]

const SOCIALS = [
  { icon: <FiGithub />,    href: 'https://github.com/rutik-mahamulkar',          label: 'GitHub',    color: '#e2e8f0' },
  { icon: <FiLinkedin />,  href: 'https://www.linkedin.com/in/rutikmahamulkar/', label: 'LinkedIn',  color: '#0a66c2' },
  { icon: <FiInstagram />, href: 'https://www.instagram.com/_.mr_rutik._',       label: 'Instagram', color: '#e1306c' },
  { icon: <FiMail />,      href: 'mailto:rutikmahamulkar74@gmail.com',            label: 'Email',     color: '#3b82f6' },
]

const TECH_STACK = ['React.js', 'Framer Motion', 'Vite', 'CSS3']

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.getElementById(href.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer-divider" />

      <div className="container">

        <div className="footer-grid">

          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-bracket">&lt;</span>
              <span className="footer-logo-name">RM</span>
              <span className="footer-logo-bracket"> /&gt;</span>
            </div>
            <p className="footer-bio">
              Full Stack Developer passionate about building modern web applications
              with React, Python &amp; SQL.
            </p>

            <div className="footer-socials">
              {SOCIALS.map(({ icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label={label}
                  title={label}
                  style={{ '--sc': color }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.93 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>

            <div className="footer-built">
              <HiCode className="built-icon" />
              <span>Built with</span>
              {TECH_STACK.map((t, i) => (
                <span key={t}>
                  <span className="built-tech">{t}</span>
                  {i < TECH_STACK.length - 1 && <span className="built-sep">·</span>}
                </span>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <nav className="footer-nav">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="footer-nav-link"
                  onClick={e => { e.preventDefault(); scrollTo(href) }}
                >
                  <span className="footer-nav-arrow">›</span>
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact-list">
              {[
                { icon: <FiMail />,  href: 'mailto:rutikmahamulkar74@gmail.com', value: 'rutikmahamulkar74@gmail.com', color: '#3b82f6' },
                { icon: <FiPhone />, href: 'tel:+918459627009',                  value: '+91 8459627009',              color: '#22c55e' },
                { icon: <FiMapPin />,href: null,                                  value: 'Satara, Maharashtra',         color: '#a78bfa' },
              ].map(({ icon, href, value, color }) => (
                <div key={value} className="footer-contact-item">
                  <span className="footer-contact-icon" style={{ color }}>{icon}</span>
                  {href
                    ? <a href={href} className="footer-contact-value" style={{ '--sc': color }}>{value}</a>
                    : <span className="footer-contact-value-plain">{value}</span>
                  }
                </div>
              ))}
            </div>

            <div className="footer-availability">
              <span className="avail-dot" />
              <span>Open to opportunities</span>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 <span className="gradient-text">Rutik Santosh Mahamulkar</span>. All rights reserved.
          </p>
          <p className="footer-made">
            Made with <FiHeart className="heart-icon" /> in India
          </p>
          <button className="footer-back-top" onClick={scrollTop} aria-label="Back to top">
            <FiArrowUp /> Back to top
          </button>
        </div>

      </div>

      <style>{`
        .footer {
          position: relative;
          z-index: 1;
          background: rgba(5,5,12,0.96);
          backdrop-filter: blur(12px);
        }
        .footer-divider {
          height: 1px;
          background: linear-gradient(90deg,
            transparent,
            rgba(108,99,255,0.5),
            rgba(59,130,246,0.5),
            rgba(78,205,196,0.3),
            transparent);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1.4fr;
          gap: 3rem;
          padding: 3.5rem 0 2.5rem;
        }

        .footer-brand { display: flex; flex-direction: column; gap: 1rem; }
        .footer-logo {
          font-family: 'Fira Code', monospace;
          font-size: 1.6rem;
          font-weight: 900;
          line-height: 1;
        }
        .footer-logo-bracket { color: var(--primary); }
        .footer-logo-name    { color: var(--text-primary); }
        .footer-bio {
          color: var(--text-secondary);
          font-size: 0.86rem;
          line-height: 1.65;
          max-width: 280px;
        }

        .footer-socials { display: flex; gap: 0.6rem; }
        .footer-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 1rem;
          transition: all 0.2s;
        }
        .footer-social-btn:hover {
          color: var(--sc, var(--primary));
          border-color: var(--sc, var(--primary));
          background: rgba(255,255,255,0.08);
          box-shadow: 0 0 12px rgba(255,255,255,0.06);
        }

        .footer-built {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.35rem;
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .built-icon { color: var(--primary); font-size: 0.9rem; }
        .built-tech { color: var(--accent); font-weight: 600; }
        .built-sep  { color: var(--text-muted); margin: 0 0.1rem; }

        .footer-col { display: flex; flex-direction: column; gap: 1rem; }
        .footer-col-title {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: var(--text-muted);
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border);
        }

        .footer-nav { display: flex; flex-direction: column; gap: 0.4rem; }
        .footer-nav-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.86rem;
          padding: 0.2rem 0;
          transition: all 0.2s;
          cursor: pointer;
          width: fit-content;
        }
        .footer-nav-arrow {
          color: var(--primary);
          font-size: 1rem;
          line-height: 1;
          transition: transform 0.2s;
        }
        .footer-nav-link:hover {
          color: var(--text-primary);
          padding-left: 0.25rem;
        }
        .footer-nav-link:hover .footer-nav-arrow {
          transform: translateX(3px);
        }

        .footer-contact-list { display: flex; flex-direction: column; gap: 0.65rem; }
        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .footer-contact-icon { font-size: 0.9rem; flex-shrink: 0; }
        .footer-contact-value {
          font-size: 0.8rem;
          color: var(--text-secondary);
          text-decoration: none;
          word-break: break-all;
          transition: color 0.2s;
        }
        a.footer-contact-value:hover { color: var(--sc, var(--primary)); }
        .footer-contact-value-plain {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .footer-availability {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          background: rgba(34,197,94,0.08);
          border: 1px solid rgba(34,197,94,0.22);
          border-radius: 50px;
          font-size: 0.72rem;
          font-weight: 600;
          color: #22c55e;
          width: fit-content;
          margin-top: 0.25rem;
        }
        .avail-dot {
          width: 7px;
          height: 7px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 8px #22c55e;
          animation: availPulse 2s ease infinite;
        }
        @keyframes availPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:.4; transform:scale(.75); }
        }

        .footer-bottom {
          border-top: 1px solid var(--border);
          padding: 1.5rem 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .footer-copy {
          color: var(--text-secondary);
          font-size: 0.82rem;
        }
        .footer-made {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--text-muted);
          font-size: 0.78rem;
        }
        .heart-icon {
          color: #ef4444;
          animation: heartBeat 1.6s ease infinite;
        }
        @keyframes heartBeat {
          0%,100% { transform:scale(1); }
          50%      { transform:scale(1.25); }
        }
        .footer-back-top {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.4rem 0.9rem;
          background: rgba(108,99,255,0.1);
          border: 1px solid rgba(108,99,255,0.25);
          border-radius: 50px;
          color: var(--accent);
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s;
        }
        .footer-back-top:hover {
          background: rgba(108,99,255,0.2);
          transform: translateY(-2px);
        }

        @media (max-width: 860px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr; gap: 1.75rem; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </footer>
  )
}
